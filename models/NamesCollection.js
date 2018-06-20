const _ = require("lodash");

const NamesCollection = function() {
  this.names = [];
};

NamesCollection.prototype.count = function() {
  return this.names.length;
};

NamesCollection.prototype.add = function(name) {
  this.names.push(name);
};

NamesCollection.prototype.random = function(count = 1) {
  if (count === 1) {
    return _.sample(this.names);
  }
  return _.sampleSize(this.names, count);
};

module.exports = NamesCollection;
