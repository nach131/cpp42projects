# Herencia Pública

```cpp
// Clase base
class Animal // [!code focus]
{
private:
	std::string _name;

public:
	Animal(const std::string &name) : _name(name) {}
	void comer() const { // [!code focus]
		 std::cout << _name << " está comiendo." << std::endl; } // [!code focus]
	void dormir() const { // [!code focus]
		 std::cout << _name << " está durmiendo." << std::endl; } // [!code focus]
};

// Clase derivada (herencia pública)
class Perro : public Animal // [!code focus]
{
private:
	std::string _raza;

public:
	Perro(const std::string &name, const std::string &raza) : Animal(name), _raza(raza) {} // [!code focus]
	void ladrar() const { std::cout << "Guau guau!" << std::endl; } // [!code focus]
};

int main()
{
	// Crear un objeto de la clase derivada
	Perro miPerro("Buddy", "Labrador");

	// Acceder a los métodos de la clase base a través de la herencia
	miPerro.comer();
	miPerro.dormir();

	// Acceder a los métodos específicos de la clase derivada
	miPerro.ladrar();

	return 0;
}
```
