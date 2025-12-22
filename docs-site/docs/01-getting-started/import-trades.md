---
id: import-trades
title: Importing Trades (Broker Reconciliation)
sidebar_label: Import Trades
---

# Importing Trades (Broker Reconciliation)

## Purpose

Trade import establishes financial ground truth.

Importing trades lets TradeMonkey load broker-confirmed execution data so outcomes, equity curves, rules, and analytics are based on what actually happened — not estimates or memory.

This is a core part of the Behavior Dashcam loop:

Behavior is captured in real time.  
Financial truth is reconciled from the broker.

## When to Import Trade Data

Trade import is used at two key moments in your workflow.

### 1. When Getting Started (Baseline)

If you are new to TradeMonkey, your first import creates a historical baseline.

Use a broker CSV to:

Build your equity and P&L history  
Activate rule checks on real outcomes  
Give Drift Detection and analytics enough data to surface patterns

Without a baseline import, TradeMonkey can record behavior, but outcome-based insights are limited.

### 2. Ongoing Reconciliation (Weekly / Monthly)

After you begin logging trades live:

You record intent, emotions, conviction, and plan adherence during or right after trades.

Later, you import the broker CSV for that period.

TradeMonkey then reconciles:

Logged trades ↔ broker-confirmed prices, timing, and P&L  
Preserves all behavioral data  
Corrects financial fields to broker truth

This ensures:

Rules are evaluated against real execution  
Analytics reflect actual money outcomes  
Behavioral drift is measured against reality, not approximation

## What Trade Import Does

When you import a CSV, TradeMonkey:

Loads broker trades into a specific TradeMonkey account  
Maps broker fields (symbol, times, prices, size, P&L)

Supports two financial formats:

Direct P&L – profit/loss per trade  
Balance-based – P&L calculated from balance changes

Matches imported trades to existing entries when possible  
Prevents duplicate trades on re-import  
Highlights equity jumps to surface missing trades, deposits, or withdrawals

Trade import is the fastest way to move from behavioral logging to verified execution analysis.

## How to Import Trades

### 1. Export a CSV from your broker

Use your platform's trade history or statement export  
Choose a clean date range (e.g., last 3–12 months or last week)  
Export one account or challenge at a time

### 2. Select the target TradeMonkey account

Choose the TradeMonkey account that corresponds to the broker account  
Each TradeMonkey account should represent one real account or prop challenge

### 3. Upload and map columns

Upload your CSV

If the format is recognized, mapping happens automatically

Otherwise, map required fields:

Symbol  
Side (Buy / Sell)  
Entry time and price  
Exit time and price  
Position size

Either:

Per-trade P&L or  
Opening and closing balance

### 4. Confirm the P&L mode

Direct P&L – use when your CSV includes profit per trade  
Balance-based – use when only balances are provided

### 5. Review the import summary

See which trades were imported  
See which matched existing logged trades  
Review any rows that failed validation

Failed rows do not block the rest of the import.

### 6. Verify the equity curve

Open the account's balance/equity view  
Look for unexpected jumps or gaps  
Jumps usually indicate deposits, withdrawals, or missing trades

## Imported Trades Without Behavior (Orphaned Trades)

When trades are imported without prior behavioral logging, they include:

Entry and exit prices  
Position size  
Broker-confirmed P&L

They do not include:

Emotional state  
Conviction (1–10)  
Plan adherence  
Notes or reflections

These trades still:

Count toward P&L and equity  
Participate in rule checks

To include them in behavioral analysis:

Open the trade  
Add reflections, emotions, and notes

The trade then becomes a complete dashcam record

## Exporting Data

You can export your TradeMonkey data to CSV at any time for:

External analysis  
Backup  
Review outside the platform

## Important Notes

One CSV per account  
Import each broker account or prop challenge separately.

Duplicate protection is automatic  
Re-importing overlapping history will not double-count trades.

Psychology never comes from brokers  
Emotional and plan-related fields must be recorded in TradeMonkey.

Time zones matter  
Broker timestamps are imported as-is. Ensure your account and rule time zones match.

Partial imports still apply  
Valid rows are imported even if some fail validation.

## Support

If your CSV format is unclear or imported data doesn't look right, contact  
hello@trademonkey.app
