export default class {
  #db = browser.storage.local;

  constructor(key) {
    this.key = key;
  }

  async create(data) {
    await this.#db.set({ [this.key]: data });
  }

  async read() {
    const data = await this.#db.get(this.key);
    return data[this.key];
  }

  async update(newData) {
    const oldData = await this.read();
    await this.create({ ...oldData, ...newData });
  }

  async delete(item) {
    const data = await this.read();
    delete data[item];
    await this.create(data);
  }

  async clear() {
    await this.#db.remove(this.key);
  }
}
