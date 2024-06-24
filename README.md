# vite-plugin-buildInfo

Add multiple Git information artifacts to the index.html file for the project build
```html
<!doctype html>
<html lang="en">
<head>
  <meta name="git-branch" content="<branch>">
  <meta name="git-commitHash" content="<hash>">
  <meta name="git-tag" content="<tag>">
  <meta name="build-time" content="Wed Jun 19 2024 18:17:34 GMT+0800 (中国标准时间)">

  ...
</head>
<body>
<div id="app"></div>
</body>
</html>

```

## Info List

- branch: HEAD branch 
- hash: HEAD commit
- tag: HEAD tag
- build Time: Date

## Insall
```
pnpm install vite-plugin-meta-info -D
```

## Config
```ts
// vite.config.ts
import MetaInfoPlugin from 'vite-plugin-meta-info'

export default defineConfig({
    // ignore other config
    plugins: [
        // ignore other plugins
        MetaInfoPlugin()
    ]
    
})
```

