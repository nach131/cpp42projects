# [out of range](https://en.cppreference.com/w/cpp/error/out_of_range)

En C++98, `std::out_of_range` es una clase de excepción que está definida en la biblioteca estándar de C++. Esta clase de excepción es lanzada por las funciones de contenedores de la STL (Standard Template Library) cuando se produce un intento de acceder a un índice que está fuera de los límites válidos del contenedor.

Por ejemplo, si intentas acceder a un elemento en un vector usando un índice que es mayor o igual al tamaño del vector, se lanzará una excepción `std::out_of_range`.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> miVector = {1, 2, 3, 4, 5};

    try {
        // Intentar acceder a un elemento fuera de los límites del vector
        int elemento = miVector.at(100);
        std::cout << "Elemento obtenido: " << elemento << std::endl;
    } catch (const std::out_of_range& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    }

    return 0;
}
```

En este ejemplo, `miVector.at(100)` intenta acceder al elemento en la posición 100 del vector, pero dado que el vector solo tiene 5 elementos, se lanzará una excepción `std::out_of_range`. La excepción se captura en el bloque `catch`, y se imprime un mensaje de error.
