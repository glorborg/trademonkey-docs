---
id: rules-vs-reality
title: Rules vs Reality
sidebar_label: Rules vs Reality
---

# Rules vs Reality

## Purpose

Rules vs Reality is TradeMonkey's execution mirror for your trading rules. It compares the rules you define with the trades you actually take, logs every breach, and tracks how consistently you follow your own system over time.

It does **not** block trades or tell you what rules to use. It simply shows the gap between your rules and your real behavior.

---

## What This Feature Does

- **Evaluates every trade against your rules**
  - Runs at entry, edit, and close.
  - Produces a result for each rule:  
    - **Pass** – trade followed the rule  
    - **Violation** – trade broke the rule  
    - **Skipped (missing data)** – trade didn't have enough information to check  
    - **Error** – system issue; not counted as a violation  

- **Supports a wide range of rule types**
  - **Time and session** – allowed trading days, allowed/forbidden time windows, "no trading after X time."
  - **Trade count and exposure** – max trades per day, max open positions.
  - **Risk and loss** – max position size, max daily loss, minimum risk–reward ratio.
  - **Instrument and asset class** – allowed/forbidden symbols, allowed asset classes (e.g., forex only).
  - **Behavioral rules** – stop after N losses, cooldown after a large loss, no size increase after a loss, no widening stops.
  - **Tag-based rules** – required tags, allowed/forbidden setup tags, max trades per setup per day.
  - **News guardrails** (where available) – no trading during or around high-impact economic events.

- **Aggregates adherence**
  - Shows how often you follow each rule.
  - Highlights which rules are stable (rarely broken) and which ones you regularly violate.
  - Lets you see violation patterns by day of week, time of day, and context (e.g., after losses).

---

## How to Use It

1. **Define your rules**
   - Create rules for time, risk, instruments, behavior, and setups based on how you already intend to trade.
   - Use clear, measurable conditions (e.g., max daily loss in currency, specific time windows, minimum R:R).

2. **Scope your rules**
   - Choose which **accounts** each rule applies to (e.g., challenges vs funded accounts).
   - Optionally scope by **tags** (e.g., `scalp`, `swing`, `breakout`) or **asset classes** (e.g., forex only).

3. **Tag your trades consistently**
   - Apply setup/strategy tags to each trade so tag-based rules and strategy-specific limits work correctly.

4. **Trade normally**
   - Rules vs Reality runs in the background and evaluates each trade event.

5. **Review each trade**
   - Open a trade in TradeMonkey to see:
     - Which rules were checked
     - Which passed
     - Which were violated
     - Any checks that were skipped due to missing data

6. **Use the Rules vs Reality Dashboard**
   - Track your overall adherence score (how often you follow your rules).
   - See rule-level adherence and violation trends over time.
   - Identify where discipline typically breaks down (e.g., late in the day, after losses, certain tags or accounts).

---

## Tags and Strategy-Specific Rules

Tags are critical for Rules vs Reality:

- Tags decide **which rules apply** to which trades (e.g., separate scalp vs swing rules).
- You can enforce **allowlists/blocklists** of setups (e.g., only `breakout` and `pullback`, never `counter-trend`).
- You can limit **how often** you trade a given setup per day (e.g., max 3 `scalp` trades).

If tags are missing, mislabeled, or used to "game" the system, setup-specific rules and analytics will not be accurate. Tag discipline is required for meaningful results.

---

## Rules Helper AI (Configuration Coach)

Rules Helper AI is an optional assistant that helps you turn your own ideas into enforceable rules:

- **Helps you:**
  - Turn vague rules into measurable ones (e.g., define exact time windows, thresholds, and tags).
  - Suggest tag-based scoping when you describe different behaviors for different strategies.
  - Spot obvious conflicts between rules before you enable them.

- **Does not:**
  - Recommend strategies or tell you which rules you "should" have.
  - Offer trading or psychological advice.
  - Change or adapt rules automatically based on performance.

You always review and approve rule definitions before they become active. AI usage may be limited to keep the system stable.

---

## Important Notes and Limits

- **Post-trade mirror only**  
  Rules vs Reality evaluates trades after they happen. It does not block orders in your broker.

- **Consistency, not profitability**  
  A high adherence score means you follow your rules; it does not guarantee profitability.

- **Data quality matters**
  - Missing stop loss / take profit → R:R rules may be skipped.
  - Missing tags → tag-based rules may be skipped.
  - Inconsistent position size or instrument data can affect risk and exposure checks.

- **Static, trader-defined rules**  
  Rules do not auto-adjust based on performance. You update them manually as your system evolves.

- **Conflicting rules are your responsibility**  
  If you create rules that contradict each other, both may show violations. You'll need to edit or remove the conflict.

- **Time zones and news**  
  Time-based and news-based rules depend on correct time and event data. Make sure your settings match your broker and instruments.

---

## Support

If you have questions about Rules vs Reality or think a rule is being evaluated incorrectly, contact **hello@trademonkey.app**.
