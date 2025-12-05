---
id: rules-vs-reality
title: Rules vs Reality
sidebar_label: Rules vs Reality
---

# Rules vs Reality


## What Rules vs Reality Is


Rules vs Reality is TradeMonkey's execution-mirror engine. It compares the trading rules you define to the trades you actually execute, flagging violations and measuring adherence over time.


This is not a habit tracker or productivity tool. It is not a coach telling you what rules to create. It is a compliance engine that enforces the rules you set for yourself and shows you when and how you break them.


The system serves three purposes:


1. **Protect challenge accounts**: Prop firm rules (daily loss limits, max drawdown, max trades per day) are enforced automatically. If you approach a breach, the system flags it.
2. **Prevent blowups**: Behavioral rules (e.g., "No trading after 3 consecutive losses," "No position size increase after losing day") catch revenge trading and emotional escalation before they destroy your account.
3. **Reveal behavioral breaking points**: Aggregated violation data shows when discipline collapses (afternoons? Fridays? after losses? during news?). This is the third mirror in TradeMonkey's trilogy: Plan vs Execution, State vs Outcome, **Rules vs Reality**.


Rules vs Reality does not prevent you from breaking rules. It documents every violation and shows you the cost.


## All Rule Types and Their Logic


### Time and Session Rules


#### Allowed Trading Days
**Purpose**: Restricts trading to specific weekdays.


**Logic**: Trade timestamp is checked against allowed days (Monday-Friday subset). If trade occurs on a non-allowed day, violation is flagged.


**Example**:
- Rule: "Only trade Monday through Thursday"
- Trade taken on Friday at 9:00 AM → Violation


**Common use cases**:
- "No trading on Fridays" (emotional bias on week-end or pre-weekend position management issues)
- "Only trade Tuesday-Thursday" (avoid Monday gaps and Friday chop)


#### Allowed Time Window
**Purpose**: Restricts trading to a specific time range within each day.


**Logic**: Trade entry timestamp is checked against start and end times in a specified timezone. If trade entry occurs outside the window, violation is flagged.


**Example**:
- Rule: "Only trade 8:00 AM - 12:00 PM EST"
- Trade entered at 2:30 PM EST → Violation
- Trade entered at 10:00 AM EST → Pass


**Common use cases**:
- "London session only (2:00 AM - 6:00 AM EST)"
- "New York open only (9:30 AM - 11:00 AM EST)"
- "No trading after 3 PM" (afternoon discipline issues)


**Note**: Time windows use the timezone you specify. Ensure your broker's timestamps align with your rule's timezone, or adjust accordingly.


#### Forbidden Time Window
**Purpose**: Prevents trading during a specific time range (inverse of allowed window).


**Logic**: Trade entry timestamp is checked against forbidden start and end times. If trade entry occurs inside the forbidden window, violation is flagged.


**Example**:
- Rule: "No trading 12:00 PM - 2:00 PM EST" (lunch chop avoidance)
- Trade entered at 1:15 PM EST → Violation
- Trade entered at 11:45 AM EST → Pass


**Common use cases**:
- "No trading during Asian session"
- "No trading 30 minutes before market close"


### Trade Count and Exposure Rules


#### Max Trades Per Day
**Purpose**: Limits the number of trades taken in a single calendar day.


**Logic**: System counts trades entered on the same calendar date (based on your timezone). If count exceeds limit, subsequent trades are flagged as violations.


**Example**:
- Rule: "Max 5 trades per day"
- Trades 1-5 on Monday → Pass
- Trade 6 on Monday → Violation
- Trade 1 on Tuesday → Pass (counter resets daily)


**Common use cases**:
- Prop firm requirements (e.g., "Max 10 trades per day to avoid scalping restrictions")
- Overtrading prevention ("Max 3 trades per day to force setup selectivity")


**Scope**: Can apply to specific accounts or globally. If account-scoped, the counter tracks trades per account per day.


#### Max Open Positions
**Purpose**: Limits the number of simultaneous open trades.


**Logic**: When a trade is entered, system counts currently open trades (status = "entered"). If opening this trade would exceed the limit, violation is flagged.


**Example**:
- Rule: "Max 2 open positions at once"
- Open trade 1 → Pass
- Open trade 2 (trade 1 still open) → Pass
- Open trade 3 (trades 1 and 2 still open) → Violation


**Common use cases**:
- Risk concentration control ("Only 1 position at a time")
- Prop firm limits (e.g., "Max 5 concurrent positions")
- Psychological focus ("Max 2 positions to avoid trade management overwhelm")


**Note**: This rule checks at entry time. If you close a position and immediately open another, the counter updates correctly.


### Risk and Loss Rules


#### Max Position Size
**Purpose**: Limits the size of any single position.


**Logic**: Trade's position size (lot size, contracts, shares) is compared to the defined maximum. If size exceeds limit, violation is flagged.


**Example**:
- Rule: "Max 1.0 lot per trade"
- Trade with 0.5 lots → Pass
- Trade with 1.5 lots → Violation


**Common use cases**:
- Prop firm position size limits
- Risk control ("No more than 2% account risk per trade" translated to lot size)
- Emotional escalation prevention ("No increasing position size after losses")


**Unit flexibility**: The system uses whatever unit you trade (lots for forex, contracts for futures, shares for stocks).


#### Max Daily Loss
**Purpose**: Prevents exceeding a daily loss threshold (prop firm compliance or personal risk control).


**Logic**: System sums realized P&L for all closed trades on the current calendar day. If cumulative loss exceeds the defined limit, subsequent trades or additional losses are flagged as violations.


**Example**:
- Rule: "Max $500 daily loss"
- Day starts: $0 P&L
- Trade 1: -$200 → Pass (total: -$200)
- Trade 2: -$250 → Pass (total: -$450)
- Trade 3: -$100 → Violation (total: -$550, exceeds $500 limit)


**Common use cases**:
- Prop firm daily drawdown rules (e.g., "Max $1,000 loss per day or breach")
- Personal stop-loss discipline ("If I lose $300 in a day, stop trading")


**Important**: This rule checks cumulative realized losses. Floating P&L on open trades is not included unless the position closes.


#### Min R:R Ratio (Risk-Reward Ratio)
**Purpose**: Ensures trades have a minimum favorable risk-reward profile at entry.


**Logic**: System calculates R:R as:


```
R:R = (Take Profit - Entry Price) / (Entry Price - Stop Loss)
```


For short trades, the formula inverts appropriately. If R:R is below the defined minimum, violation is flagged.


**Example**:
- Rule: "Min 2:1 R:R ratio"
- Entry: 1.0850, SL: 1.0830, TP: 1.0890
  - Risk: 20 pips, Reward: 40 pips → R:R = 2:1 → Pass
- Entry: 1.0850, SL: 1.0830, TP: 1.0870
  - Risk: 20 pips, Reward: 20 pips → R:R = 1:1 → Violation


**Common use cases**:
- Setup quality enforcement ("Only take trades with 2:1 or better")
- Profitability threshold ("Min 1.5:1 R:R to account for win rate")


**Limitations**: If stop loss or take profit is missing, the rule cannot be evaluated and returns "SKIPPED_MISSING_DATA."


### Instrument and Asset Class Rules


#### Allowed Instruments
**Purpose**: Restricts trading to a predefined list of symbols.


**Logic**: Trade symbol is checked against the allowed instruments list. If symbol is not in the list, violation is flagged.


**Example**:
- Rule: "Only trade EURUSD, GBPUSD, USDJPY"
- Trade EURUSD → Pass
- Trade AUDUSD → Violation


**Common use cases**:
- Prop firm instrument restrictions
- Strategy specialization ("I only trade major forex pairs")
- Focus enforcement ("Only trade instruments I've backtested")


#### Forbidden Instruments
**Purpose**: Prevents trading specific symbols (blacklist approach).


**Logic**: Trade symbol is checked against the forbidden instruments list. If symbol is in the list, violation is flagged.


**Example**:
- Rule: "Never trade GBPJPY (too volatile)"
- Trade EURUSD → Pass
- Trade GBPJPY → Violation


**Common use cases**:
- Avoiding instruments with historical poor performance
- Excluding exotic pairs or low-liquidity instruments
- Emotional triggers ("I always revenge trade on XAUUSD, avoid it")


#### Allowed Asset Classes
**Purpose**: Restricts trading to specific asset types (forex, futures, stocks, crypto, options).


**Logic**: Trade's account must have an instrument type defined. If the account's instrument type is not in the allowed asset classes list, violation is flagged.


**Example**:
- Rule: "Only trade forex and futures"
- Trade on account with instrument type "forex" → Pass
- Trade on account with instrument type "stocks" → Violation


**Common use cases**:
- Prop firm restrictions (e.g., "Forex only" challenges)
- Strategy-specific rules (e.g., "My breakout strategy only works on futures")


**Note**: Asset class is defined at the account level, not per trade. If you trade multiple asset classes, create separate accounts.


### Behavioral and Discipline Rules


#### No Trading After N Losses
**Purpose**: Prevents revenge trading by enforcing a stop after consecutive losses.


**Logic**: System counts consecutive closed trades with negative P&L. If count reaches N, the next trade entry is flagged as a violation.


**Example**:
- Rule: "Stop trading after 3 consecutive losses"
- Trade 1: -$50 (loss count: 1)
- Trade 2: -$30 (loss count: 2)
- Trade 3: -$80 (loss count: 3)
- Trade 4 entry → Violation
- If Trade 2 had been a win, counter resets to 0


**Common use cases**:
- Emotional regulation ("After 3 losses, I'm no longer objective")
- Drawdown control ("Stop digging when in a hole")


**Important**: Counter resets on any winning trade or at day rollover (depending on rule configuration).


#### Cooldown After Large Loss
**Purpose**: Enforces a time-based break after a significant loss to prevent emotional trading.


**Logic**: If a single trade loses more than the defined threshold, the system flags the next trade if it occurs within the cooldown period (e.g., 30 minutes, 1 hour).


**Example**:
- Rule: "No trading for 1 hour after a $200+ loss"
- Trade 1: -$250 at 10:00 AM
- Trade 2 entry at 10:30 AM → Violation (within 1-hour cooldown)
- Trade 3 entry at 11:15 AM → Pass (cooldown expired)


**Common use cases**:
- Preventing impulsive revenge trades
- Forcing mental reset after emotional hits


#### No Size Increase After Loss
**Purpose**: Prevents position size escalation after losing trades (common revenge trading pattern).


**Logic**: System compares current trade's position size to the previous trade's position size. If previous trade was a loss and current size is larger, violation is flagged.


**Example**:
- Rule: "Do not increase position size after a losing trade"
- Trade 1: 1.0 lot, -$100
- Trade 2: 1.5 lots → Violation
- Trade 3: 1.0 lot → Pass (size did not increase from Trade 2)


**Common use cases**:
- Martingale prevention
- Emotional escalation control


#### No Widening Stop Loss
**Purpose**: Prevents moving stop loss away from entry during trade execution (risk increase).


**Logic**: System tracks initial stop loss at entry and current stop loss. If current SL is farther from entry than initial SL, violation is flagged.


**Example**:
- Rule: "Do not widen stop loss after entry"
- Entry: 1.0850, Initial SL: 1.0830 (20 pips risk)
- Edited SL: 1.0820 (30 pips risk) → Violation
- Edited SL: 1.0840 (10 pips risk, tighter) → Pass


**Common use cases**:
- Risk discipline enforcement ("Accept the stop, don't give price 'more room'")
- Prevents rationalization of bad trades


**Note**: Tightening stop loss (moving it closer to entry) is allowed and does not violate this rule.


### Tag-Based Rules (Setup and Strategy Enforcement)


#### Required Setup Tag
**Purpose**: Enforces that trades must include a specific tag to be valid.


**Logic**: Trade's tags are checked for the required tag. If tag is missing, violation is flagged.


**Example**:
- Rule: "All trades must have a 'setup-confirmed' tag"
- Trade with tags: ['breakout', 'setup-confirmed'] → Pass
- Trade with tags: ['breakout'] → Violation


**Common use cases**:
- Strategy adherence ("Only trade if I've marked it as 'A+ setup'")
- Forcing pre-trade checklist ("Must tag with 'plan-logged' before entering")


#### Only Approved Setup Tags
**Purpose**: Restricts trades to a whitelist of approved setup types.


**Logic**: Trade's setup tags are checked against the approved list. If any tag is not in the approved list, violation is flagged.


**Example**:
- Rule: "Only trade setups: breakout, pullback, reversal"
- Trade with tag: ['breakout'] → Pass
- Trade with tag: ['impulse'] → Violation


**Common use cases**:
- Strategy focus ("Only trade the 3 setups I've backtested")
- Preventing experimental trades during challenge accounts


## Rules vs Reality Dashboard


The dashboard provides a comprehensive view of your rule compliance:


### Compliance Overview
- Overall compliance percentage across all rules
- Rules with highest violation rates
- Recent violations with timestamps


### Rule-by-Rule Breakdown
- Each rule shows: pass rate, violation count, skip count
- Drill down to see all trades that violated each rule
- Identify patterns (time of day, day of week, after losses)


### Violation Trends
- Track compliance over time
- See if discipline is improving or degrading
- Correlate violations with P&L impact


### Violation Cost Analysis
- Calculate the financial cost of breaking rules
- "Your 'Max 3 trades per day' violations cost you $2,400 this month"
- Prioritize which rules to focus on fixing
