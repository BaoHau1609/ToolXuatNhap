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
  "Giá đậu nành",
  "Giá đậu xanh TC 100g - N",
  "Giá đậu xanh TC 150g",
  "Giá đậu xanh TC 200g - L",
  "Giá đậu xanh TC 250g - L",
  "Giá đậu xanh TC 250g - N",
  "Giá đậu xanh TC 400g - L",
  "Giá đậu xanh TC 400g - N",
  "Giá đậu xanh TC 500g - N",
  "Giá đậu xanh TC 1kg - BX",
  "Giá đậu xanh TC 2kg - N",
  "Giá đậu xanh TC Lu - N",
  "Baby Cải ngồng 300g",
  "Baby Cải ngọt 500g",
  "Baby Rau dền 500g",
  "Baby Rau muống hạt",
  "Baby Rau muống hạt 300g",
  "Bạc Hà (Mint)",
  "Bắp cải Đà Lạt (1.5-2kg)",
  "Bắp cải tím",
  "Bắp cải tím (1-1.5kg)",
  "Bắp cải trái tim (500g+/-)",
  "Bắp cải trắng quấn màng",
  "Bắp chuối trái",
  "Bắp chuối trái - trái",
  "Bắp mỹ Trái không quấn màng",
  "Bắp nếp Trái",
  "Bắp non",
  "Bắp sú tím",
  "Bắp tím Trái",
  "Bí đỏ Nhật",
  "Bí hồ lô",
  "Bí ngòi vàng",
  "Bí nụ 300g",
  "Bí sợi mì",
  "Bó xôi",
  "Bông Atiso tươi",
  "Bông bí",
  "Bông bí 300g",
  "Bông cải trắng TQ",
  "Bông cải xanh 500g",
  "Bông cải xanh Baby 300g",
  "Bông cải xanh Baby 500g",
  "Bông cải xanh hữu cơ",
  "Bông cải xanh hữu cơ (500g+/-)",
  "Bông cải xanh TQ",
  "Bông điên điển",
  "Bông điên điển 200g",
  "Bông hẹ",
  "Bông sen nguyên cái",
  "Bông súng",
  "Bông súng 300g",
  "Bông thiên lý",
  "Cà cherry cam sữa",
  "Cà cherry cam sữa 100g",
  "Cà cherry cam sữa 500g",
  "Cà cherry đỏ",
  "Cà cherry đỏ 500g",
  "Cà cherry ngọc bích",
  "Cà cherry ngọc bích 500g",
  "Cà cherry vàng",
  "Cà cherry vàng 500g",
  "Cà chua beef loại 2",
  "Cà chua beef loại 2 400g",
  "Cà chua bi",
  "Cà chua socola",
  "Cà chua socola 100g",
  "Cà chua socola 500g",
  "Cà chua trứng thủy canh",
  "Cà chùm chuỗi ngọc",
  "Cà chùm chuỗi ngọc 250g",
  "Cà chùm chuỗi ngọc 500g",
  "Cà dĩa sọc xanh",
  "Cà pháo",
  "Cà tím dài",
  "Thủy canh Cải bẹ dún",
  "Cải bẹ trắng",
  "Cải bẹ xanh L",
  "Cải con",
  "Cải con 200g",
  "Cải mầm",
  "Cải ngồng",
  "Cải ngọt L",
  "Cải rổ (Cải làn)",
  "Cải Thảo quấn màng",
  "Cải Thìa",
  "Cải thìa L",
  "Cải trời",
  "Chanh Đà Lạt",
  "Chanh đào",
  "Chanh leo hương ổi",
  "Chanh leo hương ổi 500g",
  "Chanh vàng",
  "Chè xanh",
  "Chuối chát",
  "Củ Cà rốt 500g",
  "Củ Cà rốt Baby 200g",
  "Củ Cà rốt Baby 500g",
  "Củ Cà rốt Đà Lạt",
  "Củ cải muối",
  "Củ cải muối (Sợi)",
  "Củ cải trắng 500g",
  "Củ dền",
  "Củ dền 500g",
  "Củ gừng 200g",
  "Củ gừng nguyên lá",
  "Củ gừng VN",
  "Củ Hành tây nguyên cây",
  "Củ Hành tây nguyên cây 150g",
  "Củ Hành Tây Tím Đà Lạt",
  "Củ Hành tím",
  "Củ Hành tím 500g",
  "Củ hũ dừa",
  "Củ Khoai tây",
  "Củ kiệu",
  "Củ kiệu làm sạch",
  "Củ kiệu làm sạch 500g",
  "Củ năng lột vỏ",
  "Củ nén",
  "Củ nghệ tươi",
  "Củ riềng xay",
  "Củ sắn",
  "Củ sen tươi",
  "Củ Su hào",
  "Củ Tỏi",
  "Củ Tỏi  500g",
  "Đậu bắp 250g",
  "Đậu bắp 300g",
  "Đậu cove Nhật",
  "Đậu đũa",
  "Đậu Hà Lan (Nguyên trái) 200g",
  "Đậu nành Nhật nguyên trái",
  "Đậu rồng",
  "Đậu rồng 200g",
  "Đậu rồng 300g",
  "Đậu ván nguyên trái",
  "Diếp cá 100g",
  "Đọt bí",
  "Đu đủ vàng Baby ACon",
  "Đu đủ xanh",
  "Đu đủ xanh bào",
  "Dưa leo Baby",
  "Dưa leo baby 150g",
  "Dưa leo Baby 250g",
  "Dưa leo nếp Nga",
  "Dưa leo Nhật",
  "Dưa leo Nhật 500g",
  "Dừa Trái",
  "Dừa trọc Trái",
  "Hành lá 300g",
  "Hành lá 50g",
  "Hành lá lột sạch",
  "Hành ngò 50g",
  "Hành ngò hỗn hợp 100g",
  "Hành Paro",
  "Hành Paro không lá",
  "Hành phi không bột",
  "Hành tím 100g",
  "Hành Tím Lý Sơn",
  "Hành Tím Lý Sơn 500g",
  "Hành Tím Phan Rang 500g",
  "Hành tím Vĩnh Châu",
  "Hành tím Vĩnh Châu 100g",
  "Hành tím Vĩnh Châu 200g",
  "Hành tím Vĩnh Châu 500g",
  "Hành tím xay",
  "Hạt đậu Hà Lan tách vỏ",
  "Hạt đậu nành Nhật",
  "Hạt sen tươi còn vỏ",
  "Hạt sen tươi lột vỏ",
  "Hẹ lá 100g",
  "Hẹ lá 50g",
  "Hỗn hợp Ngò Ôm + Ngò Gai 100g",
  "Hỗn hợp Ngò Ôm + Ngò Gai 50g",
  "Húng cay 100g",
  "Húng lủi 100g",
  "Húng quế 100g",
  "Hương thảo",
  "Kèo nèo",
  "Khế chua",
  "Khổ qua đèo",
  "Khổ qua rừng",
  "Khổ qua trái vỉ 400g",
  "Khoai lang mật",
  "Khoai lang Nhật",
  "Khoai lang Nhật 500g",
  "Khoai lang tím",
  "Khoai mì",
  "Khoai môn sáp vàng",
  "Khoai môn tím",
  "Khoai sọ",
  "Lá bồ công",
  "Lá chuối",
  "Lá cóc non",
  "Lá é",
  "Lá giang 100g",
  "Lá giang 200g",
  "Lá Quế Tây",
  "Lá sen nguyên lá",
  "Lá tàu hủ ky tươi",
  "Măng chua",
  "Măng khô",
  "Măng tây tươi",
  "Măng vàng",
  "Mì Quảng",
  "Mía xanh",
  "Môn Bạc Hà (Dọc mùng)",
  "Môn Bạc Hà (Dọc mùng) 250g",
  "Mướp hương 500g",
  "Nấm đùi gà Baby HQ 300g",
  "Ngò gai 50g",
  "Ngò rí 300g",
  "Ngó sen tươi (cắt khúc 5-7cm)",
  "Ngò tây",
  "Ngò Tây 50g",
  "Ớt chuông baby",
  "Ớt chuông baby 250g",
  "Ớt chuông baby 350g",
  "Ớt chuông Baby Snack",
  "Ớt chuông Baby Snack 300g",
  "Ớt chuông Đà Lạt",
  "Ớt chuông Đà Lạt 140g",
  "Ớt chuông Đà Lạt 300g",
  "Ớt chuông đỏ Trái",
  "Ớt chuông màu",
  "Ớt chuông vàng Trái",
  "Ớt chuông xanh Trái",
  "Ớt hiểm 10g",
  "Ớt hiểm 20g",
  "Ớt hiểm 50g",
  "Ớt Palermo",
  "Ớt Palermo 250g",
  "Ớt sừng 100g",
  "Ớt xay",
  "Ớt xiêm xanh",
  "Ớt xiêm xanh 100g",
  "Quả Bí đỏ tròn",
  "Quả bí non",
  "Quả Bơ",
  "Quả Khế chua 300g",
  "Quả Su su",
  "Quả Su su 500g",
  "Quả tắc 100g",
  "Quả Tắc 300g",
  "Quả thơm còn vỏ",
  "Quả thơm còn vỏ Loại 1",
  "Quả thơm gọt vỏ - Trái",
  "Rau Bó Xôi 300g",
  "Rau cải mầm 200g",
  "Rau cần nước",
  "Rau càng cua",
  "Rau đắng",
  "Rau đắng 300g",
  "Rau đay",
  "Rau diếp xoăn Radicchio",
  "Rau lang",
  "Rau lang 300g",
  "Rau lủi rừng",
  "Rau má",
  "Rau má 200g",
  "Rau muống bào",
  "Rau muống tuốt lá",
  "Rau ngót 300g",
  "Rau nhút",
  "Rau nhút làm sạch",
  "Rau răm 50g",
  "Rau rừng",
  "Rau Tần ô",
  "Rau tần ô Đà Lạt cắt gốc",
  "Rau thơm hỗn hợp",
  "Rau thơm hỗn hợp 100g",
  "Rau thơm hỗn hợp 150g",
  "Rau thơm hỗn hợp 300g",
  "Rau Tiến Vua khô",
  "Sả bào",
  "Sả bào 50g",
  "Sả cây 300g",
  "Sầu riêng",
  "Su su (250-300g)",
  "Thủy canh Bó Xôi",
  "Thủy canh Bó Xôi 300g",
  "Thủy canh Cải bẹ xanh",
  "Thủy canh Cải ngồng",
  "Thủy canh Cải ngồng 300g",
  "Thủy canh Cải ngọt",
  "Thủy canh Cải rổ",
  "Thủy canh Cải rổ 300g",
  "Thủy canh Cải Thìa",
  "Thủy canh Dưa leo 500g",
  "Thủy canh Rau dền",
  "Thủy canh Rau dền 300g",
  "Thủy canh Rau tần ô 300g",
  "Thủy canh Tần ô",
  "Thủy canh Xà lách Iceberg Tím",
  "Thủy canh Xà lách Lô Lô Tím",
  "Thủy canh Xà lách Lô lô xanh 250g",
  "Thủy canh Xà lách Lô lô xanh 300g",
  "Thủy canh Xà lách mỡ",
  "Tiêu đen xay 50g",
  "Tiêu sọ vàng xay 50g",
  "Tiêu xanh",
  "Tỏi 100g",
  "Tỏi cô đơn 500g",
  "Tỏi Hải Dương",
  "Tỏi Hải Dương 100g",
  "Tỏi Hải Dương 300g",
  "Tỏi Hải Dương 500g",
  "Tỏi Lý Sơn",
  "Tỏi Lý Sơn 500g",
  "Tỏi Lý Sơn chùm 500g",
  "Tỏi Phan Rang",
  "Tỏi tép lớn",
  "Tỏi tép thơm 300g",
  "Tỏi TQ 250g",
  "Tỏi xay",
  "Trái sung tươi",
  "Trái vả",
  "Xạ Hương",
  "Xá lách Lô lô tím",
  "Xà lách Lô Lô xanh 200g",
  "Xà lách Lô Lô xanh 300g",
  "Xà lách rocket (Arugula)",
  "Xà lách Romaine 200g",
  "Xà lách Romaine 300g",
  "Xà lách ta",
  "Xà lách xoong",
  "Bơ boot",
  "Bưởi 5 roi",
  "Bưởi da xanh có cành",
  "Bưởi da xanh không cành",
  "Cà na",
  "Cam vàng Mỹ",
  "Cam vàng TQ",
  "Chanh dây",
  "Chuối cau",
  "Chuối già Nam Mỹ Loại 1",
  "Chuối sứ",
  "Cóc Thái",
  "Cơm Sầu Riêng R16 đóng hộp",
  "Dâu Đà Lạt N 500g",
  "Dâu Tây 250g",
  "Đu đủ ruột đỏ",
  "Đu đủ vàng",
  "Dưa gang",
  "Dưa hấu hắc mỹ nhân",
  "Dưa hấu không hạt",
  "Dưa hấu vàng",
  "Dưa lưới Bạch Ngọc",
  "Dưa lưới Đại Thiên Thanh",
  "Dưa lưới Inthanon",
  "Dưa lưới ruột cam",
  "Dưa lưới vàng Loại 1",
  "Dưa lưới vàng Loại 2",
  "Dưa lưới vàng Loại 3",
  "Dưa lưới xanh TL3  Loại 1",
  "Dưa lưới xanh TL3  Loại 2",
  "Dưa lưới xanh TL3  Loại 3",
  "Dưa lưới xanh TL3 Khắc chữ - Cặp",
  "Lê đường tươi",
  "Lê ruột trằng vỏ vàng",
  "Mận An Phước",
  "Mận đỏ",
  "Mận hồng đào",
  "Mít chín",
  "Nho đen",
  "Nho hồng giống Nhật",
  "Nho Mỹ đen không hạt",
  "Nho xanh",
  "Quýt đường",
  "Quýt Thái",
  "Táo đỏ nhập khẩu",
  "Táo Hồng Phan Rang Loại 1",
  "Táo Hồng Phan Rang Loại 2",
  "Táo Hồng Phan Rang Loại 2 500g",
  "Táo Hồng Phan Rang Loại 3",
  "Táo Hồng Phan Rang Loại 3 500g",
  "Táo Hồng Phan Rang Loại xô",
  "Táo mèo tươi",
  "Táo sấy dẻo",
  "Táo xanh Newzealand",
  "Thanh long",
  "Thanh Long (+/-500g/trái)",
  "Thanh long ruột đỏ",
  "Trái cam",
  "Trái cóc",
  "Trái ổi",
  "Trái ổi Đài Loan",
  "Trái ổi nữ hoàng",
  "Trái ổi trân châu ruột đỏ",
  "Trái táo bom",
  "Xoài cát chu chín",
  "Xoài cát chu sống",
  "Xoài cát chu vàng",
  "Xoài cát hòa lộc chín",
  "Xoài cát hòa lộc sống",
  "Xoài Đài Loan",
  "Xoài keo chín",
  "Xoài non",
  "Xoài tứ quý chín",
  "Xoài tứ quý sống",
  "Xoài tượng chín",
  "Xoài tượng sống",
  "Cà na ngâm chua ngọt 300g",
  "Cóc ngâm chua ngọt 350g",
  "Dưa chua thập cẩm 350g",
  "Dưa giá thập cẩm 450g",
  "Sung ngâm chua ngọt 350g",
  "Xoài ngâm chua ngọt 350g",
  "Bánh Canh Bột Gạo tròn",
  "Bánh Canh Bột Gạo vuông",
  "Bánh Canh Bột Lọc",
  "Bánh Hỏi",
  "Bánh Ướt",
  "Bún Bò Huế",
  "Bún cọng nhuyễn",
  "Bún cọng vừa",
  "Bún tàu",
  "Đậu đen xanh lòng",
  "Đậu hủ chiên miếng",
  "Đậu hủ non Nhật - cây",
  "Đậu hủ trắng non miếng",
  "Đậu hủ trứng 140g",
  "Đậu phộng",
  "Đậu xanh còn vỏ",
  "Hủ tiếu dai",
  "Hủ Tiếu Khô",
  "Hủ tiếu mềm cọng to",
  "Hủ Tiếu Xào/ Phở Xào",
  "Mì gói",
  "Mì vàng",
  "Nấm bạch tuyết",
  "Nấm bạch tuyết 150g",
  "Nấm bào ngư trắng",
  "Nấm bào ngư trắng 200g",
  "Nấm bào ngư Xám",
  "Nấm bào ngư Xám 200g",
  "Nấm Đông Cô Khô",
  "Nấm đông cô tươi",
  "Nấm đông cô tươi 150g",
  "Nấm đông cô tươi 175g",
  "Nấm đông cô tươi 200g",
  "Nấm đùi gà loại 1",
  "Nấm đùi gà loại 1 HQ Lớn 200g",
  "Nấm đùi gà loại 1 TQ",
  "Nấm đùi gà loại 2",
  "Nấm hương khô Loại 1",
  "Nấm hương khô Loại 2",
  "Nấm hương tươi",
  "Nấm kim châm",
  "Nấm kim châm 150g",
  "Nấm kim châm HQ 150g",
  "Nấm kim châm TQ",
  "Nấm kim châm TQ 150g",
  "Nấm linh chi nâu HQ 150g",
  "Nấm linh chi nâu TQ 150g",
  "Nấm linh chi nâu VN 150g",
  "Nấm linh chi trắng 150g",
  "Nấm linh chi trắng HQ 150g",
  "Nấm linh chi trắng TQ 150g",
  "Nấm mèo đen",
  "Nấm mèo sợi",
  "Nấm mỡ",
  "Nấm mối",
  "Nấm Nút 500g",
  "Nấm Tuyết Trắng Khô",
  "Nguyên liệu nước mát",
  "Nguyên liệu nước mát 500g",
  "Nộm sứa 420g",
  "Nước cốt dừa",
  "Nước cốt dừa lít",
  "Nước cốt dừa Wonderfarm 400ml",
  "Tương đen (1 can 4.35kg)",
  "Bắp chuối Trái đỏ",
  "Lá mơ",
  "Củ cải đỏ",
  "Xà lách Carol",
  "Cóc non",
  "Bí hạt dẻ",
  "Quả Thơm trái",
  "Cải bẹ dún",
  "Xà lách Mỹ",
  "Bắp mỹ Trái chưa sơ chế",
  "Nấm đùi gà loại 1 VN Lớn 200g",
  "Nho Mỹ xanh không hạt",
  "Cóc non gọt vỏ",
  "Xoài non gọt vỏ",
  "Sung ngâm chua ngọt",
  "Bơ Tường An 800g",
  "Chanh không hạt 300g",
  "Xà lách mỡ",
  "Khổ qua đóng vỉ 330g",
  "Ớt Batri",
  "Cải sậy (cải bẹ dưa)",
  "Khoai tây hồng",
  "Dưa lưới Huỳnh Long",
  "Mãng cầu Xiêm",
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

// const change = document.getElementById("changeEvent");

const position = [
  "RA : 1 - 2",
  "RA : 1 - 3",
  "RA : 1 - 4",
  "RA : 1 - 5",
  "RA : 1 - 6",
  "RA : 2 - 1",
  "RA : 2 - 2",
  "RA : 2 - 3",
  "RA : 2 - 4",
  "RA : 2 - 5",
  "RA : 2 - 6",
  "RA : 3 - 1",
  "RA : 3 - 2",
  "RA : 3 - 3",
  "RA : 3 - 4",
  "RA : 3 - 5",
  "RA : 3 - 6",
  "RA : 4 - 1",
  "RA : 4 - 2",
  "RA : 4 - 3",
  "RA : 4 - 4",
  "RA : 4 - 5",
  "RA : 4 - 6",
  "RB : 1 -  1",
  "RB : 1 -  2",
  "RB : 1 -  3",
  "RB : 1 -  4",
  "RB : 1 -  5",
  "RB : 1 -  6",
  "RB : 2 -  1",
  "RB : 2 -  2",
  "RB : 2 -  3",
  "RB : 2 -  4",
  "RB : 2 -  5",
  "RB : 2 -  6",
  "RB : 3 -  1",
  "RB : 3 -  2",
  "RB : 3 -  3",
  "RB : 3 -  4",
  "RB : 3 -  5",
  "RB : 3 -  6",
  "RB : 4 -  1",
  "RB : 4 -  2",
  "RB : 4 -  3",
  "RB : 4 -  4",
  "RB : 4 -  5",
  "RB : 4 -  6",
  "RC : 1 - 1",
  "RC : 1 - 2",
  "RC : 1 - 3",
  "RC : 1 - 4",
  "RC : 1 - 5",
  "RC : 1 - 6",
  "RC : 2 - 1",
  "RC : 2 - 2",
  "RC : 2 - 3",
  "RC : 2 - 4",
  "RC : 2 - 5",
  "RC : 2 - 6",
  "RC : 3 - 1",
  "RC : 3 - 2",
  "RC : 3 - 3",
  "RC : 3 - 4",
  "RC : 3 - 5",
  "RC : 3 - 6",
  "RC : 4 - 1",
  "RC : 4 - 2",
  "RC : 4 - 3",
  "RC : 4 - 4",
  "RC : 4 - 5",
  "RC : 4 - 6",
  "PLA : 1 - 6",
  "PLA : 2 - 6",
  "PLA : 3 - 6",
  "PLA : 4 - 6",
  "PLA : 5 - 6",
  "PLA : 6 - 6",
  "PLB : 1 - 5",
  "PLB : 2 - 5",
  "PLB : 3 - 5",
  "PLB : 4 - 5",
  "PLB : 4- 5",
  "PLC : 1 - 6",
  "PLC : 2 - 6",
  "PLC : 3 - 6",
  "PLC : 4 - 6",
  "PLC : 5 - 6",
  "PLC : 6 - 6",
  "TLN",
  "TLL",
  "PLD: 1-4",
  "PLD: 2-4",
  "PLD: 3-4",
  "PLD: 4-4",
  "PLD: 5-5",
  "PLE: 1-1",
  "PLE: 1-2",
  "PLE: 1-3",
  "PLE: 1-4",
  "PLF: 1-1",
  "PLF: 1-2",
  "PLF: 1-3",
  "KVB",
  "KVN",
  "KVHL",
  "pl-1ao",
];

const searchInput1 = document.getElementById("searchInput1");
const suggestions1 = document.getElementById("suggestions1");

searchInput1.addEventListener("input", () => {
  const query = searchInput1.value.toLowerCase();
  suggestions1.innerHTML = "";
  if (query) {
    const filteredItems = position.filter((item) =>
      item.toLowerCase().includes(query)
    );
    if (filteredItems.length > 0) {
      suggestions1.style.display = "block";
      filteredItems.forEach((item) => {
        const div = document.createElement("div");
        div.className = "suggestion-item1";
        div.textContent = item;
        div.addEventListener("click", () => {
          searchInput1.value = item;
          suggestions1.innerHTML = "";
          suggestions1.style.display = "none";
        });
        suggestions1.appendChild(div);
      });
    } else {
      suggestions1.style.display = "none";
    }
  } else {
    suggestions1.style.display = "none";
  }
});

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

  const viTri = await document.getElementById("searchInput1").value;
  console.log(viTri);

  const nhaCungCap = await document.getElementById("nhaCungCap").value;

  const xuatDongGoi = await document.getElementById("xuatDongGoi").value;
  const xuatThanhPham = await document.getElementById("xuatThanhPham").value;
  const xuatXaBan = await document.getElementById("xuatXaBan").value;
  const xuatHuy = await document.getElementById("xuatHuy").value;
  // const giaNhap = await document.getElementById("giaNhap").value;
  // const giaBan = await document.getElementById("giaBan").value;
  const ghiChu = await document.getElementById("ghiChu").value;
  const userName = await document.getElementById("username").value;

  if (date === "") {
    alert("Lỗi: Vui lòng chọn ngày!");
    return;
  }
  if (maHang === "") {
    alert("Lỗi: Vui lòng chọn mã hàng!");
    return;
  }
  if (viTri === "") {
    alert("Lỗi: Vui lòng chọn vị trí!");
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
    viTri: viTri,
    // giaNhap: giaNhap,
    // giaBan: giaBan,
    ghiChu: ghiChu,
    userName: userName,
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
    .then(() => {
      alert("Dữ liệu đã được thêm vào Google Sheets!");
      // window.location.reload();
      document.getElementById("date").value = "";

      document.getElementById("searchInput").value = "";

      document.getElementById("searchInput1").value = "";

      document.getElementById("nhaCungCap").value = "";

      document.getElementById("xuatDongGoi").value = "";
      document.getElementById("xuatThanhPham").value = "";
      document.getElementById("xuatXaBan").value = "";
      document.getElementById("xuatHuy").value = "";
      // document.getElementById("giaNhap").value;
      // document.getElementById("giaBan").value;
      document.getElementById("ghiChu").value = "";
    })
    .catch(() => alert("Lỗi khi gửi dữ liệu!"));
}

async function login() {
  const username = await document.getElementById("username").value;
  const password = await document.getElementById("password").value;
  console.log(username);
  if (
    (username === "kho.dkhanh" && password === "dkhanh123456") ||
    (username === "kho.bhuy" && password === "bhuy111111") ||
    (username === "kho.bhoang" && password === "bhoang111122") ||
    (username === "kho.cminh" && password === "cminh333666") ||
    (username === "kho.txuan" && password === "txuan999030")
  ) {
    alert("Đăng nhập thành công!");
    document.getElementById("section-login-off").style.display = "none";
    document.getElementById("loginButton1").style.display = "none";

    document.getElementById("section-login-on-1").style.display = "flex";
    document.getElementById("section-login-on-2").style.display = "flex";
    document.getElementById("updateButton").style.display = "flex";
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
}
