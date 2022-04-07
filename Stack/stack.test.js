import Stack from './stack';

test('it should push and pop in correct order', () => {
    const stack = new Stack;

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
})

test('it should throw an error if stack is empty and user wants to pop', () => {
    const stack = new Stack;

    expect(() => {
        stack.pop();
    }).toThrow();
})

test('it should return the top of the stack with top method', () => {
    const stack = new Stack;

    stack.push(1);
    stack.push(2);

    expect(stack.top()).toBe(2);
});

test('it should throw an error on calling top on empty stack', () => {
    const stack = new Stack;

    expect(() => {
        stack.top();
    }).toThrow();
});

test('it should return current size of stack with size method', () => {
    const stack = new Stack;

    expect(stack.size()).toBe(0);

    stack.push(1);

    expect(stack.size()).toBe(1);

    stack.push(-1);

    expect(stack.size()).toBe(2);
});

test('it should return true if stack is empty on calling isEmpty method', () => {
    const stack = new Stack;

    expect(stack.isEmpty()).toBe(true);

    stack.push(1);

    expect(stack.isEmpty()).toBe(false);

    stack.pop();

    expect(stack.isEmpty()).toBe(true);
})