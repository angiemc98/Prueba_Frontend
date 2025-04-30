#  Prueba Técnica Front-End - Gestión de Productos

## 🚀 Tecnologías utilizadas

- **Next.js 15** con App Router
- **TypeScript**
- **TailwindCSS**
- **Jest + Testing Library**
- **Context API**
- **LocalStorage**
- **Dynamic Imports** (para optimización de carga)

## 📦 Instrucciones para instalar y ejecutar localmente

2. **Instalar dependencias principales del proyecto:**

```bash
npm install
```


3. **Ejecutar la app en modo desarrollo:**

```bash
npm run dev
```

4. **Abrir en el navegador:**

```
http://localhost:3000
```

---
Decisiones técnicas

### 🔹 Elección de tecnologías

- **Next.js 15**: Framework moderno, optimizado para producción, con excelente soporte de routing.
- **TailwindCSS**: Permite construir UIs limpias y responsivas rápidamente sin escribir CSS manual.
- **Context API**: Suficiente para la escala del proyecto, simple, claro y sin sobrecarga.
- **LocalStorage**: Persistencia ligera sin necesidad de backend.

### 🔹 Organización del estado

Se centralizó en `ProductoContext` para que los componentes puedan:
- Crear y eliminar productos.
- Filtrar por nombre.
- Compartir estado global y mantener separación de responsabilidades.

### 🔹 Optimización

- Se usan **dynamic imports** para cargar `FormularioProducto` y `ListaProductos`, mejorando el tiempo de carga inicial.
- Los componentes UI (`Input`, `Button`) son reutilizables y configurables.
