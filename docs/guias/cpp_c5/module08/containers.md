# Containers

[Containers library](https://en.cppreference.com/w/cpp/container)

- **Contenedores**: En C++98, existen cinco tipos principales de contenedores: `vector`, `list`, `deque`, `set` y `map`. Estos contenedores proporcionan diferentes capacidades para almacenar y acceder a los elementos.
- **Inserción y eliminación de elementos**: Para agregar o eliminar un elemento en un contenedor, se utilizaban métodos como `push_back()`, `pop_back()`, `insert(iterator, value_type)` y `erase(iterator)`.
- **Iteradores**: Los iteradores permiten acceder a los elementos de un contenedor. En C++98, se utilizaban iteradores de solo avance `forward iterator`, que permitían desplazarse por el contenedor en una dirección (normalmente hacia adelante).
- **Función begin() y end()**: Las funciones `begin()` y `end()` devuelven un iterador al principio y final del contenedor, respectivamente. Esto permite recorrer los elementos de un contenedor utilizando ciclos `for` o iteradores.
- **Función size()**: La función `size()` devuelve el número de elementos en el contenedor. Esta información es útil para saber cuántas veces se itera sobre un contenedor cuando se utiliza una función `for`.
- **Operadores de asignación y comparación**: Los operadores `==`, `!=`, `<`, `>`, `<=` y `>=` permiten comparar el contenido de dos contenedores. También se puede usar la función `swap()` para intercambiar los elementos de dos contenedores.