(window.webpackJsonp=window.webpackJsonp||[]).push([[417],{737:function(t,e,i){"use strict";i.r(e);var a=i(1),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("p",[t._v("In order to grasp the performance of iotdb, we add this module to count the time-consuming of each operation. This module can statistic the avg time-consuming of each operation and the proportion of each operation fall into a time range. The output is in log_measure.log file. A output example is in below.")]),t._v(" "),i("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/60937461-14296f80-a303-11e9-9602-a7bed624bfb3.png"}}),t._v(" "),t._m(2),t._v(" "),i("p",[t._v("location：conf/iotdb-engine.properties")]),t._v(" "),i("center",[t._v("**Table -parameter and description**\n"),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Default Value")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("enable_performance_stat")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Is stat performance of sub-module enable.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("performance_stat_display_interval")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("60000")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The interval of display statistic result in ms.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("performance_stat_memory_in_kb")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("20")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The memory used for performance_stat in kb.")])])])])]),t._v(" "),t._m(3),t._v(" "),i("p",[t._v("Connect to jconsole with port 31999，and choose ‘MBean’in menu bar. Expand the sidebar and choose 'org.apache.iotdb.db.cost.statistic'. You can Find：")]),t._v(" "),i("img",{staticStyle:{width:"100%","max-width":"600px","max-height":"200px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/60937484-30c5a780-a303-11e9-8e92-04c413df2088.png"}}),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),i("p",[t._v("Add an enumeration in org.apache.iotdb.db.cost.statistic.Operation.")]),t._v(" "),t._m(10),t._v(" "),i("p",[t._v("Add timing code in the monitoring start area:")]),t._v(" "),t._m(11),t._v(" "),i("p",[t._v("Add timing code in the monitoring stop area:")]),t._v(" "),t._m(12)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"performance-monitor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#performance-monitor"}},[this._v("#")]),this._v(" Performance Monitor")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration-parameter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-parameter"}},[this._v("#")]),this._v(" Configuration parameter")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"jmx-mbean"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jmx-mbean"}},[this._v("#")]),this._v(" JMX MBean")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Attribute")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("p",[this._v("EnableStat：Whether the statistics are enable or not, if it is true, the module records the time-consuming of each operation and prints the results; It can not be set dynamically but changed by function in below.")])]),this._v(" "),e("li",[e("p",[this._v("DisplayIntervalInMs：The interval between print results. It can be set dynamically, but will take effect after restart.( First call stopStatistic(), then call startContinuousStatistics() or startOneTimeStatistics()）")])]),this._v(" "),e("li",[e("p",[this._v("OperationSwitch：It's a map to indicate whether stat the operation, the key is operation name and the value is stat state. This parameter cannot be changed directly, it's change by operation 'changeOperationSwitch()'.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Operation")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[t._v("startContinuousStatistics： Start the statistics and output at interval of ‘DisplayIntervalInMs’.")]),t._v(" "),i("li",[t._v("startOneTimeStatistics：Start the statistics and output in delay of ‘DisplayIntervalInMs’.")]),t._v(" "),i("li",[t._v("stopStatistic：Stop the statistics.")]),t._v(" "),i("li",[t._v("clearStatisticalState(): clear current stat result, reset statistical result.")]),t._v(" "),i("li",[t._v("changeOperationSwitch(String operationName, Boolean operationState):set whether to monitor operation status. The param 'operationName' is the name of operation, defined in attribute operationSwitch. The param operationState is the state of operation. If state-switch successful the function will return true, else return false.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"adding-custom-monitoring-items-for-developer-of-iotdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-custom-monitoring-items-for-developer-of-iotdb"}},[this._v("#")]),this._v(" Adding Custom Monitoring Items for developer of IOTDB")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Add Operation")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Add Timing Code in Monitoring Area")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("long t0 = System. currentTimeMillis();\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("Measurement.INSTANCE.addOperationLatency(Operation, t0);\n")])])}],!1,null,null,null);e.default=n.exports}}]);