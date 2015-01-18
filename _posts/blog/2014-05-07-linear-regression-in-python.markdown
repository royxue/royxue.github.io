---
author: xljroy
comments: true
date: 2014-05-07 07:59:04+00:00
layout: post
slug: linear-regression-in-python
title: Linear Regression in Python
wordpress_id: 339
categories:
- Machine Learning
---

有些东西看着学, 和自己动手写差距还是蛮大的.

Cousera的Machine Learning终于快要上完了, 自己对机器学习的知识也有了更多的了解. ML的课程作业大多只是写整个过程的一些关键小模块, 比如Cost Function或者Gradient Descent 而并非是整个写完一个程序. 所以这次自己试着用Python写了一个完整的程序.

其实过程并不像想象的那么简单, 果然看代码理解是一回事, 动手写是另外一回事. 知识准备这部分没什么问题, 大体思路在写之前粗略的整理了一下, 但是碰到的第一个问题就是, 如何把txt的数据导入成ndarray, 其实, 这个也不难, 但是因为自己懒不愿意用新建list的方法, 另外一方面对numpy的基本函数还不是很熟悉, 查各种简洁方法查了半天, 最后找到了numpy.loadtxt方法, 并且要用delimiter 取","做定界符. 后来遇到的第二个问题是矩阵的组合. 嗯, 就碰到的这两个问题来说, 相比之下Octave可能更加方便一些把, 不过我还是喜欢用Python. 剩下的部分基本上问题不大了.

Linear Regression 线性回归还是比较简单的. 主要是用来预测, 连续数值输出.

主要是一些基础的矩阵运算和Cost function代价函数, Gradient Descent 梯度下降的公式了解.

附上课程地址[https://class.coursera.org/ml-005](https://class.coursera.org/ml-005)和我的代码



    
    #author: Roy Xue
    #reference: Cousera Machine Learning by Andrew Ng
    
    import numpy as np
    import matplotlib.pyplot as plt
    
    class Linear_Regression(object):
    	def __init__(self,input):
    		self.data = np.loadtxt(input, delimiter=',')
    		self.theta = np.zeros((2,1))
    		self.m = 97
    		self.x = self.data[:, 0].reshape(97, 1)
    		self.x1 = np.concatenate((np.ones((97, 1)), self.x), axis=1)
    		self.y = self.data[:, 1].reshape(97, 1)
    
    	def show_data(self):
    		plt.plot(self.x, self.y,'o', self.x, self.H + self.y, 'r')
    		plt.show()
    		
    	def cost_function(self):
    		self.H = np.dot(self.x1, self.theta) - self.y
    		J = sum(pow(self.H, 2)) / (2. * self.m)
    		return J
    
    	def gradient_descent(self):
    		iteration = 1500
    		alpha = 0.01
    		for i in range(0, iteration):
    			self.H = self.H = np.dot(self.x1, self.theta) - self.y
    			self.theta[0] = self.theta[0] - (alpha / self.m) * sum(self.H)
    			self.theta[1] = self.theta[1] - (alpha / self.m) * sum(self.H * self.x)			
    		return self.theta		
    
    	def run(self):
    		print "Initial Cost is" + str(self.cost_function())
    		print "The best theta after 1500 iterations" + str(self.gradient_descent())
    		print "The Cost now is" + str(self.cost_function())
    		self.show_data()
    
    line = Linear_Regression(input='ex1data1.txt')
    line.run()




运算结果:

[![Figure_1_and__REPL___python_](http://royxue.me/wp-content/uploads/2014/05/Figure_1_and__REPL___python_-300x298.png)](http://royxue.me/wp-content/uploads/2014/05/Figure_1_and__REPL___python_.png)




