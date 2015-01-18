---
author: xljroy
comments: true
date: 2014-12-04 16:25:11+00:00
layout: post
slug: tricks-inside-python-loop
title: Tricks inside Python Loop
wordpress_id: 531
categories:
- blog
- Python
tags:
- python
---

Jump out from multi For loops in Python





* * *



Writing too many layers of for loops is definitely a bad habit. However, sometimes under specific problem, we have no choices but use this method.

There is no "goto" method in python, so it will be difficult to deal with multi layers "for" loops.


    
    <code>for i in range(5):
        for z in range(5):
            for c in range(5):
                if z > c:
                    print z, c
                    break
            else:continue 
            break
    </code>



we can use 'else' inside for/while loop, after each loop, it will run 'else'. But if inside the loop, there is "break", after this loop, it will skip 'else', this time another 'break' under else works, so that we can jump out the second layer loop.

This method is very useful when we cannot avoid using too many loops with if and "goto".
