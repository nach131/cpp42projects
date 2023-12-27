# Números de punto fijo

El uso del tipo de dato de punto fijo es común en el procesamiento digital de señales (DSP) y en aplicaciones de juegos, donde a veces el rendimiento es más importante que la precisión. Como veremos más adelante, la aritmética de punto fijo es mucho más rápida que la aritmética de punto flotante.

## Entero 43

**43 en binario**

<div align="center">

|`5`|4|`3`|2|`1`|`0`|
|-|-|-|-|-|-|
|1|0|1|0|1|1|

</div>

**Representación del valor**

$1 * 2^5 = 32$

$1 * 2^3 = 8$

$1 * 2^1 = 2$

$1 * 2^0 = 1$

$32 + 8 + 2 + 1 = 43$

La mitad de 43 es `21.5` no se es un `integer`, pero no quiere decir que no pueda representars con un entero.

# Punto binario

## sistema decimal,

$2 * 10^1 = 20$

$1 * 10^0 = 1$

$5 * 10^{-1} = 0.5$

$20 + 1 + 0.5 = 21.5$

1. **$2 * 10^1$**: Aquí, multiplicamos 2 por \(10^1\) (10 elevado a la primera potencia). Esto es igual a 20, ya que \(10^1\) simplemente significa 10.

2. **$1 * 10^0$**: Multiplicamos 1 por \(10^0\) (10 elevado a la potencia cero). Cualquier número elevado a la potencia cero es siempre 1, por lo que esto es igual a 1.

3. **$5 * 10^{-1}$**: Aquí, multiplicamos 5 por \(10^{-1}\) (10 elevado a la potencia negativa uno). \(10^{-1}\) es igual a 1 dividido por 10, es decir, 0.1. Por lo tanto, esto es igual a 0.5.

4. **$20 + 1 + 0.5$**: Sumamos los resultados de las tres multiplicaciones anteriores 21.5.

Entonces, la expresión completa $(2 * 10^1 + 1 * 10^0 + 5 * 10^{-1})$ se traduce en el valor numérico $21.5$. 

Esto es una `representación técnica` de cómo se calcula el valor en un sistema decimal utilizando potencias de 10.


## Sitema binario

Podemos utilizar el mismo concepto en sistema binario para calcular fracciones dentro de un entero.

Para todos los `1 bits` a la izquierda del punto binario $2^0$, $2^1$, $2^2$ ...

Para todos los `0 bits` a la derecha del punto binario $2^{-0}$, $2^{-1}$, $2^{-2}$...

Representar 21.5 en binario.

<div align="center">
  <table style="width:31%; display: inline-block;">
    <tr>
      <th>4</th>
      <th>3</th>
      <th>2</th>
      <th>1</th>
      <th>0</th>
    </tr>
    <tr>
      <td>1</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>1</td>
    </tr>
  </table>
  <table style="width:10%; display: inline-block;">
    <tr>
      <th>0</th>
    </tr>
    <tr>
      <td>1</td>
    </tr>
  </table>
  </div>

$1 * 2^4 = 16$

$1 * 2^2 = 8$

$1 * 2^0 = 1$

$1 * 2^{-1} = 0.5$

$16 + 8 + 1 + 0.5 = 21.5$

Ahora podemos comprobar que 43 en binario es `101011` y 21.5 es `101011` la unica diferencia es que utilizamos el primer bite para representar la fracción.

## Representación con punto fijo

Según el deplazamiento del punto de decimal, convertir el mismo numero binario en diferentes numeros decimales.

Para definir un tipo de punto fijo, necesitamos dos parametros.

+ Ancho de la representación del numero `(total bites)`.

+ Posición del punto binario dentro del numero.active

`fixed(w,b)`

+ `w` numero total de bites.

+ `b`posición del punto binario.

Para representar 21.5 en puto fijo seria  binario `101011` `fixed(6,1)`

Para el mismo binario pero con `fixed(6,2)`

`1010` para entero.

`11` para el decimal.

$1 * 2^3 = 8$

$1 * 2^1 = 2$

$1 * 2^{-1} = 0.5$

$1 * 2^{-2} = 0.25$

$8 + 2 + 0.5 + 0.25 = 10.75$


Para el mismo binario pero con `fixed(6,4)`

`10` para entero.

`1011` para el decimal.

$1 * 2^1 = 2$

$1 * 2^{-1} = 0.5$

$1 * 2^{-3} = 0.125$

$1 * 2^{-4} = 0.0625$

$8 + 2 + 0.5 + 0.125 + 0.0625 = 2.6875$