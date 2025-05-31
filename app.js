const listGroup = document.getElementsByClassName('list-group')[0];
const addListItem = (text) => {
  const newItem = document.createElement("li");
  newItem.innerText = text;
  newItem.setAttribute("class", "list-item list-group-item");
  console.log("newListItem:", newItem);
  listGroup.append(newItem);
  addInput.value = "";
}

const addBtn = document.getElementById("addBtn");
const addInput = document.getElementById("li-input");
addBtn.addEventListener("click", ()=>addListItem(addInput.value));


addInput.addEventListener('keyup', (e)=>{
  if(e.key === "Enter"){
    addListItem(addInput.value);
  }
})

// console.log("listgroup:", listGroup);


