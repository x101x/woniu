let a = {
  name:'Wn',
  book: {
    title: "Js",
    price:45
  }
}

let b =JSON.parse(JSON.stringify(a))  //深拷贝
a.name = 'w'
a.book.price = 4
console.log(b);
