
window.addEventListener('load', () => {

	const next = document.getElementById('next');
	 const add = document.getElementById('addText');
	 const plusIcon = document.createElement("i");
	 plusIcon.setAttribute("class","fas fa-plus-circle fa-1x");
	 next.appendChild(plusIcon);
	 next.appendChild(add);

	const obj =JSON.parse(sessionStorage.getItem('Name'));
     let length=obj.length;
     sessionStorage.setItem("Length",length);
     const list_el = document.querySelector("#tasks");
	 
	 	
     for(let i=0;i<obj.length;i++){

		let currIndex = i; 
		sessionStorage.setItem('cIndex',JSON.stringify(currIndex));

        let task = obj[i].name;


        const tripBox = document.createElement('div');
		tripBox.classList.add('tripBox');

		const taskName = document.createElement('div');
		taskName.classList.add('taskName');

		tripBox.appendChild(taskName);

		const tripName = document.createElement('a');
		tripName.classList.add('tripName');


        tripName.href = './index4.html';
		tripName.innerHTML = task;

		tripName.addEventListener('click',(e) => {
			let currIndex = i; 
			sessionStorage.setItem('cIndex',JSON.stringify(currIndex));
		})


		const horizontal = document.createElement('hr');
		tripName.appendChild(horizontal);

		
		taskName.appendChild(tripName);

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
            tripBox.appendChild(newTask);
			strikeBtn.addEventListener('click', (e) => {
				let res = obj[i].arr[j];
				res = 3+res;
				obj[i].arr[j]=res;
				
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

		list_el.appendChild(tripBox);

        taskAdd.addEventListener('click', (e) => {
		
		let currIndex = i; 
		sessionStorage.setItem('cIndex',JSON.stringify(currIndex));
            const newTask = document.createElement('div');
            newTask.classList.add('subTask');
            newTask.innerText = "Hello";
            tripBox.appendChild(newTask);
		});

		taskDelete.addEventListener('click', (e) => {
            obj.splice(i,1);
            length=obj.length;
            sessionStorage.setItem("Length",length);
            sessionStorage.setItem('Name',JSON.stringify(obj));
            list_el.removeChild(tripBox);
		});

     }
});
