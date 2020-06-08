(window.webpackJsonp=window.webpackJsonp||[]).push([[1329],{1903:function(t,a,s){"use strict";s.r(a);var r=s(71),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"spark-iotdb连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spark-iotdb连接"}},[t._v("#")]),t._v(" Spark IoTDB连接")]),t._v(" "),s("h2",{attrs:{id:"版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[t._v("#")]),t._v(" 版本")]),t._v(" "),s("p",[t._v("Spark和Java所需的版本如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Spark Version")]),t._v(" "),s("th",[t._v("Scala Version")]),t._v(" "),s("th",[t._v("Java Version")]),t._v(" "),s("th",[t._v("TsFile")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("2.4.3")])]),t._v(" "),s("td",[s("code",[t._v("2.11")])]),t._v(" "),s("td",[s("code",[t._v("1.8")])]),t._v(" "),s("td",[s("code",[t._v("0.9.1")])])])])]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("mvn clean scala：compile编译安装")]),t._v(" "),s("h1",{attrs:{id:"_1-maven依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-maven依赖"}},[t._v("#")]),t._v(" 1. Maven依赖")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("    <dependency>\n      <groupId>org.apache.iotdb</groupId>\n      <artifactId>spark-iotdb-connector</artifactId>\n      <version>0.9.1</version>\n    </dependency>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h1",{attrs:{id:"_2-spark-shell用户指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-spark-shell用户指南"}},[t._v("#")]),t._v(" 2. Spark-shell用户指南")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('spark-shell --jars spark-iotdb-connector-0.9.1.jar,iotdb-jdbc-0.9.1-jar-with-dependencies.jar\n\nimport org.apache.iotdb.spark.db._\n\nval df = spark.read.format("org.apache.iotdb.spark.db").option("url","jdbc:iotdb://127.0.0.1:6667/").option("sql","select * from root").load\n\ndf.printSchema()\n\ndf.show()\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h3",{attrs:{id:"如果要对rdd进行分区，可以执行以下操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果要对rdd进行分区，可以执行以下操作"}},[t._v("#")]),t._v(" 如果要对rdd进行分区，可以执行以下操作")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('spark-shell --jars spark-iotdb-connector-0.9.1.jar,iotdb-jdbc-0.9.1-jar-with-dependencies.jar\n\nimport org.apache.iotdb.spark.db._\n\nval df = spark.read.format("org.apache.iotdb.spark.db").option("url","jdbc:iotdb://127.0.0.1:6667/").option("sql","select * from root").\n                        option("lowerBound", [lower bound of time that you want query(include)]).option("upperBound", [upper bound of time that you want query(include)]).\n                        option("numPartition", [the partition number you want]).load\n\ndf.printSchema()\n\ndf.show()\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h1",{attrs:{id:"_3-模式推断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-模式推断"}},[t._v("#")]),t._v(" 3. 模式推断")]),t._v(" "),s("p",[t._v("以以下TsFile结构为例：TsFile模式中有三个度量：状态，温度和硬件。 这三种测量的基本信息如下：")]),t._v(" "),s("center",[s("table",{staticStyle:{"text-align":"center"}},[s("tr",[s("th",{attrs:{colspan:"2"}},[t._v("Name")]),s("th",{attrs:{colspan:"2"}},[t._v("Type")]),s("th",{attrs:{colspan:"2"}},[t._v("Encode")])]),t._v(" "),s("tr",[s("td",{attrs:{colspan:"2"}},[t._v("status")]),s("td",{attrs:{colspan:"2"}},[t._v("Boolean")]),s("td",{attrs:{colspan:"2"}},[t._v("PLAIN")])]),t._v(" "),s("tr",[s("td",{attrs:{colspan:"2"}},[t._v("temperature")]),s("td",{attrs:{colspan:"2"}},[t._v("Float")]),s("td",{attrs:{colspan:"2"}},[t._v("RLE")])]),t._v(" "),s("tr",[s("td",{attrs:{colspan:"2"}},[t._v("hardware")]),s("td",{attrs:{colspan:"2"}},[t._v("Text")]),s("td",{attrs:{colspan:"2"}},[t._v("PLAIN")])])])]),t._v(" "),s("p",[t._v("TsFile中的现有数据如下：")]),t._v(" "),s("center",[s("table",{staticStyle:{"text-align":"center"}},[s("tr",[s("th",{attrs:{colspan:"4"}},[t._v("device:root.ln.wf01.wt01")]),s("th",{attrs:{colspan:"4"}},[t._v("device:root.ln.wf02.wt02")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"2"}},[t._v("status")]),s("th",{attrs:{colspan:"2"}},[t._v("temperature")]),s("th",{attrs:{colspan:"2"}},[t._v("hardware")]),s("th",{attrs:{colspan:"2"}},[t._v("status")])]),t._v(" "),s("tr",[s("th",[t._v("time")]),s("th",[t._v("value")]),s("th",[t._v("time")]),s("th",[t._v("value")]),s("th",[t._v("time")]),s("th",[t._v("value")]),s("th",[t._v("time")]),s("th",[t._v("value")])]),t._v(" "),s("tr",[s("td",[t._v("1")]),s("td",[t._v("True")]),s("td",[t._v("1")]),s("td",[t._v("2.2")]),s("td",[t._v("2")]),s("td",[t._v('"aaa"')]),s("td",[t._v("1")]),s("td",[t._v("True")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),s("td",[t._v("True")]),s("td",[t._v("2")]),s("td",[t._v("2.2")]),s("td",[t._v("4")]),s("td",[t._v('"bbb"')]),s("td",[t._v("2")]),s("td",[t._v("False")])]),t._v(" "),s("tr",[s("td",[t._v("5")]),s("td",[t._v(" False ")]),s("td",[t._v("3")]),s("td",[t._v("2.1")]),s("td",[t._v("6")]),s("td",[t._v('"ccc"')]),s("td",[t._v("4")]),s("td",[t._v("True")])])])]),t._v("\n宽（默认）表形式如下：\n"),s("table",[s("thead",[s("tr",[s("th",[t._v("time")]),t._v(" "),s("th",[t._v("root.ln.wf02.wt02.temperature")]),t._v(" "),s("th",[t._v("root.ln.wf02.wt02.status")]),t._v(" "),s("th",[t._v("root.ln.wf02.wt02.hardware")]),t._v(" "),s("th",[t._v("root.ln.wf01.wt01.temperature")]),t._v(" "),s("th",[t._v("root.ln.wf01.wt01.status")]),t._v(" "),s("th",[t._v("root.ln.wf01.wt01.hardware")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("2.2")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("null")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("aaa")]),t._v(" "),s("td",[t._v("2.2")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("null")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("2.1")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("null")])]),t._v(" "),s("tr",[s("td",[t._v("4")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("bbb")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("null")])]),t._v(" "),s("tr",[s("td",[t._v("5")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("null")])]),t._v(" "),s("tr",[s("td",[t._v("6")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("ccc")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("null")])])])]),t._v(" "),s("p",[t._v("您还可以使用窄表形式，如下所示：（您可以参阅第4部分，了解如何使用窄表形式）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("time")]),t._v(" "),s("th",[t._v("device_name")]),t._v(" "),s("th",[t._v("status")]),t._v(" "),s("th",[t._v("hardware")]),t._v(" "),s("th",[t._v("temperature")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("2.2")])]),t._v(" "),s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("null")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("2.2")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("aaa")]),t._v(" "),s("td",[t._v("null")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("2.1")])]),t._v(" "),s("tr",[s("td",[t._v("4")]),t._v(" "),s("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("bbb")]),t._v(" "),s("td",[t._v("null")])]),t._v(" "),s("tr",[s("td",[t._v("5")]),t._v(" "),s("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("null")])]),t._v(" "),s("tr",[s("td",[t._v("6")]),t._v(" "),s("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("ccc")]),t._v(" "),s("td",[t._v("null")])])])]),t._v(" "),s("h1",{attrs:{id:"_4-在宽和窄之间转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-在宽和窄之间转换"}},[t._v("#")]),t._v(" 4. 在宽和窄之间转换")]),t._v(" "),s("h2",{attrs:{id:"从宽到窄"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从宽到窄"}},[t._v("#")]),t._v(" 从宽到窄")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('import org.apache.iotdb.spark.db._\n\nval wide_df = spark.read.format("org.apache.iotdb.spark.db").option("url", "jdbc:iotdb://127.0.0.1:6667/").option("sql", "select * from root where time < 1100 and time > 1000").load\nval narrow_df = Transformer.toNarrowForm(spark, wide_df)\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"从窄到宽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从窄到宽"}},[t._v("#")]),t._v(" 从窄到宽")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import org.apache.iotdb.spark.db._\n\nval wide_df = Transformer.toWideForm(spark, narrow_df)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h1",{attrs:{id:"_5-java用户指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-java用户指南"}},[t._v("#")]),t._v(" 5. Java用户指南")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('import org.apache.spark.sql.Dataset;\nimport org.apache.spark.sql.Row;\nimport org.apache.spark.sql.SparkSession;\nimport org.apache.iotdb.spark.db.*\n\npublic class Example {\n\n  public static void main(String[] args) {\n    SparkSession spark = SparkSession\n        .builder()\n        .appName("Build a DataFrame from Scratch")\n        .master("local[*]")\n        .getOrCreate();\n\n    Dataset<Row> df = spark.read().format("org.apache.iotdb.spark.db")\n        .option("url","jdbc:iotdb://127.0.0.1:6667/")\n        .option("sql","select * from root").load();\n\n    df.printSchema();\n\n    df.show();\n    \n    Dataset<Row> narrowTable = Transformer.toNarrowForm(spark, df)\n    narrowTable.show()\n  }\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);