---
id: threads
title: Threads (Life of a Trade)
sidebar_label: Threads
---

# Threads (Life of a Trade)


## What a Thread Is


A thread is the complete chronological timeline of a single trade's lifecycle. It captures everything that happened from plan to execution to reflection, displayed as a sequential narrative.


Each thread contains:


- **Entry events**: When you opened the trade, your emotions, conviction, notes, screenshots
- **Mid-trade events**: Notes added while the trade was open, rule violations detected, psychological shifts
- **Exit events**: When you closed the trade, exit emotions, conviction, plan adherence, exit screenshots
- **Post-trade events**: Reflections, AI analysis, pattern observations


Threads differ from Execution Recap in purpose and structure:


- **Execution Recap**: Visual feed showing multiple trades with before/after screenshots. Purpose: pattern detection across trades.
- **Threads**: Deep narrative view of a single trade's execution story. Purpose: understand what happened inside one trade from start to finish.


Threads answer: "What was the complete psychological and execution journey of this specific trade?"


## How Threads Centralize Execution Context


When you log a trade, data is scattered across multiple fields:


- Entry price, stop loss, take profit (financial data)
- Entry emotions, conviction, adherence (psychology at entry)
- Exit price, exit time, P&L (financial outcome)
- Exit emotions, conviction, adherence (psychology at exit)
- Screenshots (visual context)
- Notes (reasoning and observations)
- Rule violations (compliance events)
- Reflections (post-trade analysis)


Threads bring all of this data together in chronological order. Instead of viewing fields in a form, you see the story:


1. **10:05 AM**: Trade planned, conviction 8, emotions: Confident + Calm, notes: "Clean breakout setup, three confluence factors present"
2. **10:07 AM**: Trade entered at 1.0850
3. **10:15 AM**: Mid-trade note added: "Price pulling back to entry, testing support"
4. **10:22 AM**: Rule violation detected: "Max daily trades exceeded (trade #4, limit is 3)"
5. **10:47 AM**: Trade closed at 1.0830, P&L: -$200
6. **10:48 AM**: Exit emotions logged: Frustration + Regret, conviction 3, adherence: No, notes: "Panic sold on pullback, stop was 1.0820, closed too early"
7. **11:02 AM**: Post-trade reflection added: "Good setup, bad execution. Conviction collapsed when price tested entry. Should have trusted the plan and let stop protect me."
8. **11:05 AM**: AI Thread Summary generated: "Entry conviction 8, exit conviction 3, gap: -5. Pattern: Discipline decay. You entered strong, exited emotionally before planned level. This is the 4th trade this week with conviction gap > 4."


This timeline shows not just what you did, but when you did it and how your mental state evolved during execution.


## Thread Events and Their Meanings


Threads are composed of discrete events, each representing a moment in the trade's lifecycle:


### Entry Events


**Entry Created**
- **When**: Trade is first logged (planned or entered status)
- **Data**: Symbol, side, entry price, position size, account, status
- **Purpose**: Marks the beginning of the thread


**Entry Emotions**
- **When**: Logged at entry (can be added later if missing)
- **Data**: Up to 3 emotions (confident, fear, FOMO, revenge, calm, greed)
- **Purpose**: Captures mental state when decision was made


**Entry Notes**
- **When**: Logged at entry (optional)
- **Data**: Free-text reasoning for why you took the trade
- **Purpose**: Documents your thought process and setup criteria


**Entry Screenshot**
- **When**: Captured at or near entry time
- **Data**: Chart image showing market context at entry
- **Purpose**: Visual proof of what you saw when you entered


**Entry Conviction and Adherence**
- **When**: Logged at entry
- **Data**: Conviction score (1-10), plan adherence (Yes/Partial/No)
- **Purpose**: Quantifies confidence and discipline at entry


### Mid-Trade Events


**Mid-Trade Note**
- **When**: Added while trade is open (status = "entered")
- **Data**: Free-text observation or reaction
- **Purpose**: Captures real-time thoughts during execution
- **Examples**:
  - "Price hit TP1, scaled out 50%"
  - "Getting nervous, price chopping near entry"
  - "Strong move in my favor, considering trailing stop"


**Rule Violation**
- **When**: Detected automatically when rule is broken (entry, close, or edit)
- **Data**: Rule name, violation reason, severity, timestamp
- **Purpose**: Documents compliance breaches in context
- **Note**: Violations are logged automatically by the Rules vs Reality engine


**Screenshot Added**
- **When**: Manually added during or after the trade
- **Data**: Chart image with optional caption
- **Purpose**: Captures additional visual context (e.g., mid-trade setup change, key level break)


### Exit Events


**Exit Notes**
- **When**: Logged when trade is closed
- **Data**: Free-text explanation of exit decision
- **Purpose**: Documents why you closed (hit stop? hit target? panic? plan change?)


**Exit Emotions**
- **When**: Logged at exit
- **Data**: Up to 3 emotions (relief, regret, pride, frustration, satisfied)
- **Purpose**: Captures emotional state at exit


**Exit Screenshot**
- **When**: Captured at or near exit time
- **Data**: Chart image showing market context at exit
- **Purpose**: Visual proof of what price action looked like when you closed


**Exit Conviction and Adherence**
- **When**: Logged at exit
- **Data**: Exit conviction score (1-10), exit plan adherence (Yes/Partial/No)
- **Purpose**: Quantifies confidence in exit decision and whether you followed exit plan


### Post-Trade Events


**Reflection**
- **When**: Added after trade is closed (can be minutes, hours, or days later)
- **Data**: Free-form reflection text (up to 2000 characters)
- **Purpose**: Post-trade analysis, lessons learned, pattern observations
- **Note**: Multiple reflections can be added to one trade over time


**AI Thread Summary**
- **When**: Generated on-demand after trade is closed (5/day limit)
- **Data**: AI-generated summary of the trade's psychological journey
- **Purpose**: Highlights patterns, conviction gaps, emotional shifts, behavioral signals
- **Example**: "Conviction drop of 5 points from entry to exit. Pattern: Discipline decay. Exit occurred 10 pips before stop loss, suggesting panic response to volatility."


**Deep Psychology Analysis**
- **When**: Generated on-demand for significant trades (separate from Thread Summary)
- **Data**: AI analysis of cognitive biases, behavioral risks, emotional patterns
- **Purpose**: Deeper exploration of why certain decisions were made
- **Note**: This is distinct from AI Diagnostics (global patterns) and focuses on single-trade psychology


## Threads vs Execution Recap


Both features show trade execution data, but they serve different purposes:


### Execution Recap (Pattern Detection Feed)


**Structure**: Multi-trade grid or list view


**Display**: Before/after screenshots side-by-side, with emotions and P&L for each trade


**Purpose**: Review 10-20+ trades in sequence to identify patterns across trades


**Use case**: "I want to see if my afternoon trades show weaker setups and lower conviction"


**Typical workflow**:
1. Filter trades by time of day, emotion, or account
2. Scroll through multiple trades rapidly
3. Notice visual patterns (weaker entry screenshots after 2 PM)
4. Notice psychological patterns (conviction drops in afternoon)
5. Form hypothesis about behavioral trends


**Strengths**: Fast pattern scanning across many trades


**Limitations**: Shallow per-trade context (no mid-trade notes, no reflections, no timeline)


### Threads (Deep Single-Trade Narrative)


**Structure**: Chronological timeline of one trade's events


**Display**: Vertical event feed showing each moment from plan to reflection


**Purpose**: Understand the complete execution story of a specific trade


**Use case**: "I want to understand what happened during my biggest loss this week"


**Typical workflow**:
1. Open thread for a specific trade (e.g., biggest loss, biggest win, rule violation)
2. Read through events chronologically
3. See how conviction shifted from entry to exit
4. Review mid-trade notes to understand what you were thinking during execution
5. See rule violations in context (when they occurred, what triggered them)
6. Read post-trade reflections and AI analysis


**Strengths**: Complete psychological and execution context for deep analysis


**Limitations**: Slow (one trade at a time), not useful for cross-trade pattern detection


### When to Use Each


**Use Execution Recap when**:
- Reviewing 20-30 trades to detect patterns
- Comparing morning vs afternoon performance visually
- Scanning for emotion-based setup quality differences
- Looking for session or time-of-day trends


**Use Threads when**:
- Analyzing a significant trade (big win, big loss, emotional trade)
- Investigating a rule violation (what led to it? what happened after?)
- Reviewing a trade for lessons learned (post-session or post-week review)
- Understanding conviction decay (how and when confidence collapsed)
- Preparing for AI Deep Dive questions (need full context to ask good questions)


In practice, traders use both:


1. Scan Execution Recap to find interesting trades (e.g., "5 trades with conviction gap > 5")
2. Open threads for those trades to see the full story
3. Use insights from threads to ask better questions in AI Deep Dive Explorer


## How Data Accumulates Inside a Thread


Threads are append-only timelines. Events are added as they occur, creating a historical record.


### Initial Thread Creation
When you first log a trade (planned or entered), the thread is created with minimal data:


- Entry created event (time, symbol, side, entry price, status)


At this point, the thread has one event. This is the minimum required to start a thread.


### Real-Time Additions (During Trade)
As the trade progresses, you can add:


- Entry emotions, conviction, adherence (if not added initially)
- Entry screenshot (if not added initially)
- Entry notes (reasoning for the trade)
- Mid-trade notes (observations while trade is open)
- Additional screenshots (if price reaches key levels or setup changes)


These additions are timestamped and inserted into the chronological timeline.


### Exit Event Cluster
When you close the trade, several events are typically logged at once:


- Trade closed (exit price, exit time, P&L)
- Exit emotions, conviction, adherence
- Exit notes (why you closed)
- Exit screenshot (what price action looked like at exit)


The thread now shows a clear before/during/after structure.


### Post-Trade Accumulation
After the trade is closed, the thread remains open for additional context:


- **Reflections**: You can add multiple reflections over time. For example:
  - Immediate reflection (within minutes of close): Emotional reaction, initial thoughts
  - End-of-session reflection (hours later): Calmer analysis, pattern recognition
  - Weekly review reflection (days later): How this trade fits into larger patterns


- **AI Analysis**: You can generate AI Thread Summary or Deep Psychology Analysis on-demand. These are added as events with timestamps.


- **Screenshots**: You can upload additional screenshots later (e.g., "Here's what happened 10 minutes after I closed—price went to my target without me")


Each addition is timestamped and inserted in chronological order. The thread grows as a living document of the trade's complete story.


### Thread Immutability and Editing
Events are generally immutable once logged (to preserve historical accuracy). However:


- **Emotions and conviction can be edited** (within 24 hours if lock setting is enabled) to correct logging errors
- **Notes can be edited** (free-form text is always editable)
- **Screenshots can be added or removed** (visual context can be updated)
- **Reflections can be edited** (post-trade analysis can be refined)


Rule violations and timestamps are immutable. You cannot delete a violation or change when an event occurred.


## Using Threads for Deep Trade Analysis


Threads are most valuable when you need to understand the complete story of a trade:


### Analyzing Conviction Decay


When you notice a large conviction gap (e.g., entry 8, exit 3), the thread shows:


1. What your conviction was at entry (and why—notes explain reasoning)
2. What happened during the trade (mid-trade notes capture thoughts)
3. When conviction started dropping (if you added notes during execution)
4. What triggered the exit (notes explain the final decision)


This narrative context explains why conviction collapsed—was it price action? Fear? Impatience? The thread reveals the psychological journey.


### Investigating Rule Violations


When a rule is violated, the thread shows:


1. When the violation occurred (timestamp)
2. What rule was broken (rule name and details)
3. What you were doing at the time (entry/mid-trade/exit context)
4. What happened after (did you continue trading despite violation?)


This context helps you understand patterns: Do you violate rules when stressed? After losses? Late in the session?


### Preparing for AI Deep Dive


Before asking questions in AI Deep Dive Explorer, reviewing the thread gives you context:


1. You remember what happened during this trade
2. You can ask specific questions: "Why did my conviction drop at 10:22 AM?"
3. You have the full story, so you can evaluate whether the AI's analysis is accurate


Threads make AI conversations more productive by grounding them in specific trade context.
