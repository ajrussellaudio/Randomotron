const NamesCollection = function() {
  this.names = [];
};

NamesCollection.prototype.count = function() {
  return this.names.length;
};

module.exports = NamesCollection;
