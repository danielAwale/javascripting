const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passingGrade = grades.filter(function(num) {
  console.log(num);
    return num > 70;
})

console.log("the passing grades are", passingGrade);