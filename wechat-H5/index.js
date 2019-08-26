var send=document.getElementById('send')
var parent=document.getElementById('content-items')
send.addEventListener('click',function(){


// var html =`<li class="content-item">
// <div class="left-pic">
//      <img src="./images/user.jpg" alt="">
// </div>
// <div class="message">
//     <p class="name">阿萨德</p>
//     <p class="detail">在吗?</p>
// </div>
// <div class="time">
//     <span>下午 3：58</span>
// </div>
// </li>`

// $(html).appendTo(parent)








var li=document.createElement('li')
li.setAttribute('class','content-item');
var divpic=document.createElement('div')
divpic.setAttribute('class','left-pic')
li.appendChild(divpic);
var img=document.createElement('img')
img.setAttribute('src','./images/user.jpg')
divpic.appendChild(img);
var message=document.createElement('div')
message.setAttribute('class','message')
li.appendChild(message);
var p1=document.createElement('p')
var p1txt=document.createTextNode('sd')
p1.setAttribute('class','name')
p1.appendChild(p1txt)
message.appendChild(p1);

var p2=document.createElement('p')
var p2txt=document.createTextNode('schihc')
p2.setAttribute('class','detail')
p2.appendChild(p2txt)
message.appendChild(p2);

var time=document.createElement('div')
time.setAttribute('class','time')
li.appendChild(time)
var span=document.createTextNode('xiawu 5：50')
time.appendChild(span)

parent.appendChild(li)
})