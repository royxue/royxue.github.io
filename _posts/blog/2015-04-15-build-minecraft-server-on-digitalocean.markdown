---
author: xljroy
comments: true
date: 2015-04-15 00:59:15+09:00
layout: post
slug: build-minecraft-server-on-digitalocean
title: Build Minecraft Server on DigitalOcean
categories:
- blog
- Dev
- Fun
tags:
- Minecraft
- DigitalOcean
---

Hmmmm, since last time I killed the XXX dragon I havent play Minecraft for a long time.

So this time, I think it would be nice to play multi-players game, I wanna enjoy this game once more with lovely Sarah :)

The first thing is to build a minecraft server. I choose DigitalOcean VPS, just because there are some money left there and the speed is not bad ;)

So the first step is create a droplet in digitalocean, it's pretty easy, $5/month one should work well for 2 playes(max would be 6 or 7 I think), if more, just choose a more expensive one. Then use ssh to connect your server.

Cause Minecraft is based on Java, so the first thing we must do is install Java in the droplet, because we wont use any GUI related, so we only install default-jre-headless is enough, in which headless means lack of any GUI libraries.

	apt-get install default-jre-headless

Next create it a folder to store the minecraft .jar file, and also create a group and user to own the minecraft Java process.

	mkdir /srv/minecraft  
	addgroup --system minecraft  
	adduser --system --no-create-home --home /srv/minecraft --ingroup minecraft minecraft  

Then lets install minecraft

	cd /srv/minecraft  
	wget https://s3.amazonaws.com/Minecraft.Download/versions/1.8/minecraft_server.1.8.jar -O minecraft_server.jar  

After install the minecraft game, we can start the server by

	java -Xms32M -Xmx450M -jar minecraft_server.jar nogui

The two parameters mean we start the process with 32M RAM and the max limit would be 450M(cause we only have 512M). However, this is the first time we ran the server, so it wont work well until we agree the EULA(End-User License Agreement), so you stop the server first, and find the eula.txt file under minecraft folder, change the value from false to true.

This time restart the server, it would work well, and some new files would appear like banned-players.json, banned-ips.json, ops.json, and whitelist.json, if you need these functions, just modify it into what you want.

By the way, for a server we cannot just keep minecraft in commend line, we need to create a script make minecraft run as a service, first, create the configuration by running:

	vi /etc/init/minecraft.conf  

And set the contents

	# description "start and stop the minecraft-server"

	start on runlevel [2345]  
	stop on runlevel [^2345]

	console log  
	chdir /srv/minecraft  
	setuid minecraft  
	setgid minecraft

	respawn  
	respawn limit 20 5

	exec /usr/bin/java -Xms32M -Xmx450M -jar minecraft_server.jar nogui  

then lets create a symlink under /etc/init.d by running:

	ln -s /etc/init/minecraft.conf /etc/init.d/minecraft  

Set the folder owned to minecraft

	chown -R minecraft:minecraft /srv/minecraft  

Ok, after this step you can easily manage your minecraft server by 

	service minecraft start  

Lalala, till now, all things have been done.

Open your minecraft, connect to IP:25565 to enjoy your game :)