---
layout: post
title: "COMPUTERUN 2020 Website"
categories: [dev.to, web-development, projects]
tags: [en-us, showdev, webdev]
theme_color: "#0e1732"
cover_image: "https://dev-to-uploads.s3.amazonaws.com/i/8tkxpx3acuet4bd4igdw.jpg"
as_seen_on:
  - site_type: "dev.to"
    url: https://dev.to/reinhart1010/computerun-2020-website-16jf
---
**COMPUTERUN** is a brand new competition and webinar event concept by two student associations at [BINUS University, Indonesia](https://binus.ac.id), which are [HIMSISFO] and [HIMTI]. Despite that the event ended last month, **COMPUTERUN 2020** sets the first installment of the series with a brand new website at <https://computerun.id>.

The website was initially made using a custom CSS framework, since other frameworks such as [Bootstrap](https://getbootstrap.com) and [Tailwind CSS](https://tailwindcss.com) cannot keep up with the complexity of the event's design system. We sooner decided to include and patch Bootstrap to make it work with the rest of the website, though.

There are a bunch of CSS tricks pulled to improve the look and feel of the website. The **#BeyondInsight** tagline, for example, is composed using a CSS `linear-gradient` background masked by `-webkit-background-clip`. It's also the same trick behind the image-masked headline texts on the original iPhone XR product webpage at <https://apple.com>. And thanks to that, we are able to reduce the need to load PNG images to the site, since we are able to replicate them directly using CSS!

![iPhone XR product webpage](https://dev-to-uploads.s3.amazonaws.com/i/ivqogmzk30tm435mp6x3.png)

During the development of this website, we have also learned so much about utilizing CSS pseudo-classes and pseudo-elements to get the job done. You can also view some of our hand-crafted design prototypes at [this CodePen demo](https://codepen.io/Reinhart_Previano/pen/vYGJRZQ).

## Not Just A Landing Page
Yes, as you might discover at <https://computerun.id>, this site also features a ticketing and attendance system initially used at [HIMTI] for some of their events, including [HTTP 2020](https://http.himti.or.id) (a welcoming party for CS undergraduate freshmen) and [HISHOT 2020](https://hishot.himti.or.id) (an annual seminar and workshop event series). It is entirely based on PHP, [Laravel](https://laravel.com) and Bootstrap, and has gone under several improvements since its initial development on January 2020. We had to ship and patch Bootstrap in order to integrate this system into our overall website.

Rather than blindly copying HTML codes, we have decided to utilize Blade components for everything as much as possible: meta tags, navigation bar, icon wrappers (to quickly display icons from [Bootstrap Icons](https://icons.getbootstrap.com)), and even our sponsors' logos. It is indeed a good practice to divide the design elements into separate components, which was proven by the ease of updating our list of sponsors and media partners without the need to modify every single view.

## Other Secrets
This site also have hidden secrets and features, too. As the cover image suggests, **this site is compatible with iPhone X (and later)-based display cutouts, or "Safe Area Insets"**. Unfortunately, some Android phones (as tested on several Samsung devices) are found to ignore this feature and instead render the site as a traditional website, regardless of web browsers.

Despite not having a Service Worker, **you can actually install this site as a web app too!** In fact, this feature is found to be useful by some of our committees to approve tickets and monitor attendance. If you have a iPhone X or later (XS, XR, 11, 12) device, try adding the site into your home screen and launch it. Seriously, it's beautiful.

And finally, we have decided to put our entire sponsorship proposal to the website as well, on <https://computerun.id/sponsor-us>. It is also useful by some of us since we can simply refer to the webpage for sponsorship terms and inquiries, rather than painstakingly find the proposal document on a file explorer to be sent to our proposed candidates. In fact, they still can download the proposal under the PDF format as usual.

**Note that the event has already ended,** so the sponsorship program is no longer available. However, if you (or your company) is based on Indonesia and would like to partner with us, please reach out on our Instagram accounts at [@himsisfo_binus](https://instagram.com/himsisfo_binus) and [@himti_binus](https://instagram.com/himti_binus) for future, exciting events.

Have a great day!

[HIMSISFO]: https://instagram.com/himsisfo_binus
[HIMTI]: https://himti.or.id
