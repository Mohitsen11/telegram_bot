# Telegram Bot with Node.js and Telegraf

A simple Telegram bot created using Node.js and the Telegraf module. This bot also utilizes other modules such as `dotenv`, `axios`, and `nodemon`.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/telegram-bot-nodejs.git
    ```

2. Change into the project directory:

    ```bash
    cd telegram-bot-nodejs
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the project root and add your Telegram Bot Token:

    ```env
    TELEGRAM_BOT_TOKEN=your_bot_token_here
    ```

## Usage

Run the bot using nodemon for automatic restarts during development:

```bash
npm run dev
