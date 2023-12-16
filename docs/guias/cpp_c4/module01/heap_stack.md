# Heap o Stack

La memoria en C++ se puede asignar de dos maneras principales: en el `stack` (pila) y en el `heap` (espacio libre). 

1. **Stack (Pila):**
   - **Asignación estática:** La memoria en el stack se asigna de manera estática durante la compilación. La cantidad de memoria necesaria debe ser conocida en tiempo de compilación.
   - **Alcance local:** Las variables en el stack tienen un alcance local y se destruyen automáticamente cuando salen de su ámbito (como cuando una función termina).
   - **Velocidad:** La asignación y liberación de memoria en el stack es rápida, ya que implica simplemente mover el puntero de la pila hacia arriba o hacia abajo.

2. **Heap (Espacio Libre):**
   - **Asignación dinámica:** La memoria en el heap se asigna dinámicamente en tiempo de ejecución mediante operadores `new` y `delete` (o `malloc` y `free` en C).
   - **Alcance global:** Las variables en el heap pueden tener un alcance global y persistir más allá del ámbito que las creó. Su vida útil debe gestionarse explícitamente.
   - **Velocidad:** La asignación y liberación de memoria en el heap son generalmente más lentas que en el stack, ya que implica la gestión de estructuras de datos más complejas.

3. **Tamaño:**
   - **Limitación de tamaño:** La memoria del stack suele ser limitada y está predefinida, mientras que el heap suele tener más espacio disponible (limitado solo por la memoria del sistema).
   - **Fragmentación:** El heap puede experimentar fragmentación, ya sea interna o externa, a medida que se asignan y liberan bloques de memoria.

4. **Acceso:**
   - **Acceso:** El acceso a la memoria en el stack es generalmente más rápido, ya que implica simplemente mover el puntero de la pila. El acceso a la memoria en el heap puede ser más lento debido a la necesidad de desreferenciar punteros.

En resumen, la elección entre el `stack` y el `heap` depende de varios factores, como la duración, el tamaño y la complejidad de la memoria requerida. 

::: danger `malloc` y `free` no se puede utilizar en 42.
:::