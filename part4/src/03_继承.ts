(function() {

  // 定义一个Animal类
  class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }

    sayHello() {
      console.log("动物的叫声~");
    }
  } 
  
  // 定义一个表示狗的类
  // extends 使Dog类继承Animal类
  /**
   * Dog extends Animal
   *  - Animal 被称为父类，Dog 被称为子类
   *  - 使用继承后，子类将会拥有父类所有的属性和方法
   *  - 通过继承可以将多个类中共有的代码写在一个父类中，
   *      这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
   *  - 如果希望在子类中添加父类中没有的属性或方法可以直接添加
   *  - 如果在子类中添加了和父类相同的方法，则子类方法会覆盖父类的方法
   *      这种子类覆盖掉父类的方法的形式，称为方法重写
   */
  class Dog extends Animal{
    
    run() {
      console.log(`${this.name} is running `);
    }

    sayHello() {
      console.log("汪汪汪");
    }

  }

  // 定义一个表示猫的类
  // extends 使Cat类继承Animal类
  class Cat extends Animal{
    sayHello() {
      console.log("喵喵喵");
    }
  }

  const dog = new Dog("旺财", 3)
  console.log(dog);
  dog.run()
  dog.sayHello()

  const cat = new Cat("咪咪", 13)
  console.log(cat);
  cat.sayHello()
})()
