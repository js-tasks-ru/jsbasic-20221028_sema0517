function factorial(n) {
  if (n>1){
    for (var i=n-1;i>0; i--){
      n=n*i
    }
    return n
  }else{
    n = 1
    return n
  }
}