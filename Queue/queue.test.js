import Queue from './queue';

test('it should queue and enqueue elements correctly', () => {
    const queue = new Queue;

    queue.push(1);
    queue.push(2);

    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
});

test('it should throw error if it is empty', () => {
    const queue = new Queue();

    expect(() => {
        queue.pop();
    }).toThrow();

    queue.push(1);

    expect(queue.pop()).toBe(1);

    expect(() => {
        queue.pop();
    }).toThrow();
})

test('it should return the first element in the queue correctly', () => {
    const queue = new Queue();

    queue.push(1);
    queue.push(2);

    expect(queue.front()).toBe(1);
    expect(queue.pop()).toBe(1);
    expect(queue.front()).toBe(2);
})

test('it should throw error on accessing first element of empty queue', () => {
    const queue = new Queue();

    expect(()=>{
        queue.front();
    }).toThrow();

    queue.push(1);

    expect(queue.front()).toBe(1);
    expect(queue.pop()).toBe(1);

    expect(()=>{
        queue.front();
    }).toThrow();
})

test('it should return the size of the queue correctly', () => {
    const queue = new Queue();

    expect(queue.size()).toBe(0);

    queue.push(1);

    expect(queue.size()).toBe(1);

    queue.push(5);

    expect(queue.size()).toBe(2);

    queue.pop();

    expect(queue.size()).toBe(1);

    queue.pop();

    expect(queue.size()).toBe(0);
})

test('it should return true if isEmpty called and queue is empty and false otherwise', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBe(true);

    queue.push(1);

    expect(queue.isEmpty()).toBe(false);

    queue.pop();

    expect(queue.isEmpty()).toBe(true);
})