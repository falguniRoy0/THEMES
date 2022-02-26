const body = document.querySelector('body');
const btn = document.querySelector('button');
const icon = document.querySelector('button i');

btn.addEventListener('click', ()=>{
    if(icon.className === 'fas fa-moon'){
        icon.className = 'fas fa-sun';
        body.style.background = 'rgb(17, 17, 17)';
    }else if(icon.className === 'fas fa-sun'){
        icon.className = 'fas fa-angry';;
        body.style.background = '#DA1212';
    }else if(icon.className === 'fas fa-angry'){
        icon.className = 'fas fa-cannabis';
        body.style.background = '#C06C84';
    }else if(icon.className === 'fas fa-cannabis'){
        icon.className = 'fas fa-cat';
        body.style.background = '#C1A3A3';
    }else{
      body.style.background = 'white';
      icon.className = 'fas fa-moon';
    }
});