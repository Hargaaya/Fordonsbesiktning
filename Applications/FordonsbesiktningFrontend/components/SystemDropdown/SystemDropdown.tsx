import React from "react";
import styled from "styled-components";

type Props = {
  size: "big" | "small";
  header: string;
  systemId: string;
  children?: JSX.Element | JSX.Element[];
};

const SystemDropdown = ({ size, header, systemId, children }: Props) => {
  return <div>SystemDropdown</div>;
};

const Container = styled.div``;

export default SystemDropdown;
