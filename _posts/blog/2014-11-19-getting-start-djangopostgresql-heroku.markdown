---
author: xljroy
comments: true
date: 2014-11-19 13:50:27+00:00
layout: post
slug: getting-start-djangopostgresql-heroku
title: Getting Start with Django/PostgreSQL on Heroku
wordpress_id: 520
categories:
- blog
- Dev
- Python
tags:
- django
---

### Getting Start with Django/PostgreSQL on Heroku





* * *



This weekend I will enjoy my hackathon, what my team decide to do is a XXX application, to finish this, one thing we need is free server to deploy our django project. Finally, I choose the heroku, which is free, powerful, and convenient, based on git.

Although after reading the getting started python, it seems that deploying is really easy to complete, actually, there are traps if your projects are not using sqlite as the demo, however, postgresql is why we use Heroku.

Whatever, let's start:




    
  1. Install the heroku-toolbelt, it's very convenient to when you are using Heroku, well, dont install heroku-toolbelt by brew, because by this you wont install foreman at the same time.

    
  2. Write a useful requirements.txt, that's what make sure that your projects can run well on Heroku server, there are some modules you must add in that file:

    
    <code> Django (haha, you should have this)
     psycopg2
     dj-database-url==0.3.0
     dj-static==0.0.6
     django-toolbelt==0.0.1
     gunicorn==19.0.0
     static3==0.5.1
     wsgiref==0.1.2
    </code>




    
  3. for your django settings.

    
    <code> DATABASES['default'] =  dj_database_url.config()
     # set Database info on Heroku server
     STATIC_ROOT = 'staticfiles'
     STATIC_URL = '/static/'
     STATICFILES_DIRS = (os.path.join(BASE_DIR, '../static'),)
     #set where to store the static files
    </code>


if you wanna use DEBUG mode in Django, add a config like HEROKU_ENV on Heroku to turn DEBUG on/off at online/offline. Add that like this "heroku set:config HEROKU_ENV=TRUE

    
  4. After git push heroku master, dont forget to set your database

    
    <code> heroku run python manage.py syncdb
     heroku run python manage.py migrate(if with south&tastypie)
    </code>




    
  5. Aha, the last step "heroku open"! see your website welcome page!


