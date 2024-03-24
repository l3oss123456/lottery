import React from "react";
import RandomNumber from "../../Components/RandomNumber";
import Styled from "./styled";
import { Strings } from "../../Services/Utils/Locals";
import Images from "../../Components/Images";

const Home = () => {
  const renderHeader = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* {Strings.getString("homePage.header")} */}
        <Images name={`banner.home`} />
      </div>
    );
  };

  return (
    <Styled.HomeContainer>
      {renderHeader()}

      <Styled.RandomContainer>
        <RandomNumber />
      </Styled.RandomContainer>
    </Styled.HomeContainer>
  );
};

export default Home;
