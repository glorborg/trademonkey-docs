---
id: threads
title: Threads (Life of a Trade)
sidebar_label: Threads
---

# Threads (Life of a Trade)

## What a Thread Is

A **thread** is the complete chronological timeline of a single trade's lifecycle. It shows everything that happened from plan → execution → reflection, as a sequential narrative.

Each thread can include:

- **Entry events**: Order details, emotions, conviction, notes, screenshots  
- **Mid-trade events**: Notes while the trade is open, rule violations, psychological shifts  
- **Exit events**: Exit details, emotions, conviction, plan adherence, screenshots  
- **Post-trade events**: Reflections, AI analysis, pattern observations  

Threads are different from Execution Recap:

- **Execution Recap**: Multi-trade visual feed (before/after screenshots).  
  - Purpose: Pattern detection across many trades.  
- **Threads**: Single-trade narrative timeline.  
  - Purpose: Understand the full psychological and execution story of *one* trade.

Threads answer:

"What was the complete journey — financially and psychologically — of this specific trade?"

---

## How Threads Centralize Execution Context

When you log a trade, data is normally scattered:

- Entry / exit prices, P&L  
- Stop loss and take profit  
- Emotions, conviction, plan adherence  
- Screenshots (entry, mid-trade, exit)  
- Notes and reflections  
- Rule violations  

Threads unify all of that into a **time-ordered story**.

Example thread timeline:

1. **10:05 AM** – Planned trade created, conviction 8, emotions: Confident + Calm.  
   Notes: "Clean breakout, 3 confluence factors."  
2. **10:07 AM** – Trade entered at 1.0850.  
3. **10:15 AM** – Mid-trade note: "Price pulling back to entry, testing support."  
4. **10:22 AM** – Rule violation logged: "Max daily trades exceeded (trade #4, limit 3)."  
5. **10:47 AM** – Trade closed at 1.0830, P&L: -$200.  
6. **10:48 AM** – Exit emotions: Frustration + Regret, exit conviction 3, adherence: No.  
   Notes: "Panic sold on pullback, stop was 1.0820."  
7. **11:02 AM** – Reflection: "Good setup, bad execution. Conviction collapsed at re-test of entry. Should have trusted stop."  
8. **11:05 AM** – AI Thread Summary: "Entry conviction 8 → exit conviction 3 (gap -5). Fourth trade this week with gap > 4. Pattern: discipline decay."

Instead of a form with fields, you see the **life of the trade**.

---

## Thread Events and What They Mean

Threads are made of discrete, timestamped **events**.

### Entry Events

**Entry Created**

- When: Trade is first logged (planned or entered).  
- Data: Symbol, side, entry price, size, account, status.  
- Purpose: Starts the thread.

**Entry Emotions**

- When: Logged at or near entry.  
- Data: Up to 3 emotions (e.g., Confident, Fear, FOMO, Revenge, Calm, Greed).  
- Purpose: Captures emotional state at the moment of decision.

**Entry Conviction and Plan Adherence**

- When: Logged at entry.  
- Data: Conviction (1–10), plan adherence (Yes / Partial / No).  
- Purpose: Quantifies how strongly you believed in the setup and whether you followed your rules.

**Entry Notes**

- When: At entry.  
- Data: Free-text reasoning ("why I took this trade").  
- Purpose: Documents your setup, confluences, and context.

**Entry Screenshot**

- When: At or near entry.  
- Data: Chart image of price action at entry.  
- Purpose: Visual record of what you actually saw.

---

### Mid-Trade Events

**Mid-Trade Note**

- When: While trade is open.  
- Data: Free-text observations.  
- Examples:
  - "Price hit TP1, scaled out 50%."  
  - "Choppy now, starting to doubt entry."  
  - "News spike, volatility increased."  
- Purpose: Captures real-time thoughts and reactions.

**Rule Violation**

- When: Automatically logged when a rule is broken (entry, edit, or exit).  
- Data: Rule name, reason, timestamp.  
- Purpose: Shows exactly when compliance broke inside this trade.

**Screenshot Added**

- When: Any time during the trade.  
- Data: Chart snapshot + optional caption.  
- Purpose: Extra visual context (e.g., big level break, structure change).

---

### Exit Events

**Trade Closed**

- When: Position is closed.  
- Data: Exit price, exit time, P&L.  
- Purpose: Marks the financial outcome.

**Exit Notes**

- When: At exit.  
- Data: Free-text explanation ("why I closed").  
- Purpose: Explains whether exit was planned, reactive, or forced.

**Exit Emotions**

- When: At exit.  
- Data: Up to 3 emotions (Relief, Regret, Pride, Frustration, Satisfied).  
- Purpose: Captures how you felt leaving the trade.

**Exit Conviction and Plan Adherence**

- When: At exit.  
- Data: Exit conviction (1–10), exit plan adherence (Yes / Partial / No).  
- Purpose: Shows confidence in the exit and whether you followed your plan.

**Exit Screenshot**

- When: At or near exit.  
- Data: Chart at exit.  
- Purpose: Visual context of price action when you decided to close.

---

### Post-Trade Events

**Reflection**

- When: After close (minutes, hours, or days later).  
- Data: Free-form reflection text.  
- Purpose: Summarizes lessons, mistakes, and patterns.  
- Note: You can add multiple reflections over time.

**AI Thread Summary**

- When: On-demand, after close (5/day limit).  
- Data: AI-generated summary of the trade's psychological journey.  
- Purpose: Highlights conviction gaps, emotional shifts, key behavioral signals.  
- Example: "Conviction drop of 5 points; exited 10 pips before stop; similar to 4 prior trades this week."

**Deep Psychology Analysis**

- When: On-demand for significant trades.  
- Data: AI analysis focused on cognitive patterns in this one trade.  
- Purpose: Deeper "inside this trade" behavioral view (different from account-wide diagnostics).

---

## Threads vs Execution Recap

Both features use your trade data — but for different jobs.

### Execution Recap: Multi-Trade Pattern Detection

- **View**: Grid/list of trades with entry + exit screenshots side by side.  
- **Goal**: Spot patterns when you look at many trades in a row.  
- **Best for**:
  - Morning vs afternoon patterns  
  - FOMO vs calm entries across many trades  
  - Quickly scanning 10–20+ trades for repeated mistakes  

### Threads: Single-Trade Deep Dive

- **View**: Vertical, chronological timeline of one trade.  
- **Goal**: Understand everything that happened inside this one trade.  
- **Best for**:
  - Biggest wins/losses  
  - Emotional or "tilt" trades  
  - Trades with rule violations  
  - Conviction-collapse scenarios  

Typical combined workflow:

1. Use **Execution Recap** to spot interesting trades (e.g., "these 5 trades with huge conviction gaps").  
2. Open **threads** for those trades to see the full story.  
3. Use insights from threads to refine rules or ask targeted questions in AI Deep Dive Explorer.

---

## How Data Accumulates Inside a Thread

Threads are **append-only** timelines: new events are added as they happen.

### 1. Initial Creation

When you log a planned or entered trade:

- Thread is created with an **Entry Created** event (symbol, side, entry price, etc.).  
- This is the minimum required for a thread.

### 2. During the Trade

As the trade runs, you might add:

- Entry emotions, conviction, adherence (if not already set)  
- Entry screenshot  
- Entry notes  
- Mid-trade notes  
- Extra screenshots  

Each is timestamped and added in order.

### 3. At Exit

When the trade closes, you typically log:

- Exit price, exit time, P&L  
- Exit emotions, conviction, adherence  
- Exit notes  
- Exit screenshot  

Now the thread shows a clear **entry → mid-trade → exit** narrative.

### 4. After the Trade

After close, you can still add:

- Reflections (immediate, end-of-session, weekly)  
- Additional screenshots (e.g., "price hit target after I bailed")  
- AI Thread Summary / Deep Psychology Analysis events  

All are timestamped and appended, building a complete historical record.

### Editing and Guardrails

- Notes, reflections, and screenshots: editable and maintainable.  
- Emotions and conviction: usually editable within a short window (e.g., 24 hours) to correct mistakes.  
- Rule violations and timestamps: immutable (you can't rewrite history).

---

## Future Intent: Accountability and Social Layer (Not Yet Live)

Threads are structured for potential future features, even though they are currently **private**.

### Accountability Groups (Future)

Concept:

- Share specific threads with a small, invite-only group.  
- Peers see the full timeline for that trade.  
- They can comment or ask questions (comments become separate events).  

Why threads make this possible:

- Complete context (not just P&L).  
- Time-ordered events make feedback precise ("at 10:15, when you wrote X…").  
- Factual data reduces hand-wavy feedback.

### Mentor / Mentee (Future)

Concept:

- Share specific threads with a mentor or coach.  
- They see full execution context instead of just statements like "I broke my rules."  

Again: this doesn't exist yet. But the thread structure is built with this potential in mind.

---

## Support

If you need help understanding how to use threads or have questions about the timeline structure, contact **hello@trademonkey.app**.
