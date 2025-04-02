function tinhTongSoChan(arr) {
  var total = 0;

  for (var i = 0; i < arguments.length; i++) {
    if (arr[i] % 2 === 0) {
      total += arr[i];
    }
  }
  return total;
}
