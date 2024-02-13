# [std::ifstream](https://en.cppreference.com/w/cpp/io/basic_ifstream)

`std::ifstream` es una clase plantilla de entrada en C++ que pertenece a la biblioteca estándar (STL). La sintaxis `std::ifstream file("archivo.txt")` crea una instancia de la clase `std::ifstream` y la asigna a la variable `file`.

La ruta del archivo "archivo.txt" se pasa como argumento al constructor de la clase `std::ifstream`, lo que abre el archivo en modo lectura. Esta sintaxis permite a la clase `std::ifstream` manejar los archivos de manera eficiente y segura. 

Es importante tener en cuenta que debe liberar recursos como el archivo abierto cuando ya no los necesita utilizando el método `file.close()`.

Es posible utilizar esta sintaxis para abrir archivos en otros modos, como lectura/escritura o escritura. Por ejemplo: `std::ofstream file("archivo.txt")` abre el archivo "archivo.txt" en modo escritura (write).

```cpp
#include <iostream>
#include <fstream>

int main() {

    // Abrir el archivo "archivo.txt" en modo lectura.
   	std::ifstream file("archivo.txt");

    // Comprobar si la apertura del archivo fue exitosa.
    if (!file.is_open()) {
        std::cerr << "Error al abrir el archivo." << std::endl;
        return 1;
    }

    // Leer los datos desde el archivo.
    string linea;
    while (getline(file, linea)) {
        std::cout << linea << std::endl;
    }

    // Cerrar el archivo cuando ya no lo necesitamos.
    file.close();

    return 0;
}
```