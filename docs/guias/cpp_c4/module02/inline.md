# Inline

Se utiliza normal mente para las clases.

El compilador coloca una copia del código de la funcion `inline` en cada punto donde es llamada. Esto de hace para evitar la sobrecarga de llamadas de función y mejorar el rendimiento del programa.

Si la función tiene más de una linea el compilador puede ignorar el calificador de `inline`.

```cpp
#include <iostream>

inline int suma(int a, int b) { return a + b; } // [!code focus]

int main() {
int x = 5;
int y = 10;

int resultado = suma(x, y);
std::cout << "La suma de " << x << " y " << y << " es: " << resultado << std::endl;

return 0;
}

```

## Con ternarios

```cpp
#include <iostream>

inline int Max(int x, int y){ return (x > y)? x : y;} // [!code focus] 

int main( )
{
std::cout << "Max (30,40): " << Max(30, 40) << std::endl;
std::cout << "Max (0,100): " << Max(0, 100) << std::endl;
std::cout << "Max (700,10): " << Max(700, 10) << std::endl;
return 0;
}
```

<Badge type="info" text="output" />
```shell
Max (30,40): 40
Max (0,100): 100
Max (700,10): 700
```
