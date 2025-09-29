# Agrodas - Sitio Web Corporativo

Sitio web onepage para Agrodas (Agroservicios del Sur), representantes de Nidera y miembros de la Red.in.

## Características

- **Next.js 14** con App Router
- **Tailwind CSS** para estilos
- **Lucide React** para iconos
- **TypeScript** para tipado
- **Diseño responsive** y moderno
- **Scroll suave** entre secciones
- **Componentes modulares**

## Secciones

1. **Hero/Header** - Presentación principal
2. **Quiénes somos** - Información de la empresa
3. **Nuestro equipo** - Perfiles del equipo
4. **Catálogo** - Productos disponibles
5. **Servicios adicionales** - Servicios complementarios
6. **Testimoniales** - Opiniones de clientes
7. **Información y Reportes** - Documentación técnica
8. **Contacto** - Formulario y datos de contacto
9. **Footer** - Enlaces y información adicional

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## Configuración

### WhatsApp
Actualizar el número de WhatsApp en:
- `components/Contact.tsx`
- `components/Footer.tsx`
- `components/Hero.tsx`

### Información de contacto
Modificar los datos de contacto en los componentes correspondientes.

## Tecnologías

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React

## Estructura del proyecto

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Team.tsx
│   ├── Catalog.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── Reports.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```
