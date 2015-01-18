---
author: xljroy
comments: true
date: 2014-10-31 03:24:34+00:00
layout: post
slug: theano-update-log-2226
title: 'Theano Update Log #2226'
wordpress_id: 508
categories:
- blog
- Theano
tags:
- Theano
---

**Theano Update Log #2226**





This week I mainly implement a new faster algorithm for counting the min peak.





When the node number increase, the recursive way also increases a lot, even we have already done the executable_set part. So what we need to do is to find a more efficient way to reduce the back track times.





This week what we do is using DONE_SET. DONE_SET: a set store executed nodes DONE_DICT: store the DONE_SET and its memory usage





The mainly idea is that when we execute a node, we add it to the DONE_SET, then we check if the DONE_SET is in the DONE_DICT or not. Attentions: here the set obejct is not hashable, we cannot use it as dict's key, so we use frozenset() to transfer the set to frozenset as the frozenset is hashable and can be used as a key.





If not in DONE_DICT, update the DONE_DICT. If yes, continue to check if the previous DONE_SET memory usage is bigger than the current memory usage. True, then we update the memory usage in DONE_DICT to current memory usage. False, remove the node from DONE_SET and stop this iteration, move to next node in executable_node.





The algo is definitely faster, but now there remains another question, I ran the logistic_cg for several times, and I got different results. This means that during the computing process we miss some possibility and the real min peak.





The next step is to think about how to get the accurate result.









# Update in 1st Nov.





Previous problem solved. By using the max_mem_count to take place of mem_count.





Also using a better if in new version, clean up duplicated code, make it more beautiful :)
