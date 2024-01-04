# BSP "Binary Space Partitioning" 

Particionamiento Binario del Espacio.

- Es un método para dividir recursivamente un espacio en conjuntos convexos mediante hiperplanos.

- Se utiliza para gráficos 3D.

- El espacio se particiona en dos conjuntos convexos mediante un plano de partición. Estos conjuntos luego se particionan recursivamente.


Para probar si un punto se encuentra dentro de un polígono convexo usando BSP, se hace lo siguiente:

1. Calcula el área del triángulo ABC usando las coordenadas de los puntos A, B y C.

2. Calcula el área de los tres triángulos PAB, PBC y PCA utilizando las coordenadas del punto P y cada par de puntos del triángulo ABC.

2. Compara que la suma de las áreas de PAB, PBC y PCA sea igual al área de ABC. Si es así, significa que P está dentro del triángulo ABC.


::: tip Formula:

$$Area_{ABC} = \frac{(x_A * (y_B - y_C) + x_B * (y_C - y_A) + x_C * (y_A - y_B))}{2}$$

:::

$x_A$ es la `x` del punto `A`.

$y_A$ es la `y` del punto `A`.