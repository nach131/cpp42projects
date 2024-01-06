# El problema del diamante

Surgue cuando una clase hereda de dos clases que a su vez comparte una clase en común.

Esto puede causar ambigüedades en el código.

Tenemos una clase llamada `Animal`, y dos clases derivadas llamadas `Mamifero` y `Ave` que heredan `Animal`. Y otra clase `Murcielago` que hereda tanto de `Mamifero` como de `Ave`.

`Murcielago` tiene dos caminos para llegar a la clase base `Animal`.

```
    Animal
   /      \
Mamifero   Ave
   \      /
   Murcielago
```

Ahora es donde surge el problema.Cuando intentas acceder a miembros de la clase `Animal` desde `Murcielago`, el compilador puede confundirse por que hay dos caminos posibles. Esto conduce a una ambigüedad y, por lo tanto a un error.

Para solucionar este problema, C++ tiene la herencia virtual.

Tendriamos que hacer que las herencias de `Mamifero` y `Ave` desde `Animal` sea virtual, de modo que solo haya una instancia compartida de `Aminal` en `Murcielago`.

```cpp
class Animal
{
 ...	
};

class Mamifero : public virtual Animal {// [!code focus]
	...
};

class Ave : public virtual Animal {// [!code focus]
	...
};

class Murciegalo : public Mamifero, public Ave {// [!code focus]
	...
};
```

Al hacer que la herencia de `Animal` sea virtual en `Mamifero` y `Ave`, se evita la duplicidad de instancias de `Animal`, y el problema de diamante se resuelve.

Esto garantiza que haya una única instacia compartida de la clase base `Animal` en `Murcielago`.