export default class Queue{
    #rear = 0;
    #front = 0;
    #queue = [];

    push(element){
        this.#queue[this.#front++] = element;
    }

    pop(){
        if(this.isEmpty()){
            throw new Error('can not pop from empty queue');
        }
        return this.#queue[this.#rear++];
    }

    front(){
        if(this.isEmpty()){
            throw new Error('can not pop from empty queue');
        }
        return this.#queue[this.#rear];
    }

    size(){
        return this.#front - this.#rear;
    }

    isEmpty(){
        return this.#front === this.#rear;
    }
}