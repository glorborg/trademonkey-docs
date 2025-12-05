---
id: psychology-tracking
title: Psychology Tracking
sidebar_label: Psychology Tracking
---

# Psychology Tracking


## What Psychology Tracking Is


Psychology tracking captures your mental state at critical decision points during trade execution. This data links what you felt to what you did and what resulted. The system does not interpret these links as good or bad—it only shows correlations and patterns.


Psychology tracking is the second mirror in TradeMonkey's trilogy:


1. **Plan vs Execution**: Did you follow your stated plan?
2. **State vs Outcome**: What mental state produced what execution results? ← This
3. **Rules vs Reality**: Did you follow your defined rules?


The goal is factual pattern detection: "When you felt X and had conviction level Y, your trades resulted in Z." No judgment. No coaching. Just the mirror reflecting the data.


## The Psychology Data Model


TradeMonkey captures three types of psychological data:


### Emotions
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


Emotions are not single-state. Real trading decisions often combine multiple emotions:
- Confident + Impatient (strong setup, rushed execution)
- Fear + Calm (nervous but disciplined)
- FOMO + Greed (chasing price with inflated expectations)


Multi-emotion tagging produces richer analytics than single-emotion tagging.


### Conviction Scores
Numeric rating (1-10 scale) representing your confidence in the trade decision at entry and exit.


**Score Interpretation:**
- **1-3**: Low conviction (weak setup, breaking rules, impulsive, uncertain)
- **4-6**: Medium conviction (decent setup, some criteria met, moderate confidence)
- **7-9**: High conviction (strong setup, all criteria satisfied, aligned with plan)
- **10**: Maximum conviction (rare, perfect setup, highest confidence)


Conviction scores are subjective but should be anchored to observable criteria. Define what each range means for you and score consistently.


**Entry Conviction**: How confident were you in the setup when you opened the trade?


**Exit Conviction**: How confident were you in the exit decision when you closed the trade?


The gap between entry and exit conviction reveals discipline trends:
- Negative gap (e.g., entry 8, exit 3) = Discipline decay during execution
- Positive gap (e.g., entry 3, exit 8) = Strengthened confidence (less common)
- Zero gap = Consistent conviction throughout trade


### Plan Adherence
Binary or ternary flag indicating whether you followed your trading plan at entry and exit.


**Values:**
- **Yes**: Followed plan exactly, all entry/exit criteria met
- **Partial**: Mostly followed plan, minor deviation (e.g., one criterion skipped)
- **No**: Ignored plan, impulsive or off-plan trade


**Entry Plan Adherence**: Did you follow your entry rules when opening this trade?


**Exit Plan Adherence**: Did you follow your exit plan when closing this trade?


Plan adherence is subjective. Only you know if you "sort of" followed your plan. Log it honestly. The system uses this data to detect when adherence breaks down (time of day? after losses? certain setups?).


## Why Mental State Tracking Matters


Financial data (entry price, exit price, P&L) shows what happened. Psychology data shows why it happened and how it felt. This context enables pattern detection that financial data alone cannot provide.


### Financial Data Alone (Incomplete Story)
> "Trade 1: EURUSD, entered 1.0850, exited 1.0830, -$200 loss"


This tells you what happened but not why. Was this a disciplined stop-out on a good setup? Or a panic exit on a bad entry?


### Financial + Psychology Data (Complete Story)
> "Trade 1: EURUSD, entered 1.0850, exited 1.0830, -$200 loss
> - Entry emotion: Confident, Calm
> - Entry conviction: 8/10
> - Entry plan adherence: Yes
> - Exit emotion: Frustration, Regret
> - Exit conviction: 3/10
> - Exit plan adherence: No
> - Exit reason: Panic sold on pullback, stop loss was 1.0820"


This reveals the pattern: You entered strong and disciplined, but conviction collapsed during execution. You exited emotionally (frustration, regret), not at your planned level (SL was 1.0820, you closed at 1.0830). This is a discipline decay pattern, not a bad setup pattern.


Without psychology data, this looks like a failed trade. With psychology data, this looks like an execution failure despite a valid setup.


### Pattern Detection Across Multiple Trades
One trade with psychology data is interesting. Twenty trades with psychology data reveal patterns:


- "When entry emotion includes 'FOMO,' win rate is 22%"
- "When entry conviction is below 5, average loss is -$180 per trade"
- "When exit conviction drops 5+ points from entry, 80% of trades are closed before stop or target is hit"
- "Confident + Calm entries outperform Fear + Impatient entries by 35% win rate"


These patterns are invisible without mental state data. Financial data shows results. Psychology data shows why those results occurred.


## How Psychology Data Flows Through TradeMonkey


Psychology inputs feed into four key systems:


### 1. State vs Outcome Analytics
Located on the Psychology page, these analytics calculate performance by mental state:


**Performance by Emotion:**
- Win rate by entry emotion (e.g., "Confident: 68%, FOMO: 25%")
- Average P&L by entry emotion (e.g., "Calm: +$142, Revenge: -$95")
- Emotional cost (e.g., "FOMO-tagged trades cost you $2,800 this quarter")


**Performance by Conviction Level:**
- Win rate by conviction range (e.g., "Conviction 7-10: 65%, Conviction 1-3: 30%")
- Average P&L by conviction level (e.g., "High conviction wins more and loses less than low conviction")


**Conviction Gap Analysis:**
- Measures discipline decay (exit conviction - entry conviction)
- Identifies trades where confidence collapsed during execution
- Correlates conviction gaps with outcomes (negative gaps = worse performance)


**Emotional Transitions:**
- Entry emotion → Exit emotion patterns (e.g., "Confident → Regret" vs "Confident → Satisfied")
- Identifies which emotional shifts predict dissatisfaction or poor outcomes


**Plan Adherence Breakdown:**
- Percentage of trades with full adherence vs partial vs violations
- Performance comparison: adherence vs non-adherence
- Time-based adherence trends (adherence decay over days/weeks)


### 2. Execution Recap
Execution Recap displays psychology data alongside entry/exit screenshots. When reviewing trades visually, you see:


- Entry screenshot + entry emotions + entry conviction → Validates if conviction matched setup quality
- Exit screenshot + exit emotions + exit conviction → Reveals if exit was planned or emotional


This visual + psychological pairing exposes execution gaps:
- Entry screenshot shows clean setup (conviction 9 makes sense), exit screenshot shows you closed mid-pullback (conviction 3 reveals panic)


### 3. Time-Scoped Analytics
Time-Scoped Analytics allows filtering by date range to detect time-based psychological trends:


- "Week 1: Average entry conviction 7.8, Week 4: Average entry conviction 5.2" (conviction decay over time)
- "Morning trades: 75% plan adherence, Afternoon trades: 40% plan adherence" (session-based discipline collapse)
- "First 10 trades of month: Fear appears 2 times, Last 10 trades: Fear appears 8 times" (emotional shift under pressure)


### 4. AI Insight Engines
TradeMonkey's AI features (Trade Thread Summary, Deep Dive Explorer, Mirror Analysis) analyze psychology data to surface behavioral patterns:


**AI Diagnostics (3/day limit):**
Generates insights like:
> "Your conviction drops an average of 4.2 points from entry to exit on losing trades, but only 0.8 points on winning trades. This suggests confidence collapse predicts exits before stop or target is hit."


**Deep Dive Explorer (25 sessions/day):**
Allows follow-up questions:
- "Why does my conviction drop so much on losing trades?"
- "What happens when I enter with FOMO emotion?"
- "Do afternoon trades with low conviction perform differently than morning trades with low conviction?"


**Trade Thread Summaries (5/day limit):**
Analyzes individual trades with full psychological context:
> "Entry: Confident + Calm, conviction 8, plan adherence Yes. Exit: Frustration + Regret, conviction 3, plan adherence No. Pattern: Discipline decay. You entered strong, exited emotionally before planned level."


The more complete your psychology data, the more specific and actionable the AI insights.


## Meaningful Emotional Pattern Examples


These examples are factual, clinical observations derived from psychology tracking. They describe patterns without prescribing solutions.


### Pattern 1: FOMO Entry Cost
> "You tagged 18 trades with 'FOMO' entry emotion this month. Win rate: 22%. Average P&L: -$145 per trade. Total cost: -$2,610. These trades averaged entry conviction of 4.2, significantly lower than your overall average of 6.8. Exit emotions on FOMO trades: Regret (14 times), Frustration (11 times), Relief (8 times). Pattern: FOMO entries correlate with low conviction, high regret, and poor performance."


### Pattern 2: Conviction Gap and Early Exits
> "You have 23 trades with conviction gap of -4 or worse (entry conviction at least 4 points higher than exit conviction). Of these, 19 (83%) were closed before stop loss or take profit was hit. Average P&L: -$88. Exit emotions on gap trades: Frustration (16 times), Regret (15 times), Relief (10 times). Pattern: Large negative conviction gaps predict emotional exits before planned levels."


### Pattern 3: Calm + Confident Outperformance
> "You tagged 32 trades with entry emotions 'Calm' and 'Confident' simultaneously. Win rate: 72%. Average P&L: +$185 per trade. Plan adherence on these trades: 91% (Yes or Partial). Exit emotions: Satisfied (22 times), Pride (18 times), Relief (14 times). Pattern: Calm confidence at entry correlates with high adherence, positive outcomes, and emotional satisfaction at exit."


### Pattern 4: Revenge Trading After Losses
> "You tagged 9 trades with 'Revenge' entry emotion. Eight of these occurred within 30 minutes of a losing trade. Win rate: 11% (1 win, 8 losses). Average P&L: -$210 per trade. Entry conviction on revenge trades: 3.1 average. Plan adherence: 0% (all marked 'No' or 'Partial'). Pattern: Revenge entries occur immediately after losses, have minimal conviction, violate plans, and lose money."


### Pattern 5: Session-Based Emotional Shift
> "Trades entered before 12:00 PM: Average entry conviction 7.4, 'Confident' tagged 65% of the time, 'Fear' tagged 12% of the time. Trades entered after 2:00 PM: Average entry conviction 5.1, 'Confident' tagged 28% of the time, 'Fear' or 'FOMO' tagged 58% of the time. Win rate before noon: 68%. Win rate after 2 PM: 34%. Pattern: Afternoon trading shows lower conviction, more impulsive emotions, and worse performance."


### Pattern 6: Plan Adherence and Emotional Outcome
> "Trades with entry adherence 'Yes' and exit adherence 'Yes' (full alignment): 45 trades, win rate 61%, exit emotions mostly 'Satisfied' or 'Pride.' Trades with entry adherence 'Yes' and exit adherence 'No' (execution drift): 22 trades, win rate 32%, exit emotions mostly 'Regret' or 'Frustration.' Pattern: Discipline decay during execution (adherence breakdown) correlates with regret and worse performance, even when entry was planned."
