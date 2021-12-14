(function() {
  
  // 描述一个对象的类型
  type myType = {
    name: string
    age: number
  }

  /**
   * 接口用来定义一个类的结构
   * 接口名可以重复定义，将合并两个同名接口
   */

  interface myInterFace{
    name: string,
    age: number
  }
  interface myInterFace{
    gender: string,
    phone: number
  }

  const obj: myInterFace = {
    name: '张三',
    age: 19,
    gender: '男',
    phone: 188
  }

  /**
   * 接口可以在定义类的时候去限制类的结构
   * 接口中的所有的属性都不能有实际的值
   * 接口只定义对象的结构，而不考虑实际值
   *    在接口中所有的方法都是抽象方法
   */

  interface myInter{
    name: string
    sayHello(): void
  }

  /**
   * 定义类时，可以使类去实现一个接口
   */
  class myClass implements myInter{
    name: string
    constructor(name: string) {
      this.name = name
    }
    sayHello() {
      console.log("大家好");
    }
  }

})()
