(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{776:function(e,t,a){"use strict";a.r(t);var o=a(69),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"comparison"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comparison"}},[e._v("#")]),e._v(" Comparison")]),e._v(" "),a("h2",{attrs:{id:"known-time-series-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#known-time-series-database"}},[e._v("#")]),e._v(" Known Time Series Database")]),e._v(" "),a("p",[e._v("As the time series data becomes more and more important,\nseveral open sourced time series databases are introduced to the world.\nHowever, few of them are developed for IoT or IIoT (Industrial IoT) scenario in particular.")]),e._v(" "),a("p",[e._v("3 kinds of TSDBs are compared here.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("InfluxDB - Native Time series database")]),e._v(" "),a("p",[e._v("InfluxDB is one of the most popular TSDBs.")]),e._v(" "),a("p",[e._v("Interface: InfluxQL and HTTP API")])]),e._v(" "),a("li",[a("p",[e._v("OpenTSDB and KairosDB - Time series database based on NoSQL")]),e._v(" "),a("p",[e._v("These two DBs are similar, while the first is based on HBase and the second is based on Cassandra.\nBoth of them provides RESTful style API.")]),e._v(" "),a("p",[e._v("Interface: Restful API")])]),e._v(" "),a("li",[a("p",[e._v("TimescaleDB - Time series database based on Relational Database")]),e._v(" "),a("p",[e._v("Interface: SQL")])])]),e._v(" "),a("p",[e._v("Prometheus and Druid are also famous for time series data management.\nHowever, Prometheus focuses data collection, data visualization and alert warnings.\nDruid focuses on data analysis with OLAP workload. We omit them here.")]),e._v(" "),a("h2",{attrs:{id:"comparison-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comparison-2"}},[e._v("#")]),e._v(" Comparison")]),e._v(" "),a("p",[e._v("The above time series databases are compared from two aspects: the feature comparison and the performance\ncomparison.")]),e._v(" "),a("h3",{attrs:{id:"feature-comparison"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feature-comparison"}},[e._v("#")]),e._v(" Feature Comparison")]),e._v(" "),a("p",[e._v("I list the basic features comparison of these databases.")]),e._v(" "),a("p",[e._v("Legend:")]),e._v(" "),a("ul",[a("li",[e._v("O: big support greatly")]),e._v(" "),a("li",[e._v("o: support")]),e._v(" "),a("li",[e._v("x: not support")]),e._v(" "),a("li",[e._v("😦 : support but not very good")]),e._v(" "),a("li",[e._v("?: unknown")])]),e._v(" "),a("h4",{attrs:{id:"basic-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-features"}},[e._v("#")]),e._v(" Basic Features")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("TSDB")]),e._v(" "),a("th",[e._v("IoTDB")]),e._v(" "),a("th",[e._v("InfluxDB")]),e._v(" "),a("th",[e._v("OpenTSDB")]),e._v(" "),a("th",[e._v("KairosDB")]),e._v(" "),a("th",[e._v("TimescaleDB")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("OpenSource")]),e._v(" "),a("td",[a("strong",[e._v("o")])]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[a("strong",[e._v("o")])]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("SQL-like")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[a("strong",[e._v("O")])])]),e._v(" "),a("tr",[a("td",[e._v("Schema")]),e._v(" "),a("td",[e._v('"Tree-based, tag-based"')]),e._v(" "),a("td",[e._v("tag-based")]),e._v(" "),a("td",[e._v("tag-based")]),e._v(" "),a("td",[e._v("tag-based")]),e._v(" "),a("td",[e._v("Relational")])]),e._v(" "),a("tr",[a("td",[e._v("Writing out-of-order data")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Schema-less")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Batch insertion")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Time range filter")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Order by time")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Value filter")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Downsampling")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Fill")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("LIMIT")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("SLIMIT")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("?")])]),e._v(" "),a("tr",[a("td",[e._v("Latest value")]),e._v(" "),a("td",[e._v("O")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("o")])])])]),e._v(" "),a("p",[a("strong",[e._v("Details")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("OpenSource:")]),e._v(" "),a("ul",[a("li",[e._v("IoTDB uses Apache License 2.0.")]),e._v(" "),a("li",[e._v("InfluxDB uses MIT license. However, "),a("strong",[e._v("the cluster version is not open sourced")]),e._v(".")]),e._v(" "),a("li",[e._v("OpenTSDB uses LGPL2.1, which "),a("strong",[e._v("is not compatible with Apache License")]),e._v(".")]),e._v(" "),a("li",[e._v("KairosDB uses Apache License 2.0.")]),e._v(" "),a("li",[e._v("TimescaleDB uses Timescale License, which is not free for enterprise.")])])]),e._v(" "),a("li",[a("p",[e._v("SQL like:")]),e._v(" "),a("ul",[a("li",[e._v("IoTDB and InfluxDB support SQL like language. In addition, the integration of IoTDB and Calcite is almost done (a PR has been submitted), which means IoTDB will support Standard SQL soon.")]),e._v(" "),a("li",[e._v("OpenTSDB and KairosDB only support Rest API, while IoTDB also supports Rest API (a PR has been submitted).")]),e._v(" "),a("li",[e._v("TimescaleDB uses the SQL the same as PG.")])])]),e._v(" "),a("li",[a("p",[e._v("Schema:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("IoTDB: IoTDB proposes a "),a("a",{attrs:{href:"http://iotdb.apache.org/UserGuide/Master/Data-Concept/Data-Model-and-Terminology.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tree based schema"),a("OutboundLink")],1),e._v(".\nIt is quite different from other TSDBs. However, the kind of schema has the following advantages:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("In many industrial scenarios, the management of devices are hierarchical, rather than flat.\nThat is why we think a tree based schema is better than tag-value based schema.")])]),e._v(" "),a("li",[a("p",[e._v('In many real world applications, tag names are constant. For example, a wind turbine manufacturer\nalways identify their wind turbines by which country it locates, the farm name it belongs to, and its ID in the farm.\nSo, a 4-depth tree ("root.the-country-name.the-farm-name.the-id") is fine.\nYou do not need to repeat to tell IoTDB the 2nd level of the tree is for country name,\nthe 3rd level is for farm id, etc.')])]),e._v(" "),a("li",[a("p",[e._v('A path based time series ID definition also supports flexible queries, like "root.*.a.b.*", where * is wildcard character.')])])])]),e._v(" "),a("li",[a("p",[e._v("InfluxDB, KairosDB, OpenTSDB are tag-value based, which is more popular currently.")])]),e._v(" "),a("li",[a("p",[e._v("TimescaleDB uses relational table.")])])])]),e._v(" "),a("li",[a("p",[e._v("Order by time:")]),e._v(" "),a("p",[e._v("Order by time seems quite trivial for time series database. But... if we consider another feature, called align by time,\nsomething becomes interesting.  And, that is why we mark OpenTSDB and KairosDB unsupported.")]),e._v(" "),a("p",[e._v("Actually, in each time series, all these TSDBs support order data by timestamps.")]),e._v(" "),a("p",[e._v("However, OpenTSDB and KairosDB do not support order data from different timeseries in the time order.")]),e._v(" "),a("p",[e._v("Ok, consider a new case: I have two time series, one is for the wind speed in wind farm1,\nanother is for the generated energy of wind turbine1 in farm1. If we want to analyze the relation between the\nwind speed and the generated energy, we have to know the values of both at the same time.\nThat is to say, we have to align the two time series in the time dimension.")]),e._v(" "),a("p",[e._v("So, the result should be:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("timestamp")]),e._v(" "),a("th",[e._v("wind speed")]),e._v(" "),a("th",[e._v("generated energy")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("5.0")]),e._v(" "),a("td",[e._v("13.1")])]),e._v(" "),a("tr",[a("td",[e._v("2")]),e._v(" "),a("td",[e._v("6.0")]),e._v(" "),a("td",[e._v("13.3")])]),e._v(" "),a("tr",[a("td",[e._v("3")]),e._v(" "),a("td",[e._v("null")]),e._v(" "),a("td",[e._v("13.1")])])])]),e._v(" "),a("p",[e._v("or,")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("timestamp")]),e._v(" "),a("th",[e._v("series name")]),e._v(" "),a("th",[e._v("value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("wind speed")]),e._v(" "),a("td",[e._v("5.0")])]),e._v(" "),a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("generated energy")]),e._v(" "),a("td",[e._v("13.1")])]),e._v(" "),a("tr",[a("td",[e._v("2")]),e._v(" "),a("td",[e._v("wind speed")]),e._v(" "),a("td",[e._v("6.0")])]),e._v(" "),a("tr",[a("td",[e._v("2")]),e._v(" "),a("td",[e._v("generated energy")]),e._v(" "),a("td",[e._v("13.3")])]),e._v(" "),a("tr",[a("td",[e._v("3")]),e._v(" "),a("td",[e._v("generated energy")]),e._v(" "),a("td",[e._v("13.1")])])])])])]),e._v(" "),a("p",[e._v("Though the second table format does not align data by the time dimension, it is easy to be implemented in the client-side,\nby just scanning data row by row.")]),e._v(" "),a("p",[e._v("IoTDB supports the first table format (called align by time), InfluxDB supports the second table format.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Downsampling:")]),e._v(" "),a("p",[e._v("Downsampling is for changing the granularity of timeseries, e.g., from 10Hz to 1Hz, or 1 point per day.")]),e._v(" "),a("p",[e._v("Different from other systems, IoTDB downsamples data in real time, while others serialized downsampled data on disk."),a("br"),e._v("\nThat is to say,")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("IoTDB supports "),a("strong",[e._v("adhoc")]),e._v(" downsampling data in "),a("strong",[e._v("arbitrary time")]),e._v(".\ne.g., a SQL returns 1 point per 5 minutes and start with 2020-04-27 08:00:00 while another SQL returns 1 point per 5 minutes + 10 seconds and start with 2020-04-27 08:00:01.\n（InfluxDB also supports adhoc downsampling but the performance is ..... hm)")])]),e._v(" "),a("li",[a("p",[e._v("There is no disk loss for IoTDB.")])])])]),e._v(" "),a("li",[a("p",[e._v("Fill:")]),e._v(" "),a("p",[e._v("Sometimes we thought the data is collected in some fixed frequency, e.g., 1Hz (1 point per second).\nBut usually, we may lost some data points, because the network is unstable, the machine is busy, or the machine is down for several minutes.")]),e._v(" "),a("p",[e._v("In this case, filling these holes is important. Data scientists can avoid to many so called dirty work, e.g., data clean.")]),e._v(" "),a("p",[e._v("InfluxDB and OpenTSDB only support using fill in a group by statement, while IoTDB supports to fill data when just given a particular timestamp.\nBesides, IoTDB supports several strategies for filling data.")])]),e._v(" "),a("li",[a("p",[e._v("Slimit:")]),e._v(" "),a("p",[e._v("Slimit means return limited number of measurements (or, fields in InfluxDB).\nFor example, a wind turbine may have 1000 measurements (speed, voltage, etc..), using slimit and soffset can just return a part of them.")])]),e._v(" "),a("li",[a("p",[e._v("Latest value:")]),e._v(" "),a("p",[e._v("As one of the most basic timeseries based applications is monitoring the latest data.\nTherefore, a query to return the latest value of a time series is very important.\nIoTDB and OpenTSDB support that with a special SQL or API,\nwhile InfluxDB supports that using an aggregation function.\n(the reason why IoTDB provides a special SQL is IoTDB optimizes the query expressly.)")])])]),e._v(" "),a("p",[a("strong",[e._v("Conclusion")]),e._v(":")]),e._v(" "),a("p",[e._v("Well, if we compare the basic features, we can find that OpenTSDB and KairosDB somehow lack some important query features.\nTimescaleDB can not be freely used in business.\nIoTDB and InfluxDB can meet most requirements of time series data management, while they have some difference.")]),e._v(" "),a("h4",{attrs:{id:"advanced-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-features"}},[e._v("#")]),e._v(" Advanced Features")]),e._v(" "),a("p",[e._v("I listed some interesting features that these systems may differ.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("TSDB")]),e._v(" "),a("th",[e._v("IoTDB")]),e._v(" "),a("th",[e._v("InfluxDB")]),e._v(" "),a("th",[e._v("OpenTSDB")]),e._v(" "),a("th",[e._v("KairosDB")]),e._v(" "),a("th",[e._v("TimescaleDB")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Align by time")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Compression")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("😦")]),e._v(" "),a("td",[e._v("😦")]),e._v(" "),a("td",[e._v("😦")]),e._v(" "),a("td",[e._v("😦")])]),e._v(" "),a("tr",[a("td",[e._v("MQTT support")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("😦")])]),e._v(" "),a("tr",[a("td",[e._v("Run on Edge-side Device")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("😦")]),e._v(" "),a("td",[e._v("o")])]),e._v(" "),a("tr",[a("td",[e._v("Multi-instance Sync")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")])]),e._v(" "),a("tr",[a("td",[e._v("JDBC Driver")]),e._v(" "),a("td",[a("strong",[e._v("o")])]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")])]),e._v(" "),a("tr",[a("td",[e._v("Standard SQL")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[a("strong",[e._v("O")])])]),e._v(" "),a("tr",[a("td",[e._v("Spark integration")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")])]),e._v(" "),a("tr",[a("td",[e._v("Hive integration")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")])]),e._v(" "),a("tr",[a("td",[e._v("Writing data to NFS (HDFS)")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("o")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")])]),e._v(" "),a("tr",[a("td",[e._v("Flink integration")]),e._v(" "),a("td",[a("strong",[e._v("O")])]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")])])])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Align by time: have been introduced. Let's skip it..")])]),e._v(" "),a("li",[a("p",[e._v("Compression:")]),e._v(" "),a("ul",[a("li",[e._v("IoTDB supports many encoding and compression for time series, like RLE, 2DIFF, Gorilla, etc.. and Snappy compression.\nIn IoTDB, you can choose which encoding method you want, according to the data distribution. For more info, see "),a("a",{attrs:{href:"http://iotdb.apache.org/UserGuide/Master/Data-Concept/Encoding.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("InfluxDB also supports encoding and compression, but you can not define which encoding method you want.\nIt just depends on the data type. For more info, see "),a("a",{attrs:{href:"https://docs.influxdata.com/influxdb/v1.7/concepts/storage_engine/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("OpenTSDB and KairosDB use HBase and Cassandra in backend, and have no special encoding for time series.")])])]),e._v(" "),a("li",[a("p",[e._v("MQTT protocol support:")]),e._v(" "),a("p",[e._v("MQTT protocol is an international standard and widely known in industrial users. only IoTDB and InfluxDB support user using MQTT client to write data.")])]),e._v(" "),a("li",[a("p",[e._v("Running on Edge-side Device:")]),e._v(" "),a("p",[e._v("Nowdays, edge computing is more and more popular, which means the edge device has more powerful computational resources.\nDeploying a TSDB on the edge side is useful for managing data on the edge side and serve for edge computing.\nAs OpenTSDB and KairosDB rely another DB, the architecture is heavy. Especially, it is hard to run Hadoop on the edge side.")])]),e._v(" "),a("li",[a("p",[e._v("Multi-instance Sync:")]),e._v(" "),a("p",[e._v("Ok, now we have many TSDB instances on the edge-side. Then, how to upload their data to the data center, to form a ... data lake (or ocean, river,..., whatever).\nOne solution is to read data from these instances and write the data point by point to the data center instance.\nIoTDB provides another choice, which is just uploading the data file into the data center incrementally, then the data center can support service on the data.")])]),e._v(" "),a("li",[a("p",[e._v("JDBC driver:")]),e._v(" "),a("p",[e._v("Now only IoTDB supports a JDBC driver (though not all interfaces are implemented), and makes it possible to integrate many other JDBC driver based softwares.")])]),e._v(" "),a("li",[a("p",[e._v("Standard SQL:")]),e._v(" "),a("p",[e._v("As mentioned before, the integration of IoTDB and Calcite is almost done (a PR has been submitted), which means IoTDB will support Standard SQL.")])]),e._v(" "),a("li",[a("p",[e._v("Spark and Hive integration:")]),e._v(" "),a("p",[e._v("It is very important that letting big data analysis software to access the data in database for more complex data analysis.\nIoTDB supports Hive-connector and Spark connector for better integration.")])]),e._v(" "),a("li",[a("p",[e._v("Writing data to NFS (HDFS):\nSharing nothing architecture is good, but sometimes you have to add new servers even your CPU and memory is idle but the disk is full...\nBesides, if we can save the data file directly to HDFS, it will be more easy to use Spark and other softwares to analyze data, without ETL.")])]),e._v(" "),a("li",[a("p",[e._v("IoTDB supports writing data locally or on HDFS directly. IoTDB also allows user to extend to store data on other NFS.")])]),e._v(" "),a("li",[a("p",[e._v("InfluxDB, KairosDB have to write data locally.")])]),e._v(" "),a("li",[a("p",[e._v("OpenTSDB has to write data on HDFS.")])])]),e._v(" "),a("p",[a("strong",[e._v("Conclusion")]),e._v(":")]),e._v(" "),a("p",[e._v("We can find that IoTDB has many powerful features that other TSDBs do not support.")]),e._v(" "),a("h3",{attrs:{id:"performance-comparison"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-comparison"}},[e._v("#")]),e._v(" Performance Comparison")]),e._v(" "),a("p",[e._v('Ok... If you say, "well, I just want the basic features. IoTDB has little difference from others.".\nIt is somehow right. But, if you consider the performance, you may change your mind.')]),e._v(" "),a("h4",{attrs:{id:"quick-review"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-review"}},[e._v("#")]),e._v(" quick review")]),e._v(" "),a("ul",[a("li",[e._v("Write:")])]),e._v(" "),a("p",[e._v("We test the performance of writing from two aspects: "),a("em",[e._v("batch size")]),e._v(" and "),a("em",[e._v("client num")]),e._v(". The number of storage group is 10. There are 1000 devices and each device has 100 measurements(i.e.,, 100K time series total).")]),e._v(" "),a("ul",[a("li",[e._v("Read:")])]),e._v(" "),a("p",[e._v("10 clients read data concurrently. The number of storage group is 10. There are 10 devices and each device has 10 measurements (i.e.,, 100 time series total).\nThe data type is "),a("em",[e._v("double")]),e._v(", encoding type is "),a("em",[e._v("GORILLA")])]),e._v(" "),a("p",[e._v("The IoTDB version is v0.11.1.")]),e._v(" "),a("p",[a("strong",[e._v("Write performance")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("batch size:")])]),e._v(" "),a("p",[e._v("10 clients write data concurrently.\nIoTDB uses batch insertion API and the batch size is distributed from 1ms to 1min (write N data points per write API call).")]),e._v(" "),a("p",[e._v("The write throughput (points/second) is:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/24886743/106254214-6cacbe80-6253-11eb-8532-d6a1829f8f66.png",alt:"Batch Size with Write Throughput (points/second)"}}),e._v(" "),a("span",{attrs:{id:"exp1"}},[a("center",[e._v("Figure 1. Batch Size with Write throughput (points/second) IoTDB v0.11.1")])],1)]),e._v(" "),a("p",[e._v("The write delay (ms) is:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/24886743/106251391-df1b9f80-624f-11eb-9f1f-66823839acba.png",alt:"Batch Size with Write Delay (ms)"}}),e._v(" "),a("center",[e._v("Figure 2. Batch Size with Write Delay (ms) IoTDB v0.11.1")])],1),e._v(" "),a("ul",[a("li",[e._v("client num:")])]),e._v(" "),a("p",[e._v("The client num is distributed from 1 to 50.\nIoTDB uses batch insertion API and the batch size is 100 (write 100 data points per write API call).")]),e._v(" "),a("p",[e._v("The write throughput (points/second) is:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/24886743/106251411-e5aa1700-624f-11eb-8ca8-00c0627b1e96.png",alt:"Client Num with Write Throughput (points/second) (ms)"}}),e._v(" "),a("center",[e._v("Figure 3. Client Num with Write Throughput (points/second) IoTDB v0.11.1")])],1),e._v(" "),a("p",[a("strong",[e._v("Query performance")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/24886743/106251377-daef8200-624f-11eb-9678-b1d5440be2de.png",alt:"Raw data query 1 col"}}),e._v(" "),a("center",[e._v("Figure 4. Raw data query 1 col time cost(ms) IoTDB v0.11.1")])],1),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/24886743/106251336-cf03c000-624f-11eb-8395-de5e349f47b5.png",alt:"Aggregation query"}}),e._v(" "),a("center",[e._v("Figure 6. Aggregation query time cost(ms) IoTDB v0.11.1")])],1),e._v(" "),a("p",[a("img",{attrs:{src:"Query.pnghttps://user-images.githubusercontent.com/24886743/106251353-d32fdd80-624f-11eb-80c1-fdb4197939fe.png",alt:"Downsampling query"}}),e._v(" "),a("center",[e._v("Figure 7. Downsampling query time cost(ms) IoTDB v0.11.1")])],1),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/24886743/106251369-d7f49180-624f-11eb-9d19-fc7341582b90.png",alt:"Latest query"}}),e._v(" "),a("center",[e._v("Figure 8. Latest query time cost(ms) IoTDB v0.11.1")])],1),e._v(" "),a("p",[e._v("We can see that IoTDB outperforms others.")]),e._v(" "),a("h4",{attrs:{id:"more-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-details"}},[e._v("#")]),e._v(" More details")]),e._v(" "),a("p",[e._v("We provide a benchmarking tool, called IoTDB-benchamrk (https://github.com/thulab/iotdb-benchmark, you may have to use the dev branch to compile it),\nit supports IoTDB, InfluxDB, KairosDB, TimescaleDB, OpenTSDB. We have an "),a("a",{attrs:{href:"https://arxiv.org/abs/1901.08304",target:"_blank",rel:"noopener noreferrer"}},[e._v("article"),a("OutboundLink")],1),e._v(" for comparing these systems using the benchmark tool.\nWhen we publish the article, IoTDB just entered Apache incubator, so we deleted the performance of IoTDB in that article. But after comparison, some results are presented here.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("For InfluxDB, we set the cache-max-memory-size and the max-series-perbase as unlimited (otherwise it will be timeout quickly).")])]),e._v(" "),a("li",[a("p",[e._v("For KairosDB, we set Cassandra's read_repair_chance as 0.1 (However it has no effect because we just have one node).")])]),e._v(" "),a("li",[a("p",[e._v("For TimescaleDB, we use PGTune tool to optimize PostgreSQL.")])])]),e._v(" "),a("p",[e._v("All TSDBs run on a server with Intel(R) Core(TM) i7-10700 CPU @ 2.90GHz，(8 cores 16 threads), 32GB memory , 256G SSD and 10T HDD.\nThe OS is Ubuntu 16.04.7 LTS, 64bits.")]),e._v(" "),a("p",[e._v("All clients run on a server with Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz，(6 cores 12 threads), 16GB memory , 256G SSD.\nThe OS is Ubuntu 16.04.7 LTS, 64bits.")]),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("From all above experiments, we can see that IoTDB outperforms others hugely.\nIoTDB has the minimal write latency. The larger the batch size, the higher the write throughput of IoTDB. This indicates that IoTDB is most suitable for batch data writing scenarios.\nIn high concurrency scenarios, IoTDB can also maintain a steady growth in throughput. (12 million points per second may have reached the limit of gigabit network card)\nIn raw data query, as the query scope increases, the advantages of IoTDB begin to manifest. Because the granularity of data blocks is larger and the advantages of columnar storage are used, column-based compression and columnar iterators will both accelerate the query.\nIn aggregation query, we use the statistics of the file layer and cache the statistics. Therefore, multiple queries only need to perform memory calculations (do not need to traverse the original data points, and do not need to access the disk), so the aggregation performance advantage is obvious.\nDownsampling query scenarios is more interesting, as the time partition becomes larger and larger, the query performance of IoTDB increases gradually. Probably it has risen twice, which corresponds to the pre-calculated information of 2 granularities(3 hours and 4.5 days). Therefore, the queries in the range of 1 day and 1 week are accelerated respectively. The other databases only rose once, indicating that they only have one granular statistics.")]),e._v(" "),a("p",[e._v("If you are considering a TSDB for your IIoT application, Apache IoTDB, a new time series, is your best choice.")]),e._v(" "),a("p",[e._v("We will update this page once we release new version and finish the experiments.\nWe also welcome more contributors correct this article and contribute IoTDB and reproduce experiments.")])])}),[],!1,null,null,null);t.default=r.exports}}]);