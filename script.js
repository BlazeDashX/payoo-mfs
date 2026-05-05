const loginBtn = document.getElementById("loginBtn")
loginBtn.addEventListener("click",function(e){
    e.preventDefault();
    const mobileNumber = 2222;
    const pin = 2222;
    const numberValue = document.getElementById("mobile-number").value;
    const pinValue = document.getElementById("pin").value;

    if(parseInt(numberValue) === mobileNumber && parseInt(pinValue) === pin){
        window.location.href = "./home.html";
    }
    else{
        alert("Incorrect mobile number or pin");
    }
})