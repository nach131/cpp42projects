# Exception

`std::exception `es una clase base para todas las clases de excepciones estándar en C++.

Proporciona una interfaz común para acceder a un mensaje de error asociado con la excepción.

La clase `std::exception` tiene una función miembro virtual llamada `what()`, que devuelve una cadena de caracteres `(const char *)` que describe la excepción.

Las clases derivadas de `std::exception` generalmente implementan esta función para proporcionar información específica sobre el error.

```cpp 
#include <iostream>
#include <stdexcept>

int main() {

    try
	{
        throw std::runtime_error("Este es un error personalizado.");
    }
	catch (const std::exception &e)
	{
        std::cerr << "Se capturó una excepción: " << e.what() << std::endl;
    }

    return 0;
}

```

En este ejemplo, se lanza una excepción de tipo `std::runtime_error `con un mensaje personalizado.

Luego, en el bloque `catch`, se captura la excepción como una referencia constante a `std::exception` y se imprime el mensaje utilizando la función `what()`.


```cpp
#include <iostream>
#include <stdexcept>

int divide(int a, int b) {
    if (b == 0) 
        throw std::invalid_argument("Intento de división por cero.");
    return a / b;
}

int main() {
    try
	{
		int resultado = divide(10, 0);
		std::cout << "Resultado: " << resultado << std::endl;
    } 
	catch (const std::exception &e) 
	{
		std::cerr << "Se capturó una excepción: " << e.what() << std::endl;
    }

    return 0;
}

```
En este ejemplo, la función divide intenta realizar una división, pero verifica si el divisor (b) es cero antes de realizar la operación. Si es cero, se lanza una excepción de tipo `std::invalid_argument`. En el bloque catch, se captura la excepción y se imprime el mensaje asociado utilizando `e.what()`.

## Exception personalizada derivada

```cpp
#include <iostream>
#include <stdexcept>

class CustomException : public std::exception
{
public:
    const char *what() const throw()
    {
        return "Este es un error personalizado derivado de std::exception.";
    }
};

int main()
{
    try
    {
		throw CustomException();
    }
    catch (const std::exception &e)
    {
		std::cerr << "Se capturó una excepción: " << e.what() << std::endl;
    }

    return 0;
}

```
En este caso, se crea una clase `CustomException` que hereda de `std::exception`. La función `what()` se implementa para proporcionar un mensaje específico. Luego, en el bloque catch, se lanza y captura una instancia de CustomException, y se imprime el mensaje.