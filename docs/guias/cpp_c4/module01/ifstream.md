# ifstream

`std::ifstream` es una clase en la Biblioteca Estándar de C++ que proporciona funcionalidades para la lectura de archivos de entrada.


1. **Inclusión de la Cabecera:**

```cpp
#include <fstream>
```

2. **Creación de un Objeto `std::ifstream`:**

```cpp
std::ifstream archivoEntrada("nombre_archivo.txt");
```

Aquí, `archivoEntrada` es un objeto de tipo `std::ifstream` que se asocia con el archivo llamado "nombre_archivo.txt" para lectura.

3. **Modos de Apertura:**

`std::ifstream` puede abrir archivos en diferentes modos, como modo de texto (`std::ios::in`) o modo binario (`std::ios::binary`).

```cpp
std::ifstream archivoEntrada("nombre_archivo.txt", std::ios::in);
// O para modo binario
std::ifstream archivoEntrada("nombre_archivo.bin", std::ios::in | std::ios::binary);
```

4. **Verificación de la Apertura Exitosa:**

Después de abrir el archivo, es importante verificar si la apertura fue exitosa antes de intentar realizar operaciones. Esto se puede hacer utilizando la función `is_open()`:

```cpp
if (archivoEntrada.is_open()) {
	// Operaciones de lectura pueden realizarse aquí
} else {
	// Manejar el caso de apertura fallida
}
```

5. **Lectura de Datos:**

Se pueden leer datos desde el archivo utilizando operadores de extracción (`>>`) o funciones de lectura, dependiendo del tipo de datos.

```cpp
int numero;
archivoEntrada >> numero; // Ejemplo de lectura de un entero
```

También puedes utilizar funciones como `getline()` para leer líneas completas de texto.

6. **Cierre del Archivo:**

Es una buena práctica cerrar el archivo después de haber terminado de leerlo. Esto se puede hacer automáticamente cuando el objeto `std::ifstream` sale de ámbito (por ejemplo, cuando la función que lo contiene llega a su fin).

```cpp
archivoEntrada.close();
```

Lectura de un archivo e impresión en la terminal.

```cpp
#include <iostream>
#include <fstream>

int main()
{
	std::ifstream ifs;
	ifs.open("file.txt", std::ifstream::in);

	
	char c = ifs.get();

	while (ifs.good())
	{
		std::cout << c;
		c = ifs.get();
	}

	ifs.close();
	return 0;
}
```

Lectura de un archivo e impresion con getline

```cpp
#include <fstream>
#include <iostream>
#include <string>

int main()
{
	std::ifstream archivoEntrada("file.txt");

	if (archivoEntrada.is_open())
	{
		std::string linea;
		while (std::getline(archivoEntrada, linea))
			std::cout << linea << std::endl;
		archivoEntrada.close();
	}
	else
		std::cerr << "Error al abrir el archivo." << std::endl;
	return 0;
}

```
