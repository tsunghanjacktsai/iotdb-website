(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{910:function(t,e,s){"use strict";s.r(e);var a=s(68),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"中止查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中止查询"}},[t._v("#")]),t._v(" 中止查询")]),t._v(" "),s("p",[t._v("当使用 IoTDB 时，您可能会遇到以下情形：输入了一个查询，但是由于其包含的数据量过大或是其他原因，导致长时间无法返回结果，但是迫于生产环境无法中止该命令，只能被迫等待。")]),t._v(" "),s("p",[t._v("从 0.12 版本开始，IoTDB 对执行时间过长的查询给出了两种解决方案：查询超时和查询中止。")]),t._v(" "),s("h2",{attrs:{id:"查询超时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询超时"}},[t._v("#")]),t._v(" 查询超时")]),t._v(" "),s("p",[t._v("对于执行时间过长的查询，IoTDB 将强行中断该查询，并抛出超时异常，如图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/34242296/104586593-a224aa00-56a0-11eb-9c52-241dcdb68ecb.png",alt:"image"}})]),t._v(" "),s("p",[t._v("系统默认的超时时间为 60000 ms，可以在配置文件中通过 "),s("code",[t._v("query_time_threshold")]),t._v(" 参数进行自定义配置。")]),t._v(" "),s("p",[t._v("如果您使用 JDBC 或 Session，还支持对单个查询设置超时时间（单位为 ms）：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("E.g. ((IoTDBStatement) statement).executeQuery(String sql, long timeoutInMS)\nE.g. session.executeQueryStatement(String sql, long timeout)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("如果不配置超时时间参数或将超时时间设置为 0，将使用服务器端默认的超时时间.")]),t._v(" "),s("h2",{attrs:{id:"查询中止"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询中止"}},[t._v("#")]),t._v(" 查询中止")]),t._v(" "),s("p",[t._v("除了被动地等待查询超时外，IoTDB 还支持主动地中止查询，命令为：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("KILL QUERY <queryId>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("通过指定 "),s("code",[t._v("queryId")]),t._v(" 可以中止指定的查询，而如果不指定 "),s("code",[t._v("queryId")]),t._v("，将中止所有正在执行的查询。")]),t._v(" "),s("p",[t._v("为了获取正在执行的查询 id，用户可以使用 "),s("code",[t._v("show query processlist")]),t._v(" 命令，该命令将显示所有正在执行的查询列表，结果形式如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Time")]),t._v(" "),s("th",[t._v("queryId")]),t._v(" "),s("th",[t._v("statement")])])]),t._v(" "),s("tbody",[s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td")])])]),t._v(" "),s("p",[t._v("其中 statement 最大显示长度为 64 字符。对于超过 64 字符的查询语句，将截取部分进行显示。")])])}),[],!1,null,null,null);e.default=r.exports}}]);