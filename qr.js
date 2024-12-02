const apiKey= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const inpBox=document.getElementById("inpBox");
const imgBox=document.getElementById("imgBox");
const button=document.getElementsByTagName("button")[0];
let str="name";



function QR_code_generator (){
    imgBox.src=apiKey+inpBox.value;
    imgBox.classList.add("imgcls");
}

button.addEventListener("click" ,()=>{
    QR_code_generator();
});

inpBox.addEventListener('keydown' , (event)=>{
    if(event.code=="Enter"){
        QR_code_generator();
    }
})
