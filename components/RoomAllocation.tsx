import React from "react";
import CustomerInput from "./CustomerInput";

const RoomAllocation = () => {
  return (
    <div style={{ padding: "500px" }}>
      <div>大人</div>
      <CustomerInput value={1} min={1} max={24} step={2} />
      <div>小孩</div>
      <CustomerInput value={0} min={0} max={23} />
      <div>原生</div>
      <input type="number" />
    </div>
  );
};

export default RoomAllocation;
