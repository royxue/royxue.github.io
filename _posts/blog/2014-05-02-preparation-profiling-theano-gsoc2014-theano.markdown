---
author: xljroy
comments: true
date: 2014-05-02 07:52:11+00:00
layout: post
slug: preparation-profiling-theano-gsoc2014-theano
title: 'Preparation-Profiling Theano #GSoC2014-Theano'
wordpress_id: 326
categories:
- Theano
- Dev
tags:
- GSoC2014/Python
---

## Preparation-Profiling Theano #GSoC2014-Theano


Sorry first for missing theano-dev replies cause I thought it would auto-send me an email. Now my task is reading and learning about profile in[http://deeplearning.net/software/theano/tutorial/profiling.html](http://deeplearning.net/software/theano/tutorial/profiling.html).

When I first saw "profile", the first question occurs in my mind is how to translate it into a Chinese, I found that maybe 侧写(ce xie), is proper, which means to describe something in details.

Profile the code plays an important part in coding, which helps us to know more about our programs execution. Now we use profile in theano instead of ProfileMode. And use profile in theano is really easy.

The simplest way to use profile is by define PROFILE_FLAGS. we can add parameters like profile = true. I have tried different output with these parameters like profile, profile_memory, profile_optimizer, and optimizer_excluding. Fred told me that profile_optimizer is not in my task range so I just look a little about that. Optimizer_excluding will affect the execution ,but will it affect memory usage? I will check it out.

When we define a function with parameter "profile = true", then we view the f.profile is a ProfileStats instance, if we wanna check it content use f.profile.summary()

After discussing with Fred, we make sure that modify the output of profile_memory is needed to be done.

So my aim is to know the output info and see where should be modified. The profile_memory will be important, as I can use it to monitor memory usage when doing lower memory usage.



The output of profile


    ➜  DeepLearningModel git:(master) ✗ THEANO_FLAGS=profile=true,profile_memory=true  python profile.py
    /Library/Python/2.7/site-packages/theano/gof/vm.py:675: UserWarning: CVM does not support memory profile, using Stack VM.
      'CVM does not support memory profile, using Stack VM.')
    5.0
    Function profiling
    ==================
      Message: Add
      Time in 1 calls to Function.__call__: 2.119541e-04s
      Time in Function.fn.__call__: 6.079674e-05s (28.684%)
      Time in thunks: 9.059906e-06s (4.274%)
      Total compile time: 1.518121e-01s
        Theano Optimizer time: 4.169512e-02s
           Theano validate time: 0.000000e+00s
        Theano Linker time (includes C, CUDA code generation/compiling): 4.143310e-02s

    Class
    ---
    <% time> <sum %> <apply time> <time per call> <type> <#call> <#apply> <Class name>
      100.0%   100.0%       0.000s       9.06e-06s     C        1        1   <class 'theano.tensor.elemwise.Elemwise'>
       ... (remaining 0 Classes account for   0.00%(0.00s) of the runtime)

    Ops
    ---
    <% time> <sum %> <apply time> <time per call> <type> <#call> <#apply> <Op name>
      100.0%   100.0%       0.000s       9.06e-06s     C        1        1   Elemwise{add,no_inplace}
       ... (remaining 0 Ops account for   0.00%(0.00s) of the runtime)

    Apply
    ------
    <% time> <sum %> <apply time> <time per call> <#call> <id> <Mflops> <Gflops/s> <Apply name>
      100.0%   100.0%       0.000s       9.06e-06s      1     0                     Elemwise{add,no_inplace}(x, y)
        input 0: dtype=float64, shape=(), strides=c
        input 1: dtype=float64, shape=(), strides=c
        output 0: dtype=float64, shape=(), strides=c
       ... (remaining 0 Apply instances account for 0.00%(0.00s) of the runtime)

    Memory Profile
    (Sparse variables are ignored)
    ---
        Max if linker=cvm (default): unknown
        Max if no gc (allow_gc=False): 0KB
        Max if linker=c|py: 0KB
        Memory saved if gc is enabled (linker=c|py): 0KB

        <Sum apply outputs (bytes)> <Apply outputs shape> <created/inplace/view> <Apply node>

       ... (remaining 1 Apply account for    8B/8B ((100.00%)) of the Apply with dense outputs sizes)

        All Apply nodes have output sizes that take less than 1024B.
        <created/inplace/view> is taken from the Op's declaration.
        Apply nodes marked 'inplace' or 'view' may actually allocate memory, this is not reported here. If you use DebugMode, warnings will be emitted in those cases.
