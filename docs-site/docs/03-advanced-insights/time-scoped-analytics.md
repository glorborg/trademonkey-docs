---
id: time-scoped-analytics
title: Time-Scoped Analytics
sidebar_label: Time-Scoped Analytics
---

# Time-Scoped Analytics

## Purpose

Time-Scoped Analytics let you view your performance and behavior over specific recent windows instead of only "all-time." This helps you see whether your trading is improving, stable, or slipping right now.

## What Time-Scoped Analytics Do

When you choose a time window, TradeMonkey recalculates key metrics using only the trades in that window, including:

Win rate and average P&L  
Emotion-based performance (e.g. FOMO vs Confident)  
Conviction averages and conviction gaps  
Plan Adherence (Yes / Partial / No)  
Rule Adherence and most common rule violations  
Duration and exit behavior (stops, targets, manual exits)

You can compare these scoped views to your all-time baseline to see your current direction.

## Time Windows You Can Use

You can quickly switch between:

Last 10 trades – Very recent snapshot; good for quick feedback, sensitive to noise.  
Last 20 trades – Short-term trend; useful for checking changes over the last few sessions.  
Last 7 days – Weekly view; aligns with your typical review at the end of the week.  
Last 30 days – Monthly view; smoother, more stable trends.  
Custom - A custom timeframe meaningful to your trading.  
All time – Full history; used as your baseline for comparison.

Trade-based filters ("Last 10/20") always look at your most recent closed trades.  
Day-based filters ("Last 7/30 days") include all trades that closed in that calendar window.

## How to Use Time-Scoped Analytics

Choose a window  
In the Dashboard, go to Drift Detection, select a time scope such as Last 20 trades or Last 30 days.

Scan the main metrics  
Look at win rate, average P&L, conviction, adherence, and rule violations for that window.  
Then toggle back to All time and see how those numbers differ.

Compare recent vs baseline  
If recent win rate, adherence, or conviction are better than all-time, your trading behavior is improving.  
If they are worse, something in your recent execution, rules, or behavior has changed. (Your behavioral drift from trading intention to how you actually are trading).  
If they are similar, behavior is roughly stable.

Focus reviews by window  
End of day: Use Last 10 trades or Last 7 days to check how you traded today/this week.  
End of week: Use Last 7 days for weekly review, then compare to All time.  
End of month: Use Last 30 days to assess monthly performance and behavior.  
After a change: If you changed a rule or schedule, use Last 20 trades or Last 30 days to see if the change helped.

Drill into details  
On the Drift Detection page (Execution tab): see which emotions, conviction levels, or adherence states dominated in the chosen window.  
On the Rules view tab: see which rules you broke most often in that window.  
On the AI Analysis views tab: see whether risk/reward or duration changed compared to your all-time averages.

## Important Notes

Closed trades only  
Time-Scoped Analytics use only closed trades. Open trades are excluded until they are closed.

Small samples can be noisy  
Very short windows (like Last 10 trades) are useful for quick feedback but are not statistically stable. Use Last 30 days or larger samples for more reliable trends.

Time windows respect your timezone  
Date-based filters (Last 7/30 days) use your configured timezone. Make sure your timezone is set correctly in Settings so daily and weekly boundaries match your real sessions.

Works across accounts, or per account  
If you trade multiple accounts, you can filter by account first, then apply a time scope to see recent behavior for that specific account.

Scope is a lens, not a solution  
Time-Scoped Analytics show what has changed and in which direction. They don't tell you why it changed or what you should do. You still decide how to interpret and respond.

## Support

If your analytics don't look right or you have questions about time-scoped views, contact hello@trademonkey.app.
