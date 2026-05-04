# 🏆 App Deportiva Jujuy

Aplicación deportiva para la provincia de Jujuy. Incluye frontend web Flask, API REST, datos iniciales de ligas/equipos locales y health check.

## 📝 Descripción

Esta aplicación Flask proporciona una portada visual para consultar deportes, ligas y equipos de la provincia de Jujuy, Argentina. El frontend consume la API interna y muestra tarjetas filtrables por disciplina, liga o equipo.

## 🚀 Características

- Frontend responsive servido desde Flask
- Panel inicial con métricas deportivas
- Buscador instantáneo por deporte, liga o equipo
- API RESTful con información deportiva de Jujuy
- Datos de ligas y equipos locales
- Soporte CORS para integración externa
- Health check endpoint
- Configuración con zona horaria de Argentina/Jujuy

## 🛠️ Instalación

### Requisitos previos

- Python 3.8+
- pip
- virtualenv recomendado

### Pasos de instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/jbeatmakers/app-deportiva-jujuy.git
cd app-deportiva-jujuy
```

2. Crear y activar entorno virtual:

```bash
python -m venv venv

# Linux/Mac
source venv/bin/activate

# Windows
venv\Scripts\activate
```

3. Instalar dependencias:

```bash
pip install -r requirements.txt
```

4. Configurar variables de entorno opcionales:

```bash
cp .env.example .env
```

5. Ejecutar la aplicación:

```bash
python app.py
```

La aplicación estará disponible en:

```text
http://localhost:5000
```

## 🖥️ Frontend

### GET /

Renderiza la portada web de la App Deportiva Jujuy.

Componentes incluidos:

- Hero principal de Jujuy 360 Deportes
- Estado operativo de API desde `/health`
- Métricas de deportes y equipos cargados
- Grilla de deportes desde `/deportes`
- Filtro frontend por disciplina, liga o equipo

## 📚 Endpoints de la API

### GET /api/info

Retorna información básica de la aplicación.

```json
{
  "mensaje": "Bienvenido a la App Deportiva de Jujuy",
  "version": "1.0",
  "provincia": "Jujuy",
  "fecha": "2025-10-09 22:07:00"
}
```

### GET /deportes

Retorna lista de todos los deportes disponibles.

```json
{
  "deportes": [...],
  "total": 3
}
```

### GET /deportes/<id>

Retorna información de un deporte específico.

### GET /health

Endpoint de health check.

```json
{
  "status": "OK",
  "timestamp": "2025-10-09T22:07:00-03:00"
}
```

## 🚀 Despliegue

### Heroku

```bash
heroku create app-deportiva-jujuy
git push heroku main
```

### Render / Railway

El archivo `Procfile` está configurado para despliegue automático.

## 💾 Estructura del Proyecto

```text
app-deportiva-jujuy/
├── app.py                  # Aplicación principal Flask
├── requirements.txt        # Dependencias Python
├── Procfile                # Configuración de despliegue
├── .env.example            # Ejemplo de variables de entorno
├── .gitignore              # Archivos ignorados por git
├── templates/
│   └── index.html          # Frontend principal
├── static/
│   ├── css/
│   │   └── styles.css      # Estilos responsive
│   └── js/
│       └── app.js          # Consumo de API y filtro frontend
└── README.md
```

## 📝 Tecnologías

- **Flask 3.0.0** - Framework web
- **Flask-CORS** - Manejo de CORS
- **Gunicorn** - Servidor WSGI para producción
- **HTML/CSS/JavaScript vanilla** - Frontend sin build step
- **PostgreSQL** - Base de datos opcional
- **SQLAlchemy** - ORM opcional

## 💬 Deportes Incluidos

- ⚽ **Fútbol** - Liga Jujeña de Fútbol
- 🏀 **Básquet** - Liga Provincial de Basquet
- 🏉 **Rugby** - Unión de Rugby de Jujuy

## ✅ Validación mínima

```bash
python app.py
```

Luego abrir:

```text
http://localhost:5000
http://localhost:5000/deportes
http://localhost:5000/health
```

## 📜 Licencia

Este proyecto está disponible para uso libre y educativo.

---

🏞️ **Hecho en Jujuy, Argentina**
