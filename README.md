# 🏆 App Deportiva Jujuy

Aplicación deportiva para la provincia de Jujuy - Plataforma para seguir deportes locales, ligas y equipos.

## 📝 Descripción

Esta es una aplicación Flask que proporciona información sobre deportes, ligas y equipos de la provincia de Jujuy, Argentina. Incluye datos de fútbol, básquet, rugby y otros deportes locales.

## 🚀 Características

- API RESTful con información deportiva de Jujuy
- Datos de ligas y equipos locales
- Soporte CORS para integración frontend
- Health check endpoint
- Configuración con zona horaria de Argentina/Jujuy

## 🛠️ Instalación

### Requisitos previos
- Python 3.8+
- pip
- virtualenv (recomendado)

### Pasos de instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/jbeatmakers/app-deportiva-jujuy.git
cd app-deportiva-jujuy
```

2. Crear y activar entorno virtual:
```bash
python -m venv venv

# En Linux/Mac:
source venv/bin/activate

# En Windows:
venv\Scripts\activate
```

3. Instalar dependencias:
```bash
pip install -r requirements.txt
```

4. Configurar variables de entorno (opcional):
```bash
cp .env.example .env
# Editar .env con tus configuraciones
```

5. Ejecutar la aplicación:
```bash
python app.py
```

La aplicación estará disponible en `http://localhost:5000`

## 📚 Endpoints de la API

### GET /
Retorna información básica de la aplicación
```json
{
  "mensaje": "Bienvenido a la App Deportiva de Jujuy",
  "version": "1.0",
  "provincia": "Jujuy",
  "fecha": "2025-10-09 22:07:00"
}
```

### GET /deportes
Retorna lista de todos los deportes disponibles
```json
{
  "deportes": [...],
  "total": 3
}
```

### GET /deportes/<id>
Retorna información de un deporte específico

### GET /health
Endpoint de health check
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

```
app-deportiva-jujuy/
├── app.py              # Aplicación principal Flask
├── requirements.txt    # Dependencias Python
├── Procfile            # Configuración de despliegue
├── .env.example        # Ejemplo de variables de entorno
├── .gitignore          # Archivos ignorados por git
└── README.md           # Este archivo
```

## 🧑‍💻 Desarrollo

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## 📝 Tecnologías

- **Flask 3.0.0** - Framework web
- **Flask-CORS** - Manejo de CORS
- **Gunicorn** - Servidor WSGI para producción
- **PostgreSQL** - Base de datos (opcional)
- **SQLAlchemy** - ORM (opcional)

## 💬 Deportes Incluidos

- ⚽ **Fútbol** - Liga Jujeña de Fútbol
- 🏀 **Básquet** - Liga Provincial de Basquet
- 🏉 **Rugby** - Unión de Rugby de Jujuy

## 📧 Contacto

Para consultas o sugerencias sobre la app deportiva de Jujuy, abre un issue en este repositorio.

## 📜 Licencia

Este proyecto está disponible para uso libre y educativo.

---

🏞️ **Hecho en Jujuy, Argentina**
