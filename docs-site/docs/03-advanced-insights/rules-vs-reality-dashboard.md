---
id: rules-vs-reality-dashboard
title: Rules vs Reality Dashboard
sidebar_label: Rules vs Reality Dashboard
---

# Rules vs Reality Dashboard


## What the Dashboard Is


The Rules vs Reality Dashboard is TradeMonkey's long-term execution mirror for rule adherence. It aggregates rule evaluation data across all trades to show whether you follow the rules you set for yourself.


This is not an analytics vanity page showing performance metrics. It is a behavioral truth instrument that reveals:


- **Adherence over time**: Are you following your rules consistently, or is discipline eroding?
- **Discipline decay trends**: Is adherence declining week-over-week or month-over-month?
- **Violation streaks**: Are rule violations isolated incidents or clustered patterns?
- **Structural rule-breaking patterns**: Which rules are violated most often? Under what conditions?


The dashboard answers: "Do I follow my stated rules? If not, when and why do I break them?"


## Role as Execution Mirror


The Rules vs Reality Dashboard completes TradeMonkey's execution mirror trilogy:


1. **Plan vs Execution**: Did you follow your trade plan? (per-trade adherence flags)
2. **State vs Outcome**: What mental state produced what results? (emotion-based analytics)
3. **Rules vs Reality**: Did you follow your self-imposed rules? (long-term compliance) ← This


The dashboard does not judge whether your rules are good or bad. It only shows whether you follow them. You can have:


- **High adherence + poor performance**: You consistently follow bad rules
- **Low adherence + good performance**: You break your rules but profit anyway (discipline issue remains)
- **High adherence + good performance**: Rules work and you follow them (ideal)
- **Low adherence + poor performance**: You break rules and lose money (double problem)


The dashboard reflects adherence, not effectiveness. Rules Coach helps define rules. Rules vs Reality Dashboard shows whether you follow them.


## What the Dashboard Measures


The dashboard calculates and displays multiple dimensions of rule adherence:


### Global Adherence Score


**Definition**: Percentage of rule evaluations that passed across all trades and all rules.


**Calculation**:
```
Global Adherence Score = (Total Rules Passed) / (Total Rules Evaluated) × 100
```


**Example**:
- 60 trades
- 5 active rules per trade
- 300 total rule evaluations (60 × 5)
- 261 passed, 39 violated
- Global Adherence Score: 87% (261 / 300)


**What it shows**: Overall compliance across all rules. A declining global score indicates behavioral drift.


**What it does NOT show**: Which specific rules are violated, or which conditions trigger violations. For that, use rule-level breakdown.


### Rule-by-Rule Adherence Breakdown


**Definition**: Adherence percentage calculated separately for each rule.


**Calculation**:
```
Rule Adherence = (Times Rule Passed) / (Times Rule Evaluated) × 100
```


**Example**:
- Rule: "Max 3 trades per day"
- Evaluated: 40 trading days
- Passed: 36 days
- Violated: 4 days
- Adherence: 90% (36 / 40)


**Displayed as table**:


| Rule Name | Evaluated | Passed | Violated | Adherence |
|-----------|-----------|--------|----------|-----------|
| Max 3 trades per day | 40 | 36 | 4 | 90% |
| Allowed time window (8-12) | 60 | 52 | 8 | 87% |
| Min 2:1 R:R ratio | 60 | 54 | 6 | 90% |
| No trading after 3 losses | 12 | 9 | 3 | 75% |


**What it shows**: Which rules you follow consistently vs which you break frequently. Identifies weak points in discipline.


### Severity Weighting (Optional)


**Definition**: Not all violations are equally significant. Severity weighting allows more important rules to carry more weight in global adherence score.


**Implementation** (if enabled):
- Daily loss limit violations: Weight × 3 (high severity)
- Time window violations: Weight × 2 (medium severity)
- Tag requirement violations: Weight × 1 (low severity)


**Weighted Calculation**:
```
Weighted Adherence = (Sum of Weighted Passes) / (Sum of Weighted Evaluations) × 100
```


**Note**: Severity weighting is optional and configured per organization. Default: all rules weighted equally.


### Daily and Session-Based Violation Summaries


**Daily Summary**: Count of violations per calendar day.


**Example**:
- Monday: 0 violations (clean day)
- Tuesday: 2 violations (time window, max trades)
- Wednesday: 0 violations
- Thursday: 4 violations (max trades, max loss, no trading after losses, position size)
- Friday: 1 violation (time window)


**What it shows**: Violation clustering by day. Identifies whether violations are isolated or clustered (multi-violation days indicate discipline collapse).


**Session-Based Summary**: Count of violations by time of day or trading session.


**Example**:
- Morning session (8 AM - 12 PM): 2 violations out of 34 trades (6% violation rate)
- Afternoon session (2 PM - 6 PM): 9 violations out of 26 trades (35% violation rate)


**What it shows**: Time-based discipline patterns. Reveals whether violations concentrate in specific sessions.


### Cumulative Violations by Rule Type


**Definition**: Total count of violations per rule since inception or within time window.


**Grouped by rule category**:


| Rule Category | Total Violations |
|---------------|------------------|
| Time & Session | 12 |
| Trade Count & Exposure | 8 |
| Risk & Loss | 5 |
| Behavior & Discipline | 11 |
| Tag Compliance | 3 |


**What it shows**: Which rule types are violated most often. Identifies behavioral weakness areas (e.g., time management vs risk management vs setup discipline).


### Color-Coded Adherence Categories


**Definition**: Visual indicators showing whether adherence is stable, improving, or deteriorating.


**Categories**:


**Stable (Green)**
- Adherence 80-100%
- Recent adherence (Last 20 trades) within 5% of all-time adherence
- Pattern: Consistent compliance


**Deteriorating (Red)**
- Recent adherence (Last 20) is >10% lower than all-time
- Example: All-time 85%, Last 20: 68%
- Pattern: Discipline decay


**Improving (Blue)**
- Recent adherence (Last 20) is >10% higher than all-time
- Example: All-time 65%, Last 20: 82%
- Pattern: Discipline recovery


**Unstable (Yellow)**
- Recent adherence fluctuates >15% between reviews
- Example: Week 1: 90%, Week 2: 65%, Week 3: 88%
- Pattern: Inconsistent discipline


**Color coding applies to**:
- Global adherence score
- Individual rule adherence
- Session-based adherence


**What it shows**: Trajectory of discipline, not just current state. Reveals improvement or relapse even if absolute adherence is moderate.


### Chronic vs Acute Rule Failure


**Chronic Failure**: Rule violated consistently over time, low adherence percentage.


**Criteria**:
- Adherence <60%
- Violations spread across multiple weeks
- No significant improvement in recent window


**Example**:
- Rule: "Max 3 trades per day"
- Adherence: 52% (violated 19 out of 40 days)
- Violations spread across 8 weeks
- Pattern: Chronic overtrading


**Acute Failure**: Rule violated in clusters, high adherence overall but severe lapses.


**Criteria**:
- Adherence >75% overall
- Violations clustered in 1-2 time periods (days, weeks)
- Recent adherence may show spike then recovery


**Example**:
- Rule: "No trading after 3 losses"
- Adherence: 83% (violated 2 out of 12 applicable situations)
- Both violations occurred in same week (losing streak)
- Pattern: Acute breakdown under pressure


**Dashboard indicators**:
- Chronic: "Consistently violated" badge, trend line shows flat low adherence
- Acute: "Violation cluster detected" badge, trend line shows spike then recovery


**What it shows**: Whether discipline issues are systemic (chronic) or situational (acute). Guides intervention strategy.


## Dashboard Components


The dashboard is organized into four main panels:


### 1. Adherence Score Panel


**Location**: Top of dashboard, prominently displayed


**Contents**:
- **Global Adherence Score**: Large percentage (e.g., "87%")
- **Recent vs All-Time Comparison**: "Last 20: 82% | All Time: 87%"
- **Trend Indicator**: Arrow showing improvement, decline, or stability
- **Color Coding**: Green (stable), Red (deteriorating), Blue (improving), Yellow (unstable)


**What this panel shows**: At-a-glance compliance status. First thing you see when reviewing rules.


### 2. Rule-Level Breakdown Table


**Location**: Middle of dashboard, sortable table


**Columns**:
1. **Rule Name**: Human-readable rule label (e.g., "Max 3 trades per day")
2. **Type**: Rule category (Time & Session, Risk & Loss, Behavior, etc.)
3. **Evaluated**: How many times rule was checked
4. **Passed**: Count of passes
5. **Violated**: Count of violations
6. **Adherence %**: Pass percentage
7. **Recent Trend**: Arrow (up/down/flat) comparing recent to all-time
8. **Status**: Stable / Deteriorating / Improving / Unstable


**Sorting Options**:
- By adherence (lowest first): Shows weakest rules
- By violations (highest first): Shows most frequently broken rules
- By recent trend (deteriorating first): Shows where discipline is slipping
- By evaluation count (highest first): Shows most relevant rules (evaluated often)


**Clicking a rule**: Opens detailed view showing:
- All trades where rule was evaluated
- Violation context (time of day, emotion tags, trade outcome)
- Violation timeline
- Link to trades for review


**What this table shows**: Granular rule-by-rule compliance. Identifies which specific rules need attention.


### 3. Violation Timeline


**Location**: Bottom half of dashboard, chronological visualization


**Display Format**: Timeline with markers for each violation


**Example**:
```
Week 1:  ✓ ✓ ✓ ✓ ✓ ✓ ✓   (clean week, 7 trades, 0 violations)
Week 2:  ✓ ✓ ✗ ✓ ✓ ✓ ✗   (2 violations)
Week 3:  ✓ ✓ ✓ ✓ ✓ ✓ ✓   (clean week)
Week 4:  ✗ ✗ ✗ ✓ ✗ ✓ ✗   (5 violations - CLUSTER)
```


**Violation markers show**:
- Rule name (hover to see which rule)
- Violation reason (hover for details)
- Trade outcome (win/loss, P&L)
- Emotion tags (if violation correlates with specific emotions)


**Clustering Detection**:
When 3+ violations occur within 5 trades or 2 days, dashboard highlights:
> "Violation cascade detected: 5 violations in 7 trades from [date] to [date]"


**What clustering reveals**:
- Emotional breakdown periods (after losses, during drawdowns)
- Discipline collapse after long sessions
- Revenge trading episodes
- Tilting patterns


**Contextual Filtering**:
- Filter by rule type (show only "Max trades/day" violations)
- Filter by time period (show only this week/month)
- Filter by outcome (show only violations that resulted in losses)


### 4. Contextual Insights Panel


**Location**: Side panel or expandable section


**Contents**:
- **Most Violated Rule**: Which rule you break most often
- **Violation Triggers**: Conditions that precede violations (after losses, afternoon, specific emotions)
- **Cost of Violations**: P&L impact of trades with violations vs without
- **Improvement Opportunities**: Rules with recent deterioration


**Example Insights**:
> "Most violated: 'Max 3 trades per day' (10 violations)"
> "87% of 'Max trades' violations occur after first trade was a loss"
> "Violation trades: -$85 avg P&L. Non-violation trades: +$62 avg P&L"


**What this panel shows**: Actionable context for improving discipline. Highlights patterns and costs.


## Using the Dashboard Effectively


### Weekly Review Workflow


1. **Check Global Adherence**: Is it stable, improving, or deteriorating?
2. **Review Rule-Level Breakdown**: Which rules have lowest adherence?
3. **Examine Violation Timeline**: Are violations clustered or spread out?
4. **Read Contextual Insights**: What triggers violations?
5. **Identify Focus Area**: Pick one rule to improve this week


### Monthly Review Workflow


1. **Compare Month-over-Month Adherence**: Is discipline trending up or down?
2. **Identify Chronic Failures**: Which rules consistently underperform?
3. **Analyze Violation Clusters**: When did discipline collapse?
4. **Calculate Violation Cost**: How much did rule-breaking cost this month?
5. **Adjust Rules if Needed**: Are rules too strict? Too lenient? Irrelevant?


### When to Adjust Rules


**Consider tightening rules when**:
- Adherence >95% (rules may be too easy)
- Performance is poor despite high adherence (rules don't protect you)


**Consider loosening rules when**:
- Adherence <50% (rules may be unrealistic)
- Violations don't correlate with worse performance (rules may be unnecessary)


**Consider removing rules when**:
- Rule is never evaluated (doesn't apply to your trading style)
- Rule has 100% adherence for 3+ months (may be redundant or ingrained)
