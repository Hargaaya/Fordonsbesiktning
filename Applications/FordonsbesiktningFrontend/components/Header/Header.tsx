import React from "react";
import styled from "styled-components";
import SelectionContainer from "../SelectionContainer/SelectionContainer";
import MenuItem from "../MenuItem/MenuItem";
import systems from "../../util/systems.json";
import Link from "next/link";
import Hamburger from "../../assets/Hamburger";
import User from "../../assets/User";
import Magnifier from "../../assets/Magnifier";

const Header = () => {
  const [showSystemMenu, setShowSystemMenu] = React.useState(false);
  const [showUserMenu, setShowUserMenu] = React.useState(false);

  return (
    <BlurAndBackground>
      <Container>
        <HeaderSelection
          onMouseOver={() => {
            setShowSystemMenu(true);
          }}
          onMouseOut={() => {
            setShowSystemMenu(false);
          }}
        >
          <HeaderIcon>
            <Hamburger />
          </HeaderIcon>
          <SelectionContainer show={showSystemMenu}>
            {systems.map((item, i) => (
              <Link href={`/system/${item.name}`} key={i}>
                <MenuItem text={item.id + " " + item.name} />
              </Link>
            ))}
          </SelectionContainer>
        </HeaderSelection>
        <SearchbarPlaceholder>
          Sök <Magnifier />
        </SearchbarPlaceholder>
        <HeaderSelection
          onMouseOver={() => {
            setShowUserMenu(true);
          }}
          onMouseOut={() => {
            setShowUserMenu(false);
          }}
        >
          <HeaderIcon>
            <User />
          </HeaderIcon>
          <SelectionContainer right={0} show={showUserMenu}>
            <Link href="#">
              <MenuItem text="Skapa nytt konto" />
            </Link>
            <Link href="#">
              <MenuItem text="Logga in" />
            </Link>
          </SelectionContainer>
        </HeaderSelection>
      </Container>
    </BlurAndBackground>
  );
};

/* Required to get nested backdrop-filters to work */
const BlurAndBackground = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 60px;
  background: rgba(200, 200, 200, 0.4);
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-l);

  &::before {
    padding: 10px 40px;
    z-index: -2;
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(4px);
  }
`;

const Container = styled.span`
  padding: 10px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderIcon = styled.div`
  padding: 10px;
  user-select: none;
  &:hover {
    cursor: pointer;
    box-shadow: var(--shadow-m);
    border-radius: 10px;
    background: rgba(240, 240, 240, 0.6);
  }
`;

const HeaderSelection = styled.span`
  position: relative;
`;

const SearchbarPlaceholder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark-grey);
  border: 1px solid var(--border-color);
  border-radius: 25px;
  height: 32px;
  width: 345px;
  padding: 0 15px;
  user-select: none;
`;

export default Header;
