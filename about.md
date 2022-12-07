---
layout: default
title: About
description: Apache Baremaps is a toolkit and a set of infrastructure components for creating, publishing, and operating online maps. It provides a data pipeline enabling developers to build maps with different data sources with live reload capabilities. It provides other services commonly used in online maps, such as location search and IP to location.
permalink: /about/
---

# About

Apache Baremaps is an  [open source](https://github.com/apache/incubator-baremaps/blob/main/LICENSE) toolkit and a set of infrastructure components for creating, publishing, and operating online maps. It provides a data pipeline enabling developers to build maps with different data sources. It offers live reload capabilities that allow cartographers to customize the content and the style of a map. It includes an attribution-free map schema and style that stimulates derived work. Finally, it provides services commonly used in online maps, such as location search and IP to location.

[![State of the map](/assets/screenshot.jpg)](/assets/demo.html)

Apache Baremaps is inspired by [Osmosis](https://github.com/openstreetmap/osmosis), but it comes with additional features, such as the ability to:

-   Process data in parallel with the [Stream API](https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html) introduced in Java 8
-   Import data faster with the [COPY API](https://www.postgresql.org/docs/11/sql-copy.html) of Postgresql
-   Create postgis geometries on the fly with [JTS](https://github.com/locationtech/jts)
-   Create and serve customized [Vector Tiles](https://docs.mapbox.com/vector-tiles/specification/)

On the longer run, the project aims to work with a variety of data sources in order to create highly specialized and customized maps.