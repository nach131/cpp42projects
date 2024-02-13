# Iteradores

os iteradores adelantados se definen como una clase que tiene un operador `*` para acceder al elemento del contenedor al que apunta, y operadores `++` y `--` para avanzar o retroceder en la secuencia de elementos. Además, deben cumplir con las siguientes restricciones:

1. No se permiten múltiples asignaciones a un mismo iterador adelantado. Es decir, si asignas un iterador adelantado a otro iterador adelantado, el resultado es un iterador no definido.
2. Los operadores `++` y `--` solo avanzan o retroceden en una posición. No se permite saltar varias posiciones al mismo tiempo.
3. El operador `*` devuelve la referencia a un elemento del contenedor, lo que significa que puedes modificar el valor de dicho elemento directamente.
4. Los iteradores adelantados solo se pueden usar para acceder a los elementos de un contenedor que tenga una implementación que permita acceder a dichos elementos en orden.

Los iteradores adelantados son útiles porque permiten realizar operaciones sobre los elementos de un contenedor sin necesidad de conocer su implementación interna, lo que facilita la portabilidad y reutilización del código. También se utilizan con `find()`, `remove()`, `sort()` y `unique()`.

```cpp
#include <iostream>
#include <vector>

int main()
{
    int arr[] = {1, 2, 3, 4, 5};
    std::vector<int> numbers(arr, arr + sizeof(arr) / sizeof(arr[0]));

    int sum = 0;

    // Iterador adelantado para recorrer el vector
    std::vector<int>::iterator it = numbers.begin();

    while (it != numbers.end())
    {
        sum += *it; // Sumamos el elemento actual al contador de la suma
        it++;       // Avanzamos al siguiente elemento del vector
    }

    std::cout << "La suma de los elementos es: " << sum << std::endl;

    return 0;
}

```

En C++98 no se puede inicialiar y asignar valores a un vector esa caracteristica se implanto en c++11.

Para iniciarlizar un vector con un rango de elementos, se crea una array inicializando con los valores.

Se inica el constructor de `std::vector` que toma dos iteradores que representan el rango. El primer iterador (arr) apunta al inicio del rango, y el segundo iterador (arr + sizeof(arr) / sizeof(arr[0])) apunta al final del rango.

- `arr` es un puntero al primer elemento del array.
- `arr + sizeof(arr) / sizeof(arr[0])` es un puntero a un elemento más allá del último elemento del array.

La expresión `sizeof(arr) / sizeof(arr[0])` calcula la cantidad de elementos en el array dividiendo el tamaño total del array entre el tamaño de un elemento individual. Esto es necesario porque sizeof(arr) da el tamaño total del array en bytes, y dividir por sizeof(arr[0]) proporciona la cantidad de elementos en el array.