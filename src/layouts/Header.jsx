import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { routes } from "../config";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CV -Trần Ngọc Huy Hoàng
        </Typography>
        <Button color="inherit" href={routes.home}>
          CV Tiếng Việt
        </Button>
        <Button color="inherit" href={routes.cvEnglish}>
          English CV
        </Button>
        <Button
          color="inherit"
          target="_blank"
          href="https://drive.google.com/drive/folders/1Q6ux1HYkc4UBUrNIeswmqfnxACs9vVG5?usp=sharing"
        >
          Chứng chỉ
        </Button>
        <Button
          color="inherit"
          target="_blank"
          href="https://www.youtube.com/watch?v=QrjbvHshdio"
        >
          Video giới thiệu bản thân
        </Button>
        <Button color="inherit" href={routes.projects}>
          Các dự án đã làm
        </Button>
        <Button
          color="inherit"
          target="_blank"
          href="https://drive.google.com/file/d/1c3d8w_5M9R0aReH11MWrmf7VVxNChTk5/view"
        >
          Cam kết với công ty
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
