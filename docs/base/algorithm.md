## 推荐

### 文章
- [github上start2w+的文章](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md);


## 数学

### 阶乘
- 例子：5! = 5 * 4 * 3 * 2 * 1 = 120;
- js实现：
```js
    function factorial(num) {
        if (num === 1) return 1; 
        return num * factorial(num - 1);
    }
```

### 斐波拉契数列
- 例子：0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...;
- js实现：
```js
    function fibonacci(num) {
        if (num === 0 || num === 1) return num;
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
```

### 是否是素数
- 概念：只能被1和本身整除的数;
- js实现：
```js
    function isPrimeNum(number) {
        // 是否是整数，是否小于1
        if (number % 1 !== 0 || number <= 1) return false;
        // 2,3是素数
        if (number <= 3) return true;
        // 能被2整除则不是
        if (number % 2 === 0) return false;

        // 开平方
        const sqrt = Math.sqrt(number);
        for (let i = 3; i <= sqrt; i += 2) {
            if (number % i === 0) return false;
        }

        return true;
    }
```

### 最大公约数
- 概念：所有能同时被两个整数整除的最大的除数;
- js实现：
```js
    function getGCD(num1, num2) {
        const a = Math.abs(num1);
        const b = Math.abs(num2);

        if (a === 0 && b === 0) return null;
        if (a === 0 && b !== 0) return b;
        if (a !== 0 && b === 0) return a;
        
        // 相对大的模相对小的，如果能整除（比如4和8），则递归时会存在一方为0，直接返回另一方
        // 如果有余数，说明不能直接整除（比如4和6），则递归时大的那方传入余数，继续递归，直到一方能整除另一方
        if (a > b) {
            return getGCD(a % b, b);
        }

        return getGCD(b % a, a);
    }
```