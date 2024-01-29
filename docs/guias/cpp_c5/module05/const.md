# Operador asignación

Se utiliza para asignar el valor de un objeto de la misma clase a otro objeto de la misma clase.

Cuando las variables de las clases estan declaradas como constantes `const` estas tiene que ser casteadas para poder asignar.

```cpp

const_cast<std::string &>(_name) = tmp._name;
const_cast<int &>(_gradeSigned) = tmp._gradeSig;

```
