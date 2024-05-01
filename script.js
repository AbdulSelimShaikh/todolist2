const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const countval=document.querySelector(".count-value");

let taskCount=0;

//display cout number
const displayCount=(taskCount1)=>{
    
 countval.innerText=taskCount1;
};
// add new list 
function addTask(){
    if(inputBox.value===''){
        alert("you mast write something");
    }
    else{
        let li =document.createElement("li");

        li.innerHTML=inputBox.value;
        taskCount=taskCount+1;
       

        displayCount(taskCount);
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}


// checked or nuchked and remove 
listContainer.addEventListener("click",function(e){
    
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        let val=document.querySelectorAll ("LI").length
      let val1=  document.querySelectorAll ("ul li.checked").length;
      console.log(val); 
      taskCount=val-val1;
      displayCount(taskCount);
      saveData();  
        
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        taskCount=taskCount-1;
        displayCount(taskCount);
        saveData();
    }
});


// save local storag
function saveData(){
    localStorage.setItem("data1", taskCount); 
    localStorage.setItem("data",listContainer.innerHTML);
}

// fast get all detalis and show previous url 
function showTask(){ 
  taskCount=0;
 var ss=parseInt(localStorage.getItem("data1"))||0;
 console.log(typeof ss);
 console.log(ss+1);
 let int1=ss;
 taskCount=int1+0; 
 displayCount(int1);
listContainer.innerHTML=localStorage.getItem("data");
}
showTask();