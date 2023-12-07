Un destructor es una función especial que se llama automáticamente cuando un objeto sale del ámbito o se elimina explícitamente. Su tarea principal es liberar recursos asignados dinámicamente o realizar otras operaciones de limpieza.

```cpp
#include <iostream>

class MiClase {
public:
    // Constructor
    MiClase() {
        std::cout << "Se ha llamado al constructor." << std::endl;
    }

    // Destructor
    ~MiClase() {
        std::cout << "Se ha llamado al destructor." << std::endl;
    }
};

int main() {
    // Crear objeto y llamar al constructor
    MiClase objeto;

    // El destructor se llamará automáticamente cuando el objeto salga del ámbito
    return 0;
}

```
