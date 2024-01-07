# Sobrecarga

En C++ existe el concepto de sobrecarga de un metodo o funcion, donde puedes crear muchas funciones con el mismo nombre, pero lo que cambia son el numero y/o el tipo de parametros

```cpp
int equal(int a, int b)
{
    if (a == b)
        return (1);
    return (0);
}

int equal(float a, float b)
{
    if (a == b)
        return (1);
    return (0);
}

int equal(bool a, bool b)
{
    if (a == b)
        return (1);
    return (0);
}

int main()
{
    int one = 2;
    int two = 3;
    float three = 2.4567;
    float four = 2.4657;
    bool five = true;
    bool six = true

    std::cout << "Int equal " << equal(one, two) << std::endl;
    std::cout << "Float equal " << equal(three, four) << std::endl;
    std::cout << "Bool equal " << equal(five, six) << std::endl;
}
```
Aquí se puede ver que hay una funcion `equal` que mira si dos variables tienen el mismo valor, pero con tipos de parametros diferentes. En el primero output el compilador ve que hay dos parametros de tipo `int`, entonces llama a la función de arriba. En el secundo llama a la secunda y en el tercero la tercera, todo en automatico.

Esto es muy comodo y se utiliza mucho sobretodo con los constructores y destructores de clases, que pueden aceptar diferentes tipos y numeros de parametros a la creacion de un objecto:
```cpp
class MiClase {
public:
    // Constructor por defecto
    MiClase() {
        std::cout << "Se ha llamado al constructor." << std::endl;
    }

    // Constructor con parámetros
    MiClase(int x, int y) {
        std::cout << "x=" << x << ", y=" << y << std::endl;
    }
};
```