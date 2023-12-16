# Referencias y punteros

## Usando punteros

Para pasar un valor a otra funcion y modificarlo dentro con punteros.

```cpp
#include <iostream>
using namespace std;

void modificarConPuntero(int *ptr)  // [!code focus]
{
    *ptr *= 2;
}

int main() {
    int valor = 5;

    modificarConPuntero(&valor); // [!code focus]
    cout << "Valor modificado: " << valor << endl;
    return 0;
}

```
## Usando referencias

```cpp
#include <iostream>
using namespace std;

void modificarConReferencia(int &ref) // [!code focus]
{
    ref *= 2;
}

int main() {
    int valor = 5;

    modificarConReferencia(valor); // [!code focus]
    cout << "Valor modificado: " << valor << endl;

    return 0;
}

```
En ambos casos, el valor de valor se pasa a la función `modificarConPuntero` o `modificarConReferencia`, y la función modifica el valor original. Esto es posible porque se pasa `la dirección de memoria` del valor (en el caso de punteros) o una `referencia al valor` (en el caso de referencias), lo que permite a la función acceder y modificar directamente el contenido de la variable original.


## Referenciar int

```cpp
#include <iostream>

void NumForThree(int num, int &output) // [!code focus]
{
	output = num * 3;
}

int main()
{
	int MyNumber = 7;

	std::cout << "Ori: " << MyNumber << std::endl;
	NumForThree(300, MyNumber); // [!code focus]
	std::cout << "Res: " << MyNumber << std::endl;

	return 0;
}

```

<Badge type="info" text="output" />
```shell
Ori: 7
Res: 900
```

+ Referencias no Nulas:
A diferencia de los punteros, las referencias siempre deben referirse a una variable válida. No pueden ser nulas, y no se pueden declarar sin referirse a algo.

+ Referencias y Punteros:
Aunque las referencias y los punteros tienen propósitos similares, hay diferencias clave en su sintaxis y comportamiento. Las referencias proporcionan una sintaxis más limpia y segura cuando simplemente se necesita referenciar una variable existente sin la posibilidad de nulos y sin la aritmética de punteros.


## Refetencia string

```cpp
#include <iostream>

void ModificarStr(std::string &name)// [!code focus]
{
	name += " Barcelona";
}

int main(void)
{
	std::string name = "42";
	std::cout << "Original str: " << name << std::endl;

	ModificarStr(name);
	std::cout << "Modificado str: " << name << std::endl;
}
```



