(window.webpackJsonp=window.webpackJsonp||[]).push([[510],{1069:function(t,e,a){"use strict";a.r(e);var l=a(69),_=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"监控与日志工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控与日志工具"}},[t._v("#")]),t._v(" 监控与日志工具")]),t._v(" "),a("h2",{attrs:{id:"系统监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统监控"}},[t._v("#")]),t._v(" 系统监控")]),t._v(" "),a("p",[t._v("当前用户可以使用Java的JConsole工具对正在运行的IoTDB进程进行系统状态监控，或使用IoTDB为用户开放的接口查看数据统计量。")]),t._v(" "),a("h3",{attrs:{id:"系统状态监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统状态监控"}},[t._v("#")]),t._v(" 系统状态监控")]),t._v(" "),a("p",[t._v("进入Jconsole监控页面后，首先看到的是IoTDB各类运行情况的概览。在这里，您可以看到"),a("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/technotes/guides/management/jconsole.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("堆内存信息、线程信息、类信息以及服务器的CPU使用情况"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"jmx-mbean监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmx-mbean监控"}},[t._v("#")]),t._v(" JMX MBean监控")]),t._v(" "),a("p",[t._v("通过使用JConsole工具并与JMX连接，您可以查看一些系统统计信息和参数。\n本节描述如何使用JConsole的“ Mbean”选项卡来监视IoTDB服务进程打开的文件数，数据文件的大小等等。 连接到JMX后，您可以通过“ MBeans”标签找到名为“ org.apache.iotdb.service”的“ MBean”，如下图所示。")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/20263106/53316064-54aec080-3901-11e9-9a49-76563ac09192.png"}}),t._v(" "),a("p",[t._v("Monitor下有几个属性，包括在不同文件夹中打开的文件数，数据文件大小统计信息以及某些系统参数的值。 通过双击与属性对应的值，它还可以显示该属性的折线图。 特别是，当前所有打开的文件计数统计信息仅在"),a("code",[t._v("MacOS")]),t._v("和除"),a("code",[t._v("CentOS")]),t._v("以外的大多数"),a("code",[t._v("Linux")]),t._v("发行版中受支持。 对于不支持的操作系统，这些统计信息将返回“ -2”。 有关Monitor属性的具体介绍，请参见以下部分。")]),t._v(" "),a("h5",{attrs:{id:"mbean监视器属性列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mbean监视器属性列表"}},[t._v("#")]),t._v(" MBean监视器属性列表")]),t._v(" "),a("ul",[a("li",[t._v("DataSizeInByte")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("DataSizeInByte")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("数据文件的总大小")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("单元")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Byte")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])])])]),t._v(" "),a("ul",[a("li",[t._v("FileNodeNum")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("FileNodeNum")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ThFileNode的计数（当前不支持）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])])])]),t._v(" "),a("ul",[a("li",[t._v("OverflowCacheSize")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("OverflowCacheSize")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("乱序数据缓存的大小（当前不支持）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("单元")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Byte")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])])])]),t._v(" "),a("ul",[a("li",[t._v("BufferWriteCacheSize")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("BufferWriteCacheSize")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("BufferedWriter缓存的大小（当前不支持）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("单元")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Byte")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])])])]),t._v(" "),a("ul",[a("li",[t._v("BaseDirectory")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("BaseDirectory")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("数据文件的绝对目录")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])])])]),t._v(" "),a("ul",[a("li",[t._v("WriteAheadLogStatus")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("WriteAheadLogStatus")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("预写日志（WAL）的状态。 True表示启用WAL。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])])])]),t._v(" "),a("ul",[a("li",[t._v("TotalOpenFileNum")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TotalOpenFileNum")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB服务器进程的所有打开的文件数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int")])])])]),t._v(" "),a("ul",[a("li",[t._v("DeltaOpenFileNum")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("DeltaOpenFileNum")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB服务器进程的打开的TsFile文件号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认路径")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/data/data/settled")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int")])])])]),t._v(" "),a("ul",[a("li",[t._v("WalOpenFileNum")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("WalOpenFileNum")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("TIoTDB服务器进程的已打开的预写日志文件号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认路径")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/data/wal")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int")])])])]),t._v(" "),a("ul",[a("li",[t._v("MetadataOpenFileNum")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("MetadataOpenFileNum")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB服务器进程的已打开元数据文件号。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认路径")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/data/system/schema")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int")])])])]),t._v(" "),a("ul",[a("li",[t._v("DigestOpenFileNum")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("DigestOpenFileNum")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB服务器进程的打开的信息文件号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认路径")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/data/system/info")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int")])])])]),t._v(" "),a("ul",[a("li",[t._v("SocketOpenFileNum")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("SocketOpenFileNum")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("操作系统的套接字链接（TCP或UDP）号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int")])])])]),t._v(" "),a("ul",[a("li",[t._v("MergePeriodInSecond")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("MergePeriodInSecond")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB服务过程定期触发合并过程的时间间隔")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Unit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Second")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])])])]),t._v(" "),a("ul",[a("li",[t._v("ClosePeriodInSecond")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("ClosePeriodInSecond")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB服务进程定期将内存数据刷新到磁盘的时间间隔")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Unit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Second")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])])])]),t._v(" "),a("h3",{attrs:{id:"数据统计监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据统计监控"}},[t._v("#")]),t._v(" 数据统计监控")]),t._v(" "),a("p",[t._v("本模块是IoTDB为用户提供的对其中存储数据信息的数据统计监控方式，我们会在系统中为您记录各个模块的数据统计信息，并将其汇总存入数据库中。当前版本的IoTDB提供IoTDB写入数据的统计功能。")]),t._v(" "),a("p",[t._v("用户可以选择开启或关闭数据统计监控功能（您可以设定配置文件中的"),a("code",[t._v("enable_stat_monitor")]),t._v("项，详细信息参见"),a("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Server/Config Manual.html"}},[t._v("第3.4节")]),t._v("）。")],1),t._v(" "),a("h4",{attrs:{id:"写入数据统计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写入数据统计"}},[t._v("#")]),t._v(" 写入数据统计")]),t._v(" "),a("p",[t._v("系统目前对写入数据的统计可分为两大模块： 全局（Global） 写入数据统计和存储组（Storage Group） 写入数据统计。 全局统计量记录了所有写入数据的点数、请求数统计，存储组统计量对某一个存储组的写入数据进行了统计，系统默认设定每 5 秒 （若需更改统计频率，您可以设定配置文件中的"),a("code",[t._v("back_loop_period_in_second")]),t._v("项，详细信息参见本文"),a("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Server/Config Manual.html"}},[t._v("3.4节")]),t._v("） 将统计量写入 IoTDB 中，并以系统指定的命名方式存储。系统刷新或者重启后， IoTDB 不对统计量做恢复处理，统计量从零值重新开始计算。")],1),t._v(" "),a("p",[t._v("为了避免统计信息占用过多空间，我们为统计信息加入定期清除无效数据的机制。系统将每隔一段时间删除无效数据。用户可以通过设置删除机制触发频率（"),a("code",[t._v("stat_monitor_retain_interval_in_second")]),t._v("项，默认为600s，详细信息参见本文"),a("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Server/Config Manual.html"}},[t._v("3.4节")]),t._v("）配置删除数据的频率，通过设置有效数据的期限（"),a("code",[t._v("stat_monitor_detect_freq_in_second")]),t._v("项，默认为600s，详细信息参见本文"),a("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Server/Config Manual.html"}},[t._v("3.4节")]),t._v("）设置有效数据的范围，即距离清除操作触发时间为"),a("code",[t._v("stat_monitor_detect_freq_in_second")]),t._v("以内的数据为有效数据。为了保证系统的稳定，不允许频繁地删除统计量，因此如果配置参数的时间小于默认值，系统不采用配置参数而使用默认参数。")],1),t._v(" "),a("p",[t._v("注：当前版本统计的写入数据统计信息会同时统计用户写入的数据与系统内部监控数据。")]),t._v(" "),a("p",[t._v("写入数据统计项列表：")]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_POINTS (全局)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_POINTS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("写入总点数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.global.TOTAL_POINTS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_POINTS from root.stats.write.global")])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_REQ_SUCCESS (全局)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_REQ_SUCCESS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("写入请求成功次数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.global.TOTAL_REQ_SUCCESS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_REQ_SUCCESS from root.stats.write.global")])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_REQ_FAIL (全局)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_REQ_FAIL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("写入请求失败次数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.global.TOTAL_REQ_FAIL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_REQ_FAIL from root.stats.write.global")])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_POINTS_FAIL (全局)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_POINTS_FAIL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("写入点数失败次数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.global.TOTAL_POINTS_FAIL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_POINTS_FAIL from root.stats.write.global")])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_POINTS_SUCCESS (全局)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_POINTS_SUCCESS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("写入点数成功次数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.global.TOTAL_POINTS_SUCCESS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_POINTS_SUCCESS from root.stats.write.global")])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_REQ_SUCCESS (存储组)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_REQ_SUCCESS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("写入存储组成功次数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.<storage_group_name>.TOTAL_REQ_SUCCESS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_REQ_SUCCESS from root.stats.write.<storage_group_name>")])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_REQ_FAIL (存储组)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_REQ_FAIL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("写入某个Storage group的请求失败次数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.<storage_group_name>.TOTAL_REQ_FAIL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_REQ_FAIL from root.stats.write.<storage_group_name>")])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_POINTS_SUCCESS (存储组)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_POINTS_SUCCESS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("写入某个Storage group成功的点数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.<storage_group_name>.TOTAL_POINTS_SUCCESS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_POINTS_SUCCESS from root.stats.write.<storage_group_name>")])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_POINTS_FAIL (存储组)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_POINTS_FAIL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("写入某个Storage group失败的点数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.<storage_group_name>.TOTAL_POINTS_FAIL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_POINTS_FAIL from root.stats.write.<storage_group_name>")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("其中，<storage_group_name> 为所需进行数据统计的存储组名称，存储组中的“.”使用“_”代替。例如：名为'root.a.b'的存储组命名为：'root_a_b'。")])]),t._v(" "),a("h5",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),a("p",[t._v("下面为您展示两个具体的例子。用户可以通过"),a("code",[t._v("SELECT")]),t._v("语句查询自己所需要的写入数据统计项。（查询方法与普通的时间序列查询方式一致）")]),t._v(" "),a("p",[t._v("我们以查询全局统计量总写入成功数（"),a("code",[t._v("TOTAL_POINTS_SUCCES")]),t._v("）为例，用IoTDB SELECT语句查询它的值。SQL语句如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select TOTAL_POINTS_SUCCESS from root.stats.write.global\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("我们以查询存储组root.ln的统计量总写入成功数（"),a("code",[t._v("TOTAL_POINTS_SUCCESS")]),t._v("）为例，用IoTDB SELECT语句查询它的值。SQL语句如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select TOTAL_POINTS_SUCCESS from root.stats.write.root_ln\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("若您需要查询当前系统的写入统计信息，您可以使用"),a("code",[t._v("MAX_VALUE()")]),t._v("聚合函数进行查询，SQL语句如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("select MAX_VALUE(TOTAL_POINTS_SUCCESS) from root.stats.write.root_ln\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"文件大小监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件大小监控"}},[t._v("#")]),t._v(" 文件大小监控")]),t._v(" "),a("p",[t._v("有时我们担心IoTDB的数据文件大小如何变化，也许有助于计算剩余的磁盘空间或数据摄取速度。 文件大小监视提供了一些统计信息，以显示不同类型的文件大小如何变化。")]),t._v(" "),a("p",[t._v("默认情况下，文件大小监视使用相同的共享参数"),a("code",[t._v("back_loop_period_in_second")]),t._v("每5秒收集一次文件大小数据 , 与写入数据监视不同，当前文件大小监视器将不会定期删除统计数据。")]),t._v(" "),a("p",[t._v("您还可以像其他时间序列一样使用 "),a("code",[t._v("select")]),t._v(" 子句来获取文件大小统计信息。")]),t._v(" "),a("p",[t._v("以下是文件大小统计信息：")]),t._v(" "),a("ul",[a("li",[t._v("DATA")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("DATA")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("计算数据目录下所有文件大小的总和（默认为"),a("code",[t._v("data/data")]),t._v("），以字节为单位")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("File size statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.file_size.DATA")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("重新启动系统后重设")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select DATA from root.stats.file_size.DATA")])])])]),t._v(" "),a("ul",[a("li",[t._v("SETTLED")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("SETTLED")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("以字节为单位计算所有"),a("code",[t._v("TsFile")]),t._v("大小（默认情况下在"),a("code",[t._v("data/data/settled")]),t._v("下）的总和。 如果有多个“ TsFile”目录，例如"),a("code",[t._v("{data/data/settled1,data/data/settled2}")]),t._v("，则此统计信息是它们大小的总和")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("File size statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.file_size.SETTLED")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("重新启动系统后重设")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select SETTLED from root.stats.file_size.SETTLED")])])])]),t._v(" "),a("ul",[a("li",[t._v("OVERFLOW")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("OVERFLOW")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("计算所有“乱序数据文件”大小的总和（默认为"),a("code",[t._v("data/data/unsequence")]),t._v("下），以字节为单位")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("File size statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.file_size.OVERFLOW")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("重新启动系统后重设")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select OVERFLOW from root.stats.file_size.OVERFLOW")])])])]),t._v(" "),a("ul",[a("li",[t._v("WAL")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("WAL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("计算所有"),a("code",[t._v("Write-Ahead-Log file")]),t._v("大小的总和（默认为"),a("code",[t._v("data/wal")]),t._v("之下），以字节为单位")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("File size statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.file_size.WAL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("重新启动系统后重设")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select WAL from root.stats.file_size.WAL")])])])]),t._v(" "),a("ul",[a("li",[t._v("INFO")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("INFO")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("计算所有"),a("code",[t._v(".restore")]),t._v("等文件大小的总和（以"),a("code",[t._v("data/system/info")]),t._v("命名），以字节为单位")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("File size statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.file_size.INFO")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("重新启动系统后重设")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select INFO from root.stats.file_size.INFO")])])])]),t._v(" "),a("ul",[a("li",[t._v("SCHEMA")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("SCHEMA")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("计算所有"),a("code",[t._v("metadata file")]),t._v("大小（在"),a("code",[t._v("data/system/metadata")]),t._v("下）的总和（以字节为单位）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("File size statistics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.file_size.SCHEMA")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("重新启动系统后重设")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("select SCHEMA from root.stats.file_size.SCHEMA")])])])]),t._v(" "),a("h2",{attrs:{id:"性能监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能监控"}},[t._v("#")]),t._v(" 性能监控")]),t._v(" "),a("h3",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("性能监控模块用来监控IOTDB每一个操作的耗时，以便用户更好的了解数据库的整体性能。此模块会统计每一种操作的平均耗时，以及耗时在一定时间区间内（1ms，4ms，16ms，64ms，256ms，1024ms，以上）的操作的比例。输出文件在log_measure.log中。输出样例如下：")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/60937461-14296f80-a303-11e9-9602-a7bed624bfb3.png"}}),t._v(" "),a("h3",{attrs:{id:"配置参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置参数"}},[t._v("#")]),t._v(" 配置参数")]),t._v(" "),a("p",[t._v("配置文件位置：conf/iotdb-engine.properties")]),t._v(" "),a("center",[t._v("**表 -配置参数以及描述项**\n"),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("enable_performance_stat")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启性能监控模块")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("performance_stat_display_interval")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("60000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("打印统计结果的时间延迟，以毫秒为单位")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("performance_stat_memory_in_kb")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("20")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("性能监控模块使用的内存阈值，单位为KB")])])])])]),t._v(" "),a("h3",{attrs:{id:"利用jmx-mbean动态调节参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用jmx-mbean动态调节参数"}},[t._v("#")]),t._v(" 利用JMX MBean动态调节参数")]),t._v(" "),a("p",[t._v("通过端口31999连接jconsole，并在上方菜单项中选择‘MBean’. 展开侧边框并选择 'org.apache.iotdb.db.cost.statistic'. 将会得到如下图所示结果：")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/60937484-30c5a780-a303-11e9-8e92-04c413df2088.png"}}),t._v(" "),a("p",[a("strong",[t._v("属性")])]),t._v(" "),a("ol",[a("li",[t._v("EnableStat：是否开启性能监控模块，如果被设置为true，则性能监控模块会记录每个操作的耗时并打印结果。这个参数不能直接通过jconsole直接更改，但可通过下方的函数来进行动态设置。")]),t._v(" "),a("li",[t._v("DisplayIntervalInMs：相邻两次打印结果的时间间隔。这个参数可以直接设置，但它要等性能监控模块重启才会生效。重启性能监控模块可以通过先调用 stopStatistic()然后调用startContinuousStatistics()或者直接调用 startOneTimeStatistics()实现。")]),t._v(" "),a("li",[t._v("OperationSwitch：这个属性用来展示针对每一种操作是否开启了监控统计，map的键为操作的名字，值为是否针对这种操作开启性能监控。这个参数不能直接通过jconsole直接更改，但可通过下方的 'changeOperationSwitch()'函数来进行动态设置。")])]),t._v(" "),a("p",[a("strong",[t._v("操作")])]),t._v(" "),a("ol",[a("li",[t._v("startContinuousStatistics：开启性能监控并以‘DisplayIntervalInMs’的时间间隔打印统计结果。")]),t._v(" "),a("li",[t._v("startOneTimeStatistics：开启性能监控并以‘DisplayIntervalInMs’的时间延迟打印一次统计结果。")]),t._v(" "),a("li",[t._v("stopStatistic：关闭性能监控。")]),t._v(" "),a("li",[t._v("clearStatisticalState(): 清除以统计的结果，从新开始统计。")]),t._v(" "),a("li",[t._v("changeOperationSwitch(String operationName, Boolean operationState):设置是否针对每一种不同的操作开启监控。参数‘operationName是操作的名称，在OperationSwitch属性中展示了所有操作的名称。参数 ‘operationState’是操作的状态，打开或者关闭。如果状态设置成功则此函数会返回true，否则返回false。")])]),t._v(" "),a("h3",{attrs:{id:"自定义操作类型监控其他区域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义操作类型监控其他区域"}},[t._v("#")]),t._v(" 自定义操作类型监控其他区域")]),t._v(" "),a("p",[a("strong",[t._v("增加操作项")])]),t._v(" "),a("p",[t._v("在org.apache.iotdb.db.cost.statistic.Operation类中增加一个枚举项来表示新增的操作.")]),t._v(" "),a("p",[a("strong",[t._v("在监控区域增加监控代码")])]),t._v(" "),a("p",[t._v("在监控开始区域增加计时代码:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("long t0 = System. currentTimeMillis();\n")])])]),a("p",[t._v("在监控结束区域增加记录代码:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Measurement.INSTANCE.addOperationLatency(Operation, t0);\n")])])]),a("h2",{attrs:{id:"cache命中率统计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache命中率统计"}},[t._v("#")]),t._v(" cache命中率统计")]),t._v(" "),a("h3",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("为了提高查询性能，IOTDB对ChunkMetaData和TsFileMetaData进行了缓存。用户可以通过debug级别的日志以及MXBean两种方式来查看缓存的命中率，并根据缓存命中率以及系统内存来调节缓存所使用的内存大小。使用MXBean查看缓存命中率的方法为：")]),t._v(" "),a("ol",[a("li",[t._v("通过端口31999连接jconsole，并在上方菜单项中选择‘MBean’.")]),t._v(" "),a("li",[t._v("展开侧边框并选择 'org.apache.iotdb.db.service'. 将会得到如下图所示结果：")])]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/65687623-404fc380-e09c-11e9-83c3-3c7c63a5b0be.jpeg"}}),t._v("\n## 系统日志\n"),a("p",[t._v("IoTDB支持用户通过修改日志配置文件的方式对IoTDB系统日志（如日志输出级别等）进行配置，系统日志配置文件默认位置在$IOTDB_HOME/conf文件夹下，默认的日志配置文件名为logback.xml。用户可以通过增加或更改其中的xml树型节点参数对系统运行日志的相关配置进行修改。详细配置说明参看本文日志文件配置说明。")]),t._v(" "),a("p",[t._v("同时，为了方便在系统运行过程中运维人员对系统的调试，我们为系统运维人员提供了动态修改日志配置的JMX接口，能够在系统不重启的前提下实时对系统的Log模块进行配置。详细使用方法参看动态系统日志配置说明)。")]),t._v(" "),a("h3",{attrs:{id:"动态系统日志配置说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态系统日志配置说明"}},[t._v("#")]),t._v(" 动态系统日志配置说明")]),t._v(" "),a("h4",{attrs:{id:"连接jmx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接jmx"}},[t._v("#")]),t._v(" 连接JMX")]),t._v(" "),a("p",[t._v("本节以Jconsole为例介绍连接JMX并进入动态系统日志配置模块的方法。启动Jconsole控制页面，在新建连接处建立与IoTDB Server的JMX连接（可以选择本地进程或给定IoTDB的IP及PORT进行远程连接，IoTDB的JMX服务默认运行端口为31999），如下图使用远程进程连接Localhost下运行在31999端口的IoTDB JMX服务。")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577195-f94d7500-1ef3-11e9-999a-b4f67055d80e.png"}}),t._v(" "),a("p",[t._v("连接到JMX后，您可以通过MBean选项卡找到名为"),a("code",[t._v("ch.qos.logback.classic")]),t._v("的"),a("code",[t._v("MBean")]),t._v("，如下图所示。")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577204-fe122900-1ef3-11e9-9e89-2eb1d46e24b8.png"}}),t._v(" "),a("p",[t._v("在"),a("code",[t._v("ch.qos.logback.classic")]),t._v("的MBean操作（Operations）选项中，可以看到当前动态系统日志配置支持的5种接口，您可以通过使用相应的方法，来执行相应的操作，操作页面如图。")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577216-09fdeb00-1ef4-11e9-9005-542ad7d9e9e0.png"}}),t._v(" "),a("h4",{attrs:{id:"动态系统日志接口说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态系统日志接口说明"}},[t._v("#")]),t._v(" 动态系统日志接口说明")]),t._v(" "),a("ul",[a("li",[t._v("reloadDefaultConfiguration接口")])]),t._v(" "),a("p",[t._v("该方法为重新加载默认的logback配置文件，用户可以先对默认的配置文件进行修改，然后调用该方法将修改后的配置文件重新加载到系统中，使其生效。")]),t._v(" "),a("ul",[a("li",[t._v("reloadByFileName接口")])]),t._v(" "),a("p",[t._v("该方法为加载一个指定路径的logback配置文件，并使其生效。该方法接受一个名为p1的String类型的参数，该参数为需要指定加载的配置文件路径。")]),t._v(" "),a("ul",[a("li",[t._v("getLoggerEffectiveLevel接口")])]),t._v(" "),a("p",[t._v("该方法为获取指定Logger当前生效的日志级别。该方法接受一个名为p1的String类型的参数，该参数为指定Logger的名称。该方法返回指定Logger当前生效的日志级别。")]),t._v(" "),a("ul",[a("li",[t._v("getLoggerLevel接口")])]),t._v(" "),a("p",[t._v("该方法为获取指定Logger的日志级别。该方法接受一个名为p1的String类型的参数，该参数为指定Logger的名称。该方法返回指定Logger的日志级别。")]),t._v(" "),a("p",[t._v("需要注意的是，该方法与"),a("code",[t._v("getLoggerEffectiveLevel")]),t._v("方法的区别在于，该方法返回的是指定Logger在配置文件中被设定的日志级别，如果用户没有对该Logger进行日志级别的设定，则返回空。按照Logback的日志级别继承机制，如果一个Logger没有被显示地设定日志级别，其将会从其最近的祖先继承日志级别的设定。这时，调用"),a("code",[t._v("getLoggerEffectiveLevel")]),t._v("方法将返回该Logger生效的日志级别；而调用本节所述方法，将返回空。")])],1)}),[],!1,null,null,null);e.default=_.exports}}]);