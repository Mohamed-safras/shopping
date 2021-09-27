// let n = 10;
// let fact = 0;

// if (n === 1 || n === 0) {
//   console.log(1);
// } else if (n < 0) {
//   console.log("invalid");
// }

// let array = [];

// let string = "helloworld";

// let empString = "";

// for (let i = 0; i < string.length; i++) {
//   array.push(string[i]);
// }
// console.log(array);

// // let names = "123456789";
// // let Strings = "";
// // let arrays = [];
// // for (let i = names.length -1; i>=0; i--) {
// //   arrays.push(names[i])
// // }

// // for(let i = 0 ; arrays.length > i ; i++){
// //   Strings+=arrays[i]
// // }
// // console.log(Strings)

// let formalName = "hello world";

// let stringArray = [];
// let reverseName = "";

// for (let i = formalName.length - 1; i >= 0; i--) {
//   stringArray.push(formalName[i]);
// }

// for( let i = 0 ; stringArray.length > i ; i++ ){
//   reverseName+=stringArray[i]

// }
// console.log(reverseName)
// // console.log(stringArray);

// const months = [
//   'january',
//   'february',
//   'march',
//   'april',
//   'may',
//   'june',
//   'july',
//   'august',
//   'september',
//   'october',
//   'november',
//   'december'
// ]

// const days = [
//   'sunday',
//   'monday',
//   'tuesday',
//   'wednesday',
//   'thursday',
//   'friday',
//   'saturday'
// ]

// const date = new Date();

// console.log(date.getUTCDate);

// const month = date.getMonth();
// console.log(months[month]);

// const day = date.getDay();
// console.log(days[day]);

// const year = date.getFullYear();
// console.log(year)

// let count = 0;

// const value = document.querySelector("#count");

// const btn = document.querySelectorAll(".btn");

// btn.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     const styles = e.currentTarget.classList;
//     if (styles.contains("decrease")) {
//       count--;
//       if(count < 0){
//         return count;
//       }
//     }
//     else if(styles.contains("increase")){
//       count++;
//     }
//     else{
//       count = 0;
//     }
//     value.textContent = count;
//   });
// });

let count = 0;

const value = document.querySelector(".count");
const btns = document.querySelectorAll(".btn");

btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
      if (count < 0) {
        return count;
      }
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
