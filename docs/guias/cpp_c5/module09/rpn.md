La expresión matemática polaca invertida (RPN, por sus siglas en inglés) es un formato de notación para representar operaciones matemáticas donde los operadores siguen a sus operandos.

En lugar de utilizar paréntesis y números separados por espacios, como en una expresión típica, la RPN usa un flujo de datos donde los operandos se presentan primero seguidos por las operaciones aplicadas. Esto permite una evaluación más eficiente y fácil de leer ya que no necesita paréntesis para resolver el orden de operaciones.

Por ejemplo, la expresión infija $(6 + (4 * 9))$ se convertiría en RPN como `4 9 * 6 +`.

La evaluación se realizaría de izquierda a derecha, lo que significa que primero se multiplicarían los números 4 y 9 (resultado: 36), y luego se sumaría ese resultado con el número 6 (resultado final: 42).

La RPN es utilizada en algunos sistemas de cálculo avanzados y también en ciertos lenguajes de programación, como el lenguaje de programación Forth.

Es muy facil de evaluar si se usa una pila `stack` de datos.

1. Recorre la expresión de izquierda a derecha.
2. Si se encuentra un operando (numero), se coloca en la pila.
3. Si se encuentra un operador, realiza la operación con los dos primeros numeros de la pila y coloca el resultado en la pila.

Por ejemplo, la expresión infija $(2+2+1+1)+(4*9)= 42$ se convertiría en RPN como `2 2 + 1 + 1 + 4 9 * +`

|  Paso  | Token |  Pila |
| :----: | :---: | :---: |
|  1     |   2   |   2   |
|  2     |   2   |  2 2  |
|  3     |   +   |   4   |
|  4     |   1   |  1 4  |
|  5     |   +   |   5   |
|  6     |   1   |  1 5  |
|  7     |   +   |   6   |
|  8     |   4   |  4 6  |
|  9     |   9   |  9 4 6|
|  10    |   *   |  36 6 |
|  11    |   +   |   42  |