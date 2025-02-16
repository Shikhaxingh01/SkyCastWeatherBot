# SkyCastWeatherBot - Telegram Weather Bot with NestJS

## 📌 Introduction
SkyCastWeatherBot is a Telegram bot built using NestJS that provides daily weather updates to users. It also includes an admin panel with Google Login authentication, allowing admins to manage bot settings and user accounts.

## 🚀 Features
### 🌦 Daily Weather Updates
- Users can subscribe to receive daily weather updates for their location.

### 🔐 Admin Panel
- Secure Google OAuth2 authentication for admins.
- Manage bot settings (API keys, etc.).
- Handle user accounts (block/unblock users, delete accounts).

## 🛠 Tech Stack
- **Backend Framework**: NestJS
- **Database**: MongoDB (optional for user management)
- **Authentication**: Google OAuth2
- **Telegram Bot API**: node-telegram-bot-api
- **Weather API**: OpenWeatherMap (or any other weather API)
- **Frontend (Admin Panel)**: ReactJS / NestJS-based Admin Dashboard

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YourUsername/SkyCastWeatherBot.git
cd SkyCastWeatherBot
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add the required API keys and credentials.

#### Example `.env` file:
```ini
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
WEATHER_API_KEY=your-weather-api-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```
- **TELEGRAM_BOT_TOKEN**: Create a bot using [BotFather](https://t.me/BotFather) on Telegram.
- **WEATHER_API_KEY**: Get it from [OpenWeatherMap](https://openweathermap.org/).
- **GOOGLE_CLIENT_ID & GOOGLE_CLIENT_SECRET**: Generate OAuth2 credentials in the [Google Developer Console](https://console.cloud.google.com/).

### 4️⃣ Run the Bot Locally
```bash
npm run start
```
This starts your Telegram bot and the admin panel at [http://localhost:3000](http://localhost:3000).

## 🚀 Deployment
You can deploy the bot and admin panel using any cloud provider like AWS, Vercel, or Railway.

## 👨‍💻 Contributors
- **Shikha Singh** - Developer

## 📜 License
This project is licensed under the MIT License.
