
//Const

// Form ini
const containerTareas = document.getElementById("task-container");
const tarea = document.getElementById("task");
const hora = document.getElementById("time");
// buttons Form
const addBtn = document.getElementById("btn-add");
const clearBtn = document.getElementById("btn-clear");
// buttons dual
const btnSeleccionar = document.getElementById('seleccionar');
// Modal Edit 
const modalEl = document.getElementById('modal');
const taskEdit = document.getElementById('E_task');
const timeEdit = document.getElementById('E_time');
const btnEdit = document.getElementById('btn-edit');
const btnCancel = document.getElementById('btn-cancel');
// Variable aux
let   keyChange = "";
let   id = 1;

//funtions

function EditField () {
    const idkey = document.getElementById(keyChange);
    
    let tareas = taskEdit.value;
    let time = timeEdit.value;
    let p = idkey.querySelector('p');
    let span = idkey.querySelector('span');
    p.innerText = tareas;
    span.innerText = time + " hs.";  
    console.log(id); 
       
}

function deleteField (id) {
    document.getElementById(id).remove(); 
}

function doneTask (id) {
    const key = document.getElementById(id);
    let divDone = key.querySelector('div');
    divDone.classList.toggle("green");
}

function doTask() {
    let tareas = tarea.value;
    let tiempo = hora.value;

    if (!tareas == "" && !tiempo == ""){
         
    containerTareas.classList.remove('none');    
    let element = document.createElement('p');
    let tiempoEL = document.createElement('span');
    let divTask = document.createElement('div');
    let formEl = document.createElement('form');
    let btn_edit = document.createElement('button'); 
    let btn_delete = document.createElement('button');
    let btn_done = document.createElement('button');
    let ico_edit = document.createElement('span');
    let ico_delete = document.createElement('span');
    let ico_done = document.createElement('span');
    let check1 = document.createElement('input');
        

    element.value = tareas;
    element.innerText = tareas;
    tiempoEL.value = tiempo;
    tiempoEL.innerText= tiempo + " hs.";
    tiempoEL.classList.add('time');
        
    ico_edit.classList.add('material-icons');
    ico_edit.innerText="mode_edit";
    ico_delete.classList.add('material-icons');
    ico_delete.innerText="delete";
    ico_done.classList.add('material-icons');
    ico_done.innerText="done";

    

    btn_edit.appendChild(ico_edit);
    btn_delete.appendChild(ico_delete);
    btn_done.appendChild(ico_done);
           
    btn_edit.classList.add('btn-task', 'btn-edit');
    btn_edit.onclick = function (e){
       e.preventDefault();
        modalEl.classList.remove('none');
        modalEl.classList.add('overlay');
        let Id = divTask.getAttribute('id');
        //EditField(Id);
        keyChange  = Id;
        console.log(id);
    }

    btn_delete.classList.add('btn-task', 'btn-delete');
        btn_delete.onclick = () => {
        deleteField(divTask.getAttribute('id'));
        console.log(id);
        }

    btn_done.classList.add('btn-task', 'btn-done'); 
    btn_done.onclick = function (e){
        e.preventDefault(); 
        btn_done.classList.toggle('glowgreen');
        divTask.classList.toggle('green');
        }


    formEl.classList.add('formEl');
    formEl.appendChild(tiempoEL);
    formEl.appendChild(btn_edit);
    formEl.appendChild(btn_delete);
    formEl.appendChild(btn_done);
    check1.setAttribute('type', 'checkbox');
    check1.classList.add('none', 'checked');
    
    divTask.setAttribute('id', id++);
    divTask.classList.add('orange');
    divTask.appendChild(check1);
    divTask.appendChild(element);
    divTask.appendChild(formEl);
  
    containerTareas.appendChild(divTask);
    btnSeleccionar.disabled = false;

    } else {
        alert("Llenar Todos los Campos")
    }
 }

function clear(limpiar){
    limpiar.value = '';
}

function clearAll(element) {
  while (element.firstChild) {
  element.removeChild(element.firstChild);
  element.classList.add('none');
    }
}

function emptyDiv (element) {
    if (!element.firstChild) {
        alert ("No HAY NADA que QUITAR")
    }
}




// EventListeners <<<<<<<<<<<

// Form Buttons
addBtn.addEventListener("click", (e) => {
    e.preventDefault();  
    doTask();
    clear(tarea);
    clear(hora);
})

clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    emptyDiv(containerTareas);
    clearAll(containerTareas);

})

btnSeleccionar.addEventListener("click", (e) => {
    e.preventDefault();
    
    console.log("test");
    let checkToggle = document.getElementsByClassName('none checked');
    console.log(checkToggle);
    checkToggle.array.forEach(element => {
        element.classList.remove('none');
    });
    
})

// ----------------------------------------------<<<<<

// Modal Buttons
btnCancel.addEventListener("click", (e) => {
    e.preventDefault();
    modalEl.classList.remove('overlay');
    modalEl.classList.add('none');
})

btnEdit.addEventListener("click", (e) => {
    e.preventDefault();
    modalEl.classList.remove('overlay');
    modalEl.classList.add('none');
    EditField();

})

// ----------------------------------------------<<<<<

console.log("Hola");
