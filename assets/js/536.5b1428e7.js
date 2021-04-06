(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{1102:function(s,e,a){"use strict";a.r(e);var t=a(69),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),a("p",[a("strong",[s._v("如何查询我的 IoTDB 版本")])]),s._v(" "),a("p",[s._v("有几种方法可以识别您使用的 IoTDB 版本:")]),s._v(" "),a("ul",[a("li",[s._v("启动 IoTDB 的命令行界面:")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> ./start-cli.sh -p 6667 -pw root -u root -h localhost\n _____       _________  ______   ______    \n|_   _|     |  _   _  ||_   _ `.|_   _ \\   \n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |  \n  | | / .'`\\ \\  | |      | |  | | |  __'.  \n _| |_| \\__. | _| |_    _| |_.' /_| |__) | \n|_____|'.__.' |_____|  |______.'|_______/  version x.x.x\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("检查 pom.xml 文件:")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<version>x.x.x</version>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("使用 JDBC API:")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("String iotdbVersion = tsfileDatabaseMetadata.getDatabaseProductVersion();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("使用命令行接口:")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> show version\nshow version\n+---------------+\n|version        |\n+---------------+\n|x.x.x          |\n+---------------+\nTotal line number = 1\nIt costs 0.241s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("在哪里可以找到 IoTDB 的日志")])]),s._v(" "),a("p",[s._v("假设您的根目录是:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/workspace/iotdb\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l\nserver/\ncli/\npom.xml\nReadme.md\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("假如 "),a("code",[s._v("$IOTDB_HOME = /workspace/iotdb/server/target/iotdb-server-{project.version}")])]),s._v(" "),a("p",[s._v("假如 "),a("code",[s._v("$IOTDB_CLI_HOME = /workspace/iotdb/cli/target/iotdb-cli-{project.version}")])]),s._v(" "),a("p",[s._v("在默认的设置里，logs 文件夹会被存储在"),a("code",[s._v("IOTDB_HOME/logs")]),s._v("。您可以在"),a("code",[s._v("IOTDB_HOME/conf")]),s._v("目录下的"),a("code",[s._v("logback.xml")]),s._v("文件中修改日志的级别和日志的存储路径。")]),s._v(" "),a("p",[a("strong",[s._v("在哪里可以找到 IoTDB 的数据文件")])]),s._v(" "),a("p",[s._v("在默认的设置里，数据文件（包含 TsFile，metadata，WAL）被存储在"),a("code",[s._v("IOTDB_HOME/data")]),s._v("文件夹。")]),s._v(" "),a("p",[a("strong",[s._v("如何知道 IoTDB 中存储了多少时间序列")])]),s._v(" "),a("p",[s._v("使用 IoTDB 的命令行接口:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> show timeseries root\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在返回的结果里，会展示"),a("code",[s._v("Total timeseries number")]),s._v("，这个数据就是 IoTDB 中 timeseries 的数量。")]),s._v(" "),a("p",[s._v("在当前版本中，IoTDB 支持直接使用命令行接口查询时间序列的数量:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> count timeseries root\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果您使用的是 Linux 操作系统，您可以使用以下的 Shell 命令:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('> grep "0,root" $IOTDB_HOME/data/system/schema/mlog.txt |  wc -l\n>   6\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("可以使用 Hadoop 和 Spark 读取 IoTDB 中的 TsFile 吗？")])]),s._v(" "),a("p",[s._v("是的。IoTDB 与开源生态紧密结合。IoTDB 支持 "),a("a",{attrs:{href:"https://github.com/apache/iotdb/tree/master/hadoop",target:"_blank",rel:"noopener noreferrer"}},[s._v("Hadoop"),a("OutboundLink")],1),s._v(", "),a("a",{attrs:{href:"https://github.com/apache/iotdb/tree/master/spark",target:"_blank",rel:"noopener noreferrer"}},[s._v("Spark"),a("OutboundLink")],1),s._v(" 和 "),a("a",{attrs:{href:"https://github.com/apache/iotdb/tree/master/grafana",target:"_blank",rel:"noopener noreferrer"}},[s._v("Grafana"),a("OutboundLink")],1),s._v(" 可视化工具.")]),s._v(" "),a("p",[a("strong",[s._v("IoTDB如何处理重复的数据点")])]),s._v(" "),a("p",[s._v("一个数据点是由一个完整的时间序列路径(例如:"),a("code",[s._v("root.vehicle.d0.s0")]),s._v(")和时间戳唯一标识的。如果您使用与现有点相同的路径和时间戳提交一个新点，那么IoTDB将更新这个点的值，而不是插入一个新点。")]),s._v(" "),a("p",[a("strong",[s._v("我如何知道具体的 timeseries 的类型")])]),s._v(" "),a("p",[s._v("在 IoTDB 的命令行接口中使用 SQL "),a("code",[s._v("SHOW TIMESERIES <timeseries path>")]),s._v(":")]),s._v(" "),a("p",[s._v("例如：如果您想知道所有 timeseries 的类型 <timeseries path> 应该为 "),a("code",[s._v("root")]),s._v("。上面的 SQL 应该修改为:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> show timeseries root\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果您想查询一个指定的时间序列, 您可以修改 <timeseries path> 为时间序列的完整路径。比如:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> show timeseries root.fit.d1.s1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("您还可以在 timeseries 路径中使用通配符:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> show timeseries root.fit.d1.*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("如何更改IoTDB的客户端时间显示格式")])]),s._v(" "),a("p",[s._v("IoTDB 客户端默认显示的时间是人类可读的(比如："),a("code",[s._v("1970-01-01T08:00:00.001")]),s._v(")，如果您想显示是时间戳或者其他可读格式, 请在启动命令上添加参数"),a("code",[s._v("-disableISO8601")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> $IOTDB_CLI_HOME/sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root -disableISO8601\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);