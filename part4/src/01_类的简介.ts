// 使用class关键字来定义一个类
/**
 * 对象中主要包含两个部分：
 *      属性
 *      方法
 */
class Person {
  /**
   * 直接定义的属性是实例属性，需要通过对象的实例去访问
   * const per = new Person()
   * per.userName
   * 
   * 使用static关键词开头定义的属性是静态属性（类属性），可以通过类去直接访问
   * Person.age
   */
  // 定义实例属性
  // readonly开头的属性是只读的属性，无法修改
  readonly username: string = "孙悟空"
  // 在属性前使用static关键词可以定义类属性（静态属性）
  static age: number = 18

  // 定义方法
  /**
   * 如果方法以static开头则方法就是类方法，可以直接通过类去调用
   */
  sayHello() {
    console.log("hello")
  }
  static sayHi() {
    console.log("hi")
  }
}

const per = new Person()

console.log(per);
console.log(per.username, per.age);
console.log(Person.username, Person.age);
per.username = "猪八戒"
console.log(per.username);

per.sayHello()
Person.sayHi()

