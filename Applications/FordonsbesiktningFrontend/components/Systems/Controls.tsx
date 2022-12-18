import { Bolden, Header, ItemWrapper, Wrapper } from "../../style/styles";
import { isEmpty, isNull, readableList } from "../../util/helpers";

// TODO: Add icon helper class and determine icons for controls & methods.
type Props = {
  controlpoints: Controls[];
};

const Control = ({ controlpoints }: Props) => {
  return (
    <>
      {!isEmpty(controlpoints) && (
        <Wrapper>
          <Header>Kontroll</Header>
          {controlpoints.map((item, index) => (
            <ItemWrapper key={index}>
              <Bolden>
                {!isNull(item.point) && item.point} {!isNull(item.points) && readableList(item.points)}
              </Bolden>
              <p>{item.detail}</p>
            </ItemWrapper>
          ))}
        </Wrapper>
      )}
    </>
  );
};

export default Control;
