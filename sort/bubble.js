const a = [10, 2, 4, 6, 1, 9, 8];

/**
 * 冒泡排序，因为不是相邻元素两两比较。虽然每一趟排序将最小的排到最前面，看似冒泡排序。
 */
function realBubble(array) {
    // 外层控制，控制趟数，每一次找到一个最大值
    for (let i = 0; i < array.length - 1; i++) {
        // 内层控制，控制比较次数，判断相邻两数的大小
        for (let j = 0; j < array.length - 1 - i; j++) {
            console.log(`第 ${i} 趟, 第 ${j} 次比较`, array[j], array[j+1]);
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                console.log(`交换后`, JSON.stringify(array));
            }
        }
    }
}

realBubble(a);

/**
 * 当前不是冒泡排序，因为不是相邻元素两两比较。虽然每一趟排序将最小的排到最前面，看似冒泡排序。
 */

 function fakeBubble(array) {
     for (let i = 0; i < array.length - 1; i++) {
         for (let j = i + 1; j < array.length; j++) {
             console.log(`第 ${i} 趟, 第 ${j} 次比较`, array[i], array[j]);
             if (array[i] > array[j]) {
                 const temp = array[i];
                 array[i] = array[j];
                 array[j] = temp;
                 console.log(`交换后`, JSON.stringify(array));
             }
         }
     }
 }

 // fakeBubble(a);
