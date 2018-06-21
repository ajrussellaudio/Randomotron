const Student = function(name, cohort) {
  this.name = name;
  this.cohort = cohort.toUpperCase();
};

module.exports = Student;
