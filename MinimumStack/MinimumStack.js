import Stack from '../Stack/stack';

export default class MinimumStack{
    #stack = new Stack;

    push(element){
        this.#stack.push([element, this.#stack.isEmpty() ? element : Math.min(element, this.#stack.top()[1])]);
    }

    minimum(){
        return this.#stack.top()[1];
    }

    pop(){
        return this.#stack.pop()[0];
    }

    isEmpty(){
        return this.#stack.isEmpty();
    }

    top(){
        return this.#stack.top()[0];
    }

    size(){
        return this.#stack.size();
    }
}