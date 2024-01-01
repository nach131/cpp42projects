# Exe01

## pragma once


`#pragma once` es una directiva de preprocesador que se utiliza para garantizar que un archivo de encabezado `header` se incluya solo una vez durante el proceso de compilación. Esto ayuda a prevenir problemas de inclusión múltiple que pueden ocurrir cuando el mismo archivo de encabezado se incluye varias veces en un programa.

Cuando se utiliza #pragma once, el compilador verifica si el archivo de encabezado ya ha sido incluido y, si es así, lo ignora en las inclusiones posteriores.

## typedef

 C++ se utiliza para crear alias `nombres alternativos` para tipos de datos existentes, lo que puede hacer que el código sea más legible y fácil de mantener. 

 ```cpp
#include <iostream>
#include <vector>

// Crear un alias para std::vector<int>
typedef std::vector<int> Enteros; // [!code focus]

int main()
{
    Enteros miVector;

    miVector.push_back(11);
    miVector.push_back(131);
    miVector.push_back(42);

    // Mostrar los elementos del vector
    std::cout << "Elementos del vector: ";

    for (int i = 0; i < miVector.size(); i++)
        std::cout << miVector[i] << ", ";

    return 0;
}

 ```
 <Badge type="info" text="output" />
 ```shell
 Elementos del vector: 11, 131, 42,
 ```
 
## 	typedef std::pair

`std::pair` es una plantilla de la biblioteca estándar de C++ que representa un par de elementos.

 Cada objeto std::pair tiene dos componentes, llamadas `first` y `second`, que pueden ser de tipos diferentes. Este contenedor es útil cuando necesitas asociar dos valores, como una relación clave-valor.

 ```cpp
template <class T1, class T2>
struct pair
{
	T1 first;
	T2 second;

	pair() : first(T1()), second(T2()) {}
	pair(const T1 &x, const T2 &y) : first(x), second(y) {}
};

#include <iostream>

int main()
{
	// Crear un par de enteros
	std::pair<int, int> coordenadas(3, 4);

	// Mostrar los valores de first y second
	std::cout << "Coordenadas: (" << coordenadas.first << ", " << coordenadas.second << ")" << std::endl;

	// Utilizar std::make_pair para crear un par de caracteres
	std::pair<char, char> letras = std::make_pair('A', 'B');

	// Mostrar los valores de first y second del segundo par
	std::cout << "Letras: (" << letras.first << ", " << letras.second << ")" << std::endl;

	return 0;
}

 ```

 <Badge type="info" text="output" />
 ```shell
Coordenadas: (3, 4)
Letras: (A, B)
 ```
 
 ## pair interator

`iterator` se refiere a un tipo que proporciona la capacidad de iterar sobre los elementos de un contenedor. 

Los contenedores en C++, como vectores `std::vector`, listas `std::list`, conjuntos `std::set`, y otros, tienen funciones miembro llamadas `begin()` y `end()` que devuelven iteradores que apuntan al primer elemento y más allá del último elemento, respectivamente.

 ```cpp
#include <iostream>
#include <vector>

int main()
{
	// Definir dos vectores
	int arrA[] = {1, 2, 3, 4, 5};
	char arrB[] = {'a', 'b', 'c', 'd', 'e'};

	// Inicializar los vectores con los arreglos
	std::vector<int> vectorA(arrA, arrA + sizeof(arrA) / sizeof(arrA[0]));
	std::vector<char> vectorB(arrB, arrB + sizeof(arrB) / sizeof(arrB[0]));

	// Definir un par de iteradores
	typedef std::pair<std::vector<int>::iterator, std::vector<char>::iterator> pair_of_iterators;

	// Inicializar los iteradores con los comienzos de los vectores
	pair_of_iterators iterators(vectorA.begin(), vectorB.begin());

	// Iterar simultáneamente sobre ambos vectores usando el par de iteradores
	while (iterators.first != vectorA.end() && iterators.second != vectorB.end())
	{
		// Acceder a los elementos de ambos vectores usando los iteradores del par
		std::cout << "Elemento de vectorA: " << *iterators.first << ", Elemento de vectorB: " << *iterators.second << std::endl;

		// Mover los iteradores al siguiente elemento
		++iterators.first; // [!code highlight]
		++iterators.second; // [!code highlight]
	}

	return 0;
}

 ```
 <Badge type="info" text="output" />
 ```shell
Elemento de vectorA: 1, Elemento de vectorB: a
Elemento de vectorA: 2, Elemento de vectorB: b
Elemento de vectorA: 3, Elemento de vectorB: c
Elemento de vectorA: 4, Elemento de vectorB: d
Elemento de vectorA: 5, Elemento de vectorB: e
 ```
 
 