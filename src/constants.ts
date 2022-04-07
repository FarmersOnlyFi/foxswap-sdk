import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum Blockchain {
  ETHEREUM = 1,
  BINANCE_SMART_CHAIN = 2,
  HARMONY = 3
}

export enum Protocol {
  FOXSWAP = 1,
  DEFIKINGDOMS = 2,
  DEFIRA = 3,
  SUSHISWAP = 4,
  VIPERSWAP = 5
}

export enum ChainId {
  HARMONY_MAINNET = 1666600000,
  HARMONY_TESTNET = 1666700000
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESSES: { [protocol in Protocol]: string } = {
  [Protocol.FOXSWAP]: '0xfA53b963A39621126bf45F647F813952cD3c5C66',
  [Protocol.DEFIKINGDOMS]: '0x9014B937069918bd319f80e8B3BB4A2cf6FAA5F7',
  [Protocol.DEFIRA]: '0xF166939E9130b03f721B0aE5352CCCa690a7726a',
  [Protocol.SUSHISWAP]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [Protocol.VIPERSWAP]: '0x7D02c116b98d0965ba7B642ace0183ad8b8D2196'
}

export const ROUTER_PROTOCOL_ADDRESSES: { [protocol in Protocol]: string } = {
  [Protocol.FOXSWAP]: '0x32253394e1C9E33C0dA3ddD54cDEff07E457A687',
  [Protocol.DEFIKINGDOMS]: '0x24ad62502d1c652cc7684081169d04896ac20f30',
  [Protocol.DEFIRA]: '0x3C8BF7e25EbfAaFb863256A4380A8a93490d8065',
  [Protocol.SUSHISWAP]: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
  [Protocol.VIPERSWAP]: '0xf012702a5f0e54015362cBCA26a26fc90AA832a3'
}

export const INIT_CODE_HASH: { [protocol in Protocol]: string } = {
  [Protocol.FOXSWAP]: '0x6be983fca8cd114a38e7c87a92f0bf4c13f5e8e006242d62f7277ca478e65ffe',
  [Protocol.DEFIKINGDOMS]: 'f1c21a825f13eff153022ddea53156462dd79972b6f88adf06f79ca8b042c3c1',
  [Protocol.DEFIRA]: '8e129668eb66a23d5dbb072b9b801a6ca1147df379e11546ad4ac19e28557e6c',
  [Protocol.SUSHISWAP]: 'e18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [Protocol.VIPERSWAP]: '162f79e638367cd45a118c778971dfd8d96c625d2798d3b71994b035cfe9b6dc'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _9970 = JSBI.BigInt(9970)
export const _9975 = JSBI.BigInt(9975)
export const _1000 = JSBI.BigInt(10000)

export const PROTOCOL_FEE: { [protocol in Protocol]: JSBI } = {
  [Protocol.FOXSWAP]: _9975,
  [Protocol.DEFIKINGDOMS]: _9970,
  [Protocol.DEFIRA]: _9970,
  [Protocol.SUSHISWAP]: _9970,
  [Protocol.VIPERSWAP]: _9970
}

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
