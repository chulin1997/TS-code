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
    this.moveBody()
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

    // 修改X时是在修改X坐标，蛇在向左移动时不能向右移动，反之亦然
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
      // 如果发生了掉头，应该让蛇向反方向继续移动
      if(value > this.X){
        // 如果新值value大于旧值X，说明蛇向右走，此时发生掉头，应该使蛇继续向左走
        value = this.X - 10
      }else {
        value = this.X + 10
      }
    }

    // 移动身体
    this.moveBody()

    this.head.style.left = value + "px"


    // 检查有没有撞到自己
    this.checkHeadBody()
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

    // 修改Y时是在修改Y坐标，蛇在向上移动时不能向下移动，反之亦然
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
      // 如果发生了掉头，应该让蛇向反方向继续移动
      if(value > this.Y){
        // 如果新值value大于旧值Y，说明蛇向右走，此时发生掉头，应该使蛇继续向左走
        value = this.Y - 10
      }else {
        value = this.Y + 10
      }
    }

    // 移动身体
    this.moveBody()

    this.head.style.top = value + "px"
    
    
    // 检查有没有撞到自己
    this.checkHeadBody()
  }

  // 设置蛇增加身体的方法
  addBody() {
    // 向element中添加一个div
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }

  // 添加一个蛇身体移动的方法
  moveBody() {
    
    /**
     * 将后边的身体设置为前边身体的位置
     */

    // 遍历获取所有的身体
    for(let i = this.bodies.length - 1; i > 0; i --){
    // 获取前边身体的位置
      let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

      // 将值设置到当前身体上
      (this.bodies[i] as HTMLElement).style.left = X + "px";
      (this.bodies[i] as HTMLElement).style.top = Y + "px";
    }
  }


  // 检查身体是否撞自己
  checkHeadBody() {
    // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
    for(let i = 1; i < this.bodies.length; i ++){
      let bd = this.bodies[i] as HTMLElement
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
        // 说明蛇头撞到了身体
        throw new Error("撞到自己了~~");
      }
    }
  }
}

export default Snake
