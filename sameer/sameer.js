function outer() {
  var x = 30;
  function inner() {
    console.log(x);
  }
  inner();
}
outer();
