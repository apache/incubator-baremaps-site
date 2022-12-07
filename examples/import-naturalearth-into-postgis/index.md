---
layout: default
title: Import Natural Earth data into PostGIS
permalink: /examples//import-naturalearth-into-postgis/
---

# Import Natural Earth data into PostGIS

In this tutorial, we'll learn how to use Baremaps to import Natural Earth data in a PostGIS database.

Notice that the following steps assume that the Apache Baremaps CLI and PostGIS are [installed](https://www.baremaps.com/getting-started/).

## Dataset

[Natural Earth](https://www.naturalearthdata.com/) is a public domain map dataset available at 1:10m, 1:50m, and 1:110 million scales.

The following workflow will download the Natural Earth data, decompress it, and finally import it in the database.

```
baremaps workflow execute --file examples/naturalearth/workflow.json
```

## Working with shapefiles (Optional)

The NaturalEarth dataset is also distributed in the [shapefile format](https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/cultural/ne_10m_admin_0_countries.zip).
As demonstrated in the following command, shapefiles can easily be imported in postgis with `ogr2ogr`.
Here, notice that the data is reprojected in WebMercator (EPSG:3857) to improve performance at query time.

```
ogr2ogr \
  -f "PostgreSQL" "PG:host=localhost user=baremaps dbname=baremaps password=baremaps" \
  "ne_10m_admin_0_countries.shp" \
  -lco GEOMETRY_NAME=geom \
  -lco FID=gid \
  -lco PRECISION=no \
  -nlt PROMOTE_TO_MULTI \
  -nln ne_10m_admin_0_countries \
  -s_srs EPSG:4326 \
  -t_srs EPSG:3857 \
  --config OGR_ENABLE_PARTIAL_REPROJECTION TRUE \
  -overwrite
```

## Conclusion

In this tutorial, we learnt how to import Natural Earth data in PostGIS.

Now that you have inserted the data into the PostGIS database, you can use follow the [Serve Vector Tiles from PostGIS](/examples/serve-vector-tiles) example to serve
your PostGIS data directly as Vector Tiles in a web application with live reload capabilities.
