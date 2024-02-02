# [std::min_element](https://en.cppreference.com/w/cpp/algorithm/min_element)

En C++98, la función `std::min_element` se utiliza para encontrar el elemento mínimo en un rango especificado.

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {5, 8, 2, 10, 3, 7};

    // Utilizando std::min_element
    std::vector<int>::iterator minElementIter = std::min_element(numbers.begin(), numbers.end());

    if (minElementIter != numbers.end()) {
        std::cout << "El mínimo elemento en el vector es: " << *minElementIter << std::endl;
    } else {
        std::cout << "El vector está vacío." << std::endl;
    }

    return 0;
}
```
