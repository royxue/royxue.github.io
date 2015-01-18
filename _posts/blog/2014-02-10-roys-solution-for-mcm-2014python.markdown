---
author: xljroy
comments: true
date: 2014-02-10 22:17:32+00:00
layout: post
slug: roys-solution-for-mcm-2014python
title: Roy's Solution for MCM 2014#Python
wordpress_id: 192
categories:
- Python
tags:
- zh_CN
---

6:02 am NOW!在DDL之前完工了论文.终于到了睡觉的时间了.突然觉得睡觉之前还是把这个写完,不然拖延症发作又不知道要过多久了...

2014 MCM 的题好像也没有想象的那么复杂,虽然我只负责代码和写作,挺狗屎运的是题目和数据挖掘有关系,正好之前大家也是一直练习C题,所以没有过多思考就选了C题(其实我根本没有看AB题,所以我至今不知道他们是什么内容),顺便其实我也根本没看matlab因为不喜欢,不过刚刚好Python基本可以解决的这道题里面的问题,下面就贴出的我的Python代码,内容有些乱(实际使用时是分模块Run的,这次整合到了一起因为Run一次时间挺长的没有测试,),请见谅~

贴代码之前先说一下,本来一开始看到数!!据!!挖!!掘!!,第一反应是把它丢进Rapiminer或者Weka里面之前分析一下,但是,官网给的资料格式实在是...高级偷懒症患者于是陷入了纠结...最后突然灵光一现想到了Networkx小伙伴(只是比较省事= =)!!!所以这次的代码主要是基于它开发的.Networkx是基于Python的图论和复杂网络Eva建模工具,内置了我们常用的图和复杂网络分析的算法,可以便捷方便的建立基础或复杂网络,并且对网络进行数据分析,仿真建模.不过说实话,功能虽然强大但是速度实在有点慢(我的电脑是i7 + 8G),所以使用前需要修炼好忍耐力.PS:Networkx:[http://networkx.github.io/](http://networkx.github.io/)

    
    #coding: utf-8
    #author: Roy Xue
    #verion: beta
    
    import re
    import urllib2
    import networkx as nx 
    import matplotlib.pyplot as plt
    
    #Step 1 爬虫爬取题目资料
    url='https://files.oakland.edu/users/grossman/enp/Erdos1.html' 
    content=urllib2.urlopen(url).read()
    file= open('coau.txt','w')
    file.write(content)
    file.close()
    print 'Step 1 done'
    
    #Step 2 利用正则表达式初步处理题目资料
    file= open('coau.txt','r')
    co= open('cooau.txt','w')
    content=file.read()
    av=content.split('\n')
    for i in avv:
    	co.write(i)
    co.close()
    file.close()
    print 'Step 2 done'
    
    #Step 3 绘制网络图
    G = nx.Graph()
    auN=open('coau.txt','r')
    au510=''
    for i in auN:	
    	i_pat=re.compile(r'(.*?)19')
    	i_pat_2=re.compile(r'\t(.*?)\n')
    	if i :
    		if i_pat.match(i):
    			i=re.findall(i_pat,i)
    			print i[0]
    			a = unicode(i[0],"utf-8")
    			G.add_node(a)
    			c = a
    		elif i_pat_2.match(i):
    			i=re.findall(i_pat_2,i)
    			print i
    			a=unicode(i[0],"utf-8")
    			G.add_edge(c,a)
    #形成关系网络图
    #无向无权图
    
    for n in G.nodes():
    	if (G.degree(n) == 1):
    		G.remove_node(n)
    		print 'Target Removed'
    #初步处理,取出度为1的作者
    
    nx.draw(G)
    print 'Graph Drawing, plz wait'                          
    plt.savefig("garph.png")
    print 'Graph Saved'          
    plt.show()
    print 'Check Out Ur Graph, Next Step Will Start When Ur Close Graph Windows'  
    #绘制图像 png格式保存 
    
    #Step 4 对图进行分析
    print G.number_of_nodes()
    #输出图总节点数
    print G.number_of_edges()
    #输出图总边数
    
    print G.degree()
    #输出各个节点的度
    dgreeOut= sorted(G.degree().iteritems(), key=lambda d:d[1], reverse = True)
    print dgreeOut
    #输出排序版度分布表
    
    print nx.average_clustering(G)
    #输出平均聚类系数
    print nx.clustering(G)
    #输出聚类系数分布表
    b=nx.clustering(G)
    clusterOut= sorted(b.iteritems(), key=lambda d:d[1], reverse = True)
    print clusterOut
    #输出排序版聚类系数分布表
    
    print nx.degree_centrality(G)
    #输出度中心性表
    c=nx.degree_centrality(G)
    centralityOut= sorted(c.iteritems(), key=lambda d:d[1], reverse = True)
    print centralityOut
    #输出排序版度中心性表
    
    print nx.degree_histogram(G) 
    #输出度分布序列
    degree =  nx.degree_histogram(G)          
    #返回图中所有节点的度分布序列
    x = range(len(degree))                             
    #生成x轴序列，从1到最大度
    y = [z / float(sum(degree)) for z in degree]  
    #将频次转换为频率，这用到Python的一个小技巧：列表内涵
    plt.loglog(x,y,color="blue",linewidth=2)           
    #在双对数坐标轴上绘制度分布曲线  
    plt.show() 
    
    print nx.adjacency_matrix(G,G.nodes())
    a=nx.adjacency_matrix(G,G.nodes())
    for i in a:
    	for q in i:
    		print q
    #输出邻接矩阵.
    
    au=open('coau.txt','r')
    i_pat=re.compile(r'(.*?)19')
    auDict={}
    for i in au:
    	if i_pat.match(i):
    		c=i[-5:-1]
    		print i[-5:-1]
    		i=re.findall(i_pat,i)
    		auDict[i[0]]=c
    		print i[0]
    print auDict
    auDictS= sorted(auDict.iteritems(), key=lambda d:d[1], reverse = True)
    print auDictS
    #输出排序版合著数量表


MCM2014.py



除了这里面之外还用了其他技能,比如代码里面的Step2其实写好了最后没用到,我也忘记为什么了,貌似是因为人工更方便快捷一点...顺便分享另外一个小技巧,如何快速数据分行,networkx里面的数据输出默认是用字典形式,但是这并不方便利用其它软件分析,你可能和我一样对分行的第一反应是用re!!!但是,不得不说word其实可以更方便,使用替换功能^p代表换行符,一件分行.

好久没有写过1000+的blog了...庆祝一下...叫你再懒!

欢迎拍砖吐槽交流,评论请注册留言或电邮xljroy@gmail.com联系我
