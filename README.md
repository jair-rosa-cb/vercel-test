# HTTPS server to post messages to discord

This repo contains a server which receives CDP webhooks updates and posts it to discord.
This code is prepared to be deployed to [Vercel](https://vercel.com/).

More info on the docs: https://docs.cdp.coinbase.com/get-started/docs/webhooks/discord-bot-demo

## Prerequisites

You'll need:

- A [Discord webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) URL

## How to run on localhost

1. First install packages: `npm install`

2. Setup tunneling, using Pinggy: `npm run start-pinggy`

3. Copy .env.example into .env file on the same folder and replace the `DISCORD_URL` with your Discord webhook URL and `WEBHOOK_NOTIFICATION_URL` with your pinggy HTTPS URL from previous step.

4. Run your webhook server: `npm run start-server`

## How to deploy to Vercel

By deploying it to Vercel you can get a public URL for receiving webhooks updates, so you don't need setup tunelling and don't need to host it yourself.
Make sure you already have an account on [Vercel](https://vercel.com/signup)

1. First install Vercel client: `npm i -g vercel`

2. Login on your terminal by running the command: `vercel login` and use the browser to login.

3. Then, to deploy it just run `vercel` and it will be deployed after a few seconds.

You need to promote it to production now, so the public URL can be called by our CDP Webhooks service:

1. Go to `https://vercel.com/YOUR_USER_PROJECTS/YOUR_PROJECT_NAME/deployments`, locate the deployment we just made on previous step and click on it's settings (...) and Promote.

2. After a few seconds, it should be available to be accessed publicly and you should be able to access `https://vercel.com/YOUR_USER_PROJECTS/YOUR_PROJECT_NAME` and see a URL under `Domains`. This URL should be used to create the CDP Webhook.
