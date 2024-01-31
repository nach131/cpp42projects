# Containers

[Containers library](https://en.cppreference.com/w/cpp/container)

Los contenedores son colecciones de elementos que se organizan y se almacenan de forma eficiente. Hay varios tipos de contenedores disponibles en la biblioteca estándar de C++, como `vetor`, `list`, `set`, `map`





[map]:(https://en.cppreference.com/w/cpp/container/map) Es una colección de pares clave-valor, donde cada clave es única y las claves y valores están ordenados en función de la clave. No tiene acceso directo a los elementos por índice.

```cpp
int main()
{
	// Declara un mapa vacío de pares de enteros.
	std::map<int, int> map;

	// Asocia elementos al mapa.
	map[1] = 10;
	map[2] = 20;
	map[3] = 30;

	// Imprime los pares del mapa.
	for (std::map<int, int>::iterator it = map.begin(); it != map.end(); ++it)
		std::cout << "(" << (*it).first << ", " << (*it).second << ") ";
	std::cout << std::endl;

	// Borra el segundo par del mapa.
	map.erase(map.find(2));

	// Agrega un nuevo par (4, 42) al mapa.
	map[4] = 42;

	// Imprime los pares del mapa actualizado.
	for (std::map<int, int>::iterator it = map.begin(); it != map.end(); ++it)
		std::cout << "(" << (*it).first << ", " << (*it).second << ") ";
	std::cout << std::endl;

	return 0;
}
```


<Badge type="info" text="output" />
```bash
(1, 10) (2, 20) (3, 30)
(1, 10) (3, 30) (4, 42)
```
