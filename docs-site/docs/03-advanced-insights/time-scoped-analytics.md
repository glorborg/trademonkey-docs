---
id: time-scoped-analytics
title: Time-Scoped Analytics
sidebar_label: Time-Scoped Analytics
---

# Time-Scoped Analytics


## What Time-Scoped Analytics Are


Time-scoped analytics are performance metrics and behavioral patterns calculated over a specific time window rather than your entire trading history. Instead of viewing "all-time" statistics, you can filter to:


- **Last 10 trades**: Most recent 10 completed trades
- **Last 20 trades**: Most recent 20 completed trades
- **Last 7 days**: All trades from the past week
- **Last 30 days**: All trades from the past month
- **All Time**: Complete trading history (no filter)


When you apply a time scope, all analytics recalculate using only trades within that window. This reveals whether your behavior is improving, stable, or deteriorating over time.


Time-scoped analytics answer: "How am I trading now versus how I traded before?"


## Why Recent Windows Reveal Directionality


All-time data shows your cumulative patterns. Recent windows show your current trajectory.


### All-Time Data (Baseline)
Your complete trading history aggregates all behavior:


- Win rate: 52% (300 trades)
- Average conviction at entry: 6.5
- Plan adherence: 65%
- Most common entry emotion: Confident (45% of trades)


This is your baseline. It shows where you've been, but not where you're going.


### Recent Data (Trajectory)
Filtering to "Last 30 days" or "Last 20 trades" shows current behavior:


- Win rate: 48% (down from all-time 52%)
- Average conviction at entry: 5.2 (down from all-time 6.5)
- Plan adherence: 52% (down from all-time 65%)
- Most common entry emotion: FOMO (38% of recent trades, up from 22% all-time)


This is your trajectory. It shows behavioral deterioration.


### Contrast Reveals Directionality
Comparing recent window to all-time baseline:


- **Improvement**: Recent metrics better than all-time → "You're trading better now than your historical average"
- **Stability**: Recent metrics similar to all-time → "Consistent behavior, no significant change"
- **Decline**: Recent metrics worse than all-time → "Recent behavior has deteriorated from your baseline"


Time-scoped analytics make direction visible. All-time data is static. Recent data shows momentum.


## Time Window Options


TradeMonkey provides five time scope filters:


### Last 10 Trades
**Purpose**: Ultra-recent behavior snapshot


**Use case**: Detect immediate behavioral shifts


**Minimum trades required**: 10


**Example scenarios**:
- You suspect your last session had poor discipline → Filter to Last 10 to isolate recent trades
- You changed a trading rule yesterday → Filter to Last 10 to see if compliance improved
- You're on a losing streak → Filter to Last 10 to see if emotions shifted


**Strengths**: Immediate feedback, isolates very recent behavior


**Limitations**: Small sample, high variance, not statistically stable


### Last 20 Trades
**Purpose**: Short-term trend detection


**Use case**: Identify emerging patterns without long-term noise


**Minimum trades required**: 20


**Example scenarios**:
- Week 1 of a new strategy → Filter to Last 20 to evaluate performance without historical data dilution
- Testing new trading hours → Filter to Last 20 to compare session performance
- Post-prop challenge pass → Filter to Last 20 to see if funded account psychology differs from challenge


**Strengths**: Recent enough to reflect current behavior, large enough to reduce noise


**Limitations**: Still somewhat volatile, one outlier trade (huge win/loss) can skew metrics


### Last 7 Days
**Purpose**: Weekly behavioral review


**Use case**: Detect session-based or short-term emotional patterns


**Minimum trades required**: Varies (depends on trading frequency)


**Example scenarios**:
- End-of-week review → Filter to Last 7 Days to summarize this week's behavior
- Compare this week to last week → Toggle between Last 7 Days windows
- Detect intraweek decay → Compare Monday-Wednesday vs Thursday-Friday behavior


**Strengths**: Calendar-aligned (natural review boundary), captures typical weekly cycle


**Limitations**: Trade count varies (5 trades one week, 30 trades another week makes comparison difficult)


### Last 30 Days
**Purpose**: Monthly trend analysis


**Use case**: Detect medium-term behavioral changes


**Minimum trades required**: Varies (typically 20-50 trades for active traders)


**Example scenarios**:
- Monthly performance review → Filter to Last 30 Days to evaluate this month
- Compare challenge month to funded month → Toggle between 30-day windows
- Detect monthly decay → Compare Week 1 vs Week 4 behavior within the 30-day window


**Strengths**: Smooths out weekly volatility, statistically more stable than shorter windows


**Limitations**: May hide intraweek or intraday patterns, slower to detect recent shifts


### All Time
**Purpose**: Complete historical baseline


**Use case**: Benchmark for comparison


**Minimum trades required**: All trades in database


**Example scenarios**:
- Establish baseline → View All Time to understand long-term averages
- Compare recent to historical → Toggle between Last 20 and All Time to see trajectory
- Identify long-term patterns → Detect if certain emotions or setups have always underperformed


**Strengths**: Maximum statistical stability, lowest variance, true baseline


**Limitations**: Dilutes recent behavior, cannot detect recent changes, includes outdated data (early learning curve trades)


## Which Analytics Modules Update With Time Scope


When you apply a time scope filter, the following analytics recalculate using only trades within the selected window:


### Performance Metrics (Dashboard and Psychology Page)


**Win Rate**
- Recalculated as: (Winning trades in window) / (Total trades in window) × 100
- Example: All Time: 52%, Last 20: 45% → Recent decline


**Average P&L**
- Recalculated as: (Sum of P&L in window) / (Trade count in window)
- Example: All Time: +$85/trade, Last 20: +$62/trade → Recent performance drop


**Total P&L**
- Recalculated as: Sum of P&L for all trades in window
- Example: All Time: +$25,500, Last 30 Days: +$1,240 → Monthly contribution


**Risk/Reward Metrics**
- Average risk per trade (SL distance × position size)
- Average reward per trade (TP distance × position size)
- Average R:R ratio
- Example: All Time R:R 2.1:1, Last 20 R:R 1.5:1 → Risk management deterioration


### Emotion-Based Analytics (Psychology Page)


**Performance by Emotion**
- Win rate and average P&L calculated per emotion tag using only trades in window
- Example:
  - All Time FOMO: 25% win rate (40 trades)
  - Last 20 FOMO: 10% win rate (8 trades) → Recent FOMO trades performing worse


**Emotional Cost**
- Total P&L loss attributed to specific emotions, recalculated for window
- Example:
  - All Time FOMO cost: -$4,200
  - Last 30 Days FOMO cost: -$1,600 → Recent month had significant FOMO losses


**Most Common Emotions**
- Frequency count of emotions recalculated for window
- Example:
  - All Time: Confident (45%), Calm (32%), FOMO (22%)
  - Last 20: FOMO (38%), Confident (28%), Fear (25%) → Emotional shift to impulsive/fearful


### Conviction-Based Analytics (Psychology Page)


**Average Conviction Scores**
- Entry conviction, exit conviction, and conviction gap recalculated for window
- Example:
  - All Time entry conviction: 6.8
  - Last 20 entry conviction: 5.1 → Recent trades have lower conviction


**Conviction Gap Analysis**
- Distribution of conviction gaps (how many trades with gap < -3, -3 to -1, 0, +1 to +3, > +3)
- Example:
  - All Time: 12% of trades with gap < -4
  - Last 20: 35% of trades with gap < -4 → Recent discipline decay spike


**Performance by Conviction Level**
- Win rate and P&L calculated per conviction range (1-3, 4-6, 7-10) using only trades in window
- Example:
  - All Time conviction 7-10: 68% win rate
  - Last 20 conviction 7-10: 72% win rate → High conviction still performs, but you're taking fewer high-conviction trades


### Plan Adherence Analytics (Psychology Page)


**Adherence Percentage**
- Percentage of trades with full adherence (Yes) vs partial vs violation (No)
- Example:
  - All Time: 68% full adherence
  - Last 20: 45% full adherence → Recent discipline breakdown


**Adherence Breakdown**
- Counts of entry adherence and exit adherence separately
- Example:
  - All Time: Entry 78% Yes, Exit 62% Yes
  - Last 20: Entry 75% Yes, Exit 40% Yes → Exit discipline specifically deteriorated


**Performance by Adherence**
- Win rate and P&L for trades with Yes vs Partial vs No adherence
- Example:
  - All Time: Full adherence 65% win rate, No adherence 38% win rate
  - Last 20: Full adherence 70% win rate, No adherence 20% win rate → Discipline gap widening


### Rules vs Reality (Rules Page)


**Overall Adherence Score**
- Percentage of rules passed vs total rules evaluated
- Example:
  - All Time: 78% rule adherence
  - Last 30 Days: 65% rule adherence → Recent rule compliance decline


**Rule-Level Adherence**
- Per-rule violation frequency recalculated for window
- Example:
  - Rule: "Max 3 trades per day"
  - All Time: Violated 8% of days (24 violations out of 300 trading days)
  - Last 30 Days: Violated 25% of days (8 violations out of 32 trading days) → Recent spike in overtrading


**Most Violated Rules**
- Ranking of rules by violation frequency within window
- Example:
  - All Time top violation: "Max 3 trades per day"
  - Last 20: Top violation: "No trading after 3 losses" → Recent emotional trading pattern


### Time-in-Trade Analysis (Psychology Page)


**Average Trade Duration**
- Mean time from entry to exit for trades in window
- Example:
  - All Time: 3.2 hours average
  - Last 20: 1.8 hours average → Recent trades held for shorter duration (impatience?)


**Duration by Outcome**
- Separate averages for winners vs losers
- Example:
  - All Time: Winners 4.1 hours, Losers 2.3 hours
  - Last 20: Winners 3.8 hours, Losers 1.2 hours → Recent losers closed much faster (panic?)


### Exit Reason Analysis (Psychology Page)


**Exit Reason Distribution**
- Frequency of each exit reason within window
- Example:
  - All Time: Stop loss 38%, Take profit 42%, Manual close 20%
  - Last 20: Stop loss 45%, Take profit 15%, Manual close 40% → Recent shift to manual closes (discipline breakdown)


## Connection to Execution Mirror Philosophy


Time-scoped analytics are the fourth dimension of TradeMonkey's execution mirror:


1. **Plan vs Execution**: Did you follow your plan? (static, per-trade)
2. **State vs Outcome**: What emotions produced what results? (aggregated)
3. **Rules vs Reality**: Did you follow your rules? (aggregated)
4. **Historical vs Recent**: Is your behavior improving or declining? (temporal) ← Time-Scoped Analytics


### Mirror Language in Time-Scoped Context


Time-scoped analytics use mirror language to show trajectory without judgment:


**Improvement Pattern (Descriptive)**:
> "Last 30 days: Plan adherence 82%, entry conviction 7.2, FOMO trades 8%. All Time: Plan adherence 65%, entry conviction 6.5, FOMO trades 22%. Pattern: Recent behavior shows improvement across all discipline metrics."


**NOT Coaching (Prescriptive)**:
> "Great job improving! Keep following your plan and maintaining high conviction. You're doing much better."


**Decline Pattern (Descriptive)**:
> "Last 20 trades: Win rate 38%, conviction gap -4.2, rule adherence 52%. All Time: Win rate 52%, conviction gap -1.8, rule adherence 78%. Pattern: Recent behavior shows deterioration across performance and discipline metrics."


**NOT Coaching (Prescriptive)**:
> "Your trading has gotten worse. You need to refocus and get back to basics. Stop breaking your rules."


**Stability Pattern (Descriptive)**:
> "Last 30 days: Win rate 51%, conviction 6.6, adherence 67%. All Time: Win rate 52%, conviction 6.5, adherence 68%. Pattern: Consistent behavior, no significant change detected."


**NOT Coaching (Prescriptive)**:
> "You're stuck in a rut. Try something new to improve performance."


The mirror shows whether behavior is improving, stable, or declining. It does not tell you what to do about it.


### Why Directionality Matters for Self-Awareness


Knowing your trajectory creates awareness that baseline metrics cannot:


- If you only see "52% win rate," you don't know if you're getting better or worse
- If you see "52% all-time, but 38% in the last 20 trades," you know something has changed
- This awareness is the first step to self-correction (or celebration, if improving)


Time-scoped analytics provide the mirror for temporal self-awareness.
