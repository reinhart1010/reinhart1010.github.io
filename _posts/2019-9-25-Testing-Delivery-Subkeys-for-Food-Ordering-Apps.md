---
layout: post
title:  "Testing Delivery Subkeys for Food-Ordering Apps"
categories: [openstreetmap]
tags: [init-import, english]
---

As you might have noticed, OpenStreetMap offers the `delivery=` tags/keys to tag places and restaurants which offers food deliveries. But, have you ever wondered how to tag those who do not have their own delivery service, but they **do** accept orders from **food-ordering and delivery apps**?

I have seen this case multiple times on small restaurants in Indonesia which indirectly accepts delivery service from [GoFood](https://www.gojek.com/gofood) and [GrabFood](https://www.grab.com/id/grabfood). Sure that there are other similar services available in the world including [MelbSC](https://melbsc.com.au) (Australia), Deliveroo (multiple countries), [Foodora/Foodpanda](https://www.foodora.com) (multiple countries), [UberEats](https://www.ubereats.com) (multiple countries), [Just Eat](https://www.just-eat.com) (multiple countries), as well as [Demae-can](https://sp.demae-can.com/) (Japan).

So, why not we tag these services into OpenStreetMap the same way as [`payment:*=` tags](https://wiki.openstreetmap.org/wiki/Key:payment)?

The rules are simple. For every food delivery apps that one place accepts, tag `delivery:<app or service name>=yes`. For example, if one accepts both GoFood and GrabFood mentioned earlier, give both `delivery:gofood=yes` and `delivery:grabfood=yes` respectively. If the place does not have their own delivery service, as originally intended in the [wiki](https://wiki.openstreetmap.org/wiki/Key:delivery), tag `delivery=no`.

Some users might want to quickly find the place in respective food delivery apps. To ease that workflow, I suggest to add a sub-subkey named `delivery:<app or service name>:ref=`, which stores the URL or URI of the food delivery website/app. Using URL/URIs for this will be much easier for mapping, rather than finding and obtaining respective "restaurant ID"s similar to [`wikidata=`](https://wiki.openstreetmap.org/wiki/Key:wikidata) and [`wikipedia=`](https://wiki.openstreetmap.org/wiki/Key:wikipedia).
