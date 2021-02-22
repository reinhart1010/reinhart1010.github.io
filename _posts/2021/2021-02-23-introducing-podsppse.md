---
layout: post
title: "Introducing PODSPPSE: Publish (on your) Own Decentralized Site, Partially Publish and Syndicate Elsewhere"
categories: [updates, indieweb]
tags: [en-us]
---
> **This blog post contains terms which may not be fully understood outside of the [IndieWeb](https://indieweb.org/) and federated social network ("Fediverse") communities, which includes the following:**
>
> + **A [silo](https://indieweb.org/silo)** is a website, app, or service featuring user-generated content
> + **External (or third party) silos** are commonly third-party social platforms such as Facebook and Twitter with (often) restrictive features, rules and policies
> + [**POSSE** (Publish on your Own Site, Syndicate Elsewhere)](https://indieweb.org/POSSE) is a content syndication strategy where every single content are posted directly into the user's own website (as a personal silo), before publishing links or copies into third party silos
> + [**PESETAS** (Publish Elsewhere, Syndicate Everything To A Silo)](https://indieweb.org/PESETAS) is a content syndication strategy where every single content are posted on external silos, syndicated into a specific external silo to be featured on the user's own website (e.g. via Medium or Tumblr's RSS feeds)
> + [**PESOS** (Publish Elsewhere, Syndicate on your Own Site)](https://indieweb.org/PESOS) is a content syndication strategy where every single content are posted on external silos, then syndicated into the user's own website
> + [**Fediverse**](https://en.wikipedia.org/wiki/Fediverse): A network of interconnected (federated) and intercommunicated social network services, in which popular examples include Mastodon, Diaspora*, Matrix.org and GNU Social

**PODSPPSE** is a modification of **POSSE** in which the ~~master~~ main copies of posts are published in own site, where only a selection of these posts are published or syndicated elsewhere. This site is indeed decentralized since it is available on 2 different URLs:

+ <https://reinhart1010.github.io> (Powered by GitHub Pages), and
+ <https://reinhart1010.gitlab.io> (Powered by GitLab Pages).

The main purpose of this is to prepare a Git-based decentralized distribution of blog content, by adding more hosting providers to the roster. This allows copies of posts to have stronger backup strategies and making them more available to the public in the near future.

## The Consideration
Different social media platforms, blog and forum sites (in which what the folks at IndieWeb called [silos](https://indieweb.org/silo)) have unique types of user bases and targets. LinkedIn, for example, is primarily intended for job offers, recruitments, and achievements, while other sites such as StackOverflow are intended for software development. Certain communities such as Tumblr and DeviantArt have unique characteristics and personalities, and even similar communities (e.g. DeviantArt vs Behance vs Dribble) can attract different types of people. Such wide variety of communities and audiences could mean that certain posts, topics, and interests might not be favorable to all of them.

## The Strategy
This is why the PODSPPSE strategy is used on this website, where only a certain set of blog posts will be syndicated on a specific site. For example, I might not syndicate posts related to BINUS University announcements to LinkedIn, or posts written in Indonesian (Bahasa Indonesia) to [DEV.to](https://dev.to), another blog site dedicated to (primarily English-speaking) software developers. PODSPPSE is still compatible with POSSE

Unlike POSSE, PODSPPSE also allows posts to be created first in a silo before publishing it into own sites. This site is currently created and built manually (i.e. by using a desktop computer instead of an external CI/CD service) using [Jekyll](https://jekyllrb.com), hence it requires a desktop computer in order to update the entire site by running `jekyll build`, `git commit`, and `git push`. Some silos, however, are sometimes handy to post urgent announcements from mobile phones, and some GSLC assignment posts (more on [this Indonesian post](/posts/2021/02/21/jawaban-jawaban-tugas-gslc-binus-saya-kini-tersedia-di-blog-ini.html)) have to be published into an internal silo first (i.e. [BINUSMAYA](https://binus.ac.id)) before to this site, as a measure against cheating.

Some posts will be PODSPPSE-d as a full copy on certain sites, especially on third party blogging platforms. This allows users of those platforms to use certain exclusive features such as comments, highlights (e.g. in Medium), bookmarks, "save" (e.g. in Instagram) and custom Liquid tags (in Forem-based sites including [DEV.to](https://dev.to)) available on respective platforms. Some of these features are currently being brought into this site too, including Webmentions support, Twitter and GitHub activities (via [Bridgy](https://brid.gy) and Webmentions), as well as Forem-derived custom Liquid tags.

> #### How about the Fediverse?
> Fediverse syndication and support for Webmentions (especially via [Bridgy](https://brid.gy) or [Bridgy Fed](https://fed.brid.gy/)) is currently undergoing further discussion, noting that very few number of Indonesians are participating on the network, while a large set of the fediverse are based on privacy-conscious regions such as the European Union.
> 
> Choosing a local instance is preferable for legal reasons, while I personally have not found any Indonesia-based federated social network instances yet, which at least comply to Indonesian regulations such as Undang-Undang Informasi dan Transaksi Elektronik (UU ITE). I have lost credentials for a Diaspora* and a Mastodon instance/"pod" (where I have not posted anything), so I'll need to find another new one before syndicating and distributing my own content into the fediverse.

## List of Syndicated Places
Otherwise stated, these platforms and services expect content in English.

| Platform/Service Name | Feature Name | Feature Type | Target Audience or Usage | Syndication Strategy |
|---|---|---|
| [BINUSMAYA](https://binusmaya.binus.ac.id) ➡️ ↩️ 🔒 🔐 | Forum | Forum / Bulletin Board | For BINUS University assignments | Full copy of original post |
| [DEV.to](https://dev.to) ➡️ ↩️ 🌲 | Posts | Blogs | Public, primarily for programming and software development | Full copy and link to original post |
| [Instagram](https://instagram.com) 🌲 | Feed | Pictures and Videos | For BINUS University students, Tier 1 (family) 2 (friends) and 3 (loose friends) communication list | Full (image, video) or summarized copy only |
| [Kotakode](https://kotakode.com) ➡️ ↩️ 🌲 | Blogs | Blogs | Public, primarily for programming and software development. Content in Indonesian (Bahasa Indonesia). | Full copy and link to original post |
| [Kotakode](https://kotakode.com) ↩️ 🌲 | Pertanyaan | Q&A | Public, primarily for programming and software development. Content in Indonesian (Bahasa Indonesia). | Full copy only |
| [LINE](https://line.me) 🌲 | Stories | Stories | For BINUS University students, Tier 2 (friends) and 3 (loose friends) communication list | Full (image, video) or summarized copy only |
| [LINE](https://line.me) ➡️ ↩️ 🌲 | Timeline | Microblogging | For BINUS University students, Tier 2 (friends) and 3 (loose friends) communication list | Summarized copy and link to original post |
| [LinkedIn](https://linkedin.com) ➡️ ↩️ 🌲 | Post | Blogs | For job-related updates and articles | Summarized copy and link to original post |
| [LinkedIn](https://linkedin.com) 🌲 | Stories | Stories | For job-related updates and articles | Full (image, video) or summarized copy only |
| [Medium](https://medium.com) ➡️ ↩️ 🌲 | Posts | Blogs | Public, either in English or Indonesian | Full copy and link to original post |
| [OpenStreetMap](https://openstreetmap.org) ➡️ ↩️ 🌲 | Question (id-ID: Pertanyaan) | Q&A | OpenStreetMap contributors and projects in any language | Full copy and link to original post |
| [Quora](https://quora.com) ➡️ ↩️ 🌲 | Question (id-ID: Pertanyaan) | Q&A | Public. Target community depending on site language. | Full copy only |
| [Snapchat](https://snapchat.com) ➡️ 🔐 | Stories | Stories | Tier 2 (friends) communication list | Full (image, video) copy and link to original post |
| [Telegram](https://telegram.org) ➡️ ↩️ 🌲 | Channels | Blogs | Public, primarily for programming and software development | Summarized copy and link to original post |
| [Twitter](https://twitter.com) 🌉 ➡️ ↩️ 🌲 | Tweets/Threads | Microblogging | Public, either in English or Indonesian | Summarized copy and link to original post |

+ 🌉 Supports [Bridgy](https://brid.gy) integration
+ ➡️ Allows direct link to original website
+ ↩️ Syndicated copies will be accessible from original website
+ 🌲 Link to original copy may be presented *a la* [Linktree](https://linktr.ee) links
+ 🔒 Locked (Archived)
+ 🔐 Restricted

## The Goal
The main goal of PODSPPSE is indeed the same as POSSE, where my own content can be syndicated across different sites, services, and platforms, while maintaining an archive of posts into an open, distributed places such as GitHub. This allows my posts and content to be further distributed across places and communities in the near future.