'use client';

import dynamic from 'next/dynamic';
import { ProductoProvider } from '@/context/Producto';

// Importación dinámica de componentes pesados
const FormularioProducto = dynamic(() => import('@/components/FormularioProductos'));
const ListaProductos = dynamic(() => import('@/components/ListaProductos'));

export default function Home() {
  return (
    <ProductoProvider>
      <main className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="text-4xl font-extrabold text-center text-indigo-700">
            Gestión de Productos
          </h1>
          <FormularioProducto />
          <ListaProductos />
        </div>
      </main>
    </ProductoProvider>
  );
}
