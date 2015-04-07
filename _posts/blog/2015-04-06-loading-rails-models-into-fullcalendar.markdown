---
author: xljroy
comments: true
date: 2015-04-06 18:57:23+09:00
layout: post
slug: loading-rails-models-into-fullcalendar
title: Loading Rails Models into FullCalendar
categories:
- blog
- Dev
- Rails
tags:
- Rails
- ruby
- fullcalendar
---

[Fullcalendar](http://fullcalendar.io/) is a powerful javascript calendar. It would be convenient if u wanna build some calendar-based service. 

Using Fullcalendar is not very complex. First, u need to install FullCalendar in your Rails app.

	gem 'fullcalendar-rails'
	gem 'moment-rails'
and add following lines to your js 

	//= require moment
	//= require fullcalendar	
and css files

	*= require fullcalendar

The basic usage is very easy, put _"<div class="calendar"></dic>"_  in html, and put following code in to coffee files(or put js version in js)

	$ ->
  		$(document).ready ->
    		$('#calendar').fullCalendar {
			      header: {
			        left: 'prev,next today',
			        center: 'title',
			        right: 'month,agendaWeek,agendaDay'
			      },
			      monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			      monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			      dayNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
			      dayNamesShort: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],  
			    }
		    return
	

events: window.location.href + '.json'
FullCalendar uses EventObject to load events data and show on the calendar, EventObject is json format data loaded in js files, so here we need to load our Model data into FullCalendar.

Here I will how to load events in users views(a little more difficult than load in events views)

First, in models/event.rb, add

	  def as_json(options = {})
    	{
	      :id => self.id,
	      :title => self.name,
	      :start => self.start_time,
	      :end => self.end_time,
	      :description => self.description,
	      :allDay => self.is_all_day,
	 	 }
	 	 end
Here the code will tranfer event data in to json format, id, title, start, end, allDay is important, make sure in your model have these datas.

Then in controller/users_controller.rb

      respond_to do |format|
        format.html
        format.json { render json:@events.to_json }
      end
render the @events objects into json format, so now this json url should be like localhost:3000/users/(:id).json

The final step is to load json in js

	events: window.location.href + '.json'
Use window.location.href to get current url, plus ".json", hmmm, it's a lazy way haha.

Till now, the FullCalendar would work for you :)