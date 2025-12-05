---
id: import-trades
title: Importing Trades
sidebar_label: Import Trades
---

# Importing Trades

## Purpose

Trade import lets you quickly load historical trades from your broker into TradeMonkey using CSV files. This builds your equity curve, P&L history, and rule-compliance context without manually typing every trade.

---

## What Trade Import Does

- **Loads trades from broker CSVs** into a specific TradeMonkey account.
- **Maps your broker's columns** (symbol, times, prices, size, P&L) into TradeMonkey's trade fields.
- Supports two P&L modes:
  - **Direct P&L** – your CSV has a profit/loss column per trade.
  - **Balance-based** – your CSV has opening and closing balance per row; P&L is calculated from the difference.
- **Avoids duplicate trades** when you re-import overlapping history.
- **Highlights balance jumps** so you can spot missing trades, deposits, or withdrawals.

Trade import is the fastest way to give TradeMonkey enough history for meaningful analytics, rule checks, and AI diagnostics.

---

## How to Import Trades

1. **Export a CSV from your broker**
   - Use your platform's history or statements export.
   - Choose the date range you want (e.g., last 3–12 months).

2. **Choose the target account in TradeMonkey**
   - Select the TradeMonkey account that matches the broker account or challenge.
   - Each TradeMonkey account should represent one real account or challenge.

3. **Upload and map columns**
   - Upload your CSV.
   - If TradeMonkey recognizes the format, mapping is automatic.
   - Otherwise, match your CSV headers to required fields like:
     - Symbol  
     - Side (Buy/Sell)  
     - Entry time and price  
     - Exit time and price  
     - Position size  
     - Either P&L **or** opening/closing balance  

4. **Confirm P&L mode**
   - Use **Direct P&L** if your CSV has a profit column.
   - Use **Balance-based** if it only shows balances per row.

5. **Review the import summary**
   - See which trades were imported, which matched existing journal entries, and any rows that failed validation.
   - If some rows failed, you can fix the CSV or add those trades manually.

6. **Check your equity curve**
   - Open the account's balance/equity view and look for unexpected jumps or gaps.
   - Jumps usually indicate deposits/withdrawals or missing trades.

You can also export your data from TradeMonkey as CSV at any time.

---

## Orphaned Trades (Imported Without Psychology)

When you import trades that were **never logged manually in TradeMonkey**, they come in with:

- Financial data: entry, exit, size, P&L.
- **No psychology data**: no emotions, conviction, or plan adherence.

These trades still count for P&L and rule checks, but:

- They **don't** fully participate in emotion- or conviction-based analytics until you add that information.
- You can edit any imported trade later to fill in emotions and notes, turning it into a complete journal entry.

---

## Important Notes and Limits

- **One CSV per account**  
  If you trade multiple real accounts or challenges, export and import each one separately into its own TradeMonkey account.

- **Duplicates are filtered**  
  If you re-import overlapping history, TradeMonkey skips trades it has already seen to prevent double counting.

- **Psychology is never in broker files**  
  Brokers only provide financial data. Emotional and plan-related fields must be added in TradeMonkey.

- **Time zones matter**  
  Broker timestamps are imported as-is. If your rules use specific session times (e.g., "No trades before 8:00"), make sure your account and rules use a consistent time zone.

- **Partial imports still apply**  
  If some rows fail validation, the valid trades are still imported. You can correct and re-import the failed ones later.

---

## Support

If you're unsure how to format your CSV or imports don't look right, contact **hello@trademonkey.app**.
