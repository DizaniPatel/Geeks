import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./header.css";

export default function DropDown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <button
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="btn default"
      >
        {props.btn}
        <i class="fa fa-caret-down" />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem style={{ color: "gray", fontSize: 13 }} onClick={handleClose}>
          {props.item0}
        </MenuItem>
        <MenuItem style={{ color: "black" }} onClick={handleClose}>
          {props.item1}
        </MenuItem>
        <MenuItem style={{ color: "black" }} onClick={handleClose}>
          {props.item2}
        </MenuItem>

        <MenuItem style={{ color: "black" }} onClick={handleClose}>
          {props.item3}
        </MenuItem>

        <MenuItem style={{ color: "black" }} onClick={handleClose}>
          {props.item4}
        </MenuItem>

        <MenuItem style={{ color: "black" }} onClick={handleClose}>
          {props.item5}
        </MenuItem>
        <MenuItem style={{ color: "black" }} onClick={handleClose}>
          {props.item6}
        </MenuItem>
        <MenuItem style={{ color: "black" }} onClick={handleClose}>
          {props.item7}
        </MenuItem>
        <MenuItem style={{ color: "black" }} onClick={handleClose}>
          {props.item8}
        </MenuItem>
        <MenuItem style={{ color: "black" }} onClick={handleClose}>
          {props.item9}
        </MenuItem>
      </Menu>
    </div>
  );
}
