(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{707:function(t,e,i){"use strict";i.r(e);var a=i(82),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"time-partition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#time-partition"}},[t._v("#")]),t._v(" Time partition")]),t._v(" "),i("h2",{attrs:{id:"features"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),i("p",[t._v("Time partition divides data according to time, and a time partition is used to save all data within a certain time range. The time partition number is represented by a natural number. Number 0 means January 1, 1970, it will increase by one every partition_interval seconds. Time partition number's calculation formula is timestamp / partition_interval. The main configuration items are as follows:")]),t._v(" "),i("p",[t._v("Notice: Currently, it's not recommend to open this function. If open, please calculate appropriate concurrent_writing_time_partition and wal_buffer_size, you can calculate wal_buffer_size = MaxDirectMemorySizeInBytes * 0.3 / (storage_group_num * virtual_storage_group_num) / concurrent_writing_time_partition")]),t._v(" "),i("ul",[i("li",[t._v("enable_partition")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("enable_partition")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Whether enable time partition for data, if disabled, all data belongs to partition 0 (It's not recommend to open this function. If open, please calculate appropriate concurrent_writing_time_partition and wal_buffer_size)")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Bool")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Only allowed to be modified in first start up")])])])]),t._v(" "),i("ul",[i("li",[t._v("partition_interval")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("partition_interval")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Time range for dividing storage group, time series data will be divided into groups by this time range")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Int64")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("604800")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Only allowed to be modified in first start up")])])])]),t._v(" "),i("h2",{attrs:{id:"configuration-example"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#configuration-example"}},[t._v("#")]),t._v(" Configuration example")]),t._v(" "),i("p",[t._v("Enable time partition and set partition_interval to 86400 (one day), then the data distribution is shown as the following figure:")]),t._v(" "),i("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Data%20Concept/Time-Partition/time_partition_example.png?raw=true",alt:"time partition example"}}),t._v(" "),i("ul",[i("li",[i("p",[t._v("Insert one datapoint with timestamp 0, calculate 0/86400 = 0, then this datapoint will be stored in TsFile under folder 0")])]),t._v(" "),i("li",[i("p",[t._v("Insert one datapoint with timestamp 1609459200010, calculate 1609459200010/86400 = 18628, then this datapoint will be stored in TsFile under folder 18628")])])]),t._v(" "),i("h2",{attrs:{id:"suggestions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#suggestions"}},[t._v("#")]),t._v(" Suggestions")]),t._v(" "),i("p",[t._v("When enabling time partition, it is better to enable timed flush memtable and timed close tsfile, configuration params are detailed in "),i("RouterLink",{attrs:{to:"/UserGuide/Master/Appendix/Config-Manual.html"}},[t._v("Config manual for timed flush and timed close")]),t._v(".")],1),t._v(" "),i("ul",[i("li",[i("p",[t._v("enable_timed_flush_unseq_memtable: Whether to enable timed flush unsequence memtable, enabled by default.")])]),t._v(" "),i("li",[i("p",[t._v("enable_timed_flush_seq_memtable: Whether to enable timed flush sequence memtable, disabled by default. It should be enabled when time partition is enabled, so inactive time partition's memtable can be flushed regularly to prepare for the timed close of TsFileProcessor.")])]),t._v(" "),i("li",[i("p",[t._v("enable_timed_close_tsfile: Whether to enable timed close tsfile, disabled by default. It should be enabled when time partition is enabled, so inactive time partition's TsFileProcessor can be closed regularly to reduce memory usage.")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);