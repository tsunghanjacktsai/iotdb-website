(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{699:function(e,t,n){"use strict";n.r(t);var r=n(69),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"performance-tracing-tool"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#performance-tracing-tool"}},[e._v("#")]),e._v(" Performance Tracing Tool")]),e._v(" "),n("p",[e._v("IoTDB supports the use of "),n("code",[e._v("TRACING")]),e._v(" statements to enable and disable performance tracing of query statements, which is disabled by default. Users can use performance tracking tool to analyze potential performance problems in some queries. By default, the log files for performance tracing are stored in the directory "),n("code",[e._v("./data/tracing")]),e._v(".")]),e._v(" "),n("p",[e._v("Turn on Tracing：")]),e._v(" "),n("p",[n("code",[e._v("IoTDB> TRACING ON")])]),e._v(" "),n("p",[e._v("Turn off Tracing：")]),e._v(" "),n("p",[n("code",[e._v("IoTDB> TRACING OFF")])]),e._v(" "),n("p",[e._v("Since the cost of an IoTDB query mainly depends on the number of time series queried, the number of tsfile files accessed, the total number of chunks to be scanned and the average size of each chunk (the number of data points contained in the chunk). Therefore, the current performance analysis includes the following contents:")]),e._v(" "),n("ul",[n("li",[e._v("Start time")]),e._v(" "),n("li",[e._v("Query statement")]),e._v(" "),n("li",[e._v("Number of series paths")]),e._v(" "),n("li",[e._v("Number of tsfiles")]),e._v(" "),n("li",[e._v("Number of sequence files")]),e._v(" "),n("li",[e._v("Number of unsequence files")]),e._v(" "),n("li",[e._v("Number of chunks")]),e._v(" "),n("li",[e._v("Average size of chunks")]),e._v(" "),n("li",[e._v("End time")])]),e._v(" "),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),n("p",[e._v("For example, execute "),n("code",[e._v("select * from root")]),e._v(", the contents of the tracing log file will include the following contents:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Query Id: 2 - Start time: 2020-06-28 10:53:54.727\nQuery Id: 2 - Query Statement: select * from root\nQuery Id: 2 - Number of series paths: 3\nQuery Id: 2 - Number of tsfiles: 2\nQuery Id: 2 - Number of sequence files: 2\nQuery Id: 2 - Number of unsequence files: 0\nQuery Id: 2 - Number of chunks: 3\nQuery Id: 2 - Average size of chunks: 4113\nQuery Id: 2 - End time: 2020-06-28 10:54:44.059\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br")])]),n("p",[e._v("In order to avoid disordered output information caused by multiple queries being executed at the same time, the Query ID is added before each output information. Users can use "),n("code",[e._v('grep "Query ID: 2" tracing.txt')]),e._v(" to extract all tracing information of one query.")])])}),[],!1,null,null,null);t.default=s.exports}}]);