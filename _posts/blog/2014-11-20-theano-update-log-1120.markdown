---
author: xljroy
comments: true
date: 2014-11-20 16:05:26+00:00
layout: post
slug: theano-update-log-1120
title: Theano Update log 1120
wordpress_id: 522
categories:
- blog
- Theano
tags:
- Theano
---

The if/else crash in memory profiler is fixed.





Another part is add CPU/GPU memory usage calculating support. In previous version, the memory usage is only sum value, in order to make more information avaiable, so we add CPU/GPU separate memory usage information support. This part is quite simple, when we are calculating each variable, check its type first, if it is CudaNdarray or not.





Also, for the memory usage information, the CPU and GPU will share a list like [CPU, GPU], choosing this way to store the value is to make it flexible when we implement multi GPU later.
