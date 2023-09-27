import React from 'react';
import { getStorage } from "firebase/storage";
import { createContext } from 'react';
import { app } from '../firebase/firabse.config';

const storage = getStorage(app);
export const StorageContext = createContext();

const StorageProvider = ({ children }) => {

    const storageInfo = {
        storage
    }

    return (
        <StorageContext.Provider value={storageInfo}>
            {children}
        </StorageContext.Provider>
    );
};

export default StorageProvider;