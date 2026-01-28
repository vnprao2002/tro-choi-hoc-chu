// Each word has: vietnamese text, image URL

import { VIETNAMESE_BASE_LETTERS, VIETNAMESE_ALPHABET_GROUPS } from "./vietnamese-alphabet"

export interface Word {
  text: string
  image: string
}

export const WORD_POOLS =
{
  "family": [
    { "text": "mẹ", "image": "/images/family/me.jpg" },
    { "text": "bố", "image": "/images/family/bo.jpg" },
    { "text": "anh trai", "image": "/images/family/anh.jpg" },
    { "text": "chị gái", "image": "/images/family/chi.jpg" },
    { "text": "em gái", "image": "/images/family/em-gai.jpg" },
    { "text": "em trai", "image": "/images/family/em-trai.jpg" },
    { "text": "em bé", "image": "/images/family/be.jpg" },
    { "text": "bà", "image": "/images/family/ba.jpg" },
    { "text": "ông", "image": "/images/family/ong.jpg" },
    { "text": "cô", "image": "/images/family/co.jpg" },
    { "text": "chú", "image": "/images/family/chu.jpg" },
    { "text": "dì", "image": "/images/family/di.jpg" },
    { "text": "gia đình", "image": "/images/family/gia-dinh.jpg" }
  ],

  "healthcare": [
    { "text": "bác sĩ", "image": "/images/healthcare/bac-si.jpg" },
    { "text": "bác sĩ nhi", "image": "/images/healthcare/bac-si-nhi.jpg" },
    { "text": "y tá", "image": "/images/healthcare/y-ta.jpg" },
    { "text": "bệnh viện", "image": "/images/healthcare/benh-vien.jpg" },
    { "text": "phòng khám", "image": "/images/healthcare/phong-kham.jpg" },
    { "text": "phòng cấp cứu", "image": "/images/healthcare/phong-cap-cuu.jpg" },
    { "text": "thuốc", "image": "/images/healthcare/thuoc.jpg" },
    { "text": "hộp thuốc", "image": "/images/healthcare/hop-thuoc.jpg" },
    { "text": "băng gạc", "image": "/images/healthcare/bang-gac.jpg" },
    { "text": "nhiệt kế", "image": "/images/healthcare/nhiet-ke.jpg" },
    { "text": "ống nghe", "image": "/images/healthcare/ong-nghe.jpg" },
    { "text": "mũ phẫu thuật", "image": "/images/healthcare/mu-phau-thuat.jpg" },
    { "text": "găng tay", "image": "/images/healthcare/gang-tay.jpg" },
    { "text": "tăm bông", "image": "/images/healthcare/tam-bong.jpg" },
    { "text": "khẩu trang", "image": "/images/healthcare/khau-trang.jpg" },
    { "text": "nước rửa tay", "image": "/images/healthcare/nuoc-rua-tay.jpg" },
    { "text": "giường bệnh", "image": "/images/healthcare/giuong-benh.jpg" },
    { "text": "xe cứu thương", "image": "/images/healthcare/xe-cuu-thuong.jpg" },
    { "text": "tiêm chủng", "image": "/images/healthcare/tiem-chung.jpg" }
  ],

  "school": [
    { "text": "cô giáo", "image": "/images/school/co-giao.jpg" },
    { "text": "thầy giáo", "image": "/images/school/thay-giao.jpg" },
    { "text": "học sinh", "image": "/images/school/hoc-sinh.jpg" },
    { "text": "balo", "image": "/images/school/balo.jpg" },
    { "text": "bút", "image": "/images/school/but.jpg" },
    { "text": "bút màu", "image": "/images/school/but-mau.jpg" },
    { "text": "bút chì", "image": "/images/school/but-chi.jpg" },
    { "text": "vở", "image": "/images/school/vo.jpg" },
    { "text": "sách", "image": "/images/school/sach.jpg" },
    { "text": "bảng", "image": "/images/school/bang.jpg" },
    { "text": "bảng đen", "image": "/images/school/bang-den.jpg" },
    { "text": "phấn", "image": "/images/school/phan.jpg" },
    { "text": "thư viện", "image": "/images/school/thu-vien.jpg" },
    { "text": "phòng học", "image": "/images/school/phong-hoc.jpg" },
    { "text": "giờ ra chơi", "image": "/images/school/gio-ra-choi.jpg" },
    { "text": "sân trường", "image": "/images/school/san-truong.jpg" },
    { "text": "đồ chơi lớp học", "image": "/images/school/do-choi-lop-hoc.jpg" },
    { "text": "máy chiếu", "image": "/images/school/may-chieu.jpg" },
    { "text": "máy tính", "image": "/images/school/may-tinh.png" },
    { "text": "bảng tên", "image": "/images/school/bang-ten.jpg" },
    { "text": "thước kẻ", "image": "/images/school/thuoc-ke.jpg" },
    { "text": "tẩy xóa", "image": "/images/school/tay-xoa.jpg" }
  ],

  "cooking": [
    { "text": "đầu bếp", "image": "/images/cooking/dau-bep.jpg" },
    { "text": "nồi", "image": "/images/cooking/noi.jpg" },
    { "text": "nồi cơm", "image": "/images/cooking/noi-com.jpg" },
    { "text": "chảo", "image": "/images/cooking/chao.jpg" },
    { "text": "dao", "image": "/images/cooking/dao.jpg" },
    { "text": "dĩa", "image": "/images/cooking/dia.jpg" },
    { "text": "muỗng", "image": "/images/cooking/muong.jpg" },
    { "text": "muôi", "image": "/images/cooking/muoi.jpg" },
    { "text": "nhà bếp", "image": "/images/cooking/bep.jpg" },
    { "text": "bếp gas", "image": "/images/cooking/bep-gas.jpg" },
    { "text": "bếp điện", "image": "/images/cooking/bep-dien.jpg" },
    { "text": "lò nướng", "image": "/images/cooking/lo-nuong.jpg" },
    { "text": "lò vi sóng", "image": "/images/cooking/lo-vi-song.jpg" },
    { "text": "bát", "image": "/images/cooking/bat.jpg" },
    { "text": "thớt", "image": "/images/cooking/thot.jpg" },
    { "text": "tủ lạnh", "image": "/images/cooking/tu-lanh.jpg" },
    { "text": "ly", "image": "/images/cooking/ly.jpg" },
    { "text": "bàn ăn", "image": "/images/cooking/ban-an.jpg" },
    { "text": "khăn lau", "image": "/images/cooking/khan-lau.jpg" },
    { "text": "rau", "image": "/images/cooking/rau.jpg" },
    { "text": "trái cây", "image": "/images/cooking/trai-cay.jpg" },
    { "text": "vòi nước", "image": "/images/cooking/nuoc.jpg" },
    { "text": "bột mì", "image": "/images/cooking/bot-mi.jpg" },
    { "text": "sách công thức", "image": "/images/cooking/cong-thuc.jpg" },
    { "text": "tạp dề", "image": "/images/cooking/tap-de.jpg" },
    { "text": "gia vị", "image": "/images/cooking/gia-vi.jpg" },
    { "text": "dầu ăn", "image": "/images/cooking/dau-an.jpg" },
    { "text": "nấu ăn", "image": "/images/cooking/nau-an.jpg" }
  ],

  "animals": [
    { "text": "chó", "image": "/images/animal/cho.jpg" },
    { "text": "mèo", "image": "/images/animal/meo.jpg" },
    { "text": "vịt", "image": "/images/animal/vit.jpg" },
    { "text": "vịt con", "image": "/images/animal/vit-con.jpg" },
    { "text": "gà", "image": "/images/animal/ga.jpg" },
    { "text": "bò", "image": "/images/animal/bo.jpg" },
    { "text": "lợn", "image": "/images/animal/lon.jpg" },
    { "text": "ngựa", "image": "/images/animal/ngua.jpg" },
    { "text": "thỏ", "image": "/images/animal/tho.jpg" },
    { "text": "cừu", "image": "/images/animal/cuu.jpg" },
    { "text": "voi", "image": "/images/animal/voi.jpg" },
    { "text": "khỉ", "image": "/images/animal/khi.jpg" },
    { "text": "rùa", "image": "/images/animal/rua.jpg" },
    { "text": "ếch", "image": "/images/animal/ech.jpg" },
    { "text": "chim", "image": "/images/animal/chim.jpg" },
    { "text": "cá", "image": "/images/animal/ca.jpg" }, { "text": "gấu", "image": "/images/animal/gau.jpg" },
    { "text": "hổ", "image": "/images/animal/ho.jpg" },
    { "text": "sư tử", "image": "/images/animal/su-tu.jpg" },
    { "text": "nai", "image": "/images/animal/nai.jpg" },
    { "text": "dê", "image": "/images/animal/de.jpg" },
    { "text": "chuột", "image": "/images/animal/chuot.jpg" },
    { "text": "cú mèo", "image": "/images/animal/cu-meo.jpg" },
    { "text": "chim cánh cụt", "image": "/images/animal/chim-canh-cut.jpg" },
    { "text": "cá heo", "image": "/images/animal/ca-heo.jpg" },
    { "text": "nhím", "image": "/images/animal/nhim.jpg" }
  ],

  "colors": [
    { "text": "màu đỏ", "image": "/images/colors/do.jpg" },
    { "text": "màu xanh lá", "image": "/images/colors/xanh-la.jpg" },
    { "text": "màu xanh dương", "image": "/images/colors/xanh-duong.jpg" },
    { "text": "màu vàng", "image": "/images/colors/vang.jpg" },
    { "text": "màu tím", "image": "/images/colors/tim.jpg" },
    { "text": "màu trắng", "image": "/images/colors/trang.jpg" },
    { "text": "màu đen", "image": "/images/colors/den.jpg" },
    { "text": "màu cam", "image": "/images/colors/cam.jpg" },
    { "text": "màu hồng", "image": "/images/colors/hong.jpg" },
    { "text": "màu nâu", "image": "/images/colors/nau.jpg" },
    { "text": "màu xám", "image": "/images/colors/xam.jpg" }
  ],

  "transport": [
    { "text": "ô tô", "image": "/images/transport/o-to.jpg" },
    { "text": "xe đạp", "image": "/images/transport/xe-dap.jpg" },
    { "text": "xe máy", "image": "/images/transport/xe-may.jpg" },
    { "text": "xe buýt", "image": "/images/transport/xe-buyt.jpg" },
    { "text": "tàu hỏa", "image": "/images/transport/tau-hoa.jpg" },
    { "text": "tàu lửa", "image": "/images/transport/tau-lua.jpg" },
    { "text": "máy bay", "image": "/images/transport/may-bay.jpg" },
    { "text": "tàu thủy", "image": "/images/transport/tau-thuy.jpg" },
    { "text": "thuyền", "image": "/images/transport/thuyen.jpg" },
    { "text": "cano", "image": "/images/transport/cano.jpg" },
    { "text": "taxi", "image": "/images/transport/taxi.jpg" },
    { "text": "xe đẩy trẻ", "image": "/images/transport/xe-day-tre.jpg" },
    { "text": "xe cút kít", "image": "/images/transport/xe-cut-kit.jpg" },
    { "text": "đèn giao thông", "image": "/images/transport/den-giao-thong.jpg" },
    { "text": "mũ bảo hiểm", "image": "/images/transport/mu-bao-hiem.jpg" },
    { "text": "ga tàu", "image": "/images/transport/ga-tau.jpg" },
    { "text": "sân bay", "image": "/images/transport/san-bay.jpg" },
    { "text": "bến xe", "image": "/images/transport/ben-xe.jpg" },
    { "text": "trạm xăng", "image": "/images/transport/tram-xang.jpg" },
    { "text": "vô lăng", "image": "/images/transport/vo-lang.jpg" }
  ],

  "farm": [
    { "text": "nông dân", "image": "/images/farm/nong-dan.jpg" },
    { "text": "trâu", "image": "/images/farm/trau.jpg" },
    { "text": "bò", "image": "/images/farm/bo.jpg" },
    { "text": "gà", "image": "/images/farm/ga.jpg" },
    { "text": "khoai", "image": "/images/farm/khoai.jpg" },
    { "text": "bắp", "image": "/images/farm/bap.jpg" },
    { "text": "lúa", "image": "/images/farm/lua.jpg" },
    { "text": "bí đỏ", "image": "/images/farm/bi-do.jpg" },
    { "text": "dưa hấu", "image": "/images/farm/dua-hau.jpg" },
    { "text": "vườn", "image": "/images/farm/vuon.jpg" },
    { "text": "cây ăn quả", "image": "/images/farm/cay-an-qua.jpg" },
    { "text": "rẫy", "image": "/images/farm/ray.jpg" },
    { "text": "nông trại", "image": "/images/farm/nong-trai.jpg" },
    { "text": "cuốc", "image": "/images/farm/cuoc.jpg" },
    { "text": "xẻng", "image": "/images/farm/xeng.jpg" },
    { "text": "máy cày", "image": "/images/farm/may-cay.jpg" },
    { "text": "hàng rào", "image": "/images/farm/hang-rao.jpg" },
    { "text": "chuồng trại", "image": "/images/farm/chuong-trai.jpg" },
    { "text": "tổ gà", "image": "/images/farm/to-ga.jpg" },
    { "text": "cỏ", "image": "/images/farm/co.jpg" },
    { "text": "tưới nước", "image": "/images/farm/tuoi-nuoc.jpg" },
    { "text": "phân bón", "image": "/images/farm/phan-bon.jpg" },
    { "text": "rơm", "image": "/images/farm/rom.jpg" },
    { "text": "giỏ hái", "image": "/images/farm/gio-hai.jpg" },
    { "text": "thu hoạch", "image": "/images/farm/thu-hoach.jpg" }
  ],

  "military": [
    { "text": "bộ đội", "image": "/images/military/bo-doi.jpg" },
    { "text": "quân phục", "image": "/images/military/quan-phuc.jpg" },
    { "text": "mũ cối", "image": "/images/military/mu-coi.jpg" },
    { "text": "giày bộ đội", "image": "/images/military/giay-bo-doi.jpg" },
    { "text": "ba lô", "image": "/images/military/ba-lo.jpg" },
    { "text": "doanh trại", "image": "/images/military/doanh-trai.jpg" },
    { "text": "cờ đỏ sao vàng", "image": "/images/military/co-do.jpg" },
    { "text": "xe quân đội", "image": "/images/military/xe-quan-doi.jpg" },
    { "text": "lều trại", "image": "/images/military/leu-trai.jpg" },
    { "text": "loa phóng thanh", "image": "/images/military/loa.jpg" },
    { "text": "thuyền quân đội", "image": "/images/military/thuyen-quan-doi.jpg" },
    { "text": "hành quân", "image": "/images/military/hanh-quan.jpg" },
    { "text": "súng trường", "image": "/images/military/sung-truong.jpg" },
    { "text": "máy bay quân sự", "image": "/images/military/may-bay-quan-su.jpg" }
  ],

  "fruits": [
    { "text": "táo", "image": "/images/food/tap.jpg" },
    { "text": "chuối", "image": "/images/food/chuoi.jpg" },
    { "text": "cam", "image": "/images/food/cam.jpg" },
    { "text": "dứa", "image": "/images/food/dua.jpg" },
    { "text": "nho", "image": "/images/food/nho.jpg" },
    { "text": "ổi", "image": "/images/food/oi.jpg" },
    { "text": "xoài", "image": "/images/food/xoai.jpg" },
    { "text": "mít", "image": "/images/food/mit.jpg" },
    { "text": "dưa lưới", "image": "/images/food/dua-luoi.jpg" },
    { "text": "mận", "image": "/images/food/man.jpg" }
  ],

  "vegetables": [
    { "text": "cà rốt", "image": "/images/food/ca-rot.jpg" },
    { "text": "cải thìa", "image": "/images/food/cai-thia.jpg" },
    { "text": "khoai tây", "image": "/images/food/khoai-tay.jpg" },
    { "text": "cà chua", "image": "/images/food/ca-chua.jpg" },
    { "text": "rau muống", "image": "/images/food/rau-muong.jpg" },
    { "text": "bắp cải", "image": "/images/food/bap-cai.jpg" },
    { "text": "bí xanh", "image": "/images/food/bi-xanh.jpg" },
    { "text": "su su", "image": "/images/food/su-su.jpg" },
    { "text": "đu đủ xanh", "image": "/images/food/du-du-xanh.jpg" }
  ],

  "household": [
    { "text": "ghế", "image": "/images/home/ghe.jpg" },
    { "text": "bàn", "image": "/images/home/ban.jpg" },
    { "text": "tivi", "image": "/images/home/tivi.jpg" },
    { "text": "tủ", "image": "/images/home/tu.jpg" },
    { "text": "đèn", "image": "/images/home/den.jpg" },
    { "text": "quạt", "image": "/images/home/quat.jpg" },
    { "text": "nệm", "image": "/images/home/nem.jpg" },
    { "text": "tủ quần áo", "image": "/images/home/tu-quan-ao.jpg" },
    { "text": "bồn rửa", "image": "/images/home/bon-rua.jpg" }
  ],

  "feelings": [
    { "text": "vui", "image": "/images/feelings/vui.jpg" },
    { "text": "buồn", "image": "/images/feelings/buon.jpg" },
    { "text": "giận", "image": "/images/feelings/gian.jpg" },
    { "text": "ngạc nhiên", "image": "/images/feelings/ngac-nhien.jpg" },
    { "text": "sợ", "image": "/images/feelings/so.jpg" },
    { "text": "mệt", "image": "/images/feelings/met.jpg" },
    { "text": "hạnh phúc", "image": "/images/feelings/hanh-phuc.jpg" },
    { "text": "xấu hổ", "image": "/images/feelings/xau-ho.jpg" }
  ],

  "numbers": [
    { "text": "một", "image": "/images/numbers/1.jpg" },
    { "text": "hai", "image": "/images/numbers/2.jpg" },
    { "text": "ba", "image": "/images/numbers/3.jpg" },
    { "text": "bốn", "image": "/images/numbers/4.jpg" },
    { "text": "năm", "image": "/images/numbers/5.jpg" },
    { "text": "sáu", "image": "/images/numbers/6.jpg" },
    { "text": "bảy", "image": "/images/numbers/7.jpg" },
    { "text": "tám", "image": "/images/numbers/8.jpg" },
    { "text": "chín", "image": "/images/numbers/9.jpg" },
    { "text": "mười", "image": "/images/numbers/10.jpg" }
  ],

  "toys": [
    { "text": "gấu bông", "image": "/images/toys/gau-bong.jpg" },
    { "text": "ô tô đồ chơi", "image": "/images/toys/o-to.jpg" },
    { "text": "búp bê", "image": "/images/toys/bup-be.jpg" },
    { "text": "xếp hình", "image": "/images/toys/xep-hinh.jpg" },
    { "text": "bóng", "image": "/images/toys/bong.jpg" },
    { "text": "lego", "image": "/images/toys/lego.jpg" },
    { "text": "xe kéo", "image": "/images/toys/xe-keo.jpg" },
    { "text": "xe lắc", "image": "/images/toys/xe-lac.jpg" },
    { "text": "bập bênh", "image": "/images/toys/bap-benh.jpg" },
    { "text": "đồ chơi âm nhạc", "image": "/images/toys/do-choi-am-nhac.jpg" }
  ],

  "shapes": [
    { "text": "hình tròn", "image": "/images/shapes/hinh-tron.jpg" },
    { "text": "hình vuông", "image": "/images/shapes/hinh-vuong.jpg" },
    { "text": "hình tam giác", "image": "/images/shapes/hinh-tam-giac.jpg" },
    { "text": "hình chữ nhật", "image": "/images/shapes/hinh-chu-nhat.jpg" },
    { "text": "hình trái tim", "image": "/images/shapes/hinh-trai-tim.jpg" },
    { "text": "hình sao", "image": "/images/shapes/hinh-sao.jpg" },
    { "text": "hình bầu dục", "image": "/images/shapes/hinh-bau-duc.jpg" },
    { "text": "hình ngũ giác", "image": "/images/shapes/hinh-ngu-giac.jpg" },
    { "text": "hình lục giác", "image": "/images/shapes/hinh-luc-giac.jpg" }
  ],

  "emotions": [
    { "text": "vui", "image": "/images/feelings/vui.jpg" },
    { "text": "buồn", "image": "/images/feelings/buon.jpg" },
    { "text": "sợ", "image": "/images/feelings/so.jpg" },
    { "text": "giận", "image": "/images/feelings/gian.jpg" },
    { "text": "ngạc nhiên", "image": "/images/feelings/ngac-nhien.jpg" },
    { "text": "hạnh phúc", "image": "/images/feelings/hanh-phuc.jpg" },
    { "text": "mệt", "image": "/images/feelings/met.jpg" },
    { "text": "xấu hổ", "image": "/images/feelings/xau-ho.jpg" },
    { "text": "tự hào", "image": "/images/feelings/tu-hao.jpg" }
  ],

  "flowers": [
    { "text": "hoa hồng", "image": "/images/flowers/hoa-hong.jpg" },
    { "text": "hoa cúc", "image": "/images/flowers/hoa-cuc.jpg" },
    { "text": "hoa sen", "image": "/images/flowers/hoa-sen.jpg" },
    { "text": "hoa mai", "image": "/images/flowers/hoa-mai.jpg" },
    { "text": "hoa đào", "image": "/images/flowers/hoa-dao.jpg" },
    { "text": "hoa ly", "image": "/images/flowers/hoa-ly.jpg" },
    { "text": "hoa lan", "image": "/images/flowers/hoa-lan.jpg" },
    { "text": "hoa hướng dương", "image": "/images/flowers/hoa-huong-duong.jpg" },
    { "text": "hoa đồng tiền", "image": "/images/flowers/hoa-dong-tien.jpg" },
    { "text": "hoa tulip", "image": "/images/flowers/hoa-tulip.jpg" },
    { "text": "hoa giấy", "image": "/images/flowers/hoa-giay.jpg" },
    { "text": "hoa mười giờ", "image": "/images/flowers/hoa-muoi-gio.jpg" },
    { "text": "hoa dâm bụt", "image": "/images/flowers/hoa-dam-but.jpg" },
    { "text": "hoa bồ công anh", "image": "/images/flowers/hoa-bo-cong-anh.jpg" },
    { "text": "hoa cẩm chướng", "image": "/images/flowers/hoa-cam-chuong.jpg" },
    { "text": "hoa violet", "image": "/images/flowers/hoa-violet.jpg" },
    { "text": "hoa hồng môn", "image": "/images/flowers/hoa-hong-mon.jpg" },
    { "text": "hoa huệ", "image": "/images/flowers/hoa-hue.jpg" },
    { "text": "hoa loa kèn", "image": "/images/flowers/hoa-loa-ken.jpg" },
    { "text": "hoa phượng", "image": "/images/flowers/hoa-phuong.jpg" },
    { "text": "hoa sứ", "image": "/images/flowers/hoa-su.jpg" },
    { "text": "hoa sử quân tử", "image": "/images/flowers/hoa-su-quan-tu.jpg" },
    { "text": "hoa ngọc lan", "image": "/images/flowers/hoa-ngoc-lan.jpg" },
    { "text": "hoa thược dược", "image": "/images/flowers/hoa-thuoc-duoc.jpg" },
    { "text": "hoa trạng nguyên", "image": "/images/flowers/hoa-trang-nguyen.jpg" },
    { "text": "hoa vạn thọ", "image": "/images/flowers/hoa-van-tho.jpg" },
    { "text": "hoa dừa cạn", "image": "/images/flowers/hoa-dua-can.jpg" },
    { "text": "hoa bướm", "image": "/images/flowers/hoa-buom.jpg" },
    { "text": "hoa tigon", "image": "/images/flowers/hoa-tigon.jpg" },
    { "text": "hoa thanh tú", "image": "/images/flowers/hoa-thanh-tu.jpg" }.
    { "text": "hoa kim anh", "image": "/images/flowers/hoa-kim-anh.jpg" }.
    { "text": "hoa kim ngân", "image": "/images/flowers/hoa-kim-ngan.jpg" }.
    { "text": "ké hoa vàng", "image": "/images/flowers/ké-hoa-vang.jpg" }
  ]
}

export function getWordPool(category: string | string[]): Word[] {
  // Nếu là array, trộn các chủ đề
  if (Array.isArray(category)) {
    const allWords: Word[] = []
    category.forEach((cat) => {
      if (cat === "mixed") {
        // Trộn tất cả các chủ đề
        Object.values(WORD_POOLS).forEach((words) => {
          allWords.push(...words)
        })
      } else {
        const words = WORD_POOLS[cat as keyof typeof WORD_POOLS] || []
        allWords.push(...words)
      }
    })
    return allWords
  }

  // Xử lý string như trước
  if (category === "mixed") {
    // Trộn tất cả các chủ đề
    const allWords: Word[] = []
    Object.values(WORD_POOLS).forEach((words) => {
      allWords.push(...words)
    })
    return allWords
  }
  return WORD_POOLS[category as keyof typeof WORD_POOLS] || WORD_POOLS.family
}

// Get all unique Vietnamese letters that can be searched
export function getAllVietnameseLetter(): string[] {
  return [
    "a",
    "ă",
    "â",
    "á",
    "à",
    "ả",
    "ã",
    "ạ",
    "ắ",
    "ằ",
    "ẳ",
    "ẵ",
    "ặ",
    "ấ",
    "ầ",
    "ẩ",
    "ẫ",
    "ậ",
    "e",
    "ê",
    "é",
    "è",
    "ẻ",
    "ẽ",
    "ẹ",
    "ế",
    "ề",
    "ễ",
    "ệ",
    "i",
    "í",
    "ì",
    "ỉ",
    "ĩ",
    "ị",
    "o",
    "ô",
    "ơ",
    "ó",
    "ò",
    "ỏ",
    "õ",
    "ọ",
    "ố",
    "ồ",
    "ổ",
    "ỗ",
    "ộ",
    "ớ",
    "ờ",
    "ở",
    "ỡ",
    "ợ",
    "u",
    "ư",
    "ú",
    "ù",
    "ủ",
    "ũ",
    "ụ",
    "ứ",
    "ừ",
    "ử",
    "ữ",
    "ự",
    "y",
    "ý",
    "ỳ",
    "ỷ",
    "ỹ",
    "ỵ",
    "d",
    "đ",
  ]
}

// Get all base Vietnamese letters (without the redundant diacritics)
// Bảng chữ cái tiếng Việt chuẩn: A, Ă, Â, B, C, D, Đ, E, Ê, G, H, I, K, L, M, N, O, Ô, Ơ, P, Q, R, S, T, U, Ư, V, X, Y
export function getBaseVietnameseLetter(): string[] {
  return [
    "a",
    "ă",
    "â",
    "b",
    "c",
    "d",
    "đ",
    "e",
    "ê",
    "g",
    "h",
    "i",
    "k",
    "l",
    "m",
    "n",
    "o",
    "ô",
    "ơ",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "ư",
    "v",
    "x",
    "y",
  ]
}

export function getWordsWithAnyLetter(category: string | string[], letters: string[]): Word[] {
  const pool = getWordPool(category)
  return pool.filter((word) => letters.some((letter) => word.text.includes(letter)))
}

// Get words with a specific letter
export function getWordsWithLetter(category: string | string[], letter: string): Word[] {
  const pool = getWordPool(category)
  return pool.filter((word) => word.text.includes(letter))
}

// Get base letter from a letter (with or without diacritics)
function getBaseLetter(letter: string): string {
  // Check if it's already a base letter
  if (VIETNAMESE_BASE_LETTERS.includes(letter)) {
    return letter
  }

  // Find which base letter group it belongs to
  for (const [baseLetter, variants] of Object.entries(VIETNAMESE_ALPHABET_GROUPS)) {
    if (variants.includes(letter)) {
      return baseLetter
    }
  }

  // If not found, return the letter as-is
  return letter
}

// Generate answer options from Vietnamese letters
// Wrong answers will only be base Vietnamese letters (without diacritics)
export function generateAnswerOptions(targetLetter: string, count = 3): string[] {
  // Use base Vietnamese letters for wrong answers
  const baseLetters = VIETNAMESE_BASE_LETTERS
  const targetBaseLetter = getBaseLetter(targetLetter)

  const options = [targetLetter]
  // Filter out the target base letter and any letters that match the target
  const available = baseLetters.filter((l) => l !== targetBaseLetter && l !== targetLetter)

  while (options.length < count && available.length > 0) {
    const randomIdx = Math.floor(Math.random() * available.length)
    options.push(available[randomIdx])
    available.splice(randomIdx, 1)
  }

  return options.sort(() => Math.random() - 0.5)
}

// Check if a word contains a specific letter (including diacritic variants)
export function wordContainsLetter(word: string, letter: string): boolean {
  const wordLower = word.toLowerCase()
  const letterLower = letter.toLowerCase()
  const baseLetter = getBaseLetter(letter).toLowerCase()

  // Check exact match
  if (wordLower.includes(letterLower)) {
    return true
  }

  // Check base letter match (for diacritics)
  // Nếu letter là base letter (như "a"), kiểm tra tất cả variants (a, á, à, ả, ã, ạ)
  // Nếu letter là variant (như "à"), kiểm tra tất cả variants của base letter
  const baseLetterVariants = VIETNAMESE_ALPHABET_GROUPS[baseLetter as keyof typeof VIETNAMESE_ALPHABET_GROUPS] || []
  for (const variant of baseLetterVariants) {
    if (wordLower.includes(variant.toLowerCase())) {
      return true
    }
  }

  return false
}

// Generate word options for image selection game
// Returns 2-3 words, one contains targetLetter, others don't
export function generateWordOptions(
  correctWord: Word,
  targetLetter: string,
  allWords: Word[],
  count = 3
): Word[] {
  const options = [correctWord]

  // Filter words that don't contain the target letter
  const available = allWords.filter((w) => {
    if (w.text === correctWord.text) return false
    return !wordContainsLetter(w.text, targetLetter)
  })

  // Use 2-3 options
  const numOptions = Math.min(count, available.length + 1)

  while (options.length < numOptions && available.length > 0) {
    const randomIdx = Math.floor(Math.random() * available.length)
    options.push(available[randomIdx])
    available.splice(randomIdx, 1)
  }

  return options.sort(() => Math.random() - 0.5)
}
