function myfun(){
    setTimeout(()=>{
        console.log("statement 1");
    },3000);
    console.log("statement 2");
}
myfun();