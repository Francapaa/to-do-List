const state = {
  data: {
    list: [] as string[],
  },
  listeners: [] as Array<(state: any) => void>, // es un array de funciones y va a tener algo, NO LO TOMA COMO NEVER
  getState() {
    return this.data;
  },
  setState(newState: any) {
    this.data = newState;
    this.listeners.forEach((callback) => callback(this.data));
  },
  subscribe(callback:(state: any) => void) {
    this.listeners.push(callback);
  },
  addItem(item: string) {
    const currentState = this.getState();
    currentState.list.push(item);
    this.setState(currentState);
  },
};


export {state}; 