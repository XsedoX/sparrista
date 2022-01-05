from flask import Flask, render_template
from models import DiscordMessage

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('pegasustable.html', title='Sparrist-o-pegasus')


@app.route('/api/data')
def data():
    return {'data': [msg.to_dict() for msg in DiscordMessage.objects()]}

if __name__ == "__main__":
    app.run(host='0.0.0.0')
