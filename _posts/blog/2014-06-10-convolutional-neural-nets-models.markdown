---
author: xljroy
comments: true
date: 2014-06-10 05:48:27+00:00
layout: post
slug: convolutional-neural-nets-models
title: Convolutional Neural Nets Models
wordpress_id: 411
categories:
- Machine Learning
- Dev
tags:
- en_US
---

**Mainly summarize the publicly avaiable CNN models**




(主要整理了一下一些平常可以用到CNN成熟架构和模型)




First of all: GPU calculating, mainly for Cuda(NVIDIA) to accelerate the training phrase.




**1. Theano (deeplearning.net/tutorials)**




based on Python




link: [http://deeplearning.net/tutorial/](http://deeplearning.net/tutorial/)




The tutorials presented here will introduce you to some of the most important deep learning algorithms and will also show you how to run them using Theano. Theano is a python library that makes writing deep learning models easy, and gives the option of training them on a GPU.




**2. caffe (Convolutional Architecture for Fast Feature Extraction)**




based on C++, with Python/Matlab wrapper




link:[https://github.com/BVLC/caffe](https://github.com/BVLC/caffe)




Created by Yangqing Jia, UC Berkeley EECS department. In active development by the Berkeley Vision and Learning Center (BVLC).




**3. decaff**




based on Python




link: [https://github.com/UCB-ICSI-Vision-Group/decaf-release](https://github.com/UCB-ICSI-Vision-Group/decaf-release)




Decaf is a framework that implements convolutional neural networks, with the goal of being efficient and flexible. It allows one to easily construct a network in the form of an arbitrary Directed Acyclic Graph (DAG) and to perform end-to-end training.




**4. deepnet**




based on Python




link: [https://github.com/nitishsrivastava/deepnet](https://github.com/nitishsrivastava/deepnet)




Implementation of some deep learning algorithms.




GPU-based python implementation of




Feed-forward Neural Nets




Restricted Boltzmann Machines




Deep Belief Nets




Autoencoders




Deep Boltzmann Machines




Convolutional Neural Nets




Built on top of the cudamat library by Vlad Mnih and cuda-convnet library by Alex Krizhevsky.
