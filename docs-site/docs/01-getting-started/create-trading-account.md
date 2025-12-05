---
id: create-trading-account
title: Create a Trading Account
sidebar_label: Create Trading Account
---

# Create a Trading Account


## What a Trading Account Is


A trading account in TradeMonkey is a container that tracks trades, balances, and performance for a single trading environment. Each account represents one broker account, prop firm challenge, funded account, or personal trading setup.


TradeMonkey supports three account types:


- **Challenge**: Prop firm evaluation accounts (FTMO, MyForexFunds, etc.)
- **Funded**: Accounts you passed and are now trading live
- **Personal**: Your own capital, not tied to a prop firm


Each account maintains its own balance history, rule set, and analytics. Trades are always linked to exactly one account.


## Why Multi-Account Support Matters


Prop traders commonly manage multiple challenge accounts simultaneously. Each account has its own:


- Starting balance and current equity
- Daily loss limits and max drawdown rules
- Profit targets and minimum trading day requirements
- Psychological context (challenge vs funded behavior often differs)


Without multi-account separation, your analytics mix different risk profiles, rule sets, and emotional states. A $10K challenge account and a $200K funded account require different discipline frameworks. TradeMonkey isolates them.


## Required Fields


Every account needs:


- **Account Name**: A label you'll recognize (e.g., "FTMO 100K Phase 1", "Funded MFF", "Personal NinjaTrader")
- **Account Type**: Challenge, Funded, or Personal
- **Starting Balance**: The initial equity when the account was opened
- **Currency**: USD, EUR, GBP, etc. (used for P&L calculations and display)


## Optional Fields (Prop Firm Compliance)


For challenge and funded accounts, you can define:


- **Daily Loss Limit**: Maximum loss allowed in a single day before breach
- **Max Drawdown**: Maximum cumulative loss from high water mark
- **Drawdown Type**: How drawdown is calculated (static, end-of-day trailing, or intraday trailing)
- **Profit Target**: Challenge passing requirement
- **Minimum Trading Days**: Number of active days required to pass


These fields enable the Rules vs Reality engine to flag compliance breaches automatically.


## How Account Choice Affects Your Data


### Analytics Scope
All analytics can be filtered by account. If you view "Win Rate by Emotion," you can isolate one challenge account to avoid mixing funded account psychology with challenge account psychology.


### Rules Application
Trading rules can apply to:
- All accounts (global rule)
- Specific accounts only (e.g., "Max 5 trades/day" only on your $10K challenges, not your funded account)


### Balance Tracking
Each account maintains its own running balance. When you close a trade, the account balance updates. CSV imports reconcile against the correct account balance history.


### Reconciliation
When importing CSV files, you select which account the trades belong to. TradeMonkey matches imported trades with manual entries for that account only.


## Best Practices


### Separate by Prop Firm or Strategy
If you run three FTMO challenges and two MyForexFunds challenges, create five separate accounts. Don't merge them. Each has different rules, different equity, and different psychological pressure.


### Don't Mix Time Periods
If you reset a challenge or start a new phase, create a new account. Mixing Phase 1 trades with Phase 2 trades in the same account distorts your balance history and makes drawdown calculations incorrect.


### Use Descriptive Names
"Challenge 1" is less useful than "FTMO 100K Phase 2 - Nov 2024". You will reference this account name in filters, exports, and rule configurations. Make it clear.


### Set Compliance Fields for Challenges
If you don't define daily loss limits and max drawdown, TradeMonkey cannot flag compliance violations. These fields exist to catch breaches before you do.


### One Account = One Balance Stream
If you withdraw, deposit, or transfer funds, the balance changes. TradeMonkey tracks this via opening and closing balance on each trade. If you mix multiple balance streams in one account, reconciliation will flag discontinuities.


## Limitations & Notes


- You cannot delete an account that has trades linked to it. Archive or deactivate it instead.
- Changing the starting balance after trades exist will break balance reconciliation. Only edit this field if correcting an initial error.
- Currency conversion is not automatic. If you trade a GBP account but log trades in USD, you must handle conversion manually.
- Account-level analytics assume all trades in that account share the same risk context. If you change your strategy mid-account, consider creating a new account.
