import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import logo from "../assets/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import user from "../assets/user.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "5px",
  backgroundColor: "trasparant",
  border: "1px solid #000000",
  "&:hover": {
    backgroundColor: "#FFFFFF0F",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className="!bg-white !shadow-custom text-opacity-50 "
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img src={logo} alt="logo" className="w-full max-w-[186px]" />
          </Typography>

          <Search className="!border-opacity-50">
            <SearchIconWrapper>
              <SearchIcon className="text-black text-opacity-50" />
            </SearchIconWrapper>
            <StyledInputBase
              className="!text-black text-opacity-50 search-width"
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <span className="font-medium text-lg leading-[18px] text-[#474747] flex items-center">
              My Account
            </span>
            <IconButton>
              <img src={user} alt="" className="w-[35px]" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
