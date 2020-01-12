// function camelize(str) {
//   let arr = str.split("-");
//   let brrr =  arr.map(function(str){
//     return str[0].toUpperCase() + str.slice(1)
    
//   });
//   let final = brrr.join("");
// console.log(final);
// };

// let seee = "list-style-image";
// camelize(seee);

function filterRange(arr, a, b) {
let brr = arr.map(function(num, index, arr) {
   if(num > a && num < b) {
    
    arr.push(num);
  }
 
});
 console.log(brr);
}

let array = [1,4,5,8,3,4,2];
filterRange(array, 3, 6);
