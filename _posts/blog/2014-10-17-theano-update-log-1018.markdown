---
author: xljroy
comments: true
date: 2014-10-17 17:52:07+00:00
layout: post
slug: theano-update-log-1018
title: Theano Update Log 1018
wordpress_id: 493
categories:
- blog
- Theano
tags:
- Theano
---

**Theano Update Log 1018**





Recently this time, Arnaud is working to make Theano able to use multiple GPUs in 1 Theano function.





The main task I did is implement a theano_funtion.free() method to free the temp memory





During this part, the most time consuming part is to know the internals, how a theano function works, and how the variables changes.





The main idea is simple. Check when allow_gc is False, loop over the storage_map set the value of TensorVariable to None. On this step, the storage_map is a dict, the keys are node, value are list of 1 element, what we do is to set this element to None.





Then there for the node in apply_nodes, there would be some node whose op has inner functions, we also need to run free() on there inner functions.





Thanks to Fred, we found the problem that CVM now has now attribute "allow_gc", and he fixed this. Now we can set allow_gc in CVM.





For the test file, the theano uses nosetests, nosetests is really a good test tools. You can easily choose only run one test a time, using "nosetests file:module.function" to specific one test function.
