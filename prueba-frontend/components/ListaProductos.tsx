'use client';

import { useProductos } from "@/context/Producto";
import { Input } from "./UI/input";
import { Button } from "./UI/Button";

const ListaProductos = () => {
    const {productos, eliminarProducto, setFiltro} = useProductos();
    
    return (
        <div className="space-y-6" aria-label="Listado de productos">
            <h4 className='text-xl font-semibold text-gray-400'>Buscar</h4>
            <Input
            aria-label="Buscar producto por nombre"
            placeholder="Buscar por nombre..."
            onChange={e =>setFiltro(e.target.value)}
            />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {productos.map(p => (
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