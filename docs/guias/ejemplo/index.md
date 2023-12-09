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

<!-- ICONOS -->

:tada: :100:




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
# Badge

### Title <Badge type="info" text="info" />
### Title <Badge type="tip" text="tip" />
### Title <Badge type="warning" text="warning" />
### Title <Badge type="danger" text="danger" />

