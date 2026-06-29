export const product = {
  name: "Quét Quanh Đây",
  tagline: "Bản đồ số địa phương & danh bạ dịch vụ",
  description:
    "Nền tảng bản đồ số và danh bạ số địa phương, được xây dựng nhằm số hóa thông tin đời sống, kinh doanh và dịch vụ trên địa bàn tỉnh Cà Mau. Người dân và du khách dễ dàng tra cứu địa điểm, tìm kiếm doanh nghiệp, cửa hàng, dịch vụ một cách nhanh chóng, chính xác.",
  features: [
    {
      icon: "MapPin",
      title: "Tìm địa điểm",
      description: "Tìm kiếm theo bán kính & danh mục — số hóa toàn bộ tỉnh Cà Mau, cập nhật thời gian thực.",
    },
    {
      icon: "Tag",
      title: "Ưu đãi độc quyền",
      description: "Nhận ưu đãi và khuyến mãi hấp dẫn từ các đối tác tham gia nền tảng, tiết kiệm chi tiêu mỗi ngày.",
    },
    {
      icon: "Calendar",
      title: "Sự kiện địa phương",
      description: "Không bỏ lỡ bất kỳ sự kiện nào diễn ra quanh bạn — lễ hội, hội chợ, chương trình khuyến mãi.",
    },
    {
      icon: "Users",
      title: "Cộng đồng",
      description: "Kết nối với cộng đồng địa phương, chia sẻ trải nghiệm và đánh giá địa điểm yêu thích.",
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "Đăng ký tài khoản",
      description: "Tạo tài khoản miễn phí chỉ trong 30 giây bằng số điện thoại.",
    },
    {
      step: 2,
      title: "Khám phá xung quanh",
      description: "Tìm kiếm địa điểm, ưu đãi và sự kiện ngay gần vị trí của bạn.",
    },
    {
      step: 3,
      title: "Thưởng thức ưu đãi",
      description: "Quét mã QR hoặc xuất trình thẻ VIP để nhận ưu đãi trực tiếp.",
    },
  ],
  vipCard: {
    price: "365.000đ/thẻ",
    name: "Thẻ VIP NFC Quét Quanh Đây",
    benefits: [
      "Thẻ thành viên thông minh tích hợp trực tiếp trên nền tảng",
      "Danh thiếp điện tử 1 chạm NFC — không cần cài app",
      "Kích hoạt bộ lọc 'Địa điểm chấp nhận thẻ VIP'",
      "Ưu đãi độc quyền tại hàng trăm đối tác",
      "Hoa hồng 100.000đ khi giới thiệu thành công",
    ],
  },
  commission: "100.000đ/thẻ bán được",
};

export const ecosystem = [
  {
    id: "ban-do-dia-diem",
    icon: "MapPin",
    title: "Bản Đồ Số Địa Điểm & Dịch Vụ",
    badge: "",
    description:
      "Nền tảng bản đồ số và danh bạ số địa phương, số hóa toàn bộ địa điểm, cửa hàng, dịch vụ tại Cà Mau.",
    features: [
      "Tìm kiếm theo bán kính & danh mục",
      "Số hóa toàn bộ tỉnh Cà Mau",
      "Cập nhật thời gian thực",
    ],
    href: "/san-pham",
    color: "#0075C4",
  },
  {
    id: "the-vip",
    icon: "CreditCard",
    title: "Thẻ VIP Quét Quanh Đây",
    badge: "365.000đ/thẻ",
    description:
      "Thẻ thành viên thông minh tích hợp danh thiếp điện tử và thẻ ưu đãi — 1 chạm NFC, không cần cài app.",
    features: [
      "Tích hợp thẻ VIP giảm giá vào bản đồ số",
      "Danh thiếp điện tử 1 chạm NFC không cài app",
      "Phù hợp cá nhân & hộ kinh doanh",
    ],
    href: "/san-pham#the-vip",
    color: "#FFB300",
  },
  {
    id: "bat-dong-san",
    icon: "Home",
    title: "Bản Đồ Số Bất Động Sản",
    badge: "Close Beta",
    description:
      "Nền tảng đăng tin và tra cứu nhà đất trực quan trên bản đồ số, kết nối người mua — người bán minh bạch.",
    features: [
      "Đăng tin BĐS trên bản đồ số",
      "Ký gửi nhà đất, đăng đa kênh SĐT chính chủ",
      "Kết nối người mua — người bán",
    ],
    href: "/san-pham#bat-dong-san",
    color: "#0075C4",
  },
  {
    id: "thiet-ke-website",
    icon: "Globe",
    title: "Thiết Kế Website Doanh Nghiệp",
    badge: "",
    description:
      "Xây dựng hình ảnh chuyên nghiệp trên môi trường số — web doanh nghiệp, bán hàng, landing page.",
    features: [
      "Website doanh nghiệp, bán hàng, landing page",
      "Chuẩn SEO · Responsive · Tốc độ cao",
      "Bảo hành 12 tháng · Hỗ trợ tại Cà Mau",
    ],
    href: "/san-pham#website",
    color: "#16A34A",
  },
  {
    id: "viec-lam",
    icon: "Briefcase",
    title: "Việc Làm Quanh Đây",
    badge: "",
    description:
      "Nền tảng kết nối tuyển dụng địa phương — doanh nghiệp đăng tin miễn phí, người lao động tìm việc nhanh.",
    features: [
      "Đăng tin tuyển dụng miễn phí cho doanh nghiệp",
      "Tìm việc theo khu vực, ngành nghề, lương",
      "Phù hợp doanh nghiệp vừa & nhỏ địa phương",
    ],
    href: "/san-pham#viec-lam",
    color: "#0075C4",
  },
  {
    id: "du-hoc",
    icon: "Plane",
    title: "Việc Làm Nước Ngoài & Du Học",
    badge: "",
    description:
      "Kết nối người lao động, học sinh, sinh viên với các chương trình du học, thực tập và làm việc tại nước ngoài.",
    features: [
      "Tư vấn chương trình du học theo nhu cầu",
      "Kết nối người lao động & đơn vị xuất khẩu",
      "Hỗ trợ hồ sơ, thủ tục tư vấn",
    ],
    href: "/san-pham#du-hoc",
    color: "#0075C4",
  },
];

export const partnerTiers = [
  {
    name: "Địa Điểm Thường",
    price: "Miễn phí",
    priceNote: "Không giới hạn thời gian",
    highlighted: false,
    features: [
      "Lên bản đồ số Quét Quanh Đây",
      "Trang giới thiệu địa điểm riêng",
      "Hiển thị thông tin cơ bản",
      "Được người dùng tìm kiếm",
    ],
    cta: "Đăng ký ngay",
    ctaHref: "/lien-he",
  },
  {
    name: "Đối Tác Thường",
    price: "Miễn phí",
    priceNote: "Kèm hoa hồng bán thẻ",
    highlighted: false,
    features: [
      "Tất cả quyền lợi Địa Điểm Thường",
      "Hiển thị ưu tiên trong kết quả tìm kiếm",
      "Hoa hồng 100.000đ/thẻ VIP bán được",
      "Đăng ưu đãi và sự kiện",
      "Hỗ trợ từ đội ngũ INEXT GROUP",
    ],
    cta: "Đăng ký ngay",
    ctaHref: "/lien-he",
  },
  {
    name: "Đối Tác VIP",
    price: "35.000đ/ngày",
    priceNote: "≈ 1.050.000đ/tháng",
    highlighted: true,
    badge: "Được khuyến nghị",
    features: [
      "Tất cả quyền lợi Đối Tác Thường",
      "Quảng cáo nổi bật trên nền tảng",
      "Đăng bài hằng ngày không giới hạn",
      "Ghế massage đặt miễn phí tại địa điểm",
      "Ưu tiên xuất hiện đầu kết quả",
      "Hỗ trợ content marketing",
      "Báo cáo thống kê hàng tuần",
    ],
    cta: "Đăng ký VIP",
    ctaHref: "/lien-he",
  },
];

export const testimonials = [
  {
    name: "Chị Nguyễn Thị Lan",
    role: "Chủ quán cà phê Hương Quê",
    location: "Phường 5, Cà Mau",
    content:
      "Từ khi tham gia Quét Quanh Đây, lượng khách ghé quán tăng hẳn. Khách hàng giờ dễ tìm ra quán hơn và hay chia sẻ ưu đãi với nhau.",
    avatar: null,
  },
  {
    name: "Anh Trần Văn Minh",
    role: "Chủ nhà hàng Minh Hải",
    location: "Phường 1, Cà Mau",
    content:
      "Tôi bán được 12 thẻ VIP trong tháng đầu tiên, thu thêm 1.200.000đ chỉ từ hoa hồng. Đây là giải pháp thực sự hiệu quả cho doanh nghiệp nhỏ.",
    avatar: null,
  },
  {
    name: "Chị Lê Thị Hoa",
    role: "Chủ tiệm nail Beauty Zone",
    location: "Phường Tân Thành, Cà Mau",
    content:
      "Chiếc ghế massage đặt miễn phí thu hút rất nhiều sự chú ý. Khách chờ dịch vụ có thể ngồi thư giãn, họ rất thích và quay lại nhiều lần.",
    avatar: null,
  },
];

export const teamMembers = [
  {
    name: "Dư Thế Vinh",
    role: "Founder & CEO",
    bio: "Người tiên phong xây dựng hệ sinh thái số địa phương tại Cà Mau và các tỉnh miền Tây.",
    avatar: null,
  },
  {
    name: "Thành viên đội ngũ",
    role: "Trưởng phòng Kinh doanh",
    bio: "Chuyên gia xây dựng mạng lưới đối tác và phát triển thị trường.",
    avatar: null,
  },
  {
    name: "Thành viên đội ngũ",
    role: "Trưởng phòng Công nghệ",
    bio: "Kiến trúc sư nền tảng công nghệ Quét Quanh Đây — tự tay xây dựng từng sản phẩm.",
    avatar: null,
  },
];

export const jobOpenings = [
  {
    title: "Nhân viên Kinh doanh",
    type: "Toàn thời gian",
    location: "Cà Mau",
    description:
      "Phát triển mạng lưới đối tác, tư vấn và hỗ trợ chủ cửa hàng tham gia hệ sinh thái Quét Quanh Đây.",
    requirements: ["Tốt nghiệp THPT trở lên", "Năng động, chịu khó", "Ưu tiên có kinh nghiệm bán hàng"],
  },
  {
    title: "Nhân viên Content Marketing",
    type: "Toàn thời gian / Bán thời gian",
    location: "Cà Mau / Remote",
    description:
      "Sáng tạo nội dung cho các kênh mạng xã hội, viết bài giới thiệu địa điểm và sự kiện địa phương.",
    requirements: ["Có khiếu viết lách", "Biết sử dụng Canva/CapCut", "Yêu thích truyền thông số"],
  },
  {
    title: "Nhân viên IT / Hỗ trợ kỹ thuật",
    type: "Toàn thời gian",
    location: "Cà Mau",
    description:
      "Hỗ trợ vận hành nền tảng, xử lý sự cố kỹ thuật và hỗ trợ đối tác sử dụng hệ thống.",
    requirements: ["Biết cơ bản về CNTT", "Có khả năng giải quyết vấn đề", "Sẵn sàng học hỏi công nghệ mới"],
  },
];
