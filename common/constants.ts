/**
 * NOTE:
 * 測試時 GUEST & ROOM 在此更改。
 */
const GUEST = 10; //住客數
const ROOM = 3; //房間數

/** Room Initial Value & Limit Value */
const MAX_GUEST_EACH_ROOM = 4; // 固定為四人房
const ADULT_INITIAL_VALUE = 1; // 大人初始值 1
const ADULT_MIN = 1; //大人最少 1 位
const CHILD_INITIAL_VALUE = 0; //小孩初始值 0
const CHILD_MIN = 0; //小孩最少 0 位
const CHILD_MAX = MAX_GUEST_EACH_ROOM - ADULT_MIN; //小孩最少 n 位

export {
  GUEST,
  ROOM,
  MAX_GUEST_EACH_ROOM,
  ADULT_INITIAL_VALUE,
  ADULT_MIN,
  CHILD_INITIAL_VALUE,
  CHILD_MIN,
  CHILD_MAX,
};
