import vietjackImage from "../../assets/img/projects/vietjack.png";
import tinytotsImage from "../../assets/img/projects/tinytots.png";
import streamEaseImage from "../../assets/img/projects/streamEasy.png";
import musicApplicationImage from "../../assets/img/projects/musicApplication.png";
import vehicleInsuranceImage from "../../assets/img/projects/vehicleInsurance.png";

const projects = [
  {
    name: "VietJack Clone",
    image: vietjackImage, // Thay đường dẫn bằng hình ảnh thực tế
    description:
      "Dự án này là một bản sao giao diện của trang chủ VietJack, được xây dựng nhằm mục đích thực hành và áp dụng các kiến thức về HTML, CSS, JavaScript, và thiết kế responsive. Dự án tập trung vào việc tái tạo giao diện và chức năng của trang web gốc, đảm bảo tính thẩm mỹ và khả năng hoạt động tốt trên mọi kích thước màn hình.",
    objectives: [
      "Rèn luyện kỹ năng xây dựng giao diện người dùng (UI).",
      "Sử dụng các phương pháp thiết kế hiện đại như Flexbox và Grid trong CSS.",
      "Xây dựng các thành phần tương tác bằng JavaScript.",
      "Tạo một trang web thân thiện với người dùng và phù hợp với các thiết bị di động, máy tính bảng, và máy tính để bàn.",
    ],
    position: "Tự bản thân phát triển.",
    features: [
      "Thiết kế giao diện: Sử dụng HTML5 và CSS3 để xây dựng giao diện giống với trang chủ VietJack.",
      "Tương tác người dùng: Tích hợp các chức năng như menu điều hướng, hiệu ứng hover, và slider cơ bản bằng JavaScript.",
      "Responsive Design: Tự động điều chỉnh giao diện để hiển thị tốt trên mọi loại thiết bị.",
      "Tối ưu hóa: Cấu trúc mã rõ ràng, dễ bảo trì, và tải nhanh.",
    ],
    techStack: ["HTML5", "CSS", "JavaScript", "Media Queries"],
    demoLink: "https://vietjack.oneteam.io.vn",
    githubLink: "https://github.com/hoang-huy204/Vietjack_Hoang.git",
  },
  {
    name: "TinyTots Shop",
    image: tinytotsImage, // Thay bằng đường dẫn hình ảnh thực tế
    description:
      "Dự án TinyTots Shop là một nền tảng thương mại điện tử được thiết kế dành riêng cho việc bán các sản phẩm cho trẻ em. Hệ thống phục vụ hai nhóm người dùng chính: Khách hàng và Quản trị viên, với các tính năng nhằm tối ưu hóa trải nghiệm mua sắm trực tuyến cũng như hỗ trợ quản lý hiệu quả.",
    time: "1 tháng",
    techStack: [
      "HTML5",
      "CSS",
      "Bootstrap 5",
      "JavaScript",
      "JQuery",
      "PHP",
      "MySQL",
    ],
    position: "Leader của đồ án kỳ 1 tại Aptech: Fontend: 50% và Backend: 100%",
    features: [
      "Tìm kiếm sản phẩm: Khách hàng có thể tìm kiếm sản phẩm dựa trên từ khóa, danh mục, hoặc các tiêu chí khác.",
      "Xem chi tiết sản phẩm: Hiển thị thông tin chi tiết về sản phẩm, bao gồm mô tả, hình ảnh, giá cả, và đánh giá từ người dùng.",
      "Thêm sản phẩm vào giỏ hàng: Cho phép khách hàng thêm sản phẩm yêu thích vào giỏ hàng để tiếp tục mua sắm.",
      "Thanh toán: Hỗ trợ thanh toán trực tuyến cho các sản phẩm trong giỏ hàng.",
      "Quản lý đơn hàng: Khách hàng có thể xem và theo dõi đơn hàng đã đặt. Quản trị viên có thể xử lý, theo dõi và quản lý các đơn hàng từ khách hàng.",
      "Quản lý danh mục sản phẩm: Quản trị viên có thể thêm mới, chỉnh sửa hoặc xóa các danh mục sản phẩm.",
      "Quản lý khách hàng: Quản trị viên có thể xem và quản lý thông tin khách hàng.",
      "Quản lý phản hồi khách hàng: Quản trị viên có quyền đọc và xử lý các phản hồi từ khách hàng.",
    ],
    objectives: [
      "Xây dựng một nền tảng mua sắm trực tuyến thân thiện, hiện đại.",
      "Hỗ trợ quản lý và vận hành hiệu quả.",
      "Nâng cao trải nghiệm cho cả khách hàng và quản trị viên.",
    ],
    youtubeLink: "https://youtu.be/hg8Wva8Angk?si=ZJUrPqce5t416eQq",
    githubLink: "https://github.com/hoang-huy204/TinyTots-Baby.git",
  },
  {
    name: "StreamEase",
    image: streamEaseImage, // Thay bằng đường dẫn hình ảnh thực tế
    description:
      "StreamEase là một nền tảng trực tuyến chuyên quản lý các bộ phim và chương trình giải trí phong phú. Dự án hướng đến việc mang đến cho người dùng trải nghiệm xem phim tiện lợi, cá nhân hóa và tương tác, thông qua các tính năng như danh sách yêu thích, nhắc nhở tập mới, đánh giá phim, và nhiều hơn nữa.",
    position: "Thành viên trong nhóm, làm logic lưu storage",
    techStack: ["ReactJS", "Database: JSON"],
    features: [
      "Trang chủ (Home Page): Hiển thị phim nổi bật, phim mới cập nhật, và phim sắp ra mắt, giúp người dùng dễ dàng khám phá nội dung.",
      "Trang phim (Film Page): Danh sách phim phong phú với tìm kiếm, lọc theo thể loại, sắp xếp thứ tự chữ cái, và thêm phim yêu thích.",
      "Phim yêu thích (Favorite Films Section): Quản lý danh sách phim yêu thích, nhắc nhở tập mới khi có cập nhật.",
      "Nhắc nhở (Reminders): Hệ thống tự động nhắc nhở khi có tập mới dựa trên lịch trình phát sóng.",
      "Đánh giá phim (Feedback): Hỗ trợ đánh giá phim qua biểu mẫu, bao gồm các khía cạnh như cốt truyện, diễn xuất, và kỹ thuật quay phim.",
      "Liên hệ (Contact Us): Người dùng có thể liên hệ đội ngũ phát triển qua email trên nền tảng.",
      "Sơ đồ trang (Site Map): Hiển thị cấu trúc và luồng hoạt động, giúp người dùng dễ dàng điều hướng.",
      "Nhà cung cấp dịch vụ (Stream Providers): Hiển thị danh sách nhà cung cấp, cho phép thêm, chỉnh sửa hoặc xóa.",
      "Gói dịch vụ (Subscription): Quản lý các gói dịch vụ mà người dùng đã mua hoặc muốn mua.",
    ],
    objectives: [
      "Mang đến trải nghiệm xem phim tiện lợi và cá nhân hóa.",
      "Tích hợp các tính năng hiện đại như nhắc nhở, danh sách yêu thích và đánh giá phim.",
      "Cải thiện khả năng quản lý nội dung và dịch vụ từ phía nhà cung cấp.",
    ],
    demoLink:
      "https://drive.google.com/file/d/1WtkXsBxWdemUyQWDxmR66Z5wxZWZCvVG/view?usp=sharing", // Thay bằng đường dẫn thực tế của video
    githubLink: "https://github.com/Hoang0504/StreamEase.git",
    documentLink:
      "https://docs.google.com/document/d/1qC5dKkk9W1psCH3RYRJma8L67Wz-uBlB/edit?usp=sharing&ouid=116617177960331539995&rtpof=true&sd=true", // Thay bằng đường dẫn tài liệu thực tế
  },
  {
    name: "Ứng Dụng Nghe Nhạc",
    image: musicApplicationImage, // Thay bằng đường dẫn hình ảnh thực tế
    description:
      "Ứng Dụng Nghe Nhạc là một nền tảng giải trí cung cấp khả năng khám phá, phát nhạc và quản lý âm nhạc dễ dàng. Ứng dụng được thiết kế nhằm đáp ứng nhu cầu giải trí của người dùng yêu âm nhạc và hỗ trợ quản trị viên quản lý nội dung, tương tác với người dùng.",
    position: "Leader",
    techStack: ["JavaFX", "MySQL"],
    features: [
      "Khám phá sản phẩm âm nhạc: Dễ dàng tìm kiếm bài hát, album hoặc nghệ sĩ yêu thích dựa trên từ khóa và thể loại.",
      "Xem chi tiết sản phẩm: Hiển thị thông tin chi tiết về bài hát, bao gồm hình ảnh, tên bài hát, đánh giá, tên ca sĩ, và thời lượng.",
      "Quản lý danh mục thể loại: Quản trị viên có thể thêm, chỉnh sửa hoặc xóa danh mục thể loại nhạc.",
      "Quản lý thông tin người dùng: Quản trị viên xem và quản lý thông tin như email, số điện thoại của người dùng.",
      "Gửi phản hồi: Người dùng có thể gửi ý kiến đóng góp để cải thiện ứng dụng.",
      "Đăng ký và quản lý tài khoản: Cho phép người dùng tạo tài khoản và quản lý thông tin cá nhân.",
      "Thư viện nhạc phong phú: Cung cấp danh sách bài hát, album, và nghệ sĩ đa dạng để khám phá.",
      "Tìm kiếm và gợi ý: Hiển thị kết quả tìm kiếm liên quan và gợi ý dựa trên sở thích người dùng.",
      "Tạo và quản lý danh sách phát: Người dùng có thể tạo, đặt tên và thêm bài hát vào danh sách phát cá nhân.",
      "Phát nhạc và điều khiển phát lại: Hỗ trợ các tính năng như tua nhanh, tua lại, tạm dừng và tiếp tục phát nhạc.",
      "Hiển thị lời bài hát và thông tin nghệ sĩ: Cung cấp lời bài hát và thông tin chi tiết về nghệ sĩ.",
      "Đăng ký và đăng nhập dễ dàng: Quy trình nhanh chóng và thân thiện, đảm bảo trải nghiệm mượt mà.",
    ],
    objectives: [
      "Cung cấp trải nghiệm âm nhạc cá nhân hóa và tiện lợi.",
      "Tích hợp các tính năng hiện đại như gợi ý, điều khiển phát nhạc và quản lý danh sách phát.",
      "Hỗ trợ quản trị viên trong việc quản lý nội dung và tương tác với người dùng.",
    ],
    demoLink:
      "https://drive.google.com/file/d/19VnK0o167vwC-AYbymfFR7Ke-v8-a0Vu/view?usp=sharing", // Thay bằng đường dẫn thực tế của video
    githubLink: "https://github.com/hoang-huy204/MusicApplication.git",
  },
  {
    name: "Hệ Thống Quản Lý Bảo Hiểm Xe Ô Tô",
    image: vehicleInsuranceImage, // Thay bằng URL hình ảnh thực tế
    description:
      "Dự án xây dựng hệ thống quản lý bảo hiểm xe ô tô phục vụ khách hàng và quản trị viên. Hệ thống hỗ trợ khách hàng tìm kiếm, so sánh, và mua bảo hiểm, đồng thời giúp quản trị viên quản lý thông tin khách hàng, gói bảo hiểm, giao dịch, và hợp đồng một cách hiệu quả.",
    position: "Leader - Đồ án kỳ 3 tại Aptech",
    techStack: ["ASP.NET C# API", "React (Ant Design)", "MySQL"],
    duration: "1 tháng",
    responsibilities: {
      frontend: "20% giao diện, logic chuyển trang, gọi API.",
      backend: "Viết 60% API.",
    },
    features: [
      "admin - Quản lý bảo hiểm: Thêm, sửa, xóa gói bảo hiểm.",
      "admin - Quản lý giao dịch: Theo dõi, chỉnh sửa và xóa giao dịch từ khách hàng.",
      "admin - Quản lý hợp đồng: Cập nhật thông tin hợp đồng và gửi email nhắc nhở khi sắp hết hạn.",
      "admin - Quản lý phương tiện: Thêm, sửa, xóa thông tin phương tiện của khách hàng.",
      "admin - Hỗ trợ khách hàng: Xử lý yêu cầu hỗ trợ và cập nhật trạng thái yêu cầu.",
      "admin - Quản lý bài viết và quảng cáo.",
      "customer - Đăng ký và đăng nhập: Cho phép khách hàng đăng ký tài khoản với email xác thực và đăng nhập để sử dụng dịch vụ.",
      "customer - Tìm kiếm và xem các gói bảo hiểm dựa trên loại phương tiện hoặc địa điểm.",
      "customer - So sánh và chọn các gói bảo hiểm phù hợp với nhu cầu.",
      "customer - Mua bảo hiểm: Thanh toán trực tuyến qua VNPay và quản lý hợp đồng cá nhân.",
      "customer - Quản lý hợp đồng: Xem hợp đồng, xuất hợp đồng ra PDF.",
      "customer - Yêu cầu bồi thường: Gửi yêu cầu bồi thường qua chat thời gian thực.",
      "customer - Trang chủ: Hiển thị danh sách các gói bảo hiểm hiện có và thông tin liên hệ.",
      "customer - Blog: Cung cấp thông tin chi tiết về bảo hiểm xe ô tô và các chủ đề liên quan.",
    ],
    objectives: [
      "Tối ưu hóa quy trình vận hành của công ty bảo hiểm.",
      "Mang lại trải nghiệm người dùng vượt trội cho khách hàng.",
      "Đảm bảo an toàn và hiệu quả trong quản lý thông tin.",
    ],
    demoLink: "https://youtu.be/AqiSCe2yqps", // Link demo video
    githubLinks: {
      frontend: "https://github.com/hoang-aptech/Vehicle-insurance-fontend.git",
      backend: "https://github.com/hoang-aptech/Vehicle-insurance-backend.git",
    },
  },
];

export default projects;
