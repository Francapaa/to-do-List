export function createButton (text: string, onClick : () => void): HTMLElement {
  const button = document.createElement('button');
  button.innerText = text;
  button.addEventListener('click', onClick);
  return button; 
}