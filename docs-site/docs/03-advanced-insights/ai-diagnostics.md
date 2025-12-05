---
id: ai-diagnostics
title: AI Diagnostics
sidebar_label: AI Diagnostics
---

# AI Diagnostics


## What AI Diagnostics Is


AI Diagnostics is a single-pass analytical summary that identifies behavioral patterns across your recent trades. It processes your trading data—emotions, conviction scores, plan adherence, rule violations, and outcomes—to generate a clinical report of observable patterns.


This is not a conversation. It is not exploratory. It is a one-time diagnostic snapshot that answers: "What patterns exist in my recent trading behavior?"


AI Diagnostics provides breadth: it scans all available dimensions of your data (emotions, conviction, adherence, rules, timing, outcomes) and highlights the most significant patterns. It does not go deep on any single pattern—that is the role of AI Deep Dive Explorer.


## Purpose and Role


AI Diagnostics serves as a behavioral pattern detector. After logging 20-50 trades, you run AI Diagnostics to surface:


- **Emotional cost patterns**: Which emotions correlate with losses?
- **Conviction gaps**: When does confidence collapse during execution?
- **Discipline breakdown**: Where does plan adherence fail?
- **Rule violation clusters**: Which rules are violated most frequently?
- **Time-based patterns**: Does performance vary by session or time of day?
- **Setup quality indicators**: Do certain tags or strategies underperform?


The diagnostic output is a structured report, not a conversation. You read it, note significant patterns, and decide what (if anything) to investigate further using other features.


### AI Diagnostics vs Other Features


**AI Diagnostics (Breadth)**
- **Purpose**: Scan all data dimensions for significant patterns
- **Output**: Structured summary report (5-10 key findings)
- **Interaction**: One-way (you request, AI delivers report, done)
- **Use case**: "What patterns exist in my data?"


**AI Deep Dive Explorer (Depth)**
- **Purpose**: Explore one specific pattern in detail
- **Output**: Conversational Q&A (up to 5 levels deep)
- **Interaction**: Two-way (you ask, AI answers, you ask follow-up, repeat)
- **Use case**: "Why does my conviction drop during trades?"


**Trade Thread Summary (Narrative)**
- **Purpose**: Explain what happened in one specific trade
- **Output**: Single-trade timeline analysis
- **Interaction**: One-way (you request, AI analyzes one trade, done)
- **Use case**: "What happened during this specific losing trade?"


**Rules Coach (Configuration)**
- **Purpose**: Help define or explain trading rules
- **Output**: Rule proposals or violation explanations
- **Interaction**: Guided wizard or Q&A
- **Use case**: "Help me create rules from my strategy description"


AI Diagnostics is the starting point. It identifies patterns worth investigating. Deep Dive explores those patterns. Thread Summary explains individual trades. Rules Coach helps enforce discipline going forward.


## What Inputs AI Diagnostics Uses


AI Diagnostics analyzes all available trade data, prioritizing psychological and behavioral dimensions:


### Primary Inputs (Required)


**Trade Financial Data**
- Entry and exit prices
- Position size
- P&L (realized profit/loss)
- Stop loss and take profit (if set)
- Trade status (closed trades only)
- Entry and exit timestamps


**Emotion Data**
- Entry emotions (up to 3 per trade)
- Exit emotions (up to 3 per trade)
- Frequency counts of each emotion
- Emotional transitions (entry → exit patterns)


**Conviction Scores**
- Entry conviction (1-10 scale)
- Exit conviction (1-10 scale)
- Conviction gap (exit - entry)
- Gap distribution (how many trades with large negative gaps)


**Plan Adherence Flags**
- Entry plan adherence (Yes / Partial / No)
- Exit plan adherence (Yes / Partial / No)
- Adherence percentage overall
- Adherence breakdown by outcome (did adherent trades perform better?)


**Rule Violations**
- Which rules were violated
- Violation frequency per rule
- Violation timing (at entry, during trade, at exit)
- Overall rule adherence score


### Secondary Inputs (Optional, Enhance Analysis)


**Tags**
- Setup tags (breakout, pullback, reversal, etc.)
- Session tags (london-session, new-york-open, etc.)
- Strategy tags (scalp, swing, etc.)
- Performance by tag


**Notes and Reflections**
- Entry notes (setup reasoning)
- Exit notes (exit reasoning)
- Post-trade reflections
- Common keywords or themes in notes


**Time-Based Data**
- Time of day for entry and exit
- Day of week
- Session context (morning, afternoon, evening)
- Trade duration


**Screenshots** (Context Only)
- Screenshots are not directly analyzed by AI (image processing not implemented)
- But their presence/absence is noted (trades with screenshots vs without)


### Data Volume Requirements


AI Diagnostics produces meaningful patterns with:


- **Minimum**: 20 closed trades with emotion and conviction data
- **Recommended**: 50+ trades for stable patterns
- **Optimal**: 100+ trades for multi-dimensional analysis


With fewer than 20 trades, AI Diagnostics will generate a report, but patterns may not be statistically reliable. The report will note data limitations.


## Expected Output Structure


AI Diagnostics generates a structured clinical report with 5-10 key findings. Each finding follows this format:


### Finding Structure


**Pattern Name**: Descriptive label (e.g., "Conviction Decay on Losing Trades")


**Observation**: Factual statement of what the data shows


**Evidence**: Specific numbers supporting the pattern


**Context**: When/where the pattern occurs (time of day, setup type, etc.)


**No Prescription**: The finding describes what exists, not what to do about it


### Example Diagnostic Output


```
AI DIAGNOSTIC REPORT
Generated: [Timestamp]
Trades Analyzed: 52 (Last 30 Days)
Data Completeness: Emotions 94%, Conviction 98%, Adherence 96%


---


FINDING 1: Conviction Decay During Execution
Your conviction drops an average of 4.2 points from entry to exit on losing trades,
but only 0.8 points on winning trades. This suggests confidence collapse predicts
premature exits. Of 23 trades with conviction gap < -4, 19 (83%) were closed before
stop loss or take profit was hit. Average P&L on these early-exit trades: -$88.


Evidence: Entry conviction (losers): 7.4 avg, Exit conviction (losers): 3.2 avg.
Winners: Entry 7.6, Exit 6.8 (stable).


---


FINDING 2: FOMO Entry Cost
You tagged 12 trades with "FOMO" entry emotion this month. Win rate: 25% (3 wins, 9 losses).
Average P&L: -$142 per trade. Total cost: -$1,704. FOMO trades averaged entry conviction
of 4.1, significantly lower than your overall average of 6.8. Exit emotions on FOMO trades:
Regret (10 times), Frustration (8 times).


Evidence: FOMO trades: 12. Non-FOMO trades: 40. FOMO win rate: 25%. Non-FOMO win rate: 58%.


---


FINDING 3: Afternoon Discipline Breakdown
Trades entered after 2:00 PM show 38% plan adherence vs 76% adherence before 2:00 PM.
Afternoon trades: 18 total, 45% win rate, average P&L -$22. Morning trades: 34 total,
62% win rate, average P&L +$118. Afternoon trades have higher conviction gaps (-3.1 avg)
than morning trades (-1.4 avg).


Evidence: Before 2 PM: 34 trades, 76% adherence. After 2 PM: 18 trades, 38% adherence.


---


FINDING 4: Rule Violation Clustering After Losses
You violated "Max 3 trades per day" 8 times this month. Of these 8 violations, 7 occurred
on days when your first trade was a loss. Pattern: After an opening loss, you continue
trading despite exceeding limits. Days starting with a win: 2% violation rate. Days
starting with a loss: 35% violation rate.


Evidence: Days starting with loss: 20. Violations on those days: 7. Days starting with
win: 24. Violations on those days: 1.


---


FINDING 5: High Conviction Exits Outperform
Trades where exit conviction remained 7 or higher: 72% win rate (18 wins, 7 losses).
Trades where exit conviction dropped below 5: 28% win rate (5 wins, 13 losses). This
suggests maintaining conviction through execution correlates with positive outcomes.
Exits with conviction < 5 were 85% premature (closed before stop or target).


Evidence: Exit conviction ≥ 7: 25 trades, 72% win rate. Exit conviction < 5: 18 trades,
28% win rate.
```


### Output Characteristics


**Clinical Tone**: No motivational language, no criticism, no coaching. Pure observation.


**Data-Specific**: Uses your actual numbers (trade counts, percentages, dollar amounts, conviction scores).


**Correlation, Not Causation**: States what correlates (FOMO → losses) without claiming causation ("FOMO causes losses").


**No Prescription**: Never says "You should stop trading FOMO setups" or "You need to maintain conviction." Only describes the pattern.


**Contextualized**: Patterns include when/where they occur (time of day, after losses, certain setups).


**Prioritized**: Most significant patterns listed first (ordered by impact: dollar cost, frequency, or deviation from baseline).


## Rate Limits and Cost Considerations


AI Diagnostics is rate-limited to encourage thoughtful usage and prevent the trader from "analysis paralysis".


### Usage Limits


**Daily Limit**: 3 requests per day per user


**Reset Time**: Midnight UTC


**Shared Limits**: AI Diagnostics does NOT share its limit with other AI features. You have:
- 3 AI Diagnostics per day (separate)
- 5 Trade Thread Summaries per day (separate)
- 5 Reflection AI per day (separate)
- 25 Deep Dive Explorer sessions per day (separate)
- 20 Rules Coach requests per day (separate)


### Cache Behavior


AI Diagnostics caches results for 1 hour. If you request AI Diagnostics twice within 1 hour with no new trades logged:


- Second request returns cached response
- Does NOT consume a credit
- Report is identical to first request


If new trades are logged between requests:


- Cache is invalidated
- Fresh analysis runs
- Consumes a new credit


### When to Use Your Daily Credits


**Recommended usage pattern**:


**Credit 1**: End-of-week review (Friday or Sunday)
- Review full week's trades
- Generate diagnostic to identify weekly patterns
- Use insights to plan next week


**Credit 2**: Mid-month check-in (around day 15)
- Review first half of month
- Detect early warning signs of behavioral drift
- Adjust rules or strategy if needed


**Credit 3**: End-of-month review (last day or first day of new month)
- Review full month's trades
- Generate diagnostic to measure monthly performance and patterns
- Set goals for next month


**Alternative pattern** (for active traders):


**Credit 1, 2, 3**: Weekly reviews only
- Run diagnostics every Sunday for the past week
- Consistent weekly feedback loop
- Save mid/end-of-month reviews for Time-Scoped Analytics (no credit consumption)


### What Happens When Limit Is Hit


If you've used all of your credits:


- **In-app message**: "You've reached your daily AI Diagnostics limit (3/3 used). Resets at midnight UTC (X hours)."
- **Button disabled**: "Generate AI Diagnostics" button is grayed out
- **Alternative suggested**: "Use Time-Scoped Analytics to review patterns manually until reset."


**You can still**:
- View previous diagnostic reports (saved in your account)
- Use all other analytics (Psychology page, Rules vs Reality, Time-Scoped filters)
- Use other AI features (Deep Dive, Thread Summary, Rules Coach have separate limits)


### Managing Your Credits


**Strategies to avoid wasting credits**:


1. **Batch new trades before running diagnostics**: If you log 5 trades on Monday, wait until Friday to run diagnostics (includes all 5 + rest of week). Don't run diagnostics after every trade.


2. **Use Time-Scoped Analytics first**: Manually review Psychology page and Rules vs Reality page with time filters. Identify areas of interest. Then run AI Diagnostics to get AI's perspective on those areas.


3. **Save reports**: Screenshot or copy-paste diagnostic reports to your notes. You can reference them without re-running diagnostics.


4. **Leverage cache**: If you want to re-read a report within 1 hour, just request it again (no credit consumed).


5. **Reserve for significant data updates**: If you only traded 2-3 times since last diagnostic, patterns won't change much. Wait until you have 10-20 new trades.


## Using AI Diagnostics Effectively


### Best Time to Run Diagnostics


- **End of trading week**: After all trades for the week are logged and closed
- **After significant trading activity**: When you have 10+ new trades since last diagnostic
- **Before monthly review sessions**: To prepare insights for self-review


### What to Do With the Report


1. **Read through all findings**: Understand what patterns exist
2. **Prioritize by impact**: Focus on patterns with highest dollar cost or frequency
3. **Note questions**: What do you want to understand better?
4. **Use Deep Dive Explorer**: Ask follow-up questions about specific patterns
5. **Consider rule adjustments**: If patterns suggest rule violations, review your rules
6. **Add to trading journal**: Document key insights for long-term tracking
