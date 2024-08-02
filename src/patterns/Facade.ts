class Trees {
  get trees() {
    return ["Maple", "Birch", "Oak"];
  }

  getTree(index: number) {
    return this.trees.find((item) => this.trees.indexOf(item) === index);
  }
}

const getFlowers = function (index: number) {
  const flowers = ["Dandelion", "Chamomile", "Rose"];
  return flowers.find((item) => this.flowers.indexOf(item) === index);
};

const shrubs = ["Blueberry", "Blackberry", "Raspberry"]; //All structures are realizated in different variations.

//We need to create general interface that has all methods to work with different structures.

class Facade {
  type: string;
  constructor(type: string) {
    this.type = type;
  }

  get(index: number) {
    switch (this.type) {
      case "tree": {
        return this._findTree(index);
      }

      case "shrubs": {
        return this._findShrubs(index);
      }

      case "flowers": {
        return this._findFlowers(index);
      }
    }
  } //We are going to work only via this function

  _findTree(index: number) {
    const data = new Trees();
    return data.getTree(index);
  }

  _findFlowers(index: number) {
    return getFlowers(index);
  }

  _findShrubs(index: number) {
    return shrubs.find((item) => shrubs.indexOf(item) === index);
  } //There are private methods.
}

const trees = new Facade("tree");
export default trees;
