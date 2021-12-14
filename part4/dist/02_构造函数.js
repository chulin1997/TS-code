"use strict";
class Dog {
    // constructor 构造函数，在对象创建时调用
    constructor(name, age) {
        // 在实例方法中，this就表示当前的实例
        // 在构造函数中，当前对象就是当前创建的对象
        // 可以通过this像新建的对象中添加属性
        console.log(this);
        this.name = name;
        this.age = age;
        console.log(this);
    }
    bark() {
        console.log('汪汪汪！');
        console.log(this.name);
    }
}
const dog1 = new Dog("小白", 3);
const dog2 = new Dog("小黑", 4);
console.log(dog1);
console.log(dog2);
dog1.bark();
dog2.bark();
