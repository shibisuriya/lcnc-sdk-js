---
title: Page
description: A guide to scaffolding a page custom component
sidebar:
  order: 2
---

In terminal type,

```bash
create kf-component
```

Mention the name of the project (the name should be project npm package name).

The scaffolder will ask you custom component's type (page | form field).

## Selecting page.

The scaffolder will ask you to select the framework,

1. Vanilla js

2. React js

After the project has been scaffolded,

To installation npm packages,

```bash
npm i
```

To run the project for development purposes,

```bash
npm run dev
```

To build the project for distrubtion,

```bash
npm run build
```

If you find the scaffolder insufficient... If you want to use a frontend framework that is
not supported by the scaffolder currently, like Vue.js or Angular, AngularJs, Svelte, etc.

Install kf's sdk using npm,

```bash
npm install @kissflow/lowcode-client-sdk
```

Initilize the sdk,

```js
import KFSDK from "@kissflow/lowcode-client-sdk";
let kf;
(async function () {
  kf = await KFSDK.initialize();
})();
```

If you don't want to install the sdk, you can also use it from a cdn,

```html
<script src="https://unpkg.com/@kissflow/lowcode-client-sdk@latest/dist/kfsdk.umd.js"></script>
```
