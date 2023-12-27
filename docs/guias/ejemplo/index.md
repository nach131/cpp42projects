---
head:
  - - meta
    - name: og:description
      content: Toda información útil para la práctica o conocimiento con respecto la instalación de sistemas u otros.
  - - meta
    - name: og:title
      content: Guías | Instalación
---
<script setup lang="ts">
import Woaos from '@theme/components/categoria.vue';
import { categoria0 } from './categorias.ts';
import { categoria1 } from './categorias.ts';
</script>

# Ejemplos


When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

$\sqrt{3x-1}+(1+x)^2$

::: info
esto es `info`
:::

::: danger
Este Modulo y su `contenido` puede verse sujeto a cambios.
:::

::: tip
Esto es `atener` en cuenta
:::

::: warning Avoid `<style scoped>` in Markdown
When used in Markdown, `<style scoped>` requires adding special attributes to every element on the current page, which will significantly bloat the page size. `<style module>` is preferred when locally-scoped styling is needed in a page.
:::


::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

## ICONOS

:tada: :100:

https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs


```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// line-numbers is enabled and start from 2
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

```cpp
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
      msg: 'Focused!' // [!code focus]
      'esto no'
    }
  }
}
```

```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code highlight]
    }
  }
}
```
## Badge

### info <Badge type="info" text="info" />
### tip <Badge type="tip" text="tip" />
### warning <Badge type="warning" text="warning" />
### danger <Badge type="danger" text="danger" />

## Colored Diffs in Code Blocks 
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## Errors and Warnings in Code Blocks 
```js
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

## code-group

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

