(window.webpackJsonp=window.webpackJsonp||[]).push([[1034],{1355:function(t,e,_){"use strict";_.r(e);var a=_(1),l=Object(a.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),_("p",[t._v("当前用户可以使用Java的JConsole工具对正在运行的IoTDB进程进行系统状态监控，或使用IoTDB为用户开放的接口查看数据统计量。")]),t._v(" "),t._m(1),t._v(" "),_("p",[t._v("进入Jconsole监控页面后，首先看到的是IoTDB各类运行情况的概览。在这里，您可以看到"),_("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/technotes/guides/management/jconsole.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("堆内存信息、线程信息、类信息以及服务器的CPU使用情况"),_("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(2),t._v(" "),_("p",[t._v("本模块是IoTDB为用户提供的对其中存储数据信息的数据统计监控方式，我们会在系统中为您记录各个模块的数据统计信息，并将其汇总存入数据库中。当前0.8.*版本的IoTDB未提供IoTDB写入数据的统计功能。")]),t._v(" "),_("p",[t._v("用户可以选择开启或关闭数据统计监控功能（您可以设定配置文件中的"),_("code",[t._v("enable_stat_monitor")]),t._v("项，详细信息参见"),_("router-link",{attrs:{to:"./../4-Deployment and Management/2-Configuration.html"}},[t._v("第4.2节")]),t._v("）。")],1),t._v(" "),t._m(3),t._v(" "),_("p",[t._v("系统目前对写入数据的统计可分为两大模块： 全局（Global） 写入数据统计和存储组（Storage Group） 写入数据统计。 全局统计量记录了所有写入数据的点数、请求数统计，存储组统计量对某一个存储组的写入数据进行了统计，系统默认设定每 5 秒 （若需更改统计频率，您可以设定配置文件中的"),_("code",[t._v("back_loop_period_in_second")]),t._v("项，详细信息参见本文"),_("router-link",{attrs:{to:"./../4-Deployment and Management/2-Configuration.html"}},[t._v("4.2节")]),t._v("） 将统计量写入 IoTDB 中，并以系统指定的命名方式存储。系统刷新或者重启后， IoTDB 不对统计量做恢复处理，统计量从零值重新开始计算。")],1),t._v(" "),_("p",[t._v("为了避免统计信息占用过多空间，我们为统计信息加入定期清除无效数据的机制。系统将每隔一段时间删除无效数据。用户可以通过设置删除机制触发频率（"),_("code",[t._v("stat_monitor_retain_interval_in_second")]),t._v("项，默认为600s，详细信息参见本文"),_("router-link",{attrs:{to:"./../4-Deployment and Management/2-Configuration.html"}},[t._v("4.2节")]),t._v("）配置删除数据的频率，通过设置有效数据的期限（"),_("code",[t._v("stat_monitor_detect_freq_in_second")]),t._v("项，默认为600s，详细信息参见本文"),_("router-link",{attrs:{to:"./../4-Deployment and Management/2-Configuration.html"}},[t._v("4.2节")]),t._v("）设置有效数据的范围，即距离清除操作触发时间为"),_("code",[t._v("stat_monitor_detect_freq_in_second")]),t._v("以内的数据为有效数据。为了保证系统的稳定，不允许频繁地删除统计量，因此如果配置参数的时间小于默认值，系统不采用配置参数而使用默认参数。")],1),t._v(" "),_("p",[t._v("注：当前 0.8.2 版本统计的写入数据统计信息会同时统计用户写入的数据与系统内部监控数据。（该功能未开放）")]),t._v(" "),_("p",[t._v("写入数据统计项列表：")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"系统监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统监控"}},[this._v("#")]),this._v(" 系统监控")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"系统状态监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统状态监控"}},[this._v("#")]),this._v(" 系统状态监控")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数据统计监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据统计监控"}},[this._v("#")]),this._v(" 数据统计监控")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"写入数据统计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写入数据统计"}},[this._v("#")]),this._v(" 写入数据统计")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("TOTAL_POINTS (全局)")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_POINTS")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("写入总点数")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.global.TOTAL_POINTS")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_POINTS from root.stats.write.global")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("TOTAL_REQ_SUCCESS (全局)")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_REQ_SUCCESS")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("写入请求成功次数")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.global.TOTAL_REQ_SUCCESS")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_REQ_SUCCESS from root.stats.write.global")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("TOTAL_REQ_FAIL (全局)")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_REQ_FAIL")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("写入请求失败次数")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.global.TOTAL_REQ_FAIL")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_REQ_FAIL from root.stats.write.global")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("TOTAL_POINTS_FAIL (全局)")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_POINTS_FAIL")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("写入点数数百次数")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.global.TOTAL_POINTS_FAIL")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_POINTS_FAIL from root.stats.write.global")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("TOTAL_POINTS_SUCCESS (全局)")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_POINTS_SUCCESS")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("写入点数成功次数")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.global.TOTAL_POINTS_SUCCESS")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_POINTS_SUCCESS from root.stats.write.global")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("TOTAL_REQ_SUCCESS (STORAGE GROUP)")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_REQ_SUCCESS")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("写入存储组成功次数")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.<storage_group_name>.TOTAL_REQ_SUCCESS")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_REQ_SUCCESS from root.stats.write.<storage_group_name>")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("TOTAL_REQ_FAIL (STORAGE GROUP)")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_REQ_FAIL")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("写入某个Storage group的请求失败次数")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.<storage_group_name>.TOTAL_REQ_FAIL")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_REQ_FAIL from root.stats.write.<storage_group_name>")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("TOTAL_POINTS_SUCCESS (STORAGE GROUP)")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_POINTS_SUCCESS")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("写入某个Storage group成功的点数")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.<storage_group_name>.TOTAL_POINTS_SUCCESS")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_POINTS_SUCCESS from root.stats.write.<storage_group_name>")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("TOTAL_POINTS_FAIL (STORAGE GROUP)")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_POINTS_FAIL")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("写入某个Storage group失败的点数")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("root.stats.write.<storage_group_name>.TOTAL_POINTS_FAIL")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("服务器重启后是否重置")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("是")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("select TOTAL_POINTS_FAIL from root.stats.write.<storage_group_name>")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("其中，<storage_group_name> 为所需进行数据统计的存储组名称，存储组中的“.”使用“_”代替。例如：名为'root.a.b'的存储组命名为：'root_a_b'。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("下面为您展示两个具体的例子。用户可以通过"),e("code",[this._v("SELECT")]),this._v("语句查询自己所需要的写入数据统计项。（查询方法与普通的时间序列查询方式一致）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们以查询全局统计量总写入成功数（"),e("code",[this._v("TOTAL_POINTS_SUCCES")]),this._v("）为例，用IoTDB SELECT语句查询它的值。SQL语句如下：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("select TOTAL_POINTS_SUCCESS from root.stats.write.global\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们以查询存储组root.ln的统计量总写入成功数（"),e("code",[this._v("TOTAL_POINTS_SUCCESS")]),this._v("）为例，用IoTDB SELECT语句查询它的值。SQL语句如下：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("select TOTAL_POINTS_SUCCESS from root.stats.write.root_ln\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("若您需要查询当前系统的写入统计信息，您可以使用"),e("code",[this._v("MAX_VALUE()")]),this._v("聚合函数进行查询，SQL语句如下：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("select MAX_VALUE(TOTAL_POINTS_SUCCESS) from root.stats.write.root_ln\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])}],!1,null,null,null);e.default=l.exports}}]);