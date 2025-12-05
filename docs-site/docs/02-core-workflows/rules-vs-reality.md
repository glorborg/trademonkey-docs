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


**Logic**: Trade's tags are checked against the approved tag list. If trade contains a tag not in the approved list, violation is flagged.


**Example**:
- Rule: "Only trade 'breakout' or 'pullback' setups"
- Trade with tags: ['breakout'] → Pass
- Trade with tags: ['pullback', 'london-session'] → Pass
- Trade with tags: ['reversal'] → Violation ('reversal' not approved)


**Common use cases**:
- Strategy focus ("I only trade breakouts and pullbacks, no reversals")
- Preventing experimental or unproven setups


#### Max Trades Per Tag Per Day
**Purpose**: Limits how many times a specific setup type can be traded in one day.


**Logic**: System counts trades with a specific tag on the current calendar day. If count exceeds limit for that tag, subsequent trades with that tag are flagged.


**Example**:
- Rule: "Max 3 'scalp' trades per day"
- Scalp trade 1 → Pass
- Scalp trade 2 → Pass
- Scalp trade 3 → Pass
- Scalp trade 4 → Violation


**Common use cases**:
- Overtrading prevention within a strategy ("Max 5 breakout attempts per day")
- Forcing setup selectivity ("Max 2 reversal trades per day since they're lower probability")


#### Forbid Trades With Tags
**Purpose**: Prevents trading specific setup types or conditions (blacklist approach).


**Logic**: Trade's tags are checked against the forbidden tag list. If trade contains any forbidden tag, violation is flagged.


**Example**:
- Rule: "Never trade 'counter-trend' or 'news-reaction' setups"
- Trade with tags: ['breakout'] → Pass
- Trade with tags: ['counter-trend'] → Violation


**Common use cases**:
- Avoiding historically unprofitable setups
- Emotional trigger avoidance ("I always lose on 'revenge' tagged trades, ban them")


### News and Economic Event Rules (Future Guardrails)


#### No Trades During High-Impact News
**Purpose**: Prevents trading during high-impact economic events.


**Logic**: System checks if trade entry timestamp falls within ±X minutes of a high-impact news event. If yes, violation is flagged.


**Example**:
- Rule: "No trading during high-impact news"
- High-impact event (NFP) scheduled for 8:30 AM
- Trade entered at 8:25 AM → Violation
- Trade entered at 9:00 AM → Pass (outside buffer zone)


**Common use cases**:
- Volatility avoidance
- Prop firm restrictions (some firms forbid news trading)


**Note**: Requires economic calendar integration. Events are pre-loaded or synced.


#### No Trades X Minutes Before News
**Purpose**: Enforces a pre-news blackout period to avoid getting caught in volatility.


**Logic**: System checks if trade entry occurs within X minutes before a scheduled news event. If yes, violation is flagged.


**Example**:
- Rule: "No trading 30 minutes before high-impact news"
- High-impact event (CPI) at 8:30 AM
- Trade entered at 8:05 AM → Violation (within 30-minute buffer)
- Trade entered at 7:55 AM → Pass (outside buffer)


**Common use cases**:
- Pre-news spread widening avoidance
- Preventing entries right before unpredictable moves


#### No Trades for Currencies With News
**Purpose**: Prevents trading specific currencies on days when they have scheduled high-impact events.


**Logic**: System checks if the trade's symbol contains a currency that has a high-impact event scheduled that day. If yes, violation is flagged.


**Example**:
- Rule: "No USD pairs on NFP days"
- NFP event scheduled today
- Trade EURUSD → Violation (contains USD)
- Trade GBPJPY → Pass (does not contain USD)


**Common use cases**:
- Currency-specific news avoidance
- Reducing exposure to central bank announcements


## How Rules Are Evaluated (Decision Model)


### Rule Evaluation Pipeline


Every trade goes through the following evaluation pipeline:


1. **Trade Event Occurs**: Entry, close, or edit
2. **Active Rules Retrieved**: System loads all active rules for the user's account(s)
3. **Applicability Check**: Does this rule apply to this trade?
   - Account scope: Is this trade on an account covered by the rule?
   - Tag scope: Does this trade have the required tags (or lack forbidden tags)?
   - Asset class scope: Does this trade's account match the rule's asset class filter?
4. **Evaluation Logic Runs**: Rule-specific logic checks the trade against the rule's conditions
5. **Result Logged**: PASS, VIOLATION, SKIPPED_MISSING_DATA, or ERROR
6. **Reason Generated**: Human-readable explanation of why the rule passed or failed


This pipeline runs at three trigger points:


- **At Entry**: When a trade is opened (status changes to "entered")
- **At Close**: When a trade is closed (status changes to "closed")
- **At Edit**: When a trade is modified (e.g., stop loss changed, tags added)


### Applicability Logic


Not all rules apply to all trades. The system determines applicability using:


#### Account Scope
Rules can be:
- **Global**: Apply to all accounts (accountIds = null or empty array)
- **Account-Specific**: Apply only to trades on specific accounts (accountIds = ['account-1', 'account-2'])


Example:
- Rule: "Max 5 trades per day" on Account A only
- Trade on Account A → Rule applies
- Trade on Account B → Rule does not apply, skipped


#### Tag Scope
Some rules only apply to trades with specific tags (or exclude trades with specific tags):


- **Include Tags**: Rule only checks trades that have at least one of these tags
- **Exclude Tags**: Rule does not check trades that have any of these tags


Example:
- Rule: "Min 2:1 R:R" applies only to trades tagged "scalp"
- Trade with tags ['scalp', 'london'] → Rule applies
- Trade with tags ['swing', 'breakout'] → Rule does not apply, skipped


#### Asset Class Scope
Rules can filter by asset class (forex, futures, stocks, crypto, options). If a rule specifies "forex only," it will not check trades on accounts trading futures.


Example:
- Rule: "Max 3 trades per day" applies only to forex accounts
- Trade on forex account → Rule applies
- Trade on futures account → Rule does not apply, skipped


### Evaluation Outcomes


Each rule evaluation produces one of four results:


#### PASS
Trade complies with the rule. No violation detected.


Example:
- Rule: "Max 3 trades per day"
- Trade count today: 2
- This trade is #3 → PASS


#### VIOLATION
Trade breaks the rule. Violation is logged and displayed in analytics.


Example:
- Rule: "Max 3 trades per day"
- Trade count today: 3
- This trade is #4 → VIOLATION


#### SKIPPED_MISSING_DATA
Rule cannot be evaluated because required data is missing.


Example:
- Rule: "Min 2:1 R:R"
- Trade has no stop loss defined → SKIPPED_MISSING_DATA


This outcome is not a failure. It indicates incomplete data, not a violation.


#### ERROR
Rule evaluation failed due to system error (database timeout, invalid rule configuration, etc.).


Example:
- Rule: "Max daily loss $500"
- Database query to sum daily P&L times out → ERROR


Errors are logged for debugging but do not flag the trade as a violation.


### Handling Overlapping or Conflicting Rules


#### Overlapping Rules (No Conflict)
Multiple rules can apply to the same trade without conflicting:


- Rule 1: "Max 3 trades per day"
- Rule 2: "Only trade EURUSD, GBPUSD"
- Trade EURUSD, 2nd trade of the day → Both rules apply, both evaluate separately


Both rules produce independent results (PASS or VIOLATION). There is no conflict.


#### Conflicting Rules (Ambiguous or Impossible to Satisfy)
If rules contradict each other, the system evaluates both and flags violations for each:


- Rule 1: "Required tag: 'breakout'"
- Rule 2: "Forbidden tag: 'breakout'"
- Trade with tag 'breakout' → Rule 1 PASS, Rule 2 VIOLATION


This is a rule definition error, not a system error. The trader needs to resolve the conflict by editing or deleting one rule.


#### Partially Satisfied Rules
Some rules can be partially satisfied. The system does not have a "PARTIAL" status—only PASS or VIOLATION.


Example:
- Rule: "Max 5 trades per day"
- Trade count: 4 → PASS
- Trade count: 6 → VIOLATION


There is no partial violation. Either the rule is satisfied or it's not.


### Per-Trade, Per-Day, and Per-Session Evaluation


#### Per-Trade Rules
Evaluated once per trade, at the specified trigger point (entry, close, or edit):


- Allowed/forbidden instruments
- Min R:R ratio
- Max position size
- Required/forbidden tags


#### Per-Day Rules
Evaluated cumulatively throughout the trading day:


- Max trades per day (counter increments with each entry)
- Max daily loss (cumulative P&L checked on each close)
- Max trades per tag per day (counter per tag)


#### Per-Session Rules
Evaluated based on time windows or session context:


- Allowed/forbidden time windows
- Allowed trading days


### Rule Violation Summary


At the end of each trade, the system generates a summary:


- **Rules Evaluated**: Total number of rules checked
- **Rules Passed**: Count of PASS outcomes
- **Rules Violated**: Count of VIOLATION outcomes
- **Rules Skipped**: Count of SKIPPED_MISSING_DATA outcomes
- **Errors**: Count of ERROR outcomes


This summary appears in the trade detail view and contributes to adherence scoring on the Rules vs Reality Dashboard.


## Tags as Critical Infrastructure


Tags are not optional metadata. In the Rules vs Reality engine, tags determine:


- **Which rules apply to which trades** (tag scope filters)
- **Which setups are allowed or forbidden** (setup enforcement rules)
- **How frequently specific strategies are used** (per-tag trade count limits)


### Tag Scope Filtering


Rules can be scoped to apply only to trades with specific tags. This enables strategy-specific rule enforcement:


Example:
- Strategy A (scalping): Max 10 trades per day, min 1:1 R:R
- Strategy B (swing trading): Max 3 trades per day, min 3:1 R:R


Without tags, you cannot enforce these rules separately. With tags:


- Rule 1: "Max 10 trades per day" with include_tags: ['scalp']
- Rule 2: "Max 3 trades per day" with include_tags: ['swing']
- Rule 3: "Min 1:1 R:R" with include_tags: ['scalp']
- Rule 4: "Min 3:1 R:R" with include_tags: ['swing']


Now, scalp trades and swing trades are tracked separately, and violations are isolated to the relevant strategy.


### Setup Allowlist and Blocklist


Tag-based rules enable setup enforcement:


- **Allowlist**: "Only trade 'breakout', 'pullback', or 'range-bounce' setups"
- **Blocklist**: "Never trade 'counter-trend' or 'reversal' setups"


These rules rely on accurate tagging. If you tag a counter-trend trade as "breakout" to avoid a violation, the system cannot catch it. Tag honesty is required for rule integrity.


### Session and Context Tags


Some traders use system-generated tags for session context:


- 'london-session', 'new-york-session', 'asian-session'
- 'pre-market', 'market-open', 'market-close'


These tags can feed into session-based rules:


- Rule: "Forbidden tags: ['asian-session']" (no trading during Asian session)
- Rule: "Max 5 trades with tag 'market-open'" (limit trades during volatile open)


### Tag Overlap and Ambiguity


If a trade has multiple tags, multiple rules may apply. The system evaluates all applicable rules independently.


Example:
- Trade tags: ['scalp', 'breakout', 'london-session']
- Rule 1: "Max 10 trades per day" with include_tags: ['scalp']
- Rule 2: "Min 2:1 R:R" with include_tags: ['breakout']
- Rule 3: "Allowed time window: 2:00-6:00 AM EST" with include_tags: ['london-session']


All three rules apply to this trade. Each evaluates separately. If any rule fails, a violation is logged for that rule.


### Accurate Tagging Is Required


The Rules vs Reality engine trusts your tags. If you misstag trades, rules cannot enforce correctly:


- Tagging a revenge trade as "A+ setup" bypasses setup quality rules
- Omitting the 'scalp' tag on scalp trades excludes them from scalp-specific rules
- Adding irrelevant tags pollutes analytics and rule applicability


Tag discipline is as important as trade discipline for Rules vs Reality to function correctly.


## The Role of Rules Helper AI (Configuration Coach)


The Rules Helper AI (also called Rules Coach) is a configuration assistant that helps you define rules with precision. It does not offer trading advice or psychological coaching. It only clarifies, structures, and verifies rule definitions.


### What the AI Does


#### Translates Intent Into Enforceable Rules
Traders often describe rules in vague or unmeasurable terms:


- "Only trade high-probability setups"
- "Don't overtrade"
- "Avoid emotional trades"


The AI prompts for specifics:


- "What makes a setup high-probability for you? (e.g., 3 confluence factors, specific chart patterns, min R:R ratio)"
- "How do you define overtrading? (e.g., max trades per day, max trades per session, max trades after a loss)"
- "What observable conditions indicate emotional trading? (e.g., trading within 10 minutes of a loss, trading outside session window, position size larger than previous trade after loss)"


The AI converts vague intent into measurable, machine-checkable rules.


#### Prevents Ambiguous Rule Definitions
The AI validates that rules have clear conditions and thresholds:


- "Max daily loss" requires a dollar amount (e.g., $500, not "reasonable loss")
- "Allowed time window" requires specific start and end times with timezone (e.g., 8:00 AM - 12:00 PM EST, not "morning session")
- "Min R:R ratio" requires a numeric ratio (e.g., 2:1, not "decent reward potential")


If the trader's input is ambiguous, the AI asks clarifying questions until the rule can be defined unambiguously.


#### Suggests Tag-Based Scoping
If the trader describes strategy-specific behavior, the AI suggests using tags to scope rules:


Trader input:
> "I scalp during London and swing trade during New York. I should only scalp max 10 times per day, but swing trades can be unlimited."


AI output:
> "I'll create two rules:
> 1. 'Max 10 trades per day' with include_tags: ['scalp']
> 2. No limit on trades with include_tags: ['swing']
>
> Make sure to tag your scalp trades with 'scalp' and swing trades with 'swing' for these rules to apply correctly."


#### Detects Conflicting Rules
The AI checks for logical conflicts before applying rules:


- Rule A: "Required tag: 'breakout'"
- Rule B: "Forbidden tag: 'breakout'"


AI response:
> "These rules conflict. A trade cannot both require and forbid the 'breakout' tag. Would you like to revise one of these rules?"


#### Proposes Account Scoping
If the trader manages multiple accounts with different risk profiles, the AI suggests scoping rules per account:


Trader input:
> "I have three $10K challenges and one $100K funded account. Challenges have max $500 daily loss, funded account has max $2,000 daily loss."


AI output:
> "I'll create:
> 1. 'Max $500 daily loss' applied to Challenge Account 1, 2, 3
> 2. 'Max $2,000 daily loss' applied to Funded Account
>
> You can select which accounts each rule applies to in the review step."


### What the AI Does NOT Do


#### No Trading Advice
The AI does not recommend which rules to create or which strategies to follow. It does not say:


- "You should limit yourself to 3 trades per day"
- "You should only trade major pairs"
- "You should use a 2:1 R:R minimum"


The trader states their own rules. The AI only structures them.


#### No Psychological Coaching
The AI does not interpret emotional patterns or offer behavioral guidance. It does not say:


- "It sounds like you struggle with FOMO"
- "You should take a break after losses"
- "You need to work on discipline"


Those observations come from TradeMonkey's analytics and AI Diagnostics, not the Rules Helper AI.


#### No Predictive or Adaptive Rules
The AI does not create dynamic rules that change based on performance. It does not say:


- "If you lose $300, reduce your max trades per day to 2"
- "If your win rate drops below 50%, tighten your R:R requirement"


Rules are static. The trader can manually adjust them based on performance data, but the AI does not automate this.


#### No Rule Enforcement
The AI helps define rules. It does not enforce them. Enforcement is handled by the Rules vs Reality engine after trades are executed.


### How the Rules Helper AI Works


#### Input Collection
The AI presents a guided wizard or dialog where the trader describes their rules in natural language. The wizard may ask:


- "What trading strategies do you use?" (e.g., scalping, swing, breakout, pullback)
- "What risk rules do you follow?" (e.g., max daily loss, max position size, max trades per day)
- "What time restrictions apply?" (e.g., only trade London session, no trading on Fridays)
- "What behavioral rules do you want to enforce?" (e.g., stop after 3 losses, no trading within 30 min of news)


#### Natural Language Processing
The AI parses the trader's input and extracts:


- Rule types (time window, max trades, min R:R, etc.)
- Numeric thresholds ($500, 3 trades, 2:1 ratio)
- Tag references (scalp, breakout, london-session)
- Account context (all accounts vs specific accounts)


#### Rule Proposal
The AI generates a structured rule proposal with:


- Rule name (e.g., "Max Daily Loss - Challenges")
- Rule type (e.g., max_daily_loss)
- Configuration (e.g., threshold: $500, applies_to_accounts: ['Challenge 1', 'Challenge 2'])
- Suggested tags (if the trader mentioned strategy names, the AI proposes creating corresponding tags)


#### Review and Approval
The trader reviews the proposed rules:


- Confirm rule definitions are correct
- Select which accounts each rule applies to
- Add or remove tags
- Adjust thresholds if needed


Once approved, the AI creates the rules via the existing createRule() server action.


#### Usage Limits
The Rules Helper AI is rate-limited to prevent abuse:


- **20 requests per day** (shared across all Rules Helper features: rule proposals, violation explanations, inline help)


This limit ensures cost control while allowing sufficient usage for typical rule creation workflows.


## Rules vs Reality Dashboard


The Rules vs Reality Dashboard aggregates violation data across all trades and displays adherence scores, violation trends, and rule-level breakdowns.


### Adherence Score Calculation


Overall adherence score is calculated as:


```
Adherence Score = (Total Rules Passed) / (Total Rules Evaluated) × 100
```


Example:
- 100 rules evaluated across 50 trades
- 85 rules passed
- 15 rules violated
- Adherence Score: 85%


This score represents how often you follow your rules, not how profitable you are. A 100% adherence score means you never break your own rules. A 50% adherence score means half the time you violate your stated rules.


### Rule-Level Breakdown


The dashboard shows adherence per rule:


- Rule A: "Max 3 trades per day" — 95% adherence (violated 2 times out of 40 days)
- Rule B: "Min 2:1 R:R" — 60% adherence (violated 20 times out of 50 trades)
- Rule C: "No trading after 3 losses" — 80% adherence (violated 4 times out of 20 applicable situations)


This breakdown reveals:


- **Stable rules**: Rules you consistently follow (high adherence %)
- **Unstable rules**: Rules you frequently break (low adherence %)


Unstable rules indicate either:


1. The rule is too strict (you need to adjust the threshold)
2. Behavioral breaking point exists (you struggle to follow this rule under certain conditions)


### Violation Trends Over Time


The dashboard displays violation frequency by:


- **Day of week**: Do you violate more on Fridays? Mondays?
- **Time of day**: Do violations cluster in the afternoon?
- **After losses**: Do violations spike after losing trades?
- **Near prop firm limits**: Do violations increase as you approach daily loss limits?


These trends expose behavioral decay patterns:


Example:
> "Adherence score starts at 90% in Week 1, drops to 70% in Week 2, crashes to 40% in Week 3. Violations are concentrated after 2 PM and on days with 2+ losses. Pattern: Afternoon discipline collapse + revenge trading after losses."


### Connection to Execution Mirror Trilogy


Rules vs Reality completes TradeMonkey's three-mirror system:


1. **Plan vs Execution**: Did you follow your trade plan at entry and exit? (tracked via plan adherence flags)
2. **State vs Outcome**: What emotional state produced what results? (tracked via emotions and conviction)
3. **Rules vs Reality**: Did you follow your stated trading rules? (tracked via Rules vs Reality engine)


All three mirrors feed into the same analytics:


- Execution Recap shows plan vs execution gaps visually
- Psychology Tracking shows state vs outcome correlations
- Rules vs Reality Dashboard shows rules vs actual behavior gaps


Together, these mirrors expose the full execution story: what you planned, what you felt, what rules you set, and what you actually did.


## What Rules vs Reality Is NOT


### Not a Performance Grader
Rules vs Reality does not evaluate the quality of your rules or the profitability of your trading. A 100% adherence score does not mean you're profitable. It means you're consistent with your stated rules.


You can have 100% adherence and lose money (if your rules are bad) or 50% adherence and make money (if your violations happen to be profitable). The system does not judge outcomes—only consistency.


### Not a Coach or Advisor
Rules vs Reality does not tell you which rules to create, which thresholds to set, or how to fix violations. It does not say:


- "You should reduce your max daily loss limit"
- "You should stop trading on Fridays"
- "You should only trade breakouts"


It only shows you when and how you break the rules you already set for yourself.


### Not a Predictive or AI-Enabled Rule Enforcer
Rules are static and trader-defined. The system does not:


- Adjust rules automatically based on performance
- Predict when you're likely to violate a rule
- Block trades before they occur (it logs violations after execution)


Rules vs Reality is a post-execution mirror, not a pre-trade gatekeeper.


### Not a Punishment System
Violations are not punishments or moral judgments. They are factual records:


- "Trade taken at 2:30 PM, rule allows trading until 12:00 PM, violation logged."


No emotional language. No coaching. Just the gap between the rule and the reality.


## Limitations and Edge Cases


### Incomplete Trade Data
If trades lack required fields, some rules cannot be evaluated:


- No stop loss or take profit → Min R:R rule skipped
- No tags → Tag-based rules skipped
- No position size → Max position size rule skipped


The system logs these as "SKIPPED_MISSING_DATA" rather than violations. To maximize rule coverage, log complete trade data.


### Misapplied Tags
If you tag trades incorrectly, rules cannot enforce properly:


- Tagging a non-scalp trade as "scalp" → Scalp-specific rules apply incorrectly
- Omitting the "breakout" tag on a breakout trade → Breakout-specific rules do not apply


Tag accuracy is the trader's responsibility. The system trusts your tags.


### Inactive Rules
If you deactivate a rule, it stops evaluating on new trades. Historical violations from that rule remain in the data but are not counted toward current adherence scores. This allows you to "retire" outdated rules without losing historical context.


### Overlapping or Contradictory Rule Definitions
If rules conflict, both are evaluated and both may produce violations. The system does not resolve conflicts automatically. You must edit or delete conflicting rules.


Example:
- Rule A: "Required tag: 'breakout'"
- Rule B: "Forbidden tag: 'breakout'"
- Trade with 'breakout' tag → Both rules evaluate, one passes, one violates


This is a rule definition error, not a system bug.


### Minimum Data Required for Adherence Trends
Meaningful adherence trends require:


- At least 20-30 trades (for statistical relevance)
- At least 5-10 days of data (for time-based patterns)
- Consistent tagging and data entry (for tag-based rules)


If you have 5 trades with inconsistent data, the adherence score is not meaningful. Rules vs Reality works best with sustained, consistent data input.


### Rule Evaluation Lag
Rules evaluate after trade execution. If you want real-time rule checking (e.g., a warning before entering a trade that would violate a rule), that is not currently supported. Rules vs Reality is a post-trade accountability system, not a pre-trade prevention system.


### Time Zone Handling
Time window rules rely on timestamps being in the correct time zone. If your broker timestamps are in a different time zone than your rule's time zone, violations may be incorrectly flagged. Ensure your time zone settings are consistent across accounts and rules.
