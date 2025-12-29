---
id: billing-subscription
title: Billing
sidebar_label: Billing & Subscription
description: "Learn how TradeMonkey subscriptions work including creation, renewal, changes, cancellation, and what happens to your data and access over time."
keywords: [billing, subscription, Stripe payments, plan management, account access]
---

# Billing

## Purpose of This Page

This page explains how billing works in TradeMonkey at a high level:

* how subscriptions are created, renewed, changed, and cancelled, and how that affects your access.

It does not list specific prices, plan names, trial lengths, or feature bundles.  
Those details can change over time and are always defined on the official pricing page.

For current pricing and plan details, always refer to the TradeMonkey Pricing Page.

## Core Concepts

TradeMonkey uses Stripe to handle payments and subscription management.

At a high level:

* You subscribe to a plan shown on the pricing page.
* Stripe charges you on a recurring basis (monthly, yearly, or as defined at signup).
* Your subscription level determines which features you can use.
* You can change or cancel your subscription at any time.
* All payment data is stored and processed by Stripe, not by TradeMonkey.

## Creating a Subscription

You can start a paid subscription either:

* From the pricing page, or
* From an upgrade button inside the app.

In both cases you are redirected to a secure Stripe checkout page where you:

* Confirm the plan and billing frequency shown on the pricing page.
* Enter your payment method.
* Complete the checkout.

After Stripe confirms payment:

* You are redirected back to TradeMonkey.
* Your account is marked as subscribed.
* Features associated with your subscription become available.

If a trial is offered, the trial terms (length, what is included, and whether a payment method is required) are always shown at signup.

## Renewals and Failed Payments

Subscriptions automatically renew at the end of each billing period unless you cancel in advance.

On renewal:

* Stripe attempts to charge the payment method on file.
* If the charge succeeds, your subscription continues and access is uninterrupted.
* If the charge fails, Stripe may retry and you may receive emails asking you to update your payment method.

If Stripe cannot successfully charge your payment method after retries:

* Your subscription may be paused or cancelled.
* Access to paid features may be removed until payment is updated.

Exact retry behavior and emails are handled by Stripe and may change over time.

## Upgrades and Downgrades

You can change your subscription level from the billing area:

Upgrades (moving to a higher-priced plan):

* Typically take effect immediately.
* Usually unlock additional features as soon as the change is confirmed.
* Stripe handles any proration or partial charges automatically.

Downgrades (moving to a lower-priced plan):

* Typically take effect at the next renewal date.
* You keep access to higher-tier features until the current billing period ends.
* After the downgrade takes effect, access is limited to what is included in the new plan.

The pricing page defines which features are included in each plan.

## Cancellation

You can cancel your subscription at any time.

When you cancel:

* Recurring billing stops.
* You normally retain access to paid features until the end of the current billing period.
* After that, your account falls back to whatever level of access is offered without a subscription (if any).

Cancellation does not delete your data:

* Trades, rules, reflections, and history remain in your account.
* You can log back in and view historical data.
* You can re-subscribe later to regain access to paid features.

If account deletion is available, it is a separate action from subscription cancellation and permanently removes your data.

## Data and Feature Access

Billing status controls feature access, not data ownership.

In practice:

* Your trading data (trades, rules, reflections, psychology inputs, imports) is not deleted when you downgrade or cancel a subscription.
* Subscription level determines which features are available (for example, certain AI tools or advanced analytics may require an active paid plan).
* Historical outputs created while subscribed (for example, past AI insights) typically remain visible even if you later downgrade, but generating new ones may require an upgrade.

If you need to export your data, CSV export is available inside the app.

## Managing Billing

TradeMonkey uses Stripe's customer portal for self-service billing.

From inside the app you can:

* Open the Billing section in Settings.
* Click Manage Billing (or similar).
* You will be redirected to a secure Stripe-hosted portal.

In the Stripe portal you can typically:

* Update your payment method.
* View and download invoices.
* Change your plan (upgrade or downgrade).
* Cancel your subscription.

The exact options available may evolve as we update billing configuration.

## Refunds, Taxes, and Policy Details

Specific policies regarding:

* Refunds
* Taxes
* Promotional discounts
* Price changes
* Trial terms

are defined in the Terms of Service, checkout flow, and pricing page.

If you have a billing question that is not answered here, contact support at [hello@trademonkey.app](mailto:hello@trademonkey.app) and include your invoice ID or the email associated with your account.
