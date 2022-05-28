
var data=JSON.parse(localStorage.getItem('tasks'));

let title=document.getElementById('edit-input');
let statuss=document.getElementById('edit-checkbox');


title.value=data.title;
statuss.checked=data.status;

var editButton=document.getElementById("edit-button");
editButton.addEventListener('click',function(){

    let title=document.getElementById('edit-input').value;
    let statuss=document.getElementById('edit-checkbox').checked; 
    let id=data.id;
    let body ={
        title,
        statuss,
        id
    };

    if(body.title==""){
        alert('please enter task');
    }else{
        putReq(body);
    }
    
});


async function putReq(body){
    try {
        await fetch('http://localhost:3000/tasks',{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
                
            },
            body: JSON.stringify(body),
        });

    } catch (error) {
        console.log(error);
    }

}