# Operadores de Incremento/Decremento:
`++`, `--` (pre y postfijo)

<Badge type="tip" text="MyNum.hpp" />

```cpp
#include <iostream>

class MyNum
{
private:
    int _num;

public:
    MyNum();
    MyNum(const MyNum &);
    ~MyNum();

    // Operadores de incremento/decremento
    MyNum &operator++();   // Prefijo // [!code focus]
    MyNum operator++(int); // Sufijo// [!code focus]
    MyNum &operator--();   // Prefijo// [!code focus]
    MyNum operator--(int); // Sufijo// [!code focus]

    int getNum() const;
    void setNum(const int);
};

```

<Badge type="tip" text="MyNum.cpp" />

```cpp

MyNum::MyNum() : _num(0) {}
MyNum::MyNum(const MyNum &tmp) { _num = tmp._num; }
MyNum::~MyNum() {}

int MyNum::getNum() const { return _num; }
void MyNum::setNum(const int num) { _num = num; }

MyNum &MyNum::operator++()// [!code focus]
{
    // Incremento prefijo (++x)
    _num++;
    return *this;
}

MyNum MyNum::operator++(int)// [!code focus]
{
    // Incremento sufijo (x++)
    MyNum result = *this;
    ++(*this);
    return result;
}

MyNum &MyNum::operator--()// [!code focus]
{
    // Decremento prefijo (--x)
    _num--;
    return *this;
}

MyNum MyNum::operator--(int)// [!code focus]
{
    // Decremento sufijo (x--)
    MyNum result = *this;
    --(*this);
    return result;
}

```

<Badge type="tip" text="main.cpp" />

```cpp
int main()
{
    MyNum a, b;
    a.setNum(42);
    b.setNum(21);

    std::cout << "a is " << a.getNum() << std::endl;
    std::cout << "b is " << b.getNum() << std::endl;

    a++;
    std::cout << "After a++, a is " << a.getNum() << std::endl;
    b--;
    std::cout << "After b--, b is " << b.getNum() << std::endl;
    ++a;
    std::cout << "After ++a, a is " << a.getNum() << std::endl;
    --b;
    std::cout << "After --b, b is " << b.getNum() << std::endl;

    return 0;
}
```

<Badge type="info" text="output" />
```shell
a is 42
b is 21
After a++, a is 43
After b--, b is 20
After ++a, a is 44
After --b, b is 19
```
