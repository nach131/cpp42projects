---
head:
  - - meta
    - name: og:description
      content: Namespaces
  - - meta
    - name: og:title
      content: Basico C++
---
<script setup lang="ts">
import Woaos from '@theme/components/categoria.vue';

</script>


## Using namespace

En 42 no se puede utilizar `using namespace`

```cpp
#include <iostream>

using namespace std; // prohibido en 42 // [!code focus]

int main()
{
    cout << "42 Barcelona" << endl; 
    return 0;
}
```
## Permitido

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

