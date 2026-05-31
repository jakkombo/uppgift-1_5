let vip = true;
let age = 17;

document.getElementById("enterBtn").onclick = function () {

    age = document.getElementById('ageInput').value;
    vip = document.getElementById('vipCheckbox').checked;

    if (vip) {
    alert("Welcome in my best VIP customer :)")
}  
    else if (age >= 18) {
    alert("Access granted")
} 
    else {
    alert("Access denied")
}
};
