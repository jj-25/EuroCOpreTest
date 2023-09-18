import { useImmer } from "use-immer";
import Room from "../Room/Room";
import Context from "../../context";
import {
  ADULT_INITIAL_VALUE,
  CHILD_INITIAL_VALUE,
} from "../../common/constants";

import { Container, Title, RoomContainer, RestGuestBox } from "./Styled";

type RoomAllocation = {
  guest: number;
  room: number;
};

const RoomAllocation = ({ guest, room }: RoomAllocation) => {
  const [result, setResult] = useImmer(
    Array(room)
      .fill("")
      .map(() => {
        return { adult: ADULT_INITIAL_VALUE, child: CHILD_INITIAL_VALUE };
      })
  );

  const currentAdultSum = result
    .map((e) => Number(e.adult))
    .reduce((a, b) => a + b);

  const currentChildSum = result
    .map((e) => Number(e.child))
    .reduce((a, b) => a + b);

  const restGuest = guest - currentAdultSum - currentChildSum;

  return (
    <Context.Provider value={{ result, restGuest, setResult }}>
      <Container>
        <Title>
          住客人數 {guest} 人 / {room} 房
        </Title>
        <RestGuestBox>尚未分配人數 {restGuest} 人</RestGuestBox>
        <RoomContainer>
          {result.map((el, i) => (
            <Room
              key={i}
              index={i}
              adultCount={Number(el.adult)}
              childCount={Number(el.child)}
            />
          ))}
        </RoomContainer>
      </Container>
    </Context.Provider>
  );
};

export default RoomAllocation;
