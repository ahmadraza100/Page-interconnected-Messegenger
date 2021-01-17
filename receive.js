
window.addEventListener("click", function(){

    var mess = localStorage.getItem("Messege");
    document.querySelector("#mb1").innerHTML = mess ;
})

document.querySelector(".chatbox").addEventListener("click" , function(){
    window.location.reload();
    localStorage.removeItem("Messege");
})