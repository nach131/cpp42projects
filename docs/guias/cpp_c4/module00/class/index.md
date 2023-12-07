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

En C++, una clase es un tipo de dato definido por el usuario que encapsula datos y funciones relacionadas en un solo bloque lógico. Las clases son una parte fundamental de la programación orientada a objetos (OOP) y permiten la abstracción de datos y el encapsulamiento. Una clase sirve como un plano para crear objetos, y un objeto es una instancia específica de esa clase.

```cpp
#include <iostream>

// Definición de la clase "Coche"
class Car {
public:
    // Atributos (variables miembro)
    std::string brand;
    std::string model;
    int year;

    // Métodos (funciones miembro)
    void ShowInfo() {
        std::cout << "Marca: " << brand << "\nModelo: " << model << "\nAño: " << year << std::endl;
    }
};

int main() {
    // Creación de objetos de la clase "Coche"
    Car car1;
    Car car2;

    // Asignación de valores a los atributos
    car1.brand = "Toyota";
    car1.model = "Corolla";
    car1.year = 2022;

    car2.brand = "Honda";
    car2.model = "Civic";
    car2.year = 2021;

    // Uso de los métodos para mostrar información
    std::cout << "Información del Coche 1:\n";
    car1.ShowInfo();

    std::cout << "\nInformación del Coche 2:\n";
    car2.ShowInfo();

    return 0;
}
```

<Badge type="info" text="output" />

```shell
Información del Coche 1:
Marca: Toyota
Modelo: Corolla
Año: 2022

Información del Coche 2:
Marca: Honda
Modelo: Civic
Año: 2021
```

