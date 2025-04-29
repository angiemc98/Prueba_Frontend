'use client';

import { useState } from "react";
import { useProductos } from "@/context/Producto";
import { Input } from "./UI/input";
import { Button } from "./UI/Button";

const ListaProductos = () => {
    const {productos, eliminarProducto, setFiltro} = useProductos();
    const [orden, setOrden] = useState<'nombre' | 'codigo' | 'cantidad' | 'creacion'>('creacion');
    
    const productosOrdenados = [...productos].sort((a, b) => {
        switch (orden){
            case 'nombre':
                return a.nombre.localeCompare(b.nombre);
            case 'codigo':
                return a.codigo - b.codigo;
            case 'cantidad':
                return a.cantidad - b.cantidad;
            case 'creacion':
                return new Date(a.creacion).getTime() - new Date(b.creacion).getTime();          
            default:
                return 0;
        }
    });


    return (
        <div className="space-y-6" aria-label="Listado de productos">
            <h4 className='text-xl font-semibold text-gray-400'>Buscar</h4>
            <Input
            aria-label="Buscar producto por nombre"
            placeholder="Buscar por nombre..."
            onChange={e =>setFiltro(e.target.value)}
            />
            <select
              onChange={(e) => setOrden(e.target.value as 'nombre' | 'codigo' | 'cantidad' | 'creacion')}
            className="p-2 rounded-md border text-sm bg-white"
            aria-label="Seleccionar orden"
            >
                <option value="creacion">Ordenar por: Fecha de creación</option>
                <option value="nombre">Nombre</option>
                <option value="codigo">Código</option>
                <option value="cantidad">Cantidad</option>
            </select>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {productosOrdenados.map(p => (
                    <li
                    key= {p.id}
                    className="bg-white p-4 rounded-xl shadow-md flex flex-col justify-between"
                    >
                        <div className="space-y-1">
                            <h3 className="text-lg font-bold text-gray-800">{p.nombre}</h3>
                            <p className="text-sm text-gray-500">Código: {p.codigo}</p>
                            <p className="text-sm text-gray-500">{p.descripcion}</p>
                            <p className="text-sm text-gray-500">Cantidad: {p.cantidad}</p>
                            <p className="text-xs text-gray-400">
                                creado: {new Date(p.creacion).toLocaleDateString()}
                            </p>
                        </div>
                        <Button
                            variant="destructive"
                            onClick={()=> eliminarProducto(p.id)}
                            aria-label={`Eliminar producto ${p.nombre}`}
                        >
                            Eliminar
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ListaProductos;