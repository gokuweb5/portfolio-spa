# 🚀 Portafolio Profesional - Luis Hernández

Sitio web profesional de portafolio para desarrollador Java & Spring Framework.

## 🌟 Características

- ✨ Diseño moderno y profesional
- 📱 Totalmente responsive
- 🎨 Tema oscuro con gradientes
- ⚡ Desarrollado con React + Vite
- 🎯 Optimizado para rendimiento
- 🚀 Listo para GitHub Pages

## 🛠️ Tecnologías

- **Frontend**: React 18
- **Build Tool**: Vite
- **Estilos**: TailwindCSS
- **Iconos**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/gokuweb3/tu-repositorio.git
cd tu-repositorio
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🚀 Deployment a GitHub Pages

### Opción 1: Deployment Manual

1. Construye el proyecto:
```bash
npm run build
```

2. Despliega a GitHub Pages:
```bash
npm run deploy
```

### Opción 2: Deployment Automático con GitHub Actions

1. Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

2. Haz push a tu repositorio:
```bash
git add .
git commit -m "Add portfolio website"
git push origin main
```

3. Ve a la configuración de tu repositorio en GitHub:
   - Settings → Pages
   - Source: gh-pages branch
   - Guarda los cambios

Tu sitio estará disponible en: `https://gokuweb3.github.io/nombre-repositorio`

## 📝 Personalización

### Actualizar Información Personal

Edita los siguientes archivos para personalizar tu portafolio:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Nombre
   - Título profesional
   - Enlaces a redes sociales

2. **About Section** (`src/components/About.jsx`):
   - Descripción personal
   - Highlights profesionales

3. **Skills Section** (`src/components/Skills.jsx`):
   - Habilidades técnicas
   - Niveles de experiencia

4. **Projects Section** (`src/components/Projects.jsx`):
   - Proyectos personales
   - Enlaces a repositorios
   - Tecnologías utilizadas

5. **Experience Section** (`src/components/Experience.jsx`):
   - Experiencia laboral
   - Educación

6. **Contact Section** (`src/components/Contact.jsx`):
   - Email
   - Teléfono
   - Ubicación

### Cambiar Colores

Edita `tailwind.config.js` para cambiar el esquema de colores:

```javascript
colors: {
  primary: {
    // Tus colores personalizados
  }
}
```

## 📂 Estructura del Proyecto

```
web resume/
├── public/
│   └── resume/
│       └── Luis Transito Hernandez Navarrete Resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run deploy` - Despliega a GitHub Pages

## 📱 Secciones del Sitio

1. **Home**: Introducción y llamado a la acción
2. **Sobre Mí**: Descripción personal y highlights
3. **Habilidades**: Habilidades técnicas con barras de progreso
4. **Proyectos**: Portafolio de proyectos con enlaces
5. **Experiencia**: Experiencia laboral y educación
6. **Contacto**: Formulario de contacto e información

## 🤝 Contribuciones

Este es un proyecto personal, pero si encuentras algún bug o tienes sugerencias, no dudes en abrir un issue.

## 📄 Licencia

MIT License - Siéntete libre de usar este código para tu propio portafolio.

## 👨‍💻 Autor

**Luis Tránsito Hernández Navarrete**
- GitHub: [@gokuweb3](https://github.com/gokuweb3)
- LinkedIn: [Tu perfil de LinkedIn]

---

⭐ Si te gustó este proyecto, no olvides darle una estrella en GitHub!
