class LocalStorageService {
  public set(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  public get<T>(key: string): T | null {
    const value = localStorage.getItem(key);

    if (value) {
      try {
        return JSON.parse(value);
      } catch {
        return (value as any) as T;
      }
    }
    return null;
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }
}

export const localStorageService = new LocalStorageService();
