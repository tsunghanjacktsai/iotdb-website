(window.webpackJsonp=window.webpackJsonp||[]).push([[719],{1346:function(t,a,s){"use strict";s.r(a);var e=s(83),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-切换方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-切换方案"}},[t._v("#")]),t._v(" 1.切换方案")]),t._v(" "),s("p",[t._v("假如您原先接入 InfluxDB 的业务代码如下：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InfluxDB")]),t._v(" influxDB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InfluxDBFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("openurl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("您只需要将 InfluxDBFactory 替换为 "),s("strong",[t._v("IoTDBInfluxDBFactory")]),t._v(" 即可实现业务向 IoTDB 的切换：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InfluxDB")]),t._v(" influxDB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IoTDBInfluxDBFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("openurl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"_2-方案设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-方案设计"}},[t._v("#")]),t._v(" 2.方案设计")]),t._v(" "),s("h3",{attrs:{id:"_2-1-influxdb-protocol适配器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-influxdb-protocol适配器"}},[t._v("#")]),t._v(" 2.1 InfluxDB-Protocol适配器")]),t._v(" "),s("p",[t._v("该适配器以 IoTDB Java Session 接口为底层基础，实现了 InfluxDB 的 Java 接口 "),s("code",[t._v("interface InfluxDB")]),t._v("，对用户提供了所有 InfluxDB 的接口方法，最终用户可以无感知地使用 InfluxDB 协议向 IoTDB 发起写入和读取请求。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/API/IoTDB-InfluxDB/architecture-design.png?raw=true",alt:"architecture-design"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/API/IoTDB-InfluxDB/class-diagram.png?raw=true",alt:"class-diagram"}})]),t._v(" "),s("h3",{attrs:{id:"_2-2-元数据格式转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-元数据格式转换"}},[t._v("#")]),t._v(" 2.2 元数据格式转换")]),t._v(" "),s("p",[t._v("InfluxDB 的元数据是 tag-field 模型，IoTDB 的元数据是树形模型。为了使适配器能够兼容 InfluxDB 协议，需要把 InfluxDB 的元数据模型转换成 IoTDB 的元数据模型。")]),t._v(" "),s("h4",{attrs:{id:"_2-2-1-influxdb-元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-influxdb-元数据"}},[t._v("#")]),t._v(" 2.2.1 InfluxDB 元数据")]),t._v(" "),s("ol",[s("li",[t._v("database: 数据库名。")]),t._v(" "),s("li",[t._v("measurement: 测量指标名。")]),t._v(" "),s("li",[t._v("tags : 各种有索引的属性。")]),t._v(" "),s("li",[t._v("fields : 各种记录值（没有索引的属性）。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/API/IoTDB-InfluxDB/influxdb-data.png?raw=true",alt:"influxdb-data"}})]),t._v(" "),s("h4",{attrs:{id:"_2-2-2-iotdb-元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-iotdb-元数据"}},[t._v("#")]),t._v(" 2.2.2 IoTDB 元数据")]),t._v(" "),s("ol",[s("li",[t._v("storage group： 存储组。")]),t._v(" "),s("li",[t._v("path(time series ID)：存储路径。")]),t._v(" "),s("li",[t._v("measurement： 物理量。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/API/IoTDB-InfluxDB/iotdb-data.png?raw=true",alt:"iotdb-data"}})]),t._v(" "),s("h4",{attrs:{id:"_2-2-3-两者映射关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-两者映射关系"}},[t._v("#")]),t._v(" 2.2.3 两者映射关系")]),t._v(" "),s("p",[t._v("InfluxDB 元数据和 IoTDB 元数据有着如下的映射关系：")]),t._v(" "),s("ol",[s("li",[t._v("InfluxDB 中的 database 和 measurement 组合起来作为 IoTDB 中的 storage group。")]),t._v(" "),s("li",[t._v("InfluxDB 中的 field key 作为 IoTDB 中 measurement 路径，InfluxDB 中的 field value 即是该路径下记录的测点值。")]),t._v(" "),s("li",[t._v("InfluxDB 中的 tag 在 IoTDB 中使用 storage group 和 measurement 之间的路径表达。InfluxDB 的 tag key 由 storage group 和 measurement 之间路径的顺序隐式表达，tag value 记录为对应顺序的路径的名称。")])]),t._v(" "),s("p",[t._v("InfluxDB 元数据向 IoTDB 元数据的转换关系可以由下面的公示表示：")]),t._v(" "),s("p",[s("code",[t._v("root.{database}.{measurement}.{tag value 1}.{tag value 2}...{tag value N-1}.{tag value N}.{field key}")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/API/IoTDB-InfluxDB/influxdb-vs-iotdb-data.png?raw=true",alt:"influxdb-vs-iotdb-data"}})]),t._v(" "),s("p",[t._v("如上图所示，可以看出：")]),t._v(" "),s("p",[t._v("我们在 IoTDB 中使用 storage group 和 measurement 之间的路径来表达 InfluxDB tag 的概念，也就是图中右侧绿色方框的部分。")]),t._v(" "),s("p",[t._v("storage group 和 measurement 之间的每一层都代表一个 tag。如果 tag key 的数量为 N，那么 storage group 和 measurement 之间的路径的层数就是 N。我们对 storage group 和 measurement 之间的每一层进行顺序编号，每一个序号都和一个 tag key 一一对应。同时，我们使用 storage group 和 measurement 之间每一层 "),s("strong",[t._v("路径的名字")]),t._v(" 来记 tag value，tag key 可以通过自身的序号找到对应路径层级下的 tag value.")]),t._v(" "),s("h4",{attrs:{id:"_2-2-4-关键问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4-关键问题"}},[t._v("#")]),t._v(" 2.2.4 关键问题")]),t._v(" "),s("p",[t._v("在 InfluxDB 的 SQL 语句中，tag 出现的顺序的不同并不会影响实际的执行结果。")]),t._v(" "),s("p",[t._v("例如："),s("code",[t._v("insert factory, workshop=A1, production=B1 temperature=16.9")]),t._v(" 和 "),s("code",[t._v("insert factory, production=B1, workshop=A1 temperature=16.9")]),t._v(" 两条 InfluxDB SQL 的含义（以及执行结果）相等。")]),t._v(" "),s("p",[t._v("但在 IoTDB 中，上述插入的数据点可以存储在 "),s("code",[t._v("root.monitor.factory.A1.B1.temperature")]),t._v(" 下，也可以存储在 "),s("code",[t._v("root.monitor.factory.B1.A1.temperature")]),t._v(" 下。因此，IoTDB 路径中储存的 InfluxDB 的 tag 的顺序是需要被特别考虑的，因为 "),s("code",[t._v("root.monitor.factory.A1.B1.temperature")]),t._v(" 和\n"),s("code",[t._v("root.monitor.factory.B1.A1.temperature")]),t._v(" 是两条不同的序列。我们可以认为，IoTDB 元数据模型对 tag 顺序的处理是“敏感”的。")]),t._v(" "),s("p",[t._v("基于上述的考虑，我们还需要在 IoTDB 中记录 InfluxDB 每个 tag 对应在 IoTDB 路径中的层级顺序，以确保在执行 InfluxDB SQL 时，不论 InfluxDB SQL 中  tag 出现的顺序如何，只要该 SQL 表达的是对同一个时间序列上的操作，那么适配器都可以唯一对应到 IoTDB 中的一条时间序列上进行操作。")]),t._v(" "),s("p",[t._v("这里还需要考虑的另一个问题是：InfluxDB 的 tag key 及对应顺序关系应该如何持久化到 IoTDB 数据库中，以确保不会丢失相关信息。")]),t._v(" "),s("p",[s("strong",[t._v("解决方案：")])]),t._v(" "),s("p",[s("strong",[t._v("tag key 对应顺序关系在内存中的形式")])]),t._v(" "),s("p",[t._v("通过利用内存中的"),s("code",[t._v("Map<Measurement, Map<Tag Key, Order>>")]),t._v(" 这样一个 Map 结构，来维护 tag 在 IoTDB 路径层级上的顺序。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" measurementTagOrder\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("可以看出 Map 是一个两层的结构。")]),t._v(" "),s("p",[t._v("第一层的 Key 是 String 类型的 InfluxDB measurement，第一层的 Value 是一个 <String, Integer> 结构的 Map。")]),t._v(" "),s("p",[t._v("第二层的 Key 是 String 类型的 InfluxDB tag key，第二层的 Value 是 Integer 类型的 tag order，也就是 tag 在 IoTDB 路径层级上的顺序。")]),t._v(" "),s("p",[t._v("使用时，就可以先通过 InfluxDB measurement 定位，再通过 InfluxDB tag key 定位，最后就可以获得  tag 在 IoTDB 路径层级上的顺序了。")]),t._v(" "),s("p",[s("strong",[t._v("tag key 对应顺序关系的持久化方案")])]),t._v(" "),s("p",[t._v("存储组为"),s("code",[t._v("root.TAG_INFO")]),t._v("，分别用存储组下的 "),s("code",[t._v("database_name")]),t._v(", "),s("code",[t._v("measurement_name")]),t._v(", "),s("code",[t._v("tag_name")]),t._v(" 和 "),s("code",[t._v("tag_order")]),t._v(" 测点来存储 tag key 极其对应的顺序关系。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+---------------------------+------------------------------+----------------------+-----------------------+\n|                         Time|root.TAG_INFO.database_name|root.TAG_INFO.measurement_name|root.TAG_INFO.tag_name|root.TAG_INFO.tag_order|\n+-----------------------------+---------------------------+------------------------------+----------------------+-----------------------+\n|2021-10-12T01:21:26.907+08:00|                    monitor|                       factory|              workshop|                      1|\n|2021-10-12T01:21:27.310+08:00|                    monitor|                       factory|            production|                      2|\n|2021-10-12T01:21:27.313+08:00|                    monitor|                       factory|                  cell|                      3|\n|2021-10-12T01:21:47.314+08:00|                   building|                           cpu|              tempture|                      1|\n+-----------------------------+---------------------------+------------------------------+----------------------+-----------------------+\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h3",{attrs:{id:"_2-3-实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-实例"}},[t._v("#")]),t._v(" 2.3 实例")]),t._v(" "),s("h4",{attrs:{id:"_2-3-1-插入数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-插入数据"}},[t._v("#")]),t._v(" 2.3.1 插入数据")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("假定按照以下的顺序插入三条数据到 InfluxDB 中 (database=monitor)：")]),t._v(" "),s("p",[t._v("(1)"),s("code",[t._v("insert student,name=A,phone=B,sex=C score=99")])]),t._v(" "),s("p",[t._v("(2)"),s("code",[t._v("insert student,address=D score=98")])]),t._v(" "),s("p",[t._v("(3)"),s("code",[t._v("insert student,name=A,phone=B,sex=C,address=D score=97")])])]),t._v(" "),s("li",[s("p",[t._v("简单对上述 InfluxDB 的时序进行解释，database 是 monitor; measurement 是student；tag 分别是 name，phone、sex 和 address；field 是 score。")])])]),t._v(" "),s("p",[t._v("对应的InfluxDB的实际存储为：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("time                address name phone sex socre\n----                ------- ---- ----- --- -----\n1633971920128182000         A    B     C   99\n1633971947112684000 D                      98\n1633971963011262000 D       A    B     C   97\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[t._v("IoTDB顺序插入三条数据的过程如下：")]),t._v(" "),s("p",[t._v("(1)插入第一条数据时，需要将新出现的三个 tag key 更新到 table 中，IoTDB 对应的记录 tag 顺序的 table 为：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("database")]),t._v(" "),s("th",[t._v("measurement")]),t._v(" "),s("th",[t._v("tag_key")]),t._v(" "),s("th",[t._v("Order")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("monitor")]),t._v(" "),s("td",[t._v("student")]),t._v(" "),s("td",[t._v("name")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("monitor")]),t._v(" "),s("td",[t._v("student")]),t._v(" "),s("td",[t._v("phone")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("monitor")]),t._v(" "),s("td",[t._v("student")]),t._v(" "),s("td",[t._v("sex")]),t._v(" "),s("td",[t._v("2")])])])]),t._v(" "),s("p",[t._v("(2)插入第二条数据时，由于此时记录 tag 顺序的 table 中已经有了三个 tag key，因此需要将出现的第四个 tag key=address 更新记录。IoTDB 对应的记录 tag 顺序的 table 为：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("database")]),t._v(" "),s("th",[t._v("measurement")]),t._v(" "),s("th",[t._v("tag_key")]),t._v(" "),s("th",[t._v("order")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("monitor")]),t._v(" "),s("td",[t._v("student")]),t._v(" "),s("td",[t._v("name")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("monitor")]),t._v(" "),s("td",[t._v("student")]),t._v(" "),s("td",[t._v("phone")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("monitor")]),t._v(" "),s("td",[t._v("student")]),t._v(" "),s("td",[t._v("sex")]),t._v(" "),s("td",[t._v("2")])]),t._v(" "),s("tr",[s("td",[t._v("monitor")]),t._v(" "),s("td",[t._v("student")]),t._v(" "),s("td",[t._v("address")]),t._v(" "),s("td",[t._v("3")])])])]),t._v(" "),s("p",[t._v("(3)插入第三条数据时，此时四个 tag key 都已经记录过，所以不需要更新记录，IoTDB 对应的记录 tag 顺序的 table 为：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("database")]),t._v(" "),s("th",[t._v("measurement")]),t._v(" "),s("th",[t._v("tag_key")]),t._v(" "),s("th",[t._v("order")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("monitor")]),t._v(" "),s("td",[t._v("student")]),t._v(" "),s("td",[t._v("name")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("monitor")]),t._v(" "),s("td",[t._v("student")]),t._v(" "),s("td",[t._v("phone")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("monitor")]),t._v(" "),s("td",[t._v("student")]),t._v(" "),s("td",[t._v("sex")]),t._v(" "),s("td",[t._v("2")])]),t._v(" "),s("tr",[s("td",[t._v("monitor")]),t._v(" "),s("td",[t._v("student")]),t._v(" "),s("td",[t._v("address")]),t._v(" "),s("td",[t._v("3")])])])])]),t._v(" "),s("li",[s("p",[t._v("(1)第一条插入数据对应 IoTDB 时序为 root.monitor.student.A.B.C")]),t._v(" "),s("p",[t._v("(2)第二条插入数据对应 IoTDB 时序为 root.monitor.student.PH.PH.PH.D (其中PH表示占位符)。")]),t._v(" "),s("p",[t._v("需要注意的是，由于该条数据的 tag key=address 是第四个出现的，但是自身却没有对应的前三个 tag 值，因此需要用 PH 占位符来代替。这样做的目的是保证每条数据中的 tag 顺序不会乱，是符合当前顺序表中的顺序，从而查询数据的时候可以进行指定 tag 过滤。")]),t._v(" "),s("p",[t._v("(3)第三条插入数据对应 IoTDB 时序为 root.monitor.student.A.B.C.D")]),t._v(" "),s("p",[t._v("对应的 IoTDB 的实际存储为：")])])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+--------------------------------+-------------------------------------+----------------------------------+\n|                         Time|root.monitor.student.A.B.C.score|root.monitor.student.PH.PH.PH.D.score|root.monitor.student.A.B.C.D.score|\n+-----------------------------+--------------------------------+-------------------------------------+----------------------------------+\n|2021-10-12T01:21:26.907+08:00|                              99|                                 NULL|                              NULL|\n|2021-10-12T01:21:27.310+08:00|                            NULL|                                   98|                              NULL|\n|2021-10-12T01:21:27.313+08:00|                            NULL|                                 NULL|                                97|\n+-----------------------------+--------------------------------+-------------------------------------+----------------------------------+\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("ol",{attrs:{start:"5"}},[s("li",[s("p",[t._v("如果上面三条数据插入的顺序不一样，我们可以看到对应的实际path路径也就发生了改变，因为InfluxDB数据中的Tag出现顺序发生了变化，所对应的到IoTDB中的path节点顺序也就发生了变化。")]),t._v(" "),s("p",[t._v("但是这样实际并不会影响查询的正确性，因为一旦Influxdb的Tag顺序确定之后，查询也会按照这个顺序表记录的顺序进行Tag值过滤。所以并不会影响查询的正确性。")])])]),t._v(" "),s("h4",{attrs:{id:"_2-3-2-查询数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-查询数据"}},[t._v("#")]),t._v(" 2.3.2 查询数据")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("查询student中phone=B的数据。在database=monitor,measurement=student中tag=phone的顺序为1，order最大值是3，对应到IoTDB的查询为：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("monitor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("查询student中phone=B且score>97的数据，对应到IoTDB的查询为：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("monitor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" score"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("97")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("查询student中phone=B且score>97且时间在最近七天内的的数据，对应到IoTDB的查询为：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("monitor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" score"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("97")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("d \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("查询student中name=A或score>97，由于tag存储在路径中，因此没有办法用一次查询同时完成tag和field的"),s("em",[t._v("或")]),t._v("语义查询，因此需要多次查询进行或运算求并集，对应到IoTDB的查询为：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("monitor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("A \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("monitor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" score"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("97")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("最后手动对上面两次查询结果求并集。")])]),t._v(" "),s("li",[s("p",[t._v("查询student中(name=A或phone=B或sex=C)且score>97，由于tag存储在路径中，因此没有办法用一次查询完成tag的"),s("strong",[t._v("或")]),t._v("语义， 因此需要多次查询进行或运算求并集，对应到IoTDB的查询为：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("monitor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("A "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" score"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("97")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("monitor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" score"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("97")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("monitor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("student"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("C "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" score"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("97")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("最后手动对上面三次查询结果求并集。")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);