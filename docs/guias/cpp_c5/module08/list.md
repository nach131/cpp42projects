# [list](https://en.cppreference.com/w/cpp/container/list)

Es una colección ordenada de elementos del mismo tipo que se pueden agregar, eliminar y modificar en tiempo constante. No tiene acceso directo a los elementos por índice.

```cpp
int main()
{
    std::list<int> list;

    // Añade elementos a la lista.
    list.push_back(1);
    list.push_back(2);
    list.push_back(3);

    // Imprime los elementos de la lista.
    for (std::list<int>::iterator it = list.begin(); it != list.end(); ++it)
        std::cout << *it << " ";
    std::cout << std::endl;

    // Borra el segundo elemento de la lista.
    if (list.size() > 1)
    {
        std::list<int>::iterator it = list.begin();
        std::advance(it, 1);
        list.erase(it);
    }
    // Inserta un nuevo elemento (4) antes del primer elemento de la lista.
    list.insert(list.begin(), 42);

    // Imprime los elementos de la lista actualizada.
    for (std::list<int>::iterator it = list.begin(); it != list.end(); ++it)
        std::cout << *it << " ";
    std::cout << std::endl;

    return 0;
}
```
<Badge type="info" text="output" />

```bash
1 2 3
42 1 3
```

## Métodos (C++98)

- `begin()` y `end()`: Devuelven iteradores al principio y final de la lista, respectivamente.
- `empty()`: Devuelve `true` si la lista está vacía, de lo contrario devuelve `false`.
- `size()`: Devuelve el número de elementos en la lista.
- `clear()`: Elimina todos los elementos de la lista.
- `push_front(const T&)` y `push_back(const T&)`: Añade un nuevo elemento al principio o final de la lista, respectivamente. La sintaxis es la siguiente: `list.push_back(element)`.
- `pop_front()` y `pop_back()`: Elimina el primer o último elemento de la lista, respectivamente.
- `front()` y `back()`: Devuelven referencias a los primeros o últimos elementos de la lista, respectivamente.
- `insert(iterator, const T&)`: Añade un nuevo elemento al medio de la lista. La sintaxis es la siguiente: `list.insert(it, element)`.
- `erase(iterator)`: Elimina el elemento al que apunta el iterador.
- `remove(const T&)`: Elimina todos los elementos de la lista cuyo valor coincida con la especificada.
- `unique()`: Elimina todas las ocurrencias consecutivas del mismo elemento en la lista.
- `reverse()`: Invierte el orden de los elementos en la lista.
- `sort()`: Ordena los elementos en la lista.