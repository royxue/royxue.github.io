---
author: xljroy
comments: true
date: 2014-02-25 09:03:49+00:00
layout: post
slug: hadoop-and-mahout-on-ubunutu
title: Hadoop 2.2.0 伪分布式环境 和 Mahout 在 Ubuntu 12.04 配置过程
wordpress_id: 220
categories:
- Dev
---

# Hadoop 2.2.0 伪分布式环境 和 Mahout 在 Ubuntu 12.04 配置过程





* * *





## 1.Ubuntu 12.04 安装


下载Ubuntu 12.04 LTS 稳定版安装即可.如果可以的话推荐安装32位版本,因为Hadoop只有32位的包,64位运行需要自己编译一下.


## 2.用户组设置




#### 2.1 创建hadoop用户组和用户



    
    <code>sudo addgroup hadoop
    sudo adduser -ingroup hadoop hadoop
    </code>




#### 2.2 为hadoop用户添加对应权限



    
    <code>sudo gedit /etc/sudoers #打开sudoers文件
    </code>


在文件中root ALL=(ALL:ALL) ALL下添加hadoop ALL=(ALL:ALL) ALL


## 3.JDK的安装




#### 3.1 JDK下载解压


linux下通过apt-get可以安装open-jdk和sun-jdk两种,如果通过这种方法安装推荐使用sun-jdk. 我是使用Oracle的jdk进行安装.

下载链接 [http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html)

下载之后cd到Downloads文件夹

    
    <code>sudo tar -zxf java文件夹名
    sudo mv /java /usr
    </code>




#### 3.2 设置环境变量



    
    <code>sudo gedit /etc/profile
    </code>


在其中加入

    
    <code># for java
    export JAVA_HOME=/usr/java
    export JRE_HOME=$JAVA_HOME/jre
    export CLASSPATH=.:$JAVA_HOME/lib:$JRE_HOME/lib
    export PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin
    </code>


保存退出

    
    <code>source /etc/profile
    </code>




#### 3.3 JDK验证



    
    <code>java -version
    </code>


正确显示说明JDK已经正确安装


## 4. ssh服务的安装




#### 4.1 ssh安装



    
    <code>sudo apt-get install ssh openssh-server
    </code>




#### 4.2 无密码登录配置


切换用户

    
    <code>su hadoop
    </code>


默认采用ssh的rsa方式生成密钥

    
    ssh-keygen -t rsa -P ""
    cd ~/.ssh
    cat id_rsa.pub >> authorized_keys




完成此步骤即完成了无密码验证


#### 4.3 登录localhost和退出



    
    <code>ssh localhost
    exit
    </code>




## 5. hadoop的安装和配置




#### 5.1 hadoop下载解压


在这里用的是hadoop 2.2.0 32位版本[http://hadoop.apache.org/#Download+Hadoop](http://hadoop.apache.org/#Download+Hadoop)

64位重新编译版[http://pan.baidu.com/s/11SPwd](http://pan.baidu.com/s/11SPwd)

照例解压并且移动到/usr改名为hadoop,并且给hadoop文件夹分配权限

    
    <code>sudo chown -R hadoop:hadoop hadoop
    </code>


配置hadoop路径

    
    <code>sudo gedit /etc/profile
    </code>


加入

    
    <code>#set hadoop env
    export HADOOP_HOME=/usr/hadoop
    export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin
    </code>


使配置生效

    
    <code>source /etc/profile
    </code>




#### 5.2 hadoop基础配置


5.2.1 配置conf/hadoop-env.sh

找到#export JAVA_HOME=...,去掉#，然后加上本机jdk的路径）

    
    <code>export JAVA_HOME=/usr/java
    </code>


5.2.2 配置 core-site.html

    
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://localhost:9000</value>
    </property>
    
    <property>
        <name>hadoop.tmp.dir</name>
        <value>/home/hadoop/hadoop_tmp</value>
    </property>




5.2.5 配置hdfs-site.xml

    
    <property>
        <name>dfs.namenode.name.dir</name>
        <value>/home/namenode</value>
    </property>
    
    <property>
        <name>dfs.datanode.data.dir</name>
        <value>/home/datanode</value>
    </property>




5.2.4 配置mapred-site.xml

    
    <property>
        <name>mapreduce.framework.name</name>
        <value>yarn</value>
    </property>




5.2.5 yarn-site.xml

    
     <property>
            <name>yarn.nodemanager.aux-services</name>
            <value>mapreduce_shuffle</value>
        </property>





#### 5.3 Hadoop 启动运行


启动的文件都是 sbin下，bin下的都是命令。 使用命令cd $HADOOP_HOME切换到该安装目录下 首先格式化 namenode

    
    <code>bin/hdfs namenode -format
    </code>


确定不报错，且出现

SHUTDOWN_MSG: Shutting down NameNode at startos/localhost

启动namenode

    
    <code>sbin/hadoop-daemon.sh start namenode
    sbin/hadoop-daemon.sh start datanode
    </code>


运行测试

1 jps 出现： 12935 NameNode 5309 Jps 13012 DataNode

证明启动成功，如果没有出现DataNode或者NameNode，证明启动没有成功，可以查看hadoop安装目录下的logs下的日志记录。 可以使用sbin/hadoop-daemon.sh stop datanode（或namenode）来关闭。

启动Manage管理

    
    <code>sbin/yarn-daemon.sh start resourcemanager
    sbin/yarn-daemon.sh start nodemanager
    </code>


运行测试

1 jps 出现：

    
    <code>13338 NodeManager
    13111 ResourceManager
    12935 NameNode
    5309 Jps
    13012 DataNode
    </code>


证明启动成功 同时也可以使用yarn-daemon.sh stop resourcemanager（nodemanager）来关闭。

如果没有单独配置yarn-site.xml中的yarn.resourcemanager.webapp.address，默认的端口8088 访问 http://127.0.0.1:8088/ 可以访问hadoop管理页面

如果没有单独配置 hdfs-site.xml中的dfs.namenode.http-address,默认端口50070 http://127.0.0.1:50070 可以访问namenode节点信息。


## 6.Mahout的配置




#### 6.1 Mahout的下载解压


Mahout的下载地址[http://mahout.apache.org/general/downloads.html](http://mahout.apache.org/general/downloads.html)

解压并移动到/usr文件夹,并配置环境变量
sudo gedit /etc/profile 在里面加入

    
    <code>#set mahout env
    export HADOOP_CONF_DIR=/usr/hadoop/etc/hadoop
    export MAHOUT_HOME=/usr/mahout-distribution-0.4
    export PATH=$PATH:$MAHOUT_HOME/bin
    </code>


是配置生效

    
    <code>source /etc/profile
    </code>


输入mahout检查是否完成安装


#### 6.2 mahout的K-Means算法测试


6.2.1 下载数据集synthetic_control.data 地址:[http://archive.ics.uci.edu/ml/databases/synthetic_control/synthetic_control.data](http://archive.ics.uci.edu/ml/databases/synthetic_control/synthetic_control.data)

6.2.2 创建测试目录testdata,并把数据导入到这个test目录中(这里的目录的名字只能是testdata)

    
    <code>hdfs dfs -mkdir -p /user/hadoop/testdata
    hdfs dfs -put /home/synthetic_control.data /user/hadoop/testdata/
    </code>


6.2.3 运行kmeans算法

    
    <code>mahout org.apache.mahout.clustering.syntheticcontrol.kmeans.Job
    </code>


运行大概五分钟左右就可以看到聚类的结果,至此,Mahout的安装配置和测试工作完成.
