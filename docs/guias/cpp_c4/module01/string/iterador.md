# Iteradores
```cpp
#include <iostream>
#include <string>

int main()
{
std::string myString = "42 Barcelona !!!";

// Utilizando un iterador para recorrer la cadena e imprimir cada carácter
std::cout << "Recorriendo la cadena con un iterador:\n";
for (std::string::iterator it = myString.begin(); it != myString.end(); ++it)
	std::cout << *it << "-";
std::cout << std::endl;

// Utilizando un iterador constante para recorrer la cadena en modo de solo lectura
std::cout << "Recorriendo la cadena con un iterador constante:\n";
for (std::string::const_iterator cit = myString.cbegin(); cit != myString.cend(); ++cit)
	std::cout << *cit << "-";
std::cout << std::endl;

// Utilizando un iterador inverso para recorrer la cadena en orden inverso
std::cout << "Recorriendo la cadena en orden inverso:\n";
for (std::string::reverse_iterator rit = myString.rbegin(); rit != myString.rend(); ++rit)
	std::cout << *rit << "-";
std::cout << std::endl;

// Utilizando un iterador inverso constante para recorrer la cadena en orden inverso en modo de solo lectura
std::cout << "Recorriendo la cadena en orden inverso con un iterador constante:\n";
for (std::string::const_reverse_iterator crit = myString.crbegin(); crit != myString.crend(); ++crit)
	std::cout << *crit << "-";
std::cout << std::endl;

return 0;
}

```


<Badge type="info" text="output" />
```shell
Recorriendo la cadena con un iterador:
4-2- -B-a-r-c-e-l-o-n-a- -!-!-!-
Recorriendo la cadena con un iterador constante:
4-2- -B-a-r-c-e-l-o-n-a- -!-!-!-
Recorriendo la cadena en orden inverso:
!-!-!- -a-n-o-l-e-c-r-a-B- -2-4-
Recorriendo la cadena en orden inverso con un iterador constante:
!-!-!- -a-n-o-l-e-c-r-a-B- -2-4-
```
