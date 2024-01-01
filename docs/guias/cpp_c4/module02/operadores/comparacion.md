# Operadores de Comparación:
`==`, `!=`, `<`, `>`, `<=`, `>=`

Se utilizan para comparar dos valores y producir un resultado booleano (verdadero o falso) en función de la relación entre esos valores.

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
	MyNum &operator=(const MyNum &);

	int getNum() const;
	void setNum(const int);

	bool operator>(const MyNum &) const;// [!code focus]
	bool operator<(const MyNum &) const;// [!code focus]
	bool operator>=(const MyNum &) const;// [!code focus]
	bool operator<=(const MyNum &) const;// [!code focus]
	bool operator==(const MyNum &) const;// [!code focus]
	bool operator!=(const MyNum &) const;// [!code focus]
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

bool MyNum::operator<(const MyNum &other) const { return _num < other._num; }// [!code focus]
bool MyNum::operator>(const MyNum &other) const { return _num > other._num; }// [!code focus]
bool MyNum::operator>=(const MyNum &other) const { return _num >= other._num; }// [!code focus]
bool MyNum::operator<=(const MyNum &other) const { return _num <= other._num; }// [!code focus]
bool MyNum::operator==(const MyNum &other) const { return _num == other._num; }// [!code focus]
bool MyNum::operator!=(const MyNum &other) const { return _num != other._num; }// [!code focus]
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

	std::cout << "a > b: " << (a > b) << std::endl;
	std::cout << "a < b: " << (a < b) << std::endl;
	std::cout << "a >= b: " << (a >= b) << std::endl;
	std::cout << "a <= b: " << (a <= b) << std::endl;
	std::cout << "a == b: " << (a == b) << std::endl;
	std::cout << "a != b: " << (a != b) << std::endl;

	return 0;
}
```

<Badge type="info" text="output" />
```shell
a is 42
b is 21
a > b: 1
a < b: 0
a >= b: 1
a <= b: 0
a == b: 0
a != b: 1
```
