---
head:
  - - meta
    - name: og:description
      content: Funciones miembro
  - - meta
    - name: og:title
      content: Module 00 C++
---
<script setup lang="ts">
import Woaos from '@theme/components/categoria.vue';

</script>

# Funciones miembro

 Las funciones miembro son funciones que están asociadas a una clase o estructura. Estas funciones operan en los datos miembro de la clase y se utilizan para realizar operaciones específicas relacionadas con la clase. Las funciones miembro se dividen en dos tipos: funciones miembro de `datos` y funciones miembro de operaciones `métodos`

 ```cpp
 #include <iostream>

class Person {

	public:
		std::string name;
		int age;

		void NewName(std::string newName)
		{
			name = newName;
		}
		void NewAge(int newAge)
		{
			age = newAge;
		}
		void ShowInfo()
		{
			std::cout << "Nombre: " << name << "\nEdad: " << age << std::endl;
		}
};

int main(void)
{
	Person persona1;

	persona1.NewName("Pedro");
	persona1.NewAge(42);

	std::cout << "Informacion de la perosna 1" << std::endl;
	persona1.ShowInfo();

	return 0;
}
 ```
```
Informacion de la perosna 1
Nombre: Pedro
Edad: 42
```