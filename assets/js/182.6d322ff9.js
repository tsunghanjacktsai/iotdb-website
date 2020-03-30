(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{507:function(e,t,s){"use strict";s.r(t);var a=s(1),_=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("AlignByDevicePlan 即按设备对齐查询对应的表结构为：")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("按设备对齐查询其实现原理主要是计算出查询中每个设备对应的测点和过滤条件，然后将查询按设备分别进行，最后将结果集拼装并返回。")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("首先解释一下 AlignByDevicePlan 中一些重要字段的含义：")]),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("在进行具体实现过程的讲解前，先给出一个覆盖较为完整的例子，下面的解释过程中将结合该示例进行说明。")]),e._v(" "),e._m(5),s("p",[e._v("其中，系统中的时间序列为：")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("下面将按具体过程进行分别解释：")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),s("p",[e._v("与原始数据查询不同，按设备对齐查询并不在此阶段进行 SELECT 语句和 WHERE 语句中后缀路径的拼接，而将在后续生成物理计划时，计算出每个设备对应的映射值和过滤条件。因此，按设备对齐在此阶段所做的工作只包括对 WHERE 语句中过滤条件的优化。")]),e._v(" "),s("p",[e._v("对过滤条件的优化主要包括三部分：去非、转化析取范式、合并同路径过滤条件。对应的优化器分别为：RemoveNotOptimizer, DnfFilterOptimizer, MergeSingleFilterOptimizer。该部分逻辑可参考："),s("router-link",{attrs:{to:"/#/SystemDesign/progress/chap2/sec2"}},[e._v("Planner")]),e._v(".")],1),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),s("p",[e._v("接下来介绍 AlignByDevicePlan 的计算过程：")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._m(18),e._v(" "),e._m(19),e._v(" "),s("p",[e._v("下面用示例总结一下通过该阶段计算得到的变量信息：")]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),s("p",[e._v("在生成物理计划后，则可以执行 TSServiceImpl 中的 executeQueryStatement() 方法生成结果集并返回，其中第一步是构造表头。")]),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),s("p",[e._v("其具体实现逻辑如下：")]),e._v(" "),e._m(26),e._v(" "),s("p",[e._v("最终得到的 Header 为：")]),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),s("p",[e._v("生成 ColumnHeader 后，最后一步为生成结果集填充结果并返回。")]),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),s("br"),e._v(" "),e._m(39),e._v(" "),s("p",[e._v("首先解释一下结果集中重要字段的含义：")]),e._v(" "),e._m(40),e._v(" "),e._m(41),e._v(" "),s("p",[e._v("其具体实现逻辑如下：")]),e._v(" "),s("ol",[e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44),e._v(" "),s("li",[e._v("判断当前子查询类型为 GroupByQuery, AggregationQuery, FillQuery 或 RawDataQuery 进行对应的查询并返回结果集，实现逻辑可参考"),s("router-link",{attrs:{to:"/#/SystemDesign/progress/chap5/sec3"}},[e._v("原始数据查询")]),e._v("，"),s("router-link",{attrs:{to:"/#/SystemDesign/progress/chap5/sec4"}},[e._v("聚合查询")]),e._v("，"),s("router-link",{attrs:{to:"/#/SystemDesign/progress/chap5/sec5"}},[e._v("降采样查询")]),e._v("。")],1)]),e._v(" "),e._m(45),e._v(" "),e._m(46),e._v(" "),e._m(47),e._v(" "),s("p",[e._v("其具体实现逻辑如下：")]),e._v(" "),e._m(48),e._v(" "),e._m(49)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"按设备对齐查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按设备对齐查询"}},[this._v("#")]),this._v(" 按设备对齐查询")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Time")]),e._v(" "),s("th",[e._v("Device")]),e._v(" "),s("th",[e._v("sensor1")]),e._v(" "),s("th",[e._v("sensor2")]),e._v(" "),s("th",[e._v("sensor3")]),e._v(" "),s("th",[e._v("...")])])]),e._v(" "),s("tbody",[s("tr",[s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"设计原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计原理"}},[this._v("#")]),this._v(" 设计原理")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"alignbydeviceplan-中重要字段含义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alignbydeviceplan-中重要字段含义"}},[this._v("#")]),this._v(" AlignByDevicePlan 中重要字段含义")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("List<String> measurements")]),e._v("：查询中出现的 measurement 列表。")]),e._v(" "),s("li",[s("code",[e._v("List<String> devices")]),e._v(": 由前缀路径得到的设备列表。")]),e._v(" "),s("li",[s("code",[e._v("Map<String, IExpression> deviceToFilterMap")]),e._v(": 用来存储设备对应的过滤条件。")]),e._v(" "),s("li",[s("code",[e._v("Map<String, TSDataType> measurementDataTypeMap")]),e._v("：AlignByDevicePlan 要求不同设备的同名 sensor 数据类型一致，该字段是一个 "),s("code",[e._v("measurementName -> dataType")]),e._v(" 的 Map 结构，用来验证同名 sensor 的数据类型一致性。如 "),s("code",[e._v("root.sg.d1.s1")]),e._v(" 和 "),s("code",[e._v("root.sg.d2.s1")]),e._v(" 应该是同一数据类型。")]),e._v(" "),s("li",[s("code",[e._v("enum MeasurementType")]),e._v("：记录三种 measurement 类型。在任何设备中都不存在的 measurement 为 "),s("code",[e._v("NonExist")]),e._v(" 类型；有单引号或双引号的 measurement 为 "),s("code",[e._v("Constant")]),e._v(" 类型；存在的 measurement 为 "),s("code",[e._v("Exist")]),e._v(" 类型。")]),e._v(" "),s("li",[s("code",[e._v("Map<String, MeasurementType> measurementTypeMap")]),e._v(": 该字段是一个 "),s("code",[e._v("measureName -> measurementType")]),e._v(" 的 Map 结构，用来记录查询中所有 measurement 的类型。")]),e._v(" "),s("li",[e._v("groupByPlan, fillQueryPlan, aggregationPlan：为了避免冗余，这三个执行计划被设定为 RawDataQueryPlan 的子类，而在 AlignByDevicePlan 中被设置为变量。如果查询计划属于这三个计划中的一种，则该字段会被赋值并保存。")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" s5 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("time")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("AND")]),e._v(" s1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v(" ALIGN "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" DEVICE\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("root.sg.d1.s1")]),this._v(" "),t("li",[this._v("root.sg.d1.s2")]),this._v(" "),t("li",[this._v("root.sg.d2.s1")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("存储组 "),t("code",[this._v("root.sg")]),this._v(" 共包含两个设备 d1 和 d2，其中 d1 有两个传感器 s1 和 s2，d2 只有传感器 s1，相同传感器 s1 的数据类型相同。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"逻辑计划生成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#逻辑计划生成"}},[this._v("#")]),this._v(" 逻辑计划生成")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("org.apache.iotdb.db.qp.Planner")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"物理计划生成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#物理计划生成"}},[this._v("#")]),this._v(" 物理计划生成")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("org.apache.iotdb.db.qp.strategy.PhysicalGenerator")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("生成逻辑计划后，将调用 PhysicalGenerator 类中的 "),t("code",[this._v("transformToPhysicalPlan()")]),this._v(" 方法将该逻辑计划转化为物理计划。对于按设备对齐查询，该方法的主要逻辑实现在 "),t("code",[this._v("transformQuery()")]),this._v(" 方法中。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("该阶段所做的主要工作为生成查询对应的")]),this._v(" "),t("code",[this._v("AlignByDevicePlan")]),this._v("，"),t("strong",[this._v("填充其中的变量信息。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("首先解释一下 "),t("code",[this._v("transformQuery()")]),this._v(" 方法中一些重要字段的含义(与 AlignByDevicePlan 中重复的字段见上文)：")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("prefixPaths, suffixPaths：前者为 FROM 子句中的前缀路径，示例中为 "),s("code",[e._v("[root.sg.d1, root.sg.*]")]),e._v("; 后者为 SELECT 子句中的后缀路径，示例中为 "),s("code",[e._v('[s1, "1", *, s2, s5]')]),e._v(".")]),e._v(" "),s("li",[e._v("devices：对前缀路径去通配符和设备去重后得到的设备列表，示例中为 "),s("code",[e._v("[root.sg.d1, root.sg.d2]")]),e._v("。")]),e._v(" "),s("li",[e._v("measurementSetOfGivenSuffix：中间变量，记录某一 suffix 对应的 measurement，示例中，对于后缀 *, "),s("code",[e._v("measurementSetOfGivenSuffix = {s1,s2}")]),e._v("，对于后缀 s1, "),s("code",[e._v("measurementSetOfGivenSuffix = {s1}")]),e._v(";")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("检查查询类型是否为 groupByPlan, fillQueryPlan, aggregationPlan 这三类查询中的一种，如果是则对相应的变量进行赋值，并更改 "),s("code",[e._v("AlignByDevicePlan")]),e._v(" 的查询类型。")]),e._v(" "),s("li",[e._v("遍历 SELECT 后缀路径，对每一个后缀路径设置一个中间变量为 "),s("code",[e._v("measurementSetOfGivenSuffix")]),e._v("，用来记录该后缀路径对应的所有 measurement。如果后缀路径以单引号或双引号开头，则直接在 "),s("code",[e._v("measurements")]),e._v(" 中增加该值，并记录其类型为 "),s("code",[e._v("Constant")]),e._v(" 类型。")]),e._v(" "),s("li",[e._v("否则将设备列表与该后缀路径拼接，得到完整的路径，如果拼接后的路径不存在，需要进一步判断该 measurement 是否在其它设备中存在，如果都没有则暂时识别为 "),s("code",[e._v("NonExist")]),e._v("，如果后续出现设备存在该 measurement，则覆盖 "),s("code",[e._v("NonExist")]),e._v(" 值为 "),s("code",[e._v("Exist")]),e._v("。")]),e._v(" "),s("li",[e._v("如果拼接后路径存在，则证明 measurement 是 "),s("code",[e._v("Exist")]),e._v(" 类型，需要检验数据类型的一致性，不满足返回错误信息，满足则记录下该 Measurement，对 "),s("code",[e._v("measurementSetOfGivenSuffix")]),e._v(" 等进行更新。")]),e._v(" "),s("li",[e._v("在一层 suffix 循环结束后，将该层循环中出现的 "),s("code",[e._v("measurementSetOfGivenSuffix")]),e._v(" 加入 "),s("code",[e._v("measurements")]),e._v(" 中。在整个循环结束后，将循环中得到的变量信息赋值到 AlignByDevicePlan 中。此处得到的 measurements 列表是未经过去重的，在生成 "),s("code",[e._v("ColumnHeader")]),e._v(" 时将进行去重。")]),e._v(" "),s("li",[e._v("最后调用 "),s("code",[e._v("concatFilterByDevice()")]),e._v(" 方法计算 "),s("code",[e._v("deviceToFilterMap")]),e._v("，得到将每个设备分别拼接后对应的 Filter 信息。")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Map")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("IExpression")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("concatFilterByDevice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" devices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("FilterOperator")]),e._v(" operator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n输入：去重后的 devices 列表和未拼接的 "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("FilterOperator")]),e._v("\n输入：经过拼接后的 deviceToFilterMap，记录了每个设备对应的 "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Filter")]),e._v(" 信息\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("concatFilterByDevice()")]),this._v(" 方法的主要处理逻辑在 "),t("code",[this._v("concatFilterPath()")]),this._v(" 中：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("concatFilterPath()")]),this._v(" 方法遍历未拼接的 FilterOperator 二叉树，判断节点是否为叶子节点，如果是，则取该叶子结点的路径，如果路径以 time 或 root 开头则不做处理，否则将设备名与节点路径进行拼接后返回；如果不是，则对该节点的所有子节点进行迭代处理。示例中，设备1过滤条件拼接后的结果为 "),t("code",[this._v("time = 1 AND root.sg.d1.s1 < 25")]),this._v("，设备2为 "),t("code",[this._v("time = 1 AND root.sg.d2.s1 < 25")]),this._v("。")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("measurement 列表 "),s("code",[e._v("measurements")]),e._v("："),s("code",[e._v('[s1, "1", s1, s2, s2, s5]')])]),e._v(" "),s("li",[e._v("measurement 类型 "),s("code",[e._v("measurementTypeMap")]),e._v("：\n"),s("ul",[s("li",[s("code",[e._v("s1 -> Exist")])]),e._v(" "),s("li",[s("code",[e._v("s2 -> Exist")])]),e._v(" "),s("li",[s("code",[e._v('"1" -> Constant')])]),e._v(" "),s("li",[s("code",[e._v("s5 -> NonExist")])])])]),e._v(" "),s("li",[e._v("每个设备的过滤条件 "),s("code",[e._v("deviceToFilterMap")]),e._v("：\n"),s("ul",[s("li",[s("code",[e._v("root.sg.d1 -> time = 1 AND root.sg.d1.s1 < 25")])]),e._v(" "),s("li",[s("code",[e._v("root.sg.d2 -> time = 1 AND root.sg.d2.s1 < 25")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"构造表头-columnheader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构造表头-columnheader"}},[this._v("#")]),this._v(" 构造表头 (ColumnHeader)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("org.apache.iotdb.db.service.TSServiceImpl")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("按设备对齐查询在调用 "),t("code",[this._v("TSServiceImpl.getQueryColumnHeaders()")]),this._v(" 方法后，根据查询类型进入 "),t("code",[this._v("TSServiceImpl.getAlignByDeviceQueryHeaders()")]),this._v(" 来构造表头。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("getAlignByDeviceQueryHeaders()")]),this._v(" 方法声明如下：")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("private")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getAlignByDeviceQueryHeaders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AlignByDevicePlan")]),e._v(" plan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" respColumns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" columnTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n输入：当前执行的物理计划 "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AlignByDevicePlan")]),e._v(" 和需要输出的列名 respColumns 以及其对应的数据类型 columnTypes\n输出：计算得到的列名 respColumns 和数据类型 columnTypes\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("首先加入 "),s("code",[e._v("Device")]),e._v(" 列，其数据类型为 "),s("code",[e._v("TEXT")]),e._v("；")]),e._v(" "),s("li",[e._v("遍历未去重的 measurements 列表，判断当前遍历 measurement 的类型，如果是 "),s("code",[e._v("Exist")]),e._v(" 类型则从 "),s("code",[e._v("measurementTypeMap")]),e._v(" 中取得其类型；其余两种类型设其类型为 "),s("code",[e._v("TEXT")]),e._v("，然后将 measurement 及其类型加入表头数据结构中。")]),e._v(" "),s("li",[e._v("根据中间变量 "),s("code",[e._v("deduplicatedMeasurements")]),e._v(" 对 measurements 进行去重。")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Time")]),e._v(" "),s("th",[e._v("Device")]),e._v(" "),s("th",[e._v("s1")]),e._v(" "),s("th",[e._v("1")]),e._v(" "),s("th",[e._v("s1")]),e._v(" "),s("th",[e._v("s2")]),e._v(" "),s("th",[e._v("s2")]),e._v(" "),s("th",[e._v("s5")])])]),e._v(" "),s("tbody",[s("tr",[s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("去重后的 "),t("code",[this._v("measurements")]),this._v(" 为 "),t("code",[this._v('[s1, "1", s2, s5]')]),this._v("。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"结果集生成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结果集生成"}},[this._v("#")]),this._v(" 结果集生成")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"结果集创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结果集创建"}},[this._v("#")]),this._v(" 结果集创建")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("org.apache.iotdb.db.service.TSServiceImpl")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("该阶段需要调用 "),t("code",[this._v("TSServiceImpl.createQueryDataSet()")]),this._v(" 创建一个新的结果集，这部分实现逻辑较为简单，对于 AlignByDeviceQuery 而言，只需要新建一个 "),t("code",[this._v("AlignByDeviceDataSet")]),this._v(" 即可，在构造函数中将把 AlignByDevicePlan 中的参数赋值到新建的结果集中。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"结果集填充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结果集填充"}},[this._v("#")]),this._v(" 结果集填充")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("org.apache.iotdb.db.utils.QueryDataSetUtils")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("接下来需要填充结果，AlignByDeviceQuery 将调用 "),t("code",[this._v("TSServiceImpl.fillRpcReturnData()")]),this._v(" 方法，然后根据查询类型进入 "),t("code",[this._v("QueryDataSetUtils.convertQueryDataSetByFetchSize()")]),this._v(" 方法.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("convertQueryDataSetByFetchSize()")]),this._v(" 方法中获取结果的重要方法为 QueryDataSet 的 "),t("code",[this._v("hasNext()")]),this._v(" 方法。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("hasNext()")]),this._v(" 方法的主要逻辑如下：")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("判断是否有规定行偏移量 "),s("code",[e._v("rowOffset")]),e._v("，如果有则跳过需要偏移的行数；如果结果总行数少于规定的偏移量，则返回 false。")]),e._v(" "),s("li",[e._v("判断是否有规定行数限制 "),s("code",[e._v("rowLimit")]),e._v("，如果有则比较当前输出行数，当前输出行数大于行数限制则返回 false。")]),e._v(" "),s("li",[e._v("进入 "),s("code",[e._v("AlignByDeviceDataSet.hasNextWithoutConstraint()")]),e._v(" 方法")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("org.apache.iotdb.db.query.dataset.AlignByDeviceDataSet")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("deviceIterator")]),this._v("：按设备对齐查询本质上是计算出每个设备对应的映射值和过滤条件，然后将查询按设备分别进行，该字段即为设备的迭代器，每次查询获取一个设备进行。")]),this._v(" "),t("li",[t("code",[this._v("currentDataSet")]),this._v("：该字段代表了本次对某设备查询所获得的结果集。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("hasNextWithoutConstraint()")]),this._v(" 方法所做的工作主要是判断当前结果集是否有下一结果，没有则获取下一设备，计算该设备执行查询需要的路径、数据类型及过滤条件，然后按其查询类型执行具体的查询计划后获得结果集，直至没有设备可进行查询。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("首先判断当前结果集是否被初始化且有下一个结果，如果是则直接返回 true，即当前可以调用 "),t("code",[this._v("next()")]),this._v(" 方法获取下一个 "),t("code",[this._v("RowRecord")]),this._v("；否则设置结果集未被初始化进入步骤2.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("迭代 "),t("code",[this._v("deviceIterator")]),this._v(" 获取本次执行需要的设备，之后通过设备路径在 MManager 中查询到该设备节点，并取得该设备节点下的所有传感器节点，保存为 "),t("code",[this._v("measurementOfGivenDevice")]),this._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[e._v("遍历当前查询中的所有 measurement，将其与执行设备的所有传感器节点进行比较，得到该设备需要查询的列 "),s("code",[e._v("executeColumns")]),e._v(". 之后拼接当前设备名与 measurements，计算当前设备的查询路径、数据类型及过滤条件，得到对应的字段分别为 "),s("code",[e._v("executePaths")]),e._v(", "),s("code",[e._v("tsDataTypes")]),e._v(", "),s("code",[e._v("expression")]),e._v("，如果是聚合查询，则还需要计算 "),s("code",[e._v("executeAggregations")]),e._v("。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("通过 "),t("code",[this._v("hasNextWithoutConstraint()")]),this._v(" 方法初始化结果集并确保有下一结果后，则可调用 "),t("code",[this._v("QueryDataSet.next()")]),this._v(" 方法获取下一个 "),t("code",[this._v("RowRecord")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("next()")]),this._v(" 方法主要实现逻辑为 "),t("code",[this._v("AlignByDeviceDataSet.nextWithoutConstraint()")]),this._v(" 方法。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("nextWithoutConstraint()")]),this._v(" 方法所做的工作主要是"),t("strong",[this._v("将单个设备查询所得到的按时间对齐的结果集形式变换为按设备对齐的结果集形式")]),this._v("，并返回变换后的 "),t("code",[this._v("RowRecord")]),this._v("。")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("首先从结果集中取得下一个按时间对齐的 "),s("code",[e._v("originRowRecord")]),e._v("。")]),e._v(" "),s("li",[e._v("新建一个添加了时间戳的 "),s("code",[e._v("RowRecord")]),e._v("，向其中加入设备列，先根据 "),s("code",[e._v("executeColumns")]),e._v(" 与得到的结果建立一个由 "),s("code",[e._v("measurementName -> Field")]),e._v(" 的 Map 结构 "),s("code",[e._v("currentColumnMap")]),e._v(".")]),e._v(" "),s("li",[e._v("之后只需要遍历去重后的 "),s("code",[e._v("measurements")]),e._v(" 列表，判断其类型，如果类型为 "),s("code",[e._v("Exist")]),e._v(" 则根据 measurementName 从 "),s("code",[e._v("currentColumnMap")]),e._v(" 中取得其对应的结果，如果没有则设为 "),s("code",[e._v("null")]),e._v("；如果是 "),s("code",[e._v("NonExist")]),e._v("类型，则直接设为 "),s("code",[e._v("null")]),e._v("; 如果是 "),s("code",[e._v("Constant")]),e._v(" 类型，则将 "),s("code",[e._v("measureName")]),e._v(" 作为该列的值。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("再根据变换后的 "),t("code",[this._v("RowRecord")]),this._v(" 写入输出数据流后，即可将结果集返回。")])}],!1,null,null,null);t.default=_.exports}}]);