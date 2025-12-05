---
id: settings
title: Settings
sidebar_label: Settings
---

# Settings


## What Settings Control


Settings configure how TradeMonkey displays data, enforces rules, and communicates insights. They do not change what data is collected or how patterns are detected—they only adjust presentation, timing, and optional workflows.


Settings are divided into two categories:


1. **User-Level Settings**: Personal preferences (timezone, currency, theme, notifications)
2. **Organization-Level Settings**: Workspace-wide behaviors (behavior mode, reflection requirements, nudge intensity)


Most traders operate as single-user organizations, so both setting types apply to the same person. In multi-user organizations, user settings are individual, organization settings are shared.


## User-Level Settings


User settings control personal preferences and display options. These settings affect only your view of data, not the underlying data itself.


### Profile Settings


**First Name and Last Name**
- **Purpose**: Display name in the interface and email communications
- **Default**: Empty (optional fields)
- **Affects**: UI greeting text, email subject lines, report headers


**Email Address**
- **Purpose**: Account login and communication channel
- **Default**: Set during registration
- **Affects**: Login credentials, email notifications, password reset
- **Note**: Email cannot be changed after registration without contacting support (prevents account hijacking)


### Timezone


**Purpose**: Converts all timestamps to your local time for display and rule evaluation.


**Options**: Any IANA timezone (e.g., America/New_York, Europe/London, Asia/Tokyo)


**Default**: UTC (unless set during onboarding)


**Affects**:
- **Trade timestamps**: Entry and exit times displayed in your timezone
- **Time window rules**: "Allowed trading: 8:00 AM - 12:00 PM" uses your timezone
- **Economic calendar**: News events displayed in your timezone
- **Daily rollover**: "Max 3 trades per day" resets at midnight in your timezone
- **Analytics filters**: Date range filters use your timezone boundaries


**Important**: If your timezone changes (travel, relocation), update this setting. Otherwise:
- Time window rules will enforce at wrong times
- Daily counters will reset at wrong times
- Analytics will group trades incorrectly


**Example**:
- Timezone set to America/New_York (EST/EDT)
- Trade entered at 10:00 AM (your local time)
- Rule: "Allowed trading: 8:00 AM - 12:00 PM"
- Result: Trade passes (10:00 AM is within window)


If timezone was UTC, the same trade would show as 3:00 PM (10:00 AM EST = 15:00 UTC), potentially violating time window rules.


### Preferred Currency


**Purpose**: Display all P&L, balances, and risk metrics in your preferred currency.


**Options**: USD, EUR, GBP, JPY, AUD, CAD, CHF, NZD (major currencies)


**Default**: USD


**Affects**:
- **P&L display**: All profit/loss shown in this currency
- **Account balances**: Starting and current balance displayed in this currency
- **Risk calculations**: Risk amount (SL distance × position size) shown in this currency
- **Analytics**: Cumulative P&L, average P&L, emotional cost displayed in this currency


**Does NOT affect**:
- Underlying trade data (stored in account's native currency)
- CSV imports (imported in original currency)
- Conversion rates (no automatic currency conversion)


**Note**: If your account trades in a different currency than your preferred currency, you must manually convert P&L before logging trades. TradeMonkey does not perform currency conversion automatically.


**Example**:
- Account trades GBP pairs, account currency is GBP
- Preferred currency set to USD
- You log trade with -£200 P&L
- You must calculate USD equivalent manually: -£200 × 1.27 = -$254
- Enter -$254 as P&L (or keep account in GBP and set preferred currency to GBP)


### Theme


**Purpose**: Visual appearance of the interface.


**Options**:
- **Dark**: Dark background, light text (default, reduces eye strain)
- **Light**: Light background, dark text


**Default**: Dark


**Affects**: Only visual presentation. No impact on data, analytics, or workflows.


**Note**: Theme preference is saved per device. If you use TradeMonkey on multiple devices, set theme separately on each.


### Email Notifications


**Email Recap Enabled**
- **Purpose**: Receive daily email summary of trades and performance
- **Default**: Enabled
- **Frequency**: Once per day at end of trading session (6:00 PM in your timezone)
- **Content**: Trade count, P&L summary, rule violations, conviction gaps


**Weekly Recap Enabled**
- **Purpose**: Receive weekly performance summary and patterns
- **Default**: Enabled
- **Frequency**: Once per week on Sunday evening (6:00 PM in your timezone)
- **Content**: Weekly stats, emotion analysis, adherence trends, top violations


**Affects**: Only whether you receive emails. Does not affect in-app data or analytics.


**Note**: If both are disabled, you will not receive any automated email communications (except critical account notifications like password reset or billing issues).


## Organization-Level Settings


Organization settings control workspace-wide behaviors and optional workflows. In single-user setups, these are effectively personal settings. In multi-user organizations, these apply to all members.


### Workspace Name


**Purpose**: Label for your trading workspace (appears in UI header and reports).


**Default**: "My Trading Workspace" (set during registration)


**Affects**: Display only. No impact on functionality.


**Example**: "John's Prop Trading Accounts" or "ACME Trading Team"


### Behavior Mode


**Purpose**: Adjusts the tone and intensity of TradeMonkey's messaging and optional workflow enforcement.


**Options**:
- **Gentle**: Minimal enforcement, soft language, optional features mostly disabled
- **Balanced**: Standard enforcement, neutral language, optional features available but not required
- **Discipline**: Strict enforcement, direct language, optional features encouraged or required


**Default**: Balanced


**Does NOT affect**:
- Rule violations (rules are always enforced regardless of behavior mode)
- Data collection (all data is collected the same way)
- Analytics calculations (patterns are detected identically)


**Affects**:
- Messaging tone in UI (encouragement vs directness)
- Reflection prompts (suggestions vs requirements)
- Post-trade workflows (optional vs encouraged)


**Behavior Mode Differences**:


#### Gentle Mode
- **Messaging tone**: "You might consider reviewing this trade"
- **Reflection prompts**: Suggestions only, never required
- **Rule violations**: Displayed softly, no persistent reminders
- **Streaks and nudges**: Disabled by default
- **Morning prompts**: Disabled
- **Post-trade reflection**: Optional, low visibility


**Use case**: Traders who prefer minimal interruption and self-directed review


#### Balanced Mode (Default)
- **Messaging tone**: "Pattern detected: Conviction gap of -5"
- **Reflection prompts**: Available but optional
- **Rule violations**: Clearly displayed, no forcing
- **Streaks and nudges**: Enabled but not intrusive
- **Morning prompts**: Available via in-app or email
- **Post-trade reflection**: Visible but optional


**Use case**: Most traders who want awareness without enforcement


#### Discipline Mode
- **Messaging tone**: "Violation detected: Max daily loss exceeded by $200"
- **Reflection prompts**: Encouraged after every significant trade
- **Rule violations**: Prominently displayed with persistent indicators
- **Streaks and nudges**: Enabled and visible
- **Morning prompts**: Encouraged daily
- **Post-trade reflection**: Required before closing certain trades (if reflection_required is enabled)


**Use case**: Traders who want maximum accountability and are willing to accept workflow friction


**Important**: Behavior mode does NOT disable rule checking or data collection. It only changes how information is presented and whether optional workflows are encouraged.


### Reflection Required


**Purpose**: Enforces post-trade reflection before a trade can be marked as "complete."


**Options**: Enabled or Disabled


**Default**: Disabled


**When Enabled**:
- After closing a trade, you must add a post-trade reflection before the trade is considered "reviewed"
- Trade Recap displays "Reflection Required" indicator for trades without reflections
- Dashboard may show count of "unreviewed trades"
- Reflection prompts appear more prominently


**When Disabled**:
- Reflections are optional
- Trades are considered complete immediately after closing
- No workflow enforcement


**Affects**:
- Whether reflection is required in post-trade workflow
- Visibility of reflection prompts
- "Unreviewed trades" counter on dashboard (if enabled)


**Does NOT affect**:
- Data collection (you can still log trades without reflections)
- Analytics (trades without reflections are excluded from reflection-based analytics, but included in all other analytics)


**Note**: If you enable this setting and have 50 trades without reflections, you will see 50 "unreviewed trades." This can feel overwhelming. Consider enabling this setting only going forward, not retroactively.


**Recommended for**: Traders in Discipline mode who want forced accountability after every trade.


### Streaks Enabled


**Purpose**: Tracks consecutive winning or losing days and displays streak indicators.


**Options**: Enabled or Disabled


**Default**: Enabled


**When Enabled**:
- Dashboard displays current win/loss streak (e.g., "3-day win streak")
- Streak counter resets daily based on net P&L (positive day = win, negative day = loss, breakeven = no change)
- Longest streaks are tracked for reference


**When Disabled**:
- Streak tracking is hidden
- No streak indicators appear in UI


**Affects**: Display only. Streaks do not trigger any workflows or affect analytics.


**Note**: Some traders find streaks motivating (win streaks feel good). Others find them distracting or anxiety-inducing (loss streaks feel demoralizing). Choose based on your psychological preference.


### Nudge Intensity


**Purpose**: Controls the frequency and prominence of behavioral nudges and reminders.


**Options**:
- **Low**: Minimal nudges, only for critical issues (rule violations, compliance breaches)
- **Medium**: Standard nudges, includes patterns and suggestions
- **High**: Frequent nudges, proactive pattern alerts and reminders


**Default**: Medium


**Nudge Types**:
- **Rule violation alerts**: "You've violated 'Max 3 trades per day' twice this week"
- **Pattern reminders**: "Your afternoon trades show 40% lower win rate than morning trades"
- **Reflection prompts**: "You haven't reflected on your last 5 trades"
- **Compliance warnings**: "Approaching max daily loss limit ($450 of $500 used)"


**Intensity Differences**:


#### Low Intensity
- Only critical nudges (rule violations, compliance breaches)
- Nudges appear once, no repeats
- Minimal visual prominence (small indicators, no pop-ups)


#### Medium Intensity (Default)
- Critical nudges plus pattern alerts
- Nudges may repeat if not acknowledged (max once per session)
- Standard visual prominence (badges, in-app notifications)


#### High Intensity
- All nudges including proactive suggestions
- Nudges repeat more frequently
- High visual prominence (prominent indicators, occasional modals for critical issues)


**Affects**:
- Frequency of in-app notifications
- Visibility of pattern alerts
- Repetition of reminders


**Does NOT affect**:
- Rule evaluation (rules are checked regardless of nudge intensity)
- Pattern detection (patterns are detected but nudges control whether you're alerted)


**Note**: High intensity can feel intrusive if you trade frequently. Low intensity can cause you to miss important patterns if you don't review analytics regularly. Most traders prefer Medium.


### Morning Prompt Channel


**Purpose**: Determines how and where you receive daily pre-session prompts (if enabled).


**Options**:
- **In-App**: Prompts appear when you open TradeMonkey before your first trade
- **Email**: Prompts sent via email at scheduled time (default: 7:00 AM in your timezone)
- **Both**: Prompts sent via email AND appear in-app


**Default**: In-App


**Morning Prompt Content** (if behavior mode and settings enable prompts):
- Summary of previous session performance
- Active rules reminder
- Any unreviewed trades from yesterday
- Calendar of upcoming news events (if integrated)
