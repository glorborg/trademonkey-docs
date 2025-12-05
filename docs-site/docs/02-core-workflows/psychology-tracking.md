---
id: psychology-tracking
title: Psychology Tracking
sidebar_label: Psychology Tracking
---

# Psychology Tracking

## What Psychology Tracking Is

Psychology tracking captures your mental state at critical decision points during trade execution. This data links what you felt to what you did and what resulted. The system does not interpret these links as good or bad — it only shows correlations and patterns.

Psychology tracking is the second mirror in TradeMonkey's trilogy:

1. **Plan vs Execution**: Did you follow your stated plan?  
2. **State vs Outcome**: What mental state produced what execution results? (This one)  
3. **Rules vs Reality**: Did you follow your defined rules?

The goal is factual pattern detection:  
"When you felt X and had conviction level Y, your trades resulted in Z."  

No judgment. No coaching. Just the mirror reflecting the data.

---

## The Psychology Data Model

TradeMonkey captures three types of psychological data:

### 1. Emotions

Multi-select emotion tags that describe your mental state at entry and exit. You can select up to 3 emotions per decision point.

**Entry Emotions:**

- **Confident**: Strong belief in the setup, clear edge identified  
- **Calm**: Relaxed, no urgency, executing according to plan  
- **Fear**: Nervous about risk, uncertain about outcome, hesitant  
- **FOMO** (Fear of Missing Out): Impulsive entry driven by watching price move without you  
- **Revenge**: Entering to "get back" losses, emotionally driven  
- **Greed**: Oversized expectations, targeting unrealistic profits  

**Exit Emotions:**

- **Relief**: Glad to be out, regardless of outcome  
- **Regret**: Wish you had exited differently (earlier, later, at different price)  
- **Pride**: Satisfied with execution quality, followed plan well  
- **Frustration**: Annoyed by outcome or your decision-making  
- **Satisfied**: Content with result and execution process  

Emotions are not single-state. Real trading decisions often combine multiple emotions, for example:

- Confident + Impatient (strong setup, rushed execution)  
- Fear + Calm (nervous but disciplined)  
- FOMO + Greed (chasing price with inflated expectations)  

Multi-emotion tagging produces richer analytics than single-emotion tagging.

---

### 2. Conviction Scores

A numeric rating (1–10) representing your confidence in the trade decision at entry and exit.

**Score Interpretation:**

- **1–3**: Low conviction (weak setup, breaking rules, impulsive, uncertain)  
- **4–6**: Medium conviction (decent setup, some criteria met, moderate confidence)  
- **7–9**: High conviction (strong setup, all criteria satisfied, aligned with plan)  
- **10**: Maximum conviction (rare, "perfect" setup, highest confidence)  

Conviction scores are subjective but should be anchored to observable criteria. Define what each range means for you and score consistently.

- **Entry Conviction**: How confident were you in the setup when you opened the trade?  
- **Exit Conviction**: How confident were you in the exit decision when you closed the trade?  

The gap between entry and exit conviction reveals discipline trends:

- Negative gap (e.g., entry 8, exit 3) → discipline decay during execution  
- Positive gap (e.g., entry 3, exit 8) → strengthened confidence (less common)  
- Zero gap → consistent conviction throughout the trade  

---

### 3. Plan Adherence

A binary or ternary flag indicating whether you followed your trading plan at entry and exit.

**Values:**

- **Yes**: Followed plan exactly; all entry/exit criteria met  
- **Partial**: Mostly followed plan, minor deviation (e.g., one criterion skipped)  
- **No**: Ignored plan; impulsive or off-plan trade  

- **Entry Plan Adherence**: Did you follow your entry rules when opening this trade?  
- **Exit Plan Adherence**: Did you follow your exit plan when closing this trade?  

Plan adherence is subjective. Only you know if you "sort of" followed your plan. Log it honestly. The system uses this data to detect when adherence breaks down (time of day, after losses, during specific setups, etc.).

---

## Why Mental State Tracking Matters

Financial data (entry price, exit price, P&L) shows **what happened**. Psychology data shows **why it happened** and **how it felt**. Together, they unlock patterns that financial data alone can't reveal.

### Financial Data Alone (Incomplete Story)

"Trade 1: EURUSD, entered 1.0850, exited 1.0830, -$200 loss."

This tells you what happened but not why. Was this a disciplined stop-out on a good setup? Or a panic exit on a bad entry?

### Financial + Psychology Data (Complete Story)

"Trade 1: EURUSD, entered 1.0850, exited 1.0830, -$200 loss  
– Entry emotion: Confident, Calm  
– Entry conviction: 8/10  
– Entry plan adherence: Yes  
– Exit emotion: Frustration, Regret  
– Exit conviction: 3/10  
– Exit plan adherence: No  
– Exit reason: Panic sold on pullback, stop loss was 1.0820."

Now the pattern is clear:

- You entered strong and disciplined (high conviction, adherence = Yes).  
- Conviction collapsed during execution (8 → 3).  
- You exited emotionally, not at your planned level (closed early, not at 1.0820).

Without psychology data, this looks like "a losing trade."  
With psychology data, it looks like **an execution failure on a valid setup**.

### Pattern Detection Across Multiple Trades

One trade with psychology data is interesting. Twenty or more trades reveal patterns, for example:

- "When entry emotion includes FOMO, win rate is 22%."  
- "When entry conviction is below 5, average loss is -$180 per trade."  
- "When exit conviction drops 5+ points from entry, 80% of trades are closed before stop or target is hit."  
- "Confident + Calm entries outperform Fear + Impatient entries by 35% win rate."

Financial data shows results. Psychology data explains how your **state** contributed to those results.

---

## How Psychology Data Flows Through TradeMonkey

Psychology inputs feed into four key systems:

### 1. State vs Outcome Analytics

The Psychology page calculates performance by mental state.

**Performance by Emotion:**

- Win rate by entry emotion (e.g., "Confident: 68%, FOMO: 25%")  
- Average P&L by entry emotion (e.g., "Calm: +$142, Revenge: -$95")  
- Emotional cost (e.g., "FOMO-tagged trades cost you $2,800 this quarter")  

**Performance by Conviction Level:**

- Win rate by conviction range (e.g., "Conviction 7–10: 65%, 1–3: 30%")  
- Average P&L by conviction level  

**Conviction Gap Analysis:**

- Measures discipline decay: `Exit Conviction – Entry Conviction`  
- Identifies trades where confidence collapsed during execution  
- Correlates conviction gaps with outcomes (negative gaps = worse performance)  

**Emotional Transitions:**

- Entry emotion → Exit emotion patterns  
  - e.g., "Confident → Regret" vs "Confident → Satisfied"  
- Identifies which emotional shifts predict dissatisfaction or weak results  

**Plan Adherence Breakdown:**

- % of trades with full adherence vs partial vs violation  
- Performance comparison: adherence vs non-adherence  
- Time-based adherence trends (adherence decay over days/weeks)

---

### 2. Execution Recap

Execution Recap displays psychology data alongside entry/exit screenshots.

For each trade, you see:

- Entry screenshot + entry emotions + entry conviction → does conviction match setup quality?  
- Exit screenshot + exit emotions + exit conviction → was this a planned or emotional exit?

This pairing exposes execution gaps:

- Entry screenshot shows a clean setup (conviction 9 fits).  
- Exit screenshot shows a mid-pullback exit (conviction 3, adherence = No).

---

### 3. Time-Scoped Analytics

Time-Scoped Analytics lets you filter by date range and compare psychological trends over time:

- "Week 1: average entry conviction 7.8. Week 4: 5.2." (conviction decay)  
- "Morning trades: 75% plan adherence. Afternoon trades: 40%." (session-based discipline collapse)  
- "First 10 trades of month: Fear tagged 2 times. Last 10 trades: Fear tagged 8 times." (emotional shift under pressure)

---

### 4. AI Insight Engines

AI-driven features use psychology data to surface behavioral patterns:

**AI Diagnostics (limited daily runs)**  
Examples of output:

"Your conviction drops an average of 4.2 points from entry to exit on losing trades, but only 0.8 points on winning trades. Trades with a conviction gap of -4 or worse are often closed before stop or target is hit."

**Deep Dive Explorer**  

Sample questions you can ask:

- "Why does my conviction drop so much on losing trades?"  
- "What happens when I enter with FOMO emotion?"  
- "Do afternoon trades with low conviction perform differently than morning trades with low conviction?"  

**Trade Thread Summaries**  

For a single trade:

"Entry: Confident + Calm, conviction 8, plan adherence Yes.  
Exit: Frustration + Regret, conviction 3, plan adherence No.  
Pattern: Discipline decay — you entered strong, exited emotionally before the planned level."

The richer your psychology data, the more specific these insights become.

---

## Meaningful Emotional Pattern Examples

These examples show the kind of factual, clinical observations that psychology tracking can surface. They describe patterns — they don't tell you what to do.

### Pattern 1: FOMO Entry Cost

"You tagged 18 trades with 'FOMO' entry emotion this month.  
Win rate: 22%.  
Average P&L: -$145 per trade.  
Total cost: -$2,610.  
Average entry conviction: 4.2 (overall average: 6.8).  
Exit emotions: Regret (14), Frustration (11), Relief (8).  
Pattern: FOMO entries correlate with low conviction, high regret, and poor performance."

---

### Pattern 2: Conviction Gap and Early Exits

"You have 23 trades with conviction gap of -4 or worse (entry conviction at least 4 points higher than exit).  
19 of these (83%) were closed before stop loss or take profit was hit.  
Average P&L: -$88.  
Exit emotions: Frustration (16), Regret (15), Relief (10).  
Pattern: Large negative conviction gaps predict emotional exits before planned levels."

---

### Pattern 3: Calm + Confident Outperformance

"You tagged 32 trades with entry emotions 'Calm' and 'Confident' together.  
Win rate: 72%.  
Average P&L: +$185 per trade.  
Plan adherence: 91% (Yes or Partial).  
Exit emotions: Satisfied (22), Pride (18), Relief (14).  
Pattern: Calm confidence at entry correlates with high adherence, strong results, and emotionally satisfying exits."

---

### Pattern 4: Revenge Trading After Losses

"You tagged 9 trades with 'Revenge' entry emotion.  
8 occurred within 30 minutes of a losing trade.  
Win rate: 11% (1 win, 8 losses).  
Average P&L: -$210 per trade.  
Average entry conviction: 3.1.  
Plan adherence: 0% (all No or Partial).  
Pattern: Revenge entries occur immediately after losses, with low conviction, rule violations, and negative P&L."

---

### Pattern 5: Session-Based Emotional Shift

"Trades before 12:00 PM: average entry conviction 7.4; 'Confident' tagged 65% of the time; 'Fear' tagged 12%.  
Trades after 2:00 PM: average entry conviction 5.1; 'Confident' tagged 28%; 'Fear' or 'FOMO' tagged 58%.  
Win rate before noon: 68%.  
Win rate after 2 PM: 34%.  
Pattern: Afternoon trading shows lower conviction, more impulsive emotions, and worse performance."

---

### Pattern 6: Plan Adherence and Emotional Outcome

"Trades with entry adherence 'Yes' and exit adherence 'Yes': 45 trades, 61% win rate. Exit emotions: mostly 'Satisfied' or 'Pride.'  
Trades with entry adherence 'Yes' and exit adherence 'No': 22 trades, 32% win rate. Exit emotions: mostly 'Regret' or 'Frustration.'  
Pattern: Discipline decay during execution correlates with regret and worse performance, even when the entry followed your plan."

---

### Pattern 7: Fear Paralysis vs Fear Discipline

"You tagged 'Fear' on 28 entries.  
16 trades had conviction below 5 (fear + low confidence).  
12 trades had conviction of 7 or higher (fear + disciplined setup).  
Fear + low conviction: 25% win rate, -$95 average P&L.  
Fear + high conviction: 58% win rate, +$110 average P&L.  
Pattern: Fear itself is not the problem — low conviction combined with fear is."

---

## Support

If you're unsure how to structure your psychology tracking or notice data not appearing as expected, contact **hello@trademonkey.app**.
