document.addEventListener("DOMContentLoaded", () => {
   console.log('document has finished  loading')
  
});

// prevent default 
const myform = document.getElementById('create-task-form')

myform.addEventListener('submit', (e) => e.preventDefault())

const text = document.getElementById("new-task-description")
const btn1 = document.getElementById("submit")
const list = document.getElementById("tasks")
console.log(text)
console.log(btn1)
console.log(list)

const outputlist = () => {
   // const li = document.createElement("li")
   // list.append(li)
   list.textContent = text.value
}

btn1.addEventListener('click', outputlist)

































// // create lists

// const todos = document.getElementById('list')

// const listitems = document.getElementById('tasks')

// listitems.innerHTML = "coding"















// // adding list to my todos
// const mytodos = document.getElementById('list')

// const list1 = document.getElementById('tasks')

// list1.innerHTML = "coding"
// mytodos.appendChild(list1)

// //delete the elements created when the user clicks 

// const x = document.querySelectorAll("input[type=submit]")

// console.log(x)

// x.addEventListener('click', ()=>console.log("i am clicked"))

// const h1 = document.querySelector("h1");
// console.log(h1.textContent);

// let characterDiv = document.querySelector("#character-div");

// function handleClick() {
//   console.log("I've been clicked!");
// }

// characterDiv.addEventListener("click", handleClick);


// const form = document.querySelector("form");
// form.addEventListener("submit", submitForm);

// function submitForm(event) {
//   event.preventDefault();
//   console.log(form.querySelector("#create_item").value);
// }