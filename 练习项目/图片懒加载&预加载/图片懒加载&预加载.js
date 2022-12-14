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
      console.log(e)
    })
  }

  init()
})();
