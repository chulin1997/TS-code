// 引入其他类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";


// 游戏的控制器
class GameControl{

  // 定义三个属性
  // 蛇
  snake: Snake
  // 食物
  food: Food
  // 记分牌
  scorePanel: ScorePanel

  // 创建一个存储蛇移动方向（按键方向）的属性
  direction: string = ""

  // 创建一个属性用来记录游戏是否结束
  isLive:boolean = true

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    this.init()
  }

  // 游戏的初始化方法，调用后游戏立即开始
  init() {

    // 绑定键盘按键事件
    document.addEventListener('keydown', this.keyDownHandler.bind(this))

    // 调用run方法，使蛇移动
    this.run()

  }

  // 创建一个键盘按下的响应函数
  keyDownHandler(event: KeyboardEvent) {
    // console.log(event.key);
    // ArrowUp Up w
    // ArrowLeft Left a
    // ArrowDown Down s
    // ArrowRight Right d
    // 检查event.key的值是否合法（用户是否按了正确的键）
    // 修改direction
    this.direction = event.key
  }

  // 创建一个控制蛇移动的方法
  run() {
    /**
     * 根据方向(this.direction)来使蛇的位置改变
     * 向上：top 减少
     * 向下：top 增加
     * 向左：left 减少
     * 向右：left 增加
     */

    let X = this.snake.X
    let Y = this.snake.Y
    
    // 根据按键方向修改 X 和 Y 

    switch (this.direction) {
      case 'ArrowUp':
      case 'w':
      case 'Up':
        // 向上移动top减少
        Y -= 10
        break;
      case 'ArrowDown':
      case 's':
      case 'Down':
        // 向下移动top增加
        Y += 10
        break;
      case 'ArrowLeft':
      case 'a':
      case 'Left':
        // 向左移动left减少
        X -= 10
        break;
      case 'ArrowRight':
      case 'd':
      case 'Right':
        // 向右移动left增加
        X += 10
        break;
    }

    // 调用蛇吃到食物的方法
    this.checkEat(X, Y)

    // 修改蛇的 X 和 Y
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (error: unknown) {
      // 进入到catch，说明出现了异常，游戏结束，弹出一个提示信息
      alert(error + " GAME OVER !")
      this.isLive = false
    }

    // 开启定时调用
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }

  // 定义一个方法，用来检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if(X === this.food.X && Y === this.food.Y){
      // 食物的位置应该重置
      this.food.change()
      // 分数增加
      this.scorePanel.addScore()
      // 蛇要增加一节
      this.snake.addBody()
    }
  }

}

export default GameControl
