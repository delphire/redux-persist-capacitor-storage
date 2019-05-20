/**
* @flow
*/
import { Plugins } from '@capacitor/core';
import CapacitorDataStorageSqlite from 'capacitor-data-storage-sqlite'

let options = {
  //storagePath: `${RNFetchBlob.fs.dirs.DocumentDir}/persistStore`,
  //encoding: 'utf8',
  //toFileName: (name: string) => name.split(':').join('-'),
  //fromFileName: (name: string) => name.split('-').join(':'),
}

//const pathForKey = (key: string) => `${options.storagePath}/${options.toFileName(key)}`
const { CapacitorDataStorageSqlite } = Plugins;

const CapacitorEngineStorage = {
  // config: (
  //   customOptions: Object,
  // ) => {
  //   options = {
  //     ...options,
  //     ...customOptions,
  //   }
  // },

  setItem: (
    key: string,
    value: string,
    callback?: (error: ?Error) => void,
  ) =>
    CapacitorDataStorageSqlite.set({key:key,value:value})
      .then(() => callback && callback())
      .catch(error => callback && callback(error)),

  getItem: (
    key: string,
    callback: (error: ?Error, result: ?string) => void
  ) =>
    CapacitorDataStorageSqlite.get({key:key})
      .then(data => {
        callback && callback(null, data)
        if (!callback) return data
      })
      .catch(error => {
        callback && callback(error)
        if (!callback) throw error
      }),

  removeItem: (
    key: string,
    callback: (error: ?Error) => void,
  ) =>
    CapacitorDataStorageSqlite.remove({key:key})
      .then(() => callback && callback())
      .catch(error => {
        callback && callback(error)
        if (!callback) throw error
      }),

  // getAllKeys: (
  //   callback: (error: ?Error, keys: ?Array<string>) => void,
  // ) =>
  //   RNFetchBlob.fs.exists(options.storagePath)
  //   .then(exists =>
  //     exists ? true : RNFetchBlob.fs.mkdir(options.storagePath)
  //   )
  //   .then(() =>
  //     RNFetchBlob.fs.ls(options.storagePath)
  //       .then(files => files.map(file => options.fromFileName(file)))
  //       .then(files => {
  //         callback && callback(null, files)
  //         if (!callback) return files
  //       })
  //   )
  //   .catch(error => {
  //     callback && callback(error)
  //     if (!callback) throw error
  //   }),
}

// CapacitorEngineStorage.clear = (
//   callback: (error: ?Error) => void,
// ) =>
//   FilesystemStorage.getAllKeys((error, keys) => {
//     if (error) throw error

//     if (Array.isArray(keys) && keys.length) {
//       const removedKeys = []

//       keys.forEach(key => {
//         FilesystemStorage.removeItem(key, (error: ?Error) => {
//           removedKeys.push(key)
//           if (error && callback) callback(error, false)
//           if (removedKeys.length === keys.length && callback) callback(null, true)
//         })
//       })
//       return true
//     }

//     callback && callback(null, false)
//     return false
//   }).catch(error => {
//     callback && callback(error)
//     if (!callback) throw error
//   })

export default FilesystemStorage
