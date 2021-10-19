/**
 * arghtorm
 * Copyright 2020 Baidu Inc. All rights reserved.
 *
 * @file 实现一个简单的仓储系统，可以不断转入和转出货物，货物最多有两层子目录，数字代表该子目录转入/转出的数量。
 *       转出时不能出现爆仓的情况。
 * @author wangfengjiao(wangfengjiao01@baidu.com)
 */

/**
 * cargo 说明: key 代表类目/子类目名称，value 为 number 时，代表这个类目的数量，为 object 时，代表下一层的货物集合，最多嵌套两层。
 *
 */

/**
{
    productA: { // productA 代表货物的类目名称
        a: 1, // 1 代表类目 a 的数量
        b: 2,
        c: { // c 代表货物的子类目名称
            c1: 3, // c1 代表货物的子类目名称
            c2: 3
        }
    }
    productB: {
        e: 6
    }
}
 */

// 爆仓情况：如转入 {productA: {a: 3, c: 1}} 转出 {productA: {a: 4}}，就会发生子类目 a 爆仓，此时要返回报错。
// 加分项：1. 考虑子类目扩展深度(不止两层) 2. 有单元测试

class