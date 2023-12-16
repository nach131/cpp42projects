# Punteros y referencias.


```cpp
std::string str = "HI THIS IS BRAIN";
```
Aquí, se crea una cadena de caracteres (`std::string`) llamada `str` e inicializada con la cadena "HI THIS IS BRAIN".

```cpp
std::string *stringPTR = &str;
```
Se crea un puntero `stringPTR` que apunta a la dirección de memoria de la cadena `str`.
+ Esto significa que `stringPTR` contiene la dirección de memoria donde se almacena la cadena `str`.

```cpp
std::string &stringREF = str;
```
Se crea una referencia `stringREF` que referencia directamente la cadena `str`.
+ La referencia es simplemente otro nombre para la misma variable, sin ser una nueva ubicación de almacenamiento.

```cpp
std::cout << &str << ": " << str << std::endl;
```
Imprime la dirección de memoria de `str` usando `&str` y luego imprime el contenido de `str` usando simplemente `str`.

```cpp
std::cout << stringPTR << ": " << *stringPTR << std::endl;
```
Imprime la dirección de memoria almacenada en `stringPTR` y luego imprime el contenido al que apunta `stringPTR` usando `*stringPTR` (dereferenciación).

```cpp
std::cout << &stringREF << ": " << stringREF << std::endl;
```
Imprime la dirección de memoria de `str` (que es la misma dirección de `stringREF`, ya que `stringREF` es una referencia a `str`) y luego imprime el contenido de `str` a través de `stringREF`.

<Badge type="info" text="output" />
```shell
0x7ffee4bb84c0: HI THIS IS BRAIN
0x7ffee4bb84c0: HI THIS IS BRAIN
0x7ffee4bb84c0: HI THIS IS BRAIN
```
