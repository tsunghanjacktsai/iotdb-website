(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{833:function(a,t,s){"use strict";s.r(t);var e=s(69),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[a._v("#")]),a._v(" 文件")]),a._v(" "),s("p",[a._v("本节将介绍 IoTDB 的数据存储方式，便于您对 IoTDB 的数据管理有一个直观的了解。")]),a._v(" "),s("p",[a._v("IoTDB 需要存储的数据分为三类，分别为数据文件、系统文件以及写前日志文件。")]),a._v(" "),s("h3",{attrs:{id:"数据文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据文件"}},[a._v("#")]),a._v(" 数据文件")]),a._v(" "),s("p",[a._v("数据文件存储了用户写入 IoTDB 系统的所有数据。包含 TsFile 文件和其他文件，可通过 "),s("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Appendix/Config-Manual.html"}},[a._v("data_dirs 配置项")]),a._v(" 进行配置。")],1),a._v(" "),s("p",[a._v("为了更好的支持用户对于磁盘空间扩展等存储需求，IoTDB 为 TsFile 的存储配置增加了多文件目录的存储方式，用户可自主配置多个存储路径作为数据的持久化位置（详情见 "),s("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Appendix/Config-Manual.html"}},[a._v("data_dirs 配置项")]),a._v("），并可以指定或自定义目录选择策略（详情见 "),s("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Appendix/Config-Manual.html"}},[a._v("multi_dir_strategy 配置项")]),a._v("）。")],1),a._v(" "),s("h3",{attrs:{id:"系统文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统文件"}},[a._v("#")]),a._v(" 系统文件")]),a._v(" "),s("p",[a._v("系统 Schema 文件，存储了数据文件的元数据信息。可通过 base_dir 配置项进行配置（详情见 "),s("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Appendix/Config-Manual.html"}},[a._v("base_dir 配置项")]),a._v("）。")],1),a._v(" "),s("h3",{attrs:{id:"写前日志文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写前日志文件"}},[a._v("#")]),a._v(" 写前日志文件")]),a._v(" "),s("p",[a._v("写前日志文件存储了系统的写前日志。可通过"),s("code",[a._v("wal_dir")]),a._v("配置项进行配置（详情见 "),s("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Appendix/Config-Manual.html"}},[a._v("wal_dir 配置项")]),a._v("）。")],1),a._v(" "),s("h3",{attrs:{id:"数据存储目录设置举例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据存储目录设置举例"}},[a._v("#")]),a._v(" 数据存储目录设置举例")]),a._v(" "),s("p",[a._v("接下来我们将举一个数据目录配置的例子，来具体说明如何配置数据的存储目录。")]),a._v(" "),s("p",[a._v("IoTDB 涉及到的所有数据目录路径有：data_dirs, multi_dir_strategy, base_dir 和 wal_dir，它们分别涉及的是 IoTDB 的数据文件、数据文件多目录存储策略、系统文件以及写前日志文件。您可以选择输入路径自行配置，也可以不进行任何操作使用系统默认的配置项。")]),a._v(" "),s("p",[a._v("以下我们给出一个用户对五个目录都进行自行配置的例子。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("base_dir = $IOTDB_HOME/data\ndata_dirs = /data1/data, /data2/data, /data3/data \nmulti_dir_strategy=MaxDiskUsableSpaceFirstStrategy\nwal_dir= $IOTDB_HOME/data/wal\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("按照上述配置，系统会：")]),a._v(" "),s("ul",[s("li",[a._v("将 TsFile 存储在路径/data1/data、路径/data2/data 和路径 data3/data3 中。且对这三个路径的选择策略是："),s("code",[a._v("优先选择磁盘剩余空间最大的目录")]),a._v("，即在每次数据持久化到磁盘时系统会自动选择磁盘剩余空间最大的一个目录将数据进行写入")]),a._v(" "),s("li",[a._v("将系统文件存储在$IOTDB_HOME/data")]),a._v(" "),s("li",[a._v("将写前日志文件存储在$IOTDB_HOME/data/wal")])])])}),[],!1,null,null,null);t.default=r.exports}}]);