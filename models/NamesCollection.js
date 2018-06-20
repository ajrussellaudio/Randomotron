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
  return count === 1 ? _.sample(this.names) : _.sampleSize(this.names, count);
};

NamesCollection.prototype.groups = function(groupSize) {
  return _.chunk(_.shuffle(this.names), groupSize);
};

module.exports = NamesCollection;
