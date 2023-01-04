---
layout: default
title: Create 3d tiles and visualize them with Cesium
permalink: /examples/3d-tiles/
---

# Create 3d tiles and visualize them with Cesium

In this tutorial, we demonstrate how to import OSM data into PostGIS and then serve them as 3d tiles to view them in Cesium.

## Dataset

OpenStreetMap (OSM) is a free and editable map of the world.
It is maintained by a community of passionate volunteers in a way which is similar to Wikipedia.
Every week, OpenStreetMap publishes a [full dump](https://planet.openstreetmap.org/) of its data in two flavours: a large XML file of about 90GB and a more compact binary file of about 50GB in the  [Protocol Buffer Format](https://developers.google.com/protocol-buffers) (PBF).
As processing such large files can take several hours, [Geofabrik](http://www.geofabrik.de/data/download.html) regularly publishes smaller extracts of OSM for specific regions.
In this example we will use a tiny extract of OSM for [Liechtenstein](https://en.wikipedia.org/wiki/Liechtenstein), which is suitable for fast experiments.

## Importing OpenStreetMap Data

A workflow is a directed acyclic graph of steps executed by Baremaps.
To download and import the sample OSM data in Postgres, execute the following [workflow](https://raw.githubusercontent.com/apache/incubator-baremaps/main/examples/openstreetmap/workflow.json).

```
baremaps workflow execute --file examples/tdtiles/workflow.json
```

Depending on the size of the OpenStreetMap file, the execution of this command may take some time.
Eventually, the output produced by the command should look as follows.

```
[INFO ] 2023-01-04 16:06:53.098 [main] Execute - Executing the workflow workflow.json
[INFO ] 2023-01-04 16:06:53.235 [pool-2-thread-1] DownloadUrl - Downloading https://download.geofabrik.de/europe/liechtenstein-latest.osm.pbf to liechtenstein-latest.osm.pbf
[INFO ] 2023-01-04 16:06:53.820 [pool-2-thread-1] DownloadUrl - Finished downloading https://download.geofabrik.de/europe/liechtenstein-latest.osm.pbf to liechtenstein-latest.osm.pbf
[INFO ] 2023-01-04 16:06:53.821 [pool-2-thread-2] ImportOpenStreetMap - Importing liechtenstein-latest.osm.pbf into jdbc:postgresql://localhost:5432/baremaps?&user=baremaps&password=baremaps
[INFO ] 2023-01-04 16:06:53.825 [pool-2-thread-2] HikariDataSource - HikariPool-1 - Starting...
[INFO ] 2023-01-04 16:06:53.898 [pool-2-thread-2] HikariPool - HikariPool-1 - Added connection org.postgresql.jdbc.PgConnection@6e426130
[INFO ] 2023-01-04 16:06:53.899 [pool-2-thread-2] HikariDataSource - HikariPool-1 - Start completed.
[INFO ] 2023-01-04 16:06:55.743 [pool-2-thread-2] ImportOpenStreetMap - Finished importing liechtenstein-latest.osm.pbf into jdbc:postgresql://localhost:5432/baremaps?&user=baremaps&password=baremaps
[INFO ] 2023-01-04 16:06:55.743 [pool-2-thread-3] ExecuteSql - Executing indexes.sql
[INFO ] 2023-01-04 16:06:56.623 [pool-2-thread-3] ExecuteSql - Finished executing indexes.sql
[INFO ] 2023-01-04 16:06:56.623 [main] Execute - Finished executing the workflow workflow.json
```

## Serve 3d tiles to a Cesium web application

In order to generate 3d tiles Baremaps uses [JTS Delaunay Triangulation](https://locationtech.github.io/jts/javadoc/org/locationtech/jts/triangulate/DelaunayTriangulationBuilder.html) to
triangulate vector tiles into 3d meshes. Then it uses [jgltf](https://github.com/javagl/JglTF) to generate a GLB that can be embedded into a 3d tile.

To start the 3d tiles server, use the following command:

```
baremaps tdtiles serve --database jdbc:postgresql://localhost:5432/baremaps?user=baremaps&password=baremaps
```

Well done, a local http server should have started.
You can now visualize the 3d tiles in your browser ([http://localhost:9000/](http://localhost:9000/))!
Notice that the changes in the configuration files are automatically reloaded by the browser.


## Conclusion

In this tutorial, we learnt how to import OpenStreetMap data in PostGIS and then serve 3d tiles with Apache Baremaps.