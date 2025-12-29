---
id: glossary
title: Glossary
sidebar_label: Glossary
description: Definitions of key TradeMonkey terms including behavior dashcam, behavioral record, reflections, conviction, plan adherence, and execution drift.
keywords: [glossary, trading terms, TradeMonkey terminology, definitions, trading vocabulary]
---

# Glossary

## Behavior Dashcam
A system that records behavior as it occurred, without interpretation or instruction.
 TradeMonkey functions as a behavior dashcam by capturing execution state, decisions, and outcomes so they can be reviewed later without distortion or hindsight bias.

## Behavioral Record
The collection of timestamped behavioral evidence captured in TradeMonkey, including reflections, emotions, conviction, and plan adherence.
 It is not a narrative or diary — it is an evidence log.

## Behavioral Recap
A condensed replay of a single trade that brings together financial outcome, psychology, rules, screenshots, and notes in one view.
 Used to review what happened after a trade closes.

## Thread (Trade Thread)
The chronological event timeline for a single trade.
 Threads show the raw sequence of events — trade creation, notes, reflections, rule checks, exits — exactly as they occurred.
 If Behavioral Recap is the replay, the Thread is the full footage.

## Reflection
A timestamped behavioral snapshot capturing execution state, intent, and observations at a specific moment.
 Reflections can be trade-linked or free-form and are structured so behavior can be analyzed, not interpreted.

## Trade-Linked Reflection
A reflection attached to a specific trade, typically recorded at entry, exit, or post-trade.
 Appears in the Trade Thread, Behavioral Recap, and behavioral analytics.

## Free-Form Reflection (State Snapshot)
A reflection not tied to a trade, used to capture execution state, plans, or observations outside of a specific position (e.g. pre-session, post-session, non-trading days).

## Emotional State
One or more selected labels describing how you felt at a decision point (e.g. Calm, Confident, Fear, FOMO).
 Emotional State is recorded, not evaluated.

## Conviction (1–10)
A numeric rating representing how strong the setup or decision felt at a given moment.
 Conviction is used to detect confidence stability or erosion over time.

## Conviction Gap
The difference between exit conviction and entry conviction.
 Used to identify whether confidence held, strengthened, or collapsed during a trade.

## Plan Adherence
A record of whether execution followed your predefined plan:
Yes


Partial


No


Plan adherence is descriptive, not moral.

## Rule
A user-defined condition used to evaluate execution (e.g. risk limits, time rules, structural requirements).
 Rules are checked against reconciled trade data.

## Rules vs Reality
A view that compares declared rules against actual execution outcomes to surface compliance and drift.

## Drift
A measurable divergence between intended execution and actual behavior or outcome over time.
 Drift is detected through patterns, not single events.

## Drift Detection
A system view that aggregates behavioral and execution data across many trades to surface repeatable patterns, strengths, and risk areas.
 Outputs are descriptive signals, not instructions.

## Reconciliation
The process of aligning behavioral records with broker-confirmed financial data via CSV imports.
 Behavior is preserved as logged; financial truth is corrected to broker reality.

## Broker CSV
A trade history export from your broker or prop firm containing execution and financial data.
 Used for reconciliation and outcome verification.

## Orphaned Trade
An imported trade that contains financial data but no behavioral data (emotions, conviction, adherence).
 These trades still count for P&L and rules and can be completed later by adding reflections.

## Equity Curve
A visual representation of account balance or P&L over time, built from reconciled broker data.

## AI Analysis
Optional, user-initiated analysis that summarizes patterns already present in your data.
 AI does not generate trades, advice, or decisions.

## Descriptive (Non-Prescriptive)
A core design principle of TradeMonkey.
 The system shows correlations and patterns but does not tell you what to do next.

## Execution
What you actually did in the market, including timing, sizing, exits, and deviations — regardless of intent.

## Outcome
The broker-confirmed financial result of a trade after reconciliation.

## Signal
A repeatable correlation between behavior and outcome (e.g. "When X appears, Y tends to follow").
 Signals describe tendencies, not certainty.

## Pattern
A cluster of similar signals appearing across multiple trades.
 Patterns require volume to stabilize.

## Volume Threshold
The number of trades required before behavioral patterns become reliable.
 Typically dozens, not a handful.

## Final Note
TradeMonkey uses precise language intentionally.
 This glossary defines how terms are used inside the system, regardless of how they may be used elsewhere.
Clarity reduces noise.
 Noise hides drift.
