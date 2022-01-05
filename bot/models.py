import datetime
import os
from dotenv import load_dotenv
load_dotenv()

from mongoengine import Document
from mongoengine.connection import connect
from mongoengine.fields import DateTimeField, StringField

connect(host=os.getenv('MONGODB_URI'))


class DiscordMessage(Document):
    #A class to represent a discord message

    author = StringField(required=True)
    nickname = StringField(required=False)
    channel = StringField(required=True)
    content = StringField(required=True)
    date = DateTimeField(default=datetime.datetime.utcnow)

    def __str__(self):
        #returns string reperesentation of discord message instance
        return f'[{self.date}] {self.author}: {self.content}'

    def to_dict(self):
        return {
            'author': self.author,
            'nickname': self.nickname,
            'channel': self.channel,
            'content': self.content,
            'date': self.date
        }
