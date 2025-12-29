---
id: manual-trade-entry
title: Manual Trade Entry
sidebar_label: Manual Trade Entry
description: Log trades manually in TradeMonkey to capture real-time psychology including emotions, conviction, and plan adherence alongside financial details.
keywords: [manual trade entry, trade logging, trading psychology, conviction tracking, plan adherence]
---

# Manual Trade Entry

## Purpose

Manual trade entry lets you log trades directly in TradeMonkey as you plan or execute them. Unlike CSV imports, manual entry captures both the financial details and your real-time psychology (emotions (Emotional State), conviction (Conviction (1–10)), Plan Adherence) around each decision.

## When to Use Manual Entry

Manual entry is especially useful when:

You want real-time psychology capture  
You record how you actually felt at entry and exit, not how you remember feeling days later.

You trade infrequently  
If you only take a few trades per week, logging them manually is often faster than exporting and importing CSVs.

You use logging as a discipline tool  
You log trades as part of a pre-trade or post-trade ritual, forcing yourself to write down your reasoning and risk.

You use a hybrid workflow  
You manually log important trades (big wins, revenge trades, rule violations) and use CSV import for bulk financial history. TradeMonkey can reconcile the two.

## What You Capture at Entry

Financial (required)  
Symbol  
Side (Buy/Sell)  
Entry price  
Position size  
Account  

Risk (recommended)  
Stop loss  
Take profit  
Risk–reward ratio (calculated when SL/TP are present)  

Psychology (critical for insights)  
Entry emotions (e.g., confident, fearful, FOMO, revenge) (Emotional State)  
Entry conviction score (e.g., 1–10) (Conviction (1–10))  
Plan Adherence (Yes / Partial / No)  
Entry notes (short reasoning for the trade)  
Tags (e.g., strategy, setup type, session: breakout, london-open, scalp)  

Status  
Planned – you intend to take this trade but have not entered yet.  
Entered – you are currently in the trade (open position).  

You can create a trade as Planned, then update it to Entered when you actually execute.

## What You Capture at Exit

When the trade is closed, you add:

Financial  
Exit price  
Exit time  
P&L (calculated automatically from entry/exit and size)  

Psychology  
Exit emotions (e.g., relief, regret, pride, frustration) (Emotional State)  
Exit conviction score (Conviction (1–10))  
Exit plan adherence (Yes / Partial / No) (Plan Adherence)  
Exit reason (e.g., hit stop, hit target, manual exit)  
Exit notes (what actually happened)  

Status  
Closed – trade completed.  
Cancelled – planned but never executed.  

Once a trade is Closed, it becomes part of all relevant analytics.

## Basic Manual Entry Workflow

Log the trade near the decision point  
Before or right after entering is ideal for accurate psychology.

Fill financial and risk fields  
Ensure symbol, side, entry price, size, and account are set.  
Add stop loss and take profit where applicable.

Add psychology at entry  
Choose emotions, conviction, adherence, and tags.  
Add a short note on why you're taking the trade.

Update at exit  
Set exit price/time and confirm P&L.  
Record exit emotions, conviction, adherence, and reason.  
Mark status as Closed (or Cancelled if you never entered).

You can still import broker CSVs later to verify financial data and catch any trades you forgot to log; TradeMonkey will merge matching trades rather than duplicate them.

## Important Notes

Manual entry is about accuracy, not volume  
You don't have to manually log every historical trade. Focus on trades where psychology and Plan Adherence matter most.

Delayed logging reduces psychological accuracy  
The further you are from the trade, the less reliable emotions and conviction scores become. Log as close to execution as possible.

Consistent fields beat perfect fields  
Pick a minimal set of psychology fields you'll fill every time (e.g., emotions + conviction + adherence) and be consistent.

Planned trades can go stale  
If you never execute a planned trade, mark it as Cancelled to keep your open trades view clean.

## Support

If you're unsure how to structure your manual logging workflow, contact hello@trademonkey.app.
