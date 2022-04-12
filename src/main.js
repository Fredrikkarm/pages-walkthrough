const img = document.querySelector('img');
console.log(import.meta.url);
const tamagotchiUrl = new URL('./img/tamagotchi.jpeg', import.meta.url);
console.log(tamagotchiUrl);
const greenTamagotchiUrl = new URL('./img/greenTamagotchi.jpeg', import.meta.url);

img.src = tamagotchiUrl.href;

let isFirstImage = true;

img.addEventListener('click', ()=>{

    if(isFirstImage){
        img.src = greenTamagotchiUrl.href;
    }else{
        img.src = tamagotchiUrl.href;
    }
    isFirstImage = !isFirstImage;
});
       
    
    
