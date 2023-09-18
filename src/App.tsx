import RoomAllocation from "../components/RoomAllocation/RoomAllocation";
import { GUEST, ROOM } from "../common/constants";

export default function App() {
  return (
    <div>
      <RoomAllocation guest={GUEST} room={ROOM} />
    </div>
  );
}
