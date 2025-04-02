import {state} from './state';
import {createTaskList} from '../components/taskList';
import {createInput} from '../components/input';
import {createButton} from '../components/button';

function main (){

const app = document.querySelector<HTMLDivElement>('#app');
const input = createInput() as HTMLInputElement;
const button = createButton('Add Task', () => {
  if (input.value.trim()){
    state.addItem(input.value);
    input.value = '';
  }
});

const taskList = createTaskList();

app?.append(input, button, taskList);

}
main (); 