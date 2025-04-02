var listSV = [];

function themSV() {
  var ten = prompt("Nhập tên");
  var tuoi = prompt("Nhập tuổi");
  var diem = prompt("Nhập điểm");

  var sinhVien = {
    ten: ten,
    tuoi: tuoi,
    diem: diem,
  };
  listSV.push(sinhVien);
}

function hienThiDSSV() {
  if (listSV.length === 0) {
    console.log("Danh sách trống");
    return;
  }

  console.log("Danh sách sinh viên");
  listSV.forEach(function (sV, index) {
    console.log(
      `${index + 1}. Tên: ${sV.ten} Tuổi: ${sV.tuoi} Điểm: ${sV.diem}`
    );
  });
}

function timKiemSV() {
  var tenSV = prompt("Nhập tên cần tìm kiếm: ");
  var kQ = listSV.filter((sv) => sv.ten);

  if (kQ.length === 0) {
    console.log("SV không tồn tại");
    return;
  }
  console.log("Kết quả");
  kQ.forEach(function (sV, index) {
    console.log(
      `${index + 1}. Tên: ${sV.ten} Tuổi: ${sV.tuoi} Điểm: ${sV.diem}`
    );
  });
}

function tinhDiemTB() {
  if (listSV.length === 0) {
    console.log("Danh sách trống");
    return;
  }
  var tongDiem = listSV.reduce((tong, sv) => tong + sv.diem, 0);
  var diemTB = tongDiem / listSV.length;
  console.log(`Điểm TB: ${diemTB}`);
}

function menu() {
  while (true) {
    var luaChon = prompt(`
            Quản lý Sinh Viên
            1. Thêm sinh viên
            2. Hiển danh sách
            3. Tìm kiếm sinh viên
            4. Tính điểm trung bình
            5. Thoát
            Chọn chức năng(1-5)
        `);
    switch (luaChon) {
      case "1":
        themSV();
        break;
      case "2":
        hienThiDSSV();
        break;
      case "3":
        timKiemSV();
        break;
      case "4":
        tinhDiemTB();
        break;
      case "5":
        console.log("Thoát");
        return;
      default:
        console.log("Lựa chon không hợp lệ");
    }
  }
}

menu();
