(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{636:function(t,e,a){"use strict";a.r(e);var i=a(1),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("To make this manual more practical, we will use a specific scenario example to illustrate how to operate IoTDB databases at all stages of use. See "),a("a",{attrs:{href:"https://github.com/apache/incubator-iotdb/blob/master/docs/Documentation/OtherMaterial-Sample%20Data.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("this page"),a("OutboundLink")],1),t._v(" for a look. For convenience, we also provide you with a sample data file in real scenario to import into the IoTDB system for trial and operation.")]),t._v(" "),a("p",[t._v("Download file: "),a("a",{attrs:{href:"https://raw.githubusercontent.com/apache/incubator-iotdb/master/docs/Documentation/OtherMaterial-Sample%20Data.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("IoTDB-SampleData.txt"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("According to the data attribute layers described in "),a("a",{attrs:{href:"https://raw.githubusercontent.com/apache/incubator-iotdb/master/docs/Documentation/OtherMaterial-Sample%20Data.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("sample data"),a("OutboundLink")],1),t._v(', we can express it as an attribute hierarchy structure based on the coverage of attributes and the subordinate relationship between them, as shown in Figure 2.1 below. Its hierarchical relationship is: power group layer - power plant layer - device layer - sensor layer. ROOT is the root node, and each node of sensor layer is called a leaf node. In the process of using IoTDB, you can directly connect the attributes on the path from ROOT node to each leaf node with ".", thus forming the name of a timeseries in IoTDB. For example, The left-most path in Figure 2.1 can generate a timeseries named '),a("code",[t._v("ROOT.ln.wf01.wt01.status")]),t._v(".")]),t._v(" "),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577327-7aa50780-1ef4-11e9-9d75-cadabb62444e.jpg"}}),t._v("\n**Figure 2.1 Attribute hierarchy structure**")]),t._v(" "),a("p",[t._v("After getting the name of the timeseries, we need to set up the storage group according to the actual scenario and scale of the data. Because in the scenario of this chapter data is usually arrived in the unit of groups (i.e., data may be across electric fields and devices), in order to avoid frequent switching of IO when writing data, and to meet the user's requirement of physical isolation of data in the unit of  groups, we set the storage group at the group layer.")]),t._v(" "),a("p",[t._v("Here are the basic concepts of the model involved in IoTDB:")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("A device is an installation equipped with sensors in real scenarios. In IoTDB, all sensors should have their corresponding devices.")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("A sensor is a detection equipment in an actual scene, which can sense the information to be measured, and can transform the sensed information into an electrical signal or other desired form of information output and send it to IoTDB. In IoTDB, all data and paths stored are organized in units of sensors.")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Storage groups are used to let users define how to organize and isolate different time series data on disk. Time series belonging to the same storage group will be continuously written to the same file in the corresponding folder. The file may be closed due to user commands or system policies, and hence the data coming next from these sensors will be stored in a new file in the same folder. Time series belonging to different storage groups are stored in different folders.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Setting a reasonable number of storage groups can lead to performance gains: there is neither the slowdown of the system due to frequent switching of IO (which will also take up a lot of memory and result in frequent memory-file switching) caused by too many storage files (or folders), nor the block of write commands caused by too few storage files (or folders) (which reduces concurrency).")]),t._v(" "),a("p",[t._v("Users should balance the storage group settings of storage files according to their own data size and usage scenarios to achieve better system performance. (There will be officially provided storage group scale and performance test reports in the future).")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("Once a prefix path is set as a storage group, the storage group settings cannot be changed.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("In IoTDB, a path is an expression that conforms to the following constraints:")]),t._v(" "),t._m(9),a("p",[t._v('Among them, STAR is "*" and DOT is ".".')]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("It is worth noting that in the path, root is a reserved character, which is only allowed to appear at the beginning of the time series mentioned below. If root appears in other layers, it cannot be parsed and an error is reported.")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("The timeseries path is the core concept in IoTDB. A timeseries path can be thought of as the complete path of a sensor that produces the time series data. All timeseries paths in IoTDB must start with root and end with the sensor. A timeseries path can also be called a full path.")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),a("p",[t._v("The timestamp is the time point at which data is produced. It includes absolute timestamps and relative timestamps")]),t._v(" "),t._m(25),t._v(" "),a("p",[t._v("Absolute timestamps in IoTDB are divided into two types: LONG and DATETIME (including DATETIME-INPUT and DATETIME-DISPLAY). When a user inputs a timestamp, he can use a LONG type timestamp or a DATETIME-INPUT type timestamp, and the supported formats of the DATETIME-INPUT type timestamp are shown in the table below:")]),t._v(" "),a("center",[t._v("**Supported formats of DATETIME-INPUT type timestamp**\n"),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Format")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy-MM-dd HH:mm:ss")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy/MM/dd HH:mm:ss")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy.MM.dd HH:mm:ss")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy-MM-dd'T'HH:mm:ss")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy/MM/dd'T'HH:mm:ss")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy.MM.dd'T'HH:mm:ss")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy-MM-dd HH:mm:ssZZ")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy/MM/dd HH:mm:ssZZ")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy.MM.dd HH:mm:ssZZ")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy-MM-dd'T'HH:mm:ssZZ")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy/MM/dd'T'HH:mm:ssZZ")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy.MM.dd'T'HH:mm:ssZZ")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy/MM/dd HH:mm:ss.SSS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy-MM-dd HH:mm:ss.SSS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy.MM.dd HH:mm:ss.SSS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy/MM/dd'T'HH:mm:ss.SSS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy-MM-dd'T'HH:mm:ss.SSS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy.MM.dd'T'HH:mm:ss.SSS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy-MM-dd HH:mm:ss.SSSZZ")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy/MM/dd HH:mm:ss.SSSZZ")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy.MM.dd HH:mm:ss.SSSZZ")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy-MM-dd'T'HH:mm:ss.SSSZZ")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy/MM/dd'T'HH:mm:ss.SSSZZ")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yyyy.MM.dd'T'HH:mm:ss.SSSZZ")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ISO8601 standard time format")])])])])]),t._v(" "),a("p",[t._v("IoTDB can support LONG types and DATETIME-DISPLAY types when displaying timestamps. The DATETIME-DISPLAY type can support user-defined time formats. The syntax of the custom time format is shown in the table below:")]),t._v(" "),a("center",[t._v("**The syntax of the custom time format**")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),a("p",[t._v("Syntax:")]),t._v(" "),t._m(29),a("center",[t._v("**The syntax of the duration unit**")]),t._v(" "),t._m(30),t._v(" "),a("p",[t._v("eg：")]),t._v(" "),t._m(31),t._m(32)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"data-model-and-terminology"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-model-and-terminology"}},[this._v("#")]),this._v(" Data Model and Terminology")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Device")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Sensor")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Storage Group")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Users can set any prefix path as a storage group. Provided that there are four time series "),a("code",[t._v("root.vehicle.d1.s1")]),t._v(", "),a("code",[t._v("root.vehicle.d1.s2")]),t._v(", "),a("code",[t._v("root.vehicle.d2.s1")]),t._v(", "),a("code",[t._v("root.vehicle.d2.s2")]),t._v(", two devices "),a("code",[t._v("d1")]),t._v(" and "),a("code",[t._v("d2")]),t._v(" under the path "),a("code",[t._v("root.vehicle")]),t._v(" may belong to the same owner or the same manufacturer, so d1 and d2 are closely related. At this point, the prefix path root.vehicle can be designated as a storage group, which will enable IoTDB to store all devices under it in the same folder. Newly added devices under "),a("code",[t._v("root.vehicle")]),t._v(" will also belong to this storage group.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Note: A full path ("),e("code",[this._v("root.vehicle.d1.s1")]),this._v(" as in the above example) is not allowed to be set as a storage group.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Note: The prefix of a time series must belong to a storage group. Before creating a time series, the user must set which storage group the series belongs to. Only the time series whose storage group is set can be persisted to disk.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("After a storage group is set, all parent and child layers of the corresponding prefix path are not allowed to be set up again (for example, after "),e("code",[this._v("root.ln")]),this._v(" is set as the storage group, the root layer and "),e("code",[this._v("root.ln.wf01")]),this._v(" are not allowed to be set as storage groups).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Path")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("path: LayerName (DOT LayerName)+\nLayerName: Identifier | STAR\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('We call the middle part of a path between two "." as a layer, and thus '),e("code",[this._v("root.A.B.C")]),this._v(" is a path with four layers.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Timeseries Path")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For example, if device1 of the vehicle type has a sensor named sensor1, its timeseries path can be expressed as: "),e("code",[this._v("root.vehicle.device1.sensor1")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Note: The layer of timeseries paths supported by the current IoTDB must be greater than or equal to four (it will be changed to two in the future).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Prefix Path")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The prefix path refers to the path where the prefix of a timeseries path is located. A prefix path contains all timeseries paths prefixed by the path. For example, suppose that we have three sensors: "),a("code",[t._v("root.vehicle.device1.sensor1")]),t._v(", "),a("code",[t._v("root.vehicle.device1.sensor2")]),t._v(", "),a("code",[t._v("root.vehicle.device2.sensor1")]),t._v(", the prefix path "),a("code",[t._v("root.vehicle.device1")]),t._v(" contains two timeseries paths "),a("code",[t._v("root.vehicle.device1.sensor1")]),t._v(" and "),a("code",[t._v("root.vehicle.device1.sensor2")]),t._v(" while "),a("code",[t._v("root.vehicle.device2.sensor1")]),t._v(" is excluded.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Path With Star")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In order to make it easier and faster to express multiple timeseries paths or prefix paths, IoTDB provides users with the path pith star. "),e("code",[this._v("*")]),this._v(" can appear in any layer of the path. According to the position where "),e("code",[this._v("*")]),this._v(" appears, the path with star can be divided into two types:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("*")]),this._v(" appears at the end of the path;")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("*")]),this._v(" appears in the middle of the path;")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("When "),a("code",[t._v("*")]),t._v(" appears at the end of the path, it represents ("),a("code",[t._v("*")]),t._v(")+, which is one or more layers of "),a("code",[t._v("*")]),t._v(". For example, "),a("code",[t._v("root.vehicle.device1.*")]),t._v(" represents all paths prefixed by "),a("code",[t._v("root.vehicle.device1")]),t._v(" with layers greater than or equal to 4, like "),a("code",[t._v("root.vehicle.device1.*")]),t._v(", "),a("code",[t._v("root.vehicle.device1.*.*")]),t._v(", "),a("code",[t._v("root.vehicle.device1.*.*.*")]),t._v(", etc.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("When "),a("code",[t._v("*")]),t._v(" appears in the middle of the path, it represents "),a("code",[t._v("*")]),t._v(" itself, i.e., a layer. For example, "),a("code",[t._v("root.vehicle.*.sensor1")]),t._v(" represents a 4-layer path which is prefixed with "),a("code",[t._v("root.vehicle")]),t._v(" and suffixed with "),a("code",[t._v("sensor1")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Note1: "),e("code",[this._v("*")]),this._v(" cannot be placed at the beginning of the path.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Note2: A path with "),e("code",[this._v("*")]),this._v(" at the end has the same meaning as a prefix path, e.g., "),e("code",[this._v("root.vehicle.*")]),this._v(" and "),e("code",[this._v("root.vehicle")]),this._v(" is the same.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Timestamp")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Absolute timestamp")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Symbol")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Meaning")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Presentation")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Examples")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("G")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("era")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("era")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("era")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("century of era (>=0)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("20")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("year of era (>=0)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1996")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("x")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("weekyear")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1996")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("w")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("week of weekyear")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("27")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("e")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("day of week")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("E")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("day of week")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Tuesday; Tue")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1996")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("D")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("day of year")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("189")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("M")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("month of year")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("month")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("July; Jul; 07")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("d")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("day of month")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("a")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("halfday of day")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PM")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("K")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("hour of halfday (0~11)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("h")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("clockhour of halfday (1~12)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("H")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("hour of day (0~23)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("k")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("clockhour of day (1~24)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("24")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("m")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("minute of hour")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("30")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("second of minute")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("55")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("S")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("fraction of second")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("millis")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("978")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("z")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("time zone")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Pacific Standard Time; PST")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Z")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("time zone offset/id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("zone")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-0800; -08:00; America/Los_Angeles")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("escape for text")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("delimiter")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("''")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("single quote")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("literal")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Relative timestamp")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Relative time refers to the time relative to the server time "),e("code",[this._v("now()")]),this._v(" and "),e("code",[this._v("DATETIME")]),this._v(" time.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(" Duration = (Digit+ ('Y'|'MO'|'W'|'D'|'H'|'M'|'S'|'MS'|'US'|'NS'))+\n RelativeTime = (now() | DATETIME) ((+|-) Duration)+\n       \n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Symbol")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Meaning")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Presentation")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Examples")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1y=365 days")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1y")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("mo")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("month")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1mo=30 days")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1mo")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("w")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("week")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1w=7 days")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1w")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("d")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("day")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1d=1 day")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1d")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("h")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("hour")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1h=3600 seconds")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1h")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("m")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("minute")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1m=60 seconds")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1m")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("second")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1s=1 second")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1s")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ms")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("millisecond")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1ms=1000_000 nanoseconds")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1ms")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("us")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("microsecond")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1us=1000 nanoseconds")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1us")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ns")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("nanosecond")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1ns=1 nanosecond")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1ns")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("now() - 1d2h //1 day and 2 hours earlier than the current server time\nnow() - 1w //1 week earlier than the current server time\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Note：There must be spaces on the left and right of '+' and '-'.")])])}],!1,null,null,null);e.default=n.exports}}]);