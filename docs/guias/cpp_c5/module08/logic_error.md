# [logic_error](https://en.cppreference.com/w/cpp/error/logic_error)


En C++98, `std::logic_error` existe como parte de la biblioteca estándar de C++. 

La clase `std::logic_error` es una excepción que se puede lanzar para indicar errores de lógica en el programa.

`std::logic_error` está definida en la cabecera `<stdexcept>` y es una clase base para excepciones que representan errores detectados en tiempo de ejecución que tienen que ver con violaciones de lógica en el programa.


```cpp
#include <stdexcept>
#include <iostream>

void someFunction(int value) {
    if (value < 0) {
        throw std::logic_error("Invalid value: cannot be negative");
    }
    // Resto de la lógica de la función
}

int main() {
    try {
        someFunction(-5);
    } catch (const std::logic_error& e) {
        std::cerr << "Caught exception: " << e.what() << std::endl;
        // Manejar la excepción de lógica aquí
    }

    return 0;
}
```
