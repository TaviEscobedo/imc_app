document.querySelector('#button').onclick=(e)=>{
    e.preventDefault()
const peso=document.querySelector("#peso").value;
const talla=document.querySelector("#talla").value;
const sexo=document.querySelector("#sexo").value;
const msg=document.querySelector(".msg")
// console.log(peso);
//  console.log(sexo);
//validar campos
    if(peso=="" || talla=="" || sexo==="none"){
        msg.textContent="*Debe llenar todos los campos"
    }
    else{
        msg.textContent=""
        const imcCrudo=peso/Math.pow(talla,2)
        const imc= imcCrudo.toFixed(1)
        console.log(sexo);
        const doc_imc=document.querySelector(".imc")
        doc_imc.textContent=imc;
        getEstado(imc,sexo);
    }


}

function getEstado(imc,sexo){
    const std=document.querySelector(".estado")
    if(sexo==="hombre"){
        
        // console.log("hombre");
        if(imc<20){
            std.textContent="Desnutrición"
        }
        if(imc>=20 && imc<=24.9){
            std.textContent="Normalidad"
        }
        if(imc>=25 && imc<=29.9){
            std.textContent="Sobrepeso"
        }
        if(imc>=30 && imc<=40){
            std.textContent="Obesidad"
        }
        if(imc>40){
            std.textContent="Obesidad grave"
        }
    }else{
        if(sexo==="mujer"){
        if(imc<19){
            std.textContent="Desnutrición"
        }
        if(imc>=19 && imc<=23.9){
            std.textContent="Normalidad"
        }
        if(imc>=24 && imc<=27.9){
            std.textContent="Sobrepeso"
        }
        if(imc>=28 && imc<=32){
            std.textContent="Obesidad"
        }
        if(imc>32){
            std.textContent="Obesidad grave"
        }
    
    }

}
}