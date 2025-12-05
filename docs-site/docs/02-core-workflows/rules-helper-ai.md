---
sidebar_position: 2
title: Rules Helper AI
---

# Rules Helper AI

## Purpose

Rules Helper AI and the Rules vs Reality Dashboard work together to turn your own trading rules into something measurable. The AI helps you define clear, enforceable rules, and the dashboard shows how often you actually follow them.

These tools do **not** give you strategy advice or block trades. They mirror your behavior against the rules you chose.

---

## Rules Helper AI (Configuration Coach)

Rules Helper AI is a guided assistant for setting up rules. You describe how you want to trade, and it helps you turn that into precise, checkable conditions.

### What Rules Helper AI Does

- **Turns vague rules into clear ones**
  - Asks what "high probability" means for you (e.g., confluences, minimum R:R).
  - Clarifies what "overtrading" is (max trades per day, per session, after losses).
  - Asks for concrete definitions of "emotional trades" (e.g., trading right after a loss, outside session, with larger size).

- **Checks that rules are measurable**
  - Ensures risk rules have numbers (max daily loss, position size limits).
  - Ensures time rules have specific start/end times and time zones.
  - Ensures quality rules use numeric thresholds (e.g., minimum R:R).

- **Suggests tag-based scoping**
  - If you describe different behavior for different strategies (e.g., scalp vs swing), it suggests using tags to separate those rules.
  - Example: "Max 10 trades per day" for `scalp`, no limit for `swing`, as long as you tag trades correctly.

- **Helps avoid obvious conflicts**
  - Warns if one rule requires a tag and another forbids the same tag.
  - Surfaces cases where two rules can't logically be satisfied at the same time.

- **Supports account-specific rules**
  - Helps you apply different limits to different accounts (e.g., tighter risk on challenges, looser on funded/personal).

### What Rules Helper AI Does *Not* Do

- **No trading or strategy advice**
  - It does not tell you which rules you should have, which markets to trade, or which R:R to use.

- **No psychological coaching**
  - It does not interpret your emotions or tell you how to "fix" discipline.

- **No adaptive or predictive rules**
  - It does not change rules automatically based on performance or predict when you'll break them.

- **No enforcement**
  - It only helps define rules. Enforcement and violation tracking are handled by the Rules vs Reality engine after trades are logged.

### How to Use Rules Helper AI

1. Open the rule creation wizard.
2. Describe your rules in plain language (risk, time windows, behavior, setups, accounts).
3. Answer any follow-up questions until the rule is fully specified.
4. Review the proposed rules:
   - Name
   - Type (e.g., max daily loss, time window, tag-based limit)
   - Thresholds and time windows
   - Accounts and tags they apply to
5. Approve or adjust settings, then save.

AI usage is limited per day to keep the system stable, but enough for normal configuration and occasional adjustments.

---

## Rules vs Reality Dashboard

The dashboard is where you see how well you follow your rules over time. It aggregates all rule checks for all trades and turns them into simple adherence metrics.

### What You See

- **Overall adherence score**
  - Shows how often your trades complied with your rules.
  - High adherence means you are consistent with your rules; it does **not** guarantee profitability.

- **Per-rule adherence**
  - Each rule has its own adherence percentage.
  - "Stable" rules: rarely violated.
  - "Unstable" rules: frequently violated, often where discipline breaks down or the rule is unrealistic.

- **Violation trends**
  - Violations by:
    - Day of week
    - Time of day
    - After losses
    - Close to challenge limits
  - Helps you see where discipline erodes (e.g., afternoons, Fridays, after streaks of losses).

- **Mirror across the three views**
  - **Plan vs Execution** – did you follow your plan on each trade?
  - **State vs Outcome** – what emotional state produced what result?
  - **Rules vs Reality** – did you follow your rules at all?

Together, they show what you planned, how you felt, what rules you claimed to follow, and what you actually did.

---

## Important Notes and Limitations

- **Not a performance grader**
  - You can have perfect adherence and still lose money if the rules are poor.
  - You can break rules and still make money by luck. The dashboard measures consistency, not skill.

- **Data quality matters**
  - Missing stop loss / take profit → risk–reward rules may be skipped.
  - Missing tags → tag-based rules may be skipped.
  - Missing position size or instrument data → risk and exposure checks may be skipped.
  - Skipped checks indicate incomplete data, not violations.

- **Inactive rules**
  - Turning a rule off stops checks on new trades.
  - Past violations remain visible but may no longer impact current adherence summaries.

- **Conflicting rules**
  - If you define contradictions (e.g., a tag both required and forbidden), both rules may show violations.
  - You are responsible for resolving these conflicts by editing or removing rules.

- **Needs enough history**
  - Very small datasets (few trades over a few days) produce noisy adherence trends.
  - The more trades and days you log, the more reliable the patterns become.

- **Post-trade only**
  - Rules are evaluated after trades are logged in TradeMonkey.
  - Real-time warnings before you send orders to your broker are not supported.

- **Time zone sensitivity**
  - Time-based and news-based rules depend on correct time settings.
  - Make sure your TradeMonkey settings and broker timestamps align.

---

## Support

If something in Rules Helper AI or the Rules vs Reality Dashboard looks off, or you're unsure how to structure a rule, email **hello@trademonkey.app**.
