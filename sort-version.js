/**
 * arghtorm
 * Copyright 2021 Baidu Inc. All rights reserved.
 *
 * @file 实现一个函数，可以对一系列版本号进行从小到大的排序
 *
 * 输入：['1.0.0', '2.12.1', '1.2.3.4.5.6.7', '0.18.1']
 * 输出：['0,18,1,0,0,0,0', '1,0,0,0,0,0,0', '2,12,1,0,0,0,0', '2,12,1,0,0,0,0']
 *
 * @author wangfengjiao(wangfengjiao01@baidu.com)
 */

const result = sortVersion(['1.0.0', '2.12.1', '1.2.3.4.5.6.7', '0.18.1']);
console.log(result);

function sortVersion (list) {
    const twoDimentionArray= list.map(version => {
        return version.split('.');
    });
    bubbleOrder(twoDimentionArray);
    return twoDimentionArray;
}

/**
 * 冒泡排序
 * @param {*} array
 */
function bubbleOrder(array) {
    // 注意冒泡排序中索引指标的起始值和边际值
    for (let index = 0; index < array.length - 1; index++) {
        const currversion = array[index];
        for (let next = index + 1; next < array.length; next++) {
            const nextVersion = array[next];
            if(isBigger(currversion, nextVersion)) {
                array[next] = currversion;
                array[index] = nextVersion;
            }
        }
    }
}


/**
 * 比较两个数组是否前者大过后者，e.g. [1,2] 和 [1,2,3]
 * 问题：1.2 和 1.2.3 谁大
 *
 * @param {*} firstArray
 * @param {*} secondArray
 * @returns
 */
function isBigger(firstArray, secondArray) {
    // 对齐位数
    const maxLength = Math.max(firstArray.length, secondArray.length);
    fillArrayToMaxLength(firstArray, maxLength);
    fillArrayToMaxLength(secondArray, maxLength);

    let result;
    for (let index = 0; index < maxLength; index++) {
        const valueOfFirstArray = +firstArray[index];
        const valueOfSecondArray = +secondArray[index];
        if (valueOfFirstArray > valueOfSecondArray) {
            result = true;
            break;
        }
        else if (valueOfFirstArray === valueOfSecondArray) {
            continue;
        }
        else {
            result = false;
            break;
        }
    }
    return result;
}

function fillArrayToMaxLength(array, maxLength) {
    const fillLength = maxLength - array.length;
    if (fillLength > 0) {
        // 生成指定长度的均为 0 的数组: new Array(fillLength).fill(0)
        array.splice(array.length, 0, ...new Array(fillLength).fill(0));
    }
}