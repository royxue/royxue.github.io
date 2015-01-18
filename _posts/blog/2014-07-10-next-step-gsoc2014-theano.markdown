---
author: xljroy
comments: true
date: 2014-07-10 19:16:50+00:00
layout: post
slug: next-step-gsoc2014-theano
title: 'Next Step #GSoC2014-Theano'
wordpress_id: 434
categories:
- Theano
tags:
- GSoC2014/Python
---

## Next Step





* * *




I just finished my final exams. So it is time to continue my previous tasks. (actually when i post this, Ive already started)




Fred is on his vacation, so these days I will contact Arnaund for help. By this, I start to know why GSoC requires more than one mentor, not only for one's temporary absence, but also by different mentors, they can provide advices from different aspects which will make me learn more and make the code better.




Now I had completed some updates for my previous PR, mainly on simplify it structure and do much decoration works. Just make it better way. It's waiting to be merged now: [Compute minimum peak #1934](https://github.com/Theano/Theano/pull/1934)




The following is my next part description(thx Fred for writing this):






* * *








<blockquote>

> 
> This is for the GSoC work by Roy. Roy, wait until you finish the current step to check this(or at list fixed the important part), as it will discract you. But I would appreciate feedback now from other people:
> 
> 

> 
> For this, I would start by working only with the "vm" linker, when there is no lazy variable. I would also restrict at first with ndarray of 0 dimensions. That push to later the interaction with the shapefeature. That would simplify the making of the base work. What need to be done, is take the execution order of nodes currently use and keep that order. But change how we build the storage_map and add extra dependency check in the garbage collection. I should split this in those step:
> 
> 

> 
> 1) use the linker vm(not the default one cvm) with graph that don't have lazy op and with allow_gc=False. In that case, modify the method VM_Linker.make_all() (file gof/vm.py) to change the storage_map that get created to have those properties:
> 
> 


> 
> 
	
>   * The old storage_map have a different storage for each variable in the graph. This need to change.
> 
	
>   * You need to have some variable share the same storage. But those variable need to be carefully selected. For this: for node in nodes_execution_order: check if current node inputs variable that would be gc if the gc was enabled. for those variables for now keep only those that have ndim ==0 for those variables, check in future nodes to execute, those that have an output with ndim ==0. Check that you didn't already changed the storage_map of that output variable. For that pair of (input variable of the current node to be gc normally, variable that will be outputed later), make sure that the storage_map point to the same place for both variable.
> 


> 
> The fact that the output variable is available when a node get executed, will allow that node to reuse the existing memory for its output, instead of allocating new memory. This will lower the memory used when allow_gc=False, as the memory used won't be the sum of all the intermediate memory as it is now
> 
> 

> 
> 1.2) Only after 1.1) is working, generalyze it to make it work when allow_gc=True. For this, you need to modify the condition when Theano check what to gc after a node get executed, to only gc it it no other new nodes will use that memory in the future. This will need changed in the varible post_thunk_clear passed to LoopGC.**init**, to correctly delay the gc of the variable you changed in 1.1.
> 
> 

> 
> There is other stuff to do on this, but I think we can delay the detailed plan for them.
> 
> 
</blockquote>





* * *






I will start to look for informations and think about the way how to implement my next step work now.
