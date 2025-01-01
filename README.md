## Directory

- [简体中文](https://github.com/ray-d-song/web-archive/blob/main/docs/README_zh.md)
- [English](https://github.com/ray-d-song/web-archive/blob/main/README.md)

## Web Archive

![showcase](https://raw.githubusercontent.com/ray-d-song/web-archive/main/docs/imgs/homepage.png)

Web Archive is a free web archiving and sharing service based on Cloudflare, including the following parts:  

- Browser plugin: Save the webpage as a single html file and upload it to the server.
- Server: Receive the html file uploaded by the browser plugin and store it in the database and storage bucket.
- Web client: Query the html file and display it.

The server is based on the full set of services of Cloudflare Worker, including D1 database and R2 storage bucket.

## Features

- Web archiving, search, sharing
- Folder classification
- Mobile adaptation
- AI generated tag classification
- Reading mode

## Deploy
You can refer to the [deploy document](https://web-archive-docs.pages.dev/en/deploy.html) to deploy.

After deployment, in the browser plugin, enter the service address and key to use.

Plugin download:
- [Chrome](https://chromewebstore.google.com/detail/web-archive/dfigobdhnhkkdniegjdagofhhhopjajb?hl=zh-CN&utm_source=ext_sidebar)
- [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/web-archive-ray-banzhe/)