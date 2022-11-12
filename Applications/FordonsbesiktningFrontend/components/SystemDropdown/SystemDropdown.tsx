import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { SystemData } from "../../pages/system/[system]";
import arrowUrl from "../../public/assets/arrow.svg";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

type Props = {
  data: SystemData[];
};

const SystemDropdown = ({ data }: Props) => {
  return (
    <Container>
      {data.map((item, index) => (
        <Dropdown size="big" itemData={item} key={index} />
      ))}
    </Container>
  );
};

const Container = styled.div``;

//
// Dropdown
//

type DropdownProps = {
  itemData: SystemData;
  size: "big" | "small";
};

const Dropdown = ({ itemData, size }: DropdownProps) => {
  const dynamicRoute = useRouter().asPath;
  const [toggleContent, setToggleContent] = useState(false);
  const toggleArrow = useRef(null);

  function toggle(e) {
    toggleArrow.current.style.transform += "scale(1, -1)";
    setToggleContent(!toggleContent);
  }

  useEffect(() => {
    setToggleContent(false);
    toggleArrow.current.style.transform += "scale(-1, 1)";
  }, [dynamicRoute]);

  // TODO: Disable dropdown if there is no content to show.
  // -> helper functions.
  return (
    <DropdownContainer size={size}>
      <DropDownHeader onClick={(e) => toggle(e)} size={size}>
        <DropdownTitle size={size}>{itemData.id + " " + itemData.name}</DropdownTitle>
        <ImageWrapper ref={toggleArrow}>
          <Image src={arrowUrl} alt="arrow" />
        </ImageWrapper>
      </DropDownHeader>
      <DropdownContent show={toggleContent} data={itemData} />
      {itemData.subsystems.map((item, index) => (
        <Dropdown size="small" itemData={item} key={index} />
      ))}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  margin: ${(props) => (props.size === "small" ? "12px 0" : "16px 0")};
`;

const DropDownHeader = styled.div`
  background: var(--purple-fade);
  border-radius: 25px;
  color: white;
  height: ${(props) => (props.size === "small" ? "32px" : "36px")};
  width: ${(props) => (props.size === "small" ? "80%" : "100%")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: var(--shadow-m);
  user-select: none;
  cursor: pointer;
`;

const DropdownTitle = styled.h3`
  font-weight: ${(props) => (props.size === "small" ? 400 : 500)};
  font-size: ${(props) => (props.size === "small" ? "1em" : "1.1em")}; ;
`;

const ImageWrapper = styled.span``;

//
// DropdownContent
//

type DropdownContentProps = {
  show: boolean;
  data: SystemData;
};

// TODO: implement content component, create helper-
// functions for control and methods images. Abstractions?

const DropdownContent = ({ show, data }: DropdownContentProps) => {
  console.log(data);
  return (
    <>
      {" "}
      {show && (
        <ContentContainer>
          <Header>Kontroll</Header>
          {data.control.map((item, index) => (
            <p key={index}>{item.point + " " + item.description}</p>
          ))}
          <Header>Metod</Header>
          {data.method.map((item, index) => (
            <p key={index}>{item.type + " " + item.description}</p>
          ))}
          <Header>Bedömning</Header>
          <p>{data.assessment}</p>
        </ContentContainer>
      )}
    </>
  );
};

const ContentContainer = styled.div`
  margin: 10px 20px;
`;
const Header = styled.h2`
  background-image: var(--text-fade);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.2em;
`;

export default SystemDropdown;
