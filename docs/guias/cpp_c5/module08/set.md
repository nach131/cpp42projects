# set

[set](https://en.cppreference.com/w/cpp/container/set): Es una colección no ordenada que no permite duplicados de los elementos. No tiene acceso directo a los elementos por índice.

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