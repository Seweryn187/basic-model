import { Injectable } from '@angular/core';
import { WebStorageKey } from '../models/web-storage-keys.enum';

@Injectable({
  providedIn: 'root',
})
export class WebStorageService {
  public getLocalStorage<T>(key: WebStorageKey): T | null {
    const data = localStorage.getItem(key);
    if (this.isJson(data)) {
      return JSON.parse(data as string) as T;
    } else {
      return data as unknown as T;
    }
  }

  public setLocalStorage(key: WebStorageKey, data: any): void {
    if (this.isJson(data)) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, data);
    }
  }
  public isJson(item: any): boolean {
    item = typeof item !== 'string' ? JSON.stringify(item) : item;
    try {
      item = JSON.parse(item);
    } catch (e) {
      return false;
    }
    if (typeof item === 'object' && item !== null) {
      return true;
    }
    return false;
  }
  public popLocalStorage<T>(key: WebStorageKey): T {
    const localData = this.getLocalStorage<T>(key);
    if (localData) {
      localStorage.removeItem(key);
    }
    return localData as T;
  }

  public getSessionStorage<T>(key: WebStorageKey): T | null {
    return JSON.parse(sessionStorage.getItem(key) as string) as T;
  }

  public setSessionStorage(key: WebStorageKey, data: any): void {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
  public signOut(): void {
    localStorage.clear();
  }
}
