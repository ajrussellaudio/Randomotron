const _ = require("lodash");

const Cohort = function(students) {
  this.students = students || [];
};

Cohort.prototype.count = function() {
  return this.students.length;
};

Cohort.prototype.add = function(student) {
  this.students.push(student);
};

Cohort.prototype.random = function(count = 1) {
  return count === 1
    ? _.sample(this.students)
    : _.sampleSize(this.students, count);
};

Cohort.prototype.groups = function(groupSize) {
  return _.chunk(_.shuffle(this.students), groupSize);
};

module.exports = Cohort;
