
// function convertTemp(celsius){
//     //let fahrenheits;
//     fahrenheits = (celsius * (9/5) )+ 32;
//     return fahrenheits;
// }
// console.log(convertTemp(8))


function convertTemp(fahrenheits){
    // getting user input
    let f = document.getElementById("number").value 

    // converting temperature
    let c = (f -32) * 5/9

    if(c < 16){
        console.log('Cold', c)
    }else if(c >= 16 && c < 21){
        console.log('warm', c)
    }else{
        console.log('hot', c)
    }
    // let celsius = (fahrenheits-32)*5/9;
    // if(celsius < 16){
    //     alert("its cold");
    // }else if (celsius >=16 && celsius < 21){
    //     alert("warm");
    // }else {
    //     alert("hot");
    // }


}
// (convertTemp(27))

let numbers = [5,4,3,2,1,0,1,2,3,4,5]
let sum = 0;

for(let i = 0; i < numbers.length; i++ ){
    sum += numbers[i];

}
console.log(sum)