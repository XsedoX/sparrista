from flask import Flask
from models import DiscordMessage

app = Flask(__name__)


@app.route('/')
def homepage():
    print(DiscordMessage.objects())
    return "Hello world"


if __name__ == "__main__":
    app.run(host='0.0.0.0')
