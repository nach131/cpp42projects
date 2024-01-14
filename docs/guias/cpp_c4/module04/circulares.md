# Dependencias circulares

Se producen cuando dos o más componentes de un sistema dependen directa o indirectamente entre sí. En el contexto de programación, esto generalmente se refiere a archivos de código fuente, clases, o módulos que dependen entre sí de una manera circular.

Lo mas comun es que que dos archivos de encabezados se esten llamando mutuamente entre ellos.

El cumpilador lanza un error.

Para resolver este error, se puede utilizar las declaraciones adelantadas `forward declarations`.


<Badge type="tip" text="AMateria.hpp" />

```cpp
#ifndef AMATERIA_HPP
#define AMATERIA_HPP

#include <iostream>

class ICharacter;// Forward declaration// [!code focus]

class AMateria
{
    // Resto del código...
};

#endif

```

<Badge type="tip" text="ICharacter.hpp" />

```cpp
#ifndef ICHARACTER_HPP
#define ICHARACTER_HPP

#include <iostream>

class AMateria;// Forward declaration// [!code focus]

class ICharacter
{
    // Resto del código...
};

#endif

```
