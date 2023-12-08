# Referencias

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

## Pasar array class por argumento

```cpp
#include <iostream>
#include <array>

int SumArray(std::array<int, 10> TheArray) // [!code focus]
{
	int sum = 0;

	for (int item : TheArray)
		sum += item;
	return sum;
}

int main(void)
{
	std::array<int, 10> myArray = {1, 2, 3, 4, 5, 6, 7, 8, 9};

	int sumArray = SumArray(myArray);
	std::cout << "La suma es: " << sumArray << std::endl;
}
```
## Referenciar array class

```cpp
#include <iostream>
#include <array>

void MultiplicarDosArray(std::array<int, 10> &TheArray)// [!code focus]
{
	for (int &item : TheArray)
		item *= 2;
}

int main()
{
	std::array<int, 10> myArray = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

	std::cout << "Array original: ";
	for (int item : myArray)
		std::cout << item << " ";
	std::cout << std::endl;

	MultiplicarDosArray(myArray);// [!code focus]

	std::cout << "Array modificado: ";
	for (int item : myArray)
		std::cout << item << " ";
	std::cout << std::endl;

	return 0;
}

```
<Badge type="info" text="output" />
```shell
Array original: 1 2 3 4 5 6 7 8 9 10 
Array modificado: 2 4 6 8 10 12 14 16 18 20
```

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
