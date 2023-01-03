// 懒加载：先显示骨架屏，在图片请求回来后替换骨架屏的位置
const imgData = [
  { img: './images/1.jpg', name: '图片1' },
  { img: './images/1.jpg', name: '图片2' },
  { img: './images/1.jpg', name: '图片3' },
  { img: './images/1.jpg', name: '图片4' },
  { img: './images/1.jpg', name: '图片5' },
  { img: './images/1.jpg', name: '图片6' },
  { img: './images/1.jpg', name: '图片7' },
  { img: './images/1.jpg', name: '图片8' },
  { img: './images/1.jpg', name: '图片9' },
  { img: './images/1.jpg', name: '图片10' },
];

(function () {

  function init() {
    bindDataToDom(imgData);
    bindEvent()
  }

  // 将模板替换成真实的数据 
  function bindDataToDom(data) {
    let list = '';
    const template = document.getElementById('J_imgTpl').innerHTML;
    const imgWrapper = document.querySelector('.J_imgList');
    // 替换花括号模板
    data.forEach((item) => {
      list += template.replace(/{{(.*?)}}/g, function (node, key) {
        return {
          name: item.name,
          img: item.img,
        }[key];
      });
    });
    // 将替换好的html字符串放入
    imgWrapper.innerHTML = list;
  }

  // 监听滚动事件，绑定事件
  function bindEvent() {
    const wrapper = document.querySelector('.wrapper')
    wrapper.addEventListener('scroll', (e) => {
      console.log(e.target.scrollTop)
      const lists = [...document.getElementsByClassName('img-item')]
      lists.forEach((list) => {
        console.log(list)
      })

    })
  }

  init()
})();

(function () {
  const type = Object.prototype.toString.call

  /**
   * @description 对象深克隆
   * @param target 被克隆的对象
  */
  function deepClone(target) {
    const result = {}

    for (key in target) {
      // 如果复制的属性的类型不是对象或复制的属性的类型为数组，那么直接赋值就可以
      if (typeof target[key] !== 'object' || type(target[key]) === '[object Array]') {
        debugger
        result[key] = target[key]
      }
      // 如果复制的属性的类型为对象，那么需要进入到每一层进行复制
      if (type(target[key]) === '[object Object]') {
        result[key] = deepClone(target[key])
      }
    }
    return result
  }

})()


let obj = {
  a: 2,
  b: {
    c: 2,
    d: {
      f: 2,
      fn: function () { },
      arr: [1, 1, 1]
    }
  }
}
let res = deepClone(obj)