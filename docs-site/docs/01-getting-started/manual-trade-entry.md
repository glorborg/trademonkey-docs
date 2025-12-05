---
id: manual-trade-entry
title: Manual Trade Entry
sidebar_label: Manual Trade Entry
---

# Manual Trade Entry


## What Manual Entry Is


Manual trade entry means logging trades directly into TradeMonkey as you plan or execute them. You input the financial data (symbol, side, entry price, position size) and the psychological context (emotions, conviction, plan adherence) in real time or immediately after execution.


Unlike CSV import, which loads historical trades in bulk, manual entry captures your intention and emotional state at the moment of decision. This creates a complete record of what you planned to do and what you actually did.


## When Manual Entry Is Preferred


### Real-Time Psychology Capture
If you want to record how you felt when you entered a trade, manual entry is the only option. CSV imports contain financial data but no emotional context. You cannot import conviction scores or entry emotions from a broker export.


Manual entry during or immediately after trade execution preserves:


- Your mental state at entry (confident, fearful, impulsive)
- Your conviction level (1-10 scale)
- Your plan adherence intent (did you follow your rules or deviate?)
- Your reasoning (notes about why you took the trade)


Waiting days or weeks to add this data reduces accuracy. Memory distorts quickly. Manual entry locks in the raw emotional truth.


### Small Account or Early Testing
If you trade 2-5 times per week, manual entry is faster than exporting and importing CSVs. The overhead of CSV mapping doesn't justify itself until you have 20+ trades to import.


Early in your TradeMonkey usage, manual entry also lets you test the system without needing broker export workflows. You can log a single trade, see how analytics populate, and decide if the platform fits your workflow.


### Active Journaling Workflow
Some traders prefer to log trades as part of their pre-trade or post-trade ritual:


- **Pre-trade**: Log the planned trade with conviction score and entry emotion before entering the market. This forces you to articulate your setup and risk.
- **Post-trade**: Log the closed trade immediately after exit, capturing exit emotions and plan adherence while the experience is fresh.


This workflow treats manual entry as a discipline tool, not just a data input method.


### Hybrid Approach
Many traders use both manual entry and CSV import:


- Manual entry for trades with strong psychological context (big wins, revenge trades, rule violations)
- CSV import for routine trades where you just need financial records


TradeMonkey reconciles the two sources. If you manually enter a trade and later import a CSV with the same trade, the system merges them (psychology data + financial proof).


## Data Captured at Entry


### Financial Data (Required)
- **Symbol**: The instrument you're trading (e.g., EURUSD, NQ, AAPL)
- **Side**: Buy or Sell (long or short)
- **Entry Price**: The price at which you entered (or plan to enter)
- **Position Size**: Lot size, contracts, or shares
- **Account**: Which trading account this trade belongs to


### Risk Management (Optional but Recommended)
- **Stop Loss**: Your planned exit if the trade goes against you
- **Take Profit**: Your planned exit if the trade moves in your favor
- **Risk/Reward Ratio**: Automatically calculated from SL and TP


### Psychology at Entry (Critical for Insights)
- **Entry Emotion**: Select up to 3 emotions (confident, fear, FOMO, revenge, calm, greed)
- **Entry Conviction Score**: Rate your confidence in this trade (1 = low conviction, 10 = high conviction)
- **Plan Adherence**: Did you follow your trading rules? (Yes / Partial / No)
- **Entry Notes**: Free-text reasoning for why you took this trade
- **Tags**: Labels for setup type, strategy, or session (e.g., "breakout", "london-open", "revenge")


### Trade Status
- **Planned**: You intend to take this trade but haven't entered yet
- **Entered**: You are currently in this trade (open position)


If you log a planned trade, you can update it to "Entered" when you execute. This creates a record of what you intended versus what you actually did.


## Data Captured at Exit


When you close a trade (manually or via CSV import), you capture:


### Financial Data (Required)
- **Exit Price**: The price at which you exited
- **Exit Time**: When you closed the position
- **P&L**: Profit or loss (calculated automatically from entry/exit and position size)


### Psychology at Exit (Critical for Pattern Detection)
- **Exit Emotion**: Select up to 3 emotions (relief, regret, pride, frustration, satisfied)
- **Exit Conviction Score**: Rate your confidence in the exit decision (1-10)
- **Exit Plan Adherence**: Did you exit according to plan? (Yes / Partial / No)
- **Exit Reason**: Why you closed (e.g., "Hit stop loss", "Scaled out at target", "Panic sold on pullback")
- **Exit Notes**: Free-text explanation of what happened during the trade


### Trade Status Update
- **Closed**: Trade is complete and locked
- **Cancelled**: Trade was planned but never executed


Once a trade is closed, its financial and psychological data is available for analytics.


## Why Better Entries Create Better Insights


TradeMonkey's analytics and AI features rely on the data you provide. The more complete your manual entries, the more accurate your insights.


### Emotion-Based Analytics Require Emotion Data
If you log 50 trades but only tag emotions on 10 of them, "Win Rate by Emotion" analysis can only use those 10 trades. The other 40 are excluded. Consistent emotion tagging enables:


- Performance by emotion (e.g., "Fearful entries: 30% win rate")
- Emotional cost patterns (e.g., "FOMO trades cost you $2,400 this month")
- Emotional transition detection (e.g., "Confidence → Relief exits perform better than Confidence → Regret exits")


### Conviction Gap Analysis Requires Conviction Scores
Conviction gap is calculated as:


```
Exit Conviction - Entry Conviction = Gap
```


A negative gap (e.g., entry conviction 8, exit conviction 3) indicates discipline decay. This pattern is invisible without conviction scores.


### Plan Adherence Tracking Requires Adherence Data
Rules vs Reality can flag rule violations automatically, but plan adherence is subjective. Only you know if you "sort of" followed your plan. Logging adherence at entry and exit reveals:


- How often you start strong and deteriorate (entry adherence: Yes, exit adherence: No)
- Whether partial adherence is better or worse than full deviation
- Correlation between adherence and profitability


### AI Diagnostics Require Rich Context
AI features like Trade Thread Summaries and Deep Dive Explorer analyze your trades to surface behavioral patterns. If your trades lack emotions, conviction, and notes, the AI has nothing to work with. The more context you provide, the more specific the insights.


Example prompt with poor data:
> "You took 50 trades this month."


Example prompt with rich data:
> "You took 50 trades this month. On 12 trades, your conviction dropped by 4+ points from entry to exit. These trades had a 25% win rate and cost you $1,800. Ten of these conviction-drop trades occurred after 2 PM in your time zone."


## Example Trade Entry Scenario


### Pre-Trade (Planned Status)
You spot a EURUSD setup during the London session. Before entering, you log the trade:


- **Symbol**: EURUSD
- **Side**: Buy
- **Entry Price**: 1.0850 (planned)
- **Position Size**: 1.0 lot
- **Stop Loss**: 1.0830 (20 pips)
- **Take Profit**: 1.0890 (40 pips)
- **Entry Emotion**: Confident, Calm
- **Entry Conviction**: 8/10
- **Plan Adherence**: Yes
- **Entry Notes**: "Clean bullish engulfing on H1 after pullback to support. London open momentum aligned with bias."
- **Tags**: breakout, london-session, bullish


Status: **Planned**


### During Trade (Entered Status)
You execute the trade at 1.0850. You update the trade:


- Status changed to **Entered**
- Entry Time: 08:05 AM


### Post-Trade (Closed Status)
Price hits your stop loss at 1.0830. You close the trade and log the exit:


- **Exit Price**: 1.0830
- **Exit Time**: 08:47 AM
- **P&L**: -$200 (20 pips loss)
- **Exit Emotion**: Frustration, Regret
- **Exit Conviction**: 4/10
- **Exit Plan Adherence**: Yes (stopped out as planned)
- **Exit Reason**: "Hit stop loss, price rejected support and continued down"
- **Exit Notes**: "Followed plan, but entry was early. Should have waited for confirmation candle close."


Status: **Closed**


### What This Entry Reveals
Later, analytics will show:


- Conviction gap: 8 → 4 = -4 (discipline decay despite following plan)
- Emotional shift: Confident/Calm → Frustration/Regret (psychological cost even on rule-compliant loss)
- Adherence: Yes at entry, Yes at exit (you followed your rules but still feel regret—this is normal and worth tracking)


If you hadn't logged emotions and conviction, this trade would only show as a "-$200 loss, stopped out." The psychological context would be lost.


## Manual Entry Workflow


### Step 1: Decide When to Log
You can log trades at three points:


- **Before execution**: Log planned trades to capture your intent
- **At execution**: Log entered trades immediately after opening the position
- **After exit**: Log closed trades after the fact (less accurate for psychology, but better than nothing)


### Step 2: Fill Required Fields
At minimum, provide:


- Symbol, side, entry price, position size, account


This gives you financial records for balance tracking and P&L calculation.


### Step 3: Add Psychology Data
If you want analytics and AI insights, add:


- Entry emotions (up to 3)
- Entry conviction score (1-10)
- Plan adherence (Yes/Partial/No)
- Optional: Notes and tags


### Step 4: Update at Exit
When the trade closes, update it with:


- Exit price, exit time, P&L
- Exit emotions, exit conviction, exit adherence
- Exit reason and notes


### Step 5: Review in Trade Thread
After closing, view the trade's timeline (Thread view) to see the complete lifecycle: entry emotions → mid-trade notes → exit emotions → rule violations → AI insights.


## Limitations & Notes


### Manual Entry Is Slower Than CSV Import
If you have 100+ historical trades, CSV import is faster. Manual entry works best for real-time logging or small batches.


### Memory Bias Affects Delayed Entries
If you log trades days or weeks after the fact, your memory distorts the emotional context. Conviction scores and emotions will reflect how you feel now, not how you felt then. For accurate psychology data, log trades as close to execution as possible.


### Planned Trades Can Become Stale
If you log a planned trade but never execute it, mark it as **Cancelled**. Leaving planned trades open indefinitely clutters your open positions view.


### Manual Entry Does Not Replace CSV Import for Reconciliation
Even if you manually enter every trade, importing your broker CSV later is recommended. This reconciles your manual entries with official financial records and catches any trades you forgot to log.


### Consistency Matters More Than Perfection
You don't need to log every field for every trade. But if you log conviction scores, log them consistently. Partial data is better than no data, but inconsistent data breaks pattern detection. Pick a minimum set of fields (e.g., emotions + conviction) and stick with it.
