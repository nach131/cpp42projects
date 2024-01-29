# dynamic_cast

Se utiliza en situaciones donde la relación entre dos tipos es dinámica, es decir, solo se conoce el tipo base, pero no el subtipo derivado exacto. Esta función evalúa el tipo real del objeto y, si la conversión es segura, devuelve un puntero o referencia al tipo deseado. De lo contrario, devolverá NULL o una excepción en caso de que se utilice en una expresión de asignación.

```cpp
class Base { public: virtual ~Base() {} };
class Derived : public Base { };

void f(Base* b) {
  Derived* d = dynamic_cast<Derived*>(b); // Conversión segura
  if (d != nullptr) {
    // Acceder a las propiedades únicas de Derived
    d->derived_specific_member;
  } else {
    // No se ha podido realizar la conversión
  }
}
```

En este ejemplo, `dynamic_cast` se utiliza para convertir un puntero a Base en un puntero a Derived. Si la conversión es segura, se puede acceder a las propiedades únicas de Derived utilizando el puntero devuelto por dynamic_cast. De lo contrario, si no se realiza la conversión, se devolverá NULL y se podría tomar alguna otra acción en caso de necesitarlo.