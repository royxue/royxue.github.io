---
author: xljroy
comments: true
date: 2014-02-06 08:47:36+00:00
layout: post
slug: sublime-text-2-plugins-%e6%8e%a8%e8%8d%90%e6%8c%81%e7%bb%ad%e6%9b%b4%e6%96%b0
title: Sublime Text 2 Plugins 推荐(持续更新)
wordpress_id: 165
categories:
- Life
---

Sumlime Text 2 是一款十分优美强大的文本编辑器,用来处理python,php类似的脚本语言和web语言很不错,同时也有很强大的快捷键和插件功能,下面就推荐一些我平常用的感觉还不错的插件

附上sublime下载地址先:http://www.sublimetext.com/

1.**Package Control**

十分好用的包管理器,可以很方便管理sublime里面的插件,安装卸载都十分方便.



安装方法:在Sublime中按下Ctrl + ` 并输入以下代码,安装完成后重启程序.


    
    import urllib2,os; pf='Package Control.sublime-package'; ipp=sublime.installed_packages_path(); os.makedirs(ipp) if not os.path.exists(ipp) else None; urllib2.install_opener(urllib2.build_opener(urllib2.ProxyHandler())); open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read()); print 'Please restart Sublime Text to finish installation'



从这里往下面的程序从Package Control 的Install Package 里面输入插件名称可进行自动安装.(按Shift+Ctrl+P 呼出窗口,输入ip即可使用Install Package)

2.**SublimeREPL**

解决sublime Python交互问题.最开始用sublime发现run的时候raw_input总是会报错.SublimeREPL正是解决这个问题的神器,而且还是新建窗口显示运行结果,并借可以设置快捷键,又可以用F5开心的run了~



3.**CodeIntel**

用编译器的目的之一绝对有补全功能来偷懒!最早开始使用AndyPython但是实在是觉得很奇怪,大概是适配python 3.x的环境吧.所以果断换了CodeIntel 补全功能很好用~
