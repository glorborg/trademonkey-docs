---
id: execution-patterns
title: Execution Patterns
sidebar_label: Execution Patterns
---

# Execution Patterns


## What Execution Patterns Are


Execution patterns are statistically meaningful recurring behaviors that appear across multiple dimensions of your trading data. Unlike single-trade observations or one-time events, patterns represent consistent tendencies that repeat under similar conditions.


A pattern combines:


- **Psychology**: Emotions, conviction scores, plan adherence
- **Compliance**: Rule violations and adherence rates
- **Outcomes**: P&L, win rate, risk-reward
- **Timing**: Time of day, session, day of week
- **Context**: Setup tags, account type, market conditions


Execution patterns answer: "What behaviors consistently repeat? Under what conditions? With what outcomes?"


Patterns are not rules. Rules are prescriptive statements you set ("Max 3 trades per day"). Patterns are descriptive observations TradeMonkey detects ("After losing first trade, you exceed daily trade limit 35% of the time").


## What Qualifies as a Pattern


Not every correlation is a pattern. TradeMonkey identifies patterns based on statistical thresholds and repetition criteria:


### Statistical Significance Requirements


**Minimum Occurrences**: Pattern must appear in at least 5 instances


**Example**:
- "FOMO entries lose money": Requires at least 5 FOMO-tagged trades
- "Afternoon conviction drops": Requires at least 5 afternoon trades with conviction drops


**Rationale**: Fewer than 5 instances may be noise, not signal.


**Correlation Strength**: Pattern must show meaningful difference from baseline


**Example**:
- FOMO trades: 22% win rate
- Non-FOMO trades: 58% win rate
- Difference: 36 percentage points (meaningful)


vs


- Morning trades: 54% win rate
- Afternoon trades: 52% win rate
- Difference: 2 percentage points (not meaningful, likely variance)


**Threshold**: Minimum 15% difference in win rate, or ±$50 difference in average P&L, or 20% difference in adherence


**Consistency**: Pattern must appear across multiple time periods


**Example**:
- Week 1: FOMO trades 20% win rate
- Week 2: FOMO trades 25% win rate
- Week 3: FOMO trades 18% win rate
- Pattern: Consistently low win rate (stable pattern)


vs


- Week 1: FOMO trades 20% win rate
- Week 2: FOMO trades 65% win rate
- Week 3: FOMO trades 15% win rate
- Not a pattern: High variance, inconsistent (likely small sample or changing conditions)


### Repetition Criteria


**Temporal Consistency**: Pattern appears across at least 2 distinct time periods (weeks, sessions, or trade batches)


**Conditional Consistency**: Pattern appears across multiple examples of the same condition


**Example**:
- Condition: "After 2+ consecutive losses"
- Instances: 8 times
- Pattern behavior: 7 out of 8 times, next trade violated "Max trades" rule
- Consistency: 87% (strong pattern)


**Multi-Dimensional Validation**: Pattern appears in related metrics, not just one


**Example**:
- Pattern: "Afternoon trades underperform"
- Evidence across dimensions:
  - Win rate: 38% afternoon vs 68% morning (30% gap)
  - Average P&L: -$34 afternoon vs +$118 morning ($152 gap)
  - Conviction scores: 5.2 afternoon vs 7.4 morning (2.2 point gap)
  - Plan adherence: 43% afternoon vs 76% morning (33% gap)
- Multi-dimensional validation: All metrics point to same pattern


**Example of non-pattern** (single dimension only):
- Afternoon trades: 52% win rate vs morning 58% (small gap)
- Afternoon P&L: +$85 vs morning +$92 (negligible)
- Afternoon conviction: 6.8 vs morning 6.9 (negligible)
- Only win rate shows minor difference, other metrics similar → Not a pattern


## How Patterns Are Detected


TradeMonkey uses multiple systems to surface execution patterns:


### 1. Psychology Tracking Analytics


**Detection Method**: Aggregates trades by emotion, conviction level, and adherence, then calculates performance metrics for each category.


**Patterns Detected**:
- **Emotional cost**: Which emotions correlate with losses?
- **Conviction gaps**: When does confidence collapse?
- **Adherence breakdown**: Where does discipline fail?


**Example Output**:
> "FOMO-tagged trades: 18 instances, 22% win rate, -$2,610 total cost. Pattern: FOMO emotion consistently correlates with poor outcomes."


**Data Used**: Emotions, conviction scores, plan adherence flags, P&L


### 2. Rules vs Reality Dashboard


**Detection Method**: Tracks rule violations over time, identifies clustering and contextual conditions.


**Patterns Detected**:
- **Violation clustering**: Do violations concentrate in specific conditions?
- **Chronic vs acute failures**: Is rule-breaking systemic or situational?
- **Conditional compliance**: Does adherence vary by time, emotion, or setup?


**Example Output**:
> "Max 3 trades/day violated 8 times. 7 out of 8 violations occurred after first trade was a loss. Pattern: Opening loss triggers overtrading."


**Data Used**: Rule evaluations, violation timestamps, trade outcomes, tags


### 3. Time-Scoped Analytics


**Detection Method**: Compares performance metrics across different time windows (morning vs afternoon, weekday vs weekend, recent vs historical).


**Patterns Detected**:
- **Session-based variance**: Do results differ by time of day?
- **Behavioral decay**: Is discipline eroding over time?
- **Day-of-week effects**: Does performance vary by day?


**Example Output**:
> "Morning trades (before 12 PM): 68% win rate, 76% adherence. Afternoon trades (after 2 PM): 38% win rate, 43% adherence. Pattern: Afternoon discipline collapse."


**Data Used**: Trade timestamps, performance metrics, adherence scores


### 4. AI Diagnostics


**Detection Method**: Scans all data dimensions using machine learning to identify correlations and multi-dimensional patterns human analysis might miss.


**Patterns Detected**:
- **Multi-factor patterns**: Combinations of conditions (e.g., afternoon + FOMO + after losses)
- **Hidden correlations**: Non-obvious relationships (e.g., conviction drops occur 22 minutes after entry)
- **Temporal patterns**: Sequences and cascades (e.g., violation triggers more violations)


**Example Output**:
> "Conviction drops by 4.2 points on losing trades vs 0.8 on winners. 83% of trades with conviction gap < -4 closed before stop or target. Pattern: Large conviction drops predict premature exits."


**Data Used**: All available structured data (emotions, conviction, adherence, outcomes, timing, tags)


### 5. AI Deep Dive Explorer


**Detection Method**: User-directed exploration to investigate specific patterns in depth through follow-up questions.


**Patterns Detected**:
- **Causal chains**: Why does pattern X occur?
- **Amplifying conditions**: What makes pattern X stronger?
- **Conditional variance**: Does pattern X differ under condition Y?


**Example Output**:
> **You**: "Why does my conviction drop during trades?"
> **AI**: "Conviction drops occur most frequently when trades go 15+ pips negative. 86% of conviction-drop trades had drawdowns exceeding 15 pips."


**Data Used**: Same as AI Diagnostics, but explored interactively based on user questions


### 6. Execution Recap


**Detection Method**: Visual review of multiple trades in sequence, allowing human pattern recognition through before/after screenshots and psychological data.


**Patterns Detected**:
- **Visual setup deterioration**: Do entry screenshots show weaker setups in certain conditions?
- **Emotional consistency**: Do certain emotions appear together frequently?
- **Exit behavior clusters**: Do premature exits concentrate in specific sessions?


**Example Output**:
> User observes: "8 out of last 10 afternoon trades show cluttered entry screenshots and low conviction scores, while morning trades show clean setups and high conviction. Visual pattern: Afternoon setup quality deteriorates."


**Data Used**: Screenshots, emotions, conviction, outcomes


## How Patterns Feed Into AI Features


Execution patterns are the raw material for TradeMonkey's AI features. Detected patterns enable AI to provide specific, data-driven insights.


### AI Diagnostics Uses Patterns


**Pattern Detection → Diagnostic Finding**


**Example 1**:
- **Pattern Detected**: FOMO entries have 22% win rate across 18 instances, $2,610 total cost
- **Diagnostic Finding**: "FOMO entry cost: -$2,610 this month. 18 instances, 22% win rate. Pattern: FOMO emotion consistently correlates with poor outcomes."


**Example 2**:
- **Pattern Detected**: Afternoon trades show 43% adherence vs 76% morning adherence across 52 trades
- **Diagnostic Finding**: "Afternoon discipline breakdown: 43% plan adherence vs 76% morning adherence. 18 afternoon trades, 45% win rate. Pattern: Afternoon trading shows lower adherence and worse performance."


**Without patterns**: AI Diagnostics would only report raw statistics ("52 trades this month"). With patterns, it surfaces significant correlations.


### AI Deep Dive Explorer Uses Patterns


**Pattern Detection → Exploration Starting Point**


**Example**:
- **Pattern Detected**: Conviction drops 4.2 points on losing trades
- **User Asks Deep Dive**: "Why does my conviction drop so much on losing trades?"
- **AI Explores Pattern**: Analyzes when conviction drops occur, what triggers them, which conditions amplify them


**Pattern provides context for exploration**: Without detected pattern, user wouldn't know what to explore. Pattern detection identifies which questions to ask.


### Time-Scoped Analytics Uses Patterns


**Pattern Detection → Temporal Comparison**


**Example**:
- **Pattern Detected**: Recent win rate (48%) is 10% lower than all-time (58%)
- **Time-Scoped Display**: "Last 30 Days: 48% win rate (↓ 10% from all-time 58%). Pattern: Recent performance decline."


**Pattern provides directionality**: Without pattern detection (comparing recent to all-time), Time-Scoped Analytics would just show current metrics without revealing trends.


### Rules vs Reality Dashboard Uses Patterns


**Pattern Detection → Violation Context**


**Example**:
- **Pattern Detected**: "Max trades/day" rule violated 8 times, 7 after opening loss
- **Dashboard Display**: "Violations: 8. Pattern: 87% of violations occur after first trade of day was a loss. Days starting with losses: 35% violation rate."


**Pattern provides actionable context**: Without pattern detection, dashboard would only show violation count. Pattern reveals when/why violations occur.


## Clinical Pattern Examples


These examples show execution patterns using TradeMonkey's mirror language: descriptive, not prescriptive.


### Pattern 1: Afternoon Discipline Collapse


**Detected Across**:
- Psychology Tracking: Afternoon trades show entry conviction 5.2 avg vs morning 7.4 avg
- Rules Dashboard: Afternoon plan adherence 43% vs morning 76%
- Time-Scoped Analytics: Afternoon win rate 38% vs morning 68%
- Execution Recap: Visual confirmation of weaker entry setups in afternoon


**Pattern Statement (Clinical)**:
> "Trades entered after 2 PM show 38% plan adherence vs 76% before 2 PM. Afternoon trades: 18 total, 38% win rate, average P&L -$34, entry conviction 5.2. Morning trades: 34 total, 68% win rate, average P&L +$118, entry conviction 7.4. Conviction gap in afternoon: -3.1 avg vs -1.4 morning. Pattern: Afternoon trading shows lower conviction, lower adherence, and worse performance across all dimensions."


**What pattern reveals**: Time of day correlates with discipline and performance variance. Afternoon sessions exhibit multi-dimensional deterioration.


**What pattern does NOT say**: "Stop trading after 2 PM" or "You're tired in the afternoon" (coaching/interpretation).


### Pattern 2: Conviction Decay Predicts Premature Exits


**Detected Across**:
- Psychology Tracking: Trades with conviction gap < -4 have 28% win rate vs 65% for gap > -2
- AI Diagnostics: 83% of high-gap trades closed before stop or target
- Deep Dive Explorer: Drops correlate with 15+ pip drawdowns


**Pattern Statement (Clinical)**:
> "Trades where exit conviction is 4+ points lower than entry conviction: 23 instances, 28% win rate, 83% closed before stop loss or take profit was hit. Average P&L: -$88. Conviction drops occur most frequently (86%) when trades go 15+ pips negative from entry. Pattern: Large conviction gaps predict early exits before planned levels."


**What pattern reveals**: Confidence collapse during trade execution correlates with premature, non-plan exits and worse outcomes.


### Pattern 3: Post-Loss Overtrading


**Detected Across**:
- Rules Dashboard: "Max trades/day" violations cluster after losses
- AI Diagnostics: 87% of violations occur on days starting with loss
- Time-Scoped Analytics: Violation rate 35% after loss vs 2% after win


**Pattern Statement (Clinical)**:
> "Max 3 trades per day violated 8 times this month. 7 out of 8 violations (87%) occurred on days when first trade was a loss. Days starting with loss: 20 total, 7 violations (35% violation rate). Days starting with win: 24 total, 1 violation (2% violation rate). Pattern: Opening loss strongly predicts subsequent overtrading."


**What pattern reveals**: Losing first trade correlates with discipline breakdown and rule violations later in session.


### Pattern 4: FOMO Emotional Cost


**Detected Across**:
- Psychology Tracking: FOMO-tagged trades 22% win rate vs 58% non-FOMO
- AI Diagnostics: FOMO trades have lower conviction and higher regret
- Execution Recap: FOMO entry screenshots show volatile, extended moves


**Pattern Statement (Clinical)**:
> "Trades tagged with 'FOMO' entry emotion: 18 instances, 22% win rate, -$2,610 total cost (-$145 avg per trade). Entry conviction on FOMO trades: 4.1 avg (vs 6.8 overall). Exit emotions on FOMO trades: Regret 78%, Frustration 67%. Non-FOMO trades: 40 instances, 58% win rate, +$3,240 total. Pattern: FOMO emotion correlates with low conviction, poor outcomes, and high regret."


**What pattern reveals**: FOMO as entry emotion consistently correlates with multi-dimensional underperformance.
