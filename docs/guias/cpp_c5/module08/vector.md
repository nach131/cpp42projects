# Vector

[vector](https://en.cppreference.com/w/cpp/container/vector): Es una colección ordenada y accesible por índice de elementos del mismo tipo. Puede crecer o reducir su tamaño durante la ejecución del programa.

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