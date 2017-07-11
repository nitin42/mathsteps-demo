# Mathsteps Demo

This is the source for mathsteps demo, powered by React.

Feel free to suggest changes or add new content.

## Setup

```
$ git clone https://github.com/socraticorg/mathsteps-demo
$ cd mathsteps-demo
$ npm install
```

## Start development server

```
$ npm run start
```

The demo will be running at - `http://localhost:3000`.

> Note - The demo is bootstrapped using [`create-react-app`](https://github.com/facebookincubator/create-react-app).

## Build

```
$ npm run build
```

## Deploying 

For publishing the changes and deploying, you will need [surge](https://surge.sh/).

```
$ npm install -g surge
```

After running `npm run build`, we will need to deploy the demo. 

```
$ surge
```

This will show a prompt asking for the build directory path.

![demo](https://i.gyazo.com/b24ae9a9070d7c9eb635d6aa62317879.gif)

For domain name, use `mathsteps.surge.sh` only 😅

If you're new to the codebase, check out the components that make up this site, which
in the [`components`](./src/components) directory.

