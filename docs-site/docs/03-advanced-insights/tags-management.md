---
id: tags-management
title: Tags
sidebar_label: Tags
---

# Tags

## Purpose

Tags describe the *context* of your trades so TradeMonkey can apply rules correctly, separate different strategies, and surface meaningful patterns. They are not just search labels. Good tagging lets you answer questions like:

- "Are my reversal setups actually worth trading?"
- "Where do I break my own rules the most?"
- "Which sessions or conditions cause my discipline to slip?"

## What Tags Do

Tags drive how TradeMonkey:

- Decides which trades each rule applies to.
- Groups trades in analytics (by strategy, setup, session, etc.).
- Connects emotions and conviction to specific setups.
- Lets AI highlight patterns across your behavior.

Without tags, all trades look the same. With tags, you can compare "scalps vs swings", "breakouts vs pullbacks", "London vs New York", and more.

## System Tags vs Your Tags

TradeMonkey applies two kinds of tags:

### System Tags (automatic)

TradeMonkey adds a baseline set of tags to every trade, based on objective data, for example:

- Instrument type (FX, stock, crypto, etc.).
- Session or time of day.
- Trade direction (long/short).
- Account type (demo, live, challenge, funded).
- Whether a trade violated a rule.

You cannot edit or remove these. They ensure every trade has minimum structure for analysis.

### Your Tags (manual)

You add your own tags to describe how *you* think about the trade, such as:

- **Strategy** – `scalp`, `day-trade`, `swing`, `position`
- **Setup** – `breakout`, `pullback`, `reversal`, `range-play`
- **Conditions** – `high-volatility`, `low-liquidity`, `pre-news`, `post-news`
- **Quality / conviction** – `A-setup`, `B-setup`, `C-setup`, `high-confidence`, `low-confidence`
- **Context** – `earnings-week`, `fomc-day`, `recovery-mode`, `experimental`

These tags are flexible. You can add, remove, or rename them as your playbook evolves.

## How Tags Affect Rules and Analytics

Tags are central to how TradeMonkey evaluates your rules and behavior:

- **Rule scoping**  
  Apply rules only to certain tags, e.g.  
  - "Max 5 trades per day" → only for trades tagged `scalp`  
  - "Only approved setups" → only allow `breakout`, `pullback`, `trend-continuation`

- **Allowed vs forbidden conditions**  
  - Allowed tags: "Only trade if tag is one of X"  
  - Forbidden tags: "Never trade when tag is one of Y" (forbidden always wins if both are present)

- **Contextual adherence**  
  See how well you follow rules *by tag*, e.g. adherence for `scalp` vs `swing` vs `reversal`.

- **Pattern detection and AI**  
  Tags let analytics and AI compare performance, emotions, and execution quality across strategies, setups, sessions, and conditions.

If tags are inaccurate or inconsistent, your rule stats and patterns become unreliable.

## How to Use Tags in Practice

1. **Tag at entry, not at exit**  
   Add tags when you enter the trade, based on the setup and conditions you see right now.

2. **Cover multiple dimensions**  
   Aim for 2–4 tags per trade, for example:  
   - `scalp` (strategy)  
   - `breakout` (setup)  
   - `high-volatility` (condition)  
   - `A-setup` (quality)

3. **Keep a small, stable tag set**  
   - Start with 5–12 core tags you use all the time.
   - Avoid 30+ ultra-specific tags that only appear once or twice.

4. **Use the same criteria every time**  
   - Decide what qualifies as `A-setup`, `high-volatility`, `reversal`, etc.
   - Apply those definitions consistently, win or lose.

5. **Avoid outcome-based or emotional labels**  
   - Don't tag trades as `winner`, `loser`, `bad-trade`, `stupid-entry`.  
   - Outcomes and emotions are tracked separately; tags should stay clinical and descriptive.

## Tagging Best Practices

- **Observable, not predictive**  
  Use tags that describe what is true *now* (`breakout`, `pre-news`, `trending`), not what you hope will happen (`will-win`, `sure-thing`).

- **Neutral, not judgmental**  
  `reversal`, `high-volatility`, `after-loss` are useful.  
  `greed-trade`, `easy-money`, `mistake` are not.

- **Avoid redundancy**  
  Don't duplicate information TradeMonkey already knows:
  - No need for `long` / `short`, `morning` / `afternoon`, `winner` / `loser` tags.

- **Be careful with retroactive edits**  
  Fix obvious errors (wrong session, wrong setup), but avoid rewriting history to match how you feel about the outcome. That distorts time-based and AI-driven patterns.

## Limitations and Expectations

- Tags do not *make* a trade good or bad; they just describe it.
- Tags do not improve performance by themselves; they make it easier to see what needs to change.
- Over-tagging or inconsistent tagging reduces the quality of your insights.
- Tags work best when combined with complete data: conviction, emotions, rules, and notes.

Thoughtful, consistent tagging is one of the highest-leverage habits in TradeMonkey. The more clinically you describe your trades, the more precise your rules, analytics, and AI insights will be.
