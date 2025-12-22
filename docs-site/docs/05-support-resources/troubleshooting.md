---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

# Troubleshooting

This section covers common issues and questions you may encounter while using TradeMonkey, and how to resolve them.

When something looks off, start with this principle:  
TradeMonkey records what exists.  
Gaps, mismatches, or missing signals usually point to missing data, not system failure.

## My P&L or equity curve doesn't look right

Most common causes:
- Broker CSV has not been imported yet
- Partial date range was imported
- Deposits or withdrawals are included in the broker history
- Time zone mismatch between broker data and account settings

What to check:
- Confirm you've imported a broker CSV for the period in question
- Review the equity curve for sudden jumps (often deposits/withdrawals)
- Verify the date range of your CSV export
- Confirm your account time zone matches your broker's timestamps

TradeMonkey defers to broker-confirmed data for financial truth.

## I logged trades manually, but they don't match the broker import

This is expected in some cases.

Manual logging captures:
- Intent
- Emotions
- Conviction
- Plan adherence

Broker imports capture:
- Actual prices
- Actual timestamps
- Actual P&L

When you import a CSV, TradeMonkey reconciles financial fields to broker truth while preserving your behavioral data.  
This separation is intentional.

## Some imported trades have no emotions or conviction

Broker files never contain psychology.

Imported trades without prior logging will include:
- Entry/exit prices
- Size
- P&L

They will not include:
- Emotional State
- Conviction (1–10)
- Plan Adherence
- Notes

How to fix (optional):
- Open the trade
- Add reflections, emotions, and notes
- The trade will then fully participate in behavioral analysis

## Rules are showing as "skipped" or not evaluated

Rules may be skipped when required data is missing.

Common reasons:
- Trade lacks a stop loss or take profit
- Required session/time data is missing
- Rule depends on imported broker data that hasn't been reconciled yet

What to do:
- Import broker CSVs
- Confirm required fields are present
- Review the rule definition to see what inputs it expects

Skipped rules are signals, not errors.

## Drift Detection shows "not enough data"

Drift Detection relies on patterns, not individual trades.

This usually means:
- Too few trades logged
- Inconsistent reflection data
- Emotions or conviction rarely recorded

What helps:
- Log emotions, conviction, and adherence consistently
- Allow more trades to accumulate
- Use a wider time range

Behavioral signals stabilize over dozens of trades, not a handful.

## AI analysis is unavailable or limited

Possible reasons:
- Daily or plan-based usage limits reached
- Not enough behavioral data to analyze
- You haven't explicitly triggered analysis

Important:
- AI never runs automatically
- Core tracking works without AI
- AI only summarizes patterns already present in your data

If AI is unavailable, nothing is broken — it simply means limits or prerequisites apply.

## I forgot to log trades during the session

This happens.

TradeMonkey is built around reconciliation, not perfection.

You can:
- Import broker CSVs later to recover financial truth
- Add reflections after the fact if desired

Missing data is visible — and visibility itself is useful.

## I don't see reflections or notes where I expect them

Check where the reflection was recorded:

Trade-linked reflections appear in:
- Trade Thread
- Behavioral Recap
- Drift Detection aggregation

Free-form reflections appear in:
- Behavioral Record (State Snapshots)

If a reflection isn't attached to a trade, it won't appear inside that trade's thread.

## Trades appear duplicated after import

TradeMonkey automatically filters duplicates, but duplicates may appear if:
- Multiple CSVs overlap incorrectly
- Different broker exports use inconsistent IDs
- Manual trades were entered with mismatched timestamps

What to do:
- Review the import summary
- Remove incorrect manual entries if needed
- Re-import clean CSV ranges

Duplicate protection works best with consistent exports.

## Something just feels "off," but I can't tell what

This is often a data visibility issue, not a bug.

Ask:
- Is broker data imported?
- Are reflections being logged consistently?
- Am I looking at the right account and date range?

TradeMonkey shows what's present — confusion usually points to a missing step.

## When should I contact support?

Contact support if:
- Trades fail to import entirely
- Large sections of broker data are missing
- You suspect a mapping or reconciliation error
- Something contradicts broker truth and can't be explained

Email: hello@trademonkey.app

Include:
- What you expected to see
- What you're seeing instead
- The account and date range involved
- Screenshots if helpful (no passwords)

## Final Note

TradeMonkey does not hide errors behind optimism.

If something looks wrong, it's usually because:
- Data hasn't been reconciled yet, or
- A signal hasn't stabilized yet

Both are part of the process.
