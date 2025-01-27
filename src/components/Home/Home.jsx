import React from "react";
import Container from "@mui/material/Container";
import {
  Box,
  Grid2,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Link,
  Avatar,
  Paper,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import avatar from "../../assets/img/avatar.jpg";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div>
      {/* Main Content */}
      <Container maxWidth="false" disableGutters>
        <Grid2 container spacing={2}>
          <Grid2 size={3}>
            <Box
              sx={{
                backgroundColor: "#333",
                color: "#f5f5f5",
                p: 3,
              }}
            >
              {/* Header */}
              <Grid2
                display="flex"
                justifyContent="center"
                alignItems="center"
                size="grow"
              >
                <Avatar src={avatar} sx={{ width: 100, height: 100 }} />
              </Grid2>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#ffb400" }}
                >
                  Trần Ngọc Huy Hoàng
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#ffb400", mb: 2 }}
                >
                  FULL STACK SOFTWARE ENGINEER
                </Typography>
              </Box>

              {/* Contact Information */}
              <List>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ color: "#ffb400" }}>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="0397273850" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ color: "#ffb400" }}>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="ngochoanghuy0504@gmail.com" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ color: "#ffb400" }}>
                    <FacebookIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Link
                      href="https://www.facebook.com/hoanghuy2k4"
                      target="_blank"
                      underline="hover"
                      sx={{ color: "#ffb400" }}
                    >
                      Tại đây
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ color: "#ffb400" }}>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText primary="Trương Định, Hoàng Mai, Hà Nội" />
                </ListItem>
              </List>

              <Divider sx={{ borderColor: "#ffb400", my: 2 }} />

              {/* Skills Section */}
              <Typography
                variant="h6"
                sx={{ color: "#ffb400", fontWeight: "bold", mb: 1 }}
              >
                CÁC KỸ NĂNG
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                CHUYÊN NGÀNH
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Nghiên cứu và học hỏi các công nghệ mới;
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                Front end:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                + Lập trình UI/UX dựa trên ReactJS, Javascript (ES6), HTML5/CSS
                (SCSS), Jquery, Bootstrap 5;
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                + Thiết kế responsive web design, làm việc với RESTful APIs...
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                Back end:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Lập trình backend: PHP, C#, NodeJS, Java và cơ sở dữ liệu SQL
                Server, MySQL
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                DevOps:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Grid Được tiếp cận với các kiến thức devops trong thực tế, làm
                việc với ci - cd, server, ...
              </Typography>

              <Divider sx={{ borderColor: "#ffb400", my: 2 }} />

              {/* Interests Section */}
              <Typography
                variant="h6"
                sx={{ color: "#ffb400", fontWeight: "bold", mb: 1 }}
              >
                SỞ THÍCH
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Đọc sách, leo núi, khám phá, tự nghiên cứu tìm tòi và phát triển
                bản thân
              </Typography>

              <Divider sx={{ borderColor: "#ffb400", my: 2 }} />

              {/* References Section */}
              <Typography
                variant="h6"
                sx={{ color: "#ffb400", fontWeight: "bold", mb: 1 }}
              >
                NGƯỜI GIỚI THIỆU
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Đinh Thành Đạt - Founder DSkill - 0962650286
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Fb:{" "}
                <Link
                  href="https://www.facebook.com/DinhThanhDatnb"
                  target="_blank"
                  underline="hover"
                  sx={{ color: "#ffb400" }}
                >
                  Tại đây
                </Link>
              </Typography>
            </Box>
          </Grid2>
          <Grid2 size={9}>
            {/* <Paper
              elevation={3}
              style={{ padding: 16, marginTop: 30, marginBottom: 16 }}
            >
              <Typography variant="h5" gutterBottom>
                MỤC TIÊU NGHỀ NGHIỆP
              </Typography>
              <Typography variant="body1">
                Áp dụng những kiến thức được học và trang bị trường để thực hiện
                nhiệm vụ được giao với hiệu quả và hiệu suất tối đa. Hướng tới
                hoàn thành Junior Developer trong vòng 1 năm tới và trở thành
                Senior Developer sau 5 năm tiếp theo.
              </Typography>
            </Paper>
            <Paper elevation={3} style={{ padding: 16, marginBottom: 16 }}>
              <Typography variant="h5">DỰ ÁN ĐÃ LÀM</Typography>
              <Typography variant="h6">TINTOTS - SHOP BABY</Typography>
              <Typography variant="body1">
                Đồ án 1: 06/2023 - 07/2023
              </Typography>
              <Typography variant="body2">
                Hệ thống quản lý cửa hàng trực tuyến với HTML, CSS, PHP và MySQL
              </Typography>
              <Typography variant="body2">
                Triển khai các chức năng như đăng nhập, đăng ký, quản lý sản
                phẩm và CRUD.
              </Typography>
            </Paper>

            <Paper elevation={3} style={{ padding: 16, marginBottom: 16 }}>
              <Typography variant="h6">VIETJACK</Typography>
              <Typography variant="body1">Dự án 2: 2022 - Nay</Typography>
              <Typography variant="body2">
                Nền tảng học tập trực tuyến - Kỹ 3
              </Typography>
            </Paper>

            <Paper elevation={3} style={{ padding: 16, marginBottom: 16 }}>
              <Typography variant="h6">CÁC DỰ ÁN KHÁC</Typography>
              <Typography variant="body1">Dự án 3: 2023 - Nay</Typography>
              <Typography variant="body2">
                Nâng cao kỹ năng công nghệ thông tin
              </Typography>
            </Paper>

            <Paper elevation={3} style={{ padding: 16 }}>
              <Typography variant="h6">CÔNG VIỆC</Typography>
              <Typography variant="body2">
                Dskill – nâng cao kỹ năng mềm
              </Typography>
              <Typography variant="body2">
                - Đồ án nhóm cao ng kỹ năng giao tiếp
              </Typography>
              <Typography variant="body2">
                - Mạng lưới giảng viên, nâng cao kỹ năng giao tiếp - thuyết
                trình cho sinh viên.
              </Typography>
              <Typography variant="body2">
                - Rèn luyện kỹ năng photoshop, edit video.
              </Typography>
            </Paper> */}
            <Box sx={{ padding: 3 }}>
              {/* Header */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#ffb400",
                }}
              >
                MỤC TIÊU NGHỀ NGHIỆP
              </Typography>
              <Typography sx={{ mt: 2, mb: 4 }}>
                Áp dụng những kiến thức được học và trang bị trưởng đã thực hiện
                nhiệm vụ được giao với hiệu quả và học hỏi suốt đời. Hướng tới
                hoàn thành Junior Developer trong vòng 1 năm tới và trở thành
                Senior Developer sau 5 năm tiếp theo. Nắm vững các kiến thức
                nâng cao: kiến trúc hệ thống, tối ưu hiệu năng, bảo mật, cơ sở
                dữ liệu, DevOps...
              </Typography>

              {/* Projects Section */}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#ffb400" }}
              >
                DỰ ÁN ĐÃ LÀM
              </Typography>
              <Grid2 container spacing={3} sx={{ mb: 4 }}>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    TINYTOTS - SHOP BABY
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    06/2023 - 07/2023
                  </Typography>
                  <Typography variant="body2">Đồ án 1 Aptech</Typography>
                  <Typography variant="body2">Thời gian: 1 tháng</Typography>
                  <Typography variant="body2">
                    Tham gia: 2 thành viên
                  </Typography>
                  <Typography variant="body2">
                    Áp dụng những kiến thức về HTML, CSS, Javascript, PHP và
                    mysql. Tạo giao diện và responsive.
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    VIETJACK
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    06/2023 - 07/2023
                  </Typography>
                  <Typography variant="body2">
                    Tham gia: Tự phát triển
                  </Typography>
                  <Typography variant="body2">
                    Tạo giao diện web cho HTML, CSS, Javascript, responsive.
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    VEHICLE INSURANCE
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    08/2024 - 09/2024
                  </Typography>
                  <Typography variant="body2">
                    Tham gia: 4 thành viên tham gia cùng với vị trí trưởng nhóm
                  </Typography>
                  <Typography variant="body2">
                    Tạo giao diện web bằng react kết hợp với các thư viện tạo
                    giao diện như Antdesign..., backend làm bằng c# MVC
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    VÀ NHIỀU DỰ ÁN KHÁC NŨA ...
                  </Typography>
                </Grid2>
              </Grid2>

              {/* Education Section */}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#ffb400" }}
              >
                HỌC VẤN
              </Typography>
              <Grid2 container spacing={3}>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    CHUYÊN NGÀNH CÔNG NGHỆ THÔNG TIN
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    2022 - Nay
                  </Typography>
                  <Typography variant="body2">
                    Hệ thống đào tạo lập trình viên Quốc tế Aptech
                  </Typography>
                  <Typography variant="body2">
                    Từng tham gia cuộc thi techwiz do Aptech tổ chức
                  </Typography>
                  <Typography variant="body2">
                    Đạt nhiều kết quả tốt tại đây
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    TỰ HỌC
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    2020 - Nay
                  </Typography>
                  <Typography variant="body2">
                    Tìm hiểu các công nghệ mới, các framework dành cho fonend và
                    backend và devops.
                  </Typography>
                  <Typography variant="body2">
                    F8 fullstack: Có được 1 số chứng chỉ ở đây như HTML, CSS;
                    Responsive; Javacript; React JS ....
                  </Typography>
                </Grid2>
              </Grid2>

              {/* Skills and Work Experience Section */}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#ffb400" }}
              >
                KINH NGHIỆM LÀM VIỆC
              </Typography>
              <Grid2 container spacing={3}>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    CỘNG SỰ
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    2023 - 2024
                  </Typography>
                  <Typography variant="body2">
                    Dskill - nâng cao kỹ năng mềm
                  </Typography>
                  <Typography variant="body2">
                    - Đội nhóm cùng học tập các kỹ năng giao tiếp, thuyết trình,
                    làm việc nhóm, lãnh đạo, ...
                  </Typography>
                  <Typography variant="body2">
                    - Mang lại giá trị, nâng cao kỹ năng mềm - giao tiếp -
                    thuyết trình cho sinh viên.
                  </Typography>
                  <Typography variant="body2">
                    - Rèn luyện kỹ năng photoshop, edit video.
                  </Typography>
                  <Typography variant="body2">- Tình nguyện</Typography>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
}

export default Home;
