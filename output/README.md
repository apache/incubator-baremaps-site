Apache Baremaps Website
---

This repository holds the content of the [baremaps.apache.org](https://baremaps.apache.org/) website.

The website is generated using [Jekyll](https://jekyllrb.com/),
as configured by the [.asf.yaml file](https://cwiki.apache.org/confluence/display/INFRA/Git+-+.asf.yaml+features#Git.asf.yamlfeatures-JekyllCMS)

Changes to the `main` branch should be live within a few minutes.

The website builds can be followed on [ci2.apache.org](https://ci2.apache.org/), the `jekyll_websites``
builder can be found at https://ci2.apache.org/#/builders/7 as I write this.

The Baremaps source code is at https://github.com/apache/incubator-baremaps

## How to stage changes
TODO, clarify the `.asf.yaml` setup for this.

## How to test the website locally

There are many ways to do this, including

    docker run -p 4000:4000 -v $(pwd):/site bretfisher/jekyll-serve
