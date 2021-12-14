// 定义蛇的类
class Snake{
  // 表示蛇的元素
  head: HTMLElement
  // 舍得身体（包括蛇头）
  bodies: HTMLCollection
  // 获取蛇的容器
  element: HTMLElement

  constructor() {
    this.head = document.querySelector("#snake > div") as HTMLElement
    this.bodies = document.getElementById("snake")!.getElementsByTagName("div")
    this.element = document.getElementById("snake")!
  }

  // 获取蛇头的坐标
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  
  // 设置蛇头的坐标
  set X(value) {
    // 如果新值和旧值相同，则直接返回不再修改
    if(this.X === value){
      return
    }

    // X值得合法范围 0 - 290
    if(value < 0 || value > 290){
      // 进入判断则说明蛇撞墙了
      throw new Error("蛇撞墙了")
      // window.confirm("游戏结束")
    }

    this.head.style.left = value + "px"
  }
  set Y(value) {
    if(this.Y === value){
      return
    }

    // Y值得合法范围 0 - 290
    if(value < 0 || value > 290){
      // 进入判断则说明蛇撞墙了
      throw new Error("蛇撞墙了")
    }

    this.head.style.top = value + "px"
  }

  // 设置蛇增加身体的方法
  addBody() {
    // 向element中添加一个div
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }
}

export default Snake
