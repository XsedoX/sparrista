import discord
import os
from dotenv import load_dotenv
load_dotenv()

from mongoengine.errors import OperationError
from models import DiscordMessage


class DiscordClient(discord.Client):
    #A class to connect with discord

    async def on_ready(self):
        print('We have logged in as {0.user}'.format(client))
        #printed on terminal to inform about succesful turning bot online

    async def on_message(self, message):
        #saves incoming messages to mongodb
        discord_message = DiscordMessage(
            author=message.author.name,
            nickname=message.author.nick,
            channel=message.channel.name,
            content=message.content
        )
        try:
            discord_message.save()
            print(f'{str(discord_message)}')
        except OperationError as e:
            print(str(e))


client = DiscordClient()
client.run(os.getenv('DISCORD_KEY'))
