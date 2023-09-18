import { Container, Input, Button } from "./Styled";

const DisabledInput = ({
  count,
  name,
}: {
  count: number | "";
  name: string;
}) => {
  return (
    <Container>
      <Button className="disabled">-</Button>
      <Input name={name} type="text" value={count} disabled />
      <Button className="disabled">+</Button>
    </Container>
  );
};

export default DisabledInput;
