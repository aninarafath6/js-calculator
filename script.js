let inp=document.getElementById("inp");
function cle(){
    inp.value=" ";

}
function eqa(){
    
    let num2=inp.value;
    let res=eval(num2);
    inp.value=res;

}
function calc(num){
    inp.value+=num;

}
