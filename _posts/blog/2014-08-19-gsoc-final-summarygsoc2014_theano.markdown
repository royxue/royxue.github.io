---
author: xljroy
comments: true
date: 2014-08-19 03:27:05+00:00
layout: post
slug: gsoc-final-summarygsoc2014_theano
title: GSoC Final Summary#GSoC2014_Theano
wordpress_id: 459
categories:
- blog
- Theano
tags:
- GSoC2014/Python
---



The final pencil down day finally comes here. The previous three months is like an amazing journey for me, this is the first time I can do works for open source community. Theano community is really great, my mentors: Fred, James, Arnaud, they gave me great help teached me useful knowledge. It's a precious oppotunity for me to work with them, and learn from them.

For the GSoC part, I finished the Lower the max memory usage part. There are several parts of it. Firstly what I do is to create 2 new variables tracking the current node executed order and cleared order. Because previously the order we used in memory profiling is not used now. After this part, I wrote the memory counting method, to make it working for 2 order(I kept the previous order and its results will output in brackets following the current order results). Also, I created the test_profiling file, to make it work for unit test with this part. Then, what I do is to write an algorithm to find out the min peak of all the order. For example, in our simple test file, there are 11 node, the total order number is 11!, I have to find the valid order and count its min peak memory. The first version of algorithm tooks 7hrs to finish the work, but now it takes almost 2-3 mins. During the process of finding the best algorithm, we found a fault in previous memory counting method. Because during node execution, their will generate some view variables, we cannot avoid these in memory counting. So we came up with a new algorithm to fix this fault.

Futhermore, after GSoC, I decide to continue as a contributer of Theano, I will finish the "reduce the number of allocation/reuse allocation of ndarray" part fisrt, and then do other works for Theano.

I think after GSoC, my python coding skills improved a lot. There are lots of things to learn, I still have a long way to go.

I would especially appreciate to Fred, I had a great time learning from him, and told me lots of information about further study in his university.

Also, thanks to Google, thanks for providing this amazing project to open a "open source" door for me. I really enjoyed it this summer.
