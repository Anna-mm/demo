/**
 * 实现 koa-洋葱模型，两者等效
 * @param {*} middleware
 * @returns
 */
export function mycompose(middleware) {
	return (context, next) => {
        return dispatch(0);

        function dispatch(i) {
            const fn = middleware[i] || next;
            if (!fn) {
                return Promise.resolve();
            }
            return Promise.resolve(fn(context, () => dispatch(i + 1)));
        }
    }
}

export function koacompose(middleware) {
    // 判断中间件集合是个数组
    if (!Array.isArray(middleware)) {
    		throw new TypeError('Middleware stack must be an array!')
    }
    // 判断每个中间件是否是函数
    for (const fn of middleware) {
        if (typeof fn !== 'function') {
        		throw new TypeError('Middleware must be composed of functions!')
        }
    }

    return function (context, next) {
		    let index = -1;
		    return dispatch(0);

        // dispatch函数，它将遍历整个middleware，然后将context和dispatch(i + 1)传给middleware中的方法。
        function dispatch(i) {
            if (i <= index) {
            		return Promise.reject(new Error('next() called multiple times'))
            }
            index = i;
            let fn = middleware[i];
            if (i === middleware.length) {
            		fn = next;
            }
            // 这里的 fn 可能是不存在的中间件或者最后一个中间件的下一个，也是不存在的中间件。
            // 只要是不存在，就 resolve
            if (!fn) {
            		return Promise.resolve()
            }

            try {
                return Promise.resolve(fn(context, function next() {
                    return dispatch(i + 1)
                }))
            } catch (err) {
                return Promise.reject(err)
            }
        }
    }
}