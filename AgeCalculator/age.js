function ageCalculator(){

    let birthyear = document.getElementById("ageCalculator").value 
    let age = 2023 - birthyear;

if(!birthyear){
    alert("please enter your birthyear !");
}else if(age < 0){
    alert("age cannot be a negative");
}else if(birthyear < 0)
    alert("birthyear cannot be a negative")
else
    alert(age);
}

ageCalculator()