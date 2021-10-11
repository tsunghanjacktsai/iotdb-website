(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{1001:function(t,e,i){"use strict";i.r(e);var a=i(74),l=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"自动创建元数据"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#自动创建元数据"}},[t._v("#")]),t._v(" 自动创建元数据")]),t._v(" "),i("p",[t._v("默认开启自动创建功能，可通过 enable_auto_create_schema=false 关闭该功能。")]),t._v(" "),i("h3",{attrs:{id:"背景"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("无法预知实体和测点，无法提前建模")])]),t._v(" "),i("li",[i("p",[t._v("避免手动创建元数据")])])]),t._v(" "),i("h3",{attrs:{id:"自动创建存储组的元数据"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#自动创建存储组的元数据"}},[t._v("#")]),t._v(" 自动创建存储组的元数据")]),t._v(" "),i("ul",[i("li",[t._v("default_storage_group_level")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("default_storage_group_level")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("指定存储组在时间序列所处的层级，默认为第 1 层（root为第 0 层）")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("仅允许在第一次启动服务前修改")])])])]),t._v(" "),i("p",[t._v("以下图为例：")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("当 default_storage_group_level=1 时，将使用 root.turbine1 和 root.turbine2 作为存储组。")])]),t._v(" "),i("li",[i("p",[t._v("当 default_storage_group_level=2 时，将使用 root.turbine1.d1、root.turbine1.d2、root.turbine2.d1 和 root.turbine2.d2 作为存储组。")])])]),t._v(" "),i("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Data%20Concept/Auto-Create-MetaData/auto_create_sg_example.png?raw=true",alt:"auto create storage group example"}}),t._v(" "),i("h3",{attrs:{id:"自动创建序列的元数据-前端指定数据类型"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#自动创建序列的元数据-前端指定数据类型"}},[t._v("#")]),t._v(" 自动创建序列的元数据（前端指定数据类型）")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("用户在写入时精确指定数据类型：")]),t._v(" "),i("ul",[i("li",[t._v("Session中的insertTablet接口。")]),t._v(" "),i("li",[t._v("Session中带有TSDataType的insert接口。"),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("public void insertRecord(String deviceId, long time, List<String> measurements, List<TSDataType> types, Object... values);\npublic void insertRecords(List<String> deviceIds, List<Long> times, List<List<String>> measurementsList, List<List<TSDataType>> typesList, List<List<Object>> valuesList);\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br"),i("span",{staticClass:"line-number"},[t._v("2")]),i("br")])])]),t._v(" "),i("li",[t._v("......")])])]),t._v(" "),i("li",[i("p",[t._v("插入数据的同时自动创建序列，效率较高。")])])]),t._v(" "),i("h3",{attrs:{id:"自动创建序列的元数据-类型推断"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#自动创建序列的元数据-类型推断"}},[t._v("#")]),t._v(" 自动创建序列的元数据（类型推断）")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("在写入时直接传入字符串，数据库推断数据类型：")]),t._v(" "),i("ul",[i("li",[t._v("CLI的insert命令。")]),t._v(" "),i("li",[t._v("Session中不带有TSDataType的insert接口。"),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("public void insertRecord(String deviceId, long time, List<String> measurements, List<TSDataType> types, List<Object> values);\npublic void insertRecords(List<String> deviceIds, List<Long> times, List<List<String>> measurementsList, List<List<String>> valuesList);\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br"),i("span",{staticClass:"line-number"},[t._v("2")]),i("br")])])]),t._v(" "),i("li",[t._v("......")])])]),t._v(" "),i("li",[i("p",[t._v("由于类型推断会增加写入时间，所以通过类型推断自动创建序列元数据的效率要低于通过前端指定数据类型自动创建序列元数据，建议用户在可行时先选用前端指定数据类型的方式自动创建序列的元数据。")])])]),t._v(" "),i("h4",{attrs:{id:"类型推断"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#类型推断"}},[t._v("#")]),t._v(" 类型推断")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("数据(String)")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("字符串格式")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("iotdb-engine.properties配置项")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("boolean_string_infer_type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("BOOLEAN")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("integer_string_infer_type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("FLOAT")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("17000000（大于 2^24 的整数）")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("long_string_infer_type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("DOUBLE")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("1.2")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("floating")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("floating_string_infer_type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("FLOAT")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("NaN")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("nan")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("nan_string_infer_type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("DOUBLE")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("'I am text'")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("text")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("无")])])])]),t._v(" "),i("ul",[i("li",[i("p",[t._v("可配置的数据类型包括：BOOLEAN, INT32, INT64, FLOAT, DOUBLE, TEXT")])]),t._v(" "),i("li",[i("p",[t._v("long_string_infer_type 配置项的目的是防止使用 FLOAT 推断 integer_string_infer_type 而造成精度缺失。")])])]),t._v(" "),i("h4",{attrs:{id:"编码方式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#编码方式"}},[t._v("#")]),t._v(" 编码方式")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("数据类型")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("iotdb-engine.properties配置项")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("BOOLEAN")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("default_boolean_encoding")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("RLE")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("INT32")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("default_int32_encoding")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("RLE")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("INT64")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("default_int64_encoding")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("RLE")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("FLOAT")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("default_float_encoding")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("GORILLA")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("DOUBLE")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("default_double_encoding")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("GORILLA")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("TEXT")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("default_text_encoding")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("PLAIN")])])])]),t._v(" "),i("ul",[i("li",[i("p",[t._v("可配置的编码方式包括：PLAIN, RLE, TS_2DIFF, GORILLA, DICTIONARY")])]),t._v(" "),i("li",[i("p",[t._v("数据类型与编码方式的对应关系详见 "),i("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Data-Concept/Encoding.html"}},[t._v("编码方式")]),t._v("。")],1)])])])}),[],!1,null,null,null);e.default=l.exports}}]);