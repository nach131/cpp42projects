# [istringstream](https://en.cppreference.com/w/cpp/io/basic_istringstream) 

La línea `std::istringstream iss(line);` crea un objeto de tipo `std::istringstream` que se utiliza para leer datos desde una cadena de caracteres (`std::string`). 


- `std::istringstream`: es una clase de la biblioteca estándar de C++ que se utiliza para la entrada de flujo desde una cadena de caracteres.

Es similar a `std::ifstream`, pero en lugar de leer desde un archivo, lee desde una cadena de caracteres.


- `std::istringstream iss(data);`: Esto crea un objeto de tipo `std::istringstream` llamado `iss` y lo inicializa con la cadena de caracteres proporcionada en `data`.


```cpp
#include <iostream>
#include <sstream>
#include <string>

int main() {
    std::string data = "10 20 30";
    
    // Crear un objeto std::istringstream con la cadena de datos
    std::istringstream iss(data);
    
    int num;
    while (iss >> num) {
        std::cout << num << std::endl;
    }
    
    return 0;
}
```

En este ejemplo, se crea un objeto `std::istringstream` llamado `iss` con la cadena de caracteres "10 20 30". Luego, se usa un bucle `while` para leer números enteros de `iss` uno por uno y se imprimen en la salida estándar. Esto produce la salida:

<Badge type="info" text="output" />
```shell
10
20
30
```
