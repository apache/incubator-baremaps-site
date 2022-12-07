---
layout: default
title: Import contour lines data into PostGIS
permalink: /examples/import-contour-into-postgis/
---

# Import contour lines data into PostGIS

In this tutorial, we demonstrate how to produce contours from a digital elevation model (DEM).

Notice that the following steps assume that the Apache Baremaps CLI and PostGIS are [installed](https://www.baremaps.com/getting-started/).

## Dataset

The approach consists in using the [`gdal_contour`](https://gdal.org/programs/gdal_contour.html) command.
Therefore, start by installing `gdal`:

```bash
sudo apt-get install gdal-bin
```

The geotiff present in this directory comes from the [ASTER](https://asterweb.jpl.nasa.gov/gdem.asp) dataset.
We used the following command to reproject the geotiff in the desired projection (e.g. WebMercator) before importing it in the database.

```
gdalwarp -rc \
  -s_srs epsg:4326 -t_srs epsg:3857 \
  -dstnodata 0 -of GTiff -co tiled=yes \
  examples/contour/liecthenstein-aster-dem-v2.tif \
  examples/contour/liecthenstein-aster-dem-v2-3857.tif
```

## Importing the data into PostGIS

You can now import any GeoTiff DEM as contours in postgis. 
In the following command, the `-nln` argument name the table that contains the data, 
the `-a` argument name the column that contains the elevation, 
the `-i` argument specifies the interval in meters at which contours are generated. 

```
gdal_contour \
  -a elevation -nln aster_dem -i 10 \
  -f PostgreSQL \
  examples/contour/liecthenstein-aster-dem-v2-3857.tif "PG:host=localhost user=baremaps password=baremaps dbname=baremaps"
```

Some index can now be added to the database to improve performances. 
When available, a smoothing function such as `ST_ChaikinSmoothing` can be used to improve rendering of the contours. 

```postgresql
DROP INDEX IF EXISTS aster_dem_gix;
CREATE INDEX CONCURRENTLY IF NOT EXISTS aster_dem_gix ON aster_dem USING SPGIST(wkb_geometry);
```

## Conclusion

In this tutorial, we learnt how to import contour lines in PostGIS.

Now that you have inserted the contour data into the PostGIS database, you can use follow the [Serve Vector Tiles from PostGIS](/examples/serve-vector-tiles) example to serve
your PostGIS data directly as Vector Tiles in a web application with live reload capabilities.
