'use client';

import { createContext, useContext, useState, useEffect } from "react";
import crypto from 'crypto';

export interface Producto {
    id: string;
    codigo: number;
    nombre: string;
    descripcion: string;
    cantidad: number;
    creacion: string;
}

interface ProductoContextType {
    productos: Producto[];
    crearProducto: (p: Omit<Producto, 'id' | 'creacion'>) => void;
    eliminarProducto: (id: string) => void;
    setFiltro: (filtro:string) => void;    
}

const ProductoContext = createContext<ProductoContextType | undefined>(undefined);

export const useProductos = () => {
    const context = useContext(ProductoContext);
    if(!context) {
        throw new Error('useProductos debe usarse dentro de un ProductoProvider');
    }
    return context;    
};

export const ProductoProvider = ({children}: {children: React.ReactNode}) => {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [filtro, setFiltro] = useState('');

    useEffect(() => {
        const almacenados = localStorage.getItem('productos');
        if (almacenados) setProductos(JSON.parse(almacenados));
    }, []);
    useEffect(() => {
        localStorage.setItem('productos', JSON.stringify(productos));
    }, [productos]);

    const generarId = () => crypto.randomUUID();

    const crearProducto = (producto: Omit<Producto, 'id' | 'creacion'>) => {
        const nuevo = { ...producto, id: generarId(), creacion: new Date().toISOString()};
        setProductos(prev => [...prev, nuevo]);
    };
    const eliminarProducto = (id:string) => {
        setProductos(prev => prev.filter(p=> p.id !== id));
    };

    const productosFiltrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <ProductoContext.Provider value={{productos: productosFiltrados, crearProducto, eliminarProducto, setFiltro }}> 
        {children}
        </ProductoContext.Provider>
    );

};

