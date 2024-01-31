# [set](https://en.cppreference.com/w/cpp/container/set)

Es una colección no ordenada que no permite duplicados de los elementos. No tiene acceso directo a los elementos por índice.

```cpp
#include <iostream>
#include <set>

int main()
{
    std::set<int> set;

    // Añade elementos
    set.insert(1);
    set.insert(2);
    set.insert(3);

    // Imprime los elementos
    for (std::set<int>::iterator it = set.begin(); it != set.end(); ++it)
        std::cout << *it << " ";
    std::cout << std::endl;

    // Borra el Segundo elemento
    set.erase(2);

    // Agrega un nuevo elemento
    set.insert(42);

    // Imprime los elementos del conjunto actualizado.
    for (std::set<int>::iterator it = set.begin(); it != set.end(); ++it)
        std::cout << *it << " ";
    std::cout << std::endl;

    return 0;
}

<Badge type="info" text="output" />

```bash
1 2 3
1 3 42
```

## Métodos (C++98)

- `begin()` y `end()`: Devuelven iteradores al principio y final del conjunto, respectivamente.
- `empty()`: Devuelve `true` si el conjunto está vacío, de lo contrario devuelve `false`.
- `size()`: Devuelve el número de elementos en el conjunto.
- `clear()`: Elimina todos los elementos del conjunto.
- `insert(value_type)`: Añade un elemento al conjunto. La sintaxis es la siguiente: `set.insert(element)`.
- `find(const key_type&)`: Devuelve un iterador al primer elemento que coincida con la especificada. Si no hay ningún elemento que cumpla esta condición, devuelve el final del conjunto.
- `erase(iterator)`: Elimina el elemento al que apunta el iterador.
- `count(const key_type&)`: Devuelve el número de elementos en el conjunto cuyo valor coincida con la especificada.
- `lower_bound(const key_type&)`: Devuelve un iterador al principio del rincón donde se podría insertar un elemento mayor que cualquier elemento existente en el conjunto. Si no hay ningún elemento, devuelve el final del conjunto.