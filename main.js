var img = ["Mamma_1.jpeg" ,"Mamma_2.jpeg", "Mamma_3.jpeg", "MammaArka.jpeg" , "MammaArka_!.jpeg", "Mamma_4.jpeg", "MammaArka_1.jpeg" , "Mamma_5.jpeg", "MammaPapa_!.jpeg", "MammaPapa.jpeg", "MammaPapa_2.jpeg", "Mamma_6.jpeg", "MammaBadiMamma.jpeg", "MammaBadiMamma_2.jpeg" , "1.jpeg", ]
var i=0
function next(){
    document.getElementById("change").src= img[i];
    i++;
    document.getElementById("audio").play();  
}
