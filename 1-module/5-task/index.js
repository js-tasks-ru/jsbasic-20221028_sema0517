function truncate(str, maxlength) {
  let readyStr = str;
  if(str.length>maxlength){
    readyStr = str.slice (0, maxlength-1) + "…";
    return readyStr;
  }
  return readyStr;
}
