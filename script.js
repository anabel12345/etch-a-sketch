





const container=document.querySelector('.container');
for(let i=0;i<16;i++){
    let x = document.createElement('div')
    x.style.backgroundColor='white';
    x.style.height='60px'
    x.style.width='60px'

    x.onmouseenter=function(){
        console.log('happy')
        x.style.backgroundColor='black';
    }
   
    container.appendChild(x)
    console.log(document.querySelector('div'))
}




