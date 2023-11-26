
// let mainheading=document.getElementById("main-heading");
// // mainheading.textContent="Hello world";
// console.log(mainheading.innerText);
// mainheading.style.backgroundImage = "url('cloudimg.jpeg')";
// const main=document.querySelectorAll(".main-item");
// console.log(main);

// const link=document.querySelector("a");
// // link.setAttribute("href","https://google.com");

// console.log(link.getAttribute("href").slice(1));

// const links=document.getElementsByTagName("a");

// for(let i=0;i<links.length;i++){
//     const navlinks=links[i];
//     navlinks.style.backgroundColor="#fff";
//     navlinks.style.color="green";
// }

// for(let k of links){
//     k.style.backgroundColor="#323";
//     k.style.color="red";
// }

// for(let k in links){
//     links[k].style.backgroundColor="#999";
//     links[k].style.color="blue";
// }

// const newhtml=document.querySelector(".headline");
//  newhtml.innerHTML="<h2 id=\"main-heading\">This the Changed one</h2>";
//  newhtml.innerHTML="<button class=\"btn\">Learn More</button>";

// const root=document.getRootNode();
// const html=root.childNodes[0];
// // console.log(html.childNodes);
// const headnode=html.childNodes[0];
// console.log(headnode);

// const div=document.querySelector(".container");
// console.log(div.childNodes);

// const sectiontodo=document.querySelector(".todo");

// sectiontodo.classList.toggle('bg-dark');
// sectiontodo.classList.remove('container');
//METHOD 1 
// const todoch=document.querySelector(".todo-list");
// todoch.innerHTML +="<li>Hello Everyone</li>"; 
// todoch.innerHTML +="<li>Todo 2</li>";

// for(let i=0;i<5;i++){
//     todoch.innerHTML +="<li>Todo</li>";
// }

//METHOD 2 OF Adding elements (LONGCUT)
// const newtodo=document.createElement("li");
// const newtextnode=document.createTextNode("Todo 2");
// const todolist=document.querySelector(".todo-list");
// newtodo.append(newtextnode);
// todolist.append(newtodo)

//SHORTCUT
// const newtodo=document.createElement("li");
// newtodo.textContent="Todo 3";
// const todolist=document.querySelector(".todo-list");
// todolist.append(newtodo);

// const ebutton=document.querySelector("button");
//  ebutton.addEventListener("click",(e)=>{
//     console.dir(e.target);
//  })


// const buttons=document.querySelectorAll(".btn");
// const bodyele=document.querySelector("body");

// buttons.forEach(button => {
//       button.addEventListener("click",(e)=>{
               
//       })
// });

// const body=document.body;

// body.addEventListener("keypress",(e)=>{
//  console.log(e.key);
// })


//ADDING TODO LIST EVENTS

const todoform=document.querySelector(".form-todo");
// console.log(todoform);
const todoinput=document.querySelector(".form-todo input[type='text']");
// console.log(todoinput);
const ultag=document.querySelector(".todo-list");
todoform.addEventListener("submit",(e)=>{
    e.preventDefault(); //prevent from page to be get refreshed
    const newvalue =todoinput.value;
    const newli=document.createElement("li");
    const newliinnerHtml=` <span>${newvalue}</span>
    <div class="todo-button">
    <button class ="todo-btn done">Done</button>
    <button class ="todo-btn notdone">Not Done</button>
    <button class ="todo-btn remove">Remove</button>
    </div>`;
    newli.innerHTML=newliinnerHtml;
    // console.log(newli);
    ultag.append(newli);
    todoinput.value="";
})

ultag.addEventListener("click",(e)=>{
    e.preventDefault();
    if(e.target.classList.contains("done")){
        const lispan = e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration="line-through";
        lispan.style.textDecorationColor="black";
    }
    if(e.target.classList.contains("remove")){
        e.target.parentNode.parentNode.remove();
    }
    if(e.target.classList.contains("notdone")){
        const lispan = e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration="none";
        // lispan.style.textDecorationColor="red";
    }
})