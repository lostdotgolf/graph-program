import { web3 } from "@project-serum/anchor";
import { GraphProgram } from "./program";

export const getAllConnectionsTo = (to: web3.PublicKey) =>
  GraphProgram.account.connection.all([
    {
      memcmp: {
        offset: 8 + 32,
        bytes: to.toBase58(),
      },
    },
  ]);

export const getAllConnectionsFrom = (from: web3.PublicKey) =>
  GraphProgram.account.connection.all([
    {
      memcmp: {
        offset: 8,
        bytes: from.toBase58(),
      },
    },
  ]);
