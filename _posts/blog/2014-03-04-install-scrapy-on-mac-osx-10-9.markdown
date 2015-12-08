---
author: xljroy
comments: true
date: 2014-03-04 03:13:34+00:00
layout: post
slug: install-scrapy-on-mac-osx-10-9
title: Install Scrapy On Mac OSX 10.9
wordpress_id: 251
categories:
- Scrapy
- Dev
---

Scrapy is a fast high-level screen scraping and web crawling framework, used to crawl websites and extract structured data from their pages. It can be used for a wide range of purposes, from data mining to monitoring and automated testing.

First, install or upgrade pip

Download [get-pip.py](https://raw.github.com/pypa/pip/master/contrib/get-pip.py)

then


    python get-pip.py


Wait until pip is installed then


    sudo pip install scrapy


if this error occurs


    #include "libxml/xmlversion.h"

             ^

    1 error generated.

    error: command 'cc' failed with exit status 1


you have to install latest xcode command line by code below


    xcode-select --install


For details of this error you can check

[https://github.com/scrapy/scrapy/issues/371 ](https://github.com/scrapy/scrapy/issues/371)
