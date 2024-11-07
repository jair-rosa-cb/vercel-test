# HTTPS server to receive webhook data

This repo contains a server which receives CDP webhooks updates.
This code is prepared to be deployed to [Vercel](https://vercel.com/).

## How to run on localhost

1. First install packages: `npm install`

2. Setup tunneling, using Pinggy: `npm run start-pinggy`

3. Run your webhook server: `npm run start-server`

## How to deploy to Vercel

By deploying it to Vercel you can get a public URL for receiving webhooks updates, so you don't need setup tunelling and don't need to host it yourself.
Make sure you already have an account on [Vercel](https://vercel.com/signup)

1. First install Vercel client: `npm i -g vercel`

2. Login on your terminal by running the command: `vercel login` and use the browser to login.

3. Then, to deploy it just run `vercel --prod` and it will be deployed after a few seconds.

This command will build your app on vercel and promote to production, which will make your endpoint publicly available, so it can be called by our CDP Webhooks service.

Now, go to your Vercel dashboard to get the project public URL.
