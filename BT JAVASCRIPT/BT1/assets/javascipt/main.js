function kiemTra() {
  var input = prompt();
  var n = Number(input);
  if (isNaN(n)) {
    console.log("Không phải số hợp lệ");
  } else if (n % 2 === 0) {
    console.log(`${n} là số chẵn`);
  } else {
    console.log(`${n} là số lẻ`);
  }
}

kiemTra();
