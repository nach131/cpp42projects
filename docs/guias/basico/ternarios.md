# Operador ternario `? :`

Es una forma compacta de expresar una estructura condicional en una sola línea. La sintaxis general es la siguiente:

```cpp
condición ? expresión_si_verdadero : expresión_si_falso;
```

```cpp
#include <iostream>

int main() {
int numero = 10;

std::string mensaje = (numero > 5) ? "Es mayor que 5" : "Es menor que 5";// [!code focus]
std::cout << mensaje << std::endl;

return 0;
}

```

```cpp
#include <iostream>

inline std::string esPar(int num) { return num % 2 == 0 ? "par" : "impar"; }// [!code focus]

int main()
{
	int numero = 7;

	std::cout << "El número es " << esPar(numero) << std::endl;
	return 0;
}

```
