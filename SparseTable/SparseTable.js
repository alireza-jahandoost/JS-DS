export default class SparseTable {
  #array = [];
  #lg = [];
  #callback;
  #K;
  #N;

  constructor(initialArray, callback) {
    this.#callback = callback;
    this.#N = initialArray.length;
    this.#K = Math.floor(Math.log2(this.#N));
    this.#array = new Array(this.#N + 1).fill(0).map(() => new Array(this.#K + 1).fill(0));

    for (let i = 0; i < this.#N; i++) {
      this.#array[i][0] = initialArray[i];
    }

    for (let j = 1; j <= this.#K; j++) {
      for (let i = 0; i + (1 << j) <= this.#N; i++) {
        this.#array[i][j] = this.#callback(this.#array[i][j - 1], this.#array[i + (1 << (j - 1))][j - 1]);
      }
    }

    this.#lg = new Array(this.#N + 1).fill(0);
    this.#lg[1] = 0;
    for (let i = 2; i <= this.#N; i++) {
      this.#lg[i] = this.#lg[Math.floor(i / 2)] + 1;
    }
  }

  idempotent(start, end) {
    const j = this.#lg[end - start + 1];
    return this.#callback(this.#array[start][j], this.#array[end - (1 << j) + 1][j]);
  }

  noneIdempotent(start, end, initialValue = 0) {
    let ans = initialValue;
    for (let j = this.#K; j >= 0; j--) {
      if ((1 << j) <= end - start + 1) {
        ans = this.#callback(ans, this.#array[start][j]);
        start += (1 << j);
      }
    }
    return ans;
  }
}
