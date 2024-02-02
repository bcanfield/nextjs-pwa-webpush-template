<p align="center">
  <br><h1 align="center">Next.js PWA Webpush Template</h1>
  <p align="center">
    A <strong>Progressive Web App</strong> setup with <strong>Push Notifications</strong> and <strong>Offline Mode</strong>
    </p>
   
<div align="center">
  <img src="https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/lighthouse/lighthouse_results/lighthouse_pwa.svg">
</div>


## Quickest Start 

Click the button to clone this repository and deploy it on Vercel

[![](https://vercel.com/button)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fbcanfield%2Fnextjs-pwa-webpush-template&showOptionalTeamCreation=false)



## Quick Start
**Customize the site config at [site-config.ts](https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/main/lib/site-config.ts)** <br/>*Modifying values here will update your PWA config such as your Web Manifest, Metadata, and Generated Images*

**Change the app icon in [custom-icon.tsx](https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/main/app/_icons/custom-icon.tsx)**<br/> *This icon will be used to generate almost all of the PWA visual assets*

**Generate new Apple Splash Screens in [public/splash_screens](https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/main/public/splash_screens)**<br/> *We are using [this](https://progressier.com/pwa-icons-and-ios-splash-screen-generator) free generator. This will give you a zip file containing a folder called `splash_screens`, which you can use to replace the existing folder.*


## Key PWA Concepts

### Site Metadata
The required PWA metadata is taken care of in the [Manifest](https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/main/app/manifest.ts) and the Metadata object in the [Root Layout](https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/main/app/layout.tsx)

### Icons / Images
We are generating most of the required PWA icons & images using [Next.js Image Generation](https://nextjs.org/docs/app/api-reference/functions/image-response), which uses JSX and CSS to generate dynamic images. We are pulling in the custom svg from [custom-icon.tsx](https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/main/app/_icons/custom-icon.tsx) and the config from [site-config.ts](https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/main/lib/site-config.ts). See the list of generated assets below:

- Icons ([icon.tsx](https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/main/app/icon.tsx))
- Maskable Apple Icon ([apple-icon.tsx](https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/main/app/apple-icon.tsx))
- OpenGraph ([opengraph-image.tsx](https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/main/app/opengraph-image.tsx))

<br/>

**The only assets not being auto-generated are the Apple Splash Screens.** 

Currently, Apple requires you to provide a static image for every device width/height that you want to support. As of now, we are using a free external generator and placing them in the public folder

[Here](https://progressier.com/pwa-icons-and-ios-splash-screen-generator) is the free tool we used to generate the Apple Splash Screens. You can then drag them in place of the existing ones.


### Service Worker
We are using [next-pwa](https://github.com/DuCanhGH/next-pwa) to take care of the main service worker functionality such as installing, updating, and caching. We are also including push notification logic located at [worker/index.ts](https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/main/worker/index.ts).

## Web Push Notifications
The [usePushNotifications](https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/main/app/_hooks/usePushNotifications.tsx) hook takes care of subscribing a user to push notifications using the [web-push](https://www.npmjs.com/package/web-push) package

For demo purposes, the user's subscription is being saved to localstorage. It is recommended to save this in your database. See the snippet below for an example.

```
model User {
  id               String    @id @default(cuid())
  username         String    @unique
  password         String    
  pushSubscription Json?
}
```

**VAPID Keys:** (Required) <br/>These allow the server to send push notifications to browser.<br/> Generate these and put them in your `.env` file as shown below.

`npx web-push generate-vapid-keys`

```
VAPID_PUBLIC_KEY=BIUXugjBUcsYUvck9gKaHGEtSYbkZ5USN-xUnEt3VXnT1Dj98FuBhEMiSUBdR1KatIjwrAuQF04rKXEKBnoIjv8

VAPID_PRIVATE_KEY=0sXtucpaDfqQtIFDC3WZXZTdbjDSqrcBQ4J1DhTWEPA
```

## Caching / Offline Mode
We are using the default caching setup of [next-pwa](https://github.com/DuCanhGH/next-pwa), which is to basically cache everything. View their [documentation](https://ducanh-next-pwa.vercel.app/) for customization options

When the user is in offline mode, they will be sent to [this](https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/main/app/offline/page.tsx) page 

## PWA Installation Prompt
This example uses the [pwa-install](https://github.com/khmyznikov/pwa-install) library for the installation prompt at [installation-prompt.tsx ](https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/main/app/_components/installation-prompt.tsx), but this can be easily replaced by another implementation.

<br/>
<br/>

<div align="center">
  <img src="https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/lighthouse/lighthouse_results/lighthouse_best-practices.svg">
<img src="https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/lighthouse/lighthouse_results/lighthouse_accessibility.svg">
<img src="https://github.com/bcanfield/nextjs-pwa-webpush-template/blob/lighthouse/lighthouse_results/lighthouse_seo.svg">
</div>