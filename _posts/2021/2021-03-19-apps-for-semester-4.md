---
layout: post
title: "Building 13+2 Mobile Applications and parallel Samsan Tech startups for Semester 4"
categories: [binus, binus-socs, binus-mat, food-navigator, ika, updates]
tags: [en-us]
cover_image: https://user-images.githubusercontent.com/17312341/107489967-d6b25580-6bbb-11eb-97de-aeffc18df182.png
---

**Semester 4 has finally arrived.** Now it's the time to focus less on obligatory university courses (e.g. Character Building and English) and focus more into computing and mobile programming. In the first week of this brand new semester, we are greeted by this speech.

> *"Since you are students of **Mobile Application and Technology (MAT)** major, you will need to design and create apps for mobile devices."*
> 
> -Literally every single lecturer

**No, Seriously. I need to build 13 (and additionally 2 more) apps for this semester!** Here are some of the list I will be making:

**Mockup-only**

+ 1 Axure application mockup
+ 3 Figma application mockups

**Code-only**

+ 3 Android applications written in Java
+ 1 Arduino or NodeMCU (C/C++) application
+ 1 Node.js application

**Mockup + Code**

+ 1 Axure + Flutter application
+ 2 Figma + Android (Java) applications
+ 1 Figma + Flutter application

Some of these apps are meant to be developed in teams, while some are required for Mid and Final Exam assessments purposes. However, a few of them **must** be developed individually, without using any external libraries and frameworks (e.g. React Native). Please note that the list above does not include possibly 3 more applications that I need to build for Embedded Systems and Internet of Things (ESIOT).

Despite require a great teamwork, skill, and time management, building these 13 applications does not always mean a challenge for myself. In fact, I and my teams are agree to build upon some of our existing apps and projects, while improving them with new and useful features.

## The Return of Food Navigator, for the sake of "Software Engineering"
The Software Engineering course requires students to form teams to face 2 different projects. Each team should be able to:

1. Create and submit a **PKM-KC** proposal for the **Indonesian (Higher Education) Students Science Week (PIMNAS)**, which will be selected at the university level through **Bina Nusantara (BINUS) Students Science Week**, also known as **PIMNUS**.
2. Create and submit a **Business Proposal** for the sake of **BINUS Entrepreneurship Center (BEC)**, which includes (but not limited to):
  + Value Proposition Canvas (VPC),
  + Business Model Canvas (BMC),
  + Product presentation/keynote/pitch, and
  + Working prototype of the product.

[Food Navigator](https://reinhart1010.github.io/foodnavigator) is currently a simple web app originally dedicated for building an interactive map directory for restaurants near BINUS University campuses. The app is powered by Leaflet.js, OpenStreetMap, as well as its Overpass API, where the restaurants' data are directly pulled from OpenStreetMap via Overpass API. This gives us the flexibility of extending and improving the restaurants' data by directly editing them through OpenStreetMap. The app itself has resulted in a great success on its launch in 2019.

One feedback suggests that the app should be further expanded to somewhat the next popular food or place review app, such as Foursquare, TripAdvisor, Zomato, and even Google Maps. Meanwhile, 

There are 3 directions where this new app should follow, which are:
1. A location directory for **university students**, in a similar fashion to BINUS's Beelife (2013) mobile website, as described in this ([Indonesian journal](https://journal.binus.ac.id/index.php/comtech/article/view/2541))
2. More focused towards **Indonesia's small and micro food and beverage enterprises (F&B SMEs/UMKM)**
3. Aforementioned generic **Place of Interest** ratings and review app

> **Note:** The current "BeeLife" application at <https://beelife.binus.org/> is completely unrelated with the app described on the journal

There are still many considerations for this new app, especially on its business model as well as technical aspects. I originally wanted to develop in Flutter since it can be used for developing cross-platform applications and in order to exercise for the "Human and Computer Interaction" (MAT edition) assignments and exams which specifically requires Flutter 1 (not the recently-released Flutter 2).

## When "Tasks", "Reminders", and "To Do" are not enough, we built a new one!
There are just too many apps dedicated for tasks, reminders, and "To Do" lists, all with different features and limitations. Here are some of them:
+ Any.do
+ BlackBerry Hub+ Tasks
+ ColorNote
+ DoDay
+ Egenda
+ Fun Habit (SimiDev)
+ Google Tasks
+ Habitica
+ iOS Reminders
+ Joplin
+ Microsoft To Do
+ Notion
+ OneNote
+ Remember The Milk
+ Samsung Reminder
+ Todoist
+ UReminder
+ WorDo
+ Yammer
+ Zenkit

So we are planning to build one especially for ourselves. This app icon speaks our situation of having to work on so many tasks, even it has the most number of checkmark icons among the mentioned apps!

![candidate app icon](https://user-images.githubusercontent.com/17312341/111343539-1b934580-86ae-11eb-8515-41f2840e155b.png)

This would be more amazing than my ["Jackpot GBK" game](https://reinhart1010.github.io/jackpotgbk), so please stay tuned.

## Empowering Society by what?
A lecturer on another university course requires us to build teams to design a mobile website mockup using a certain theme, and we got "Empowering Society".

I originally wanted to combine this project with another (possible) project on the ESIOT course, where I planned to create a mobile website dedicated on either or both:
+ Embedded computers, microcontrollers, and I/O (Arduino, Raspberry Pi)
+ Introduction to programming concepts (just like Scratch and [code.org](https://code.org))

The final concepts of this website is still not yet finalized, but I will try to keep it close with the **"Everyone can make it. Everyone can play."** mantra of **Super Mario Maker (2015)**.

## Building Apps for Practicum, Mid and Final Exams
There are not much information I can tell you about this, in order to prevent disclosure of practicum and exam-related information. However, there are **8 individual apps** which will be required to design/build/examine for practicum assignments as well as course examinations, which consists of:

+ 2 Mid Exams
+ 2 Final Exams
+ 2 Practicum Quiz (Individual)
+ 2 Practicum Projects (Group)

These assignments enforces a strict guidelines and regulations. For example, if an exam question requires you to use Android's RecyclerView, you **must** use the RecyclerView component in the develop app in order to obtain (full) marks or scores. However, I will conduct precautions against accidental plagiarism by enforcing several measures and countermeasures. For example, I will upload videos (which are required for answering an exam question) on the exam's due date in order to minimalize disclosure and copying of my video-based answers.

## Introducing AC, an "Embedded Systems and Internet of Things" project
**AC** (a recursive acronym of **AC Check**) is a Internet of Things (IoT) system intended for determining whether an AC should be replaced, by detecting the room temperature trends. It uses a NodeMCU device connected to a Node.js server, where the NodeMCU device uses the DHT22 temperature and humidity sensor. The user will be alerted by the system in an instant messaging app if AC maintenance is neccesary, which brings me into continuing the **Ika chatbot framework**.

## The continuation of Ika, that TypeScript-based Node.js frameworks
In order to support my **AC** application, I will continue my progress on Ika chatbot framework. Ika was initially designed for [Telegram](https://telegram.org) and [ChatAja](https://chataja.co.id), however I decided to focus on building the Telegram client first as well as [Matrix.org](https://matrix.org).