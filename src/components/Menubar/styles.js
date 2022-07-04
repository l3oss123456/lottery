import styled from "styled-components";
import responsive from "../../utils/responsive";
import { getLocalStorage } from "../../utils/storage";

export default {
  PageContainer: styled.div`
    font-family: ${(props) => props.theme.fontFamily.primary};
    padding: 130px 8% 20px;
    background-color: ${(props) =>
      getLocalStorage(`theme`) === `light`
        ? props.theme.colors.white
        : props.theme.colors.primary};
    color: ${(props) =>
      getLocalStorage(`theme`) === "light"
        ? props.theme.colors.black
        : props.theme.colors.white};
    width: 100vw;
    height: 100vh;
    overflow: auto;
    transition: all 0.5s ease-out;
    position: relative;
    // z-index: 0;
  `,
  MenuContainer: styled.div`
    background-color: ${(props) =>
      getLocalStorage(`theme`) === "light"
        ? props.theme.colors.black
        : props.theme.colors.blackRussian};
    position: -webkit-fixed;
    position: fixed;
    top: 0;
    width: 100vw;
    padding: 15px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s ease-out;
    z-index: 100;

    @media ${responsive.sm} {
      padding: 15px 3%;
    }

    @media (max-width: 300px) {
      padding: 15px 10px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  `,
  LogoSection: styled.div`
    cursor: pointer;

    @media ${responsive.xs} {
      display: none;
    }
  `,
  MenuSection: styled.div`
    display: flex;

    @media (max-width: 576px) {
      display: none;
    }
  `,
  HamburgerSection: styled.div`
    display: none;
    position: relative;

    @media ${responsive.xs} {
      display: flex;
      justify-content: flex-end;
    }
  `,
  SideNav: styled.div`
    height: 100%;
    width: 0;
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${(props) =>
      getLocalStorage(`theme`) === `light`
        ? props.theme.colors.black
        : props.theme.colors.white};
    overflow-x: hidden;
    transition: 0.5s;

    header-side-nav-container {
      width: 100%;
      padding: 5% 5% 0px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    content-side-nav-container {
      margin: 8% 5% 0%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      a {
        font-family: ${(props) => props.theme.fontFamily.primary};
        font-size: ${(props) => props.theme.fontSize.subTitle};
        // line-height: 2.5rem;
        color: ${(props) =>
          getLocalStorage(`theme`) === "light"
            ? props.theme.colors.white
            : props.theme.colors.black};
        margin: 10px 0px;
        text-decoration: none;
        transition: 0.3s;

        &:hover {
          opacity: 0.3;
        }
      }
    }

    footer-side-nav-container {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 0% 5% 5%;
      display: flex;
      flex-wrap: wrap;
    }
  `,
  SelectedSection: styled.div`
    @media ${responsive.xs} {
      display: none;
    }
  `,
  Menu: styled.div`
    font-size: ${(props) => props.theme.fontSize.subTitle};
    font-family: ${(props) => props.theme.fontFamily.primary};
    cursor: pointer;
    transition: 0.2s ease-in;
    color: white;

    &:hover {
      opacity: 0.6;
    }
  `,
};