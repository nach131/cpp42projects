---
head:
  - - meta
    - name: og:description
      content: Class
  - - meta
    - name: og:title
      content: Constructor
---
<script setup lang="ts">
import Woaos from '@theme/components/categoria.vue';

</script>

# Constructors

Un constructor es una función especial que se llama automáticamente cuando se crea un objeto de una clase. Su tarea principal es inicializar los miembros del objeto. Puedes tener varios constructores en una clase, lo que se conoce como sobrecarga de constructor.

```cpp
#include <iostream>

class MiClase {
public:
    // Constructor por defecto
    MiClase() { // [!code highlight]
        std::cout << "Se ha llamado al constructor por defecto." << std::endl;// [!code highlight]
    }// [!code highlight]

    // Constructor con parámetros
    MiClase(int x, int y) {// [!code highlight]
        std::cout << "Se ha llamado al constructor con parámetros. x=" << x << ", y=" << y << std::endl;// [!code highlight]
    }// [!code highlight]
};

int main() {
    // Crear objetos y llamar a los constructores
    MiClase objeto1;               // Llama al constructor por defecto
    MiClase objeto2(10, 20);        // Llama al constructor con parámetros

    return 0;
}

```
