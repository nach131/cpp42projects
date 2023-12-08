
## Operadores de resolución de ámbito

Los Operadores de Resolución de Alcance `::` en C++ se utilizan para acceder a elementos dentro de un espacio de nombres, una clase o una estructura, permite especificar a qué ámbito pertenece una variable, función o tipo, evitando ambigüedades y permitiendo la correcta identificación de elementos..

```cpp
#include <iostream>

const char *name = "42 Paris"; // [!code focus]

int main() {

	const char *name = "42 Barcelona"; // [!code focus]

	std::cout << "Variable Global: " << name << std::endl; // [!code focus]
	std::cout << "Variable local: " << ::name << std::endl; // [!code focus] // [!code highlight]

	return 0;

}
```

Ahora podemos entender que:

+ `std::`: indica que la entidad `cout` pertenece al espacio de nombres estándar `std`, este contiene muchas funciones y objeros.
+ `cout`: es el objeto de flujo de salida estándar `character output`, que es un objeto asociado a la consola `stdout` que se utiliza para imprimir datos en la consola.
+ `<<` El operador de inserción se utiliza para indicar la dirección del flujo de salida. (en el caso anterior enviar el valor de `name` a la consola de salida).