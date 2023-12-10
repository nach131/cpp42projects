# Sobrecarga de los operadores de incremento

## Incremento y decremento

 `operator++` y decremento `operator--` en una clase te permite definir cómo se comportan estos operadores cuando se aplican a objetos de esa clase. Estos operadores pueden ser pre o postfijos y se deben implementar como métodos de la clase.

```cpp
#include <iostream>

class PhoneBook
{
private:
	PhoneBook operator++();
	PhoneBook operator--();

public:
	int list;
	void initList(bool type);
	PhoneBook();
	~PhoneBook();
};

PhoneBook::PhoneBook() { list = 0; }
PhoneBook::~PhoneBook() {}

PhoneBook PhoneBook::operator++() // [!code highlight]
{
	list++;
	return *this;
}
PhoneBook PhoneBook::operator--() // [!code highlight]
{
	list--; 
	return *this; // [!code highlight]
}

void PhoneBook::initList(bool type)
{
	if (type == true)
		++(*this); // [!code highlight]
	else
		--(*this); // [!code highlight]
}
```

```cpp
int main(void)
{
	int num;
	PhoneBook book;
	while (42)
	{
		std::cout << "> ";
		std::cin >> num;

		if (num == 0)
			return 0;
		else if (num == 1)
			book.initList(true);
		else if (num == 2)
			book.initList(false);
		std::cout << "list:" << book.list << std::endl;
	}
}
```

## *this

`*this` es un puntero especial en C++ que apunta al objeto actual. En el contexto de la sobrecarga del operador de incremento `operator++` que has mostrado, `*this` se utiliza para referirse al objeto al que se aplica el operador, es equivalente a devolver el propio objeto al que se le aplicó el operador.

**Usar this**

::: warning La Razón de usar `*this` es que permite encadedar operaciones.
```cpp
PhoneBook book1;
PhoneBook book2;
book1 = ++book2
```
`book2` ha sido modificado y el resultado se ha asginado a `book1`. Si no se devolviera `*this`, no podrías encadenar estas operaciones.
:::


::: tip Es necesarios inicializar la variable en el contructor, dos formar correctas de hacerlo.
```cpp
PhoneBook::PhoneBook() { list = 0; }
PhoneBook::PhoneBook() : list(0) {}
```
:::


## Operador de comparación

```cpp
#include <iostream>

class Point
{
private:
	int x;
	int y;

public:
	// constructor inicializandor de las variables x, y
	Point(int xCoor, int yCoor) : x(xCoor), y(yCoor) {} // [!code highlight]

	// sobrecarga del operador de igualdad
	bool operator==(const Point &other) const// [!code highlight]
	{// [!code highlight]
		return (x == other.x && y == other.y);// [!code highlight]
	}// [!code highlight]
};

int main(void)
{
	Point p1(2, 3);
	Point p2(2, 3);
	Point p3(4, 6);

	if (p1 == p2)
		std::cout << "p1 y p2 son iguales" << std::endl;
	else
		std::cout << "p1 y p2 son son diferentes" << std::endl;
	if (p1 == p3)
		std::cout << "p1 y p3 son iguales" << std::endl;
	else
		std::cout << "p1 y p3 son son diferentes" << std::endl;
}
```

::: info `Point(int xCoor, int yCoor) : x(xCoor), y(yCoor) {}` en este constructor recibe como parametro dos `int` que son asignados a las variables privadas `x` e `y` de la clase para iniciarlizarse.
:::

::: info `operator==` este operador se utiliza para comparar dos objetos de la misma clase y determinar si son iguales.
:::

+ `(const Point &other)`: Este es el parámetro de la función y representa el objeto Point con el que se compara el objeto actual. Se pasa por referencia constante `const Point &` para evitar cambios en el objeto `other` durante la comparación.