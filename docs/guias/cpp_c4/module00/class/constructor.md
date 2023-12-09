---
head:
  - - meta
    - name: og:description
      content: Class
  - - meta
    - name: og:title
      content: Constructor
---
<script setup lang="ts">
import Woaos from '@theme/components/categoria.vue';

</script>

# Constructors

Un constructor es una función especial que se llama automáticamente cuando se crea un objeto de una clase. Su tarea principal es inicializar los miembros del objeto. Puedes tener varios constructores en una clase, lo que se conoce como sobrecarga de constructor.

```cpp
#include <iostream>

class MiClase {
public:
    // Constructor por defecto
    MiClase() { // [!code highlight]
        std::cout << "Se ha llamado al constructor." << std::endl;// [!code highlight]
    }// [!code highlight]

    // Constructor con parámetros
    MiClase(int x, int y) {// [!code highlight]
        std::cout << "x=" << x << ", y=" << y << std::endl;// [!code highlight]
    }// [!code highlight]
};

int main() {
    // Crear objetos y llamar a los constructores
    MiClase objeto1;               // Llama al constructor por defecto
    MiClase objeto2(10, 20);        // Llama al constructor con parámetros

    return 0;
}

```

## Definición miembro

```cpp
#include <iostream>

class Things
{
public:
	char ch;
	int num;
	std::string str;
	float dec;

	Things(char _ch, int _num, std::string, float _dec);
	~Things(void);
};

Things::Things(char _ch, int _num, std::string _str, float _dec) : ch(_ch), num(_num), str(_str), dec(_dec)
{
	std::cout << "Contrutor called" << std::endl;
	std::cout << "this->ch: '" << this->ch << "'" << std::endl;
	std::cout << "this->num: '" << this->num << "'" << std::endl;
	std::cout << "this->str: '" << this->str << "'" << std::endl;
	std::cout << "this->dec: '" << this->dec << "'" << std::endl;
}

Things::~Things(void)
{
	std::cout << "Destructor called" << std::endl;
	return;
}

int main(void)
{
	Things ThisIsNew('@', 42, "Barcelona", 3.141549);
	return 0;
}

```
1. `Things::Things:`

    Esto indica que estás definiendo un miembro de la clase `Things`, específicamente el constructor llamado `Things`.

2. `(char _ch, int _num, std::string _str, float _dec)`:
     
     Esta parte es la lista de parámetros del constructor. Se esta declarando que el constructor acepta cuatro parámetros: 
    
    Un carácter `(_ch)`, un entero `(_num)`, una cadena de caracteres `(_str)`, y un número en punto flotante `(_dec)`.

3. `: ch(_ch), num(_num), str(_str), dec(_dec)`: 

    Esta es la lista de inicialización. Se inicializan los miembros de la clase `Things` con los valores pasados como parámetros al constructor. Cada miembro de la clase se inicializa con el valor correspondiente del parámetro.
    + `ch(_ch)`: Inicializa el miembro `ch` de la clase Things con el valor del parámetro `_ch`.
    + `num(_num)`: Inicializa el miembro `num` de la clase Things con el valor del parámetro `_num`.
    + `str(_str)`: Inicializa el miembro `str` de la clase Things con el valor del parámetro `_str`.
    + `dec(_dec)`: Inicializa el miembro `dec` de la clase Things con el valor del parámetro `_dec`.
