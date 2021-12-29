import discord
import os

from mongoengine.errors import OperationError
from models import DiscordMessage


class DiscordClient(discord.Client):
    """A class to connect with discord"""

    async def on_ready(self):
        """displays information about successful bot connection"""
        print('Bot is ready to go!')

    async def on_message(self, message):
        """saves incoming messages to mongodb"""
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
