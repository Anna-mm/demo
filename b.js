/**
 * demo
 * Copyright 2020 Baidu Inc. All rights reserved.
 *
 * @file 测试 b.js 和 a.js。
 *
 * 当调用修改变量的函数后，b 模块变量也跟着发生了改变。这说明导入与一般的赋值不同，导入后的变量只是改变了名字，它仍然与原来的变量是同一个。
 *
 * @author wangfengjiao(wangfengjiao01@baidu.com)
 */
import {a, modify} from "./a.js";
console.log(a);
modify();
console.log(a);