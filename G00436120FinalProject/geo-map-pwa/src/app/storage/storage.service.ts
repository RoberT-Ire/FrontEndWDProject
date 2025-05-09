// This service handles saving and loading a single value in local storage.
// It's used in the search page to remember what the user last searched for.
// Capacitor Preferences is used to save the value on device or browser.

import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // Save a value to preferences with the key 'lastSearch'
  async setLastSearch(value: string): Promise<void> {
    await Preferences.set({ key: 'lastSearch', value });
  }

  // Get the value stored under 'lastSearch' if it exists
  async getLastSearch(): Promise<string | null> {
    const result = await Preferences.get({ key: 'lastSearch' });
    return result.value;
  }
}
