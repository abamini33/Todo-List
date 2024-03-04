const form = document.querySelector("form");
const list = document.getElementById("list");
const li = document.querySelector("li");

function storeList() {
    window.localStorage.setItem("todoList", JSON.stringify(list.innerHTML));
}

function getTodos() {
    const storedList = window.localStorage.getItem("todoList");
    if (storedList) {
        list.innerHTML = JSON.parse(storedList);
    }
}

window.addEventListener("load", getTodos);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    list.innerHTML += `<li>${item.value}</li>`;
    item.value = "";
    storeList();
});

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("checked")) {
        e.target.remove();
    } else {
        e.target.classList.add("checked");
    }
    storeList();
});
