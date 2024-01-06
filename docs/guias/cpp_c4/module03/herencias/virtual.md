# Virtual

```cpp
#include <iostream>
#include <string>

// Clase base
class Animal {
public:
    Animal(const std::string& name) : name(name) {}

    virtual void sonido() const {
        std::cout << "Animal hace algún sonido." << std::endl;}

protected:
    std::string name;
};

// Clases derivadas utilizando herencia virtual
class Mamifero : public virtual Animal {
public:
    Mamifero(const std::string& name) : Animal(name) {}

    void darALuz() const {
        std::cout << name << " está dando a luz." << std::endl;}

    // método virtual en la clase base
    void sonido() const  {
        std::cout << "Mamífero hace un sonido diferente." << std::endl;}
};

class Ave : public virtual Animal {
public:
    Ave(const std::string& name) : Animal(name) {}

    void ponerHuevos() const {
        std::cout << name << " está poniendo huevos." << std::endl;}

    //  método virtual en la clase base
    void sonido() const  {
        std::cout << "Ave hace un sonido diferente." << std::endl;}
};

// Clase que hereda de ambas clases (Mamifero y Ave) utilizando herencia virtual
class Murcielago : public Mamifero, public Ave {
public:
    Murcielago(const std::string& name) : Animal(name), Mamifero(name), Ave(name) {}

    // Override del método virtual en la clase base
    void sonido() const override {
        std::cout << "Murciélago hace un sonido diferente." << std::endl;}
};

int main() {
    // Crear un objeto de la clase derivada
    Murcielago miMurcielago("Batty");

    // Acceder a los métodos de las clases base y derivada
    miMurcielago.darALuz();      // Método de Mamifero
    miMurcielago.ponerHuevos();  // Método de Ave
    miMurcielago.sonido();       // Método override de Murcielago

    return 0;
}

```
