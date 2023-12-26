# string class

`std::string `es una clase de la Biblioteca Estándar de C++ que representa una cadena de caracteres. Esta clase proporciona una interfaz conveniente para manipular cadenas de caracteres de manera dinámica, lo que significa que puedes cambiar su longitud durante la ejecución del programa.

## Implementación del string

`std::string`  generalmente se implementa como un array dinámico de caracteres `char`. Puede haber espacio adicional para garantizar que haya suficiente capacidad para futuras operaciones sin necesidad de asignar más memoria cada vez.

## Gestión de la memoria

`std::string` se encarga automáticamente de la gestión de memoria para la cadena. La asignación y liberación de memoria se manejan internamente, lo que simplifica el trabajo del programador y evita problemas comunes asociados con la manipulación manual de memoria.

## Funciones y métodos

`std::string` proporciona una amplia variedad de funciones y métodos para manipular cadenas. Puedes realizar operaciones como concatenación, extracción de subcadenas, búsqueda, reemplazo, etc.

## [Iteradores](https://nach131.github.io/cpp42projects/guias/cpp_c4/module01/string/iterador)

`std::string` también admite el uso de iteradores, que son objetos que permiten recorrer la cadena de manera eficiente.

## Operadores sobrecargados

`std::string` sobrecarga varios operadores, como el operador de asignación (=), el operador de concatenación (+), y el operador de comparación (==, !=, <, <=, >, >=), lo que facilita la manipulación y comparación de cadenas.

## Conversiones:

`std::string` proporciona métodos para convertir la cadena a otros tipos de datos, como `c_str()` para obtener una cadena de estilo C `const char*` y funciones como `stoi()`, `stod()`, etc., para convertir a tipos numéricos

## Operaciones de búsqueda y manipulación:

Métodos como `find()`, `replace()`, `substr()`, etc., permiten realizar operaciones avanzadas en las cadenas.

