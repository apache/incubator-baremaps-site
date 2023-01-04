---
layout: default
title: Examples
permalink: /examples/
---

# Examples

The examples will showcase the different uses of the Apache Baremaps toolkits. To run the examples you need to clone or [download](https://github.com/apache/incubator-baremaps/archive/refs/heads/main.zip) the main
repository in order to have access to the [files](https://github.com/apache/incubator-baremaps/blob/main/examples/) that have been prepared for the examples.

```bash
git clone git@github.com:apache/incubator-baremaps.git
```

You should have completed the [Installation Guide](/getting-started/installing-the-cli) before running the examples.

For the creation of custom vector tiles you can follow these guides:

- The [OpenStreetMap](/examples/import-osm-into-postgis/) example is a good introduction to Baremaps, it shows how to produce high resolution vector tiles.
- The [NaturalEarth](/examples/import-naturalearth-into-postgis/) example shows how to produce low resolution vector tiles.
- The [Contour](/examples/import-contour-into-postgis/) example shows how to produce contour lines from a digital elevation model.
- The [Extrusion](/examples/extrusion/) example shows how to import OSM data into postgis and use the MVT specification to extrude the vectors into 3d.

For the creation of an IP to location service follow this guide:

- The [IP to location](/examples/ip-to-location/) example shows how to create and serve an IP to location service in a simple web application.

If you want to work on Geocoding there is this example:

- The [Geocoding](/examples/geocoding/) example shows how to create and serve a geocoding service in a simple web application.

Developers who want to execute the code, should refer to the developer manual:

- The [Developer Manual](/developer-manual/) aims at helping developers to execute the code, understand the structure and contribute to the project.