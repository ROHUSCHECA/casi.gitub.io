const c = [
  "BTC",
  "ETH",
  "BNB",
  "XRP",
  "ADA",
  "LUNA",
  "SOL",
  "AVAX",
  "DOT",
  "DOGE",
  "MATIC",
  "LTC",
  "ATOM",
  "NEAR",
  "LINK",
  "UNI",
  "FTT",
  "BCH",
  "TRX",
  "ETC",
  "ALGO",
  "XLM",
  "MANA",
  "HBAR",
  "AXS",
  "SAND",
  "VET",
  "XMR",
  "FTM",
  "FIL",
  "WAVES",
  "THETA",
  "RUNE",
  "XTZ",
  "ZEC",
  "EOS",
  "AAVE",
  "CAKE",
  "MKR",
  "GRT",
  "BTT",
  "ONE",
  "STX",
  "NEO",
  "CHZ",
  "ENJ",
  "LRC",
  "KSM",
  "DASH",
  "CELO",
  "BAT",
  "CRV",
  "XEM",
  "TFUEL",
  "ROSE",
  "HOT",
  "IOTX",
  "DCR",
  "COMP",
  "SXP",
  "OMG",
  "BNT",
  "1INCH",
  "ANKR",
  "ICX",
  "RVN",
  "AUDIO",
  "ZIL",
  "KAVA",
  "PAXG",
  "SNX",
  "ZEN",
  "KNC",
  "UMA",
  "ZRX",
  "IOST",
  "ONT",
  "SKL",
  "SUSHI",
  "STORJ",
  "SRM",
  "HIVE",
  "JST",
  "REN",
  "DGB",
  "OCEAN",
  "CKB",
  "FET",
  "CELR",
  "WIN",
  "DENT",
  "LSK",
  "INJ",
  "CHR",
  "COTI",
  "WRX",
  "OGN",
  "ONG",
  "RSR",
  "CVC",
  "ARDR",
  "ACM",
  "AION",
  "AKRO",
  "ALICE",
  "ALPACA",
  "ALPHA",
  "ANT",
  "ARPA",
  "AR",
  "ASR",
  "ATA",
  "ATM",
  "AUTO",
  "AVA",
  "BADGER",
  "BAKE",
  "BAL",
  "BAND",
  "BAR",
  "BCC",
  "BCHABC",
  "BEAM",
  "BEL",
  "BLZ",
  "BOND",
  "BTCST",
  "BTS",
  "BURGER",
  "BZRX",
  "C98",
  "CFX",
  "CLV",
  "COCOS",
  "COS",
  "CTXC",
  "CTSI",
  "CTK",
  "DATA",
  "DEGO",
  "DEXE",
  "DIA",
  "DNT",
  "DOCK",
  "DODO",
  "DREP",
  "DUSK",
  "EGLD",
  "EPS",
  "ERD",
  "ERN",
  "FARM",
  "FIDA",
  "FIO",
  "FIRO",
  "FIS",
  "FLM",
  "FLOW",
  "FORTH",
  "FOR",
  "FUN",
  "GALA",
  "GHST",
  "GTC",
  "GTO",
  "GXS",
  "HARD",
  "HC",
  "HNT",
  "ICP",
  "IDEX",
  "ILV",
  "IOTA",
  "IRIS",
  "JST",
  "JUV",
  "KEEP",
  "KEY",
  "KLAY",
  "KMD",
  "LINA",
  "LIT",
  "LPT",
  "LTO",
  "MASK",
  "MBL",
  "MBOX",
  "MCO",
  "MDT",
  "MDX",
  "MFT",
  "MINA",
  "MIR",
  "MITH",
  "MLN",
  "MTL",
  "NANO",
  "NBS",
  "NKN",
  "NMR",
  "NPX",
  "NULS",
  "NU",
  "OG",
  "OM",
  "ORN",
  "OXT",
  "PAX",
  "PERL",
  "PERP",
  "PHA",
  "PNT",
  "POLS",
  "POLY",
  "POND",
  "PSG",
  "PUNDIX",
  "QNT",
  "QTUM",
  "QUICK",
  "RAMP",
  "RAY",
  "REEF",
  "REP",
  "REQ",
  "RIF",
  "RLC",
  "SC",
  "SFP",
  "SHIB",
  "SLP",
  "STMX",
  "STORM",
  "STPT",
  "STRAT",
  "STRAX",
  "SUN",
  "SUPER",
  "SYS",
  "TCT",
  "TKO",
  "TLM",
  "TOMO",
  "TORN",
  "TRB",
  "TRIBE",
  "TROY",
  "TRU",
  "TVK",
  "TWT",
  "UNFI",
  "UTK",
  "VIDT",
  "VITE",
  "VTHO",
  "WAN",
  "WAXP",
  "WING",
  "WNXM",
  "WTC",
  "XEC",
  "XVG",
  "XVS",
  "XZC",
  "YFII",
  "YFI",
  "YGG",
];

const d = [
  "ADA-PERP",
  "ATOM-PERP",
  "BNB-PERP",
  "BTC-PERP",
  "DOT-PERP",
  "ETH-PERP",
  "FTT-PERP",
  "LTC-PERP",
  "MATIC-PERP",
  "SOL-PERP",
];

export const getCrypto = (val) => {
  return c[val];
};

export const getDriftCrypto = (val) => {
  return d[val];
};
