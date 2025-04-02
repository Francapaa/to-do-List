export function createInput (): HTMLElement{

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Type your next task here...';
input.required = true;

return input; 
}