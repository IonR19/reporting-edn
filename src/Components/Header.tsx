import {
  createStyles,
  makeStyles,
  Typography,
  Theme,
  Button,
  Menu,
  MenuItem,
  AppBar,
  IconButton,
  Toolbar,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";

import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

interface HeaderLink {
  url: string;
  title?: string;
  subLinks?: HeaderLink[];
}

const links: HeaderLink[] = [
  { url: "/services", title: "خدمات" },
  { url: "/employees", title: "موظفين" },
  { url: "/faults", title: "أعطال" },
  { url: "/statistics", title: "احصائيات" },
  { url: "/other", title: "أخرى" },
  {
    url: "/watches",
    title: "مراقبات",
    subLinks: [
      { url: "/watches/a/", title: "Ahmadi" },
      { url: "/watches/b/", title: "Farwaniya" },
      { url: "/watches/c/", title: "Hawalli" },
    ],
  },
];

const Header: React.FC = (props) => {
  // const styles = useStyles();

  const HeaderSubElement: React.FC = (props) => {
    return (
      <div className="sub-header">
        <a href="#">Go There</a>
        <a href="#">Go There 1</a>
        <a href="#">Go There 2</a>
      </div>
    );
  };
  const HeaderElements: React.FC = () => {
    return (
      <>
        {links.map((link, index) => {
          return (
            <div className="item" key={index}>
              <Link to={link.url}>{link.title ?? "Empty"}</Link>
              <div className="sub">
                <HeaderSubElement />
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="Header">
      <div className="main">
        {/* <Typography variant="h2">Header Element</Typography> */}
        <HeaderElements />
      </div>
    </div>
  );
};

const Header2: React.FC = () => {
  const Logo = () => {
    return (
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img
            src="https://www.mew.gov.kw/images/logo3.png"
            // width="112"
            height="28"
          ></img>
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    );
  };
  const Elements = () => {
    const Basic: React.FC = (props) => {
      return (
        <a className="navbar-item" href="#">
          {props.children}
        </a>
      );
    };
    const Composed: React.FC<{ title: string; links: HeaderLink }> = (
      props
    ) => {
      return (
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">{props.title}</a>
          <div className="navbar-dropdown">
            {links.map((link, index) => {
              return (
                <a className="navbar-item" href={link.url} key={index}>
                  {link.title}
                </a>
              );
            })}
            <hr className="navbar-divider"></hr>
          </div>
        </div>
      );
    };
    const NavStart = () => {
      return (
        <div className="navbar-start">
          <Basic>Home</Basic>
          <Basic>Documentaion</Basic>
          <Composed title="asd" links={links[links.length-1]} />
          <Composed title="asd" links={links[links.length-1]} />
        </div>
      );
    };
    const NavEnd = () => {
      return (
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      );
    };
    return (
      <div id="navbarBasicExample" className="navbar-menu">
        <NavStart />
        <NavEnd />
      </div>
    );
  };
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <Logo />
      <Elements />
    </nav>
  );
};

export default Header2;
