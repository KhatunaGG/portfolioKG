'use client'
import { createContext, ReactNode, useEffect, useState } from "react";
import { items } from './data';

type GlobalContextType = {
    data: DataType[];
}

type DataType = {
    id: number;
    title: string;
    img: string;
    desc: string;
}




export const GlobalContext = createContext<GlobalContextType | null>(null);


function GlobalContextProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<DataType[]>([]);

    useEffect(() => {
        setData(items);
    }, []); 

    return (
        <GlobalContext.Provider value={{
            data
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;
