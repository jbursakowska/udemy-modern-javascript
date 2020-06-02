// call function takes in student score, total possible score
// 15/20 -> you got a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59


const gradeCalc = function (score, totalScore) {
  const percent = (score / totalScore) * 100
  let letterGrade = ''

  if (percent >= 90) {
      letterGrade = 'A'
  } else if (percent >= 80) {
      letterGrade = 'B'
  } else if (percent >= 70) {
      letterGrade = 'C'
  } else if (percent >= 60) {
      letterGrade = 'D'
  } else {
      letterGrade = 'F'
  }
  return(`You got an ${letterGrade} (${percent}%)`)
}

const result = gradeCalc(10, 20)
console.log(result)


/* 
if (percent >= 90) {
  console.log(`You got an A (${percent}%)`)
}
else if (percent >= 80 && percent <= 89) {
  return(`You got an B (${percent}%)`)
}
else if (percent >= 70 && percent <= 79) {
  return(`You got an C (${percent}%)`)
} 
else if (percent >= 60 && percent <= 69) {
  return(`You got an D (${percent}%)`)
} 
else {
  return(`You got an F (${percent}%)`)
}
} */