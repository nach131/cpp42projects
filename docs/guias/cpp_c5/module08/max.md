# [std::max_element](https://en.cppreference.com/w/cpp/algorithm/max_element)

En C++98, la función `std::max_element` también está disponible en la biblioteca estándar, y se encuentra en la cabecera `<algorithm>`.

Esta función se utiliza para encontrar el máximo elemento en un rango dado.

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {5, 8, 2, 10, 3, 7};

    // Utilizando std::max_element
    std::vector<int>::iterator maxElementIter = std::max_element(numbers.begin(), numbers.end());

    if (maxElementIter != numbers.end()) {
        std::cout << "El máximo elemento en el vector es: " << *maxElementIter << std::endl;
    } else {
        std::cout << "El vector está vacío." << std::endl;
    }

    return 0;
}
```