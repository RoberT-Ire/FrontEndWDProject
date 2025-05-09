import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async setLastSearch(value: string) {
    await this._storage?.set('lastSearch', value);
  }

  public async getLastSearch(): Promise<string | null> {
    return await this._storage?.get('lastSearch');
  }
}
