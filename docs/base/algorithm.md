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

### 最小公倍数
- 概念：两个或多个整数公有的倍数中最小的那个倍数;
- js实现：
```js
    function getLCM(num1, num2) {
        if (num1 === 0 && num2 === 0) return;
        return Math.abs(num1 * num2) / getGCD(num1, num2);
    }
```


## 查找

### 二分查找
- 概念：对排序数组进行查找;
- 图例（来自推荐链接）：
- <img src="https://camo.githubusercontent.com/b4fcd9ad8f7402d3eff24bef5d2cb8480ecbd448/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f382f38332f42696e6172795f5365617263685f446570696374696f6e2e737667">
- js实现：
```js
    function binarySearch(array, value) {
        const comparator = new Comparator(comparatorCallback);

        let startIndex = 0;
        let endIndex = array.length - 1;

        while (startIndex <= endIndex) {
            const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
            // 如果中间索引是查找值，则直接返回索引
            if (array[middleIndex] === value) return middleIndex;
            // 如果中间索引小于查找值，则查找的开始索引设置为中间索引的后一位
            if (array[middleIndex] < value)) {
                startIndex = middleIndex + 1;
            } else {
                // 否则将结束索引设置为中间索引的前一位
                endIndex = middleIndex - 1;
            }
        }

        return -1;
    }
```


## 排序

### 冒泡排序
- 图例（来自推荐链接）：
- <img src="https://camo.githubusercontent.com/383b23979d4d7f279f8fb285b36bcdd357b10a35/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f632f63382f427562626c652d736f72742d6578616d706c652d33303070782e676966">
- js实现：
```js
    function bubbleSort(arr) {
        arr.forEach((a, i) => {
            arr.slice(0, arr.length - i).forEach((b, j) => {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            });
        });
        return arr;
    }
```

### 选择排序
- 图例（来自推荐链接）：
- <img src="https://camo.githubusercontent.com/adfa2cdcc3825092dc405aadd87453571d6e0dc4/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f392f39342f53656c656374696f6e2d536f72742d416e696d6174696f6e2e676966">
- js实现：
```js
    function selectSort(arr) {
        arr.forEach((a, i) => {
            arr.slice(i + 1).forEach((b, j) => {
                if (arr[i] > arr[i + j + 1]) {
                    [arr[i], arr[i + j + 1]] = [arr[i + j + 1], arr[i]];
                }
            });
        });
        return arr;
    }
```

### 插入排序
- 图例（来自推荐链接）：
- <img src="https://camo.githubusercontent.com/8f6fedc10da579f13b22b949f6ad29255b6d721f/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f302f30662f496e73657274696f6e2d736f72742d6578616d706c652d33303070782e676966">
- js实现：
```js
    function insertSort(arr) {
        arr.forEach((a, i) => {
            arr.slice(0, i).forEach((b, j) => {
                if (arr[i] < arr[j]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            });
        });
        return arr;
    }
```

### 堆排序
- 图例（来自推荐链接）：
- <img src="https://camo.githubusercontent.com/61a398b035696628efb6b2b71aa444c0e658e8f7/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f342f34642f48656170736f72742d6578616d706c652e676966">
- js实现：
```js
    function heapSort(arr) {
        const sortedArr = [];
        // MinHeap采用数据结构中的堆的案例demo
        const minHeap = new MinHeap(arr);
        // 如果堆中不是空则获取最小堆顶元素
        while (minHeap.heap.length) {
            const nextMinElement = minHeap.popTop();
            sortedArr.push(nextMinElement);
        }

        return sortedArr;
    }
```

### 归并排序
- 图例（来自推荐链接）：
- <img src="https://camo.githubusercontent.com/64ba2bcbd5c11779657e40a1d03d0ea691f6fa57/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f632f63632f4d657267652d736f72742d6578616d706c652d33303070782e676966">
- js实现：
```js
    // 入口
    function mergeSort (arr) {
        const middleIndex = Math.floor(arr.length / 2);
        const leftArray = arr.slice(0, middleIndex);
        const rightArray = arr.slice(middleIndex, arr.length);
        // 借用快速排序
        const leftSortedArray = quickSort(leftArray);
        const rightSortedArray = quickSort(rightArray);

        return this.mergeSortedArrays(leftSortedArray, rightSortedArray);
    }

    function mergeSortedArrays(leftArray, rightArray) {
        let sortedArray = [];

        while (leftArray.length && rightArray.length) {
            let min = null;

            if (leftArray[0] <= rightArray[0]) {
                min = leftArray.shift();
            } else {
                min = rightArray.shift();
            }

            // 每次对比最小值放到临时数组中
            sortedArray.push(min);
        }

        return sortedArray;
    }
```

### 快速排序
- 图例（来自推荐链接）：
- <img src="https://camo.githubusercontent.com/2499d89bbb30337a5d2d7770cc034b4b71fbfdc6/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f362f36612f536f7274696e675f717569636b736f72745f616e696d2e676966">
- js实现：
```js
    function quickSort (array) {
        if (array.length <= 1) return array;

        const leftArray = [];
        const rightArray = [];

        // 提取中间元素
        const pivotValue = array.shift();
        const centerArray = [pivotValue];

        while (array.length) {
            const curValue = array.shift();

            if (curValue === pivotValue) {
                centerArray.push(curValue);
            } else if (curValue < pivotValue) {
                leftArray.push(curValue);
            } else {
                rightArray.push(curValue);
            }
        }

        const leftArraySorted = quickSort(leftArray);
        const rightArraySorted = quickSort(rightArray);

        return leftArraySorted.concat(centerArray, rightArraySorted);
    }
```

### 希尔排序
- 图例（来自推荐链接）：
- <img src="https://camo.githubusercontent.com/e513df288e0848b06be6aaddd915b49045243985/68747470733a2f2f7777772e7475746f7269616c73706f696e742e636f6d2f646174615f737472756374757265735f616c676f726974686d732f696d616765732f7368656c6c5f736f72745f6761705f342e6a7067">
- js实现：
```js
    function shellSort (array) {
        // 定义对比值的索引距离差
        let gap = Math.floor(array.length / 2);

        while (gap > 0) {
            for (let i = 0; i < (array.length - gap); i++) {
                let currentIndex = i;
                let gapShiftedIndex = i + gap;

                while (currentIndex >= 0) {
                    if (array[gapShiftedIndex] < array[currentIndex]) {
                        [array[gapShiftedIndex], array[currentIndex]] = [array[currentIndex], array[gapShiftedIndex]];
                    }

                    gapShiftedIndex = currentIndex;
                    currentIndex -= gap;
                }
            }

            // 将索引比较间距缩小后再次遍历排序
            gap = Math.floor(gap / 2);
        }

        return array;
    }
```