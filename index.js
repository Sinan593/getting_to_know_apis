// url = 'https://api.thecatapi.com/v1/facts'


let h2 = document.querySelector("h2");
let body = document.querySelector("body");

// let response = axios.get(url);
// console.log(response);
// for(let val of response){
//     console.log(val);
// }

// data.fact


async function api(){
    let response = await axios.get('https://api.thecatapi.com/v1/facts');
    console.log(response);
}

 api();