'use client'

import { useState } from 'react';
import {useProductos} from '@/context/Producto';
import { Input } from './UI/input';
import { Button } from './UI/Button';




const FormularioProducto = () => {

    const {crearProducto} = useProductos();
    const [form, setForm] = useState({codigo: 0, nombre: '', descripcion: '', cantidad: 0 });

    const manejarSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        crearProducto(form);
        setForm({codigo:0, nombre: '', descripcion: '', cantidad: 0});
    };

    return (
        <form 
            onSubmit={manejarSubmit}
            className="bg-white p-6 rounded-xl shadow-lg space-y-4 border border-gray-100"
            aria-label="Formulario para crear producto"
        >
            <h2 className='text-xl font-semibold text-gray-700'>Nuevo Producto</h2>
            <Input
                aria-label='Código del producto'
                placeholder='Código'
                type='number'
                value={form.codigo}
                onChange={e => setForm({...form, codigo: +e.target.value })}
                required
            ></Input>
            <Input
                aria-label='Nombre del producto'
                placeholder='Nombre'
                value={form.nombre}
                onChange={e => setForm({...form, nombre: e.target.value })}
                required
            ></Input>
            <Input
                aria-label='Descripción del producto'
                placeholder='Descripción'
                value={form.descripcion}
                onChange={e => setForm({...form, descripcion: e.target.value })}
                required
            ></Input>
            <Input
                aria-label='Cantidad del producto'
                placeholder='Cantidad'
                value={form.cantidad}
                onChange={e => setForm({...form, cantidad: +e.target.value })}
                required
            ></Input>
            <Button type='submit' aria-label='boton para crear producto'>Crear Producto</Button>
        </form>
    )


};
export default FormularioProducto;