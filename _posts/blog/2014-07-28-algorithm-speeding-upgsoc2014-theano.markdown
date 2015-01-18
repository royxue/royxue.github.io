---
author: xljroy
comments: true
date: 2014-07-28 16:19:50+00:00
layout: post
slug: algorithm-speeding-upgsoc2014-theano
title: Algorithm Speeding Up#GSoC2014-Theano
wordpress_id: 449
categories:
- Theano
tags:
- GSoC2014/Python
---

## 





* * *




Recently what I done in mainly speeding up the algorithm of calculating the memory. At first I feel it is very hard for me, cause I didnt learnt much about Algorithm before, sometimes I will find it's difficult for me to think about a faster algo.





##### problem




About generating valid order to count the min peak peak, I use a python generator, is very fast. But the problem is that there are too many node, like in the test file. It has 11 nodes, which means there should be 11! total number of order, it's a huge number, to generator the valid order, the code need to do maybe million times check_node_state() function, because each time when we need to check node in this order, if it is possible to "execute". After this process we will get about 20k orders, then we have to count memory of each order and find the minimum one. This is the main part which cost lots of running time.





##### Solution




The solution we uses has 2 parts. One is before generator, we create a set including Apply nodes that can be executed. By this step, we will reduce the check_node_state() method called times, and also reduce some generator loops.




On the other hand, I wrote the new simple count_min_memory() method, cause the previous count memory method do lots of unnecessary works under this situation. Actually the first idea of solving this is to count the memory during the loop. But after thinking this way in details, I found it's not a good idea, cause it will cost much more time and also it's difficult to generate post_thunk_of_old_storage for each node.





##### Result




using command python -m cProfile -s cumulative test_profiling.py




**Before speed** 2262689 function calls (2018667 primitive calls) in 3.566 seconds




2262689 function calls (2018667 primitive calls) in 3.566 seconds




    
    <code>Ordered by: cumulative time
    
    ncalls  tottime  percall  cumtime  percall filename:lineno(function)
        1    0.001    0.001    3.579    3.579 test_profiling.py:4(<module>)
        1    0.000    0.000    2.993    2.993 test_profiling.py:13(test_profiling)
        1    0.000    0.000    2.720    2.720 profiling.py:1002(summary)
        1    0.000    0.000    2.717    2.717 profiling.py:602(summary_memory)
        1    0.786    0.786    2.716    2.716 profiling.py:696(count_minimum_peak)
    19802    0.690    0.000    1.244    0.000 profiling.py:641(count_running_memory)
        1    0.002    0.002    0.488    0.488 __init__.py:23(<module>)
       19    0.024    0.001    0.465    0.024 __init__.py:1(<module>)
    261450/19801    0.305    0.000    0.432    0.000 profiling.py:782(min_memory_generator)
        1    0.001    0.001    0.301    0.301 __init__.py:29(<module>)
        1    0.001    0.001    0.300    0.300 scan_opt.py:3(<module>)
        1    0.000    0.000    0.255    0.255 function.py:15(function)
        1    0.000    0.000    0.255    0.255 pfunc.py:336(pfunc)
        1    0.000    0.000    0.254    0.254 function_module.py:1262(orig_function)
    439476    0.249    0.000    0.249    0.000 {getattr}
    19802    0.193    0.000    0.223    0.000 link.py:504(gc_helper)
        1    0.002    0.002    0.219    0.219 basic.py:1(<module>)
    178301    0.215    0.000    0.215    0.000 {method 'index' of 'list' objects}
        1    0.001    0.001    0.212    0.212 elemwise.py:1(<module>)
        ......
    </code>




**After speed up**




    
    <code>ncalls  tottime  percall  cumtime  percall filename:lineno(function)
        1    0.001    0.001    3.272    3.272 test_profiling.py:4(<module>)
        1    0.000    0.000    2.791    2.791 test_profiling.py:13(test_profiling)
        1    0.000    0.000    2.514    2.514 profiling.py:1015(summary)
        1    0.000    0.000    2.511    2.511 profiling.py:602(summary_memory)
        1    0.749    0.749    2.509    2.509 profiling.py:696(count_minimum_peak)
    19800    0.575    0.000    0.890    0.000 profiling.py:809(count_min_memory)
    261450/19801    0.290    0.000    0.397    0.000 profiling.py:785(min_memory_generator)
       19    0.018    0.001    0.396    0.021 __init__.py:1(<module>)
        1    0.002    0.002    0.395    0.399 __init__.py:23(<module>)
        1    0.001    0.001    0.283    0.283 __init__.py:29(<module>)
        1    0.001    0.001    0.282    0.282 scan_opt.py:3(<module>)
        1    0.000    0.000    0.259    0.259 function.py:15(function)
        1    0.000    0.000    0.259    0.259 pfunc.py:336(pfunc)
        1    0.000    0.000    0.258    0.258 function_module.py:1262(orig_function)
     439476    0.238    0.000    0.238    0.000 {getattr}
     19802    0.183    0.000    0.212    0.000 link.py:504(gc_helper)
        1    0.002    0.002    0.211    0.211 basic.py:1(<module>)
    178301    0.207    0.000    0.207    0.000 {method 'index' of 'list' objects}
    ......
    </code>




We can see the cost time reduced.




But when I tried with machine learning samples, like logistic_sgd.py the result seems not very well, it cost really lots of time. So i guess I still need to think about other ideas or design count min peak as a parameter of the function.




The problem is like for N apply node in our function, we will have total N! orders, and find valid order from them. When N is big, the N! is really huge, so the valid order number is also very big. If we have too many order, it cost too much time to count min memory. So maybe remove similar order is a solution to do this.
