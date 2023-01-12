// 主要是利用Promise结合数组的reduce函数实现请求排队

/**
 * @description 排队实现某逻辑
*/
const loadImgByOrder = function (cacheLength, size) {
    const cache = []

    return function (callback) {
        const length = cache.push(callback)

        if (length === cacheLength) {
            cache.reduce((pre, cur, index) => {
                return pre.then(() => {
                    if ((index + 1) % size === 0) {
                        cur()
                        return new Promise((resolve) => {
                            setTimeout(() => {
                                resolve()
                            }, 1000)
                        })
                    }
                    cur()
                })
            }, Promise.resolve())
            cache.length = 0
        }
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
// 传入数据总数，和分段数
const loadImg = loadImgByOrder(arr.length, 1)
arr.map((item) => {
    loadImg(() => {
        console.log(item)
    })
})