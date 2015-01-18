---
author: xljroy
comments: true
date: 2014-04-28 11:44:19+00:00
layout: post
slug: '%e6%9c%ba%e5%99%a8%e5%ad%a6%e4%b9%a0%e4%b9%8blogistic-regression'
title: 机器学习之Logistic Regression
wordpress_id: 311
categories:
- Machine Learning
---

Logistic Regression 逻辑回归笔记整理
-----------------------------------------------

主要参考 Cousera - Machine Learning by Andrew Ng
啊...发现果然不整理笔记不行啊...不然过段时间就忘记了...

最简单的线性回归其实就是我们小学做的画图或者计算题,求出一条最接近的拟合曲线. 但是回归是连续性模型,一般应用在Precision(预测)问题上,如果要应用在分类问题,就要用到了Logistic Regression,也就是传说中的逻辑回归

逻辑回归的本质还是线性回归,但是相较于h(x) =[![clip_image025](http://images.cnblogs.com/cnblogs_com/jerrylead/201103/201103052209276833.png)](http://images.cnblogs.com/cnblogs_com/jerrylead/201103/201103052209264391.png) 而言,多加了一层函数的映射,

即Sigmoid(Logistic Function) g(z)=1/(1+e^(-z)), 我们可以从下面这个图里面看到

![](http://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Logistic-curve.svg/320px-Logistic-curve.svg.png)

所以新的hθ(x) = g([![clip_image025](http://images.cnblogs.com/cnblogs_com/jerrylead/201103/201103052209276833.png)](http://images.cnblogs.com/cnblogs_com/jerrylead/201103/201103052209264391.png) ), 为了实现分类问题,假设两类概率满足伯努利分布

[![clip_image027](http://images.cnblogs.com/cnblogs_com/jerrylead/201103/201103052209305423.png)](http://images.cnblogs.com/cnblogs_com/jerrylead/201103/201103052209294999.png)

Decision Boundary :我们一般设置这个值为0.5 ,并且作为0和1 两类的分类标准. hθ(x) > 0.5 => hθ(x) = 1 => x > 0 的关系.

每个机器学习的算法都逃不开Cost Function(代价函数)的宿命

用于线性回归的代价函数,在这里将不再适用,因为在此处通过梯度下降不一定可以求得最优解.

![](http://img1.guokr.com/image/ftVruqJWGU8Q2yW-EHVPDz2ZPrJ7yJSp6ypBUOKGKYA-AwAAlAAAAFBO.png)

所以逻辑回归的代价函数为

![](http://img1.guokr.com/image/VqgQ-aIy2KvAJ6y-qToF9oVLcJAxVqvTs_fRK122NPD8AgAAxwAAAFBO.png)

![](http://img1.guokr.com/image/dH__tbwcW0JoQbzh3agqynH-Tc3sPB-V_PL2wDtLa37xAQAAUQAAAFBO.png)

对于新的代价函数,由于是根据y的取值来确定的,那么我们可以对他进行简化

[[![Evernote 2](http://royxue.me/wp-content/uploads/2014/04/Evernote-2-300x185.png)](http://royxue.me/wp-content/uploads/2014/04/Evernote-2.png)
](https://www.evernote.com/shard/s131/sh/afdae339-2b73-4555-b1af-b98dd6129aea/70d29a4811e6c41f3d3c49fc55f2526b)

对_J_(_θ_)求导后，梯度下降算法如下：

[![Evernote](http://royxue.me/wp-content/uploads/2014/04/Evernote-300x101.png)](http://royxue.me/wp-content/uploads/2014/04/Evernote.png)



注意，这个算法和线性回归里的梯度下降算法几乎是一致的，除了_h__θ_(_x_)的表示不同。


