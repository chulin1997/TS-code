"use strict";
(function () {
    const obj = {
        name: '张三',
        age: 19,
        gender: '男',
        phone: 188
    };
    /**
     * 定义类时，可以使类去实现一个接口
     */
    class myClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("大家好");
        }
    }
})();
