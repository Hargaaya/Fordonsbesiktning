import React from "react";
import Image from "next/image";
import hamburger from "../../public/assets/hamburger-menu.svg";
import user from "../../public/assets/user.svg";
import search from "../../public/assets/search.svg";
import styled from "styled-components";
import SelectionContainer from "../SelectionContainer/SelectionContainer";
import MenuItem from "../MenuItem/MenuItem";
import systems from "../../util/systems.json";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
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
            <Image src={hamburger} alt="menu icon" width={19} height={15} />
          </HeaderIcon>
          <SelectionContainer show={showSystemMenu}>
            {systems.map((item, i) => (
              <Link href={`/system/${item.name}`} key={i}>
                <MenuItem text={item.name} />
              </Link>
            ))}
          </SelectionContainer>
        </HeaderSelection>
        <SearchbarPlaceholder>
          Sök <Image src={search} alt="search icon" height={16} width={16} />
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
            <Image
              src={user}
              alt="user icon"
              width={20}
              height={20}
              onClick={() => {
                console.log("user click");
              }}
            />
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
