# Operadores de Asignación:
`=`, `+=`, `-=`, `*=`, `/=`

Se utilizan para asignar un valor a una variable. Son operadores que combinan la operación de obtener el valor de la derecha y asignarlo a la variable de la izquierda.


```cpp
int a = 5;
int b = 10;

a += b; // Equivalente a: a = a + b;
a -= b; // Equivalente a: a = a - b;
a *= b; // Equivalente a: a = a * b;
a /= b; // Equivalente a: a = a / b;

```

Asignados dentro de una clase.

<Badge type="tip" text="MyNum.hpp" />

```cpp
class MyNum
{
private:
	int _num;

public:
	MyNum();
	MyNum(const MyNum &);
	~MyNum();
	MyNum &operator=(const MyNum &);// [!code focus]
	MyNum &operator+=(const MyNum &);// [!code focus]
	MyNum &operator-=(const MyNum &);// [!code focus]
	MyNum &operator*=(const MyNum &);// [!code focus]
	MyNum &operator/=(const MyNum &);// [!code focus]

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

MyNum &MyNum::operator=(const MyNum &other)// [!code focus]
{
	if (this != &other)
		_num = other._num;
	return *this;
}

MyNum &MyNum::operator+=(const MyNum &other)// [!code focus]
{
	_num += other._num;
	return *this;
}

MyNum &MyNum::operator-=(const MyNum &other)// [!code focus]
{
	_num -= other._num;
	return *this;
}

MyNum &MyNum::operator*=(const MyNum &other)// [!code focus]
{
	_num *= other._num;
	return *this;
}

MyNum &MyNum::operator/=(const MyNum &other)// [!code focus]
{
	if (other._num != 0)
		_num /= other._num;
	return *this;
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

	a = b;
	std::cout << "a = b: " << a.getNum() << std::endl;
	a += b;
	std::cout << "a += b: " << a.getNum() << std::endl;
	a -= b;
	std::cout << "a -= b: " << a.getNum() << std::endl;
	a *= b;
	std::cout << "a *= b: " << a.getNum() << std::endl;
	a /= b;
	std::cout << "a /= b: " << a.getNum() << std::endl;

	return 0;
}
```
<Badge type="info" text="output" />
```shell
a is 42
b is 21
a = b: 21
a += b: 42
a -= b: 21
a *= b: 441
a /= b: 21
```
