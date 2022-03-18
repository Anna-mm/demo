// 以下内容默认在 node 环境下执行，浏览器环境报错特别说明了。
// 使用 return 浏览器报错是因为没有把代码放到一个函数体内，放进去就好了。所以可以任务 node 环境和浏览器环境一样的行为
// {
//     // for 中使用 return，直接跳出循环。在浏览器环境报错：Uncaught SyntaxError: Illegal return statement
//     // for 中使用 break，直接跳出循环
//     // for 中使用 continue，停止当前循环，进入下一循环
//     // for 中使用 throw，直接跳出循环，抛出错误
//     for (let i = 0; i < 3; i++) {
//         if (i === 1) {
//             return;
//             break;
//             continue;
//             throw new Error('error');
//         }
//         console.log(i);
//     }
// }

// {
//     // forEach 中使用 return(无所谓 return true 还是 false)，停止当前循环，进入下一循环
//     // forEach 中不能使用 break，SyntaxError: Illegal break statement
//     // forEach 中不能使用 continue，SyntaxError: Illegal break statement
//     // forEach 中使用 throw，直接跳出循环，抛出错误
//     const arr = [1,2,3];
//     arr.forEach(function(value,index) {
//         if(index === 1){
//             break;
//             throw new Error('error');
//         }
//         console.log(index);
//     });
// }

// array.map 和 forEach 行为一致

{
    // for in 中使用 return, 直接跳出循环。在浏览器环境报错：Uncaught SyntaxError: Illegal return statement
    // for in 中使用 break, 直接跳出循环
    // for in 中使用 continue, 停止当前循环，进入下一循环
    // for in 中使用 throw, 直接跳出循环，抛出错误
    // const arr = [1,2,3];
    // for (const key in arr) {
    //     if (Object.hasOwnProperty.call(arr, key)) {
    //         const element = arr[key];
    //         if (element === 2) {
    //             return;
    //             // throw new Error('error');
    //         }
    //         console.log(element);
    //     }
    // }
}

{
    // for of 中使用 return, 直接跳出循环
    // for in 中使用 break, 直接跳出循环
    // for of 中使用 continue, 停止当前循环，进入下一循环
    // for of 中使用 throw, 直接跳出循环，抛出错误
    const arr = [1,2,3];
    for(var item of arr){
        if(item === 2){
            return;
        }
        console.log(item);
    };
}