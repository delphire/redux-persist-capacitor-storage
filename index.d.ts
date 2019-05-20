declare module 'redux-persist-capacitor-storage' {


  const CapacitorEngineStorage: {

    setItem: (
      key: string,
      value?: string,
      callback?: (error?: Error) => void,
    ) => Promise<void>

    getItem: (
      key: string,
      callback: (error?: Error, result?: string) => void,
    ) => Promise<string | undefined>

    removeItem: (
      key: string,
      callback: (error?: Error) => void,
    ) => Promise<undefined>

    getAllKeys: (
      callback: (error?: Error, keys?: Array<string>) => void,
    ) => Promise<string[]> | Promise<undefined>

    clear: (callback: (error?: Error) => void) => Promise<boolean>
  }

  export default CapacitorEngineStorage
}
