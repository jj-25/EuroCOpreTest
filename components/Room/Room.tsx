import CustomerInput from "../CustomerInput/CustomerInput";
import {
  MAX_GUEST_EACH_ROOM,
  ADULT_INITIAL_VALUE,
  ADULT_MIN,
  CHILD_INITIAL_VALUE,
  CHILD_MIN,
  CHILD_MAX,
  GUEST,
  ROOM,
} from "../../common/constants";
import { Container, Box, Title, AgeText } from "./Styled";

type RoomProps = {
  index: number;
  adultCount: number;
  childCount: number;
};

const Room = ({ index, adultCount, childCount }: RoomProps) => {
  const maxAdult = MAX_GUEST_EACH_ROOM - childCount;
  const maxChild = Math.min(MAX_GUEST_EACH_ROOM - adultCount, CHILD_MAX);

  //@ts-ignore
  const disabledInput = GUEST === ROOM;

  return (
    <Container>
      <Title>房間 {adultCount + childCount} 人</Title>
      <Box>
        <div>
          大人<AgeText>年齡 20+</AgeText>
        </div>
        <CustomerInput
          index={index}
          value={ADULT_INITIAL_VALUE}
          min={ADULT_MIN}
          max={maxAdult}
          disabled={disabledInput}
        />
      </Box>
      <Box>
        <div>小孩</div>
        <CustomerInput
          isChild
          index={index}
          value={CHILD_INITIAL_VALUE}
          min={CHILD_MIN}
          max={maxChild}
          disabled={disabledInput}
        />
      </Box>
    </Container>
  );
};

export default Room;
