![Astro](https://user-images.githubusercontent.com/2342458/230581871-dc3c1c5f-91a2-484c-8b5c-5065a6b99ff0.png)
# Kinsta - Hello World - Static Site With Astro 🚀

An example of how to deploy a static site built with Astro on Kinsta Hosting.

---
Kinsta is a developer-centric cloud host / PaaS. We’re striving to make it easier for you to share your web projects with your users. You can focus on coding and building, and we'll take care of deployments with fast, scalable hosting. 

At Kinsta, Static Sites are free, and you can host up to 100 sites on your account for completely free.

Kinsta offers 24/7 support via our chat system, which is always one click away in [MyKinsta](https://my.kinsta.com/) for customers with a paid plan or service.

If you only have a Static Site Hosting account, we have detailed [Static Site Hosting documentation](https://kinsta.com/docs/static-site-hosting/) available. You can also connect with developers and knowledgeable community members in the [Kinsta Community](https://community.kinsta.com/c/static-sites/22) forum.

- [Start your free trial](https://kinsta.com/signup/?product_type=app-db)
- [Application Hosting](https://kinsta.com/application-hosting)
- [Database Hosting](https://kinsta.com/database-hosting)
- [Static Site Hosting](https://kinsta.com/static-site-hosting)

## Setup
<details>
<summary><strong>Static Site Hosting</strong> [click to expand]</summary>

### Dependency Management

Kinsta automatically installs dependencies defined in your `package.json` file during the deployment process.

### Setting the Build Command, Node version, and Publish directory

After connecting the repository, **Static Site Hosting** will automatically try to populate all the fields with the correct values.
| Configuration option |Value     |
|---|---|
| Build command | `npm run build` |
| Node version  |  18.16.0  |
| Publish directory | `dist`  |

### Deployment Lifecycle

Whenever a deployment is initiated (through creating an application or re-deploying due to an incoming commit), the build command is run, followed by the deployment of the Publish Directory content.
</details>

<details>
<summary><strong>Application Hosting</strong> [click to expand]</summary>

### Dependency Management

Kinsta automatically installs dependencies defined in your `package.json` file during the deployment process.

### Port

Kinsta automatically sets the `PORT` environment variable. You should **not** define it yourself and you should **not** hard-code it into the application. The `serve` package utilizes the port set by Kinsta automatically.

### Start Command

When deploying an application, Kinsta automatically creates a web process with `npm start` as the entry point. Make sure to use this command to run your server.

### Deployment Lifecycle

Whenever a deployment is initiated (through creating an application or re-deploying due to an incoming commit), the `npm build` command is run, followed by the `npm start` command.
</details>

## What is Astro
Astro is a static site framework focusing on content-rich websites to deliver faster load times with less JavaScript. More information is available on the [astro.build](https://astro.build/) website.
