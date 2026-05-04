from flask import Flask, jsonify, render_template
from flask_cors import CORS
import os
from datetime import datetime
import pytz

app = Flask(__name__)
CORS(app)

# Configuración
app.config['JSON_AS_ASCII'] = False
TIMEZONE = pytz.timezone('America/Argentina/Jujuy')

# Datos de ejemplo - Deportes en Jujuy
deportes_jujuy = [
    {
        'id': 1,
        'deporte': 'Fútbol',
        'liga': 'Liga Jujeña de Fútbol',
        'equipos': ['Gimnasia y Esgrima', 'Altos Hornos Zapla', 'Talleres de Perico']
    },
    {
        'id': 2,
        'deporte': 'Básquet',
        'liga': 'Liga Provincial de Basquet',
        'equipos': ['Libertad', 'G.E. Jujuy', 'El Carmen']
    },
    {
        'id': 3,
        'deporte': 'Rugby',
        'liga': 'Unión de Rugby de Jujuy',
        'equipos': ['Jujuy Rugby', 'Universitario', 'Huirapuca']
    }
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/info')
def api_info():
    return jsonify({
        'mensaje': 'Bienvenido a la App Deportiva de Jujuy',
        'version': '1.0',
        'provincia': 'Jujuy',
        'fecha': datetime.now(TIMEZONE).strftime('%Y-%m-%d %H:%M:%S')
    })

@app.route('/deportes')
def get_deportes():
    return jsonify({
        'deportes': deportes_jujuy,
        'total': len(deportes_jujuy)
    })

@app.route('/deportes/<int:deporte_id>')
def get_deporte(deporte_id):
    deporte = next((d for d in deportes_jujuy if d['id'] == deporte_id), None)
    if deporte:
        return jsonify(deporte)
    return jsonify({'error': 'Deporte no encontrado'}), 404

@app.route('/health')
def health():
    return jsonify({'status': 'OK', 'timestamp': datetime.now(TIMEZONE).isoformat()})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
