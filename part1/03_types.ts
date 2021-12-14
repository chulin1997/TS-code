// boolean, string, number, 字面量, any, unknown, void, never, object, Array, enum, tuple, 自定义类型

let s: 10
s = 10
// s = 11

let t: 'male' | 'female'
t = 'male'
t = 'female'
t = 'hello'

let u: number | string | boolean
u = 'hello'
u = 123
u = true
u = "ts"

// any类型可以给任意其他变量赋值
let w: any
w = 10
w = 'ts'
w = true

// unknown不能直接给其他变量赋值
let x: unknown
x = 10;
x = true
x = "hello";

let y: string

y = w
if( typeof x === 'string') {
  y = x
}

y = x as string
y = <string>x

function fn(): void {
  return undefined
}
fn()

function fn1(): never {
  throw new Error("报错了");
}

let h: object
h = {}
h = []
h = function(){}
h = null
h = undefined

let i: {
  name: string,
  age?: number
}
i = {
  name: '张三',
  age: 17
}

let j: {
  name: string,
  [propName: string]: any
}
j = {
  name: '李四',
  age: 18,
  gender: '男'
}

let k: (a: number, b: number) => number
k = function(n1, n2) {
  return n1 + n2
}

let l: string[]
l = ['1', '2', 3, 4]
let m: number[]
m = [1, 2, 3, '4']
let n: Array<string>
n = ['1', '2', 3]

let o: [string, string]
o = ['hello', 'abc']

enum Gender{
  Male = 0,
  Female = 1
}
let p: {
  name: string,
  gender: Gender
}
p = {
  name: '王五',
  gender: Gender.Male
}

type myType = 1 | 2 | 3 | 4 | 5
let q: myType
q = 1
