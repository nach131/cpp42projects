# Operadores Aritméticos:
`+`, `-`, `*`, `/`, `%`

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

	// Operadores Asignación
	MyNum &operator=(const MyNum &);
	MyNum &operator+=(const MyNum &);
	MyNum &operator-=(const MyNum &);
	MyNum &operator*=(const MyNum &);
	MyNum &operator/=(const MyNum &);
	MyNum &operator%=(const MyNum &);

	// Operadores aritméticos
	MyNum operator+(const MyNum &) const;// [!code focus]
	MyNum operator-(const MyNum &) const;// [!code focus]
	MyNum operator*(const MyNum &) const;// [!code focus]
	MyNum operator/(const MyNum &) const;// [!code focus]
	MyNum operator%(const MyNum &) const;// [!code focus]

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

MyNum &MyNum::operator=(const MyNum &other)
{
	if (this != &other)
		_num = other._num;
	return *this;
}

MyNum &MyNum::operator+=(const MyNum &other)
{
	_num += other._num;
	return *this;
}

MyNum &MyNum::operator-=(const MyNum &other)
{
	_num -= other._num;
	return *this;
}

MyNum &MyNum::operator*=(const MyNum &other)
{
	_num *= other._num;
	return *this;
}

MyNum &MyNum::operator/=(const MyNum &other)
{
	if (other._num != 0)
		_num /= other._num;
	return *this;
}

MyNum &MyNum::operator%=(const MyNum &other)
{
    if (other._num != 0)
        _num %= other._num;
    return *this;
}

MyNum MyNum::operator+(const MyNum &other) const// [!code focus]
{
	MyNum result = *this;// [!code focus]
	result += other;// [!code focus]
	return result;// [!code focus]
}

MyNum MyNum::operator-(const MyNum &other) const// [!code focus]
{
	MyNum result = *this;
	result -= other;
	return result;
}

MyNum MyNum::operator*(const MyNum &other) const// [!code focus]
{
	MyNum result = *this;
	result *= other;
	return result;
}

MyNum MyNum::operator/(const MyNum &other) const// [!code focus]
{
	MyNum result = *this;
	result /= other;
	return result;
}

MyNum MyNum::operator%(const MyNum &other) const// [!code focus]
{
    MyNum result = *this;
    result %= other;
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

	MyNum c = a + b;
	std::cout << "a + b: " << c.getNum() << std::endl;
	c = a - b;
	std::cout << "a - b: " << c.getNum() << std::endl;
	c = a * b;
	std::cout << "a * b: " << c.getNum() << std::endl;
	c = a / b;
	std::cout << "a / b: " << c.getNum() << std::endl;
	c = a % b;
    std::cout << "a % b: " << c.getNum() << std::endl;

	return 0;
}

```

<Badge type="info" text="output" />
```shell
a is 42
b is 21
a + b: 63
a - b: 21
a * b: 882
a / b: 2
a % b: 0
```
