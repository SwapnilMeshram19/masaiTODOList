
var data=localStorage.getItem('tasks');
console.log(JSON.parse(data));

var title=document.getElementById('task-input');


let status=document.getElementById('checkbox').checked;

var editButton=document.getElementById("add-button");
editButton.addEventListener('click',function(){
    let title=document.getElementById('task-input').value;

    let status=document.getElementById('checkbox').checked;
    let body ={
        title,
        status
    };

    if(body.title==""){
        alert('please enter task');
    }else{
        createtask(body);
    }
    
});