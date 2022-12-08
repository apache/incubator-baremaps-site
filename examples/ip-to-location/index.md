---
layout: default
title: Create an IP to location web service
permalink: /examples/ip-to-location/
---

# Create an IP to location web service

In this tutorial, we demonstrate how to create an IP to location index and then serve it in a simple web application.

## Dataset

The data used to create an IP to location index is publicly available from the 5 [Regional Internet Registries (RIRs)](https://whatismyipaddress.com/rir)

Here is the list of the 5 RIRs.

- [ARIN](https://www.arin.net/)
- [LACNIC](https://www.lacnic.net/)
- [AFRINIC](https://afrinic.net/)
- [RIPE NCC](https://www.ripe.net/)
- [APNIC](https://www.apnic.net/)

These Regional Internet Registries contain records that link IP address ranges to organisations along with some metadata.
It is not always possible to extract meaningful data from these registries because they are not normalised.

## Generate the index

The workflow executed in the following command contains multiple steps.

- Download and decompress the data from the RIRs
- Download and create a Geocoding index (see the [Geocoding](/examples/geocoding/) example)
- Iterate over every entry in the registries to extract the IP address ranges and the associated metadata to query the Geocoding index and extract a latitude and a longitude.

```
baremaps workflow execute --file examples/geocoding/workflow.json
```

## Serve the data

The following command will serve the Geonames index over HTTP in a simple web application.

```
iploc serve --database iploc.db --port 3000
```

Go to [http://localhost:3000/](http://localhost:3000/) to see it in action.

## Conclusion

In this tutorial, we learnt how to create an IP to location index and serve it in a simple web application.
IP to location has many uses, one of which is to locate users that connect to a website to generate statistics.