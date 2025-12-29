---
id: data-import-export
title: Data Import & Export
sidebar_label: Data Import/Export
description: Import historical trades via CSV using templates or broker mapping, and export your trading data at any time for full portability of your journal.
keywords: [trade import, CSV export, broker data, data portability, trade history]
---

# Data Import & Export

## Purpose

TradeMonkey supports importing historical trades via CSV and exporting your data at any time. This enables fast onboarding with past trading activity and full portability of your journal.

This page summarizes how imports work, what formats are supported, and how to export your data without exposing internal implementation details.

## Importing Data

TradeMonkey supports two CSV import methods:

* Template Import – Use TradeMonkey's CSV template.
* Broker-Mapped Import – Upload any broker CSV and map its columns to TradeMonkey fields.

Both methods validate data before import and only apply changes to your own account.

## Template Import

### How to Use

* Go to Settings → Accounts → [Select Account] → Import Trades.

* Download the template CSV.

* Fill in your trades using the required fields:

  * symbol
  * side (buy/sell)
  * entry_time, entry_price
  * exit_time, exit_price
  * pnl or closing_balance (one is required)

* Upload the CSV and review the preview screen.

* Confirm import.

TradeMonkey validates rows for required fields, date formats, numeric fields, and logical consistency (e.g., exit_time must be after entry_time).

If errors exist, the system will flag specific rows so you can correct and re-upload.

## Broker-Mapped Import

If you export trades directly from your broker (MT5, cTrader, TradingView, etc.), you can import the file without changing it.

Steps

* Upload your broker CSV.

* Map each column to the correct TradeMonkey field (e.g., "Open Time" → entry_time).

* Choose how P&L should be interpreted:

  * Use a P&L column, or
  * Derive P&L from a closing balance column

* Review the preview and confirm.

This method allows flexibility when broker CSV formats differ.

## Import Tips

* Dates must use a clear timestamp format (e.g., YYYY-MM-DD HH:MM:SS).
* Decimal numbers must use a period (.).
* Empty values can be left blank.
* If the CSV includes both pnl and closing_balance, TradeMonkey prioritizes direct P&L.
* The preview screen must be reviewed before imports can be finalized.

## Reconciliation (Manual + CSV)

If you manually log trades during the session and later import broker-confirmed CSVs, TradeMonkey will attempt to match them using:

* symbol
* side
* entry time (within an allowed time window)

If matched, the system merges psychology data (from your manual entry) with financial data (from CSV).

If no match is found, the CSV trade is imported normally and can be updated later.

## When to Import CSVs (Recommended Workflow)

TradeMonkey uses CSV imports at specific moments in your workflow to ensure analytics, rules, and performance metrics reflect broker-confirmed reality, not estimates.  
There are two primary times you should import CSVs.

### 1. When Getting Started (Baseline Import)

If you are new to TradeMonkey, your first CSV import establishes a financial baseline.  
Why this matters:  
Rules vs Reality needs real P&L and timestamps to evaluate rule adherence.

Performance analytics require actual outcomes to detect patterns.

Without a baseline, insights are limited to behavior only.

What to do:  
Export your recent trade history from your broker or prop firm.

Import the CSV before or shortly after setting up your rules.

This allows TradeMonkey to immediately answer:  
"Based on real trades, am I actually following my rules?"

You can add reflections and psychology data to these imported trades later if you want deeper behavioral analysis.

### 2. Ongoing Reconciliation (Weekly / Monthly)

After you begin logging trades during live sessions, CSV imports serve a different role: reconciliation.  
During the week or trading period:  
You log trades to capture intent, emotions, conviction, and plan adherence.

Behavioral accuracy is the priority at this stage.

At the end of the period:  
You import the official broker CSV.

TradeMonkey reconciles your logged trades with broker-confirmed data.

What this does:  
Corrects P&L, fills, and timestamps to broker truth.

Preserves all behavioral and reflection data you recorded.

Ensures analytics, rules, and AI insights are grounded in real outcomes.

This keeps your system aligned with:  
What you thought you did and what actually happened.

## What Happens If You Don't Import CSVs

You can use TradeMonkey without CSV imports, but with limitations:  
Rules that depend on P&L, risk, or execution timing may be skipped.

Performance statistics may reflect estimates instead of final results.

Long-term analytics and pattern detection will be less accurate.

CSV imports are what turn TradeMonkey from a behavioral log into a complete execution record.

## Summary

Import at the start to establish a financial baseline and activate rule evaluation.

Import regularly to reconcile live-logged behavior with broker-confirmed results.

Behavioral data is captured in real time; financial truth is confirmed via CSV.

Together, they form a clean, reliable execution record.

## Exporting Data

You can export your data at any time.

Available Exports

* Trades (CSV) – Includes symbols, timestamps, prices, P&L, psychology fields, notes, tags.
* Journal Entries (CSV) – Includes all reflections and optional AI summaries.
* Trading Rules (CSV) – Includes rule details and status.

### How to Export

* Go to Settings → Data & Privacy → Export Data
* Select what you want to export
* Download the generated CSV file

There are no limits on export frequency or file size (browser performance may vary for large files).

## Summary

TradeMonkey provides simple, flexible CSV import and export tools so that:

* You can bring historical trades into your journal quickly
* You can reconcile real-time manual captures with broker-confirmed CSVs
* You can export your complete dataset at any time
* Your data always remains portable and under your control.
