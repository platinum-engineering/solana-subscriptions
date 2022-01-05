use anchor_lang::prelude::*;

declare_id!("Sa6EvTGHfMZvDsfmhhJiMSquDxUs1YbgAuAyvUZaghh");

#[program]
pub mod solana_subscriptions {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
