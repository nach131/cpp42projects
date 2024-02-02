# [std::min](https://en.cppreference.com/w/cpp/algorithm/min)

En C++98, la función `std::min` se encuentra en la biblioteca estándar y se puede utilizar para calcular el mínimo de dos valores. 

```cpp
#include <algorithm>
#include <iostream>

int main() {
    int a = 5;
    int b = 8;

    int minimum = std::min(a, b);

    std::cout << "El mínimo entre " << a << " y " << b << " es: " << minimum << std::endl;

    return 0;
}
```
