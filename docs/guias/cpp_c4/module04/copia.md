# Copia Superficial o Profunda

## Copia Superficial (Shallow Copy)

Una copia superficial simplemente copia los valores de los miembros primitivos de la clase.

Si la clase contiene punteros u otras referencias a objetos, la copia superficial solo copiará las direcciones de memoria de esos objetos, no los objetos mismos.

Esto significa que ambos objetos (el original y la copia) compartirán las mismas instancias de los objetos referenciados.

```cpp
class ShallowCopyExample {
public:
    int *data;

    ShallowCopyExample() {
        data = new int;
    }

    ~ShallowCopyExample() {
        delete data;
    }

    ShallowCopyExample(const ShallowCopyExample &other) {
        data = other.data;  // Copia superficial, ambos objetos compartirán el mismo int.// [!code focus]
    }
};

```


## Copia Profunda (Deep Copy)

Una copia profunda, por otro lado, crea nuevas instancias de los objetos referenciados y copia los valores de manera individual.

Cada objeto, tanto el original como la copia, tiene su propio conjunto de objetos referenciados.

La copia profunda garantiza que los objetos originales y copiados sean independientes y no compartan referencias a los mismos objetos.

```cpp
class DeepCopyExample {
public:
    int *data;

    DeepCopyExample() {
        data = new int;
    }

    ~DeepCopyExample() {
        delete data;
    }

    DeepCopyExample(const DeepCopyExample &other) {
        data = new int(*(other.data));  // Copia profunda, se crea una nueva instancia del int.// [!code focus]
    }
};

```
