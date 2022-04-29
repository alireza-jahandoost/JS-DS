import SparseTable from "./SparseTable";

test('it should work correct for sum range query', () => {
  const initial = [];
  const arrayLength = 100000;

  for (let i = 0; i < arrayLength; i++) initial.push(Math.floor(Math.random() * 10000000));

  const st = new SparseTable(initial, (a,b) => a+b);

  for (let i = 0; i < 10; i++) {
    const a = Math.floor(Math.random() * arrayLength), b = Math.floor(Math.random() * arrayLength);
    const start = Math.min(a, b);
    const end = Math.max(a, b);

    let sum = 0;
    for (let j = start; j <= end; j++) sum += initial[j];

    expect(st.noneIdempotent(start,end)).toBe(sum);
  }
})

test('it should work correct for multiply range query', () => {
  const initial = [];
  const arrayLength = 1000;

  for (let i = 0; i < arrayLength; i++) initial.push(Math.floor(Math.random() * 10));

  const st = new SparseTable(initial, (a,b) => (a*b));

  for (let i = 0; i < 10; i++) {
    const a = Math.floor(Math.random() * arrayLength), b = Math.floor(Math.random() * arrayLength);
    const start = Math.min(a, b);
    const end = Math.max(a, b);

    let multiply = 1;
    for (let j = start; j <= end; j++) multiply = (initial[j]*multiply);

    expect(st.noneIdempotent(start,end, 1)).toBe(multiply);
  }
})

test('it should work correct for minimum range query', () => {
  const initial = [];
  const arrayLength = 100000;

  for (let i = 0; i < arrayLength; i++) initial.push(Math.floor(Math.random() * 10000000));

  const st = new SparseTable(initial, (a,b) => Math.min(a,b));

  for (let i = 0; i < 10; i++) {
    const a = Math.floor(Math.random() * arrayLength), b = Math.floor(Math.random() * arrayLength);
    const start = Math.min(a, b);
    const end = Math.max(a, b);

    let minimum = initial[start];
    for (let j = start; j <= end; j++) minimum = Math.min(minimum, initial[j]);

    expect(st.idempotent(start,end)).toBe(minimum);
  }
})

test('it should work correct for maximum range query', () => {
  const initial = [];
  const arrayLength = 100000;

  for (let i = 0; i < arrayLength; i++) initial.push(Math.floor(Math.random() * 10000000));

  const st = new SparseTable(initial, (a,b) => Math.max(a,b));

  for (let i = 0; i < 10; i++) {
    const a = Math.floor(Math.random() * arrayLength), b = Math.floor(Math.random() * arrayLength);
    const start = Math.min(a, b);
    const end = Math.max(a, b);

    let maximum = initial[start];
    for (let j = start; j <= end; j++) maximum = Math.max(maximum, initial[j]);

    expect(st.idempotent(start,end)).toBe(maximum);
  }
})
