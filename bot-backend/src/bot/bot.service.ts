import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Telegraf } from 'telegraf';
import { User, UserDocument } from './schemas/user.entity'; // Correct path
import axios from 'axios';

@Injectable()
export class BotService {
  private bot: Telegraf;

  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {
    this.bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || 'default_token_here');

    // Handle Start Command
    this.bot.start(async (ctx) => {
      const chatId = ctx.chat.id;
      const username = ctx.from?.username || ctx.from?.first_name || 'Unknown';

      let user = await this.userModel.findOne({ chatId });

      if (!user) {
        user = new this.userModel({ chatId, username, subscribed: false });
        await user.save();
        ctx.reply(`Welcome, ${username}! You can subscribe to weather updates with /subscribe.`);
      } else {
        ctx.reply(`Welcome back, ${username}! Use /subscribe to get weather updates.`);
      }
    });

    // Handle Subscription Command
    this.bot.command('subscribe', async (ctx) => {
      const chatId = ctx.chat.id;
      let user = await this.userModel.findOne({ chatId });

      if (!user) {
        user = new this.userModel({ chatId, subscribed: true });
      } else {
        user.subscribed = true;
      }

      await user.save();
      ctx.reply('✅ You are now subscribed to daily weather updates! 🌦️');
    });

    // Handle Weather Command
    this.bot.command('weather', async (ctx) => {
      const city = ctx.message.text.split(' ')[1]; // Extract city from command
      if (!city) {
        return ctx.reply('⚠️ Please provide a city name. Example: /weather Lucknow');
      }

      try {
        const apiKey = process.env.OPENWEATHER_API_KEY;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (response.data && response.data.main) {
          const weather = response.data;
          const weatherReport = `🌍 City: ${weather.name}\n🌡️ Temp: ${weather.main.temp}°C\n🌪️ Feels Like: ${weather.main.feels_like}°C\n☁️ Weather: ${weather.weather[0].description}`;
          ctx.reply(weatherReport);
        } else {
          ctx.reply('⚠️ Could not fetch weather details. Please try again.');
        }
      } catch (error) {
        ctx.reply('🚨 Error fetching weather data. Check city name and API key.');
      }
    });

    this.bot.launch();
  }
}
