# nullptr o NULL

`nullptr` y `NULL` son utilizados en C++ para representar un puntero nulo, pero hay algunas diferencias importantes:

1. **Tipo:**
   - `nullptr` es de tipo `std::nullptr_t`.
   - `NULL` es a menudo definido como `0` o `((void*)0)`. En C++, `NULL` no es un tipo específico, simplemente es un alias para el literal entero cero.

2. **Contexto de Sobrecarga:**
   - `nullptr` es un valor literal y puede ser usado en contextos donde se necesita un puntero nulo. También es más fuertemente tipado y no se convierte automáticamente a otros tipos.
   - `NULL` es a menudo definido como `0`, y puede causar problemas de ambigüedad cuando se usa en contextos donde la sobrecarga de funciones o plantillas está involucrada.

3. **C++11:**
   - `nullptr` fue introducido en C++11 como una mejora para abordar problemas relacionados con `NULL`.

4. **Seguridad:**
   - `nullptr` es más seguro ya que tiene un tipo propio y no se convierte automáticamente a otros tipos. Esto puede prevenir errores sutiles que podrían ocurrir con la ambigüedad de tipos.
   - `NULL` puede ser menos seguro porque es simplemente un alias para `0`, y puede llevar a ambigüedades en contextos complejos.

Dado que `nullptr` es más moderno y ofrece mayor seguridad de tipo, se recomienda su uso en código nuevo de C++.

## Ambigüedad de carga

Ya que `nullptr` esta diseñado para evitar la conversión automática a otros tipos de punteros.

```cpp
void func(int *ptr) {// [!code focus]
    std::cout << "Función para puntero int" << std::endl;
}

void func(double *ptr) {// [!code focus]
    std::cout << "Función para puntero double" << std::endl;
}

int main() {
    func(nullptr);  // Error, ambigüedad con NULL que podría convertirse a int o double// [!code focus]// [!code error]

    return 0;
}

```

En este caso, si intentas pasar nullptr a una función sobrecargada, el compilador te dará un error porque nullptr no se convierte automáticamente y no está claro cuál de las funciones sobrecargadas debería llamarse. Esto ayuda a evitar problemas de ambigüedad y mejora la seguridad del tipo en el código.

Para solucionar el problema de ambigüedad al llamar a la función `func(nullptr)`, puedes proporcionar información adicional al compilador sobre qué versión de la función se desea llamar. Puedes hacerlo mediante una conversión explícita de nullptr a un tipo específico de puntero.

```cpp
#include <iostream>

void func(int *ptr) {
    std::cout << "Función para puntero int" << std::endl;
}

void func(double *ptr) {
    std::cout << "Función para puntero double" << std::endl;
}

int main() {
	    // Llamada a func con nullptr convertido explícitamente a int*
    func(static_cast<int*>(nullptr)); // [!code focus] // [!code warning]

    return 0;
}

```

Al proporcionar una conversión explícita mediante `static_cast<int*>(nullptr)`, se esta indicando al compilador que deseas llamar a la versión de la función que acepta un puntero a int. Esta solución elimina la ambigüedad y le da al compilador la información necesaria para elegir la función correcta.
