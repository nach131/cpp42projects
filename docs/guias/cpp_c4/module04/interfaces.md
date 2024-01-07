# Interfaces

Una interfaz es un tipo particular de clase abstracta, donde no hay propiedades y constructores y todos los métodos que tiene son públicos y `pure virtual`, menos el destructor que es solo `virtual`.

```cpp
class ICharacter
{
   public:
      virtual ~ICharacter() {}
      virtual std::string const & getName() const = 0;
      virtual void equip(AMateria* m) = 0;
      virtual void unequip(int idx) = 0;
      virtual void use(int idx, ICharacter& target) = 0;
};
```
Se utilizan principalmente como templates, para crear clases derivadas que tengan implementaciones similares, pero sin ser relacionada por propiedades compartidas.