En C++98, la función [`strtod`](https://en.cppreference.com/w/c/string/byte/strtof)
se utiliza para convertir una cadena a un valor de tipo `double`.
```cpp
#include <iostream>
#include <cstdlib>

int main() {
    // Ejemplo 1: Convertir una cadena que representa un número entero
    const char* str1 = "123";
    double result1 = strtod(str1, NULL);
    std::cout << "Ejemplo 1: " << result1 << std::endl;

    // Ejemplo 2: Convertir una cadena que representa un número de punto flotante
    const char* str2 = "45.678";
    double result2 = strtod(str2, NULL);
    std::cout << "Ejemplo 2: " << result2 << std::endl;

    // Ejemplo 3: Convertir una cadena que contiene caracteres no numéricos
    const char* str3 = "abc";
    double result3 = strtod(str3, NULL);
    if (result3 == 0.0 && *str3 != '0') {
        std::cout << "Ejemplo 3: Conversión no válida" << std::endl;
    } else {
        std::cout << "Ejemplo 3: " << result3 << std::endl;
    }

    return 0;
}
```

<Badge type="info" text="output" />
```bash
Ejemplo 1: 123
Ejemplo 2: 45.678
Ejemplo 3: Conversión no válida
```


Ten en cuenta que en estos ejemplos, el segundo argumento de `strtod` es `NULL`, lo que indica que no se está utilizando para devolver la posición del primer carácter no convertido. Si necesitas información detallada sobre la conversión, podrías usar un puntero a `char` para almacenar la posición donde terminó la conversión.


