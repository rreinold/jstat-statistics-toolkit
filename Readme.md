# jstat-statistics-toolkit

## Overview

<img src="https://i.imgur.com/9oluUP8.png" alt="Drawing" style="width: 100%;"/>

Big Data is demanding, so a wide range of powerful statistics tools are essential. This is a JS Library you can use within your code services to compute  against multi-dimensional datasets, build statistics models, detect anomalies, and more.

## Setup 
User just need to import the library in the code service and access it using a `jStat` Object.

## Usage

There are numerous example which can be run out of the box. The example services show few of them.

## Assets
### Code Libraries
JStatLib - Core library, accessible as `jStat` Object

### Code Services
#### Example

* `JStatExampleGenerateData` - Generates 100 datapoints, stores in `vibration_sensor_1` Collection 
* `JStatExampleNormalDeviate` - Create a normal deviate dataset
* `JStatExampleNormalDistributionAdvanced` - Pull dataset from collection, build model
* `JStatExampleNormalDistributionStatic` - Use static dataset, build model	
#### Test
* `JStatTestSmoke` - Smoke test for jStat library

### Portals

`JStatStatistics` - Visualize raw data and models

### Collections

`vibration_sensor_1` - Stores x,y sensor data
## API

Documentation for jStat can be found at [http://jstat.github.io/](http://jstat.github.io/)
