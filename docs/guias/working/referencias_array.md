
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