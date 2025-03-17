const mH = [
  "Baby Cải bẹ xanh 300g",
  "Baby Cải ngọt 300g",
  "Baby Cải Thìa 300g",
  "Baby Mồng Tơi 300g",
  "Baby Rau dền 300g",
  "Baby Rau muống 300g",
  "Bánh Phở",
  "Bắp cải trái tim",
  "Bắp cải trắng",
  "Bắp chuối bào",
  "Bắp mỹ",
  "Bắp mỹ Cặp",
  "Bắp mỹ Trái",
  "Bắp mỹ Trái quấn màng",
  "Bắp nếp Cặp",
  "Bắp non 200g",
  "Bí đỏ Mỹ",
  "Bí hạt đậu",
  "Bí hồ lô quấn màng Trái",
  "Bí ngòi xanh",
  "Bí nụ",
  "Bí nụ 200g",
  "Bông cải trắng",
  "Bông cải xanh",
  "Bông cải xanh 300g",
  "Bông cải xanh Baby",
  "Bông thiên lý 200g",
  "Cà chua",
  "Cà chua beef loại 1",
  "Cà chua beef loại 1 400g",
  "Cà chua beef loại 1 500g",
  "Cà chua trứng thủy canh 500g",
  "Cải bẹ xanh",
  "Cải ngọt",
  "Cải Thảo",
  "Cải Thảo 400g",
  "Cần tàu",
  "Cần tây",
  "Chanh giấy",
  "Chanh giấy 500g",
  "Chanh không hạt",
  "Chanh Quảng Đông",
  "Chè xanh 200g",
  "Chuối xanh",
  "Combo Cà rốt baby + Bắp non 300g",
  "Củ Cà rốt",
  "Củ Cà rốt Baby",
  "Củ Cà rốt Baby 250g",
  "Củ cải trắng",
  "Củ cải trắng HQ",
  "Củ gừng",
  "Củ gừng 100g",
  "Củ gừng gọt vỏ",
  "Củ gừng TQ",
  "Củ Hành tây",
  "Củ Hành tây lột vỏ",
  "Củ hành tím lột",
  "Củ Khoai mỡ",
  "Củ Khoai tây 500g",
  "Củ khoai từ",
  "Củ riềng",
  "Đậu bắp",
  "Đậu bắp 200g",
  "Đậu cove",
  "Đậu cove 300g",
  "Dâu Đà Lạt L",
  "Dâu Đà Lạt N",
  "Diếp cá",
  "Diếp cá 50g",
  "Đu đủ vàng ACon",
  "Đu đủ vàng Acon - Trái",
  "Dưa cải chua nguyên cây",
  "Dưa hấu",
  "Dưa leo",
  "Dưa leo 300g",
  "Dưa leo Baby 300g",
  "Dưa leo Baby 500g",
  "Giá đậu nành 150g",
  "Giá đậu xanh TC - N",
  "Giá đậu xanh TC 1kg - L",
  "Giá đậu xanh TC 1Kg - L - 3111534",
  "Giá đậu xanh TC 1kg - N",
  "Giá đậu xanh TC 200g - N",
  "Giá đậu xanh TC 2kg - BX",
  "Giá đậu xanh TC 2kg - L",
  "Giá đậu xanh TC 300g - L",
  "Giá đậu xanh TC 300g - N",
  "Giá đậu xanh TC 3kg - BX",
  "Giá đậu xanh TC 3kg - L",
  "Giá đậu xanh TC 3kg - N",
  "Giá đậu xanh TC 4kg - L",
  "Giá đậu xanh TC 500g - L",
  "Giá đậu xanh TC 5kg - BX",
  "Giá đậu xanh TC 5kg - L",
  "Giá đậu xanh TC 5kg - N",
  "Hành lá",
  "Hành lá 100g",
  "Hành lá Đà Lạt",
  "Hành tím khô",
  "Húng cay",
  "Húng cay 50g",
  "Húng lủi",
  "Húng quế",
  "Húng quế 50g",
  "Hương thảo 50g",
  "Khổ qua",
  "Khổ qua đóng vỉ 500g",
  "Khổ qua rừng 300g",
  "Khoai lang",
  "Kinh giới",
  "Lá chanh",
  "Lá dứa",
  "Lá giang",
  "Lá gừng",
  "Lá hẹ",
  "Lá lốt",
  "Lá ổi",
  "Me cục",
  "Me cục 65g",
  "Mía lau",
  "Mồng tơi",
  "Mướp hương",
  "Mướp hương 250g",
  "Muop huong GG 250g",
  "Nấm rơm",
  "Ngò gai",
  "Ngò rí",
  "Ngò rí 50g",
  "Ớt chuông baby 300g",
  "Ớt chuông đỏ",
  "Ớt chuông vàng",
  "Ớt chuông xanh",
  "Ớt hiểm",
  "Ớt hiểm 100g",
  "Ớt Palermo 300g",
  "Ớt sừng",
  "Ớt sừng xanh",
  "Quả Bí đỏ",
  "Quả Tắc",
  "Quả Tắc 500g",
  "Râu bắp",
  "Rau đay 200g",
  "Rau dền",
  "Rau dền cơm 300g",
  "Rau lủi rừng 250g",
  "Rau muống hạt",
  "Rau muống nước",
  "Rau nêm hỗn hợp 80g",
  "Rau ngót",
  "Rau ngót 200g",
  "Rau ôm",
  "Rau răm",
  "Rau rừng 300g",
  "Rau thơm hỗn hợp 200g",
  "Rễ tranh",
  "Sả cây",
  "Sả cây 100g",
  "Sả cây 200g",
  "Sả cây 500g",
  "Sả xay",
  "Táo Hồng Phan Rang Loại 1 500g",
  "Thì Là",
  "Thủy canh Cải bẹ dún 300g",
  "Thủy canh Cải bẹ xanh 300g",
  "Thủy canh Cải ngọt 300g",
  "Thủy canh Cải Thìa 300g",
  "Thủy canh Dưa leo",
  "Thủy canh Xà lách Iceberg",
  "Thủy canh Xà lách Iceberg - Cây",
  "Thủy canh Xà lách Iceberg Tím - Cây",
  "Thủy canh Xà lách Lô lô xanh",
  "Tía tô",
  "Tía tô 50g",
  "Tỏi lột",
  "Tỏi tây",
  "Trái bầu",
  "Trái bầu 400g",
  "Trái bí đao",
  "Trái bí đao 400g",
  "Xà lách Lô Lô xanh",
  "Xà lách Romaine thủy canh",
  "Xoài keo xanh",
];

const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  suggestions.innerHTML = "";
  if (query) {
    const filteredItems = mH.filter((item) =>
      item.toLowerCase().includes(query)
    );
    if (filteredItems.length > 0) {
      suggestions.style.display = "block";
      filteredItems.forEach((item) => {
        const div = document.createElement("div");
        div.className = "suggestion-item";
        div.textContent = item;
        div.addEventListener("click", () => {
          searchInput.value = item;
          suggestions.innerHTML = "";
          suggestions.style.display = "none";
        });
        suggestions.appendChild(div);
      });
    } else {
      suggestions.style.display = "none";
    }
  } else {
    suggestions.style.display = "none";
  }
});

const change = document.getElementById("changeEvent");

function showItem(x) {
  n1 = document.getElementById("anNhaCungCap");
  n2 = document.getElementById("anXuatDongGoi");
  n3 = document.getElementById("anXuatThanhPham");
  n4 = document.getElementById("anXuatXaBan");
  n5 = document.getElementById("anXuatHuy");

  if (x === 1) {
    n1.style.display = "block";
    n2.style.display = "none";
    n3.style.display = "none";
    n4.style.display = "none";
    n5.style.display = "none";
    event.stopPropagation();
  } else if (x === 2) {
    n1.style.display = "none";
    n2.style.display = "block";
    n3.style.display = "none";
    n4.style.display = "none";
    n5.style.display = "none";
    event.stopPropagation();
  } else if (x === 3) {
    n1.style.display = "none";
    n2.style.display = "none";
    n3.style.display = "block";
    n4.style.display = "none";
    n5.style.display = "none";
    event.stopPropagation();
  } else if (x === 4) {
    n1.style.display = "none";
    n2.style.display = "none";
    n3.style.display = "none";
    n4.style.display = "block";
    n5.style.display = "none";
    event.stopPropagation();
  } else if (x === 5) {
    n1.style.display = "none";
    n2.style.display = "none";
    n3.style.display = "none";
    n4.style.display = "none";
    n5.style.display = "block";
    event.stopPropagation();
  }
}

function showChosen() {
  if (document.getElementById("abc").style.display === "none") {
    document.getElementById("abc").style.display = "block";
    document.getElementById("abc1").style.display = "block";
    document.getElementById("abc2").style.display = "block";
    document.getElementById("abc3").style.display = "block";
    document.getElementById("abc4").style.display = "block";
  } else {
    document.getElementById("abc").style.display = "none";
    document.getElementById("abc1").style.display = "none";
    document.getElementById("abc2").style.display = "none";
    document.getElementById("abc3").style.display = "none";
    document.getElementById("abc4").style.display = "none";
  }
}

async function updateData() {
  const date = await document.getElementById("date").value;

  const maHang = await document.getElementById("searchInput").value;

  const nhaCungCap = await document.getElementById("nhaCungCap").value;

  const xuatDongGoi = await document.getElementById("xuatDongGoi").value;
  const xuatThanhPham = await document.getElementById("xuatThanhPham").value;
  const xuatXaBan = await document.getElementById("xuatXaBan").value;
  const xuatHuy = await document.getElementById("xuatHuy").value;
  const giaNhap = await document.getElementById("giaNhap").value;
  const giaBan = await document.getElementById("giaBan").value;
  const ghiChu = await document.getElementById("ghiChu").value;

  if (date === "") {
    alert("Lỗi: Vui lòng chọn ngày!");
    return;
  }
  if (maHang === "") {
    alert("Lỗi: Vui lòng chọn mã hàng!");
    return;
  }

  var data = {
    ngay: date,
    maHang: maHang,
    nhaCungCap: nhaCungCap,
    xuatDongGoi: xuatDongGoi,
    xuatThanhPham: xuatThanhPham,
    xuatXaBan: xuatXaBan,
    xuatHuy: xuatHuy,
    giaNhap: giaNhap,
    giaBan: giaBan,
    ghiChu: ghiChu,
  };

  console.log(data);
  var url =
    "https://script.google.com/macros/s/AKfycbxAmRA0ODs4Ft-MPnl85Sxxt0D0mtg0a--NqXSTOokhXFQ5euwJd9Efg9k-A9c81RLE/exec";
  fetch(url, {
    method: "POST",
    mode: "no-cors", // Bỏ CORS
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(() => alert("Dữ liệu đã được thêm vào Google Sheets!"))
    .catch(() => alert("Lỗi khi gửi dữ liệu!"));
}
