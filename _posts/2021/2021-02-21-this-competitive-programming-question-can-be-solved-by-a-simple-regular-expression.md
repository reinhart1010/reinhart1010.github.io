---
layout: post
title: This Competitive Programming question can be solved by a simple Regular Expression!
categories: [dev.to]
tags: [en-us, todayilearned, competitive-programming, regex]
as_seen_on:
  - site_type: dev.to
    url: https://dev.to/reinhart1010/this-competitive-programming-question-can-be-solved-by-a-simple-regular-expression-2b4e
other_languages:
  id-id: /posts/2021/02/22/soal-competitive-programming-ini-ternyata-bisa-diselesaikan-menggunakan-regular-expression.html
---

## The Problem
**Adapted from [ICPC Indonesia National Contest (INC) 2014, Problem H](https://tlx.toki.id/problems/inc-2014/H)**

Someone is ranting on his Facebook’s wall.

![image](https://sandalphon.tlx.toki.id/api/v2/problems/JIDPROGRXN7JpK5h0XB433Clweb/render/c.jpg)

Notice that there are several blue-colored texts in the rant (which are hashtags, since they begin with a hash character / #). However, not all of hash-beginning words and texts which are not counted as hashtags, such as `#)(*`, `#*C)`, and `##CM` (only the `#CM` part of the text is considered one).

A valid hashtag (in this case, as a guideline for answering this problem) should begin with a hash character (#), following with an alphabet (a-z, A-Z) and optionally, a set of (one or more) alphanumeric characters (a-z, A-Z, 0-9). Hashtags should **not** immediately follow another hashtag, hence each adjacent hashtag should be separated by a space or non-alphanumeric character.

+ **Invalid:** `#1234`, `#$1-13LL`, `#alpha#beta` (only `#alpha` is valid), `#%#{#[}#hello` (only `#hello` is valid)
+ **Valid:** `#t0D4y1L3aRnED`, `#alpha£#beta` (both `#alpha` and `#beta` are considered separate)

You will be given a *T* number of test cases (1 <= *T* <= 100), and for each case you will be given an input string to be processed. Output the number of valid hashtags in the format of “Case #*X*: *A*”, where *X* is the case number from 1 and *A* is the number of valid hashtags, followed by printing every valid hashtags separated by line breaks (`\n`).

## The Regex-based solution
Behold,

```
(#[A-Za-z][0-9A-Za-z]*)(#[A-Za-z][0-9A-Za-z]*){0,1}
```

This regular expression pattern utilizes **capture groups** to detect individual hashtags. The pattern is structured into

```
(< Capture Group 1 >)(< Capture Group 2 >){0,1}
```

The first capture group contains the following pattern.

```
#[A-Za-z][0-9A-Za-z]*
```

If you’re familiar with regular expressions, you can clearly understand that the above pattern exactly matches the aforementioned hashtag rules:

1. Started with `#`,
2. then followed with a alphabetic character (`[A-Za-z]`),
3. and finally followed with any (0 or more) alphanumeric characters (`[0-9A-Za-z]*`).

The second capture group simply repeats the first one, and it is intended to capture valid hashtags which follow any valid hashtag, such as `#alpha#beta`. `{0,1}` is then appended on the entire regex pattern to ensure that the second group is optional, so any other isolated valid hashtags can still be detected, such as `2847#helloworld:$24`. This also prevents strings such as `#hello#to#the#world` to be detected as one hashtag, since according to the rules the string should be treated as 2 separate ones (`#hello` and `#the`).

Competitive programming competitions such as ICPC and INC allows submissions in C, C++, Java or Python. And fortunately, once we have found the valid regex pattern, we can directly implement it into C++, Java and Python code using standard regex libraries. Note that in order to answer the original question, you’ll need to **get/extract the result using the first capture group,** or else the judging system will consider a wrong answer.

## Conclusion
I believe that this problem can also be solved in many ways, perhaps by utilizing certain string matching algorithms to optimize the hashtag-counting process. However, it’s quite interesting that this problem can be solved by a one-liner regular expression pattern, which is acceptable in many programming languages. I wonder whether and how quick the original contestants realized that a regex-based solution is possible for this problem.