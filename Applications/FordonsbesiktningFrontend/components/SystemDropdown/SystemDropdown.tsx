import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ControlProgram, Controls, Methods } from "../../util/types";
import arrowUrl from "../../public/assets/arrow.svg";
import { useRouter } from "next/router";
import { hasComponentData, isEmpty, isNull, readableList } from "../../util/helpers";

type Props = {
  data: ControlProgram[];
};

const SystemDropdown = ({ data }: Props) => {
  return (
    <Container>
      {data.map((item) => (
        <Dropdown size="big" itemData={item} key={item.id} />
      ))}
    </Container>
  );
};

const Container = styled.div``;

//
// Dropdown
//

// TODO: Add animation to arrow icon, check and fix arrow state bug.
type DropdownProps = {
  itemData: ControlProgram;
  size: "big" | "small";
};

const Dropdown = ({ itemData, size }: DropdownProps) => {
  const dynamicRoute = useRouter().asPath;
  const [toggleContent, setToggleContent] = useState(false);
  const [hasData, setHasData] = useState(false);
  const [spin, setSpin] = useState(false);
  const toggleArrow = useRef(null);

  function toggle() {
    setSpin(!spin);
    setToggleContent(!toggleContent);
  }

  useEffect(() => {
    setHasData(hasComponentData(itemData));
    setToggleContent(false);
  }, [dynamicRoute, itemData]);

  return (
    <DropdownContainer size={size}>
      <DropDownHeader onClick={hasData ? () => toggle() : undefined} size={size} clickable={hasData}>
        <DropdownTitle size={size}>{itemData.id + " " + itemData.name}</DropdownTitle>
        {hasData && (
          <ImageWrapper ref={toggleArrow} spin={spin}>
            <Image src={arrowUrl} alt="arrow" />
          </ImageWrapper>
        )}
      </DropDownHeader>
      {hasData && <DropdownContent show={toggleContent} data={itemData} />}
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
  cursor: ${(props) => (props.clickable ? "pointer" : "")};
`;

const DropdownTitle = styled.h3`
  font-weight: ${(props) => (props.size === "small" ? 400 : 500)};
  font-size: ${(props) => (props.size === "small" ? "1em" : "1.1em")}; ;
`;

const ImageWrapper = styled.span`
  transform: ${(props) => (props.spin ? "scale(1, -1)" : "scale(-1, 1)")};
`;

//
// DropdownContent
//

type DropdownContentProps = {
  show: boolean;
  data: ControlProgram;
};

// TODO: More abstractions? Move out some components, rename directory.

const DropdownContent = ({ show, data }: DropdownContentProps) => {
  return (
    <>
      {show && (
        <Wrapper>
          <Control controlpoints={data.control} />
          <Method methods={data.method} />
          <Assessment assessment={data.assessment} />
        </Wrapper>
      )}
    </>
  );
};

// TODO: Add icon helper class and determine icons for controls & methods.
type ControlProps = {
  controlpoints: Controls[];
};

const Control = ({ controlpoints }: ControlProps) => {
  return (
    <>
      {!isEmpty(controlpoints) && (
        <Wrapper>
          <Header>Kontroll</Header>
          {controlpoints.map((item, index) => (
            <ControlWrapper key={index}>
              <Bolden>
                {!isNull(item.point) && item.point} {!isNull(item.points) && readableList(item.points)}
              </Bolden>
              <p>{item.detail}</p>
            </ControlWrapper>
          ))}
        </Wrapper>
      )}
    </>
  );
};

const ControlWrapper = styled.p`
  display: flex;
  flex-direction: row;
`;

// TODO: complete methods component
type MethodProps = {
  methods: Methods[];
};

const Method = ({ methods }: MethodProps) => {
  return (
    <>
      {!isEmpty(methods) && (
        <Wrapper>
          <Header>Metoder</Header>
        </Wrapper>
      )}
    </>
  );
};

// TODO: complete assessment component
type AssessmentProps = {
  assessment: string;
};

const Assessment = ({ assessment }: AssessmentProps) => {
  return (
    <>
      {!isNull(assessment) && (
        <Wrapper>
          <Header>Bedömning</Header>
          <p>{assessment}</p>
        </Wrapper>
      )}
    </>
  );
};

const Bolden = styled.b`
  font-weight: 500;
  margin-right: 2px;
`;

const Wrapper = styled.div`
  margin: 10px;
`;

const Header = styled.h2`
  background-image: var(--text-fade);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.2em;
`;

export default SystemDropdown;
