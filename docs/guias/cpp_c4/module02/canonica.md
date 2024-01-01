# Clase canónica

La "Orthodox Canonical Class Form" `OCCF` es una guía para diseñar clases de manera adecuada en C++. Esta forma canónica especifica `cuatro funciones `necesarias que debes implementar al declarar tipos de datos definidos por el usuario para asegurarte de que se comporten correctamente en los cuatro contextos básicos de uso de objetos.

## Foo.hpp

1. `Constructor por defecto` (linea 6)

Se utiliza para inicializar un objeto cuando se crea. Un constructor por defecto es aquel que puede ser llamado sin argumentos.

Si el constructor se declaran parametros estos tiene que tener un valor predeterminado para que el constructor pueda ser llamado sin argumentos.

El constructor por defecto para la clase Foo se declara en la línea 6. Declara un parámetro de tipo entero cuyo valor predeterminado es cero.

2. `Destructor` (line 7)

Se encarga de liberar los recursos asignados a un objeto cuando ya no es necesario. Es esencial para evitar posibles problemas de pérdida de memoria.

Es declarado como virtual, lo cual es común cuando estás diseñando clases que pueden ser heredadas. Esto permite un comportamiento de destrucción polimórfica, lo cual es útil si la clase se utiliza como base para una jerarquía de clases.

El destructor de Foo se declara en la línea 7 del ejemplo 17.1. Se declara virtual en previsión de soportar una jerarquía de herencia.

3. `Constructor de copia` (linea 8)

Un constructor de copia se utiliza para crear nuevos objetos a partir de objetos existentes. El constructor de copia declarará al menos un parámetro que es un tipo de referencia al que pertenece el constructor de copia.

El constructor de copia de Foo se declara en la línea 8. Declara un parámetro llamado "rhs" (abreviatura de "right hand side" o "lado derecho") que es una referencia a un objeto Foo (es decir, Foo&).

El parámetro `rhs` es una referencia constante a otro objeto Foo. Esto significa que el objeto original no se modificará durante la copia.

4. `Operador de asignación de copia` (linea 9)

Se utiliza para asignar el valor de un objeto a otro ya existente. También es crucial para garantizar un comportamiento correcto al manejar asignaciones de objetos.

El operador de asignación de copia de Foo se declara en la línea 9. Declara un parámetro que es una referencia a un objeto Foo.

Al igual que el constructor de copia, el parámetro rhs es una referencia constante, lo que significa que el objeto original no se modificará durante la asignación. 

<Badge type="tip" text="Foo.hpp" />

```ts:line-numbers
#ifndef FOO_HPP
#define FOO_HPP
class Foo
{
public:
	Foo(int i = 0);// [!code highlight]
	virtual ~Foo();// [!code highlight]
	Foo(const Foo &rhs);// [!code highlight]
	Foo operator=(const Foo &rhs); ;// [!code highlight]
	int getVal();
	void setVal(int i);

private:
	int *iptr;
};

#endif
```
## Foo.cpp

1. `Constructor por defecto` (linea 3)

Toma un entero `i` como argumento y asigna dinámicamente un nuevo entero en el heap, almacenando su dirección en el puntero privado `_iptr` de la clase.

2. `Destructor` (line 5)

Este es el destructor de la clase Foo. Libera la memoria reservada dinámicamente para el entero en el heap usando delete.

3. `Constructor de copia` (linea 7)

Este es el constructor de copia de la clase Foo. Crea un nuevo objeto Foo copiando el valor al que apunta `_iptr` del objeto `rhs`.

4. `Operador de asignación de copia` (linea 9)

Este es el operador de asignación de la clase Foo. Asigna el valor al que apunta `_iptr` del objeto rhs al objeto actual `(*this)`. Se realiza una verificación para evitar la autoasignación, que podría resultar en la liberación incorrecta de memoria.


<Badge type="tip" text="Foo.cpp" />

```ts:line-numbers
#include "Foo.hpp"

Foo::Foo(int i) { _iptr = new int(i); } // [!code highlight]

Foo::~Foo() { delete _iptr; } // [!code highlight]

Foo::Foo(const Foo &rhs) { _iptr = new int(*(rhs._iptr)); } // [!code highlight]

Foo Foo::operator=(const Foo &rhs) // [!code highlight]
{
	if (this != &rhs)
		*_iptr = *(rhs._iptr);
	return *this;
}

int Foo::getVal() const { return *_iptr; } 

void Foo::setVal(int i) { *_iptr = i; }

const Foo &fooFunction(const Foo &foo)
{
	std::cout << "fooFunction() called: " << foo.getVal() << std::endl;
	return foo;
}
```

## main.cpp

<Badge type="tip" text="main.cpp" />

```cpp
#include "Foo.hpp"


int main()
{
	Foo f0, f1(1), f2(2);
	std::cout << f0.getVal() << std::endl;
	std::cout << f1.getVal() << std::endl;
	std::cout << f2.getVal() << std::endl;
	std::cout << "-------------" << std::endl;
	Foo f3(f2);
	std::cout << f3.getVal() << std::endl;
	f3 = f1;
	std::cout << f3.getVal() << std::endl;
	std::cout << "-------------" << std::endl;
	f3.setVal(3);
	std::cout << f0.getVal() << std::endl;
	std::cout << f1.getVal() << std::endl;
	std::cout << f2.getVal() << std::endl;
	std::cout << f3.getVal() << std::endl;
	std::cout << "-------------" << std::endl;
	f3 = fooFunction(f2);
	std::cout << f3.getVal() << std::endl;
	return 0;
}
```

<Badge type="info" text="output" />
```shell
0
1
2
-------------
2
1
-------------
0
1
2
3
-------------
fooFunction() called: 2
2
```
