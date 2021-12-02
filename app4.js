const back = document.getElementById('back');
const bText = document.getElementById('bText');
const backIcon = document.createElement("i");
backIcon.setAttribute("class","fas fa-arrow-circle-left fa-2x");

back.appendChild(backIcon);
back.appendChild(bText);


const add = document.getElementById('addTrip');
const plusIcon = document.createElement("i");
plusIcon.setAttribute("class","fas fa-plus-circle fa-2x");
add.appendChild(plusIcon);

let i = JSON.parse(sessionStorage.getItem('cIndex'));
console.log(i);
const obj =JSON.parse(sessionStorage.getItem('Name'));

const mainBox = document.querySelector("#trips");


let task = obj[i].name;
document.getElementById('mainHeading').innerHTML=task;
const tripBox = document.createElement('div');
tripBox.classList.add('tripBox');

const tripName = document.createElement('div');
tripName.classList.add('tripName');
tripName.innerHTML = task;

tripBox.appendChild(tripName);



const horizontal = document.createElement('hr');
tripName.appendChild(horizontal);



const deleteIcon = document.createElement("i");
deleteIcon.setAttribute("class","far fa-trash-alt fa-2x");
const addIcon = document.createElement("i");
addIcon.setAttribute("class","fas fa-plus-circle fa-2x");

const taskAddDelete = document.createElement('div');
taskAddDelete.classList.add('actions');
		
const taskAdd = document.createElement('a');
taskAdd.href = './index3.html'
taskAdd.classList.add('add');

taskAdd.appendChild(addIcon);


		for(let j=0;j<obj[i].arr.length;j++){
			const newTask = document.createElement('div');
			
            console.log(obj[i].arr[j]);
            newTask.classList.add('subTask');
            newTask.innerText = obj[i].arr[j];
			if(obj[i].arr[j][0]==3){
				newTask.innerText = obj[i].arr[j].slice(1);
				newTask.style.textDecoration = "line-through";
				newTask.style.marginLeft = "0%";
				tripBox.appendChild(newTask);
				
			}
			else{
			const strikeBtn = document.createElement('button');
			strikeBtn.classList.add('strike');
			strikeBtn.innerText = "Done";
			

			newTask.appendChild(strikeBtn);
            console.log(newTask);
            tripBox.appendChild(newTask);
			strikeBtn.addEventListener('click', (e) => {
				let res = obj[i].arr[j];
				res = 3+res;
				
				console.log(res);
				obj[i].arr[j]=res;
				console.log(obj[i].arr[j]);
				
				newTask.style.textDecoration = "line-through";
				strikeBtn.style.visibility = "hidden";
				newTask.style.marginLeft = "20%";
				sessionStorage.setItem('Name',JSON.stringify(obj));

			});
		}
			
		}

		


		const taskDelete = document.createElement('a');
		taskDelete.classList.add('delete');

		taskDelete.appendChild(deleteIcon);

		taskAddDelete.appendChild(taskAdd);
		taskAddDelete.appendChild(taskDelete);

		tripBox.appendChild(taskAddDelete);

		mainBox.appendChild(tripBox);

        taskAdd.addEventListener('click', (e) => {
		
			
		sessionStorage.setItem('cIndex',JSON.stringify(i));
			
			console.log("Curr",i);
            const newTask = document.createElement('div');
            console.log("1");
            newTask.classList.add('subTask');
            console.log(newTask);
            tripBox.appendChild(newTask);
		});

		taskDelete.addEventListener('click', (e) => {
            console.log("Before",length);
            obj.splice(i,1);
            console.log("After",length);
            length=obj.length;
            sessionStorage.setItem("Length",length);
            console.log("After",length);
            sessionStorage.setItem('Name',JSON.stringify(obj));
            mainBox.removeChild(tripBox);
		});

     