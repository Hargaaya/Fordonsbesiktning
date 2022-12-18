import { Header, Wrapper } from "../../style/styles";
import { isNull } from "../../util/helpers";

// TODO: complete assessment component
type Props = {
  assessment: string;
};

const Assessment = ({ assessment }: Props) => {
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

export default Assessment;
