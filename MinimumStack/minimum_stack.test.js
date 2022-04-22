import MinimumStack from './MinimumStack';

test('it should always return the minimum element in stack', () => {
    const ms = new MinimumStack();

    ms.push(10);
    expect(ms.minimum()).toBe(10);

    ms.push(20);
    expect(ms.minimum()).toBe(10);

    ms.push(-5);
    expect(ms.minimum()).toBe(-5);

    ms.pop();
    expect(ms.minimum()).toBe(10);

    ms.pop();
    expect(ms.minimum()).toBe(10);
})

test('it should return the top of the stack with pop method', () => {
    const ms = new MinimumStack();

    ms.push(1);
    ms.push(2);
    ms.push(3);

    expect(ms.pop()).toBe(3);
    expect(ms.pop()).toBe(2);
    expect(ms.pop()).toBe(1);
})

test('it should return correct value when isEmpty method is called', () => {
    const ms = new MinimumStack();

    expect(ms.isEmpty()).toBe(true);

    ms.push(1);

    expect(ms.isEmpty()).toBe(false);

    ms.pop();

    expect(ms.isEmpty()).toBe(true);
})

test('it should return the top of stack without poping with top method', () => {
    const ms = new MinimumStack();

    ms.push(1);
    ms.push(2);
    ms.push(3);

    expect(ms.top()).toBe(3);
    ms.pop();
    expect(ms.top()).toBe(2);
    ms.pop();
    expect(ms.top()).toBe(1);
})

test('it should return the size of the stack with size method', () => {
    const ms = new MinimumStack();

    ms.push(10);
    ms.push(20);
    ms.push(30);

    expect(ms.size()).toBe(3);
    ms.pop();
    expect(ms.size()).toBe(2);
    ms.pop();
    expect(ms.size()).toBe(1);
    ms.pop();
    expect(ms.size()).toBe(0);
})
