---
head:
  - - meta
    - name: og:description
      content: modificadores de acceso 
  - - meta
    - name: og:title
      content: Module 00 C++
---
<script setup lang="ts">
import Woaos from '@theme/components/categoria.vue';

</script>


# Modificadores de acceso 

`public`, `protected` y `private` determinan el nivel de visibilidad y acceso que tienen los miembros de una clase. Estos modificadores definen cómo los datos y funciones miembro de una clase son accesibles desde fuera de la clase y dentro de ella. 

## Public
+ Los miembros declarados como public son accesibles desde cualquier parte del programa, incluyendo fuera de la clase.
+ Pueden ser accedidos y modificados directamente.

## Protected
+ Los miembros declarados como `protected` son accesibles desde dentro de la clase y desde las clases derivadas `heredadas`.
+ No son accesibles directamente desde fuera de la clase, pero pueden ser utilizados por clases derivadas.  [More...](../../module03/herencias/index.md)

## Private
+ Los miembros declarados como private son accesibles solo desde dentro de la propia clase.
+ No son accesibles desde fuera de la clase ni por clases derivadas.

```cpp
#include <iostream>

class Person
{

public: // [!code highlight]
	std::string NamePublic;

	void ShowNamePublic()
	{
		std::cout << "Nombre publico " << NamePublic << std::endl;
	}
	void PutNames(const std::string &nameProt, const std::string &namePriv)
	{
		NameProtected = nameProt;
		NamePrivate = namePriv;
	}
	void ShowNames()
	{
		std::cout << "Nombre publico " << NamePublic << std::endl;
		std::cout << "Nombre protegido " << NameProtected << std::endl;
		std::cout << "Nombre privado " << NamePrivate << std::endl;
	}

protected: // [!code highlight]
	std::string NameProtected;

private: // [!code highlight]
	std::string NamePrivate;
};

int main()
{
	Person perosona1;

	perosona1.NamePublic = "Pedro";
	perosona1.ShowNamePublic();

	// (no es posible desde fuera de la clase)
	// perosona1.NameProtected = "Pablo";
	// perosona1.NamePrivate = "Bilma";

	perosona1.PutNames("Pablo", "Bilma");
	perosona1.ShowNames();

	return 0;
}
```
<Badge type="info" text="output" />
```shell
Nombre publico Pedro
Nombre publico Pedro
Nombre protegido Pablo
Nombre privado Bilma
```