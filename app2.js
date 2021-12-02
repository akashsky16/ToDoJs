var list=[];
    const length=sessionStorage.getItem("Length");
	const form = document.querySelector("#taskForm");
	const input = document.querySelector("#taskInput");


    const traverse = () => {

		const task = input.value;
        if(length>0){
                 list=JSON.parse(sessionStorage.getItem('Name'));
                 }

        console.log(task);

        const tempObj = {
            name: task,
            arr: []
        }
        list.push(tempObj);
        console.log(tempObj);
        console.log("Array Of Objects: ",list);
        console.log(tempObj.name);
        sessionStorage.setItem('Name',JSON.stringify(list));
    };