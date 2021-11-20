function mac(nums) {
  let mac = "";
  // console.log(arrNum);
  for (let i = 0; i <= nums.length+5; i++) {
    var ans = nums.splice(0, 2).join(":");
    // mac += ans + ":";
  }
  return ans;
}
console.log(mac([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]));
