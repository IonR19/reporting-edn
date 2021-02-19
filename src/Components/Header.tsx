import {
  createStyles,
  makeStyles,
  Typography,
  Theme,
  Link as MaterialLink,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";

import React from "react";
import { Link } from "react-router-dom";
import { links } from "../Routes";
import "./Header.scss";

const useStyles = makeStyles((th: Theme) => {
  return createStyles({
    root: {
      background: "linear-gradient(90deg, #023DC3, #00C8E0)",
      color: "#FFF",
      borderBottomLeftRadius: "40px",
      borderBottomRightRadius: "40px",
      overflow: "hidden",
      padding: "20px",
      display: "flex",
      justifyContent: "space-evenly",
    },
    link: {
      color: "#FFF",
      textDecoration: "none",
      fontSize: "1.3rem",
    },
  });
});

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const styles = useStyles();
  return (
    <div>
      <Button
        className={styles.link}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

const Header: React.FC = (props) => {
  const styles = useStyles();
  const Extra = () => {
    return (
      <React.Fragment>
        {links.map((link, index) => {
          return (
            <Link to={link.url} className={styles.link} key={index}>
              {link.title ?? "Empty"}
            </Link>
          );
        })}
      </React.Fragment>
    );
  };
  return (
    <div className={styles.root}>
      {/* <Typography variant="h2">Header Element</Typography> */}
      <Extra />
      <SimpleMenu />
    </div>
  );
};

export default Header;
