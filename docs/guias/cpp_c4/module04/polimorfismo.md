# Polimorfismo derivado

El Polimorfismo derivado (o **Subtype polimorphism**) se identifica cuando se crea una clase base con uno o más métodos `virtual`, y hay muchas clases derivadas que heredan todos estos métodos de la base.

Esto se utiliza mucho cuando tienes muchas clases que derivan de la misma clase base.

Ejemplo:

```
          Animal
      /     |     \
    Gato   Ave   Perro
```

```cpp
class Animal
{
   ...
   virtual void makeSound() const;// [!code focus]
};

class Gato : public Animal {
	...
   void makeSound() const;// [!code focus]
};

class Ave : public Animal {
	...
   void makeSound() const;// [!code focus]
};

class Perro : public Animal {
	...
   void makeSound() const;// [!code focus]
};
```

Se puede notar como hay una clase base `Animal`, que tiene el método:
```cpp
virtual void makeSound() const;
```
Todas las clases derivadas `Gato`, `Ave` y `Perro` tienen el mismo método, pero no virtual, porque cuando un método de una clase base es virtual, todas las clases que derivan de la misma **TIENEN** que redeclarar este método como no virtual y definirlo en cada clase.

```cpp
int main()
{
   const Animal* j = new Dog();
   const Animal* i = new Cat();

   j->makeSound(); //will output the dog sound!
   i->makeSound(); //will output the cat sound!
}
```
Aquí se ve muy bien como funciona: en la clase `Dog` y `Cat` tenemos el método `makeSound` heredado de la clase `Animal`, y cuando cualquier objeto de estas dos clases (**j** es `Dog` y **i** es `Cat`) llama a este método, llama a su método y no a lo de `Animal`o al de otra clase derivada