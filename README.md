![Astro](https://user-images.githubusercontent.com/2342458/230581871-dc3c1c5f-91a2-484c-8b5c-5065a6b99ff0.png)
# Kinsta - Hello World - Static Site With Astro 🚀

An example of how to deploy a static site built with Astro on Kinsta App Hosting services.

---
Kinsta is a developer-centric cloud host / PaaS. We’re striving to make it easier for you to share your web projects with your users. Focus on coding and building, and we’ll take care of deployment and provide fast, scalable hosting. + 24/7 expert-only support.

- [Start your free trial](https://kinsta.com/signup/?product_type=app-db)
- [Application Hosting](https://kinsta.com/application-hosting)
- [Database Hosting](https://kinsta.com/database-hosting)

## Dependency Management

Kinsta automatically installs dependencies defined in your `package.json` file, during the deployment process.

## Web Server Setup

### Port

Kinsta automatically sets the `PORT` environment variable. You should **not** define it yourself and you should **not** hard-code it into the application. The `serve` package utilizes the port set by Kinsta automatically.

### Start Command

When deploying an application, Kinsta automatically creates a web process with `npm start` as the entry point. Make sure to use this command to run your server.

## Deployment Lifecycle

Whenever a deployment is initiated (through creating an application or re-deploying due to an incoming commit) the `npm build` command is run, followed by the `npm start` command.

## What is Astro
Astro is a static site framework focusing on content-rich websites to deliver faster load times with less JavaScript. More information is available on the [astro.build](https://astro.build/) website.
