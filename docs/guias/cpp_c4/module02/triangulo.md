Para determinar si un punto está dentro de un triángulo dado por sus aristas (representadas por tres puntos A, B y C), puedes utilizar las coordenadas bariocéntricas. Las coordenadas bariocéntricas son coeficientes proporcionales al área de los subtriángulos formados por el punto y los vértices del triángulo.

Supongamos que el punto que deseas verificar es P. Entonces, las coordenadas bariocéntricas (u, v, w) de P con respecto a los vértices A, B y C se calculan de la siguiente manera:

1. Calcula los vectores \(v0 = B - A\) y \(v1 = C - A\).
2. Calcula el vector \(v2 = P - A\).
3. Calcula los productos cruz \(cross(v0, v1)\) y \(cross(v2, v0)\).
4. Las coordenadas bariocéntricas son \(u = cross(v2, v0) / cross(v0, v1)\), \(v = cross(v1, v2) / cross(v0, v1)\) y \(w = 1 - u - v\).

Si \(0 \leq u, v, w \leq 1\), entonces el punto P está dentro del triángulo.

Aquí hay un ejemplo en código C++:

```cpp
#include <iostream>

class Point {
public:
    double x, y;

    Point(double x, double y) : x(x), y(y) {}
};

// Función para calcular el producto cruz de dos vectores bidimensionales
double crossProduct(const Point& v1, const Point& v2) {
    return v1.x * v2.y - v1.y * v2.x;
}

// Función para verificar si un punto P está dentro del triángulo ABC
bool isPointInsideTriangle(const Point& A, const Point& B, const Point& C, const Point& P) {
    Point v0(B.x - A.x, B.y - A.y);
    Point v1(C.x - A.x, C.y - A.y);
    Point v2(P.x - A.x, P.y - A.y);

    double crossV0V1 = crossProduct(v0, v1);
    double crossV2V0 = crossProduct(v2, v0);

    double u = crossProduct(v2, v0) / crossV0V1;
    double v = crossProduct(v1, v2) / crossV0V1;
    double w = 1 - u - v;

    return (u >= 0 && v >= 0 && w >= 0);
}

int main() {
    Point A(0, 0);
    Point B(10, 30);
    Point C(20, 0);
    Point P(10, 15);

    if (isPointInsideTriangle(A, B, C, P)) {
        std::cout << "El punto P está dentro del triángulo ABC." << std::endl;
    } else {
        std::cout << "El punto P está fuera del triángulo ABC." << std::endl;
    }

    return 0;
}
```

Este código usa las coordenadas bariocéntricas para verificar si un punto P está dentro de un triángulo dado por los puntos A, B y C.