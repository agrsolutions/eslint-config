# AGSolutions ESLint config

## Whats included?

- airbnb config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

1. Install the dependencies
```
npm i -D eslint @agsolutions/eslint-config
``` 
or
```
yarn add -D eslint @agsolutions/eslint-config
```

2. Create a `.eslintrc.json` file extending the config:
```
{
  "extends": "@agsolutions/eslint-config/react"
  // "extends": "@agsolutions/eslint-config/node"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.

### React (with Next.js)

Install dependencies:
```
npm i -D eslint @agsolutions/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": [
    "@agsolutions/eslint-config/next", 
    "next/core-web-vitals"
  ]
}
```

### React (without Next.js)

Install dependencies:
```
npm i -D eslint @agsolutions/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": "@agsolutions/eslint-config/react"
}
```

### Node.js

Install dependencies:
```
npm i -D eslint @agsolutions/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": "@agsolutions/eslint-config/node"
}
```