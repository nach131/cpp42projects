# [Vector](https://en.cppreference.com/w/cpp/container/vector)

Es una colección ordenada y accesible por índice de elementos del mismo tipo. Puede crecer o reducir su tamaño durante la ejecución del programa.

```cpp
#include <iostream>
#include <vector>

int main() {
	std::vector<int> vec;

	// Añade elementos al vector.
	vec.push_back(1);
	vec.push_back(2);
	vec.push_back(3);

	// Imprime los elementos del vector.
	for (int i = 0; i < vec.size(); ++i)
		std::cout << vec[i] << " ";
	std::cout << std::endl;

	// Borra el último elemento añadido.
	vec.pop_back();

	// Inserta un nuevo elemento en la posición 1 del vector.
	vec.insert(vec.begin() + 1, 4);

	// Imprime los elementos del vector actualizado.
	for (int i = 0; i < vec.size(); ++i)
		std::cout << vec[i] << " ";
		
	std::cout << std::endl;
}
```

<Badge type="info" text="output" />

```bash
1 2 3
1 4 2
```

## Métodos (C++98)

- `begin()` y `end()`: Devuelven iteradores al principio y final del vector, respectivamente.
- `empty()`: Devuelve `true` si el vector está vacío, de lo contrario devuelve `false`.
- `size()`: Devuelve el número de elementos en el vector.
- `clear()`: Elimina todos los elementos del vector.
- `push_back(const T&)`: Añade un nuevo elemento al final del vector. La sintaxis es la siguiente: `vector.push_back(element)`.
- `pop_back()`: Elimina el último elemento del vector.
- `front()` y `back()`: Devuelven referencias a los primeros o últimos elementos del vector, respectivamente.
- `at(size_type)`: Devuelve la referencia al elemento en la posición especificada. Si no existe tal elemento, lanza una excepción de índice fuera de rango.
- `insert(iterator, const T&)`: Añade un nuevo elemento al medio del vector. La sintaxis es la siguiente: `vector.insert(it, element)`.
- `erase(iterator)`: Elimina el elemento al que apunta el iterador.
- `assign(input_iterator, input_iterator)`: Asigna un nuevo contenido al vector. La sintaxis es la siguiente: `vector.assign(it1, it2)`.
- `resize(size_type, const T&)`: Cambia el tamaño del vector a la especificada y si es necesario, rellena los nuevos elementos con la especificada.
- `reserve(size_type)`: Reserva espacio en memoria para almacenar al menos el número de elementos especificado.
- `swap(vector&)`: Intercambia el contenido del vector por el otro vector.