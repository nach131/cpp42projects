# Templates

Las plantillas permiten permiten la creación de funciones y clases genéricas. Esto significa que podemos escribir código que sea reutilizable para diferentes tipos de datos, sin tener que duplicar el código para cada tipo específico.

Las plantillas se definen utilizando corchetes angulares `(< >)`, y pueden ser funciones o clases. Al instanciar una plantilla con un tipo específico, se crea una versión del código genérico personalizada para ese tipo. Por ejemplo, podemos definir una función de suma genérica que acepte dos tipos y devuelva el resultado:

```cpp
template<typename T>
T sum(T a, T b) {
  return a + b;
}
```

En este ejemplo, la palabra clave "template" indica que estamos definiendo una plantilla. El parámetro "T" es un tipo genérico que representa cualquier tipo de dato, y se puede utilizar en cualquier parte del código de la plantilla.

Para usar esta plantilla con números enteros, podríamos escribir:

```cpp
int a = 5;
int b = 7;
int resultado = sum<int>(a, b); // Llamada a la función de suma para enteros
```

Además, las plantillas también pueden ser clases genéricas. Por ejemplo, podríamos definir una lista enlazada genérica que almacene elementos de cualquier tipo:
```cpp
template<typename T>
class Lista {
public:
  struct Nodo {
    T dato;
    Nodo* siguiente;
  };
  // Métodos para agregar, eliminar y recorrer la lista...
};
```
En este ejemplo, la plantilla "Lista" define una clase genérica que utiliza el tipo genérico "T" en su estructura interna "Nodo". Al instanciar esta plantilla con un tipo específico, se crearía una lista enlazada personalizada para ese tipo.