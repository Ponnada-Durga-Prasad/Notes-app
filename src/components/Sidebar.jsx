import React from "react";
import { Link, NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const Sidebar = () => {
  const getStyles = ({ isActive }) => {
    const styles =
      "flex align-center gap-1 px-2 py-1 rounded-br-full rounded-tr-full";
    return isActive
      ? ` bg-indigo-800 text-slate-50 ${styles}`
      : `hover:bg-indigo-800 hover:text-slate-50 ${styles}`;
  };
  return (
    <aside className="flex flex-col gap-5 border-r-2 border-gray-200 w-36 h-screen p-2">
      <NavLink to="/" className={getStyles}>
        <HomeOutlinedIcon />
        <span>Home</span>
      </NavLink>
      <NavLink className={getStyles} to="/archive">
        <ArchiveOutlinedIcon />
        Archive
      </NavLink>
      <NavLink className={getStyles} to="/important">
        <LabelImportantOutlinedIcon />
        Important
      </NavLink>
      <NavLink to="/bin" className={getStyles}>
        <DeleteOutlineOutlinedIcon />
        Bin
      </NavLink>
    </aside>
  );
};

export default Sidebar;
