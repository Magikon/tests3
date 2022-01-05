/**
 * AsyncStore provides API for IOS and Android storages, similar web localstorage
 * Basically it's used for caching the data
 */
export default {
    getItem: async (key: string, defaultValue?: any): Promise<any> => {
        const value = await localStorage.getItem(key);

        if (!value) {
            return defaultValue;
        }

        return JSON.parse(value);
    },
    setItem: async (key: string, value: any): Promise<void> => {
        await localStorage.setItem(key, JSON.stringify(value));
    },
    removeItem: async (key: string): Promise<void> => {
        await localStorage.removeItem(key);
    },
};
