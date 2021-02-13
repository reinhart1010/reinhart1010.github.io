---
layout: post
title: "Apparently Yes! You can install OpenJDK (Java) JRE and YaCy on OpenWrt"
categories: [dev.to]
tags: [en-us, raspberrypi, openwrt, showdev, todayilearned]
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/vfvwx66omp58xws95y3q.png
as_seen_on:
  - site_type: "dev.to"
    url: "https://dev.to/reinhart1010/apparently-yes-you-can-install-openjdk-java-jre-and-yacy-on-openwrt-1e33"
---

> **IMPORTANT NOTE:** This guide is meant for OpenWrt-installed devices with really large memory and storage space, which in this case a [Raspberry Pi 3 (Model B)](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) with 1GB of RAM and 32GB of storage (loaded on a MicroSD Card). **Most routers do not support those gigantic space, so they might not be capable on running YaCy at all.**

YaCy (https://yacy.net) is a distributed search engine which can be installed on any devices running Java Runtime Environment (JRE) 8. YaCy itself can also be configured to be a private search engine - search your internal files and websites on the intranet.

It would be interesting to have your own SBC (such as a Raspberry Pi and Orange Pi) to run YaCy on OpenWrt, so you'll have your own private network and search engine at the same time, without needing to install YaCy on another device!

During the last few days I am trying to make this concept to work as expected. And as expected, it ~~is possible~~ can run JRE and YaCy on OpenWrt, too!

## First thing first: Expand the root filesystem using Extroot!
The default OpenWrt image for Raspberry Pi and similar devices only uses 100MB as their main `rootfs` partition, which is used to load all the programs and configuration files used for OpenWrt. In this case I have a total of 32GB of storage, and the best way to "expand" the storage is by using Extroot, which is explained on https://openwrt.org/docs/guide-user/additional-software/extroot_configuration :

1. Create a new ext4 partition on the MicroSD card's unused space.
2. Perform extroot to use the new partition for expansion, for **Devices ≥ 8 MiB flash**. **The new partition may likely to reside on `/dev/mmcblk0p3` (or others) instead of `/dev/sda`, so please check it first using the `block info` command.**
3. Restart device to apply changes.

## Installing Java JRE on OpenWrt
Installing the JRE on OpenWrt is unlike other major Linux distributions. OpenJDK is **not** available on OpenWrt default repositories, so you can't simply install it using the `opkg` package manager.

Many Linux distributions including Debian, Ubuntu, and Red Hat commonly ship JRE packaged by OpenJDK, an open-source implementation of Java Standard Edition (Java SE) which was built and depends on `glibc` (GNU `libc`). OpenWrt, on the other hand, uses `musl-libc` instead since it's smaller than `glibc` so they can fit into routers with limited storage and memory.

Fortunately, the folks at Alpine Linux provides a copy of OpenJDK JRE which depends on `musl-libc` instead of `glibc` on their package repository. I decided to modify the install script from [this GitHub Gist](https://gist.github.com/simonswine/64773a80e748f36615e3251234f29d1d) to download the binaries for my Raspberry Pi 3 (OpenJDK JRE 8 using `aarch64` instead of regular `armv7`, since the Pi itself is capable for 64-bit and JRE 8 is required for YaCy to run).

```
#!/bin/sh

set -o errexit
set -o nounset
set -o pipefail
set -x

REVISION=8.252.09-r0
URL=http://dl-cdn.alpinelinux.org/alpine/v3.10/community/aarch64/
PACKAGES="openjdk8 openjdk8-jre openjdk8-jre-lib openjdk8-jre-base"

old_pwd=$(pwd)
tmp_dir=$(mktemp -d -t openjdk8-XXXXXXXXXX)
trap "rm -rf $tmp_dir" EXIT

cd "${tmp_dir}"

for package in $PACKAGES; do
    curl -LO "${URL}/${package}-${REVISION}.apk"
done

for package in $PACKAGES; do
    tar xzf "${package}-${REVISION}.apk"
done


cd "${old_pwd}"

mv $tmp_dir/usr/lib/jvm/java-1.8-openjdk /overlay/opt/java-1.8-openjdk
```

The above script requires a special program named `curl`, which is not installed by default in OpenWrt. Additionally, OpenJDK also requires `libstdcpp6` and `libnss`

```sh
# Don't forget to run "opkg update" first!
opkg install curl libstdcpp6 libnss
```

Once these dependencies are installed, you can run the previous script to install OpenJDK under `/overlay/opt/java-1.8-openjdk`.

Lastly, you'll need to update the `$PATH` environment variable to let OpenWrt to find the JRE binaries. Open the `/etc/profile` file, then modify

```
export PATH="/usr/sbin:/usr/bin:/sbin:/bin"
```

to

```
export PATH="/usr/sbin:/usr/bin:/sbin:/bin:/overlay/opt/java-1.8-openjdk/bin"
```

then save the file and apply the configuration using `source /etc/profile`.

## Installing YaCy
Once you have installed JRE 8 on OpenWrt, you can simply run YaCy on it, too!

At the time of this writing (February 14th, 2021), however, there is a then-unfixed bug on the latest YaCy release (`yacy_v1.924_20201214_10042`) where users cannot log into the admin interface (see [this thread](https://searchlab.eu/t/new-yacy-install-will-not-accept-new-admin-password/595)), hence I'll need to compile YaCy from their [main repository](https://github.com/yacy/yacy_search_server) by myself.

I have decided to put YaCy under the `/overlay/opt` directory as well. The YaCy scripts require another package named `getopt`, which is also installable using `opkg`:

```
opkg install getopt
```
Once I have extracted the YaCy package and installed their dependencies, I can simply run it using the `startYACY.sh` script file, which in this case located on

```
/overlay/opt/yacy/startYACY.sh
```

Once it runs for the first time, you will need to set the admin pasword by running

```
/overlay/opt/yacy/bin/passwd.sh
```

And that's it! YaCy is now accessible on `<your OpenWrt IP address>:8090`. Keep in mind that you can still access LuCi the original way, as the YaCy server does not take the regular HTTP ports (80, 443) unless otherwise specified.