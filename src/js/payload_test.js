import { beginCell } from '@ton/ton'

const body_test = beginCell()
  .storeUint(0, 32) // write 32 zero bits to indicate that a text comment will follow
  .storeStringTail("Hello, TON!") // write our text comment
  .endCell();