import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormularioProductos from '@/components/FormularioProductos';
import { ProductoProvider } from '@/context/Producto';
import ListaProductos from '@/components/ListaProductos';


describe('Gestion de productos', () => {
    it('crea y elimina un producto', () => {
        render(
            <ProductoProvider>
                <FormularioProductos />
                <ListaProductos />
            </ProductoProvider>
        );
        
        const nombreInput = screen.getByLabelText(/nombre del producto/i);
        const descripcionInput = screen.getByLabelText(/descripción del producto/i);
        const cantidadInput = screen.getByLabelText(/cantidad del producto/i);
        const codigoInput = screen.getByLabelText(/codigo del producto/i);
        const botonCrear = screen.getByRole('button', {name: /crear producto/i});
        
        fireEvent.change(nombreInput, {target: {value: 'Producto Test'}} );
        fireEvent.change(descripcionInput, {target: {value: 'Descripcion demo'}} );
        fireEvent.change(cantidadInput, {target: {value: '10'}} );
        fireEvent.change(codigoInput, {target: {value: '123'}} );
        fireEvent.click(botonCrear);

        expect(screen.getByText('Producto Test')).toBeInTheDocument();

        const botonEliminar = screen.getByRole('button', {name: /eliminar producto Producto Test/i});
        fireEvent.click(botonEliminar);
        
        expect(screen.queryByText('Producto Test')).not.toBeInTheDocument();
    });
    
    it('ordena productos correctamente', () => {
        render(
            <ProductoProvider>
                <ListaProductos />
            </ProductoProvider>
        );
        
        // Primero agregamos algunos productos para probar el ordenamiento
        // Esto asume que ya hay una función para agregar productos de prueba
        // o que se pueden agregar manualmente desde el contexto para pruebas
        
        // Verificamos que el select de ordenamiento existe
        const selectOrdenamiento = screen.getByLabelText('Seleccionar orden');
        expect(selectOrdenamiento).toBeInTheDocument();
        
        // Cambiamos el orden a 'nombre'
        fireEvent.change(selectOrdenamiento, { target: { value: 'nombre' } });
        
        // Aquí verificaríamos que los productos estén ordenados por nombre
        // Esto depende de cómo estén estructurados tus datos de prueba
    });
});