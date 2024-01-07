---
head:
  - - meta
    - name: og:description
      content: Namespaces
  - - meta
    - name: og:title
      content: Module 00 C++
---
<script setup lang="ts">
import Woaos from '@theme/components/categoria.vue';

</script>

## Namespaces

Utilizar un namespace es decir que el compilator, cuando tiene que buscar a una funcion que llamas en tu codigo, va a buscarla en las librerias que pones con `using namespace` sin llamarlas por cada funcion

En 42 no se puede utilizar `using namespace`

**Prohibido**
```cpp
#include <iostream>

using namespace std; // prohibido en 42 // [!code focus]

int main()
{
  cout << "42 Barcelona" << endl; // [!code focus]
  return 0;
}
```
**Permitido**

```cpp
#include <iostream>

int main()
{
   std::cout << "42 Barcelona" << std::endl; // CORRECTO // [!code focus]
    return 0;
}
```

## Porque ?
 ::: warning Si se emplea la directiva `using namespace` en el ámbito de la biblioteca `coches` y en el de `aviones`, existe la posibilidad de que ambas contengan una función denominada `ruedas()`, las cuales podrían tener implementaciones completamente distintas, lo que podría propiciar la ocurrencia de errores.. 
 :::

```c++
  coches::ruedas();
  aviones::ruedas();
```

