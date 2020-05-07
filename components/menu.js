import React from "react";
import style from "styled-components";
import styled from "styled-components";

class Menu extends React.Component {
  componentDidMount() {
    console.log("isahos");
  }
  render() {
    return (
      <Container>
        <Cover></Cover>
        <Content></Content>
      </Container>
    );
  }
}
export default Menu;

const Container = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: green;
  z-index: 100;
`;

const Cover = styled.View``;

const Content = styled.View``;
