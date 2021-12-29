# 📊 Aplikacja dla szefa firmy

## 📚 Użyte biblioteki

- [Flask](https://flask.palletsprojects.com/en/2.0.x/)
- [discord.py](https://discordpy.readthedocs.io/en/stable/)
- [mongoengine](http://docs.mongoengine.org/)
- [Jinja2](https://jinja.palletsprojects.com/en/3.0.x/)

## ⚙ Uruchomienie

```
$ git clone git@github.com:cokolwiek-io/sparrista.git
```

```
$ cd bot
```

[Utwórz środowisko wirtualne](https://docs.python.org/3/tutorial/venv.html#creating-virtual-environments), oraz je aktywuj, a następnie zainstaluj wszystkie potrzebne zależności:

```
$ pip install -r requirements.txt
```

Stwórz i [dodaj bota na serwer discord](https://youtu.be/SPTfmiYiuok?t=80).

Następnie utwórz plik .env i ustaw poniższe zmienne środowiskowe:

```
MONGO_URI=<connectiong_string_do_mongodb>
DISCORD_KEY=<token_dla_bota>
```

> > [Skąd wziąść token dla bota?](https://youtu.be/SPTfmiYiuok?t=1041)

> > Jak uruchomić bazę danych MongoDB? Za pomocą [Dockera](https://hub.docker.com/_/mongo) lub można wykorzystać [oficjalną chmurę MongoDB](https://www.mongodb.com/). (darmowa dla naszych potrzeb, bez podawania kart!)

Po dodaniu zmiennych środowiskowych:

```
$ python discord_client.py
```

i w drugim oknie terminala

```
$ python app.py
```
