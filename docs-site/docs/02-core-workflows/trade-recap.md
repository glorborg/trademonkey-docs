---
id: trade-recap
title: Trade Recap
sidebar_label: Trade Recap
---

# Trade Recap


## What Trade Recap Is


Trade Recap is the comprehensive data summary view for a single trade. It displays all financial, psychological, and compliance data in one consolidated screen, designed for post-trade evaluation and review.


Trade Recap answers: "What are all the facts about this specific trade?"


It differs from related features:


- **Execution Recap**: Multi-trade visual feed for pattern scanning across trades
- **Threads**: Chronological timeline showing events as they unfolded during the trade
- **Trade Recap**: Static summary view showing all data fields and metrics in organized sections


Think of Trade Recap as the "trade report card"—not grading performance, but presenting all data points for your own evaluation.


## Data Displayed in Trade Recap


Trade Recap organizes data into sections:


### Financial Data Section


**Core Trade Details:**
- Symbol, side (buy/sell), account
- Entry price, exit price, position size
- Entry time, exit time, duration
- Stop loss (planned and actual if changed)
- Take profit (planned and actual if changed)
- P&L in currency and percentage


**Risk Metrics:**
- Risk amount (distance from entry to stop loss × position size)
- Reward amount (distance from entry to take profit × position size)
- R:R ratio (calculated at entry)
- Actual R outcome (P&L divided by risk amount)


Example:
> Entry: 1.0850, SL: 1.0830 (20 pips), TP: 1.0890 (40 pips)
> Position size: 1.0 lot, Risk: $200, Reward: $400, R:R: 2:1
> Exit: 1.0830 (stopped out), P&L: -$200, Actual R: -1R


### Psychology Data Section


**Entry Psychology:**
- Entry emotions (up to 3): Confident, Calm, Fear, FOMO, Revenge, Greed
- Entry conviction score (1-10)
- Entry plan adherence (Yes / Partial / No)
- Entry notes (free-text reasoning)


**Exit Psychology:**
- Exit emotions (up to 3): Relief, Regret, Pride, Frustration, Satisfied
- Exit conviction score (1-10)
- Exit plan adherence (Yes / Partial / No)
- Exit reason and notes


**Conviction Gap:**
- Calculated automatically: Exit Conviction - Entry Conviction
- Displayed with interpretation indicator (negative gap = discipline decay, positive gap = strengthened confidence, zero gap = consistent)


Example:
> Entry: Confident + Calm, conviction 8, adherence Yes
> Exit: Frustration + Regret, conviction 3, adherence No
> **Conviction Gap: -5** (Discipline decay detected)


### Visual Context Section


**Screenshots:**
- Entry chart screenshot (with timestamp)
- Exit chart screenshot (with timestamp)
- Additional mid-trade screenshots if logged


**Screenshot Comparison:**
If both entry and exit screenshots exist, Trade Recap displays them side-by-side for quick visual comparison. This allows you to validate:


- Did the setup quality at entry support your entry conviction score?
- Did the exit conditions justify your exit decision?
- Was the exit at your planned level (stop/target) or emotional (mid-trade)?


### Rules vs Reality Section


**Rule Evaluation Summary:**
- Total rules evaluated
- Rules passed
- Rules violated
- Rules skipped (missing data)


**Violation Details:**
For each violated rule:
- Rule name (e.g., "Max 3 trades per day")
- Violation reason (e.g., "Trade #4 exceeds limit of 3")
- Violation timestamp (when it was detected)
- Severity (warning or violation)


**Adherence Indicators:**
- Visual indicators (pass/fail/skip) for each rule
- Link to Rules vs Reality Dashboard for full context


Example:
> **Rules Evaluated: 5**
> - ✅ Allowed time window (8:00-12:00 EST) - Pass
> - ✅ Min R:R ratio (2:1) - Pass
> - ❌ Max 3 trades per day - **Violation** (Trade #4)
> - ⚠️ No trading after 3 losses - Skipped (no prior losses today)
> - ✅ Allowed instruments (EURUSD) - Pass


### Tags and Classification


**Trade Tags:**
- Setup tags (e.g., breakout, pullback, reversal)
- Session tags (e.g., london-session, new-york-open)
- Strategy tags (e.g., scalp, swing)
- Custom tags


Tags serve two purposes in Trade Recap:


1. **Filtering and searching**: Find similar trades by tag
2. **Rule context**: Shows which tag-scoped rules were evaluated


### Reflections and Notes


**Notes:**
- Entry notes (logged at entry)
- Mid-trade notes (if any were added during execution)
- Exit notes (logged at exit)


**Post-Trade Reflections:**
- All reflections attached to this trade (can be multiple)
- Reflection timestamps (immediate, end-of-session, weekly review)
- AI-generated reflection summaries if available


Reflections in Trade Recap are displayed collapsed by default but expandable for review.


## Role in Post-Trade Evaluation


Trade Recap is designed for structured post-trade review. It presents data in a way that supports systematic evaluation across multiple dimensions.


### Plan Adherence Review


Trade Recap consolidates plan-related data:


**Entry Plan:**
- Did you enter at your planned price? (Compare planned entry vs actual entry)
- Did you set SL and TP as planned? (Compare planned risk vs actual risk)
- Did you follow entry rules? (Entry plan adherence flag)
- Did you enter with conviction? (Entry conviction score)


**Exit Plan:**
- Did you exit at your planned level? (Check if exit price = SL or TP)
- Did you follow exit rules? (Exit plan adherence flag)
- Did you exit with conviction? (Exit conviction score)


**Plan Variance Detection:**
If entry or exit plan adherence is marked "No" or "Partial," Trade Recap highlights this with visual indicators. You can quickly see:


- Where the plan broke down (entry or exit)
- What the variance was (notes explain the deviation)
- Whether the variance was profitable or costly


Example:
> **Entry Plan Adherence: Yes** (All criteria met, R:R 2:1, within time window)
> **Exit Plan Adherence: No** (Planned exit: Stop loss at 1.0820, Actual exit: 1.0830 panic close)
> **Variance Cost: $0** (Stopped out anyway, but closed 10 pips early)


### Emotional State Review


Trade Recap shows your emotional state at critical decision points:


**Entry Emotions:**
Did your entry emotions align with setup quality?


- High conviction + Confident/Calm emotions → Likely a solid setup
- Low conviction + Fear/FOMO emotions → Likely a weak or impulsive setup


**Exit Emotions:**
Did your exit emotions indicate disciplined execution or emotional override?


- Exit at planned level + Satisfied/Pride emotions → Disciplined exit
- Exit before planned level + Regret/Frustration emotions → Emotional exit


**Emotional Consistency:**
Trade Recap shows whether emotions remained stable or shifted:


- Confident → Satisfied = Emotional alignment (good sign)
- Confident → Regret = Emotional reversal (discipline breakdown or outcome disappointment)


### SL/TP Variance Analysis


Trade Recap calculates variance between planned and actual SL/TP:


**Stop Loss Variance:**
- Planned SL: 1.0830
- Actual exit: 1.0835
- Variance: +5 pips (closed before stop was hit)


**Take Profit Variance:**
- Planned TP: 1.0890
- Actual exit: 1.0875
- Variance: -15 pips (closed before target was hit)


**Variance Interpretation:**
- Positive SL variance (closed before stop) → Panic exit or breakeven close
- Negative TP variance (closed before target) → Impatience or fear of reversal
- Zero variance (exit = SL or TP) → Plan-compliant execution


Trade Recap does not judge variance. It only shows the gap between plan and execution.


### Conviction Change Analysis


Conviction gap is displayed prominently:


```
Entry Conviction: 8
Exit Conviction: 3
Gap: -5
```


**Gap Categories:**
- **-5 or worse**: Severe discipline decay (conviction collapsed)
- **-3 to -4**: Moderate discipline decay (confidence weakened significantly)
- **-1 to -2**: Minor discipline decay (slight confidence loss, normal)
- **0**: Consistent conviction (stable throughout trade)
- **+1 to +3**: Strengthened confidence (rare, usually positive sign)


Trade Recap displays gap category visually (color-coded or labeled) to make patterns obvious during review.


### Rule Compliance Summary


Rules vs Reality section in Trade Recap shows:


- Which rules were checked (all active rules that apply to this trade)
- Which rules passed (you followed these rules)
- Which rules violated (you broke these rules)
- Which rules skipped (insufficient data to evaluate)


This allows you to quickly assess:


- Was this trade rule-compliant overall?
- If violations occurred, which rules were broken?
- Were violations due to missing data or actual rule-breaking?


Example:
> **Overall Compliance: 80%** (4 passed, 1 violated, 0 skipped, 0 errors)
> Violated: "Max 3 trades per day" (This was trade #4)


## How Trade Recap Integrates With Other Features


Trade Recap is a hub that connects to multiple TradeMonkey features:


### Integration with Rules vs Reality


**Rules Display:**
Trade Recap shows all rule evaluations for this trade. Clicking on a rule violation opens the Rules vs Reality Dashboard filtered to that specific rule, showing:


- All trades that violated this rule
- Adherence percentage for this rule
- Patterns around when this rule is broken


**Rules Coach Link:**
If you want to understand why a rule was violated, Trade Recap provides a "Ask Rules Coach" button. This opens the Rules Helper AI with context pre-loaded:


> "Explain why my 'Max 3 trades per day' rule was violated on this trade. What led to trade #4?"


### Integration with Psychology Tracking


**Psychology Data Display:**
All psychology data (emotions, conviction, adherence) is shown in Trade Recap. Clicking on emotion tags or conviction scores opens the Psychology Tracking page filtered to:


- All trades with the same entry emotion
- All trades with similar conviction scores
- All trades with the same adherence status


This allows you to compare: "How do all my FOMO trades perform?"


### Integration with Threads


**View Full Thread:**
Trade Recap includes a "View Thread" button that opens the chronological timeline for this trade. This shows:


- How events unfolded in sequence
- Mid-trade notes and thoughts
- When conviction shifted
- When rule violations occurred


Use Trade Recap to review the data. Use Threads to understand the story.


### Integration with Execution Recap


**Find Similar Trades:**
Trade Recap includes filters that link to Execution Recap:


- "View all trades with entry emotion: FOMO"
- "View all trades with conviction gap < -4"
- "View all trades on this account"
- "View all trades with this symbol"


This allows you to move from single-trade analysis (Trade Recap) to pattern detection (Execution Recap).


### Integration with AI Features


**AI Thread Summary:**
If you generated an AI Thread Summary for this trade (5/day limit), it appears in the reflections section of Trade Recap. The AI summary highlights:


- Key patterns detected (conviction gaps, emotional shifts, rule violations)
- Behavioral signals (discipline decay, impulsive entry, panic exit)
- Context-specific insights (how this trade compares to your typical behavior)


**Deep Dive Explorer:**
Trade Recap includes a "Explore in AI Deep Dive" button. Clicking it opens AI Deep Dive Explorer with this trade pre-loaded as context. You can ask:


- "Why did my conviction drop so much on this trade?"
- "Was this exit emotion typical for me, or unusual?"
- "Do all my trades on this symbol show similar patterns?"


### Integration with Screenshots


**Screenshot Display:**
Entry and exit screenshots are displayed side-by-side in Trade Recap. Clicking a screenshot opens full-screen lightbox for detailed review.


**Screenshot Context:**
Trade Recap overlays key data on screenshots:


- Entry screenshot: Entry price, SL, TP, entry time, entry conviction
- Exit screenshot: Exit price, exit time, exit conviction, P&L


This visual context validates whether your emotions and conviction matched observable setup quality.


## Trade Recap in Daily and Weekly Review Workflows


Trade Recap is designed for structured review sessions. Here are common workflows:


### End-of-Day Review (5-10 Minutes)


**Goal**: Quickly review today's trades for immediate patterns and lessons.


**Workflow:**
1. Open Trade Recap for each closed trade from today
2. Check conviction gap and plan adherence for each
3. Note any rule violations
4. Add quick reflection notes while memory is fresh
5. Flag significant trades for deeper weekly review


### Weekly Review (30-60 Minutes)


**Goal**: Deep analysis of the week's trading patterns.


**Workflow:**
1. Filter to trades from the past week
2. Open Trade Recap for flagged/significant trades
3. Review emotional patterns across the week
4. Analyze rule compliance trends
5. Generate AI Thread Summaries for important trades
6. Write comprehensive reflections
