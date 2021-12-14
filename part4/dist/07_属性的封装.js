"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /**
         * getter方法用来读取属性
         * setter方法用来读取属性
         *    - 他们被称为属性的存取器
         */
        // // 定义一个用来获取name属性的方法
        // getName() {
        //   return this._name
        // }
        // // 定义一个用来修改name属性的方法
        // setName(value: string) {
        //   this._name = value
        // }
        // getAge() {
        //   return this._age
        // }
        // setAge(value: number) {
        //   // 判断年龄是否合法
        //   if(value >= 0) {
        //     this._age = value
        //   }
        // }
        // TS中设置getter方法的方式
        get name() {
            console.log('执行了');
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            console.log('执行了');
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const per = new Person("孙悟空", 18);
    console.log(per);
    /**
     * 现在属性是直接在对象中设置的，属性可以任意被修改，将会导致对象中的数据变得非常不安全
     */
    // per._name = '猪八戒'
    // per._age = -88
    // console.log(per.getName());
    // per.setName("猪八戒")
    // console.log(per);
    // console.log(per.getAge());
    // per.setAge(-11)
    // console.log(per);
    // console.log(per.name);
    // per.name = "猪八戒"
    // console.log(per);
    // per.age = 88
    // console.log(per);
    // per.age = -88
    // console.log(per);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    console.log(b.num);
    // class C{
    //   name: string
    //   age: number
    //   // 可以直接将属性直接定义在构造器中
    //   constructor(name: string, age: number){
    //     this.name = name
    //     this.age = age
    //   }
    // }
    class C {
        // 可以直接将属性直接定义在构造器中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('xx', 11);
    console.log(c);
})();
