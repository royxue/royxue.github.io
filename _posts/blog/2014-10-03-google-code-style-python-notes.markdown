---
author: xljroy
comments: true
date: 2014-10-03 02:26:30+00:00
layout: post
slug: google-code-style-python-notes
title: Google Code Style Python Notes
wordpress_id: 479
categories:
- blog
- Python
- Dev
---





这两天因为Projects需要, 刷了一遍Google Code Style for Python, hmmm怎么说呢, 第一次认真看这样的文档, 感觉确实有很多需要注意的东西, 目的是为了更加让code更加简洁明了, 所以可能相对忽略了一些语言特性, 和简单却复杂的语句







  1. Pylint tools


  2. Import


    * import X


    * from X import Y


    * from X import Y as Z





  3. 注意的是在import时, 使用full package name. 避免混乱的import或者import同一package两次


  4. Exceptions


    * 允许使用, 但是必须谨慎


    * Raise Exception使用: raise Exceptions("Errormsg") or raise Exceptions


    * Module 里的Base Exception 用Error命名
`def Error(Exception)


    * try/except block里的代码量要尽可能精简, 避免从无用的语句中raise Exception


    * 不论是后raise expection 使用finally来执行代码


    * try/except 中使用as来代替逗号
except Error as error





  5. Global Variables


    * 尽量避免使用Global Variables





  6. Nested/Local/Inner Function and Classes


    * 在某些情况下, 可以使用





  7. List Comprehensions


    * 使用简单直观的list构造方法, 尽量避免使用诸如map(), lambda等方法





  8. Default Iterators and Operators


    * 对list,dict 等使用默认的迭代器和操作器


    * 使代码更简单, 避免extra method calls





  9. Generators


    * 需要被使用





  10. Lambda Functions


    * 一行可以写完的代码允许使用


    * 可以被用来定义callbacks or operators for higher-order functions


    * 缺点是比较不易读


    * 对于 简单地操作避免使用lambda





  11. Conditional Expressions


    * 一行内可以用





  12. Default Argument Values


    * 大部分情况可用





  13. Properties


    * 只读属性使用装饰器@property


    * __get_property __set_property





  14. True/False evaluations


    * 含蓄的否定判断


    * 不要用 ==/!= 来比较singletons(e.g. None) 用is/is not


    * 不用is来判断False


    * 判断比如list为空 if seq instead of if len(seq)





  15. Deprecated Language Features


    * 不要随意使用, 不同的python可能不互相支持





  16. Lexical Scoping


    * 可用





  17. Function and Method Decorators


    * 有明确优势的时候再用装饰器


    * @classmethod and @staticmethod 把普通的方法转化为class或者static method





  18. Threading


    * Using Queue 在线程之间传输数据





  19. Power Features


    * 避免使用这些强力特性








Python Style rules:







  1. 不要用分号


  2. 单行最大长度80个字符, 不要用反斜线换行, url需要的可以可以放在一行


  3. 谨慎使用()


  4. 4空格缩进


  5. Top level definitions(function/class)空两行, method之间空一行


  6. Whitespace


  7. 注释


    * Doc string





  8. Class


    * class 没有明确的父类时, 继承object





  9. String


    * 格式化输出的两种选择 '{}'.format() 或者 % 一类





  10. Files and Sockets


    * 使用完files和sockets之后一定要及时关掉sockets





  11. 管理文件时使用_with_语句
with open("hello.txt") as hello_file:
for line in hello_file:
print line
类似file的对象使用contextlib来替代with
import contextlib
with contextlib.closing(urllib.urlopen("http://www.python.org/")) as front_page:


  12. TODO 注释, 表示暂时性的解决方法


  13. import应该使用单独的行来import


  14. Statement 一行一条语句


  15. 命名规则...check 网页吧


  16. main函数, 尽量每个文件都有main函数, 这样可以保证单元测试的时候文件可导入
