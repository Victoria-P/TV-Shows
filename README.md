## Prerequisites
- Node.js(Vite uses node import which is supported in v16.0.0+ and v14.18.0+. v15 does not supported.)
- VS Code or any IDE

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Notes
- The project works without any additional libraries;
- The project contains all required features:
 - Displaying show lists based on their genre;
 - Displaying show details on separate page;
 - Displaying Search input and results based on it's query;
 - Flexbox allows components to be responsive;
- Additional feature: Dark / Light mode;
- Vitest was used for unit tests as it's official reccomendation from Vue (works perfectly with Vite);
