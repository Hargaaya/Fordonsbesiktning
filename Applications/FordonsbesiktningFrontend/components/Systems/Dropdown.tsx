import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { hasComponentData } from "../../util/helpers";
import Assessment from "./Assessment";
import Methods from "./Methods";
import Controls from "./Controls";
import { Wrapper } from "../../style/styles";
import Arrow from "../../assets/Arrow";

type Props = {
  data: ControlProgram[];
};

const SystemDropdown = ({ data }: Props) => (
  <>
    {data.map((item) => (
      <Dropdown size="big" itemData={item} key={item.id} />
    ))}
  </>
);

//
// Dropdown
//

type DropdownProps = {
  itemData: ControlProgram;
  size: "big" | "small";
};

const Dropdown = ({ itemData, size }: DropdownProps) => {
  const dynamicRoute = useRouter().asPath;
  const [toggleContent, setToggleContent] = useState(false);
  const [hasData, setHasData] = useState(false);
  const [expand, setExpand] = useState(false);

  function toggle() {
    setExpand(!expand);
    setToggleContent(!toggleContent);
  }

  useEffect(() => {
    setHasData(hasComponentData(itemData));
    setToggleContent(false);
  }, [dynamicRoute, itemData]);

  return (
    <DropdownContainer size={size}>
      <DropDownHeader onClick={hasData ? () => toggle() : undefined} size={size} clickable={hasData}>
        <DropdownTitle size={size}>
          {itemData.id} {itemData.name}
        </DropdownTitle>
        {hasData && <Arrow spin={expand} />}
      </DropDownHeader>
      {hasData && <DropdownContent show={toggleContent} data={itemData} />}
      {itemData.subsystems.map((item, index) => (
        <Dropdown size="small" itemData={item} key={index} />
      ))}
    </DropdownContainer>
  );
};

//
// DropdownContent
//

type DropdownContentProps = {
  show: boolean;
  data: ControlProgram;
};

const DropdownContent = ({ show, data }: DropdownContentProps) => {
  return (
    <>
      {show && (
        <Wrapper>
          <Controls controlpoints={data.control} />
          <Methods methods={data.method} />
          <Assessment assessment={data.assessment} />
        </Wrapper>
      )}
    </>
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

export default SystemDropdown;
