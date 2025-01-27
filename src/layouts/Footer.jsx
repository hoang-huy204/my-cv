import React from "react";
import { Box, Typography, Link } from "@mui/material";

export default function CVFooter() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f8f9fa",
        padding: "16px",
        textAlign: "center",
        borderTop: "1px solid #e7e7e7",
        marginTop: "auto",
      }}
    >
      <Typography variant="body1" color="text.secondary">
        &copy; {new Date().getFullYear()} Trần Ngọc Huy Hoàng. All Rights
        Reserved.
      </Typography>
    </Box>
  );
}
