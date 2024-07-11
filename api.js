// url = 'https://api.thecatapi.com/v1/facts'


let h2 = document.querySelector("h2");
let number = document.querySelector(".number")
let names = document.querySelector(".name")
let body = document.querySelector("body");


// let response = axios.get(url);
// console.log(response);
// for(let val of response){
//     console.log(val);
// }

// data.fact


async function api(){
    let response = await axios.get('https://fakerapi.it/api/v1/credit_cards?_quantity=2');
    console.log(response.data.data[0]);

    let answer = response.data.data[0].type;
    let num = response.data.data[0].number;
    let name = response.data.data[0].owner;



    // return answer;
    // let answer =  response.data.data[0];

    h2.innerText = answer;
    number.innerText = num;
    names.innerText = name;

}

 api();


//  h2.innerText = api();