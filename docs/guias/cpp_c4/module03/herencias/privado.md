# Privada

```cpp
#include <iostream>
#include <string>

// Clase base
class Animal {
private:
    std::string name;

public:
    Animal(const std::string& name) : name(name) {}

    void comer() const {
        std::cout << name << " está comiendo." << std::endl;}
    void dormir() const {
        std::cout << name << " está durmiendo." << std::endl;}
};

// Clase derivada (herencia privada)
class Perro : private Animal {
private:
    std::string raza;

public:
    Perro(const std::string& name, const std::string& raza) : Animal(name), raza(raza) {}

    void ladrar() const {
        std::cout << "Guau guau!" << std::endl;
    }

    // Los métodos de la clase base no son accesibles directamente desde el código externo
    // Sin embargo, todavía se pueden usar internamente en la clase derivada
    void comerDormir() const {
        comer();
        dormir();
    }
};

int main() {
    // Crear un objeto de la clase derivada
    Perro miPerro("Buddy", "Labrador");

    // Los métodos de la clase base no son accesibles directamente desde el código externo
    // miPerro.comer();  // Esto dará un error de compilación

    // Acceder a los métodos específicos de la clase derivada
    miPerro.ladrar();

    // Los métodos de la clase base pueden ser utilizados internamente en la clase derivada
    miPerro.comerDormir();

    return 0;
}

```
