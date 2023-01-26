---
layout: default
title: How to build with Maven
permalink: /developer-manual/how-to-build-with-maven/
---

# How to Build with Maven

> If you are using Windows, you will need to use mvnw.cmd instead of ./mvnw and use set instead of export to set the environment variable.

Navigate to the root directory of your project. 

To to build the project without running the tests run the command: 

```
./mvnw clean install -DskipTests 
```

To unzip the distribution, run the command:

```
unzip ./baremaps-cli/target/baremaps.zip
```


To add the distribution to your system's PATH environment variable, run the command: 

```
export PATH=$PATH:pwd/baremaps
```
