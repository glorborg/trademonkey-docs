---
id: reflections
title: Reflections
sidebar_label: Reflections
---

# Reflections


## What a Reflection Is


A reflection is your factual record of your mental state, reasoning, and adherence to plan at specific decision points. Reflections contain three core data types:


- **Emotions**: What you felt (confident, fearful, impulsive, calm, etc.)
- **Conviction Scores**: How confident you were in your decision (1-10 scale)
- **Plan Adherence**: Whether you followed your rules (Yes / Partial / No)


Reflections are captured at two points in a trade's lifecycle:


1. **At Entry**: What you felt and thought when opening the position
2. **At Exit**: What you felt and thought when closing the position


You can also write free-form journal reflections that are not tied to specific trades. These capture your mental state during non-trading moments (pre-session planning, post-session review, or days when you stayed out of the market).


Reflections are not therapy notes or emotional venting. They are structured data inputs that feed TradeMonkey's analytics engine and AI pattern detection.


## When Reflections Are Captured


### During Manual Trade Entry
When you log a trade manually, you add reflection data at entry and exit:


- Entry emotions, conviction, adherence (logged when you open the trade)
- Exit emotions, conviction, adherence (logged when you close the trade)


This creates a before/after snapshot of your psychological state.


### After CSV Import (Optional)
If you import trades via CSV, the financial data is complete but psychology data is missing. You can manually add reflection data to these "orphaned" trades later by editing them. Without reflection data, these trades are excluded from emotion-based analytics.


### Post-Trade Reflection (Separate from Entry/Exit)
After a trade closes, you can write a detailed reflection in the Trade Thread view. This is free-form text where you analyze what happened, what you learned, or what patterns you noticed. AI Mirror Analysis can process this text to detect biases, behavioral risks, and cognitive filters.


### Free-Form Journal Reflections
You can write journal entries on any day, regardless of whether you traded. These capture your mental state, market observations, or reasons for not trading. Journal reflections support the same emotion and tag structure as trades, allowing TradeMonkey to track patterns across trading and non-trading days.


## How Reflection Data Powers Analytics and AI


### Emotions Enable Performance-by-State Analysis
If you consistently tag emotions, TradeMonkey can calculate:


- **Win rate by emotion**: "Fearful entries: 28% win rate. Confident entries: 62% win rate."
- **Emotional cost**: "FOMO-tagged trades cost you $3,200 this quarter."
- **Emotion transitions**: "Confident → Regret exits underperform Confident → Satisfied exits by 18%."


Without emotion tags, these analytics cannot run. Partial emotion data produces incomplete patterns.


### Conviction Scores Detect Discipline Decay
Conviction gap is calculated as:


```
Exit Conviction - Entry Conviction = Gap
```


Negative gaps indicate discipline decay or confidence loss during execution:


- Entry conviction 9, Exit conviction 4 = -5 gap (strong entry, weak exit—possibly panic sold or emotionally overrode plan)
- Entry conviction 3, Exit conviction 8 = +5 gap (weak entry, strong exit—possibly entered impulsively, exited rationally)


TradeMonkey's conviction gap analytics reveal whether you tend to start strong and weaken, or start weak and strengthen. This pattern is invisible without consistent conviction scoring.


### Plan Adherence Flags Behavioral Drift
Plan adherence at entry and exit creates a 2x2 matrix:


- **Full Alignment**: Adherence at entry = Yes, Adherence at exit = Yes (you followed your plan start to finish)
- **Execution Drift**: Adherence at entry = Yes, Adherence at exit = Partial/No (you started disciplined but broke plan during execution)
- **Impulsive Entry**: Adherence at entry = Partial/No, Adherence at exit = Yes (you entered off-plan but exited disciplined)
- **Full Violation**: Adherence at entry = Partial/No, Adherence at exit = Partial/No (you ignored your plan entirely)


Time-Scoped Analytics and AI Diagnostics use adherence flags to detect when and why you deviate from your rules. This feeds into the Rules vs Reality engine and execution pattern detection.


### AI Features Require Contextual Depth
TradeMonkey's AI features (Trade Thread Summary, Deep Dive Explorer, Mirror Analysis) analyze your reflection text and structured data to surface behavioral patterns. The more complete your reflections, the more specific the insights.


Example with minimal reflection data:
> "You traded 40 times this month."


Example with rich reflection data:
> "You traded 40 times this month. On 14 trades, you entered with conviction below 5. These low-conviction entries had a 20% win rate and averaged -$120 per trade. Twelve of these occurred in the final hour of your session, and nine were tagged with 'impatience' or 'FOMO.' Your notes on these trades mention 'need to hit daily target' six times."


The second analysis is only possible if you logged conviction scores, emotions, tags, and notes consistently.


## Good Reflection vs Unhelpful Reflection


Reflections should be factual, specific, and structured. Avoid vague emotional venting or motivational self-talk.


### Good Reflections (Factual, Specific)


**Entry Reflection:**
> "Entry emotion: Confident, Calm. Conviction: 8/10. Plan adherence: Yes. Notes: Waited for pullback to support as planned. Three confluence factors present: trend alignment, volume spike, RSI divergence. Entered 5 minutes after London open per session rule."


**Exit Reflection:**
> "Exit emotion: Frustration, Regret. Conviction: 3/10. Plan adherence: No. Exit reason: Panic sold on pullback. Notes: Trade was up 15 pips, reversed to +8 pips, I exited fearing reversal. Take profit was 25 pips. Broke my 'hold until TP or SL' rule."


**Journal Reflection (Non-Trading Day):**
> "Did not trade today. Market condition: Choppy, no clear bias. Emotion: Calm, Patient. Notes: Scanned setups pre-London, none met 3-confluence rule. Stayed out as planned. No FOMO."


### Why These Work
- **Structured data**: Emotions, conviction, and adherence are tagged, not described in prose
- **Specific observations**: "Three confluence factors," "up 15 pips, reversed to +8," "5 minutes after London open"
- **Factual tone**: No judgment ("I'm so undisciplined"), no motivation ("I'll do better tomorrow"), just what happened


### Unhelpful Reflections (Vague, Emotional)


**Entry Reflection:**
> "Felt good about this one."


**Exit Reflection:**
> "I hate myself for closing early. I always do this. Why can't I just follow my plan? I need to be more disciplined."


**Journal Reflection:**
> "Bad day. Market sucks. I'm never going to pass this challenge."


### Why These Don't Work
- **No structured data**: Emotions and conviction are described in text but not tagged as data
- **Vague**: "Felt good" doesn't specify which emotion (confident? calm? FOMO?)
- **Emotional venting**: Self-criticism and frustration are present, but no factual observations
- **No actionable patterns**: AI cannot extract "always do this" into a measurable pattern without specifics (time of day? setup type? conviction level?)


TradeMonkey is a mirror, not a therapist. Your reflections should sound like a medical chart, not a diary entry.


## How Consistent Reflections Improve Features


### Execution Recap
Execution Recap shows you the gap between your plan and your actual execution. If you log plan adherence consistently, Recap can display:


- Percentage of trades where you followed your plan at entry
- Percentage where you followed at exit
- Performance comparison: Full adherence vs partial adherence vs violation


Without adherence data, Recap can only show rule violations (automated checks), not subjective plan drift.


### Time-Scoped Analytics
Time-Scoped Analytics allows you to filter by date range and compare performance across different time periods. If your reflections are sparse or inconsistent, the system cannot detect:


- Emotional patterns over time (e.g., "You started the month confident, ended frustrated")
- Conviction trends (e.g., "Your average conviction score dropped from 7.2 to 4.8 in the final week")
- Adherence decay (e.g., "Week 1: 80% plan adherence. Week 4: 40% plan adherence.")


Consistent reflections enable these time-based comparisons.


### AI Deep Dive Explorer
Deep Dive Explorer lets you ask follow-up questions about your patterns. The AI generates specific, data-driven responses based on your reflection data. If your reflections are incomplete, the AI has less material to work with:


- Sparse emotions → Generic responses about win rate and P&L
- Complete emotions + conviction + notes → Specific responses about "low-conviction FOMO trades after 2 PM with 'impatience' tag"


The depth of your reflections determines the depth of the insights.


### Rules vs Reality Dashboard
Rules vs Reality tracks violations of your self-imposed rules. Automated rule checks (e.g., "Max 3 trades per day") work regardless of reflections. But subjective rules (e.g., "Only trade A+ setups") require plan adherence flags to measure compliance.


If you set a rule "Only trade when conviction ≥ 7" but never log conviction scores, the system cannot flag violations.


## Reflection Workflow Best Practices


### Capture Reflections in Real Time
Memory distorts quickly. If you log emotions and conviction hours after a trade closes, you're recording how you feel now, not how you felt then. For accurate data:


- Log entry emotions and conviction when you open the trade (or within 5 minutes)
- Log exit emotions and conviction immediately after closing (or within 5 minutes)


If you must log after the fact, note the delay in your reflection text: "Logging 2 hours post-close, memory may be inaccurate."


### Use the Full Emotion Palette
TradeMonkey supports multiple emotions per decision point (up to 3). Real trading decisions are rarely single-emotion states. Examples:


- Confident + Impatient (strong setup, but rushing execution)
- Fear + Calm (nervous about risk, but disciplined entry)
- FOMO + Greed (chasing price, expecting large win)


Multi-emotion tagging produces richer analytics than single-emotion tagging.


### Anchor Conviction Scores to Observable Criteria
Conviction is subjective, but you can make it more consistent by defining what each score means for you:


- 1-3: Weak setup, breaking my rules, impulsive
- 4-6: Decent setup, but missing confluence or unsure
- 7-9: Strong setup, all criteria met, aligned with plan
- 10: Perfect setup, rare, maximum confidence


Write these definitions down and reference them when scoring. This reduces score drift over time.


### Log Adherence Honestly
Plan adherence is a binary or ternary flag: Yes, Partial, or No. Be honest with yourself:


- **Yes**: You followed your entry/exit rules exactly
- **Partial**: You mostly followed, but skipped one rule or made a minor deviation
- **No**: You ignored your rules or acted impulsively


Don't default to "Yes" to make yourself feel better. The system cannot detect patterns if you misrepresent adherence.


### Add Notes for Context, Not Judgment
Notes should explain what happened factually, not judge your behavior:


- Good: "Entered without 3rd confirmation. Volume was weak. Broke my confluence rule."
- Bad: "I'm such an idiot for entering early. I never learn."


The first note provides data. The second provides emotion but no actionable pattern.


## Limitations & Notes


### Reflections Are Optional But Recommended
You can use TradeMonkey without logging emotions, conviction, or adherence. The system will still track trades, calculate P&L, and apply rules. But analytics and AI features will be limited to financial data only.


If you only want basic trade tracking, reflections are unnecessary. If you want behavioral pattern detection, reflections are essential.


### Reflection Fatigue Is Real
Logging full reflections for every trade can become tedious, especially if you trade frequently. Consider a hybrid approach:


- **Always log**: Emotions and conviction (quick, 10 seconds per trade)
- **Sometimes log**: Detailed notes (on significant trades, rule violations, or unusual outcomes)
- **Rarely log**: Full journal entries (weekly or on non-trading days)


Find a balance that captures enough data without burning out.
