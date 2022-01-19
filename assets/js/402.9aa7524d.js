(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{1026:function(e,t,s){"use strict";s.r(t);var r=s(83),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"memory-estimation-tool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memory-estimation-tool"}},[e._v("#")]),e._v(" Memory Estimation Tool")]),e._v(" "),s("h1",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),s("p",[e._v("This tool calculates the minimum memory for writing to meet specific workload through a number of parameters input by users. (Memory in IoTDB is divided into three parts: write memory, read memory and reserve memory. Write memory is used for data write allocation. The ratio of the three can be set in the configuration file) The unit of result is in GB.")]),e._v(" "),s("h1",{attrs:{id:"input-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-parameters"}},[e._v("#")]),e._v(" Input parameters")]),e._v(" "),s("p",[e._v("When using this tool, the parameters needed to be input are as follows:\n"),s("table",[s("tr",[s("td",[e._v("Parameter")]),e._v(" "),s("td",[e._v("Parameter Description")]),e._v(" "),s("td",[e._v("Example")]),e._v(" "),s("td",[e._v("Necessary")])]),e._v(" "),s("tr",[s("td",[e._v("-sg | --storagegroup <storage group number>")]),e._v(" "),s("td",[e._v("storage group number")]),e._v(" "),s("td",[e._v("-sg 20")]),e._v(" "),s("td",[e._v("true")])]),e._v(" "),s("tr",[s("td",[e._v("-ts | --timeseries <total timeseries number>")]),e._v(" "),s("td",[e._v("total timeseries number")]),e._v(" "),s("td",[e._v("-ts 10000")]),e._v(" "),s("td",[e._v("true")])]),e._v(" "),s("tr",[s("td",[e._v("-mts | --maxtimeseries <max timeseries>")]),e._v(" "),s("td",[e._v("maximum number of timeseries among storage groups.If the time series are evenly distributed in the storage group, this parameter may not be set.")]),e._v(" "),s("td",[e._v("-mts 10000")]),e._v(" "),s("td",[e._v("false")])])])]),e._v(" "),s("p",[e._v("In memory estimation, if the calculation takes a long time, the tool will show the running progress below, which is convenient for users to master the progress.")]),e._v(" "),s("h1",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("p",[e._v("Users can use the tool using scripts under the ``IOTDB_HOME/bin`folder.\nFor Linux and Mac OS X users:")]),e._v(" "),s("ul",[s("li",[e._v("Assume that there are 20 storage groups, 10w timeseries and timeseries are evenly distributed in the storage groups:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  Shell >$IOTDB_HOME/bin/memory-tool.sh calmem -sg 20 -ts 100000\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("Assume that there are 20 storage groups, 10w timeseries and maximum timeseries number among storage groups is 50000:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  Shell >$IOTDB_HOME/bin/memory-tool.sh calmem -sg 20 -ts 100000 -tsm -50000\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("For Windows users:")]),e._v(" "),s("ul",[s("li",[e._v("Assume that there are 20 storage groups, 10w timeseries and timeseries are evenly distributed in the storage groups:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  Shell >$IOTDB_HOME\\bin\\memory-tool.bat calmem -sg 20 -ts 100000\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("Assume that there are 20 storage groups, 10w timeseries and maximum timeseries number among storage groups is 50000:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  Shell >$IOTDB_HOME\\bin\\memory-tool.bat calmem -sg 20 -ts 100000 -tsm -50000\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);