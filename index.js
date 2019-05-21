import { Plugins } from '@capacitor/core';
import * as CapacitorSQLPlugin from 'capacitor-data-storage-sqlite';

async function withCallback(callback, func) {
  try {
    const result = await func();
    if (callback) {
      callback(null, result);
    }
    return result;
  } catch (err) {
    if (callback) {
      callback(err);
    } else {
      throw err;
    }
  }
}

const { CapacitorDataStorageSqlite } = Plugins;

export const CapacitorEngineStorage  = {

  async setItem(key, value, callback) {
    return withCallback(callback, async function() {
      CapacitorDataStorageSqlite.setItem({key:key,value:value})
      .then((response) => {
        return true;
      })
    });
  },

  async getItem(key, callback) {
    return withCallback(callback, async function() {
      CapacitorDataStorageSqlite.setItem({key:key})
      .then((response) => {
        return response;
      })
    });
  }

}


