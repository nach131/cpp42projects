---
head:
  - - meta
    - name: og:description
      content: My Awesome PhoneBook
  - - meta
    - name: og:title
      content: My Awesome PhoneBook
---
<script setup lang="ts">
import Woaos from '@theme/components/categoria.vue';

</script>

## setfill

La función std::setfill es una función de manipulación de salida en C++ que se utiliza junto con la función std::setw para especificar el carácter de relleno utilizado al formatear la salida. std::setfill toma un solo argumento, que es el carácter de relleno que deseas utilizar.

```cpp
int main()
{
	int numero = 42;

	// Imprimir el número con un ancho de 8 caracteres y relleno con ceros
	std::cout << "Número con relleno de '0': " << std::setw(8) << std::setfill('0') << numero << std::endl;

	// Imprimir el número con un ancho de 8 caracteres y relleno con asteriscos
	std::cout << "Número con relleno de '*': " << std::setw(8) << std::setfill('*') << numero << std::endl;

	return 0;
}

```
<Badge type="info" text="output" />

```shell
Número con relleno de '0': 00000042
Número con relleno de '*': ******42
```

## substr

La función `substr` se utiliza para extraer una subcadena de una cadena más grande. Puede tomar uno o dos argumentos, que especifican los índices de inicio y fin de la subcadena que deseas extraer. La sintaxis general es la siguiente:

```cpp
std::string substr(size_t pos = 0, size_t count = npos) const;
```

+ `pos`: Especifica el índice del primer carácter de la subcadena a extraer.
+ `count`: Especifica la longitud de la subcadena que se extraerá. Si no se proporciona o es igual al valor predeterminado `std::string::npos,` se extraen todos los caracteres desde `pos` hasta el final de la cadena.

```cpp
#include <iostream>
#include <string>

int main()
{
	std::string miCadena = "42 Barcelona";

	// Imprimir "erase un."
	if (miCadena.length() >= 8)
		std::cout << miCadena.substr(0, 8) << "." << std::endl;
	else
		std::cout << "La cadena es demasiado corta." << std::endl;

	return 0;
}
```

<Badge type="info" text="output" />
```shell
"42 Barce."
```

## std::cin

Es un objeto de flujo de entrada. Se utiliza para leer datos desde la entrada estándar, que generalmente corresponde al teclado. La entrada estándar en C++ está representada por el flujo de entrada `std::cin`, y se utiliza junto con el operador de extracción `>>` para leer diferentes tipos de datos desde el teclado.

```cpp
#include <iostream>

int main() {
    // Declarar una variable para almacenar el número
    int numero;

    // Pedir al usuario que ingrese un número
    std::cout << "Ingrese un número entero: ";

    // Leer el número desde la entrada estándar (teclado)
    std::cin >> numero; // [!code focus]

    // Mostrar el número ingresado
    std::cout << "El número es: " << numero << std::endl;

    return 0;
}

```


::: info 
http://www.cplusplus.com/reference/string/string/

http://www.cplusplus.com/reference/iomanip/
