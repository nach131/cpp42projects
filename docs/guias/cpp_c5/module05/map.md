# std::map

Es un contenedor asociativo en C++ que proporciona un mapeo ordenado de claves únicas a valores.

1. **Asociación clave-valor:** `std::map `asocia cada clave única con un valor. Esto significa que puedes buscar un valor utilizando su clave asociada.

2. **Ordenación por claves:** Las claves en un std::map están ordenadas de acuerdo con un operador de comparación que puedes especificar (o el operador < por defecto). Esto significa que las claves se almacenan de manera ordenada en el mapa.

```cpp
#include <iostream>
#include <map>

int main() {
    // Crear un mapa que asocia nombres con edades
    std::map<std::string, int> ageMap;

    // Insertar elementos en el mapa
    ageMap["Alice"] = 25;
    ageMap["Bob"] = 30;
    ageMap["Charlie"] = 22;

    // Acceder e imprimir valores
    std::cout << "La edad de Bob es: " << ageMap["Bob"] << std::endl;

	 // Iterar sobre el mapa
    std::cout << "Personas en el mapa:" << std::endl;
    for (std::map<std::string, int>::iterator it = ageMap.begin(); it != ageMap.end(); ++it) {
        std::cout << it->first << ": " << it->second << " años" << std::endl;
    }

    return 0;
}

```

## Buscar en el mapa

```cpp
#include <iostream>
#include <map>

int main() {
    // Crear un mapa que asocia nombres con edades
    std::map<std::string, int> ageMap;

    // Insertar elementos en el mapa
    ageMap["Alice"] = 25;
    ageMap["Bob"] = 30;
    ageMap["Charlie"] = 22;

    // Buscar una persona en el mapa
    std::string targetPerson = "Bob";// [!code focus]
    std::map<std::string, int>::iterator it = ageMap.find(targetPerson);// [!code focus]

    if (it != ageMap.end()) {
        std::cout << targetPerson << " tiene " << it->second << " años." << std::endl;
    } else {
        std::cout << targetPerson << " no se encuentra en el mapa." << std::endl;
    }

    return 0;
}

```

