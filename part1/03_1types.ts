let a: 10;
a = 10;

let b: false;
b = false;

let c: number | string;
c = 1;
c = "hello";

// any类型可以给任意其他变量赋值
let d: any;
d = true;
d = 13;
d = "hello";
d = () => {
  console.log(123);
};

// unknown不能直接给其他变量赋值
let e: unknown;
e = 1;
e = true;
e = "hello";

let f: string;
// if(typeof e === 'string'){
//   f = e
// }

// f = e as string

// f = <string>e

function fun(): void {
  return undefined;
}
fun();

function fun1(): never{
  throw new Error("报错了");
}

let g: object
g = {}
g = []
g = () => {
  console.log('ggg');
}
g = undefined
g = null

let h: {
  name: string,
  age?: number
}
h = {
  name: "张三",
  age: 18,
}

let i:{
  name: string,
  [propName: string]: string
}
i = {
  name: "张三",
  age: '18'
}

let j: (a: number, b: number) => number
j = (a, b) => {
  return a + b
}

let k: string[]
k = [1, 2, '3', '4']

let l: number[]
l = [1, 2, '3', '4']

let m: Array<string>
m = [1, 2, '3', '4']

let n: [string, number]
n = ['1', 2]

enum Gender {
  male = 1,
  female = 0
}

let o: {
  name: string,
  gender: Gender
}
o = {
  name: '张三',
  gender: Gender.male
}

type myType = 1 | 2 | 3 | 4
let p: myType
p = null
