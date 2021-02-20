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

const Header: React.FC = () => {
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
    const Basic: React.FC<{ url?: string }> = (props) => {
      return (
        <Link className="navbar-item" to={props.url || "#"}>
          {props.children}
        </Link>
      );
    };

    const Composed: React.FC<{ title: string; links: HeaderLink[] }> = (
      props
    ) => {
      return (
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">{props.title}</a>
          <div className="navbar-dropdown">
            {props.links.map(({ url = "#", title = "#" }, index) => {
              return (
                <Basic url={url} key={index}>
                  {title}
                </Basic>
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
          {links.map(({ title = "#", url = "#", subLinks }, idx) => {
            if (subLinks) {
              console.log(subLinks);
              return <Composed title={title} links={subLinks} key={idx} />;
            } else {
              return (
                <Basic url={url} key={idx}>
                  {title}
                </Basic>
              );
            }
          })}
          {/* <Basic>Home</Basic> */}
          {/* <Basic>Documentaion</Basic> */}
        </div>
      );
    };
    const NavEnd = () => {
      return (
        <div className="navbar-end is-hidden">
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

export default Header;
