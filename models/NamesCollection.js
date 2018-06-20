const NamesCollection = function() {
  this.names = [];
};

NamesCollection.prototype.count = function() {
  return this.names.length;
};

NamesCollection.prototype.add = function(name) {
  this.names.push(name);
};

module.exports = NamesCollection;
