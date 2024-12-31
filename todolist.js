   // const resetDiv=document.querySelector('.reset-div');

    const iWanToStore=localStorage.getItem('setItemString');

    //let myArray=[];
    let myArray=JSON.parse(iWanToStore)||[];// it is the simple way
    // if(iWanToStore){
    //     myArray= JSON.parse(iWanToStore);
    // }
    // else{
        
    // }

function addEvents(){

    const inputElement=document.querySelector('.todolist');
    const storeInput=inputElement.value;
    if(storeInput!==''){

        myArray.push(storeInput);
        if(myArray.length>=1){
            const resetDiv=document.querySelector('.reset-div');
            resetDiv.innerHTML=`<button class="reset" onclick="resetHistory()">Reset History</button>`
            const instruction=document.querySelector(`.instruc`);
            instruction.innerHTML='';   
        }
   
        inputElement.value='';
        //console.log(myArray);
        localStorage.setItem('setItemString',JSON.stringify(myArray));
        renderingEvents();
        

    }
    
    
}
function renderingEvents(){

    let EventsDisplay='';
    for(let i=0; i<myArray.length;i++){
        const arrayValStore=myArray[i];
        const pageHtml=`<div class="main"><p class="event1">${arrayValStore}</p><button class="button1" onclick="removeAction(${i});">remove</button></div>`;
        EventsDisplay=EventsDisplay+pageHtml;
    }
    let container=document.querySelector('.con');
    container.innerHTML=EventsDisplay;
    

}

function removeAction(ArrayIndex){
    
    myArray.splice(ArrayIndex,1)
    localStorage.setItem('setItemString', JSON.stringify(myArray));
    renderingEvents();
    if(myArray.length===0){
        const resetDiv=document.querySelector('.reset-div');
        resetDiv.innerHTML='';
        const instruction=document.querySelector(`.instruc`);
        instruction.innerHTML='Add <strong>Events</strong>  for <strong>Specific</strong> Tasks';
                                                                                                 

    }

}
function pressEnter(eventParameter){

    if(eventParameter.key==='Enter')
    {
        addEvents();

    }
}
function resetHistory(){
    
    myArray=[];
    localStorage.removeItem('setItemString');
    renderingEvents();
    const resetDiv=document.querySelector('.reset-div');
    resetDiv.innerHTML='';
}