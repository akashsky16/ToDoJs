const obj =JSON.parse(sessionStorage.getItem('Name'));
let length=obj.length;
console.log(length);
sessionStorage.setItem("Length",length);
let index = JSON.parse(sessionStorage.getItem('cIndex'));
const input = document.querySelector("#taskInput");
console.log(input.value);
console.log("object:",obj);
console.log("Index:",index);
const addMore = () => {
    console.log("Inside Add More");
    obj[index].arr.push(input.value);
    console.log(obj[index]);
    sessionStorage.setItem('Name',JSON.stringify(obj));
}