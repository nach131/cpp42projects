
## Variables

Como no exite la `Norminette` podemos declarar e iniciar variable en la misma linea.

```cpp
#include <iostream>

int main()
{
	double a = 6.4807407, b = 6.4807407; // [!code focus]
	int res = a * b;

  std::cout << res << " Barcelona" << std::endl;
  return 0;
}

```
## Variables de referencia

En C++, una referencia es una variable que actúa como un alias o un nombre alternativo para otra variable existente. Se define utilizando el operador & durante la declaración. La referencia se enlaza directamente a la variable a la que se hace referencia y proporciona una forma de acceder o modificar el valor de esa variable a través de un nombre alternativo.

```cpp
#include <iostream>

int main() {

    int originalVariable = 0; // [!code focus]
    int& referencia = originalVariable; // [!code focus]

    // Imprimir los valores originales
    std::cout << "Original Variable: " << originalVariable << std::endl;
    std::cout << "Referencia: " << referencia << std::endl;

    // Modificar el valor a través de la referencia
    referencia = 42;

    // Imprimir los valores después de la modificación
    std::cout << "\nDespués de la modificación:\n";
    std::cout << "Original Variable: " << originalVariable << std::endl;
    std::cout << "Referencia: " << referencia << std::endl;

    return 0;
}
```

## Constantes

En C++, una constante es un valor que no puede ser modificado después de su inicialización. Se utiliza la palabra clave `const` para declarar una constante. Una vez que se asigna un valor a una constante, no se puede cambiar durante la ejecución del programa.

```cpp
#include <iostream>

int main()
{
    const int numero_constante = 42; // [!code focus]
    std::cout << numero_constante << " Barcelona" << std::endl;
    return 0;
}
```
Podemos declarar constates con la directiva `#define identifier value`

```cpp
#include <iostream>
#define NAME "42 Barcelona" // [!code focus]

int main()
{
    std::cout << NAME << std::endl;
    return 0;
}
```
