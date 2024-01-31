# [Map](https://en.cppreference.com/w/cpp/container/map)

Es una colección de pares clave-valor, donde cada clave es única y las claves y valores están ordenados en función de la clave. No tiene acceso directo a los elementos por índice.

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

## map puntero función

```cpp
#include <iostream>
#include <stdlib.h>
#include <map>

int suma(int a, int b) { return a + b; }
int resta(int a, int b) { return a - b; }
int mult(int a, int b) { return a * b; }

int main(int argc, char **argv)
{
	if (argc != 4)
	{
		std::cout << "ejemplo: \"2\" \"x\" \"5\"" << std::endl;
		return 1;
	}

	char str = argv[2][0];
	int a = atoi(argv[1]);
	int b = atoi(argv[3]);

	std::map<char, int (*)(int, int)> map;

	// Asocia elementos al mapa.
	map['+'] = &suma;
	map['-'] = &resta;
	map['x'] = &mult;

	std::map<char, int (*)(int, int)>::iterator it = map.find(str);

	if (it != map.end())
	{
		int resultado = (it->second)(a, b);
		std::cout << a << str << b << " = " << resultado << std::endl;
	}
	else
		std::cout << "NotFound" << std::endl;

	return 0;
}
```

1. Se declara un `std::map` llamado `map` que asocia caracteres (`char`) con punteros a funciones que toman dos enteros y devuelven un entero (`int (*)(int, int)`).

2. Se asocian funciones específicas con caracteres en el mapa.

3. Se utiliza `map.find(str)` para buscar el caracter `str` en el mapa.

4. Si se encuentra, se llama a la función asociada utilizando `(it->second)(a, b)` donde `it->second` es el puntero a la función encontrada.

5. Se imprime el resultado.

En el código proporcionado, las funciones asociadas son `suma`, `resta`, y `mult`. Dependiendo del valor de `str`, se llamará a una de estas funciones con los valores de `a` y `b`. Por ejemplo, si `str` es `'+'`, se llamará a la función `suma(a, b)`.

## Métodos (C++98)

- `begin()` y `end()`: Devuelven iteradores al principio y final del mapa, respectivamente.
- `empty()`: Devuelve `true` si el mapa está vacío, de lo contrario devuelve `false`.
- `size()`: Devuelve el número de pares en el mapa.
- `clear()`: Elimina todos los pares del mapa.
- `insert(value_type)`: Añade un par al mapa. La sintaxis es la siguiente: `map.insert({key, value})`.
- `find(const key_type&)`: Devuelve un iterador al primer par cuya clave coincida con la especificada. Si no hay ningún par que cumpla esta condición, devuelve el final del mapa.
- `erase(iterator)`: Elimina el par al que apunta el iterador.
- `count(const key_type&)`: Devuelve el número de pares en el mapa cuya clave coincida con la especificada.
- `lower_bound(const key_type&)`: Devuel un iterador al principio del rincón donde se podría insertar una pare con la especificada clave mayor que cual clave exista en el mapa. Si no hay ningún par con esta clave, devuela el final del mapa.