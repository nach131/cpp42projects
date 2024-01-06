# Protegida

```cpp
#include <iostream>
#include <string>

// Clase base
class Animal {
protected:
    std::string name;

public:
    Animal(const std::string& name) : name(name) {}

    void comer() const {
        std::cout << name << " está comiendo." << std::endl;}
    void dormir() const {
        std::cout << name << " está durmiendo." << std::endl;}
};

// Clase derivada (herencia protegida)
class Perro : protected Animal {
private:
    std::string raza;

public:
    Perro(const std::string& name, const std::string& raza) : Animal(name), raza(raza) {}

    void ladrar() const {
        std::cout << "Guau guau!" << std::endl;}

    // Los métodos de la clase base son accesibles internamente en la clase derivada
    // y también por clases derivadas posteriores
    void comerDormirLadrar() const {
        comer();
        dormir();
        ladrar();
    }
};

// Clase derivada de Perro
class Cachorro : public Perro {
public:
    Cachorro(const std::string& name, const std::string& raza) : Perro(name, raza) {}

    // Se puede acceder a los métodos protegidos de la clase base desde la clase derivada
    void jugar() const {
        std::cout << name << " está jugando." << std::endl;}
};

int main() {
    // Crear un objeto de la clase derivada
    Cachorro miCachorro("Buddy", "Labrador");

    // Los métodos de la clase base y clase derivada son accesibles internamente
    miCachorro.comerDormirLadrar();
    miCachorro.jugar();

    return 0;
}

```
