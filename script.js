let size=prompt("How complex should the grid be?")
if(size<=0||size>100){
    size=prompt('type a number between 1 and 100!!')
}




let dimen=860/size;
const container=document.querySelector('.container');
for(let i=0;i<size*size;i++){
    let x = document.createElement('div')
    x.style.backgroundColor='white'
  console.log(dimen)
    x.style.height=dimen+'px'
    x.style.width=dimen+'px'

    x.onmouseenter=function(){
        
        x.style.backgroundColor='black';
  
    }
   
    container.appendChild(x)
    
}




