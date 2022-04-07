export default class Stack{
    #stack = [];
    #pointer = 0;

    push(element){
        this.#stack[this.#pointer++] = element;
    }

    pop(){
        if(this.isEmpty()){
            throw new Error('Can not pop from empty stack');
        }
        this.#pointer --;
        return this.#stack.pop();
    }

    top(){
        if(this.isEmpty()){
            throw new Error('Can not return top from empty stack');
        }
        return this.#stack[this.#pointer - 1];
    }

    size(){
        return this.#pointer;
    }

    isEmpty(){
        return this.#pointer === 0;
    }
}