---
author: xljroy
comments: true
date: 2014-06-26 10:42:21+00:00
layout: post
slug: midterm-summary
title: Midterm Summary#GSoC2014-Theano
wordpress_id: 420
categories:
- Theano
- Dev
tags:
- GSoC2014/Python
---

## Midterm Summary





* * *




Summary of GSoC 2014 Python Software Foundation Theano Community




Few hours ago, I had submitted the midterm evaluation of GSoC 2014 on Melange.





#### From Start




For applying the GSoC, I submitted my first PR to Theano as add cumprod/cumsum to _tensor_variable [Add a_tensor_variable.cumprod/cumsum() interface #1769](https://github.com/Theano/Theano/pull/1769) Merged




Then when I received the email from Google for I was chosen to be one of GSoC 2014, it was really a luck day. Then I spend my time in reading some Theano/Numpy document, chatting with my mentors, and bonding with the community.




On May 19th, exactly the day after my birthday (May 18th), I started coding.





#### Till Now




As plans in the proposal, till midterm it would be the Task Step 1 "Lower Memory Usage". These step is divided into 2 phrase.




For phrase 1, the aim is to extend the Theano memory profiler to print the max memory usage in the current implementation. This is needed for comparison.




My PR for this phrase is [Add a list store executed node order #1854](https://github.com/Theano/Theano/pull/1854) Merged




In this part, at first I added node_executed_order and node_cleared_order in class Stack to store the node executed and cleared order which theano uses now. Then I rewrote the memory counting as a new method, so we can just call it twice to calculate memory usage for the previous and current order. Then print the statstics with "current(previous)" format. Then I wrote test file for this part, Fred and I had dicussions about the details of my code, like how to make it better, or how to make it work better. Though I could describe this part of work easily, I can still remember how I was feeling when do this at first, kind of no ideas on how to start, and made some mistakes.




For phrase 2, the aim is to implement a function that find the nodes execution order that minimize the memory usage during compilation. This will also be done in the Theano profiler. So all shapes information are known. This can be done by checking all valid order of execution and keeping the one that have the lower max memory usage.




My PR for this phrase is [Compute minimum peak #1934](https://github.com/Theano/Theano/pull/1934) Almost finished




In thies part, I started from writing pseudo code at first, for dicussing with Fred, he said that I could use backtrack algorithm, the first thing occurs in my mind is the magic python generator I used before. The goal of the algorthm is to generate all valid order, so there has to a method to check if node is valid. The way I used here is from vm.py, which use the node.inputs and compute_map to check whether the node has its inputs variables.Then I applied the pseudo code into theano, and modified some detailed places to make it can work. The most confused problem is that global variables in def, however Fred helped solve it finally. For test file of this part, because we will print the minimum peak at profile_memory, so it can use the same one test file with phrase 1.




This PR is nearly finished, there are some details need to check out and modify it to make this method work better.





#### Future Plan




For next step, I would do "Add a compile argument that use the function above to order the function for such lower memory usage." I think this wouldn't be hard.




After this, I would have two exams at July 1st, 2nd, I may restart my GSoC work from July 3rd.




From that time I would start do the step of "Reduce the number of allocation/reuse allocation of ndarray". It also includes 2 phrases:







  1. Keep the current order of execution that lower the memory usage. Then modify the storage_map to have multiple node share the same output storage space. Start with only 0d ndarray. That way, we are sure it have the same size.


  2. Extend it to nd array by checking node that have the same shape with the information that we have in the shape feature that keep track of shape information in the graph.




I would first read some documents about this aspect, read related part of code, come up with some ideas, then have a dicussion with my mentors about the my ideas and the solution..





#### Other Aspects




Fred is really a nice mentor, he is very patient, and willing to help me. I just leant a lot from him, if I can meet him, I would like to give him a big hug to appreciate him :), also thanks for James and Arnaund for answering my questions immediately with great help. I think I had made up my mind to continue contributing to Theano after GSoC.




I am so lucky to be chosen by the GSoC ten years Reunion, but whether I can go depends on if I can earn my flight tickets before its opening.




It's really nice to join the Chinese GSoC group, meet some fantastic guys, and we will host an online sharing in recent days, the topic is introducing our GSoC projects.
