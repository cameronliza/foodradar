import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { logout } from "../../../actions/user";
import "./navbar.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  display: "flex",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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
  flexGrow: "1",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",

      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const Modall = styled(Modal)(({ theme }) => ({
  // backgroundColor: "#eee",
  // position: "fixed",
  // top: 0,
  // left: 0,
  // right: 0,
  // height: "100vh",
  // padding: "0 16px",
  // zIndex: "20000",
  // overflowY: "auto",

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const ModalBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#eee",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "100vh",
  padding: "0 16px",
  zIndex: "20000",
  overflowY: "auto",
  "& .MuiModal-root": {
    background: "pink",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const MenuGroup = styled(Typography)(({ theme }) => ({
  // ...theme.Typography.variant.body1,
  textDecoration: "none",
  color: "inherit",
  padding: "2px 8px",
}));
const DrawerTag = styled(Drawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    paddingTop: "25px",
    width: "320px",
    "& > *": {
      height: "48px",
    },

    [theme.breakpoints.down("xs")]: {
      width: "240px",
    },
  },
}));

export default function SearchAppBar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { userDetail, loading, isAuth } = user;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const [input, setinput] = useState("");
  const [open, setOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => setDrawer(!drawer);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleUserMenu = (e) => setAnchorEl(e.currentTarget);
  const handleUserMenuClose = () => setAnchorEl(null);

  const handleChangeInput = (e) => setinput(e.target.value);
  const handleDeleteInput = () => setinput("");
  const handleLogout = () => dispatch(logout());

  const itemList = (
    <>
      <MenuGroup variant="body1" component={Link} to="#">
        Products
      </MenuGroup>
      <MenuGroup variant="body1" component={Link} to="#">
        Reviews
      </MenuGroup>
      <MenuGroup variant="body1" component={Link} to="#">
        Ranking
      </MenuGroup>
      <MenuGroup variant="body1" component={Link} to="#">
        Deals
      </MenuGroup>
    </>
  );
  const login = loading ? null : isAuth && userDetail ? (
    <>
      <IconButton>
        <AddIcon />
      </IconButton>
      <IconButton component={Link} to={`/profile/${userDetail.id}`}>
        <Avatar
          src={userDetail.avatar}
          sx={{ width: "32px", height: "32px" }}
        />
      </IconButton>
      <IconButton color="inherit" onClick={handleUserMenu}>
        <KeyboardArrowDownIcon />
      </IconButton>
    </>
  ) : (
    <Button
      variant="outlined"
      size="small"
      color="inherit"
      sx={{ margin: "0 4px", padding: "6px" }}
    >
      Sign in / Login
    </Button>
  );
  const renderUserMenu = (
    <Menu anchorEl={anchorEl} open={openMenu} onClose={handleUserMenuClose}>
      <MenuItem onClick={handleLogout}>logout</MenuItem>
      <MenuItem>Profile</MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appbarstyle">
        <Toolbar sx={{ maxWidth: "1200px", width: "95%", margin: "auto" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              // flexGrow: 1,
              display: { xs: "none", md: "block" },
              textAlign: "center",
              textDecoration: "none",
            }}
            color="inherit"
          >
            MUI
          </Typography>
          <IconButton
            onClick={handleOpen}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <SearchIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
            {/* <MenuGroup variant="body1">Products</MenuGroup>
            <MenuGroup variant="body1">Reviews</MenuGroup>
            <MenuGroup variant="body1">Ranking</MenuGroup>
            <MenuGroup variant="body1">Deals</MenuGroup> */}
            {itemList}
          </Box>
          <Typography
            variant="h6"
            noWrap
            // component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block", md: "none" },
              textAlign: "center",
              textDecoration: "none",
            }}
            component={Link}
            to="/"
            color="inherit"
          >
            MUI
          </Typography>
          <Box
            sx={{
              // flexGrow: 1,
              display: { xs: "none", md: "block" },
              // textAlign: "center"
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          {/* <IconButton>
            <AddIcon />
          </IconButton> */}
          {/* <IconButton component={Link} to={`/profile/${userDetail.id}`}> */}
          {/* <AccountCircleIcon /> */}
          {login}
          {/* </IconButton> */}
        </Toolbar>
      </AppBar>
      <Modall
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
          <div
            style={{
              display: "flex",
            }}
          >
            <IconButton onClick={handleClose}>
              <ArrowBackIcon />
            </IconButton>

            <Search sx={{ marginTop: "8px", flexGrow: 1 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={input}
                onChange={handleChangeInput}
              />
              <Button onClick={handleDeleteInput}>X</Button>
            </Search>
          </div>
        </ModalBox>
      </Modall>
      <DrawerTag open={drawer} onClose={toggleDrawer}>
        <Typography
          variant="h5"
          // component={Link}
          // to="/"
          noWrap
          sx={{ color: "pink" }}
          onClick={toggleDrawer}
        >
          MUI
        </Typography>
        {itemList}
      </DrawerTag>
      {console.log(user)}
      {renderUserMenu}
    </Box>
  );
}
