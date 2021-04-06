(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{1040:function(t,e,v){"use strict";v.r(e);var a=v(69),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"数据模型与技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据模型与技术"}},[t._v("#")]),t._v(" 数据模型与技术")]),t._v(" "),v("p",[t._v("本节，我们以电力场景为例，说明如何在IoTDB中创建一个正确的数据模型。附件是一个样例数据文件，方便您练习IoTDB。")]),t._v(" "),v("p",[t._v("附件下载: "),v("a",{attrs:{href:"https://github.com/thulab/iotdb/files/4438687/OtherMaterial-Sample.Data.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("IoTDB-SampleData.txt"),v("OutboundLink")],1),t._v("。")]),t._v(" "),v("p",[t._v("根据"),v("a",{attrs:{href:"https://github.com/thulab/iotdb/files/4438687/OtherMaterial-Sample.Data.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据"),v("OutboundLink")],1),t._v("的属性层级，属性涵盖范围以及数据之间的从属关系，我们可将其数据模型表示为如图2.1所示的属性层级组织结构，即电力集团层-电厂层-设备层-传感器层。其中ROOT为根节点，传感器层的每一个节点为叶子节点。IoTDB的语法规定，ROOT节点到叶子节点的路径以“.”连接，以此完整路径命名IoTDB中的一个时间序列。例如，图2.1最左侧路径对应的时间序列名称为"),v("code",[t._v("ROOT.ln.wf01.wt01.status")]),t._v("。")]),t._v(" "),v("center",[v("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577327-7aa50780-1ef4-11e9-9d75-cadabb62444e.jpg"}})]),t._v(" "),v("p",[v("strong",[t._v("图2.1 属性层级组织结构")])]),t._v(" "),v("p",[t._v("得到时间序列的名称之后，我们需要根据数据的实际场景和规模设置存储组。由于在本文所述场景中，每次到达的数据通常以集团为单位（即数据可能为跨电场、跨设备的），为了写入数据时避免频繁切换IO降低系统速度，且满足用户以集团为单位进行物理隔离数据的要求，我们将存储组设置在集团层。")]),t._v(" "),v("p",[t._v("根据模型结构，IoTDB中涉及如下基本概念：")]),t._v(" "),v("ul",[v("li",[t._v("设备")])]),t._v(" "),v("p",[t._v("设备指的是在实际场景中拥有传感器的装置。在IoTDB当中，所有的传感器都应有其对应的归属的设备。")]),t._v(" "),v("ul",[v("li",[t._v("传感器")])]),t._v(" "),v("p",[t._v("传感器是指在实际场景中的一种检测装置，它能感受到被测量的信息，并能将感受到的信息按一定规律变换成为电信号或其他所需形式的信息输出并发送给IoTDB。在IoTDB当中，存储的所有的数据及路径，都是以传感器为单位进行组织。")]),t._v(" "),v("ul",[v("li",[t._v("存储组")])]),t._v(" "),v("p",[t._v("用户可以将任意前缀路径设置成存储组。如有4条时间序列"),v("code",[t._v("root.vehicle.d1.s1")]),t._v(", "),v("code",[t._v("root.vehicle.d1.s2")]),t._v(", "),v("code",[t._v("root.vehicle.d2.s1")]),t._v(", "),v("code",[t._v("root.vehicle.d2.s2")]),t._v("，路径"),v("code",[t._v("root.vehicle")]),t._v("下的两个设备d1,d2可能属于同一个业主，或者同一个厂商，因此关系紧密。这时候就可以将前缀路径"),v("code",[t._v("root.vehicle")]),t._v("指定为一个存储组，这将使得IoTDB将其下的所有设备的数据存储在同一个文件夹下。未来"),v("code",[t._v("root.vehicle")]),t._v("下增加了新的设备，也将属于该存储组。")]),t._v(" "),v("blockquote",[v("p",[t._v("注意：不允许将一个完整路径(如上例的"),v("code",[t._v("root.vehicle.d1.s1")]),t._v(")设置成存储组。")])]),t._v(" "),v("p",[t._v("设置合理数量的存储组可以带来性能的提升：既不会因为产生过多的存储文件（夹）导致频繁切换IO降低系统速度（并且会占用大量内存且出现频繁的内存-文件切换），也不会因为过少的存储文件夹（降低了并发度从而）导致写入命令阻塞。")]),t._v(" "),v("p",[t._v("用户应根据自己的数据规模和使用场景，平衡存储文件的存储组设置，以达到更好的系统性能。（未来会有官方提供的存储组规模与性能测试报告）")]),t._v(" "),v("blockquote",[v("p",[t._v("注意：一个时间序列其前缀必须属于某个存储组。在创建时间序列之前，用户必须设定该序列属于哪个存储组（Storage Group）。只有设置了存储组的时间序列才可以被持久化在磁盘上。")])]),t._v(" "),v("p",[t._v("一个前缀路径一旦被设定成存储组后就不可以再更改这个存储组的设置。")]),t._v(" "),v("p",[t._v("一个存储组设定后，其对应的前缀路径的所有父层级与子层级也不允许再设置存储组（如，"),v("code",[t._v("root.ln")]),t._v("设置存储组后，root层级与"),v("code",[t._v("root.ln.wf01")]),t._v("不允许被设置为存储组）。")]),t._v(" "),v("ul",[v("li",[t._v("路径")])]),t._v(" "),v("p",[t._v("在IoTDB中，路径是指符合以下约束的表达式：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("path: LayerName (DOT LayerName)+\nLayerName: Identifier | STAR\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])]),v("p",[t._v("其中STAR为“*”，DOT为“.”。")]),t._v(" "),v("p",[t._v("我们称一个路径中在两个“.”中间的部分叫做一个层级，则"),v("code",[t._v("root.a.b.c")]),t._v("为一个层级为4的路径。")]),t._v(" "),v("p",[t._v("值得说明的是，在路径中，root为一个保留字符，它只允许出现在下文提到的时间序列的开头，若其他层级出现root，则无法解析，提示报错。")]),t._v(" "),v("p",[t._v("在路径中，不允许使用单引号。如果你想在LayerName中使用“.”等特殊字符，请使用双引号。例如，"),v("code",[t._v('root.sg."d.1"."s.1"')]),t._v("。双引号内支持使用转义符进行双引号的嵌套，如 "),v("code",[t._v('root.sg.d1."s.\\"t\\"1"')]),t._v("。")]),t._v(" "),v("blockquote",[v("p",[t._v("注意: storage group中的LayerName只支持数字，字母，和下划线。")])]),t._v(" "),v("ul",[v("li",[t._v("时间序列")])]),t._v(" "),v("p",[t._v("时间序列是IoTDB中的核心概念。时间序列可以被看作产生时序数据的传感器的所在完整路径，在IoTDB中所有的时间序列必须以root开始、以传感器作为结尾。一个时间序列也可称为一个全路径。")]),t._v(" "),v("p",[t._v("例如，vehicle种类的device1有名为sensor1的传感器，则它的时间序列可以表示为："),v("code",[t._v("root.vehicle.device1.sensor1")]),t._v("。")]),t._v(" "),v("blockquote",[v("p",[t._v("注意：当前IoTDB支持的时间序列必须大于等于四层（之后会更改为两层）。")])]),t._v(" "),v("ul",[v("li",[t._v("前缀路径")])]),t._v(" "),v("p",[t._v("前缀路径是指一个时间序列的前缀所在的路径，一个前缀路径包含以该路径为前缀的所有时间序列。例如当前我们有"),v("code",[t._v("root.vehicle.device1.sensor1")]),t._v(", "),v("code",[t._v("root.vehicle.device1.sensor2")]),t._v(", "),v("code",[t._v("root.vehicle.device2.sensor1")]),t._v("三个传感器，则"),v("code",[t._v("root.vehicle.device1")]),t._v("前缀路径包含"),v("code",[t._v("root.vehicle.device1.sensor1")]),t._v("、"),v("code",[t._v("root.vehicle.device1.sensor2")]),t._v("两个时间序列，而不包含"),v("code",[t._v("root.vehicle.device2.sensor1")]),t._v("。")]),t._v(" "),v("ul",[v("li",[t._v("3.1.7 带"),v("code",[t._v("*")]),t._v("路径\n为了使得在表达多个时间序列或表达前缀路径的时候更加方便快捷，IoTDB为用户提供带"),v("code",[t._v("*")]),t._v("路径。"),v("code",[t._v("*")]),t._v("可以出现在路径中的任何层。按照"),v("code",[t._v("*")]),t._v("出现的位置，带"),v("code",[t._v("*")]),t._v("路径可以分为两种：")])]),t._v(" "),v("p",[v("code",[t._v("*")]),t._v("出现在路径的结尾；")]),t._v(" "),v("p",[v("code",[t._v("*")]),t._v("出现在路径的中间；")]),t._v(" "),v("p",[t._v("当"),v("code",[t._v("*")]),t._v("出现在路径的结尾时，其代表的是（"),v("code",[t._v("*")]),t._v("）+，即为一层或多层"),v("code",[t._v("*")]),t._v("。例如"),v("code",[t._v("root.vehicle.device1.*")]),t._v("代表的是"),v("code",[t._v("root.vehicle.device1.*")]),t._v(", "),v("code",[t._v("root.vehicle.device1.*.*")]),t._v(", "),v("code",[t._v("root.vehicle.device1.*.*.*")]),t._v("等所有以"),v("code",[t._v("root.vehicle.device1")]),t._v("为前缀路径的大于等于4层的路径。")]),t._v(" "),v("p",[t._v("当"),v("code",[t._v("*")]),t._v("出现在路径的中间，其代表的是"),v("code",[t._v("*")]),t._v("本身，即为一层。例如"),v("code",[t._v("root.vehicle.*.sensor1")]),t._v("代表的是以"),v("code",[t._v("root.vehicle")]),t._v("为前缀，以"),v("code",[t._v("sensor1")]),t._v("为后缀，层次等于4层的路径。")]),t._v(" "),v("blockquote",[v("p",[t._v("注意："),v("code",[t._v("*")]),t._v("不能放在路径开头。")])]),t._v(" "),v("blockquote",[v("p",[t._v("注意："),v("code",[t._v("*")]),t._v("放在末尾时与前缀路径表意相同，例如"),v("code",[t._v("root.vehicle.*")]),t._v("与"),v("code",[t._v("root.vehicle")]),t._v("为相同含义。")])]),t._v(" "),v("ul",[v("li",[t._v("时间戳")])]),t._v(" "),v("p",[t._v("时间戳是一个数据到来的时间点，其中包括绝对时间戳和相对时间戳。")]),t._v(" "),v("ul",[v("li",[t._v("绝对时间戳")])]),t._v(" "),v("p",[t._v("IOTDB中绝对时间戳分为二种，一种为LONG类型，一种为DATETIME类型（包含DATETIME-INPUT, DATETIME-DISPLAY两个小类）。")]),t._v(" "),v("p",[t._v("在用户在输入时间戳时，可以使用LONG类型的时间戳或DATETIME-INPUT类型的时间戳，其中DATETIME-INPUT类型的时间戳支持格式如表所示：")]),t._v(" "),v("center",[t._v("**DATETIME-INPUT类型支持格式**\n"),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("format")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd HH:mm:ss")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd HH:mm:ss")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd HH:mm:ss")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd'T'HH:mm:ss")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd'T'HH:mm:ss")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd'T'HH:mm:ss")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd HH:mm:ssZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd HH:mm:ssZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd HH:mm:ssZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd'T'HH:mm:ssZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd'T'HH:mm:ssZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd'T'HH:mm:ssZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd HH:mm:ss.SSS")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd HH:mm:ss.SSS")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd HH:mm:ss.SSS")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd'T'HH:mm:ss.SSS")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd'T'HH:mm:ss.SSS")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd'T'HH:mm:ss.SSS")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd HH:mm:ss.SSSZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd HH:mm:ss.SSSZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd HH:mm:ss.SSSZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd'T'HH:mm:ss.SSSZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd'T'HH:mm:ss.SSSZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd'T'HH:mm:ss.SSSZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("ISO8601 standard time format")])])])])]),t._v(" "),v("p",[t._v("IoTDB在显示时间戳时可以支持LONG类型以及DATETIME-DISPLAY类型，其中DATETIME-DISPLAY类型可以支持用户自定义时间格式。自定义时间格式的语法如表所示：")]),t._v(" "),v("center",[t._v("**DATETIME-DISPLAY自定义时间格式的语法**\n"),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("Symbol")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Meaning")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Presentation")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Examples")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("G")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("era")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("era")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("era")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("century of era (>=0)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("20")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("year of era (>=0)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1996")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("x")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("weekyear")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1996")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("w")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("week of weekyear")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("27")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("e")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("day of week")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("E")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("day of week")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Tuesday; Tue")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("y")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1996")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("D")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("day of year")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("189")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("M")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("month of year")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("month")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("July; Jul; 07")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("d")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("day of month")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("10")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("a")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("halfday of day")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("PM")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("K")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("hour of halfday (0~11)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("h")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("clockhour of halfday (1~12)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("12")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("H")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("hour of day (0~23)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("k")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("clockhour of day (1~24)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("24")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("m")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("minute of hour")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("second of minute")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("55")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("S")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("fraction of second")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("millis")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("978")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("z")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("time zone")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Pacific Standard Time; PST")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Z")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("time zone offset/id")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("zone")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("-0800; -08:00; America/Los_Angeles")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("'")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("escape for text")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("delimiter")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("''")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("single quote")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("literal")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("'")])])])])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("相对时间戳")]),t._v(" "),v("p",[t._v("相对时间是指与服务器时间"),v("code",[t._v("now()")]),t._v("和"),v("code",[t._v("DATETIME")]),t._v("类型时间相差一定时间间隔的时间。\n形式化定义为：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Duration = (Digit+ ('Y'|'MO'|'W'|'D'|'H'|'M'|'S'|'MS'|'US'|'NS'))+\nRelativeTime = (now() | DATETIME) ((+|-) Duration)+\n      \n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br")])]),v("center",[t._v("**The syntax of the duration unit**\n"),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("Symbol")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Meaning")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Presentation")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Examples")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("y")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1y=365 days")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1y")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("mo")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("month")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1mo=30 days")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1mo")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("w")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("week")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1w=7 days")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1w")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("d")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("day")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1d=1 day")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1d")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("h")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("hour")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1h=3600 seconds")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1h")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("m")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("minute")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1m=60 seconds")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1m")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("second")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1s=1 second")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1s")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("millisecond")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1ms=1000_000 nanoseconds")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1ms")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("us")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("microsecond")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1us=1000 nanoseconds")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1us")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("ns")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("nanosecond")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1ns=1 nanosecond")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1ns")])])])])]),t._v(" "),v("p",[t._v("例子：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("now() - 1d2h //比服务器时间早1天2小时的时间\nnow() - 1w //比服务器时间早1周的时间\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])]),v("blockquote",[v("p",[t._v("注意：'+'和'—'的左右两边必须有空格")])])],1)])],1)}),[],!1,null,null,null);e.default=_.exports}}]);