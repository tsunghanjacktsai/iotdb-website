(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{538:function(t,e,a){"use strict";a.r(e);var i=a(45),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"performance-monitor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-monitor"}},[t._v("#")]),t._v(" Performance Monitor")]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("In order to grasp the performance of iotdb, we add this module to count the time-consuming of each operation. This module can statistic the avg time-consuming of each operation and the proportion of each operation fall into a time range. The output is in log_measure.log file. A output example is in below.")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/60937461-14296f80-a303-11e9-9602-a7bed624bfb3.png"}}),t._v(" "),a("h2",{attrs:{id:"configuration-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-parameter"}},[t._v("#")]),t._v(" Configuration parameter")]),t._v(" "),a("p",[t._v("location：conf/iotdb-engine.properties")]),t._v(" "),a("center",[t._v("**Table -parameter and description**\n"),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Default Value")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("enable_performance_stat")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Is stat performance of sub-module enable.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("performance_stat_display_interval")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("60000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The interval of display statistic result in ms.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("performance_stat_memory_in_kb")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("20")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The memory used for performance_stat in kb.")])])])])]),t._v(" "),a("h2",{attrs:{id:"jmx-mbean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmx-mbean"}},[t._v("#")]),t._v(" JMX MBean")]),t._v(" "),a("p",[t._v("Connect to jconsole with port 31999，and choose ‘MBean’in menu bar. Expand the sidebar and choose 'org.apache.iotdb.db.cost.statistic'. You can Find：")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"600px","max-height":"200px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/60937484-30c5a780-a303-11e9-8e92-04c413df2088.png"}}),t._v(" "),a("p",[a("strong",[t._v("Attribute")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("EnableStat：Whether the statistics are enable or not, if it is true, the module records the time-consuming of each operation and prints the results; It can not be set dynamically but changed by function in below.")])]),t._v(" "),a("li",[a("p",[t._v("DisplayIntervalInMs：The interval between print results. It can be set dynamically, but will take effect after restart.( First call stopStatistic(), then call startContinuousStatistics() or startOneTimeStatistics()）")])]),t._v(" "),a("li",[a("p",[t._v("OperationSwitch：It's a map to indicate whether stat the operation, the key is operation name and the value is stat state. This parameter cannot be changed directly, it's change by operation 'changeOperationSwitch()'.")])])]),t._v(" "),a("p",[a("strong",[t._v("Operation")])]),t._v(" "),a("ol",[a("li",[t._v("startContinuousStatistics： Start the statistics and output at interval of ‘DisplayIntervalInMs’.")]),t._v(" "),a("li",[t._v("startOneTimeStatistics：Start the statistics and output in delay of ‘DisplayIntervalInMs’.")]),t._v(" "),a("li",[t._v("stopStatistic：Stop the statistics.")]),t._v(" "),a("li",[t._v("clearStatisticalState(): clear current stat result, reset statistical result.")]),t._v(" "),a("li",[t._v("changeOperationSwitch(String operationName, Boolean operationState):set whether to monitor operation status. The param 'operationName' is the name of operation, defined in attribute operationSwitch. The param operationState is the state of operation. If state-switch successful the function will return true, else return false.")])]),t._v(" "),a("h2",{attrs:{id:"adding-custom-monitoring-items-for-developer-of-iotdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-custom-monitoring-items-for-developer-of-iotdb"}},[t._v("#")]),t._v(" Adding Custom Monitoring Items for developer of IOTDB")]),t._v(" "),a("p",[a("strong",[t._v("Add Operation")])]),t._v(" "),a("p",[t._v("Add an enumeration in org.apache.iotdb.db.cost.statistic.Operation.")]),t._v(" "),a("p",[a("strong",[t._v("Add Timing Code in Monitoring Area")])]),t._v(" "),a("p",[t._v("Add timing code in the monitoring start area:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("long t0 = System. currentTimeMillis();\n")])])]),a("p",[t._v("Add timing code in the monitoring stop area:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Measurement.INSTANCE.addOperationLatency(Operation, t0);\n")])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);