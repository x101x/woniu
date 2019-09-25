//  实例属性
// class Person {
//     constructor(){
//         this.state = {
//             count: 0
//         }
//     }
// }

// class Person {
//     state = {
//         count:0
//     }
// }

// 静态方法
class Person {
    //  static 
    sayHello() {
        return 'hello'
    }
}
var wn = new Person()
console.log(wn.sayHello());

//静态属性
// class Person{}
// Person.name = 'wn'

// class Person{
//     static name = 'wn'
// }