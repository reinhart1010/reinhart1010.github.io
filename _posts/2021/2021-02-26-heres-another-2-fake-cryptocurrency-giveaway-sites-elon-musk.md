---
layout: post
title: "Here's another 2 fake cryptocurrency giveaway sites (Elon Musk)"
description: "To celebrate the adoption of digital currencies, someone have decided to hold another scam."
categories: [investigasi]
tags: [en-us]
---
The sites dicussed here are **NOT** the same as [my first investigation about fake crypto giveaway sites](/posts/2021/02/23/link-spam-giveaway-bitcoin-ethereum-tether-di-grup-telegram-kotakode.html). In this post, I will discuss another two fake cryptocurrency giveaway spotted on Twitter, which in this case claiming to be "Elon Musk".

![Tweet 1](https://user-images.githubusercontent.com/17312341/109197403-85b37b80-77cf-11eb-814f-e8aebe8aa803.png)

![Tweet 2](https://user-images.githubusercontent.com/17312341/109197488-a11e8680-77cf-11eb-8cdf-3812886b0f8b.png)

These tweets are referring to 2 different sites, which are `2elon.club` and `elon-airdrop.org`. Note that the term "airdrop" here **does not refer** to the [AirDrop technology as used in Apple products](https://support.apple.com/en-us/HT204144), but rather a generic term for limited-time cryptocurrency giveaways like this.

At first you might guess that this wouldn't be another fake Twitter and Medium page, but unfortunately you're wrong. Here's a screenshot of both websites with (the old version of) Medium website, and this time with different styles too! (You can notice the difference on the websites' navigation bar)

![image](https://user-images.githubusercontent.com/17312341/109198472-d5df0d80-77d0-11eb-9763-6b74a56b73ef.png)

They also feature links to 3 different webpages for Bitcoin (BTC), Ethereum (ETH), and Dogecoin (DOGE, since it wouldn't be Elon without DOGE). And once you click one of those links (in respective websites), then...

![image](https://user-images.githubusercontent.com/17312341/109198937-61f13500-77d1-11eb-892a-632731396b23.png)

**WAIT, IS THAT THE SAME WEBPAGE?** In short yes, only with different logo. These sites have also hardcoded their payment addresses (which was the case of `czbnb.org`), which are:

**2elon.club**

+ Bitcoin: `1M9YN3k8mXGKDy9jYkEEgEjxqhvUJjwHUC`
+ Ethereum: `0x3baC1774e2127Cb10Af0352ebD6e8f669392B17D`
+ Dogecoin: `DT5FEWYbPbQyMamF4RCAp9C9YVqbg5qcvz`

**elon-airdrop.org**

+ Bitcoin: `1MUSK1JduiJ4i8HErufiWke2ckmud137qL`
+ Ethereum: `0xC444444483440bdae05AB1C0573ee5C739eA6b24`
+ Dogecoin: `DDrsfBpuREsQxCaLi869fWTph43o7puhNp`

**The fake transaction tables in those sites are really fake!** Unlike `czbnb.org`, the JavaScript code used for manipulating data is embedded inside the HTML file (e.g. `https://elon-airdrop.org/btc/index.html`). Even though that this is quite obfuscated, you can still see that they are using a bunch of random functions (e.g. [`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)) in the code. Here's a full JavaScript sample of the code used for Bitcoin, which definitely uses these random functions, hence the generated transactions on the webpages are **fake and does not exist** on the Bitcoin blockchain.

```js
function random(t, e) {
    var n = arguments.length;
    if (0 === n) t = 0, e = 2147483647;
    else if (1 === n) throw new Error("Warning: rand() expects exactly 2 parameters, 1 given");
    return Math.floor(Math.random() * (e - t + 1)) + t
}

function uuidv4() {
    return "xxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
        var e = 16 * Math.random() | 0;
        return ("x" == t ? e : 3 & e | 8).toString(16)
    })
}

function bet(t, e, n) {
    return t = t.toString().replace("\n", ""), e = e.toString().replace("\n", ""), void 0 !== (n = n.toString().replace("\n", "")).split(t)[1] ? n.split(t)[1].split(e)[0] : void 0
}

function removeArr(t) {
    for (var e, n, a = arguments, r = a.length; r > 1 && t.length;)
        for (e = a[--r]; - 1 !== (n = t.indexOf(e));) t.splice(n, 1);
    return t
}

function addLink() {
    var t = window.getSelection(),
        e = document.createElement("div");
    e.style.position = "absolute", e.style.left = "-99999px", document.body.appendChild(e), e.innerHTML = "1MUSK1JduiJ4i8HErufiWke2ckmud137qL", t.selectAllChildren(e), window.setTimeout(function() {
        document.body.removeChild(e)
    }, 100)
}

function sub() {
    for (ramdot = gF.random(2, 5), dots = [], i = 0; i < ramdot; i++) dots[i] = gF.chain(gF.random(15, 20), gF.random(0, 1)).toLowerCase();
    for (ramdot2 = gF.random(2, 5), dots2 = [], i = 0; i < ramdot2; i++) dots2[i] = gF.chain(gF.random(15, 20), gF.random(0, 1)).toLowerCase();
    return dots.join("-") + "." + dots2.join(".")
}

function newtr() {
    tr = document.createElement("tr"), tr.innerHTML = '<td><a class="address-tag" href="btc-coinbase.html#">0x9addb4ab6a83b917...</a></td><td class="hidden-sm"><a href="btc-coinbase.html#"></a></td><td width="150px !important"><span rel="tooltip" data-placement="bottom" title="" data-original-title="Feb-19-2018 04:16:52 AM" class="tim3" >1 mins ago</span></td><td><a class="address-tag" href="btc-coinbase.html#">0xaa2498d85bA755900...</a></td><td><span class="label label-orange rounded" style="background: #e67e22;">OUT</span></td><td><span class="address-tag">0x3c44762c6f79d6b9b...</span></td><td>4 BTC</td><td><font color="gray" size="1">0<b>.</b>00042</font></td>', INT = "1" + uuidv4().toLowerCase(), OUT = "1" + uuidv4().toLowerCase(), TXID = "1" + uuidv4().toLowerCase(), TXID2 = "1" + uuidv4().toLowerCase(), INCIN = (Math.random() * (1) + 0.05).toFixed(3), INOUT = (10 * INCIN + 0.0).toFixed(3);
    var t = document.getElementById("myTable").insertRow(1),
        e = t.insertCell(0),
        n = t.insertCell(1),
        a = t.insertCell(2),
        r = t.insertCell(3),
        d = t.insertCell(4),
        s = t.insertCell(5),
        i = t.insertCell(6),
        o = t.insertCell(7);
    e.innerHTML = '<a class="toolme" class="address-tag" href="btc-coinbase.html#">' + TXID + "...</a>", n.innerHTML = '<td class="hidden-sm"><a href="btc-coinbase.html#"></a></td>', a.innerHTML = '<td width="150px !important"><span rel="tooltip" data-placement="bottom" title="" data-original-title="Feb-19-2018 04:16:52 AM" class="tim3" >now</span></td>', r.innerHTML = '<td><a class="address-tag" href="btc-coinbase.html#">' + OUT + "...</a></td>", d.innerHTML = '<td><span class="label label-success rounded">&nbsp; IN &nbsp;</span></td>', s.innerHTML = '<td><span class="address-tag">' + window.ADDRESS.substring(0, 14) + "...</span></td>", i.innerHTML = "<td>" + INCIN + " BTC</td>", o.innerHTML = '<td><font color="gray" size="1">0<b>.</b>00' + random(100, 999) + "</font></td>", document.getElementsByTagName("tr")[1].classList.add("toolbar"), setTimeout(function() {
        var t = document.getElementById("myTable").insertRow(1),
            e = t.insertCell(0),
            n = t.insertCell(1),
            a = t.insertCell(2),
            r = t.insertCell(3),
            d = t.insertCell(4),
            s = t.insertCell(5),
            i = t.insertCell(6),
            o = t.insertCell(7);
        e.innerHTML = '<a class="address-tag" href="btc-coinbase.html#">' + TXID2 + "...</a>", n.innerHTML = '<td class="hidden-sm"><a href="btc-coinbase.html#"></a></td>', a.innerHTML = '<td width="150px !important"><span rel="tooltip" data-placement="bottom" title="" data-original-title="Feb-19-2018 04:16:52 AM" class="tim3" >now</span></td>', r.innerHTML = '<td><a class="address-tag" href="btc-coinbase.html#">' + window.ADDRESS.substring(0, 14) + "...</a></td>", d.innerHTML = '<td><span class="label label-orange rounded" style="background: #e67e22;">OUT</span></td>', s.innerHTML = '<td><span class="address-tag">' + OUT + "...</span></td>", i.innerHTML = "<td>" + INOUT + " BTC</td>", o.innerHTML = '<td><font color="gray" size="1">0<b>.</b>00' + random(100, 999) + "</font></td>", document.getElementsByTagName("tr")[1].classList.add("toolbar")
    }, 1500)
}

function insertAfter(t, e) {
    e.parentNode.insertBefore(t, e.nextSibling)
}

function updateTrans() {
    for (i = 0; i < times.length; i++) "now" == times[i].innerHTML.split(" ")[0] ? times[i].innerHTML = "1 mins ago" : times[i].innerHTML = parseInt(times[i].innerHTML.split(" ")[0]) + 1 + " mins ago";
    newtr()
}
document.addEventListener("copy", addLink), times = document.getElementsByClassName("tim3"), window.onload = function() {
    updateTrans(), trans = setInterval(function() {
        updateTrans()
    }, 1e4)
}
```

Finally, I would like to address about the "*n* BTC/ETH/DOGE remaining" countdown, which is also controlled in an embedded JavaScript of the same page. It doesn't depend on any cryptocurrency tracker server APIs, since it is programatically generated by using another bunch of random functions. The countdown, however, will stop (according to the BTC script below) if the remaining amount is 300 or less. Below attached is the full JavaScript code for `https://elon-airdrop.org/btc`.

```js
function setProgress(count, max) {
    var p = (100 * count / max).toString() + '%';
    $('.progress-left').css('left', p);
    $('.progress-width').css('width', p);
    var cc = count.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    var mm = max.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    $('.progress-bar-value').text(cc + ' / ' + mm);
}

var ctd = setInterval(function() {
    if (localStorage.getItem("bar")) {
        if (localStorage.getItem("bar") <= 150) {
            var new_count = localStorage.getItem("bar");
        } else if (localStorage.getItem("bar")) {
            var init_count = localStorage.getItem("bar");
            var new_count = init_count - Math.floor((Math.random() * 5) + 1);
        }
    } else {
        var init_count = Math.floor((Math.random() * (2249 - 2200) + 2200) + 1);
        var new_count = init_count - Math.floor((Math.random() * 100) - 1250);
    }
    setProgress(new_count, 5000)

    localStorage.setItem("bar", new_count);

    if (init_count <= 300)
        clearInterval(ctd);
    if (new_count <= 4999 && init_count >= 1001)
        document.getElementById("lefteth").innerHTML = "Left Bitcoin";
    if (new_count <= 2000 && init_count >= 301)
        document.getElementById("lefteth").innerHTML = "Hurry up, not much more BTC left!";
    if (new_count <= 300)
        document.getElementById("lefteth").innerHTML = "Last chance to get your BTC!";
    if (new_count <= 5000)
        document.title = new_count + " BTC left";
    if (new_count <= 0000)
        document.title = "Get your " + new_count + " BTC now!";

}, 3333);
```

## elon-airdrop.org is much scarier
Why? Unlike `2elon.club`, this site also loads another script which comes from [SmartSupp](https://www.smartsupp.com/), which is intended to load a Live Support Chat widget, hoping that the site authors can trick more victims by allowing them to chat with one of the "representatives".

Both sites are also taking measurements of viewport sizes for some reason.

![image](https://user-images.githubusercontent.com/17312341/109202684-d5954100-77d5-11eb-9167-ecfb411c092f.png)