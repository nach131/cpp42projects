# list

[list](https://en.cppreference.com/w/cpp/container/list): Es una colección ordenada de elementos del mismo tipo que se pueden agregar, eliminar y modificar en tiempo constante. No tiene acceso directo a los elementos por índice.

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