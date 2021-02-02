---
layout: post
title: "Mapping Indonesian Payment Systems and Proposal for New Payment Tags"
categories: [openstreetmap]
tags: [en-us]
as_seen_on:
  - site_type: openstreetmap
    url: https://www.openstreetmap.org/user/Reinhart%20Previano/diary/48246
---
*This post is neither created nor endorsed by companies involved in establishment of payment systems listed below.*

The OpenStreetMap [payment:](https://wiki.openstreetmap.org/wiki/Key:payment) tag allows mappers to tag stores that accept certain payment methods (cash, debit and credit cards, etc.). Currently, the wiki

# What's new?
First, let me introduce five new tags: three of them are dedicated to Indonesia's newly-established **GPN** (Gerbang Pembayaran Nasional, *literally* National Payment Gateway). Currently it is a debit card switching network, similar to that of VISA and MasterCard (Maestro). Here, I propose `payment:gpn_debit` to be used in all merchants accepting GPN debit cards.

The Indonesian government has plans to replace existing payment networks in Indonesia with GPN, so does with credit cards and mobile wallets (e.g. Apple Pay and Google Pay). I am proposing `payment:gpn_credit` and `payment:gpn_qris` to be reserved for later use. The latter refers to the QR Indonesian Standard (QRIS) payment, similar to the [SGQR](http://www.mas.gov.sg/sgqr/index.html) system in Singapore.

The rest of these tags are `payment:akulaku` and `payment:grabpay`, reserved for Akulaku Pay and GrabPay. Both payment systems are currently used in multiple countries across Southeast Asia. In Indonesia, GrabPay has merged to Indonesian digital wallet app [OVO](https://ovo.id), so merchants using OVO-GrabPay QR code sticker (see below) should be tagged with `payment:grabpay=yes` and `payment:id_ovo=yes`.

![OVO-GrabPay merchant sticker](https://webcompat.com/uploads/2019/4/14b82196-e716-4ff7-b42c-430ed4387ca4.jpeg)

There are a bunch of other proposed tags prefixed in `id_*` (e.g. `payment:id_ovo` and `payment:id_gopay`). This prefix is used for payment services operating only in Indonesia, to avoid trademark conflicts with other countries, such as Indonesia's [GO-PAY](https://www.go-jek.com/go-pay/) with [GOPAY](https://gopay.com.my/) (Malaysia), [GoPay](https://www.gopay.com) (Czech Republic) and [GoPay.me](https://gopay.me).

A full list of posposed (and existing) `payment:` tags are available on https://telegra.ph/Konvensi-tag-payment-di-Indonesia-04-19 , written in Bahasa Indonesia to serve as guidelines for Indonesian mappers. Note that some tags might be replaced with `payment:gpn_qris` once after QRIS becomes functional.

# How will users use this data?
On the OpenStreetMap.org website, users can look for accepted payment methods from the node/line/area details. Unfortunately, payment tag details are not available in some OSM clients and the [Nomimatim](https://nominatim.openstreetmap.org) website. Oh, some users might hunt for stores with discounts and cashbacks offered by digital wallet apps (currently this is a real craze in Indonesia).

![Screenshot](https://webcompat.com/uploads/2019/4/eb2f8ed7-6d21-463f-8b7e-ff6947efc9e4.jpeg)

**Note:** Some of the payment metadata is incorrect, and the shop was edited before the tag proposal. Major Alfamart stores now accepts cash, debit and credit cards, contactless prepaid cards Flazz (`payment:id_flazz`), Mandiri e-money (`payment:id_mandiri_emoney`) and BRIZZI (`payment:id_brizzi`), as well as digital wallet service GO-PAY (`payment:id_gopay`).

Besides that, tagging these shops may also be useful for research. For example, a [TagInfo search of stores accepting Alipay](https://taginfo.openstreetmap.org/keys/payment:alipay) reveals that the service is accepted outside China to serve international visitors (especially China). As one of the largest countries in the world, having a complete map of Indonesian payment systems could be beneficial for researchers to evaluate the effectiveness of payment services as one of the economy infrastructures in Indonesia.

And for the OSM community, adding new `payment:` tags from [Sabang](https://www.openstreetmap.org/relation/9020791) to [Merauke](https://www.openstreetmap.org/node/541933847) will get them busy again.
