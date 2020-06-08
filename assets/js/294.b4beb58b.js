(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{866:function(t,e,a){"use strict";a.r(e);var i=a(71),l=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"system-monitor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-monitor"}},[t._v("#")]),t._v(" System Monitor")]),t._v(" "),a("p",[t._v("Currently, IoTDB provides users to use Java's JConsole tool to monitor system status or use IoTDB's open API to check data status.")]),t._v(" "),a("h2",{attrs:{id:"system-status-monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-status-monitoring"}},[t._v("#")]),t._v(" System Status Monitoring")]),t._v(" "),a("p",[t._v("After starting JConsole tool and connecting to IoTDB server, you will have a basic look at IoTDB system status(CPU Occupation, in-memory information, etc.). See "),a("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/technotes/guides/management/jconsole.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("official documentation"),a("OutboundLink")],1),t._v(" for more informations.")]),t._v(" "),a("h3",{attrs:{id:"jmx-mbean-monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmx-mbean-monitoring"}},[t._v("#")]),t._v(" JMX MBean Monitoring")]),t._v(" "),a("p",[t._v("By using JConsole tool and connecting with JMX you can see some system statistics and parameters.\nThis section describes how to use the JConsole "),a("code",[t._v("Mbean")]),t._v(" tab to monitor the number of files opened by the IoTDB service process, the size of the data file, and so on. Once connected to JMX, you can find the "),a("code",[t._v("MBean")]),t._v(" named "),a("code",[t._v("org.apache.iotdb.service")]),t._v(" through the "),a("code",[t._v("MBeans")]),t._v(" tab, as shown in the following Figure.")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/20263106/53316064-54aec080-3901-11e9-9a49-76563ac09192.png"}}),t._v(" "),a("p",[t._v("There are several attributes under Monitor, including the numbers of files opened in different folders, the data file size statistics and the values of some system parameters. By double-clicking the value corresponding to an attribute it can also display a line chart of that attribute. In particular, all the opened file count statistics are currently only supported on "),a("code",[t._v("MacOS")]),t._v(" and most "),a("code",[t._v("Linux")]),t._v(" distro except "),a("code",[t._v("CentOS")]),t._v(". For the OS not supported these statistics will return "),a("code",[t._v("-2")]),t._v(". See the following section for specific introduction of the Monitor attributes.")]),t._v(" "),a("h4",{attrs:{id:"mbean-monitor-attributes-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mbean-monitor-attributes-list"}},[t._v("#")]),t._v(" MBean Monitor Attributes List")]),t._v(" "),a("ul",[a("li",[t._v("DataSizeInByte")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("DataSizeInByte")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The total size of data file.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Unit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Byte")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])])])]),t._v(" "),a("ul",[a("li",[t._v("FileNodeNum")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("FileNodeNum")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The count number of FileNode. (Currently not supported)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])])])]),t._v(" "),a("ul",[a("li",[t._v("OverflowCacheSize")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("OverflowCacheSize")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The size of out-of-order data cache. (Currently not supported)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Unit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Byte")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])])])]),t._v(" "),a("ul",[a("li",[t._v("BufferWriteCacheSize")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("BufferWriteCacheSize")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The size of BufferWriter cache. (Currently not supported)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Unit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Byte")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])])])]),t._v(" "),a("ul",[a("li",[t._v("BaseDirectory")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("BaseDirectory")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The absolute directory of data file.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])])])]),t._v(" "),a("ul",[a("li",[t._v("WriteAheadLogStatus")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("WriteAheadLogStatus")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The status of write-ahead-log (WAL). "),a("code",[t._v("True")]),t._v(" means WAL is enabled.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])])])]),t._v(" "),a("ul",[a("li",[t._v("TotalOpenFileNum")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TotalOpenFileNum")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("All the opened file number of IoTDB server process.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int")])])])]),t._v(" "),a("ul",[a("li",[t._v("DeltaOpenFileNum")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("DeltaOpenFileNum")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The opened TsFile file number of IoTDB server process.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default Directory")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/data/data/settled")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int")])])])]),t._v(" "),a("ul",[a("li",[t._v("WalOpenFileNum")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("WalOpenFileNum")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The opened write-ahead-log file number of IoTDB server process.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default Directory")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/data/wal")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int")])])])]),t._v(" "),a("ul",[a("li",[t._v("MetadataOpenFileNum")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("MetadataOpenFileNum")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The opened meta-data file number of IoTDB server process.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default Directory")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/data/system/schema")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int")])])])]),t._v(" "),a("ul",[a("li",[t._v("DigestOpenFileNum")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("DigestOpenFileNum")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The opened info file number of IoTDB server process.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default Directory")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/data/system/info")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int")])])])]),t._v(" "),a("ul",[a("li",[t._v("SocketOpenFileNum")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("SocketOpenFileNum")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The Socket link (TCP or UDP) number of the operation system.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int")])])])]),t._v(" "),a("ul",[a("li",[t._v("MergePeriodInSecond")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("MergePeriodInSecond")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The interval at which the IoTDB service process periodically triggers the merge process.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Unit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Second")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])])])]),t._v(" "),a("ul",[a("li",[t._v("ClosePeriodInSecond")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("ClosePeriodInSecond")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The interval at which the IoTDB service process periodically flushes memory data to disk.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Unit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Second")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])])])]),t._v(" "),a("h2",{attrs:{id:"data-status-monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-status-monitoring"}},[t._v("#")]),t._v(" Data Status Monitoring")]),t._v(" "),a("p",[t._v("This module is the statistical monitoring method provided by IoTDB for users to store data information. We will record the statistical data in the system and store it in the database. The current 0.8.2 version of IoTDB does not provide statistics for writing data.")]),t._v(" "),a("p",[t._v("The user can choose to enable or disable the data statistics monitoring function (set the "),a("code",[t._v("enable_stat_monitor")]),t._v(" item in the configuration file, see "),a("RouterLink",{attrs:{to:"/#/Documents/0.8.2/chap4/sec2"}},[t._v("Engine Layer")]),t._v(" for details).")],1),t._v(" "),a("h3",{attrs:{id:"writing-data-monitor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-data-monitor"}},[t._v("#")]),t._v(" Writing Data Monitor")]),t._v(" "),a("p",[t._v("The current statistics of writing data by the system can be divided into two major modules: "),a("strong",[t._v("Global Writing Data Statistics")]),t._v(" and "),a("strong",[t._v("Storage Group Writing Data Statistics")]),t._v(". "),a("strong",[t._v("Global Writing Data Statistics")]),t._v(" records the point number written by the user and the number of requests. "),a("strong",[t._v("Storage Group Writing Data Statistics")]),t._v(" records data of a certain storage group.")]),t._v(" "),a("p",[t._v("The system defaults to collect data every 5 seconds, and writes the statistics to the IoTDB and stores them in a system-specified locate. (If you need to change the statistic frequency, you can set The "),a("code",[t._v("back_loop_period_in_second entry")]),t._v(" in the configuration file, see Section "),a("RouterLink",{attrs:{to:"/#/Documents/0.8.2/chap4/sec2"}},[t._v("Engine Layer")]),t._v(" for details). After the system is refreshed or restarted, IoTDB does not recover the statistics, and the statistics data will restart from zero.")],1),t._v(" "),a("p",[t._v("In order to avoid the excessive use of statistical information, we add a mechanism to periodically clear invalid data for statistical information. The system will delete invalid data at regular intervals. The user can set the trigger frequency ("),a("code",[t._v("stat_monitor_retain_interval_in_second")]),t._v(", default is 600s, see section "),a("RouterLink",{attrs:{to:"/#/Documents/0.8.2/chap4/sec2"}},[t._v("Engine Layer")]),t._v(" for details) to set the frequency of deleting data. By setting the valid data duration ("),a("code",[t._v("stat_monitor_detect_freq_in_second entry")]),t._v(", the default is 600s, see section "),a("RouterLink",{attrs:{to:"/#/Documents/0.8.2/chap4/sec2"}},[t._v("Engine Layer")]),t._v(" for details) to set the time period of valid data, that is, the data within the time of the clear operation trigger time is stat_monitor_detect_freq_in_second is valid data. In order to ensure the stability of the system, it is not allowed to delete the statistics frequently. Therefore, if the configuration parameter time is less than the default value (600s), the system will abort the configuration parameter and uses the default parameter.")],1),t._v(" "),a("p",[t._v("It's convenient for you to use "),a("code",[t._v("select")]),t._v(" clause to get the writing data statistics the same as other timeseires.")]),t._v(" "),a("p",[t._v("Here are the writing data statistics:")]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_POINTS (GLOABAL)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_POINTS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the global writing points number.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Writing data statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.global.TOTAL_POINTS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Reset After Restarting System")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_POINTS from root.stats.write.global")])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_REQ_SUCCESS (GLOABAL)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_REQ_SUCCESS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the global successful requests number.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Writing data statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.global.TOTAL_REQ_SUCCESS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Reset After Restarting System")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_REQ_SUCCESS from root.stats.write.global")])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_REQ_FAIL (GLOABAL)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_REQ_FAIL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the global failed requests number.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Writing data statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.global.TOTAL_REQ_FAIL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Reset After Restarting System")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_REQ_FAIL from root.stats.write.global")])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_POINTS_FAIL (GLOABAL)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_POINTS_FAIL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the global failed writing points number.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Writing data statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.global.TOTAL_POINTS_FAIL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Reset After Restarting System")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_POINTS_FAIL from root.stats.write.global")])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_POINTS_SUCCESS (GLOABAL)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_POINTS_SUCCESS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the c.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Writing data statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.global.TOTAL_POINTS_SUCCESS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Reset After Restarting System")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_POINTS_SUCCESS from root.stats.write.global")])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_REQ_SUCCESS (STORAGE GROUP)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_REQ_SUCCESS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the successful requests number for specific storage group")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Writing data statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.<storage_group_name>.TOTAL_REQ_SUCCESS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Reset After Restarting System")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_REQ_SUCCESS from root.stats.write.<storage_group_name>")])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_REQ_FAIL (STORAGE GROUP)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_REQ_FAIL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the fail requests number for specific storage group")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Writing data statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.<storage_group_name>.TOTAL_REQ_FAIL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Reset After Restarting System")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_REQ_FAIL from root.stats.write.<storage_group_name>")])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_POINTS_SUCCESS (STORAGE GROUP)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_POINTS_SUCCESS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the successful writing points number for specific storage group.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Writing data statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.<storage_group_name>.TOTAL_POINTS_SUCCESS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Reset After Restarting System")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_POINTS_SUCCESS from root.stats.write.<storage_group_name>")])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_POINTS_FAIL (STORAGE GROUP)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_POINTS_FAIL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the fail writing points number for specific storage group.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Writing data statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.<storage_group_name>.TOTAL_POINTS_FAIL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Reset After Restarting System")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_POINTS_FAIL from root.stats.write.<storage_group_name>")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("Note:")]),t._v(" "),a("p",[t._v("<storage_group_name> should be replaced by real storage group name, and the '.' in storage group need to be replaced by '_'. For example, the storage group name is 'root.a.b', when using in the statistics, it will change to 'root_a_b'")])]),t._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("Here we give some example of using writing data statistics.")]),t._v(" "),a("p",[t._v("If you want to know the global successful writing points number, you can use "),a("code",[t._v("select")]),t._v(" clause to query it's value. The query statement is like this:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select TOTAL_POINTS_SUCCESS from root.stats.write.global\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("If you want to know the successfule writing points number of root.ln (storage group), here is the query statement:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select TOTAL_POINTS_SUCCESS from root.stats.write.root_ln\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("If you want to know the current timeseries point in the system, you can use "),a("code",[t._v("MAX_VALUE")]),t._v(" function to query. Here is the query statement:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select MAX_VALUE(TOTAL_POINTS_SUCCESS) from root.stats.write.root_ln\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"file-size-monitor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-size-monitor"}},[t._v("#")]),t._v(" File Size Monitor")]),t._v(" "),a("p",[t._v("Sometimes we are concerned about how the data file size of IoTDB is changing, maybe to help calculate how much disk space is left or the data ingestion speed. The File Size Monitor provides several statistics to show how different types of file-sizes change.")]),t._v(" "),a("p",[t._v("The file size monitor defaults to collect file size data every 5 seconds using the same shared parameter "),a("code",[t._v("back_loop_period_in_second")]),t._v(",")]),t._v(" "),a("p",[t._v("Unlike Writing Data Monitor, currently File Size Monitor will not delete statistic data at regular intervals.")]),t._v(" "),a("p",[t._v("You can also use "),a("code",[t._v("select")]),t._v(" clause to get the file size statistics like other time series.")]),t._v(" "),a("p",[t._v("Here are the file size statistics:")]),t._v(" "),a("ul",[a("li",[t._v("DATA")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("DATA")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the sum of all the files's sizes under the data directory ("),a("code",[t._v("data/data")]),t._v(" by default) in byte.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("File size statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.file_size.DATA")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Reset After Restarting System")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select DATA from root.stats.file_size.DATA")])])])]),t._v(" "),a("ul",[a("li",[t._v("SETTLED")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("SETTLED")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the sum of all the "),a("code",[t._v("TsFile")]),t._v(" size (under "),a("code",[t._v("data/data/settled")]),t._v(" by default) in byte. If there are multiple "),a("code",[t._v("TsFile")]),t._v(" directories like "),a("code",[t._v("{data/data/settled1, data/data/settled2}")]),t._v(", this statistic is the sum of their size.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("File size statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.file_size.SETTLED")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Reset After Restarting System")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select SETTLED from root.stats.file_size.SETTLED")])])])]),t._v(" "),a("ul",[a("li",[t._v("OVERFLOW")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("OVERFLOW")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the sum of all the "),a("code",[t._v("out-of-order data file")]),t._v(" size (under "),a("code",[t._v("data/data/unsequence")]),t._v(" by default) in byte.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("File size statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.file_size.OVERFLOW")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Reset After Restarting System")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select OVERFLOW from root.stats.file_size.OVERFLOW")])])])]),t._v(" "),a("ul",[a("li",[t._v("WAL")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("WAL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the sum of all the "),a("code",[t._v("Write-Ahead-Log file")]),t._v(" size (under "),a("code",[t._v("data/wal")]),t._v(" by default) in byte.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("File size statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.file_size.WAL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Reset After Restarting System")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select WAL from root.stats.file_size.WAL")])])])]),t._v(" "),a("ul",[a("li",[t._v("INFO")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("INFO")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the sum of all the "),a("code",[t._v(".restore")]),t._v(", etc. file size (under "),a("code",[t._v("data/system/info")]),t._v(") in byte.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("File size statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.file_size.INFO")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Reset After Restarting System")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select INFO from root.stats.file_size.INFO")])])])]),t._v(" "),a("ul",[a("li",[t._v("SCHEMA")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("SCHEMA")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the sum of all the "),a("code",[t._v("metadata file")]),t._v(" size (under "),a("code",[t._v("data/system/metadata")]),t._v(") in byte.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("File size statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.file_size.SCHEMA")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Reset After Restarting System")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Example")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select SCHEMA from root.stats.file_size.SCHEMA")])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);