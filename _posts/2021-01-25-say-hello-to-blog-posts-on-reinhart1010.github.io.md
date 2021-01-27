---
layout: post
title: Say hello to blog posts on reinhart1010.github.io (and .gitlab.io)
categories: [updates]
tags: [en-us]
---
![image](https://user-images.githubusercontent.com/17312341/105946926-b900ce80-609a-11eb-911d-8b0109b66b9d.png)

Blog posts are one of the most common features of a personal website, showcasing personal works and interests. Now it's available in both <reinhart1010.github.io> and <reinhart1010.gitlab.io>, directly from the home page.

These blog posts are originally scattered across different places, from the [OpenStreetMap User Diaries](https://www.openstreetmap.org/diary) to [Kotakode](https://kotakode.com/blogs) to [Twitter](https://twitter.com/reinhart1010) to [@reinhart1010 at BINUSIAN Blog](http://reinhart1010.blog.binusian.org). Yes, that list stil does not mention other (micro)blogging platforms such as [Quora](https://quora.com), [telegra.ph](https://telegra.ph), Telegram channels, and so on. Starting today, my articles from those sites will be migrated and unified in my GitHub repository, <https://github.com/reinhart1010/reinhart1010.github.io> (GitLab version: <https://gitlab.com/reinhart1010/reinhart1010.gitlab.io>).

## The Grand History
> *The "Reinhart's New Website" thing is always a hoax.* - Reinhart, 2016.

Since 2013 (Primary School Grade 6), I always wanted to make a website. The original website would simply feature a list of links to my current projects and a blog page.

1. **2013 website, codenamed "Botolcabe".** Hosted on WordPress.com.

![Website preview](https://user-images.githubusercontent.com/17312341/105942238-6a026b80-6091-11eb-8def-bfd1866ff1b6.png)

2. **2014 Website Project.** This was a part of a school project to develop a simple website with HTML and CSS. However, thanks to JavaScript, **Dark Mode has been included on this site, too!**.

![image](https://user-images.githubusercontent.com/17312341/105943399-bf3f7c80-6093-11eb-8e39-36ee0f750951.png)

3. **Circa 2015, on a free hosting platform.**

![Website preview](https://user-images.githubusercontent.com/17312341/105941529-2eb36d00-6090-11eb-93a9-3d0b0db85e73.png)

4. **Website Concept in 2016**

![Website preview](https://user-images.githubusercontent.com/17312341/105941922-0710d480-6091-11eb-8455-1f60d9196720.png)

5. **Circa 2017.** This is the first website to be hosted on GitHub Pages. Some data contained on this website is controlled by a single JSON file. The remnants of this version still remains on [reinhart1010/reinhart1010.github.io](https://github.com/reinhart1010/reinhart1010.github.io) repository, which is planned to be replaced with YAML-based configuration files stored on [reinhart1010/reinhart1010](https://github.com/reinhart1010/reinhart1010).

![image](https://user-images.githubusercontent.com/17312341/105944803-a2587880-6096-11eb-96d8-3ddf6f4f6534.png)

6. **Late 2019.** Now powered by [Bootstrap](https://getbootstrap.com) and hosted on GitHub Pages. This website was planned to be integrated with a **syndication service** run on Now.sh (now Vercel), which serves all the data (blogs, annoucements, etc.) supplied to the website. This was then scrapped in favor of traditional JSON-based files (soon to be YAML) stored on GitHub.

![image](https://user-images.githubusercontent.com/17312341/105945114-3b878f00-6097-11eb-846c-9e2d7491d375.png)

7. **Late 2019.** At the meantime a new, Cayman-based theme was developed to be placed on another repository dedicated for blog archives. Now, all posts contained from the repository have been moved here.

![image](https://user-images.githubusercontent.com/17312341/105945416-d2ece200-6097-11eb-908e-687f970442cf.png)

## How it's done

This website now uses [Halfmoon](https://gethalfmoon.com) as the main CSS framework. The primary reason of choosing this over Bootstrap and TailwindCSS is that Halfmoon was one of the first framework to support Dark Mode, a feature long neglected from the 2014 website. TailwindCSS did not support the feature untuk Version 2.0 (which came later after this site is published), and the ability to customize via CSS global variables are a great way to modify the entire site without breaking the framework.

The blogging feature is powered by [Jekyll](https://jekyllrb.com). However, due to technical issues (more about that later), the site has to be compiled first (by running `jekyll build -d docs`) before publishing to GitHub Pages.

Some contents (such as cards at the [homepage](https://reinhart1010.github.io)) are generated from a buch of JSON and YAML files, while the site icons come from 2 sources: [Fork Awesome](https://forkaweso.me/Fork-Awesome/) and [Bootstrap Icons](https://icons.getbootstrap.com). Icons from [Fork Awesome](https://forkaweso.me/Fork-Awesome/) are primarily used for displaying third-party icons such as Twitter, GitHub and GitLab. The color scheme is currently mixed across different design systems, borrowed from [Halfmoon](https://www.gethalfmoon.com/docs/color-utilities/), [W3.CSS](https://www.w3schools.com/w3css/w3css_color_metro.asp), [Material Design](https://www.gethalfmoon.com/docs/color-utilities/) and recently, [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

## The Future
There is a lot more work to improve this website, including improving the current Jekyll pages for Categories and Tags to be more attractive. Additionally, a(nother) redesign is currently being made to improve the website experience, especially for mobile devices.

Here's a sneak peek of it.

![image](https://user-images.githubusercontent.com/17312341/105941415-f90e8400-608f-11eb-8eb9-f163d000ecd7.png)
