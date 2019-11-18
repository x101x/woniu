1.
// function Person(name) {
//   this.name = name
// }

// let p = new Person('wn')

// // console.log(Person.prototype==p.__proto__);
// // console.log(Person.__proto__===Function.prototype)
// console.log(Function.__proto__==Function.prototype);
// console.log(Object.prototype);//{}
// console.log(Object.__proto__);//[Function]
// console.log(Function.prototype);//[Function]
// console.log(Function.__proto__);//[Function]
// console.log(Person.prototype);//Person {}
// console.log(Person.__proto__);//[Function]
// console.log(p.prototype);//undefined
// console.log(p.__proto__); //Person{}



2.
// Array.prototype.method = function(){}
// var maArr = [1, 2, 3, 4, 5, 6, 7, 8]
// maArr.name='fw'

// for (let index of maArr) {
//   console.log(index);
// }
// for (let index in maArr) {
//   console.log(index);
// }
// for in 
//1. index 是索引为字符串型数字 不能进行几何运算
//2. 遍历的顺序有可能不是按照实际数组的内部顺序进行
//3. for in 会遍历数组所有可枚举属性 包括原型
//适合遍历对象

// for of
// 1. 遍历的是数组的元素 不包括数组原型和索引



3.
let gArr = [1,[2,3],4,5,[6,7,[3,2,8]]]
let oArr = [1,2,3,4,5,6,7,3,2,8]
gArr=""+gArr;
gArr=gArr.split(",");
console.log(gArr);

  // function out(arr){
  //   var arr1 =[]
  //   for(let i=0;i<arr.length;i++){
  //     if(Array.isArray(arr[i])){
  //      arr1=arr1.concat(out(arr[i]))
  //     }
  //     else{
  //        arr1.push(arr[i])
  //     }
  //   }
  //   return arr1
  // }

// function out(arr) {
//   return arr.reduce(function(pre,item){
//     return pre.concat(Array.isArray(item)? out(item):item)},[])
  
// }
//  console.log(out(gArr));


 
  