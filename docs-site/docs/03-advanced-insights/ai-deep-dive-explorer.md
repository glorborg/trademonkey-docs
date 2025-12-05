---
id: ai-deep-dive-explorer
title: AI Deep Dive Explorer
sidebar_label: AI Deep Dive Explorer
---

# AI Deep Dive Explorer


## What AI Deep Dive Explorer Is


AI Deep Dive Explorer is a conversational pattern analysis tool that allows you to explore specific behavioral patterns through multi-level questioning. Unlike AI Diagnostics (which scans all data for patterns), Deep Dive focuses on one pattern at a time and investigates it through iterative follow-up questions.


This is Perplexity-style exploration: you ask a question, AI answers using your data, you ask a follow-up question to go deeper, AI refines its analysis, repeat up to 5 levels deep.


Deep Dive Explorer answers: "Why does this pattern occur? When is it strongest? What conditions amplify or reduce it?"


## Purpose and Role


Deep Dive Explorer serves as a behavioral microscope. After identifying a pattern (through AI Diagnostics, Time-Scoped Analytics, or Execution Recap), you use Deep Dive to:


- **Understand causality**: Why does conviction drop during trades?
- **Identify conditions**: When does FOMO emotion lead to losses vs breakeven?
- **Detect amplifiers**: What makes afternoon discipline worse (time alone? or time + losses + specific setups)?
- **Explore multi-dimensional patterns**: Do low-conviction + FOMO + afternoon trades perform worse than any single factor alone?


Deep Dive provides depth on a single topic. It does not scan all your data for patterns—that's AI Diagnostics' role. It digs into one pattern you already identified.


### Deep Dive vs Other AI Features


**AI Deep Dive Explorer (Depth)**
- **Purpose**: Explore one specific pattern through multi-level questioning
- **Interaction**: Conversational Q&A (up to 5 levels deep)
- **Output**: Sequential answers that build on previous context
- **Breadth**: Narrow (one pattern at a time)
- **Depth**: Deep (explores causality, conditions, amplifiers, context)
- **Use case**: "Why does X happen? When is X strongest? What conditions cause X?"


**AI Diagnostics (Breadth)**
- **Purpose**: Identify all significant patterns in your data
- **Interaction**: Single request → Report
- **Output**: Structured summary with 5-10 key findings
- **Breadth**: Wide (scans all dimensions)
- **Depth**: Shallow (each finding is 2-3 sentences)
- **Use case**: "What patterns exist in my data?"


**Trade Thread Summary (Narrative)**
- **Purpose**: Explain what happened in one specific trade
- **Interaction**: Single request → Trade timeline analysis
- **Output**: Chronological narrative of one trade's execution
- **Breadth**: Narrow (one trade)
- **Depth**: Medium (trade-specific context)
- **Use case**: "What happened during this losing trade?"


**Rules Coach (Configuration)**
- **Purpose**: Help define or explain trading rules
- **Interaction**: Guided wizard or Q&A
- **Output**: Rule proposals or violation explanations
- **Breadth**: N/A (not pattern detection)
- **Depth**: N/A (not analysis, just configuration)
- **Use case**: "Help me create rules from my strategy"


### Typical Workflow


1. **Identify pattern** (AI Diagnostics, Time-Scoped Analytics, or Execution Recap):
   > "Conviction drops 4.2 points from entry to exit on losing trades"


2. **Open Deep Dive Explorer** and ask initial question:
   > "Why does my conviction drop so much on losing trades?"


3. **AI answers** using your data:
   > "Conviction drops occur most often when price pulls back 10+ pips from entry. Of 18 conviction-drop trades, 16 had pullbacks exceeding 10 pips before hitting stop or target."


4. **Ask follow-up** to go deeper:
   > "Does this happen more at certain times of day?"


5. **AI refines** analysis:
   > "Yes. Afternoon trades (after 2 PM) show conviction drops 2.3x more frequently than morning trades. Afternoon pullback tolerance appears lower."


6. **Continue drilling** up to 5 levels total:
   > "What emotions correlate with these afternoon conviction drops?"
   > AI: "85% of afternoon conviction-drop trades had 'Impatience' or 'FOMO' tagged at entry..."


7. **Session ends** after 5 questions or when you close it


8. **Use insights** to adjust rules, strategy, or behavior


## Five-Level Depth Limit and Follow-Up System


Deep Dive Explorer allows up to 5 question-answer turns per exploration session. This creates a structured drilling process:


### Level Structure


**Level 1 (Initial Question)**
- You ask broad question about a pattern
- AI analyzes your complete trade data
- AI provides initial answer with supporting evidence


**Level 2 (First Follow-Up)**
- You refine or redirect based on Level 1 answer
- AI narrows focus to specific sub-pattern
- AI provides more targeted answer


**Level 3 (Second Follow-Up)**
- You drill into conditions or context
- AI isolates specific scenarios or combinations
- AI provides conditional analysis


**Level 4 (Third Follow-Up)**
- You explore amplifiers or edge cases
- AI identifies what makes pattern stronger/weaker
- AI provides comparative analysis


**Level 5 (Final Follow-Up)**
- You clarify remaining questions or validate hypothesis
- AI provides final contextual details
- AI may summarize pattern's key factors


**Session End**: After Level 5, session closes. You can start a new session (consumes another credit) if more exploration needed.


### Example 5-Level Exploration


**Level 1 Question**:
> "Why does my conviction drop between entry and exit?"


**Level 1 Answer**:
> "Your conviction drops an average of 3.8 points from entry to exit across 42 trades with negative conviction gaps. Drops occur most frequently (78%) when trades move against you initially, even if they later recover. Only 22% of conviction drops occur on trades that never go negative."


**Level 2 Question**:
> "How much initial drawdown triggers conviction loss?"


**Level 2 Answer**:
> "Conviction drops by 3+ points when trades go 15+ pips negative from entry. Of 28 trades with 15+ pip drawdowns, 24 (86%) showed conviction drops. Smaller drawdowns (5-10 pips) correlate with conviction drops only 35% of the time. Pattern: Your conviction is sensitive to mid-level drawdowns (15-25 pips), not minor noise."


**Level 3 Question**:
> "Does this pattern differ by time of day?"


**Level 3 Answer**:
> "Yes. Morning trades (before 12 PM) maintain conviction despite 15+ pip drawdowns 42% of the time. Afternoon trades (after 2 PM) maintain conviction only 12% of the time under same drawdown conditions. Afternoon conviction is 3.5x more fragile than morning conviction when facing drawdowns."


**Level 4 Question**:
> "What emotions appear when afternoon conviction drops?"


**Level 4 Answer**:
> "In afternoon trades with conviction drops during drawdowns, 82% had 'Impatience' or 'Fear' tagged at entry. Morning trades with similar drawdowns but stable conviction had 'Calm' or 'Confident' at entry 76% of the time. Pattern: Entry emotion predicts conviction resilience under drawdown stress."


**Level 5 Question**:
> "Do afternoon trades with calm/confident entry maintain conviction better?"


**Level 5 Answer**:
> "Partially. Afternoon trades with 'Calm' or 'Confident' entry maintain conviction 58% of the time under 15+ pip drawdowns (vs 12% overall afternoon rate). However, this is still below morning rate (42%). Pattern: Afternoon timing weakens conviction resilience even with positive entry emotions, but positive emotions help."


**Session End**: 5 levels reached. Key insight: Afternoon + drawdown + impatient/fearful entry = highest conviction drop risk.


### Why 5 Levels?


**Cost control**: Each question-answer pair consumes OpenAI API tokens. Limiting to 5 levels caps per-session costs.


**Cognitive load**: Beyond 5 levels, exploration becomes unfocused. Five levels force concise, targeted drilling.


**Sufficient depth**: Most patterns can be explored adequately in 3-5 levels. If more depth is needed, start a new session with refined initial question.


**Session credits**: 25 sessions per day allows multiple 5-level explorations without hitting limits.


### Follow-Up Question Guidelines


Good follow-up questions build on previous answers:


**Good Follow-Ups**:
- "Does this pattern occur more in [specific condition]?"
- "What emotions correlate with this behavior?"
- "How does this compare to [different scenario]?"
- "What percentage of [pattern] also has [other attribute]?"


**Poor Follow-Ups**:
- Unrelated topic changes ("Now tell me about my win rate" when exploring conviction gaps)
- Overly broad ("What's wrong with my trading?")
- Coaching requests ("How do I fix this?")
- Repetition of previous question without new angle


AI may refuse poor follow-ups:
> "This question changes topic. Current session is exploring conviction gaps. Please ask a follow-up related to conviction gaps, or end this session and start a new one."


## What Data Is Used


Deep Dive Explorer analyzes aggregated trade statistics and patterns, not raw individual trade details.


### Data Used (Aggregated Only)


**Performance Metrics**
- Win rate by category (emotion, conviction level, time of day, tag, etc.)
- Average P&L by category
- Trade count by category
- Percentage distributions


**Psychology Aggregates**
- Emotion frequency counts
- Average conviction scores by condition
- Conviction gap distributions
- Adherence percentages by condition


**Rule Compliance**
- Violation counts by rule
- Adherence percentages overall and per rule
- Violation timing patterns (when violations occur)


**Time-Based Patterns**
- Trade count by hour, day, session
- Performance by time window
- Duration averages


**Tag-Based Patterns**
- Performance by tag
- Tag co-occurrence (how often tags appear together)
- Tag correlation with outcomes


**Conditional Combinations**
- Multi-dimensional analysis (e.g., "FOMO + afternoon + after losses")
- Interaction effects (e.g., does morning + FOMO perform differently than afternoon + FOMO?)


### Data NOT Used


**Raw Notes and Reflections**
- Deep Dive does NOT read your free-text notes, reflections, or trade reasoning
- Rationale: Notes may contain PII (personal identifiers, account numbers, broker names)
- Notes are unstructured text that requires different AI processing (privacy risk)


**Screenshots**
- Deep Dive does NOT analyze chart screenshots
- Rationale: Image processing not implemented, privacy concerns


**Individual Trade Details**
- Deep Dive does NOT reference specific trade IDs, timestamps, or prices
- Rationale: Aggregated patterns only, not individual trade analysis (use Trade Thread Summary for that)


**External Data**
- Deep Dive does NOT know market conditions, news events, or external factors unless you mention them in your question
- Rationale: TradeMonkey only has your trade data, not market data


### Privacy and PII


Deep Dive Explorer is designed to avoid processing personally identifiable information (PII):


- **No broker names**: Questions about "FTMO" or "MyForexFunds" are fine (common knowledge), but avoid "My Account #12345 at XYZ Broker"
- **No account numbers**: Deep Dive references "Challenge Account 1" (your label), not external account IDs
- **No external identifiers**: Avoid mentioning email addresses, phone numbers, real names in questions


**AI cannot access**:
- Your email address
- Your account password
- Your billing information
- Your notes or reflections (free-text fields)


**AI can access**:
- Aggregated trade statistics
- Emotion/conviction/adherence data (structured fields)
- Tag names (if you created tags with PII, that's your responsibility—don't create tags like "john.doe@email.com")


### No Coaching or Advice


Deep Dive Explorer follows TradeMonkey's mirror philosophy: descriptive analysis only.


**AI will NOT**:
- Tell you what to do ("You should stop trading FOMO setups")
- Recommend strategies ("Try scalping instead of swing trading")
- Offer psychological advice ("Take a break after losses to reset emotionally")
- Predict future outcomes ("Your next afternoon trade will likely fail")


**AI will ONLY**:
- Describe patterns in your data ("FOMO trades have 22% win rate vs 58% for non-FOMO trades")
- Identify correlations ("Afternoon trades correlate with lower conviction")
- Quantify relationships ("85% of conviction drops occur when drawdown exceeds 15 pips")
- Compare conditions ("Morning FOMO trades perform better than afternoon FOMO trades")


## Rate Limits


**Daily Limit**: 25 sessions per day per user


**Session Definition**: One exploration session = up to 5 question-answer turns


**Reset Time**: Midnight UTC


**Separate from other AI features**: Deep Dive has its own limit, not shared with AI Diagnostics (3/day), Thread Summaries (5/day), or Rules Coach (20/day)


### When Limit Is Hit


- **In-app message**: "You've reached your daily Deep Dive Explorer limit (25/25 sessions used). Resets at midnight UTC."
- **Button disabled**: "Start Exploration" button is grayed out
- **Alternative**: Use Time-Scoped Analytics or Psychology page for manual pattern review


### Managing Your Sessions


**Strategies for efficient usage**:


1. **Start with specific questions**: Vague initial questions waste levels. Begin with pattern you've already identified.


2. **Plan your drill path**: Before starting, know roughly what you want to explore (causality → conditions → amplifiers).


3. **Use all 5 levels**: Don't abandon session early. Each level provides more depth.


4. **One pattern per session**: Changing topics mid-session wastes levels. Start new session for different pattern.


5. **Take notes**: Write down key findings. You can reference them without re-running session.
