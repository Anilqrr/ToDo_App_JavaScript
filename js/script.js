let box = document.getElementsByClassName('box')[0];
let todoList = document.getElementsByClassName('todo-list')[0];
let todoName = document.getElementById('todoname');
let todoDesc = document.getElementById('tododesc');


const add = async ()=>{
    let todos = await todoName.value;
    let desc = await todoDesc.value;
    if(todos == "" && desc == ""){
       return alert("Pleace Enter Your Value")
    }
    localStorage.setItem(todos,desc)
}

let keys = Object.keys(localStorage)

function remove(i){
    console.log(i)
}


if(!localStorage.length == 0)
{



for(let i in keys){
    todoList.innerHTML += `<div class="box">
    <div class="t-info">
        <div class="share width">
        <img src="img/facebook.svg" alt="">
        <img src="img/instagram.svg" alt="">
        <img src="img/linkedin.svg" alt="">
        <img src="img/twitter.svg" alt="">
    </div>
    <div class="t-name width">
        <h3 class="key">${keys[i]}</h3>
    </div>
        <div class="edit-delete width">
        <form action="index.html">
        <button type="submit" id='btn2'><img src="img/edit.svg"  alt=""></button>
        <button type="submit" id="btn"><img src="img/delete.svg"  alt=""></button>
        </form>
        </div>
    </div>
    <p class='value'>${localStorage.getItem(keys[i])}</p>
</div>`;
}
let btn  = document.getElementById('btn')
let btn2  = document.getElementById('btn2')
btn.addEventListener('click',()=>{
    let key = document.getElementsByClassName('key')[0]
    localStorage.removeItem(key.innerHTML)
    console.log(key)
})
btn2.addEventListener('click',(e)=>{
    e.preventDefault()
    let key = document.getElementsByClassName('key')[0]
    let value = document.getElementsByClassName('value')[0]
   let name  =  todoName.value+= key.innerHTML  
    let valuet = todoDesc.value += value.innerHTML
    localStorage.setItem(name, valuet)
    // console.log(key)
})
// keys.map((e)=>{
//      todoList.innerHTML +=`<div class="box">
//         <div class="t-info">
//             <div class="share width">
//             <img src="img/facebook.svg" alt="">
//             <img src="img/instagram.svg" alt="">
//             <img src="img/linkedin.svg" alt="">
//             <img src="img/twitter.svg" alt="">
//         </div>
//         <div class="t-name width">
//             <h3 id="key">${e}</h3>
//         </div>
//             <div class="edit-delete width">
//             <form action="index.html">
//             <img src="img/edit.svg" alt="">
//             <button type="submit" id="btn">
//             <img src="img/delete.svg" alt=""></button>
//             </form>
//             </div>
//         </div>
//         <p>${localStorage.getItem(e)}</p>
//     </div>`;
// })

// console.log(keys)
}
else{
    todoList.innerHTML += `<div class="empty">
    <h2>Your Todos is Empty Enter Your Todos</h2>
  </div>`;
}




