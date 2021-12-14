// 定义食物类 Food
class Food{
  //  定义一个属性表示食物所对应的元素
  element: HTMLElement;
  constructor() {
    // 获取页面中的food元素并赋值给element
    this.element = document.getElementById("food")!
  }

  // 定义一个获取食物X轴坐标的方法
  get X() {
    return this.element.offsetLeft
  }
  // 定义一个获取食物Y轴坐标的方法
  get Y() {
    return this.element.offsetTop
  }

  // 改变食物的位置
  change() {

    // 生成一个随机的位置
    // 0 <= left <= 290px
    // 0 <= top <= 290px
    // 蛇移动是10px

    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random() * 29) * 10

    this.element.style.left = left + "px"
    this.element.style.top = top + "px"
  }
}

export default Food
