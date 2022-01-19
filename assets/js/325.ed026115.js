(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{950:function(t,e,a){"use strict";a.r(e);var s=a(83),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-what-is-metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-what-is-metrics"}},[t._v("#")]),t._v(" 1. What is metrics?")]),t._v(" "),a("p",[t._v("Along with IoTDB running, some metrics reflecting current system's status will be collected continuously, which will provide some useful information helping us resolving system problems and detecting potential system risks.")]),t._v(" "),a("h2",{attrs:{id:"_2-when-to-use-metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-when-to-use-metrics"}},[t._v("#")]),t._v(" 2. When to use metrics?")]),t._v(" "),a("p",[t._v("Belows are some typical application scenarios")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("System is running slowly")]),t._v(" "),a("p",[t._v("When system is running slowly, we always hope to have information about system's running status as detail as possible, such as")]),t._v(" "),a("ul",[a("li",[t._v("JVM：Is there FGC？How long does it cost？How much does  the memory usage decreased after GC？Are there lots of threads？")]),t._v(" "),a("li",[t._v("System：Is the CPU usage too hi？Are there many disk IOs？")]),t._v(" "),a("li",[t._v("Connections：How many connections are there in the current time？")]),t._v(" "),a("li",[t._v("Interface：What is the TPS and latency of every interface？")]),t._v(" "),a("li",[t._v("ThreadPool：Are there many pending tasks？")]),t._v(" "),a("li",[t._v("Cache Hit Ratio")])])]),t._v(" "),a("li",[a("p",[t._v("No space left on device")]),t._v(" "),a("p",[t._v('When meet a "no space left on device" error, we really want to know which kind of data file had a rapid rise in the past hours.')])]),t._v(" "),a("li",[a("p",[t._v("Is the system running in abnormal status")]),t._v(" "),a("p",[t._v("We could use the count of error logs、the alive status of nodes in cluster, etc, to determine whether the system is running abnormally.")])])]),t._v(" "),a("h2",{attrs:{id:"_3-who-will-use-metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-who-will-use-metrics"}},[t._v("#")]),t._v(" 3. Who will use metrics?")]),t._v(" "),a("p",[t._v("Any person cares about the system's status, including but not limited to RD, QA, SRE, DBA, can use the metrics to work more efficiently.")]),t._v(" "),a("h2",{attrs:{id:"_4-what-metrics-does-iotdb-have"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-what-metrics-does-iotdb-have"}},[t._v("#")]),t._v(" 4. What metrics does IoTDB have?")]),t._v(" "),a("p",[t._v("For now, we have provided some metrics for several core modules of IoTDB, and more metrics will be added or updated along with the development of new features and optimization or refactoring of architecture.")]),t._v(" "),a("h3",{attrs:{id:"_4-1-key-concept"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-key-concept"}},[t._v("#")]),t._v(" 4.1. Key Concept")]),t._v(" "),a("p",[t._v("Before step into next, we'd better stop to have a look into some key concepts about metrics.")]),t._v(" "),a("p",[t._v("Every metric data has two properties")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Metric Name")]),t._v(" "),a("p",[t._v("The name of this metric，for example, "),a("code",[t._v("logback_events_total")]),t._v(" indicates the total count of log events。")])]),t._v(" "),a("li",[a("p",[t._v("Tag")]),t._v(" "),a("p",[t._v("Each metric could have 0 or several sub classes (Tag), for the same example, the "),a("code",[t._v("logback_events_total")]),t._v(" metric has a sub class named "),a("code",[t._v("level")]),t._v(", which means "),a("code",[t._v("the total count of log events at the specific level")])])])]),t._v(" "),a("h3",{attrs:{id:"_4-2-data-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-data-format"}},[t._v("#")]),t._v(" 4.2. Data Format")]),t._v(" "),a("p",[t._v("IoTDB provides metrics data both in JMX and Prometheus format. For JMX, you can get these metrics via "),a("code",[t._v("org.apache.iotdb.metrics")]),t._v(".")]),t._v(" "),a("p",[t._v("Next, we will choose Prometheus format data as samples to describe each kind of metric.")]),t._v(" "),a("h3",{attrs:{id:"_4-3-iotdb-metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-iotdb-metrics"}},[t._v("#")]),t._v(" 4.3. IoTDB Metrics")]),t._v(" "),a("h4",{attrs:{id:"_4-3-1-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-api"}},[t._v("#")]),t._v(" 4.3.1. API")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Metric")]),t._v(" "),a("th",[t._v("Tag")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Sample")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("entry_seconds_count")]),t._v(" "),a("td",[t._v('name="interface name"')]),t._v(" "),a("td",[t._v("The total request count of the interface")]),t._v(" "),a("td",[t._v('entry_seconds_count{name="openSession",} 1.0')])]),t._v(" "),a("tr",[a("td",[t._v("entry_seconds_sum")]),t._v(" "),a("td",[t._v('name="interface name"')]),t._v(" "),a("td",[t._v("The total cost seconds of the interface")]),t._v(" "),a("td",[t._v('entry_seconds_sum{name="openSession",} 0.024')])]),t._v(" "),a("tr",[a("td",[t._v("entry_seconds_max")]),t._v(" "),a("td",[t._v('name="interface name"')]),t._v(" "),a("td",[t._v("The max latency of the interface")]),t._v(" "),a("td",[t._v('entry_seconds_max{name="openSession",} 0.024')])]),t._v(" "),a("tr",[a("td",[t._v("quantity_total")]),t._v(" "),a("td",[t._v('name="pointsIn"')]),t._v(" "),a("td",[t._v("The total points inserted into IoTDB")]),t._v(" "),a("td",[t._v('quantity_total{name="pointsIn",} 1.0')])])])]),t._v(" "),a("h4",{attrs:{id:"_4-3-2-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-file"}},[t._v("#")]),t._v(" 4.3.2. File")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Metric")]),t._v(" "),a("th",[t._v("Tag")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Sample")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("file_size")]),t._v(" "),a("td",[t._v('name="wal/seq/unseq"')]),t._v(" "),a("td",[t._v("The current file size of wal/seq/unseq in bytes")]),t._v(" "),a("td",[t._v('file_size{name="wal",} 67.0')])]),t._v(" "),a("tr",[a("td",[t._v("file_count")]),t._v(" "),a("td",[t._v('name="wal/seq/unseq"')]),t._v(" "),a("td",[t._v("The current count of wal/seq/unseq files")]),t._v(" "),a("td",[t._v('file_count{name="seq",} 1.0')])])])]),t._v(" "),a("h4",{attrs:{id:"_4-3-3-flush"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-3-flush"}},[t._v("#")]),t._v(" 4.3.3. Flush")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Metric")]),t._v(" "),a("th",[t._v("Tag")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Sample")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("queue")]),t._v(" "),a("td",[t._v('name="flush",'),a("br"),t._v('status="running/waiting"')]),t._v(" "),a("td",[t._v("The count of current flushing tasks in running and waiting status")]),t._v(" "),a("td",[t._v('queue{name="flush",status="waiting",} 0.0'),a("br"),t._v('queue{name="flush",status="running",} 0.0')])]),t._v(" "),a("tr",[a("td",[t._v("cost_task_seconds_count")]),t._v(" "),a("td",[t._v('name="flush"')]),t._v(" "),a("td",[t._v("The total count of flushing occurs till now")]),t._v(" "),a("td",[t._v('cost_task_seconds_count{name="flush",} 1.0')])]),t._v(" "),a("tr",[a("td",[t._v("cost_task_seconds_max")]),t._v(" "),a("td",[t._v('name="flush"')]),t._v(" "),a("td",[t._v("The seconds of the longest flushing task takes till now")]),t._v(" "),a("td",[t._v('cost_task_seconds_max{name="flush",} 0.363')])]),t._v(" "),a("tr",[a("td",[t._v("cost_task_seconds_sum")]),t._v(" "),a("td",[t._v('name="flush"')]),t._v(" "),a("td",[t._v("The total cost seconds of all flushing tasks till now")]),t._v(" "),a("td",[t._v('cost_task_seconds_sum{name="flush",} 0.363')])])])]),t._v(" "),a("h4",{attrs:{id:"_4-3-4-compaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-4-compaction"}},[t._v("#")]),t._v(" 4.3.4. Compaction")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Metric")]),t._v(" "),a("th",[t._v("Tag")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Sample")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("queue")]),t._v(" "),a("td",[t._v('name="compaction_inner/compaction_cross",'),a("br"),t._v('status="running/waiting"')]),t._v(" "),a("td",[t._v("The count of current compaction tasks in running and waiting status")]),t._v(" "),a("td",[t._v('queue{name="compaction_inner",status="waiting",} 0.0')])]),t._v(" "),a("tr",[a("td",[t._v("cost_task_seconds_count")]),t._v(" "),a("td",[t._v('name="compaction"')]),t._v(" "),a("td",[t._v("The total count of compaction occurs till now")]),t._v(" "),a("td",[t._v('cost_task_seconds_count{name="compaction",} 1.0')])]),t._v(" "),a("tr",[a("td",[t._v("cost_task_seconds_max")]),t._v(" "),a("td",[t._v('name="compaction"')]),t._v(" "),a("td",[t._v("The seconds of the longest compaction task takes till now")]),t._v(" "),a("td",[t._v('cost_task_seconds_max{name="compaction",} 0.363')])]),t._v(" "),a("tr",[a("td",[t._v("cost_task_seconds_sum")]),t._v(" "),a("td",[t._v('name="compaction"')]),t._v(" "),a("td",[t._v("The total cost seconds of all compaction tasks till now")]),t._v(" "),a("td",[t._v('cost_task_seconds_sum{name="compaction",} 0.363')])])])]),t._v(" "),a("h4",{attrs:{id:"_4-3-5-memory-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-5-memory-usage"}},[t._v("#")]),t._v(" 4.3.5. Memory Usage")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Metric")]),t._v(" "),a("th",[t._v("Tag")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Sample")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("mem")]),t._v(" "),a("td",[t._v('name="chunkMetaData/storageGroup/mtree"')]),t._v(" "),a("td",[t._v("Current memory size of chunkMetaData/storageGroup/mtree data in bytes")]),t._v(" "),a("td",[t._v('mem{name="chunkMetaData",} 2050.0')])])])]),t._v(" "),a("h4",{attrs:{id:"_4-3-6-cache-hit-ratio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-6-cache-hit-ratio"}},[t._v("#")]),t._v(" 4.3.6. Cache Hit Ratio")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Metric")]),t._v(" "),a("th",[t._v("Tag")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Sample")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("cache_hit")]),t._v(" "),a("td",[t._v('name="chunk/timeSeriesMeta/bloomFilter"')]),t._v(" "),a("td",[t._v("Cache hit ratio of chunk/timeSeriesMeta  and prevention ratio of bloom filter")]),t._v(" "),a("td",[t._v('cache_hit{name="chunk",} 80')])])])]),t._v(" "),a("h4",{attrs:{id:"_4-3-7-business-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-7-business-data"}},[t._v("#")]),t._v(" 4.3.7. Business Data")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Metric")]),t._v(" "),a("th",[t._v("Tag")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Sample")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("quantity")]),t._v(" "),a("td",[t._v('name="timeSeries/storageGroup/device"')]),t._v(" "),a("td",[t._v("The current count of timeSeries/storageGroup/devices in IoTDB")]),t._v(" "),a("td",[t._v('quantity{name="timeSeries",} 1.0')])])])]),t._v(" "),a("h4",{attrs:{id:"_4-3-8-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-8-cluster"}},[t._v("#")]),t._v(" 4.3.8. Cluster")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Metric")]),t._v(" "),a("th",[t._v("Tag")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Sample")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("cluster_node_leader_count")]),t._v(" "),a("td",[t._v('name="'+t._s(t.ip)+'"')]),t._v(" "),a("td",[t._v("The count of  "),a("code",[t._v("dataGroupLeader")]),t._v(" on each node, which reflects the distribution of leaders")]),t._v(" "),a("td",[t._v('cluster_node_leader_count{name="127.0.0.1",} 2.0')])]),t._v(" "),a("tr",[a("td",[t._v("cluster_uncommitted_log")]),t._v(" "),a("td",[t._v('name="'+t._s(t.ip_datagroupHeader)+'"')]),t._v(" "),a("td",[t._v("The count of "),a("code",[t._v("uncommitted_log")]),t._v(" on each node in data groups it belongs to")]),t._v(" "),a("td",[t._v('cluster_uncommitted_log{name="127.0.0.1_Data-127.0.0.1-40010-raftId-0",} 0.0')])]),t._v(" "),a("tr",[a("td",[t._v("cluster_node_status")]),t._v(" "),a("td",[t._v('name="'+t._s(t.ip)+'"')]),t._v(" "),a("td",[t._v("The current node status, 1=online  2=offline")]),t._v(" "),a("td",[t._v('cluster_node_status{name="127.0.0.1",} 1.0')])]),t._v(" "),a("tr",[a("td",[t._v("cluster_elect_total")]),t._v(" "),a("td",[t._v('name="'+t._s(t.ip)+'",status="fail/win"')]),t._v(" "),a("td",[t._v("The count and result (won or failed) of elections the node participated in.")]),t._v(" "),a("td",[t._v('cluster_elect_total{name="127.0.0.1",status="win",} 1.0')])])])]),t._v(" "),a("h3",{attrs:{id:"_4-4-iotdb-predefined-metrics-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-iotdb-predefined-metrics-set"}},[t._v("#")]),t._v(" 4.4. IoTDB PreDefined Metrics Set")]),t._v(" "),a("p",[t._v("Users can modify the value of "),a("code",[t._v("predefinedMetrics")]),t._v(" in the "),a("code",[t._v("iotdb-metric.yml")]),t._v(" file to enable the predefined set of metrics, which "),a("code",[t._v("logback")]),t._v(" does not support in "),a("code",[t._v("dropwizard")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"_4-4-1-jvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-jvm"}},[t._v("#")]),t._v(" 4.4.1. JVM")]),t._v(" "),a("h5",{attrs:{id:"_4-4-1-1-threads"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-1-threads"}},[t._v("#")]),t._v(" 4.4.1.1. Threads")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Metric")]),t._v(" "),a("th",[t._v("Tag")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Sample")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("jvm_threads_live_threads")]),t._v(" "),a("td",[t._v("None")]),t._v(" "),a("td",[t._v("The current count of threads")]),t._v(" "),a("td",[t._v("jvm_threads_live_threads 25.0")])]),t._v(" "),a("tr",[a("td",[t._v("jvm_threads_daemon_threads")]),t._v(" "),a("td",[t._v("None")]),t._v(" "),a("td",[t._v("The current count of  daemon threads")]),t._v(" "),a("td",[t._v("jvm_threads_daemon_threads 12.0")])]),t._v(" "),a("tr",[a("td",[t._v("jvm_threads_peak_threads")]),t._v(" "),a("td",[t._v("None")]),t._v(" "),a("td",[t._v("The max count of threads till now")]),t._v(" "),a("td",[t._v("jvm_threads_peak_threads 28.0")])]),t._v(" "),a("tr",[a("td",[t._v("jvm_threads_states_threads")]),t._v(" "),a("td",[t._v('state="runnable/blocked/waiting/timed-waiting/new/terminated"')]),t._v(" "),a("td",[t._v("The count of threads in each status")]),t._v(" "),a("td",[t._v('jvm_threads_states_threads{state="runnable",} 10.0')])])])]),t._v(" "),a("h5",{attrs:{id:"_4-4-1-2-gc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-2-gc"}},[t._v("#")]),t._v(" 4.4.1.2. GC")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Metric")]),t._v(" "),a("th",[t._v("Tag")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Sample")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("jvm_gc_pause_seconds_count")]),t._v(" "),a("td",[t._v('action="end of major GC/end of minor GC",cause="xxxx"')]),t._v(" "),a("td",[t._v("The total count of YGC/FGC events and its cause")]),t._v(" "),a("td",[t._v('jvm_gc_pause_seconds_count{action="end of major GC",cause="Metadata GC Threshold",} 1.0')])]),t._v(" "),a("tr",[a("td",[t._v("jvm_gc_pause_seconds_sum")]),t._v(" "),a("td",[t._v('action="end of major GC/end of minor GC",cause="xxxx"')]),t._v(" "),a("td",[t._v("The total cost seconds of YGC/FGC and its cause")]),t._v(" "),a("td",[t._v('jvm_gc_pause_seconds_sum{action="end of major GC",cause="Metadata GC Threshold",} 0.03')])]),t._v(" "),a("tr",[a("td",[t._v("jvm_gc_pause_seconds_max")]),t._v(" "),a("td",[t._v('action="end of major GC",cause="Metadata GC Threshold"')]),t._v(" "),a("td",[t._v("The max  cost seconds of YGC/FGC till now and its cause")]),t._v(" "),a("td",[t._v('jvm_gc_pause_seconds_max{action="end of major GC",cause="Metadata GC Threshold",} 0.0')])]),t._v(" "),a("tr",[a("td",[t._v("jvm_gc_overhead_percent")]),t._v(" "),a("td",[t._v("None")]),t._v(" "),a("td",[t._v("An approximation of the percent of CPU time used by GC activities over the last lookback period or since monitoring began, whichever is shorter, in the range [0..1]")]),t._v(" "),a("td",[t._v("jvm_gc_overhead_percent 0.0")])]),t._v(" "),a("tr",[a("td",[t._v("jvm_gc_memory_promoted_bytes_total")]),t._v(" "),a("td",[t._v("None")]),t._v(" "),a("td",[t._v("Count of positive increases in the size of the old generation memory pool before GC to after GC")]),t._v(" "),a("td",[t._v("jvm_gc_memory_promoted_bytes_total 8425512.0")])]),t._v(" "),a("tr",[a("td",[t._v("jvm_gc_max_data_size_bytes")]),t._v(" "),a("td",[t._v("None")]),t._v(" "),a("td",[t._v("Max size of long-lived heap memory pool")]),t._v(" "),a("td",[t._v("jvm_gc_max_data_size_bytes 2.863661056E9")])]),t._v(" "),a("tr",[a("td",[t._v("jvm_gc_live_data_size_bytes")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("Size of long-lived heap memory pool after reclamation")]),t._v(" "),a("td",[t._v("jvm_gc_live_data_size_bytes 8450088.0")])]),t._v(" "),a("tr",[a("td",[t._v("jvm_gc_memory_allocated_bytes_total")]),t._v(" "),a("td",[t._v("None")]),t._v(" "),a("td",[t._v("Incremented for an increase in the size of the (young) heap memory pool after one GC to before the next")]),t._v(" "),a("td",[t._v("jvm_gc_memory_allocated_bytes_total 4.2979144E7")])])])]),t._v(" "),a("h5",{attrs:{id:"_4-4-1-3-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-3-memory"}},[t._v("#")]),t._v(" 4.4.1.3. Memory")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Metric")]),t._v(" "),a("th",[t._v("Tag")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Sample")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("jvm_buffer_memory_used_bytes")]),t._v(" "),a("td",[t._v('id="direct/mapped"')]),t._v(" "),a("td",[t._v("An estimate of the memory that the Java virtual machine is using for this buffer pool")]),t._v(" "),a("td",[t._v('jvm_buffer_memory_used_bytes{id="direct",} 3.46728099E8')])]),t._v(" "),a("tr",[a("td",[t._v("jvm_buffer_total_capacity_bytes")]),t._v(" "),a("td",[t._v('id="direct/mapped"')]),t._v(" "),a("td",[t._v("An estimate of the total capacity of the buffers in this pool")]),t._v(" "),a("td",[t._v('jvm_buffer_total_capacity_bytes{id="mapped",} 0.0')])]),t._v(" "),a("tr",[a("td",[t._v("jvm_buffer_count_buffers")]),t._v(" "),a("td",[t._v('id="direct/mapped"')]),t._v(" "),a("td",[t._v("An estimate of the number of buffers in the pool")]),t._v(" "),a("td",[t._v('jvm_buffer_count_buffers{id="direct",} 183.0')])]),t._v(" "),a("tr",[a("td",[t._v("jvm_memory_committed_bytes")]),t._v(" "),a("td",[t._v('{area="heap/nonheap",id="xxx",}')]),t._v(" "),a("td",[t._v("The amount of memory in bytes that is committed for the Java virtual machine to use")]),t._v(" "),a("td",[t._v('jvm_memory_committed_bytes{area="heap",id="Par Survivor Space",} 2.44252672E8'),a("br"),t._v('jvm_memory_committed_bytes{area="nonheap",id="Metaspace",} 3.9051264E7'),a("br")])]),t._v(" "),a("tr",[a("td",[t._v("jvm_memory_max_bytes")]),t._v(" "),a("td",[t._v('{area="heap/nonheap",id="xxx",}')]),t._v(" "),a("td",[t._v("The maximum amount of memory in bytes that can be used for memory management")]),t._v(" "),a("td",[t._v('jvm_memory_max_bytes{area="heap",id="Par Survivor Space",} 2.44252672E8'),a("br"),t._v('jvm_memory_max_bytes{area="nonheap",id="Compressed Class Space",} 1.073741824E9')])]),t._v(" "),a("tr",[a("td",[t._v("jvm_memory_used_bytes")]),t._v(" "),a("td",[t._v('{area="heap/nonheap",id="xxx",}')]),t._v(" "),a("td",[t._v("The amount of used memory")]),t._v(" "),a("td",[t._v('jvm_memory_used_bytes{area="heap",id="Par Eden Space",} 1.000128376E9'),a("br"),t._v('jvm_memory_used_bytes{area="nonheap",id="Code Cache",} 2.9783808E7'),a("br")])])])]),t._v(" "),a("h5",{attrs:{id:"_4-4-1-4-classes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-4-classes"}},[t._v("#")]),t._v(" 4.4.1.4. Classes")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Metric")]),t._v(" "),a("th",[t._v("Tag")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Sample")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("jvm_classes_unloaded_classes_total")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("The total number of classes unloaded since the Java virtual machine has started execution")]),t._v(" "),a("td",[t._v("jvm_classes_unloaded_classes_total 680.0")])]),t._v(" "),a("tr",[a("td",[t._v("jvm_classes_loaded_classes")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("The number of classes that are currently loaded in the Java virtual machine")]),t._v(" "),a("td",[t._v("jvm_classes_loaded_classes 5975.0")])]),t._v(" "),a("tr",[a("td",[t._v("jvm_compilation_time_ms_total")]),t._v(" "),a("td",[t._v('{compiler="HotSpot 64-Bit Tiered Compilers",}')]),t._v(" "),a("td",[t._v("The approximate accumulated elapsed time spent in compilation")]),t._v(" "),a("td",[t._v('jvm_compilation_time_ms_total{compiler="HotSpot 64-Bit Tiered Compilers",} 107092.0')])])])]),t._v(" "),a("h4",{attrs:{id:"_4-4-2-log-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-2-log-events"}},[t._v("#")]),t._v(" 4.4.2. Log Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Metric")]),t._v(" "),a("th",[t._v("Tag")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Sample")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("logback_events_total")]),t._v(" "),a("td",[t._v('{level="trace/debug/info/warn/error",}')]),t._v(" "),a("td",[t._v("The count of  trace/debug/info/warn/error log events till now")]),t._v(" "),a("td",[t._v('logback_events_total{level="warn",} 0.0')])])])]),t._v(" "),a("h3",{attrs:{id:"_4-5-add-custom-metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-add-custom-metrics"}},[t._v("#")]),t._v(" 4.5. Add custom metrics")]),t._v(" "),a("p",[t._v("If you want to add your own metrics data in IoTDB, please see the [IoTDB Metric Framework] (https://github.com/apache/iotdb/tree/master/metrics) document.")]),t._v(" "),a("h2",{attrs:{id:"_5-how-to-get-these-metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-how-to-get-these-metrics"}},[t._v("#")]),t._v(" 5. How to get these metrics？")]),t._v(" "),a("p",[t._v("The metrics collection switch is disabled by default，you need to enable it from "),a("code",[t._v("conf/iotdb-metric.yml")]),t._v(", Currently, it also supports hot loading via "),a("code",[t._v("load configuration")]),t._v(" after startup.")]),t._v(" "),a("h3",{attrs:{id:"_5-1-iotdb-metric-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-iotdb-metric-yml"}},[t._v("#")]),t._v(" 5.1. Iotdb-metric.yml")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# whether enable the module")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableMetric")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Multiple reporter, options: [jmx, prometheus, iotdb]. iotdb is off by default.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metricReporterList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" jmx\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" prometheus\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Type of monitor frame, options: [micrometer, dropwizard]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("monitorType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" micrometer\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Predefined metric, options: [jvm, logback], logback are not supported in dropwizard")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predefinedMetrics")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" jvm\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" logback\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Period time of push, only valid for dropwizard")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pushPeriodInSecond")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("########################################################")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#                                                      #")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if the reporter is prometheus,                       #")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# then the following must be set.                      #")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if you use dropwizard, all below                     #")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# should be the config of pushgateway                  #")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#                                                      #")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("########################################################")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prometheusReporterConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prometheusExporterUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prometheusExporterPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9091")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br")])]),a("p",[t._v("Then you can get metrics data as follows")]),t._v(" "),a("ol",[a("li",[t._v("Enable metrics switch in "),a("code",[t._v("iotdb-metric.yml")])]),t._v(" "),a("li",[t._v("You can just stay other config params as default.")]),t._v(" "),a("li",[t._v("If you use the "),a("code",[t._v("monitorType: dropwizard")]),t._v(" framework, please start the pushgateway in the corresponding location of "),a("code",[t._v("prometheusReporterConfig")]),t._v(" before starting IoTDB")]),t._v(" "),a("li",[t._v("Start/Restart your IoTDB server/cluster")]),t._v(" "),a("li",[t._v("Open your browser or use the "),a("code",[t._v("curl")]),t._v(" command to request "),a("code",[t._v("http://servier_ip:9091/metrics")]),t._v("，then you will get metrics data like follows:")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('...\n# HELP file_count\n# TYPE file_count gauge\nfile_count{name="wal",} 0.0\nfile_count{name="unseq",} 0.0\nfile_count{name="seq",} 2.0\n# HELP file_size\n# TYPE file_size gauge\nfile_size{name="wal",} 0.0\nfile_size{name="unseq",} 0.0\nfile_size{name="seq",} 560.0\n# HELP queue\n# TYPE queue gauge\nqueue{name="flush",status="waiting",} 0.0\nqueue{name="flush",status="running",} 0.0\n# HELP quantity\n# TYPE quantity gauge\nquantity{name="timeSeries",} 1.0\nquantity{name="storageGroup",} 1.0\nquantity{name="device",} 1.0\n# HELP logback_events_total Number of error level events that made it to the logs\n# TYPE logback_events_total counter\nlogback_events_total{level="warn",} 0.0\nlogback_events_total{level="debug",} 2760.0\nlogback_events_total{level="error",} 0.0\nlogback_events_total{level="trace",} 0.0\nlogback_events_total{level="info",} 71.0\n# HELP mem\n# TYPE mem gauge\nmem{name="storageGroup",} 0.0\nmem{name="mtree",} 1328.0\n...\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br")])]),a("h3",{attrs:{id:"_5-2-integrating-with-prometheus-and-grafana"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-integrating-with-prometheus-and-grafana"}},[t._v("#")]),t._v(" 5.2. Integrating with Prometheus and Grafana")]),t._v(" "),a("p",[t._v("As above descriptions，IoTDB provides metrics data in standard Prometheus format，so we can integrate with Prometheus and Grafana directly.")]),t._v(" "),a("p",[t._v("The following picture describes the relationships among IoTDB, Prometheus and Grafana")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/apache/iotdb-bin-resources/main/docs/UserGuide/System%20Tools/Metrics/iotdb_prometheus_grafana.png",alt:"iotdb_prometheus_grafana"}})]),t._v(" "),a("ol",[a("li",[t._v("Along with running, IoTDB will collect its metrics continuously.")]),t._v(" "),a("li",[t._v("Prometheus scrapes metrics from IoTDB at a constant interval (can be configured).")]),t._v(" "),a("li",[t._v("Prometheus saves these metrics to its inner TSDB.")]),t._v(" "),a("li",[t._v("Grafana queries metrics from Prometheus at a constant interval (can be configured) and then presents them on the graph.")])]),t._v(" "),a("p",[t._v("So, we need to do some additional works to configure and deploy Prometheus and Grafana.")]),t._v(" "),a("p",[t._v("For instance, you can config your Prometheus as follows to get metrics data from IoTDB:")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pull"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("metrics\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("honor_labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("honor_timestamps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scrape_interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 15s\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scrape_timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10s\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metrics_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /metrics\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("follow_redirects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("static_configs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9091")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("The following documents may help you have a good journey with Prometheus and Grafana.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://prometheus.io/docs/prometheus/latest/getting_started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prometheus getting_started"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prometheus scrape metrics"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://grafana.com/docs/grafana/latest/getting-started/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grafana getting_started"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://prometheus.io/docs/visualization/grafana/#grafana-support-for-prometheus",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grafana query metrics from Prometheus"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Here are two demo pictures of IoTDB's metrics data in Grafana.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/apache/iotdb-bin-resources/main/docs/UserGuide/System%20Tools/Metrics/metrics_demo_1.png",alt:"metrics_demo_1"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://raw.githubusercontent.com/apache/iotdb-bin-resources/main/docs/UserGuide/System%20Tools/Metrics/metrics_demo_2.png",alt:"metrics_demo_2"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);