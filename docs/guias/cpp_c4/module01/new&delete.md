# New y Delete

Las palabras clave `new` y `delete` se utilizan para gestionar la memoria dinámica. 

## New
+ Se utiliza para asignar memoria dinámica en `heap`
+ Devuelve un puntero al tipo de dato solicitado
```cpp
int *pInt = new int;
*pInt = 42;
```
## Delete
+ se utiliza para liberar la memoria asignada dinámicamente

```cpp
delete pInt;
```

## new[] y delete[]

```cpp
int *pArray = new int[42];
delete[] pArray
```


