# Clases Abstractas

Las clases abstractas son un tipo particular de clases que utilizan el concepto de polimorfismo y no tienen la posibilidad de ser instanciadas como objeto estático, solo se pueden declarar variables de clases abstractas como punteros de una de sus clases derivadas.

Las clases abstractas se identifican por tener al menos un método puro `virtual`:
```cpp
virtual void makeSound() const = 0; // puro porque tiene el `= 0`
```
Cuando un método es puro, no puedes definirlo en la clase, pero tienes que definirlo en sus derivadas, si no el compilador te devuelve un error de compilación

Ponemos el ejemplo de antes, pero con `Animal` como clase abstracta:
```cpp
class Animal
{
   ...
   virtual void makeSound() const = 0; // método puro virtual// [!code focus]
};

class Gato : public Animal {
	...
   void makeSound() const; // redeclaracion // [!code focus]
};

class Ave : public Animal {
	...
   void makeSound() const; // redeclaracion // [!code focus]
};

class Perro : public Animal {
	...
   void makeSound() const; // redeclaracion // [!code focus]
};
```
```cpp
int main()
{
   const Animal a; // error de compilación
   const Animal* b = new Dog(); // bien
}
```
La variable a devuelve un error de compilación, porque `Animal` es una clase abstracta, la variable b no devuelve ningún error porque está permitido.

Si se utiliza la variable b sin definirla con `new Dog()` y se llama a el método `makeSound()`, el compilador devuelve un error, porque b es un puntero de una clase abstracta y no tiene valor de ninguna de sus clases derivadas `Dog`, `Cat` o `Perro`.