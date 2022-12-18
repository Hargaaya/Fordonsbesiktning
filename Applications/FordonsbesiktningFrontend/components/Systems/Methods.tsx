import { Bolden, Header, ItemWrapper, Wrapper } from "../../style/styles";
import { isEmpty } from "../../util/helpers";

type Props = {
  methods: Methods[];
};

// TODO: complete methods component
const Methods = ({ methods }: Props) => {
  return (
    <>
      {!isEmpty(methods) && (
        <Wrapper>
          <Header>Metoder</Header>
          {methods.map((item, index) => (
            <ItemWrapper key={index}>
              <Bolden>{item.type}</Bolden>
              <p>{item.description}</p>
            </ItemWrapper>
          ))}
        </Wrapper>
      )}
    </>
  );
};

export default Methods;
