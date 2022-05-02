import { Transaction } from "../services/TransactionsService";

const defaults = {
  publicAddress: "0xb701FdCc9Db05d5AD0d7B6aAbb42DBf09ec28Ad0",
  accountName: "Account1",
  accountBalance: 3.405,
  ethPrice: 1700,
  pastTransactions: [
    {
      id: 1,
      date: new Date(),
      value: 3,
      to: "0xb701FdCc9Db05d5AD0d7B6aAbb42DBf09ec28Ad0",
      from: "0x8341deb328e91796c2976f88db210f0e73187782",
    },
    {
      id: 2,
      date: new Date(),
      value: 2,
      to: "0xb701FdCc9Db05d5AD0d7B6aAbb42DBf09ec28Ad0",
      from: "0x8341deb328e91796c2976f88db210f0e73187782",
    },
    {
      id: 3,
      date: new Date(),
      value: 3,
      to: "0xb701FdCc9Db05d5AD0d7B6aAbb42DBf09ec28Ad0",
      from: "0x8341deb328e91796c2976f88db210f0e73187782",
    },
  ] as Array<Transaction>,
};

export default defaults;
