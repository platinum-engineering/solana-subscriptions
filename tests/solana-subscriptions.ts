import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { SolanaSubscriptions } from '../target/types/solana_subscriptions';

describe('solana-subscriptions', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.SolanaSubscriptions as Program<SolanaSubscriptions>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
