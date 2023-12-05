---
head:
  - - meta
    - name: og:description
      content: Toda información útil para la práctica o conocimiento con respecto la instalación de sistemas u otros.
  - - meta
    - name: og:title
      content: Basico C++
---
<script setup lang="ts">
import Woaos from '@theme/components/categoria.vue';
// import { categoria0 } from './categorias.ts';
// import { categoria1 } from './categorias.ts';
</script>

## Características de C++

+ Su sintaxis es heredada del lenguaje C.
+ Programa orientado a objetos (POO).
+ Permite la agrupación de instrucciones.
+ Permite la separación de un programa en módulos que admiten compilación independiente.
+ Lenguaje de alto nivel.

## Conceptos de C++

Antes de iniciar el estudio de C++, resulta imperativo adquirir conocimientos fundamentales acerca de los conceptos asociados a la programación orientada a objetos (POO).
### Objetos:
Los objetos constituyen la unidad elemental de la programación orientada a objetos. Se trata de instancias de clases que poseen miembros de datos y emplean diversas funciones miembro para llevar a cabo operaciones específicas.

### Clase:
La clase, equiparable a las estructuras en el lenguaje C, también puede ser definida como un tipo de dato creado por el usuario que incorpora funciones. En esencia, la clase actúa como un modelo para un objeto, estableciendo las variables de datos y las operaciones permitidas sobre el objeto de dicha clase.

### Herencia:
La herencia proporciona una vía para reutilizar el código de manera repetitiva. La clase que sirve como origen de la herencia se denomina `clase base`, mientras que la clase que la hereda se conoce como `clase derivada`. La clase derivada tiene acceso a todas las funciones definidas en la clase base, permitiendo la reutilización eficiente del código.

### Abstracción de Datos:
La abstracción de datos enriquece la capacidad del lenguaje de programación al posibilitar la creación de tipos de datos personalizados. Además, esta abstracción representa la información necesaria en el programa sin revelar los detalles internos de su implementación.

### Encapsulación de Datos:
La encapsulación, también conocida como enlace de datos, implica la unión de variables de datos y funciones dentro de una clase. Esta unificación crea la unidad denominada `clase`. Al emplear la encapsulación, los datos no son accesibles directamente; únicamente se pueden manipular mediante las funciones definidas internamente en la clase. La encapsulación facilita el concepto crucial de ocultamiento de datos.

### Polimorfismo:
El polimorfismo es una característica que permite la creación de funciones con el mismo nombre pero con diferentes argumentos, ejecutándose de manera distinta según el contexto. Esta propiedad también posibilita la redefinición de funciones para proporcionar nuevas definiciones según las necesidades del programa.

## Variables

Como no exite la `Norminete` podemos declarar e iniciar variable en la misma linea.

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
    int originalVariable = 0;

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

## Operadores de resolución de alcance

Los Operadores de Resolución de Alcance `::` en C++ se utilizan para acceder a elementos dentro de un espacio de nombres, una clase o una estructura, permite especificar a qué ámbito pertenece una variable, función o tipo, evitando ambigüedades y permitiendo la correcta identificación de elementos..

```cpp
#include <iostream>

const char *name = "42 Paris"; // [!code focus]

int main() {

	const char *name = "42 Barcelona"; // [!code focus]

	std::cout << "Variable Global: " << name << std::endl; // [!code focus]
	std::cout << "Variable local: " << ::name << std::endl; // [!code focus] // [!code highlight]

	return 0;

}
```

Ahora podemos entender que:

+ `std::`: indica que la entidad `cout` pertenece al espacio de nombres estándar `std`, este contiene muchas funciones y objeros.
+ `cout`: es el objeto de flujo de salida estándar `character output`, que es un objeto asociado a la consola `stdout` que se utiliza para imprimir datos en la consola.
+ `<<` El operador de inserción se utiliza para indicar la dirección del flujo de salida. (en el caso anterior enviar el valor de `name` a la consola de salida).