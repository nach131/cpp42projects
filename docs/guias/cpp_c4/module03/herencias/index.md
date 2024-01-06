# Herencias

la herencia es un mecanismo que permite a una clase `(clase derivada o subclase)` heredar los miembros y comportamientos de otra clase `(clase base o superclase)`.

La herencia es fundamental en la programación orientada a objetos y proporciona una forma de reutilizar código y modelar relaciones entre clases.

## Herencia Pública:

- Los miembros públicos de la clase base se convierten en miembros públicos de la clase derivada.
- los miembros protegidos de la clase base se convierten en miembros protegidos de la clase derivada
- los miembros privados de la clase base no son accesibles directamente desde la clase derivada.

```cpp
class Base {
public:
    int publicMember;
protected:
    int protectedMember;
private:
    int privateMember;
};

class Derived : public Base {
    // publicMember es público en Derived
    // protectedMember es protegido en Derived
    // privateMember no es accesible en Derived
};

```

## Herencia Protegida

La herencia protegida es similar a la herencia pública, excepto que los miembros públicos y protegidos de la clase base se convierten en miembros protegidos de la clase derivada.

```cpp
class Base {
public:
    int publicMember;
protected:
    int protectedMember;
private:
    int privateMember;
};

class Derived : protected Base {
    // publicMember es protegido en Derived
    // protectedMember es protegido en Derived
    // privateMember no es accesible en Derived
};

```

## Herencia Privada

- Los miembros públicos como los protegidos de la clase base se convierten en miembros privados de la clase derivada.

La herencia privada se utiliza a menudo para implementar encapsulamiento y ocultar la implementación interna de una clase.

```cpp
class Base {
public:
    int publicMember;
protected:
    int protectedMember;
private:
    int privateMember;
};

class Derived : private Base {
    // publicMember es privado en Derived
    // protectedMember es privado en Derived
    // privateMember no es accesible en Derived
};

```
## Herencia Virtual

La herencia virtual se utiliza para resolver el problema del diamante.

Cuando una clase derivada hereda de varias clases que comparten una clase común, la herencia virtual evita la ambigüedad resultante.

```cpp
class Animal {
public:
    // Miembros de Animal
};

class Mamifero : public virtual Animal {
    // Miembros de Mamifero
};

class Ave : public virtual Animal {
    // Miembros de Ave
};

class Murcielago : public Mamifero, public Ave {
    // Miembros de Murcielago
};

```
