## 推荐

### 文章
- [github上start2w+的文章](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md);


## 原理

### 链表
- 简介：由节点组成的线性数据集合，每个节点通过指针指向下一个节点，是一种能用于表示序列的数据结构;
- 单链表：每个节点指向下一个节点，最后一个节点指向null;
- 双向链表：每个节点有两个指针（prev和next），prev指向上一个节点，next指向下一个节点，头节点prev和尾节点的next指向null;
- 循环链表：每个节点指向下一个节点，尾节点指向头节点;
- 时间复杂度：
  - 查找：O(n)，因为需要遍历整个链表;
  - 插入、删除：O(1)，只需更改插入位置附近节点的指针指向;
- 图例（出处见顶部推荐文章）：
  - <img src="https://camo.githubusercontent.com/37013b59008ed49a6701968da6b182eb6a9d24c8/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f362f36642f53696e676c792d6c696e6b65642d6c6973742e737667" alt="单链表">
- js实现：
```js
    class LinkedListNode {
        constructor(value, prev = null, next = null) {
            this.prev = prev; // 指向上一个节点的指针
            this.value = value;
            this.next = next; // 指向下一个节点的指针
        }
    }
```

### 栈
- 简介：一种数据集合，提供两个操作：push 用于将元素压入栈，pop用于删除栈顶元素，一种后进先出的数据结构;
- 时间复杂度
  - 查找：O(n);
  - 插入、删除：O(1)，只考虑插入到栈顶和从栈顶删除;
- 图例（出处见顶部推荐文章）：
  - <img src="https://camo.githubusercontent.com/464c4087d283619fe8e8c77cf5805e45faa54ca9/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f622f62342f4c69666f5f737461636b2e706e67" alt="栈">
- js实现：
```js
    class Stack {
        constructor() {
            this.list = [];
        }

        push(value) {
            this.list.push(value);
        }

        pop() {
            if (this.list.length) {
                this.list.pop();
            }
        }
    }
```

### 队列
- 队列是一个元素集合，支持两种基本操作：enqueue 用于添加一个元素到队列，dequeue 用于删除队列中的一个元素，一种先进先出的数据结构;
- 时间复杂度
    - 查找：O(n);
    - 插入、删除：O(1);
- 图例（出处见顶部推荐文章）：
  - <img src="https://camo.githubusercontent.com/7fecf0b843d5f7b26e4514b4e9e047d6c84ee76b/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f352f35322f446174615f51756575652e737667" alt="队列">
- js实现：
```js
    class Queue {
        constructor() {
            this.list = [];
        }

        enqueue(value) {
            this.list.push(value);
        }

        dequeue() {
            this.list.shift();
        }
    }
```

### 哈希表
- 一种键-索引-数据表的数据结构，数据通过键一级键和索引的关系找到对应索引位置的数据表，从而找到数据;
- 图例（百度借鉴）
  - <img src="http://7xph6d.com1.z0.glb.clouddn.com/algorithms_HashTable-seperate-chain.png" alt="哈希表">
- js实现：
```js
    class HashTable {
        /**
         * @param {number} hashTableSize
         */
        constructor(hashTableSize = 32) {
            // 存放键的对象
            this.keys = {};
            // 默认容量
            this.hashTableSize = hashTableSize;
            // 创建hash表数据存储位置
            this.buckets = Array(this.hashTableSize).fill([]);
        }

        /**
         * 通过key值获取对应的hash码作为索引
         */
        hash(key) {
            const hash = Array.from(key).reduce(
                (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
                0,
            );

            return hash % this.buckets.length;
        }

        /**
         * @param {string} key
         * @param {*} value
         */
        set(key, value) {
            // 获取hash值
            const keyHash = this.hash(key);
            // 绑定hash值到keys中
            this.keys[key] = keyHash;

            const bucketChildList = this.buckets[keyHash];
            // 先找是否已存在节点
            const node = bucketChildList.find(node => node.key === key);

            // 如果已有此节点，则覆盖值，否则新增节点
            if (node) {
                node.value = value;
            } else {
                bucketChildList.push({ key, value });
            }
        }

        /**
         * 删除指定key下的对象
         */
        delete(key) {
            const keyHash = this.hash(key);
            delete this.keys[key];
            const bucketChildList = this.buckets[keyHash];
            const nodeIdx = bucketChildList.findIndex(node => node.key === key);

            return nodeIdx !== -1 ? bucketChildList.splice(nodeIdx, 1)[0] : null;
        }

        /**
         * @param {string} key
         * @return {*}
         */
        get(key) {
            const bucketChildList = this.buckets[this.hash(key)];
            const node = bucketChildList.find(node => node.key === key);

            return node ? node.value : null;
        }

        /**
         * @param {string} key
         * @return {boolean}
         */
        has(key) {
            return !!this.keys[key];
        }
    }
```

### 树
- 简介：一种多节点的具有层次关系的数据结构，每个节点有0或多个子节点，没有父节点的节点是根节点，每个子节点有且只有一个父节点，每个子节点又可分为多个子树;
- 二叉树：每个节点最多两个子节点（左子节点和右子节点）;
  - 图例（出处见顶部推荐文章）：
  - <img src="https://camo.githubusercontent.com/38340edffe661998f395184c2ac1578aea636788/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f662f66372f42696e6172795f747265652e737667" alt="二叉树">
  - js实现：
```js
    class BinaryTreeNode {
        constructor(value = null, parent = null, left = null, right = null) {
            this.left = left; // 左子节点
            this.right = right; // 右子节点
            this.parent = parent; // 父节点
            this.value = value; // 值
        }
        
        /**
         * @param {object} 新增节点
         * @param {string} type  类型，'left','right'
         */
        set(node, type = null) {
            if (!type) return;

            // 如果本身有左子树则释放原有左子树引用
            if (this[type]) {
                this[type].parent = null;
            }

            // 赋值新的左子树
            this[type] = node;

            // 然后把自身引用赋给左子树的父节点
            if (this[type]) {
                this[type].parent = this;
            }

            return this;
        }

        removeChild(rNode) {
            if (this.left && rNode.value === this.left.value) {
                this.left = null;
                return true;
            }

            if (this.right && rNode.value === this.right.value) {
                this.right = null;
                return true;
            }

            return false;
        }
    }
```
- 满二叉树：指除最后一层所有节点无任何子节点外，其它节点必有两个子节点;
- 完全二叉树：指除最后一层节点外的其它层节点都是满的（都有两个子节点），且最后一层节点从左向右集中分布（左边节点中间没有空节点）;

### 堆
- 简介：利用完全二叉树结构来维护的一种数据结构，堆又分为大根堆（每个二叉树中父节点的值最大）和小根堆（每个二叉树中父节点的值最小）;
- 图例（出处见顶部推荐文章）：
- <img src="https://camo.githubusercontent.com/cf3c66d0d2ed67af70a8bc500fc215526d266a0d/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f332f33382f4d61782d486561702e737667" alt="堆">
- js实现小根堆
```js
    class MinHeap {
        constructor(arr = []) {
            this.heap = [];

            if (arr instanceof Array) {
                arr.forEach(node => this.add(node));
            }
        }

        add(node) {
            this.heap.push(node);
            this.up();
        }

        up(startIndex) {
            let currentIndex = startIndex || this.heap.length - 1;

            while (
                this.hasParent(currentIndex) &&
                this.lessThan(this.heap[currentIndex], this.parent(currentIndex))
            ) {
                this.swap(currentIndex, this.getParentIndex(currentIndex));
                currentIndex = this.getParentIndex(currentIndex);
            }
        }

        /**
         * 交换
         */
        swap(currentIndex, swapNodeIndex) {
            [this.heap[currentIndex], this.heap[swapNodeIndex]] = [this.heap[swapNodeIndex], this.heap[currentIndex]];
        }
        
        lessThan(node, compareNode) {
            return node.value < compareNode.value;
        }

        eq(node, compareNode) {
            return node.value === compareNode.value;
        }

        /**
         * 是否包含父节点
         */
        hasParent(childIndex) {
            return this.getParentIndex(childIndex) >= 0;
        }

        /**
        * 获取父节点所在堆中的索引
        */
        getParentIndex(childIndex) {
            return Math.floor((childIndex - 1) / 2);
        }

        /**
        * 获取父节点
        */
        parent(childIndex) {
            return this.heap[this.getParentIndex(childIndex)];
        }

        /**
        * 查找
        */
        find(node) {
            const foundNodeIndexs = [];

            for (let itemIndex = 0; itemIndex < this.heap.length; itemIndex += 1) {
                if (this.eq(node, this.heap[itemIndex])) {
                    foundNodeIndexs.push(itemIndex);
                }
            }

            return foundNodeIndexs;
        }

         /**
          * 是否存在左子节点
          */
        hasLeftChild(parentIndex) {
            return this.getLeftChildIndex(parentIndex) < this.heap.length;
        }

        /**
         * 获取左子节点索引
         */
        getLeftChildIndex(parentIndex) {
            return (2 * parentIndex) + 1;
        }

        /**
         * 获取左子节点
         */
        leftChild(parentIndex) {
            return this.heap[this.getLeftChildIndex(parentIndex)];
        }

        /**
         * 是否包含右子节点
         */
        hasRightChild(parentIndex) {
            return this.getRightChildIndex(parentIndex) < this.heap.length;
        }

        /**
         * 获取右子节点索引
         */
        getRightChildIndex(parentIndex) {
            return (2 * parentIndex) + 2;
        }

        /**
         * 获取右子节点
         */
        rightChild(parentIndex) {
            return this.heap[this.getRightChildIndex(parentIndex)];
        }

        /**
         * 下沉
         */
        down(startIndex) {
            let currentIndex = startIndex || 0;
            let nextIndex = null;

            while (this.hasLeftChild(currentIndex)) {
                if (
                    this.hasRightChild(currentIndex) &&
                    this.lessThan(this.rightChild(currentIndex), this.leftChild(currentIndex))
                ) {
                    nextIndex = this.getRightChildIndex(currentIndex);
                } else {
                    nextIndex = this.getLeftChildIndex(currentIndex);
                }

                if (this.lessThan(this.heap[currentIndex], this.heap[nextIndex])) {
                    break;
                }

                this.swap(currentIndex, nextIndex);
                currentIndex = nextIndex;
            }
        }

        remove(node) {
            const numberOfItemsToRemove = this.find(node).length;

            for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
                // 取一个要移除的索引
                const indexToRemove = this.find(item).pop();

                // 如果移除的索引就是堆长度 - 1则直接弹出
                if (indexToRemove === (this.heap.length - 1)) {
                    this.heap.pop();
                } else {
                    // 将最后一个节点赋给移除的索引位置
                    this.heap[indexToRemove] = this.heap.pop();

                    const parentNode = this.hasParent(indexToRemove) ? this.parent(indexToRemove) : null;
                    const leftChild = this.hasLeftChild(indexToRemove) ? this.leftChild(indexToRemove) : null;

                    if (
                        leftChild !== null &&
                        (
                            parentNode === null ||
                            this.lessThan(parentNode, this.heap[indexToRemove])
                        )
                    ) {
                        this.down(indexToRemove);
                    } else {
                        this.up(indexToRemove);
                    }
                }
            }

            return this;
        }
    }
```