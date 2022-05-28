

displayData();
var addButton=document.getElementById("add-button");
addButton.addEventListener('click',function(){
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


async function fetchdata(url){
    try {
        let res=await fetch(url);
        let data=await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function displayData(){
    let url="http://localhost:3000/tasks";
    let data=await fetchdata(url);

    let task=document.getElementById("task");
    localStorage.clear();
    data.forEach(function(el){
        let taskdiv=document.createElement('div');
        taskdiv.className='task-div';
        taskdiv.innerText=el.title;

        if(el.status){
            taskdiv.style.color="green";
        }else{
            taskdiv.style.color="red";
        }

        taskdiv.addEventListener('click',function(){
            
            location.href="edit.html";
            localStorage.setItem("tasks",JSON.stringify(el));
        });
        task.append(taskdiv);

    });
}
        

async function createtask(body){
    try {
        let res=await fetch('http://localhost:3000/tasks',{
            method:"POST",
            body: JSON.stringify(body),
            headers:{
                "Content-Type":"application/json"
            }
        });

    } catch (error) {
        console.log(error);
    }

}
