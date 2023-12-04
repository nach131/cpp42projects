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

# Module 00

**Namespaces, class, funciones miembro, stdio streams, lista de inicialización, static, const, y montones de
cosas basicas**

::: danger En proceso...
Este Modulo y su contenido puede verse sujeto a cambios.
:::

:tada: :100:

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

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

```js
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