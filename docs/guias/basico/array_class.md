# Array class

::: danger Atención:
 La biblioteca `array` pertenece a `C++11` y no se puede utilizar en 42.
:::

`std::array` es una clase de la biblioteca estándar de C++ que proporciona un contenedor de tamaño fijo, donde el tamaño del array es parte de su tipo. Es decir, el tamaño del array es parte del tipo de dato y se especifica como un parámetro de plantilla. Esto contrasta con los arrays tradicionales de C, que no llevan información sobre su tamaño y pueden degradarse fácilmente a punteros.

```cpp
#include <iostream>
#include <array>

int main(void)
{
    std::array<int, 10> myIntArray;  // Crear un array de enteros con tamaño fijo 10

    // Inicializar el array y mostrar cada elemento
    for (int i = 0; i < myIntArray.size(); i++)
    {
        myIntArray[i] = i * 2;
        std::cout << myIntArray[i] << std::endl;
    }

    std::cout << "Tamaño de la array es: " << myIntArray.size() << std::endl;

    return 0;
}

```

+ `Tamaño Fijo:` El tamaño del array es especificado en tiempo de compilación y no puede cambiar durante la ejecución del programa. En este caso, `std::array<int, 10> `significa que myIntArray es un array de 10 enteros.

+ `Seguridad de Acceso:` `std::array` proporciona chequeo de límites, lo que significa que no puedes acceder a elementos fuera del rango permitido sin recibir una advertencia del compilador o, en tiempo de ejecución, un comportamiento indefinido.

+ `Iteradores:` Puedes utilizar iteradores con `std::array` de manera similar a otros contenedores de la biblioteca estándar.

+ `Métodos de la Clase:` Tiene métodos como `size()` para obtener el tamaño del array y otros métodos comunes asociados con contenedores.

+ `Fácil de Pasar y Retornar:` Puedes pasar y retornar std::array de funciones de manera fácil, ya que tiene semántica de valor.

 ::: info 
 compilar con el flag `-std=c++11`
 :::

## array de string

```cpp
#include <iostream>
#include <array>

int main()
{
	// Crear un array de strings con tamaño fijo 5
	std::array<std::string, 5> myStringArray; // [!code focus]
	// Inicializar el array y mostrar cada elemento
	for (int i = 0; i < myStringArray.size(); i++)
	{
		myStringArray[i] = "Elemento numero: " + std::to_string(i);
		std::cout << myStringArray[i] << std::endl;
	}
	std::cout << "Tamaño de la array es: " << myStringArray.size() << std::endl;
	return 0;
}
```
<Badge type="info" text="output" />
```shell
Elemento numero: 0
Elemento numero: 1
Elemento numero: 2
Elemento numero: 3
Elemento numero: 4
Tamaño de la array es: 5
```

## Recorrer por referencia

Podemos recorrer una array por `bucle for basado en rango`este bucle simplifica la sintaxis y hace más legible el código cuando se desea recorrer todos los elementos de un contenedor, como un array o un contenedor de la biblioteca estándar de C++.



```cpp
#include <iostream>

int main()
{
	std::string names[5] = {"Pedro", "Pablo", "Bilma", "Bulma", "Goku"};

	for (std::string name : names) // [!code focus]
		std::cout << name << std::endl;
}
```

::: tip [Array Class](https://cplusplus.com/reference/array/array/)
:::
