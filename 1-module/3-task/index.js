function ucFirst(str) {
  let firstLetter, strUpperCase = "";
  if (str.length >0){
    firstLetter = str[0].toUpperCase();
    strUpperCase = firstLetter + str.slice(1);
  }
  return strUpperCase
}
