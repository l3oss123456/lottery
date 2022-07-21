import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Images from "../../Components/Images";
import { Strings } from "../../Services/Utils/Locals";
import { editLanguage } from "../../Services/Actions/language";
import { editTheme } from "../../Services/Actions/theme";
import { useOutsideAlerter, useWindowSize } from "../../Services/Utils/helper";
import responsive from "../../Services/Utils/responsive";
import { colors, fontFamily, fontSize } from "../../Assets/Theme";
import Styles from "./styles";

const { Option } = Select;

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);

  const { windowWidth } = useWindowSize();

  const listMenu = [
    {
      name: Strings.getString(`menubar.home`),
      link: `/`,
    },
    {
      name: Strings.getString(`menubar.aboutus`),
      link: `/about-us`,
    },
    {
      name: Strings.getString(`menubar.contact`),
      link: `/contact`,
    },
    {
      name: `ScrollToAnimation`,
      link: `/scrollToAnimation`,
    },
  ];

  const [displayHamburgerMenu, setDisplayHamburgerMenu] = useState(false);

  useEffect(() => {
    if (windowWidth && windowWidth.toString() > responsive.xs) {
      setDisplayHamburgerMenu(false);
    }
  }, [windowWidth]);

  const sideNavRef = useRef(null);
  useOutsideAlerter(sideNavRef, () => {
    setDisplayHamburgerMenu(false);
  });

  const renderLogo = () => {
    return (
      <Link to={`/`}>
        <Styles.LogoSection>
          <Images name={`icon.logo`} />
        </Styles.LogoSection>
      </Link>
    );
  };
  const renderMenu = () => {
    return (
      <Styles.MenuSection>
        {listMenu.map((menu, index) => {
          return (
            <Link
              to={menu.link}
              key={index}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <Styles.Menu
                style={{
                  marginLeft:
                    index > 0 && index < listMenu.length ? `20px` : null,
                }}
              >
                {menu.name}
              </Styles.Menu>
            </Link>
          );
        })}
      </Styles.MenuSection>
    );
  };
  const renderHamburgerMenu = () => {
    return (
      <>
        <Styles.HamburgerSection
          onClick={() => setDisplayHamburgerMenu(!displayHamburgerMenu)}
        >
          <MenuOutlined
            style={{
              cursor: `pointer`,
              fontSize: `1.2rem`,
              color: colors.white,
            }}
          />
        </Styles.HamburgerSection>

        <Styles.SideNav
          ref={sideNavRef}
          style={{
            width: displayHamburgerMenu === true ? `80vw` : `0vw`,
          }}
        >
          <header-side-nav-container>
            <Link to={`/`}>
              <Images name={`icon.logo`} width={60} height={60} />
            </Link>

            <CloseOutlined
              onClick={() => setDisplayHamburgerMenu(false)}
              style={{
                cursor: `pointer`,
                fontSize: `1.2rem`,
                color: theme === `light` ? colors.white : colors.black,
              }}
            />
          </header-side-nav-container>

          <content-side-nav-container>
            {listMenu.map((menu, index) => {
              return (
                <Link
                  to={menu.link}
                  key={index}
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    setDisplayHamburgerMenu(false);
                  }}
                >
                  {menu.name}
                  <div
                    style={{
                      border: `1px solid lightgray`,
                      marginTop: 5,
                    }}
                  />
                </Link>
              );
            })}
          </content-side-nav-container>

          <footer-side-nav-container>
            {languageDropdown({ marginLeft: 0 })}
            {themeDropdown()}
            {/* <button>login</button> */}
          </footer-side-nav-container>
        </Styles.SideNav>
      </>
    );
  };
  const renderLanguageDropdown = () => {
    return (
      <Styles.SelectedSection>{languageDropdown()}</Styles.SelectedSection>
    );
  };
  const renderThemeDropdown = () => {
    return <Styles.SelectedSection>{themeDropdown()}</Styles.SelectedSection>;
  };
  const languageDropdown = (style = {}) => {
    return (
      <Select
        value={language}
        onChange={(value) => dispatch(editLanguage(value))}
        style={{
          marginLeft: 20,
          ...style,
          fontFamily: fontFamily.primary,
          fontSize: fontSize.text,
        }}
      >
        <Option value="en">EN</Option>
        <Option value="th">TH</Option>
      </Select>
    );
  };
  const themeDropdown = (style = {}) => {
    return (
      <Select
        value={theme}
        onChange={(value) => dispatch(editTheme(value))}
        style={{
          marginLeft: 20,
          ...style,
          fontFamily: fontFamily.primary,
          fontSize: fontSize.text,
        }}
      >
        <Option value="light">Light</Option>
        <Option value="dark">Dark</Option>
      </Select>
    );
  };

  return (
    <>
      <Styles.MenuContainer>
        {renderLogo()}
        <div style={{ display: `flex`, alignItems: "center" }}>
          {renderMenu()}
          {renderHamburgerMenu()}
          {renderLanguageDropdown()}
          {renderThemeDropdown()}
        </div>
      </Styles.MenuContainer>

      <Styles.PageContainer>
        <div
          style={{
            opacity: displayHamburgerMenu === true ? 0.3 : 1,
          }}
        >
          {children}
        </div>
      </Styles.PageContainer>
    </>
  );
};
export default Layout;
