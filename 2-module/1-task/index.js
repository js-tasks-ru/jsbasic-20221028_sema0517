function sumSalary(salaries) {
  let sum = Number()
  for (k in salaries){
    if (typeof salaries[k] == 'number'&&isFinite(salaries[k])){
    sum += salaries[k];
    }
   }
  return sum
}
