---
author: xljroy
comments: true
date: 2014-05-31 04:24:48+00:00
layout: post
slug: part1-phrase2-algo-gsoc2014-theano
title: 'Part1 Phrase2 Algo #GSoC2014-Theano'
wordpress_id: 405
categories:
- Theano
tags:
- GSoC2014/Python
---

* * *




Now the second week have come to the end, the this weekend I mainly complete the previous phrase 1 task, and start phrase 2 task.




First, I add a memory profiling test to Theano, in order to check is the memory profiling works well. For this step, it checked out some inside error, like I assigned copy() method to node_executed_order whose type is list, I fixed this already. But there still remains one which is the node_executed_order is node the same length as the node_cleared_order. So when we call node_cleared_order(index(node)) there raises an error for list out of index. I will find a way to fix this error. Comparing to the old order and old storage, the old storage is generate with and by the old order index, so maybe we should modify the way how we create the new node_cleared_order.




On the other hand, I wrote the backtrack algorithm in order to find out the minimum memory usage node order. I have finished the pseudo code for the algorithm.




    
    <code>mem_dict = []
    current = 0
    
    def count_min_memory_peak(node_list, b = False):
        global mem_dict, current
        '''
        enumerate all valid order
        compute the peak of all order and keep the order with the minimum peak.
        return an order with minimum memory usage
    
        :param node_list: A list of node 
    
        regard the node has an attribute called mem with is its memory usage.
        '''
    
        for i in range(len(node_list)):
            v = node_list[i:i+1] 
            if len(node_list) == 1:
                yield v
                current += v[0]
                b = True
            else:
                b = False
                rest = node_list[ :i] + node_list[i+1: ]
                for p in count_min_memory_peak(rest):
                    yield v+p
                    current += v[0]
        if b:
            mem_dict.append(current)
            current = 0
    
    for i in count_min_memory_peak([1, 2, 3]):
        print i
    
    print mem_dict
    </code>




For now it can enumerate all order, can calculate their memory usage status then store in a list, with the same index in the generator. As it just simulate the condition, so I use the value of node to take place of the memory usage to see if it works well.




Because I spent some time on test_profiling.py, so I should hurry up to finish phrase 2 task asap, as I mentioned in my proposal, its soft deadline is 2rd,June, Also, there are some bug waited to be fixed.





##### FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFight, Roooooooooooooooooooooooy
