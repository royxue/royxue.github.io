---
author: xljroy
comments: true
date: 2014-02-12 15:49:21+00:00
layout: post
slug: google-maps-sdk-for-ios-version-1-7-release
title: Google Maps SDK for iOS Version 1.7 Release
wordpress_id: 185
categories:
- Life
---

# Google Maps SDK for iOS Release Notes





## Version 1.7 - February 2014


Download [Version 1.7.0](https://dl.google.com/geosdk/GoogleMaps-iOS-1.7.0.zip).

**Features**



	
  * Styled polylines: additional color options via `GMSPolyline`, including gradients and colors for any number of polyline segments. ([Issue 4856](https://code.google.com/p/gmaps-api-issues/issues/detail?id=4856))

	
    * Each polyline may be drawn with many `GMSStyleSpan` instances, configuring a unique color or gradient over an arbitrary number of segments.

	
    * Gradient or color may be specified via a `GMSStrokeStyle`.

	
    * `GMSPath` provides a helper category to determine distance along a path.

	
    * `GMSStyleSpans` helper to apply repeated styles along a polyline.




	
  * `GMSGeocoder` now provides structured addresses via `GMSAddress`, deprecating `GMSReverseGeocodeResult`.

	
  * Added mutable version of `GMSCameraPosition`, `GMSMutableCameraPosition`.

	
  * Delegate method for user tapping the My Location button.

	
  * Added `GMSMapPoint` for linear interpolation between points in Mercator space on the Earth.

	
  * My Location dot now shows compass arrow. ([Issue 5325](https://code.google.com/p/gmaps-api-issues/issues/detail?id=5325))

	
  * 3D building data is newly available for many places on the Earth.


**Resolved issues:**



	
  * `GMSPolyline` width is much closer to screen width. ([Issue 5788](https://code.google.com/p/gmaps-api-issues/issues/detail?id=5788), [Issue 5265](https://code.google.com/p/gmaps-api-issues/issues/detail?id=5265))

	
  * `GMSPolyline` performance and memory improvements. ([Issue 4904](https://code.google.com/p/gmaps-api-issues/issues/detail?id=4904))

	
  * Reduced memory use of OpenGL textures.

	
  * Floor picker is positioned correctly when My Location button is disabled. ([Issue 5742](https://code.google.com/p/gmaps-api-issues/issues/detail?id=5742))

	
  * `cameraForBounds:insets:` on `GMSMapView` now correctly accounts for padding. ([Issue 6080](https://code.google.com/p/gmaps-api-issues/issues/detail?id=6080))





