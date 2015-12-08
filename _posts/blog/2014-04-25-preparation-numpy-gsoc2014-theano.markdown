---
author: xljroy
comments: true
date: 2014-04-25 08:01:49+00:00
layout: post
slug: preparation-numpy-gsoc2014-theano
title: 'Preparation Numpy #GSoC2014-Theano'
wordpress_id: 305
categories:
- Theano
- Dev
tags:
- GSoC2014/Python
---

## Preparation Numpy #GSoC2014-Theano


It's glad to be accepted by Theano in GSoC 2014. My main task is to lower memory usage.

I've already introduce myself in theano-dev community and told my mentor I would publish my dev blog here at royxue.me during GSoC2014.On the the hand, I have already uploaded my Foreign Certification Form to melange, and register my Payoneer account. So now I am wating for my fun package from Google.

My first step is to learn more about Numpy, I used it in MCM calculating before, but I just learn to use the basic, so this time I wanna know more about that.

the following note based on


    <code>import numpy as np
    </code>






  1. np.array() and np.asarray() differences is about "copy" parameter


    <code> def asarray(a, dtype=None, order=None):
         return array(a, dtype, copy=False, order=order)
    </code>


and the typr of np.array is np.ndarray, which means n-dimensional array


  2. basic infos about dtype, and some creation function like ones, zeros, linsapce (empty only give memory but not value)and so on.


  3. use dtype to make c-like struct data structure


  4. numpy will store data as C as default


  5. for memory data structure there are some patameters,eg:


    <code> n.flags
     # C_CONTIGUOUS : True       
     # F_CONTIGUOUS : False  
     # OWNDATA : True            
     # WRITEABLE : True      
     # ALIGNED : True
     # UPDATEIFCOPY : False
    </code>





  6. ufunc basic calculation like add,substract


  7. numpy calculating(sin() function) speed compared with math(python), that numpy is about 10 more times quicker than math, cause of its loop based on C.


  8. broadcast calculating , numpy uses ogrid() to perform fast broadcast


  9. memmap() and memmap.flush(): memmap are useful for reading and/or modifying small segments of a large file with regular layout, without reading the entire file into memory.


cause my task is lower the memory usage, and also about ndarray in theano calculating. So I see maybe learn more about the memmap will be important when solving my tasks. I'll see if there is similar mechanism in theano, or it's maybe an break point.
