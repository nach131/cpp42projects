# [std::stack](https://en.cppreference.com/w/cpp/container/stack)

Es una clase plantilla que pertenece a la biblioteca estándar de C++ (STL), y se utiliza para manejar estructuras de datos `LIFO` (Last-In-First-Out) o "pilas" lo que significa que el último elemento que se inserta en la pila es el primero en ser eliminado.

```cpp
#include <stack>
std::stack<int> miPila; // Declara una pila que contendrá enteros
```

Funciones miembros de stack:

- `push(valor)`: Agrega un elemento al tope de la pila.
- `pop()`: Elimina el elemento en el tope de la pila (sin devolverlo).
- `top()`: Devuelve una referencia al elemento en el tope de la pila, sin eliminarlo.
- `empty()`: Devuelve true si la pila está vacía, false en caso contrario.
- `size()`: Devuelve el número de elementos en la pila.


```cpp
#include <iostream>
#include <stack>

int main() 
{
    std::stack<int> myStack;

    // Agregamos 5 números enteros a la pila.
    myStack.push(10);
    myStack.push(20);
    myStack.push(30);
    myStack.push(40);
    myStack.push(50);

    // Recuperamos y mostramos los elementos de la pila.
    std::cout << "Elementos en la pila: ";
    while (!myStack.empty()) {
        std::cout << myStack.top() << " ";
        myStack.pop();
    }
    std::cout << std::endl;

    return 0;
}
```

```cpp
#include <iostream>
#include <stack>

int main()
 {

   std::stack<std::string> myStack;

	// Agregamos 5 strings a la pila.
	myStack.push("42 Barcelona");
	myStack.push("42 Madrid");
	myStack.push("42 Paris");
	
    // Recuperamos y mostramos los elementos de la pila.
    std::cout << "Elementos en la pila: ";
    while (!myStack.empty()) {
        std::cout << myStack.top() << " ";
        myStack.pop();
    }
    std::cout << std::endl;

    return 0;
}
```
