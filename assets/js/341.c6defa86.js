(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{909:function(s,t,a){"use strict";a.r(t);var e=a(68),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ddl-数据定义语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ddl-数据定义语言"}},[s._v("#")]),s._v(" DDL (数据定义语言)")]),s._v(" "),a("h2",{attrs:{id:"创建存储组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建存储组"}},[s._v("#")]),s._v(" 创建存储组")]),s._v(" "),a("p",[s._v("我们可以根据存储模型建立相应的存储组。创建存储组的SQL语句如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB > set storage group to root.ln\nIoTDB > set storage group to root.sgcc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("根据以上两条SQL语句，我们可以创建出两个存储组。")]),s._v(" "),a("p",[s._v("需要注意的是，存储组的父子节点都不能再设置存储组。例如在已经有"),a("code",[s._v("root.ln")]),s._v("和"),a("code",[s._v("root.sgcc")]),s._v("这两个存储组的情况下，创建"),a("code",[s._v("root.ln.wf01")]),s._v("存储组是不可行的。系统将给出相应的错误提示，如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> set storage group to root.ln.wf01\nMsg: org.apache.iotdb.exception.MetadataException: org.apache.iotdb.exception.MetadataException: The prefix of root.ln.wf01 has been set to the storage group.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("存储组节点名只支持中英文字符、数字和下划线的组合。")]),s._v(" "),a("p",[s._v("还需注意，如果在Windows系统上部署，存储组名是大小写不敏感的。例如同时创建"),a("code",[s._v("root.ln")]),s._v(" 和 "),a("code",[s._v("root.LN")]),s._v(" 是不被允许的。")]),s._v(" "),a("h2",{attrs:{id:"查看存储组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看存储组"}},[s._v("#")]),s._v(" 查看存储组")]),s._v(" "),a("p",[s._v("在存储组创建后，我们可以使用"),a("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Operation Manual/SQL Reference.html"}},[s._v("SHOW STORAGE GROUP")]),s._v("语句和"),a("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Operation Manual/SQL Reference.html"}},[s._v("SHOW STORAGE GROUP <PrefixPath>")]),s._v("来查看存储组，SQL语句如下所示：")],1),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> show storage group\nIoTDB> show storage group root.ln\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("执行结果为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-------------+\n|storage group|\n+-------------+\n|    root.sgcc|\n|      root.ln|\n+-------------+\nTotal line number = 2\nIt costs 0.060s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"删除存储组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除存储组"}},[s._v("#")]),s._v(" 删除存储组")]),s._v(" "),a("p",[s._v("用户可以使用"),a("code",[s._v("DELETE STORAGE GROUP <PrefixPath>")]),s._v("语句删除该前缀路径下所有的存储组。在删除的过程中，需要注意的是存储组的数据也会被删除。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB > DELETE STORAGE GROUP root.ln\nIoTDB > DELETE STORAGE GROUP root.sgcc\n// 删除所有数据，时间序列以及存储组\nIoTDB > DELETE STORAGE GROUP root.*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"创建时间序列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建时间序列"}},[s._v("#")]),s._v(" 创建时间序列")]),s._v(" "),a("p",[s._v("根据建立的数据模型，我们可以分别在两个存储组中创建相应的时间序列。创建时间序列的SQL语句如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB > create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf01.wt01.temperature with datatype=FLOAT,encoding=RLE\nIoTDB > create timeseries root.ln.wf02.wt02.hardware with datatype=TEXT,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf02.wt02.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.temperature with datatype=FLOAT,encoding=RLE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("需要注意的是，当创建时间序列时指定的编码方式与数据类型不对应时，系统会给出相应的错误提示，如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("详细的数据类型与编码方式的对应列表请参见"),a("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Concept/Encoding.html"}},[s._v("编码方式")]),s._v("。")],1),s._v(" "),a("h3",{attrs:{id:"标签点管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标签点管理"}},[s._v("#")]),s._v(" 标签点管理")]),s._v(" "),a("p",[s._v("我们可以在创建时间序列的时候，为它添加别名和额外的标签和属性信息。\n所用到的扩展的创建时间序列的SQL语句如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("create timeseries root.turbine.d1.s1(temprature) with datatype=FLOAT, encoding=RLE, compression=SNAPPY tags(tag1=v1, tag2=v2) attributes(attr1=v1, attr2=v2)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("括号里的"),a("code",[s._v("temprature")]),s._v("是"),a("code",[s._v("s1")]),s._v("这个传感器的别名。\n我们可以在任何用到"),a("code",[s._v("s1")]),s._v("的地方，将其用"),a("code",[s._v("temprature")]),s._v("代替，这两者是等价的。")]),s._v(" "),a("blockquote",[a("p",[s._v("IoTDB 同时支持在查询语句中"),a("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Operation Manual/DML Data Manipulation Language.html"}},[s._v("使用AS函数")]),s._v("设置别名。二者的区别在于：AS 函数设置的别名用于替代整条时间序列名，且是临时的，不与时间序列绑定；而上文中的别名只作为传感器的别名，与其绑定且可与原传感器名等价使用。")],1)]),s._v(" "),a("p",[s._v("标签和属性的唯一差别在于，我们为标签信息在内存中维护了一个倒排索引，所以可以在"),a("code",[s._v("show timeseries")]),s._v("的条件语句中使用标签作为查询条件，你将会在下一节看到具体查询内容。")]),s._v(" "),a("blockquote",[a("p",[s._v("注意：额外的标签和属性信息总的大小不能超过"),a("code",[s._v("tag_attribute_total_size")]),s._v(".")])]),s._v(" "),a("h2",{attrs:{id:"标签点属性更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标签点属性更新"}},[s._v("#")]),s._v(" 标签点属性更新")]),s._v(" "),a("p",[s._v("创建时间序列后，我们也可以对其原有的标签点属性进行更新，主要有以下五种更新方式：")]),s._v(" "),a("ul",[a("li",[s._v("重命名标签或属性")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER timeseries root.turbine.d1.s1 RENAME tag1 TO newTag1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("重新设置标签或属性的值")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER timeseries root.turbine.d1.s1 SET newTag1=newV1, attr1=newV1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("删除已经存在的标签或属性")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER timeseries root.turbine.d1.s1 DROP tag1, tag2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("添加新的标签")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER timeseries root.turbine.d1.s1 ADD TAGS tag3=v3, tag4=v4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("添加新的属性")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER timeseries root.turbine.d1.s1 ADD ATTRIBUTES attr3=v3, attr4=v4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("更新插入别名，标签和属性")])]),s._v(" "),a("blockquote",[a("p",[s._v("如果该别名，标签或属性原来不存在，则插入，否则，用新值更新原来的旧值")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER timeseries root.turbine.d1.s1 UPSERT ALIAS=newAlias TAGS(tag2=newV2, tag3=v3) ATTRIBUTES(attr3=v3, attr4=v4)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"查看时间序列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看时间序列"}},[s._v("#")]),s._v(" 查看时间序列")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("SHOW LATEST? TIMESERIES prefixPath? showWhereClause? limitClause?")]),s._v(" "),a("p",[s._v("SHOW TIMESERIES 中可以有四种可选的子句，查询结果为这些时间序列的所有信息")])])]),s._v(" "),a("p",[s._v("时间序列信息具体包括：时间序列路径名，存储组，Measurement别名，数据类型，编码方式，压缩方式，属性和标签。")]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("SHOW TIMESERIES")]),s._v(" "),a("p",[s._v("展示系统中所有的时间序列信息")])]),s._v(" "),a("li",[a("p",[s._v("SHOW TIMESERIES <"),a("code",[s._v("Path")]),s._v(">")]),s._v(" "),a("p",[s._v("返回给定路径的下的所有时间序列信息。其中 "),a("code",[s._v("Path")]),s._v(" 需要为一个前缀路径、带星路径或时间序列路径。例如，分别查看"),a("code",[s._v("root")]),s._v("路径和"),a("code",[s._v("root.ln")]),s._v("路径下的时间序列，SQL语句如下所示：")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> show timeseries root\nIoTDB> show timeseries root.ln\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("执行结果分别为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+\n|                     timeseries|   alias|storage group|dataType|encoding|compression|                                       tags|                                              attributes|\n+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+\n|root.sgcc.wf03.wt01.temperature|    null|    root.sgcc|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|\n|     root.sgcc.wf03.wt01.status|    null|    root.sgcc| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|\n|             root.turbine.d1.s1|newAlias| root.turbine|   FLOAT|     RLE|     SNAPPY|{"newTag1":"newV1","tag4":"v4","tag3":"v3"}|{"attr2":"v2","attr1":"newV1","attr4":"v4","attr3":"v3"}|\n|     root.ln.wf02.wt02.hardware|    null|      root.ln|    TEXT|   PLAIN|     SNAPPY|                                       null|                                                    null|\n|       root.ln.wf02.wt02.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|\n|  root.ln.wf01.wt01.temperature|    null|      root.ln|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|\n|       root.ln.wf01.wt01.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|\n+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+\nTotal line number = 7\nIt costs 0.016s\n\n+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+\n|                   timeseries|alias|storage group|dataType|encoding|compression|tags|attributes|\n+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+\n|   root.ln.wf02.wt02.hardware| null|      root.ln|    TEXT|   PLAIN|     SNAPPY|null|      null|\n|     root.ln.wf02.wt02.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|\n|root.ln.wf01.wt01.temperature| null|      root.ln|   FLOAT|     RLE|     SNAPPY|null|      null|\n|     root.ln.wf01.wt01.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|\n+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+\nTotal line number = 4\nIt costs 0.004s\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("SHOW TIMESERIES (<"),a("code",[s._v("PrefixPath")]),s._v(">)? WhereClause")]),s._v(" "),a("p",[s._v("返回给定路径的下的所有满足条件的时间序列信息，SQL语句如下所示：")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER timeseries root.ln.wf02.wt02.hardware ADD TAGS unit=c\nALTER timeseries root.ln.wf02.wt02.status ADD TAGS description=test1\nshow timeseries root.ln where unit=c\nshow timeseries root.ln where description contains 'test1'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("执行结果分别为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+\n|                timeseries|alias|storage group|dataType|encoding|compression|        tags|attributes|\n+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+\n|root.ln.wf02.wt02.hardware| null|      root.ln|    TEXT|   PLAIN|     SNAPPY|{"unit":"c"}|      null|\n+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+\nTotal line number = 1\nIt costs 0.005s\n\n+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+\n|              timeseries|alias|storage group|dataType|encoding|compression|                   tags|attributes|\n+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+\n|root.ln.wf02.wt02.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|{"description":"test1"}|      null|\n+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+\nTotal line number = 1\nIt costs 0.004s\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("blockquote",[a("p",[s._v("注意，现在我们只支持一个查询条件，要么是等值条件查询，要么是包含条件查询。当然where子句中涉及的必须是标签值，而不能是属性值。")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("SHOW TIMESERIES LIMIT INT OFFSET INT")]),s._v(" "),a("p",[s._v("只返回从指定下标开始的结果，最大返回条数被 LIMIT 限制，用于分页查询")])]),s._v(" "),a("li",[a("p",[s._v("SHOW LATEST TIMESERIES")]),s._v(" "),a("p",[s._v("表示查询出的时间序列需要按照最近插入时间戳降序排列")])])]),s._v(" "),a("p",[s._v("需要注意的是，当查询路径不存在时，系统会返回0条时间序列。")]),s._v(" "),a("h2",{attrs:{id:"查看子路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看子路径"}},[s._v("#")]),s._v(" 查看子路径")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SHOW CHILD PATHS prefixPath\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可以查看此前缀路径的下一层的所有路径，前缀路径允许使用 * 通配符。")]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("ul",[a("li",[s._v("查询 root.ln 的下一层：show child paths root.ln")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+------------+\n| child paths|\n+------------+\n|root.ln.wf01|\n|root.ln.wf02|\n+------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("查询形如 root.xx.xx.xx 的路径：show child paths root.*.*")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+---------------+\n|    child paths|\n+---------------+\n|root.ln.wf01.s1|\n|root.ln.wf02.s2|\n+---------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"统计时间序列总数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计时间序列总数"}},[s._v("#")]),s._v(" 统计时间序列总数")]),s._v(" "),a("p",[s._v("IoTDB支持使用"),a("code",[s._v("COUNT TIMESERIES<Path>")]),s._v("来统计一条路径中的时间序列个数。SQL语句如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB > COUNT TIMESERIES root\nIoTDB > COUNT TIMESERIES root.ln\nIoTDB > COUNT TIMESERIES root.ln.*.*.status\nIoTDB > COUNT TIMESERIES root.ln.wf01.wt01.status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("除此之外，还可以通过定义"),a("code",[s._v("LEVEL")]),s._v("来统计指定层级下的时间序列个数。这条语句可以用来统计每一个设备下的传感器数量，语法为："),a("code",[s._v("COUNT TIMESERIES <Path> GROUP BY LEVEL=<INTEGER>")]),s._v("。")]),s._v(" "),a("p",[s._v("例如有如下时间序列（可以使用"),a("code",[s._v("show timeseries")]),s._v("展示所有时间序列）：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+\n|                     timeseries|   alias|storage group|dataType|encoding|compression|                                       tags|                                              attributes|\n+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+\n|root.sgcc.wf03.wt01.temperature|    null|    root.sgcc|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|\n|     root.sgcc.wf03.wt01.status|    null|    root.sgcc| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|\n|             root.turbine.d1.s1|newAlias| root.turbine|   FLOAT|     RLE|     SNAPPY|{"newTag1":"newV1","tag4":"v4","tag3":"v3"}|{"attr2":"v2","attr1":"newV1","attr4":"v4","attr3":"v3"}|\n|     root.ln.wf02.wt02.hardware|    null|      root.ln|    TEXT|   PLAIN|     SNAPPY|                               {"unit":"c"}|                                                    null|\n|       root.ln.wf02.wt02.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                    {"description":"test1"}|                                                    null|\n|  root.ln.wf01.wt01.temperature|    null|      root.ln|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|\n|       root.ln.wf01.wt01.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|\n+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+\nTotal line number = 7\nIt costs 0.004s\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("那么Metadata Tree如下所示：")]),s._v(" "),a("center",[a("img",{staticStyle:{width:"100%","max-width":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792176-1718f400-1201-11ea-861a-1a83c07ca144.jpg"}})]),s._v(" "),a("p",[s._v("可以看到，"),a("code",[s._v("root")]),s._v("被定义为"),a("code",[s._v("LEVEL=0")]),s._v("。那么当你输入如下语句时：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB > COUNT TIMESERIES root GROUP BY LEVEL=1\nIoTDB > COUNT TIMESERIES root.ln GROUP BY LEVEL=2\nIoTDB > COUNT TIMESERIES root.ln.wf01 GROUP BY LEVEL=2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("你将得到以下结果：\n"),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792071-cb664a80-1200-11ea-8386-02dd12046c4b.png"}})])],1),s._v(" "),a("blockquote",[a("p",[s._v("注意：时间序列的路径只是过滤条件，与level的定义无关。")])]),s._v(" "),a("h2",{attrs:{id:"统计节点数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计节点数"}},[s._v("#")]),s._v(" 统计节点数")]),s._v(" "),a("p",[s._v("IoTDB支持使用"),a("code",[s._v("COUNT NODES <PrefixPath> LEVEL=<INTEGER>")]),s._v("来统计当前Metadata树下指定层级的节点个数，这条语句可以用来统计设备数。例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB > COUNT NODES root LEVEL=2\nIoTDB > COUNT NODES root.ln LEVEL=2\nIoTDB > COUNT NODES root.ln.wf01 LEVEL=3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("对于上面提到的例子和Metadata Tree，你可以获得如下结果：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----+\n|count|\n+-----+\n|    4|\n+-----+\nTotal line number = 1\nIt costs 0.003s\n\n+-----+\n|count|\n+-----+\n|    2|\n+-----+\nTotal line number = 1\nIt costs 0.002s\n\n+-----+\n|count|\n+-----+\n|    1|\n+-----+\nTotal line number = 1\nIt costs 0.002s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("blockquote",[a("p",[s._v("注意：时间序列的路径只是过滤条件，与level的定义无关。\n其中"),a("code",[s._v("PrefixPath")]),s._v("可以包含"),a("code",[s._v("*")]),s._v("，但是"),a("code",[s._v("*")]),s._v("及其后的所有节点将被忽略，仅在"),a("code",[s._v("*")]),s._v("前的前缀路径有效。")])]),s._v(" "),a("h2",{attrs:{id:"删除时间序列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除时间序列"}},[s._v("#")]),s._v(" 删除时间序列")]),s._v(" "),a("p",[s._v("我们可以使用"),a("code",[s._v("DELETE TimeSeries <PrefixPath>")]),s._v("语句来删除我们之前创建的时间序列。SQL语句如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> delete timeseries root.ln.wf01.wt01.status\nIoTDB> delete timeseries root.ln.wf01.wt01.temperature, root.ln.wf02.wt02.hardware\nIoTDB> delete timeseries root.ln.wf02.*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"查看设备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看设备"}},[s._v("#")]),s._v(" 查看设备")]),s._v(" "),a("ul",[a("li",[s._v("SHOW DEVICES prefixPath? limitClause?")])]),s._v(" "),a("p",[s._v("与 "),a("code",[s._v("Show Timeseries")]),s._v(" 相似，IoTDB 目前也支持两种方式查看设备。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("SHOW DEVICES")]),s._v(" 语句显示当前所有的设备信息，等价于 "),a("code",[s._v("SHOW DEVICES root")]),s._v("。")]),s._v(" "),a("li",[a("code",[s._v("SHOW DEVICES <PrefixPath>")]),s._v(" 语句规定了 "),a("code",[s._v("PrefixPath")]),s._v("，返回在给定的前缀路径下的设备信息。")])]),s._v(" "),a("p",[s._v("SQL语句如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> show devices\nIoTDB> show devices root.ln\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("你可以获得如下数据：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-------------------+\n|            devices|\n+-------------------+\n|  root.ln.wf01.wt01|\n|  root.ln.wf02.wt02|\n|root.sgcc.wf03.wt01|\n|    root.turbine.d1|\n+-------------------+\nTotal line number = 4\nIt costs 0.002s\n\n+-----------------+\n|          devices|\n+-----------------+\n|root.ln.wf01.wt01|\n|root.ln.wf02.wt02|\n+-----------------+\nTotal line number = 2\nIt costs 0.001s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h1",{attrs:{id:"ttl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ttl"}},[s._v("#")]),s._v(" TTL")]),s._v(" "),a("p",[s._v("IoTDB支持对存储组级别设置数据存活时间（TTL），这使得IoTDB可以定期、自动地删除一定时间之前的数据。合理使用TTL\n可以帮助您控制IoTDB占用的总磁盘空间以避免出现磁盘写满等异常。并且，随着文件数量的增多，查询性能往往随之下降,\n内存占用也会有所提高。及时地删除一些较老的文件有助于使查询性能维持在一个较高的水平和减少内存资源的占用。")]),s._v(" "),a("h2",{attrs:{id:"设置-ttl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-ttl"}},[s._v("#")]),s._v(" 设置 TTL")]),s._v(" "),a("p",[s._v("设置TTL的SQL语句如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> set ttl to root.ln 3600000\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个例子表示在"),a("code",[s._v("root.ln")]),s._v("存储组中，只有最近一个小时的数据将会保存，旧数据会被移除或不可见。")]),s._v(" "),a("h2",{attrs:{id:"取消-ttl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取消-ttl"}},[s._v("#")]),s._v(" 取消 TTL")]),s._v(" "),a("p",[s._v("取消TTL的SQL语句如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> unset ttl to root.ln\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("取消设置TTL后，存储组"),a("code",[s._v("root.ln")]),s._v("中所有的数据都会被保存。")]),s._v(" "),a("h2",{attrs:{id:"显示-ttl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示-ttl"}},[s._v("#")]),s._v(" 显示 TTL")]),s._v(" "),a("p",[s._v("显示TTL的SQL语句如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> SHOW ALL TTL\nIoTDB> SHOW TTL ON StorageGroupNames\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("SHOW ALL TTL这个例子会给出所有存储组的TTL。\nSHOW TTL ON root.group1,root.group2,root.group3这个例子会显示指定的三个存储组的TTL。\n注意: 没有设置TTL的存储组的TTL将显示为null。")]),s._v(" "),a("h2",{attrs:{id:"flush"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flush"}},[s._v("#")]),s._v(" FLUSH")]),s._v(" "),a("p",[s._v("将指定存储组的内存缓存区Memory Table的数据持久化到磁盘上，并将数据文件封口。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> FLUSH \nIoTDB> FLUSH root.ln\nIoTDB> FLUSH root.sg1,root.sg2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[s._v("#")]),s._v(" MERGE")]),s._v(" "),a("p",[s._v("合并顺序和乱序数据。当前IoTDB支持使用如下两种SQL手动触发数据文件的合并：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("MERGE")]),s._v(" 仅重写重复的Chunk，整理速度快，但是最终磁盘会存在多余数据。")]),s._v(" "),a("li",[a("code",[s._v("FULL MERGE")]),s._v(" 将需要合并的顺序和乱序文件的所有数据都重新写一份，整理速度慢，最终磁盘将不存在无用的数据。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> MERGE\nIoTDB> FULL MERGE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"clear-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clear-cache"}},[s._v("#")]),s._v(" CLEAR CACHE")]),s._v(" "),a("p",[s._v("手动清除chunk, chunk metadata和timeseries metadata的缓存，在内存资源紧张时，可以通过此命令，释放查询时缓存所占的内存空间。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> CLEAR CACHE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"为-schema-创建快照"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为-schema-创建快照"}},[s._v("#")]),s._v(" 为 SCHEMA 创建快照")]),s._v(" "),a("p",[s._v("为了加快 IoTDB 重启速度，用户可以手动触发创建 schema 的快照，从而避免服务器从 mlog 文件中恢复。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> CREATE SNAPSHOT FOR SCHEMA\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);