# Overloading

`Sobrecarga de funciones` permite definir múltiples funciones con el mismo nombre pero con diferentes tipos o números de parámetros. El compilador determinará automáticamente cuál versión de la función utilizar según el contexto de la llamada.

```cpp
#include <iostream>

int getRes(int a, int b) // [!code highlight]
{
	return a * b;
}

std::string getRes(std::string a, std::string b) // [!code highlight]
{
	return a + " " + b;
}

int main(void)
{
	int number;
	std::string name;

	number = getRes(3, 5);
	name = getRes("Pedro", "Picapiedra");

	std::cout << "Number: " << number << std::endl;
	std::cout << "String: " << name << std::endl;

	return 0;
}

```

Se ha definido dos funciones llamadas `getRes`, una que toma dos enteros y devuelve su multiplicación, y otra que toma dos cadenas y devuelve su concatenación.

Esta es una forma poderosa de hacer que tu código sea más flexible y expresivo al permitir que la misma función realice tareas diferentes según el tipo de datos que se le proporciona.