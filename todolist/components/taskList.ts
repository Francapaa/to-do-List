import {state} from '../src/state'


export function createTaskList (): HTMLDivElement{

const container = document.createElement ('div');
container.className = 'task-list';


function render (){
    container.innerHTML = '';
    state.getState().list.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.innerHTML = `
        <span>${task}</span>
        <button class="delete" data-index="${index}">❌</button>
        `;
    
    taskItem.querySelector("button")?.addEventListener("click", (event) => {
        deleteTask(index);
    }); 
    
    container.appendChild(taskItem);
    });
}
    state.subscribe(render); 

    return container;
}

function  deleteTask(index: number) {
    const currentState = state.getState();
    currentState.list.splice(index, 1);
    state.setState({list: currentState.list});
}



