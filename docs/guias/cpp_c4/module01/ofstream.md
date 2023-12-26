# ofstream

`std::ofstream` es una clase en la Biblioteca Estándar de C++ que proporciona funcionalidades para la escritura de archivos de salida.
 La "o" en std::ofstream significa "output" (salida).

 1. **Inclusión de la Cabecera:**

```cpp
#include <fstream>
```

2. **Creación de un Objeto `std::ifstream`:**

```cpp
std::ofstream archivoSalida("nombre_archivo.txt");
```

3. **Verificación de la Apertura Exitosa:**

Después de abrir el archivo, es importante verificar si la apertura fue exitosa antes de intentar realizar operaciones. Esto se puede hacer utilizando la función `is_open()`:

```cpp
if (archivoSalida.is_open()) {
    // Operaciones de escritura pueden realizarse aquí
} else {
    // Manejar el caso de apertura fallida
}
```

4. **Escritura de Datos:**
Puedes escribir datos en el archivo utilizando operadores de inserción `<<` o funciones de escritura, dependiendo del tipo de datos que estés escribiendo.
```cpp
archivoSalida << "42 Barcelona !!!" << std::endl;
```
5. **Cierre del Archivo:**

Es una buena práctica cerrar el archivo después de haber terminado de leerlo. Esto se puede hacer automáticamente cuando el objeto `std::ifstream` sale de ámbito (por ejemplo, cuando la función que lo contiene llega a su fin).

```cpp
archivoSalida.close();
```
```cpp
#include <fstream>
#include <iostream>

int main() {
std::ofstream archivoSalida("salida.txt", std::ios::out);// [!code highlight]

if (archivoSalida.is_open()) 
{
	archivoSalida << "42 Barcelona !!!" << std::endl;// [!code highlight]
	archivoSalida.close();// [!code highlight]
	std::cout << "Escritura exitosa." << std::endl;
} 
else 
	std::cerr << "Error al abrir el archivo para escritura." << std::endl;
return 0;
}

```
