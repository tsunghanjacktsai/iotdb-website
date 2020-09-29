(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{624:function(e,t,a){"use strict";a.r(t);var o=a(69),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"comparison"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comparison"}},[e._v("#")]),e._v(" Comparison")]),e._v(" "),a("h2",{attrs:{id:"known-time-series-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#known-time-series-database"}},[e._v("#")]),e._v(" Known Time Series Database")]),e._v(" "),a("p",[e._v("As the time series data is more and more important,\nseveral open sourced time series databases are intorduced in the world.\nHowever, few of them are developed for IoT or IIoT (Industrial IoT) scenario in particular.")]),e._v(" "),a("p",[e._v("We choose 3 kinds of TSDBs here.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("InfluxDB - Native Time series database")]),e._v(" "),a("p",[e._v("InfluxDB is one of the most popular TSDBs.")]),e._v(" "),a("p",[e._v("Interface: InfluxQL and HTTP API")])]),e._v(" "),a("li",[a("p",[e._v("OpenTSDB and KairosDB - Time series database based on NoSQL")]),e._v(" "),a("p",[e._v("These two DBs are similar, while the first is based on HBase and the second is based on Cassandra.\nBoth of them provides RESTful style API.")]),e._v(" "),a("p",[e._v("Interface: Restful API")])]),e._v(" "),a("li",[a("p",[e._v("TimesacleDB - Time series database based on Relational Database")]),e._v(" "),a("p",[e._v("Interface: SQL")])])]),e._v(" "),a("p",[e._v("Prometheus and Druid are also famous for time series data management.\nHowever, Prometheus focuses on how to collect data, how to visualize data and how to alert warnings.\nDruid focuses on how to analyze data with OLAP workload. We omit them here.")]),e._v(" "),a("h2",{attrs:{id:"comparison-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comparison-2"}},[e._v("#")]),e._v(" Comparison")]),e._v(" "),a("p",[e._v("We compare the above time series database from two aspects: the feature comparison and the performance\ncomparison.")]),e._v(" "),a("h3",{attrs:{id:"feature-comparison"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feature-comparison"}},[e._v("#")]),e._v(" Feature Comparison")]),e._v(" "),a("p",[e._v("I list the basic features comparison of these databases.")]),e._v(" "),a("p",[e._v("Legend:")]),e._v(" "),a("ul",[a("li",[e._v("O: big support greatly")]),e._v(" "),a("li",[e._v("o: support")]),e._v(" "),a("li",[e._v("x: not support")]),e._v(" "),a("li",[e._v("😦 : support but not very good")]),e._v(" "),a("li",[e._v("?: unknown")])]),e._v(" "),a("h4",{attrs:{id:"basic-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-features"}},[e._v("#")]),e._v(" Basic Features")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("TSDB")]),e._v(" "),a("th",[e._v("IoTDB")]),e._v(" "),a("th",[e._v("InfluxDB")]),e._v(" "),a("th",[e._v("OpenTSDB")]),e._v(" "),a("th",[e._v("KairosDB")]),e._v(" "),a("th",[e._v("TimescaleDB")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("OpenSource")]),e._v(" "),a("td",[a("strong",[e._v("o")])]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[a("strong",[e._v("o")])]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("SQL-like")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[a("strong",[e._v("O")])])]),e._v(" "),a("tr",[a("td",[e._v("Schema")]),e._v(" "),a("td",[e._v('"Tree-based, tag-based"')]),e._v(" "),a("td",[e._v("tag-based")]),e._v(" "),a("td",[e._v("tag-based")]),e._v(" "),a("td",[e._v("tag-based")]),e._v(" "),a("td",[e._v("Relational")])]),e._v(" "),a("tr",[a("td",[e._v("Writing out-of-order data")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Schema-less")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Batch insertion")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Time range filter")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Order by time")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Value filter")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Downsampling")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Fill")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("LIMIT")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("SLIMIT")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("?")])]),e._v(" "),a("tr",[a("td",[e._v("Latest value")]),e._v(" "),a("td",[e._v("O")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("o")])])])]),e._v(" "),a("p",[a("strong",[e._v("Details")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("OpenSource:")]),e._v(" "),a("ul",[a("li",[e._v("IoTDB uses Apache License 2.0 and it is in Apache incubator.")]),e._v(" "),a("li",[e._v("InfluxDB uses MIT license. However, "),a("strong",[e._v("the cluster version is not open sourced")]),e._v(".")]),e._v(" "),a("li",[e._v("OpenTSDB uses LGPL2.1, which "),a("strong",[e._v("is not compatible with Apache License")]),e._v(".")]),e._v(" "),a("li",[e._v("KairosDB uses Apache License 2.0.")]),e._v(" "),a("li",[e._v("TimescaleDB uses Timescale License, which is not free for enterprise.")])])]),e._v(" "),a("li",[a("p",[e._v("SQL like:")]),e._v(" "),a("ul",[a("li",[e._v("IoTDB and InfluxDB supports SQL like language. Besides, The integration of IoTDB and Calcite is alomost done (a PR has been submitted), which means IoTDB will support Standard SQL.")]),e._v(" "),a("li",[e._v("OpenTSDB and KairosDB only support Rest API. Besides, IoTDB also supports Rest API (a PR has been submitted).")]),e._v(" "),a("li",[e._v("TimescaleDB uses the SQL the same with PG.")])])]),e._v(" "),a("li",[a("p",[e._v("Schema:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("IoTDB: IoTDB proposes a "),a("a",{attrs:{href:"http://iotdb.apache.org/UserGuide/Master/Concept/Data%20Model%20and%20Terminology.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tree based schema"),a("OutboundLink")],1),e._v(".\nIt is quite different with other TSDBs. However, the kind of schema has the following advantages:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("In many industrial scenarios, the management of devices are hierarchical, rather than flat.\nThat is why we think a tree based schema is better than tag-value based schema.")])]),e._v(" "),a("li",[a("p",[e._v('In many real world applications, tag names are constant. For example, a wind turbine manufacturer\nalways identify their wind turbines by which country it locates, the farm name it belongs to, and its ID in the farm.\nSo, a 4-depth tree ("root.the-country-name.the-farm-name.the-id") is fine.\nYou do not need to repeat to tell IoTDB the 2nd level of the tree is for country name,\nthe 3rd level is for farm id, etc..')])]),e._v(" "),a("li",[a("p",[e._v('A path based time series ID definition also supports flexible queries, like "root.*.a.b.*", wehre * is wildcard character.')])])])]),e._v(" "),a("li",[a("p",[e._v("InfluxDB, KairosDB, OpenTSDB are tag-value based, which is more popular currently.")])]),e._v(" "),a("li",[a("p",[e._v("TimescaleDB uses relational table.")])])])]),e._v(" "),a("li",[a("p",[e._v("Order by time:")]),e._v(" "),a("p",[e._v("Order by time seems quite trivil for time series database. But... if we consider another feature, called align by time,\nsomething becomes interesting.  And, that is why we mark OpenTSDB and KairosDB unsupported.")]),e._v(" "),a("p",[e._v("Actually, in each time series, all these TSDBs support order data by timestamps.")]),e._v(" "),a("p",[e._v("However, OpenTSDB and KairosDB do not support order the data from different timeseries in the time order.")]),e._v(" "),a("p",[e._v("Ok, considering a new case: I have two time series, one is for the wind speed in wind farm1,\nanother is for the generated energy of wind turbine1 in farm1. If we want to analyze the relation between the\nwind speed and the generated energy, we have to know the values of both at the same time.\nThat is to say, we have to align the two time series in the time dimension.")]),e._v(" "),a("p",[e._v("So, the result should be:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("timestamp")]),e._v(" "),a("th",[e._v("wind speed")]),e._v(" "),a("th",[e._v("generated energy")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("5.0")]),e._v(" "),a("td",[e._v("13.1")])]),e._v(" "),a("tr",[a("td",[e._v("2")]),e._v(" "),a("td",[e._v("6.0")]),e._v(" "),a("td",[e._v("13.3")])]),e._v(" "),a("tr",[a("td",[e._v("3")]),e._v(" "),a("td",[e._v("null")]),e._v(" "),a("td",[e._v("13.1")])])])]),e._v(" "),a("p",[e._v("or,")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("timestamp")]),e._v(" "),a("th",[e._v("series name")]),e._v(" "),a("th",[e._v("value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("wind speed")]),e._v(" "),a("td",[e._v("5.0")])]),e._v(" "),a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("generated energy")]),e._v(" "),a("td",[e._v("13.1")])]),e._v(" "),a("tr",[a("td",[e._v("2")]),e._v(" "),a("td",[e._v("wind speed")]),e._v(" "),a("td",[e._v("6.0")])]),e._v(" "),a("tr",[a("td",[e._v("2")]),e._v(" "),a("td",[e._v("generated energy")]),e._v(" "),a("td",[e._v("13.3")])]),e._v(" "),a("tr",[a("td",[e._v("3")]),e._v(" "),a("td",[e._v("generated energy")]),e._v(" "),a("td",[e._v("13.1")])])])])])]),e._v(" "),a("p",[e._v("Though the second table format does not align data by the time dimension, but it is easy to be implemented in the client-side,\nby just scanning data row by row.")]),e._v(" "),a("p",[e._v("IoTDB supports the first table format (called align by time), InfluxDB supports the second table format.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Downsampling:")]),e._v(" "),a("p",[e._v("Downsampling is for changing the granularity of timeseries, e.g., from 10Hz to 1Hz, or 1 point per day.")]),e._v(" "),a("p",[e._v("Different with other systems, IoTDB downsamples data in real time, while others serialized downsampled data on disk."),a("br"),e._v("\nThat is to say,")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("IoTDB supports "),a("strong",[e._v("adhoc")]),e._v(" downsampling data in "),a("strong",[e._v("arbitrary time")]),e._v(".\ne.g., a SQL returns 1 point per 5 minutes and start with 2020-04-27 08:00:00 while another SQL returns 1 point per 5 minutes + 10 seconds and start with 2020-04-27 08:00:01.\n（InfluxDB also supports adhoc downsampling but the performance is ..... hm)")])]),e._v(" "),a("li",[a("p",[e._v("There is no disk loss for IoTDB.")])])])]),e._v(" "),a("li",[a("p",[e._v("Fill:")]),e._v(" "),a("p",[e._v("Sometimes we thought the data is collected in some fixed frequency, e.g., 1Hz (1 point per second).\nBut usually, we may lost some data points, because the network is unstable, the machine is busy, or the machine is down for several minutes.")]),e._v(" "),a("p",[e._v("In this case, filling these holes is important. Data scientists can avoid to many so called dirty work, e.g., data clean.")]),e._v(" "),a("p",[e._v("InfluxDB and OpenTSDB only support using fill in a group by statement, while IoTDB supports to fill data when just given a particular timestamp.\nBesides, IoTDB supports several strategies for filling data.")])]),e._v(" "),a("li",[a("p",[e._v("Slimit:")]),e._v(" "),a("p",[e._v("Slimit means return limited number of measurements (or, fields in InfluxDB).\nFor example, a wind turbine may have 1000 measurements (speed, voltage, etc..), using slimit and soffset can just return a part of them.")])]),e._v(" "),a("li",[a("p",[e._v("Latest value:")]),e._v(" "),a("p",[e._v("As one of the most basic timeseries based applications is monitoring the latest data.\nTherefore, a query to return the latest value of a time series is very important.\nIoTDB and OpenTSDB support that with a special SQL or API,\nwhile InfluxDB supports that using an aggregation function.\n(the reason why IoTDB provides a special SQL is IoTDB optimizes the query expressly.)")])])]),e._v(" "),a("p",[a("strong",[e._v("Conclusion")]),e._v(":")]),e._v(" "),a("p",[e._v("Well, if we compare the basic features, we can find that OpenTSDB and KairosDB somehow lack some important query features.\nTimescaleDB can not be freely used in business.\nIoTDB and InfluxDB can meet most requirements of time series data management, while they have some difference.")]),e._v(" "),a("h4",{attrs:{id:"advanced-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-features"}},[e._v("#")]),e._v(" Advanced Features")]),e._v(" "),a("p",[e._v("I listed some interesting features that these systems may differ.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("TSDB")]),e._v(" "),a("th",[e._v("IoTDB")]),e._v(" "),a("th",[e._v("InfluxDB")]),e._v(" "),a("th",[e._v("OpenTSDB")]),e._v(" "),a("th",[e._v("KairosDB")]),e._v(" "),a("th",[e._v("TimescaleDB")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Align by time")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Compression")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("😦")]),e._v(" "),a("td",[e._v("😦")]),e._v(" "),a("td",[e._v("😦")]),e._v(" "),a("td",[e._v("😦")])]),e._v(" "),a("tr",[a("td",[e._v("MQTT support")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("😦")])]),e._v(" "),a("tr",[a("td",[e._v("Run on Edge-side Device")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("😦")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Multi-instance Sync")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")])]),e._v(" "),a("tr",[a("td",[e._v("JDBC Driver")]),e._v(" "),a("td",[a("strong",[e._v("o")])]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")])]),e._v(" "),a("tr",[a("td",[e._v("Standard SQL")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[a("strong",[e._v("O")])])]),e._v(" "),a("tr",[a("td",[e._v("Spark integration")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")])]),e._v(" "),a("tr",[a("td",[e._v("Hive integration")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")])]),e._v(" "),a("tr",[a("td",[e._v("Writing data to NFS (HDFS)")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")])]),e._v(" "),a("tr",[a("td",[e._v("Flink integration")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")])])])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Align by time: have been introduced. Let's skip it..")])]),e._v(" "),a("li",[a("p",[e._v("Compression:")]),e._v(" "),a("ul",[a("li",[e._v("IoTDB supports many encoding and compression for time series, like RLE, 2DIFF, Gorilla, etc.. and Snappy compression.\nIn IoTDB, you can choose which encoding method you want, according to the data distribution. For more info, see "),a("a",{attrs:{href:"http://iotdb.apache.org/UserGuide/Master/Concept/Encoding.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("InfluxDB also supports encoding and compression, but you can not define which encoding method you want.\nIt just depends on the data type. For more info, see "),a("a",{attrs:{href:"https://docs.influxdata.com/influxdb/v1.7/concepts/storage_engine/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("OpenTSDB and KairosDB use HBase and Cassandra in backend, and have no special encoding for time series.")])])]),e._v(" "),a("li",[a("p",[e._v("MQTT protocol support:")]),e._v(" "),a("p",[e._v("MQTT protocol is an international standard and widely known in industrial users. only IoTDB and InfluxDB support user using MQTT client to write data.")])]),e._v(" "),a("li",[a("p",[e._v("Running on Edge-side Device:")]),e._v(" "),a("p",[e._v("Nowdays, edge computing is more and more popular, which means the edge device has more powerful compution resources.\nDeploying a TSDB on the edge side is useful for managing data on the edge side and serve for edge computing.\nAs OpenTSDB and KairosDB rely another DB, the architecture is a little heavy. Especially, it is hard to run Hadoop on the edge side.")])]),e._v(" "),a("li",[a("p",[e._v("Multi-instance Sync:")]),e._v(" "),a("p",[e._v("Ok, now we have many TSDB instances on the edge-side. Then, how to upload their data to the data center, to form a ... data lake (or ocean, river,..., whatever).\nOne choice is read data from these instances and write the data point by point to the data center instance.\nIoTDB provides another choice, just uploading the data file into the data center incrementally, then the data center can support service on the data.")])]),e._v(" "),a("li",[a("p",[e._v("JDBC driver:")]),e._v(" "),a("p",[e._v("Now only IoTDB supports a JDBC driver (though not all interfaces are implemented), and makes it possible to integrate many other JDBC driver based softwares.")])]),e._v(" "),a("li",[a("p",[e._v("Standard SQL:")]),e._v(" "),a("p",[e._v("As mentioned, the integration of IoTDB and Calcite is almost done (a PR has been submitted), which means IoTDB will support Standard SQL.")])]),e._v(" "),a("li",[a("p",[e._v("Spark and Hive integration:")]),e._v(" "),a("p",[e._v("It is very very important that letting big data analysis software to access the data in database for more complex data analysis.\nIoTDB supports Hive-connector and Spark connector for better integration.")])]),e._v(" "),a("li",[a("p",[e._v("Writing data to NFS (HDFS):\nSharing nothing architecture is good, but sometimes you have to add new servers even your CPU and memory is idle but the disk is full...\nBesides, if we can save the data file directly to HDFS, it will be more easy to use Spark and other softwares to analyze data, without ETL.")])]),e._v(" "),a("li",[a("p",[e._v("IoTDB supports write data locally or on HDFS directly. IoTDB also allows user extend to store data on other NFS.")])]),e._v(" "),a("li",[a("p",[e._v("InfluxDB, KairosDB have to write data locally.")])]),e._v(" "),a("li",[a("p",[e._v("OpenTSDB has to write data on HDFS.")])])]),e._v(" "),a("p",[a("strong",[e._v("Conclusion")]),e._v(":")]),e._v(" "),a("p",[e._v("We can find that IoTDB has many powerful features that other TSDBs do not support.")]),e._v(" "),a("h3",{attrs:{id:"performance-comparison"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-comparison"}},[e._v("#")]),e._v(" Performance Comparison")]),e._v(" "),a("p",[e._v('Ok... If you say, "well, I just want to use the basic features. If so, IoTDB has little difference with others.".\nIt is somehow right. But, if you consider the performance, you may change your mind.')]),e._v(" "),a("h4",{attrs:{id:"quick-review"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-review"}},[e._v("#")]),e._v(" quick review")]),e._v(" "),a("p",[e._v("Given a workload:")]),e._v(" "),a("ul",[a("li",[e._v("Write:")])]),e._v(" "),a("p",[e._v("10 clients write data concurrently. The number of storage group is 50. There are 1000 devices and each device has 100 measurements (i.e.,, 100K time series totally).\nThe data type is float and IoTDB uses RLE encoding and Snappy compression.\nIoTDB uses batch insertion API and the batch size is 100 (write 100 data points per write API call).")]),e._v(" "),a("ul",[a("li",[e._v("Read:")])]),e._v(" "),a("p",[e._v("50 clients read data concurrently. Each client just read data from 1 device with 10 measurements in one storage group.")]),e._v(" "),a("p",[e._v("IoTDB is v0.9.0.")]),e._v(" "),a("p",[a("strong",[e._v("Write performance")]),e._v(":")]),e._v(" "),a("p",[e._v("We write 112GB data totally.")]),e._v(" "),a("p",[e._v("The write throughput (points/second) is:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/1021782/80472896-f1db0e00-8977-11ea-9424-96bf0021588d.png",alt:"Write Throughput (points/second)"}}),e._v(" "),a("span",{attrs:{id:"exp1"}},[a("center",[e._v("Figure 1. Write throughput (points/second) IoTDB v0.9")])],1)]),e._v(" "),a("p",[e._v("The disk occupation is:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/1021782/80472899-f3a4d180-8977-11ea-8233-268ad4e3713e.png",alt:"Disk Occupation"}}),e._v(" "),a("center",[e._v("Figure 2. Disk occupation(GB) IoTDB v0.9")])],1),e._v(" "),a("p",[a("strong",[e._v("Query performance")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/1021782/80472924-fef7fd00-8977-11ea-9ad4-b4d3c899605e.png",alt:"Aggregation query"}}),e._v(" "),a("center",[e._v("Figure 3. Aggregation query time cost(ms) IoTDB v0.9")])],1),e._v(" "),a("p",[e._v("We can see that IoTDB outperforms others.")]),e._v(" "),a("h4",{attrs:{id:"more-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-details"}},[e._v("#")]),e._v(" More details")]),e._v(" "),a("p",[e._v("We provide a benchmarking tool, called IoTDB-benchamrk (https://github.com/thulab/iotdb-benchmark, you may have to use the dev branch to compile it),\nit supports IoTDB, InfluxDB, KairosDB, TimescaleDB, OpenTSDB. We have a "),a("a",{attrs:{href:"https://arxiv.org/abs/1901.08304",target:"_blank",rel:"noopener noreferrer"}},[e._v("article"),a("OutboundLink")],1),e._v(" for comparing these systems using the benchmark tool.\nWhen we publishing the article, IoTDB just entered Apache incubator, so we deleted the performance of IoTDB in that article. But we really did the comparison, and I will\ndisclose some results here.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("IoTDB: 0.8.0")]),e._v(". (notice: "),a("strong",[e._v("IoTDB v0.9 outperforms than v0.8")]),e._v(", we will update the result once we finish the experiments on v0.9)")]),e._v(" "),a("li",[e._v("InfluxDB: 1.5.1.")]),e._v(" "),a("li",[e._v("OpenTSDB: 2.3.1 (HBase 1.2.8)")]),e._v(" "),a("li",[e._v("KairosDB: 1.2.1 (Cassandra 3.11.3)")]),e._v(" "),a("li",[e._v("TimescaleDB: 1.0.0 (PostgreSQL 10.5)")])]),e._v(" "),a("p",[e._v("All TSDB run on the same server one by one.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("For InfluxDB, we set the cache-max-memory-size  and max-series-perbase as unlimited (otherwise it will be timeout quickly)")])]),e._v(" "),a("li",[a("p",[e._v("For OpenTSDB, we modified tsd.http.request.enable_chunked, tsd.http.request.max_chunk and tsd.storage.fix_duplicates for supporting write data in batch\nand write out-of-order data.")])]),e._v(" "),a("li",[a("p",[e._v("For KairosDB, we set Cassandra's read_repair_chance as 0.1 (However it has no effect because we just have one node).")])]),e._v(" "),a("li",[a("p",[e._v("For TimescaleDB, we use PGTune tool to optimize PostgreSQL.")])])]),e._v(" "),a("p",[e._v("All TSDBs run on a server with Intel Xeon CPU E5-2697 v4 @2.3GHz, 256GB memory and 10 HDD disks with RAID-5.\nThe OS is Ubuntu 16.04.2 LTS, 64bits.")]),e._v(" "),a("p",[e._v("Another server run IoTDB benchmark tool.")]),e._v(" "),a("p",[e._v("I omit the detailed workload here, let's see the result:")]),e._v(" "),a("p",[e._v("Legend:")]),e._v(" "),a("ul",[a("li",[e._v("I: InfluxDB")]),e._v(" "),a("li",[e._v("O: OpenTSDB")]),e._v(" "),a("li",[e._v("T: TimescaleDB")]),e._v(" "),a("li",[e._v("K: KairosDB")]),e._v(" "),a("li",[a("strong",[e._v("D: IoTDB")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/1021782/80476160-95c6b880-897c-11ea-9bb3-9d810cc0c79e.png",alt:"Write experiments"}}),e._v(" "),a("span",{attrs:{id:"exp4"}},[a("center",[e._v("Figure 4. Write experiments IoTDB v0.8.0")])],1)]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/1021782/80476181-9c553000-897c-11ea-8170-4768134f5841.png",alt:"Query experiments"}}),e._v(" "),a("center",[e._v("Figure 5. Query experiments IoTDB v0.8.0")])],1),e._v(" "),a("p",[e._v("We can see that IoTDB outperforms others hugely.")]),e._v(" "),a("p",[e._v("In "),a("a",{attrs:{href:"#exp4"}},[e._v("Figure. 4(c)")]),e._v(", when the batch size reaches to 10000 points, InfluxDB is better than IoTDB v0.8.\nIt is because in IoTDB v0.8, batch insert API is not optimized.")]),e._v(" "),a("p",[e._v("From IoTDB v0.9 on, using batch insert API can obtain 8 to 10 times write performance improvement.")]),e._v(" "),a("p",[e._v("For example, using IoTDB v0.8, the write throughput can only reach to 6 million data points per second.\nBut using IoTDB v0.9, the write throughput can reach to 40 million data points per second on the same server with the same workload.\n(see "),a("a",{attrs:{href:"#exp4"}},[e._v("Figure. 4(a)")]),e._v(" vs "),a("a",{attrs:{href:"#exp1"}},[e._v("Figure. 1")]),e._v(").")]),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("If you are considering to find a TSDB for your IIoT application, then Apache IoTDB, a new time series, is your best choice.")]),e._v(" "),a("p",[e._v("We will update this page once we release new version and finish the experiments.\nWe also welcome more contributors correct this article and contribute IoTDB and reproduce experiments.")])])}),[],!1,null,null,null);t.default=s.exports}}]);