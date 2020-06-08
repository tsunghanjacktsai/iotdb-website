(window.webpackJsonp=window.webpackJsonp||[]).push([[1453],{2025:function(s,t,a){"use strict";a.r(t);var e=a(71),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"快速入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速入门"}},[s._v("#")]),s._v(" 快速入门")]),s._v(" "),a("h2",{attrs:{id:"概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[s._v("#")]),s._v(" 概览")]),s._v(" "),a("ul",[a("li",[s._v("快速入门")]),s._v(" "),a("li",[s._v("安装环境\n"),a("ul",[a("li",[s._v("IoTDB安装")]),s._v(" "),a("li",[s._v("IoTDB试用\n"),a("ul",[a("li",[s._v("启动IoTDB")]),s._v(" "),a("li",[s._v("操作IoTDB\n"),a("ul",[a("li",[s._v("使用Cli/Shell工具")]),s._v(" "),a("li",[s._v("IoTDB的基本操作")])])]),s._v(" "),a("li",[s._v("停止IoTDB\n"),a("ul",[a("li",[s._v("使用stop-server脚本强制停止")])])])])])])])]),s._v(" "),a("h2",{attrs:{id:"安装环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装环境"}},[s._v("#")]),s._v(" 安装环境")]),s._v(" "),a("p",[s._v("安装前需要保证设备上配有JDK>=1.8的运行环境，并配置好JAVA_HOME环境变量。")]),s._v(" "),a("p",[s._v("如需从源码进行编译，还需要Maven>=3.0的运行环境。")]),s._v(" "),a("h2",{attrs:{id:"iotdb安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iotdb安装"}},[s._v("#")]),s._v(" IoTDB安装")]),s._v(" "),a("p",[s._v("IoTDB支持多种安装途径。用户可以使用三种方式对IoTDB进行安装——下载二进制可运行程序、使用源码、使用docker镜像。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("二进制可运行程序：请从Download页面下载最新的安装包，解压后即完成安装。")])]),s._v(" "),a("li",[a("p",[s._v("使用源码：您可以从代码仓库下载源码并编译："),a("code",[s._v("git clone https://github.com/apache/incubator-iotdb.git")]),s._v(", 并通过"),a("code",[s._v("mvn package -DskipTests")]),s._v(" 进行编译。")])]),s._v(" "),a("li",[a("p",[s._v("使用Docker： dockerfile文件位于 https://github.com/apache/incubator-iotdb/blob/master/docker/Dockerfile")])])]),s._v(" "),a("h2",{attrs:{id:"iotdb试用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iotdb试用"}},[s._v("#")]),s._v(" IoTDB试用")]),s._v(" "),a("p",[s._v("用户可以根据以下操作对IoTDB进行简单的试用，若以下操作均无误，则说明IoTDB安装成功。")]),s._v(" "),a("p",[s._v("在后文中，记$IOTDB_HOME为IoTDB的安装目录路径，即上述iotdb子文件夹路径。")]),s._v(" "),a("h3",{attrs:{id:"启动iotdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动iotdb"}},[s._v("#")]),s._v(" 启动IoTDB")]),s._v(" "),a("p",[s._v("用户可以使用$IOTDB_HOME/bin文件夹下的start-server脚本启动IoTDB。")]),s._v(" "),a("p",[s._v("Linux系统与MacOS系统启动命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> $IOTDB_HOME/sbin/start-server.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Windows系统启动命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> $IOTDB_HOME\\sbin\\start-server.bat\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当服务器输出log中包含ERROR输出时，服务器启动不成功。")]),s._v(" "),a("h3",{attrs:{id:"操作iotdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作iotdb"}},[s._v("#")]),s._v(" 操作IoTDB")]),s._v(" "),a("h4",{attrs:{id:"使用cli-shell工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用cli-shell工具"}},[s._v("#")]),s._v(" 使用Cli/Shell工具")]),s._v(" "),a("p",[s._v("IoTDB为用户提供多种与服务器交互的方式，您可以选择使用Cli/Shell工具、Grafana可视化工具或JAVA API与IoTDB服务器进行数据写入与查询的交互操作。在此我们介绍使用Cli/Shell工具进行写入、查询数据的基本步骤。")]),s._v(" "),a("p",[s._v("初始安装后的IoTDB中有一个默认用户：root，默认密码为root。用户可以使用该用户运行Cli/Shell工具操作IoTDB。Cli/Shell工具启动脚本为$IOTDB_HOME/bin文件夹下的start-client脚本。启动脚本时需要指定运行IP和PORT。")]),s._v(" "),a("p",[s._v("以下启动语句为服务器在本机运行，且用户未更改运行端口号的示例。")]),s._v(" "),a("p",[s._v("Linux系统与MacOS系统启动命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> $IOTDB_HOME/sbin/start-client.sh -h 127.0.0.1 -p 6667 -u root\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Windows系统启动命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> $IOTDB_HOME\\sbin\\start-client.bat -h 127.0.0.1 -p 6667 -u root\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("回车后输入root用户的密码，即可成功启动客户端。启动后出现如图提示即为启动成功。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" _____       _________  ______   ______\n|_   _|     |  _   _  ||_   _ `.|_   _ \\\n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |\n  | | / .'`\\ \\  | |      | |  | | |  __'.\n _| |_| \\__. | _| |_    _| |_.' /_| |__) |\n|_____|'.__.' |_____|  |______.'|_______/  version x.x.x\n\n\nIoTDB> login successfully\nIoTDB>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h4",{attrs:{id:"iotdb的基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iotdb的基本操作"}},[s._v("#")]),s._v(" IoTDB的基本操作")]),s._v(" "),a("p",[s._v("Cli/Shell启动成功后，用户可使用该工具输入SQL命令操作IoTDB Server。")]),s._v(" "),a("p",[s._v("在这里，我们首先介绍一下使用Cli/Shell工具创建时间序列、插入数据并查看数据的方法。")]),s._v(" "),a("p",[s._v("数据在IoTDB中的组织形式是以时间序列为单位，每一个时间序列中有若干个数据-时间点对，存储结构为存储组。在定义时间序列之前，要首先使用SET STORAGE GROUP语句定义存储组。SQL语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> SET STORAGE GROUP TO root.ln\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行成功后，Cli/Shell返回execute successfully表示执行成功。")]),s._v(" "),a("p",[s._v("存储组设定后，使用CREATE TIMESERIES语句可以创建新的时间序列，创建时间序列时需要定义数据的类型和编码形式。SQL语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行成功后，Cli/Shell返回execute successfully表示执行成功。\n如果系统中已有被创建的存储组和时间序列，则系统会提示该部分已存在。如以下提示表示存储组已存在：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> SET STORAGE GROUP TO root.ln\nerror: The path of root.ln already exist, it can't be set to the storage group\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如下提示表示时间序列已存在：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN\nerror: Timeseries root.ln.wf01.wt01.status already exist\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("创建时间序列后，我们使用SHOW TIMESERIES语句查看系统中存在的所有时间序列，SQL语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> SHOW TIMESERIES\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行结果为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('===  Timeseries Tree  ===\n\n{\n\t"root":{\n\t\t"ln":{\n\t\t\t"wf01":{\n\t\t\t\t"wt01":{\n\t\t\t\t\t"status":{\n\t\t\t\t\t\t"args":"{}",\n\t\t\t\t\t\t"StorageGroup":"root.ln",\n\t\t\t\t\t\t"DataType":"BOOLEAN",\n\t\t\t\t\t\t"Compressor":"UNCOMPRESSED",\n\t\t\t\t\t\t"Encoding":"PLAIN"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("我们可以尝试再创建一个时间序列，查看SHOW TIMESERIES的返回情况。SQL语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE\nIoTDB> SHOW TIMESERIES\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("执行结果为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('===  Timeseries Tree  ===\n\n{\n\t"root":{\n\t\t"ln":{\n\t\t\t"wf01":{\n\t\t\t\t"wt01":{\n\t\t\t\t\t"temperature":{\n\t\t\t\t\t\t"args":"{}",\n\t\t\t\t\t\t"StorageGroup":"root.ln",\n\t\t\t\t\t\t"DataType":"FLOAT",\n\t\t\t\t\t\t"Compressor":"UNCOMPRESSED",\n\t\t\t\t\t\t"Encoding":"RLE"\n\t\t\t\t\t},\n\t\t\t\t\t"status":{\n\t\t\t\t\t\t"args":"{}",\n\t\t\t\t\t\t"StorageGroup":"root.ln",\n\t\t\t\t\t\t"DataType":"BOOLEAN",\n\t\t\t\t\t\t"Compressor":"UNCOMPRESSED",\n\t\t\t\t\t\t"Encoding":"PLAIN"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("p",[s._v("为了查看指定的时间序列，我们可以使用SHOW TIMESERIES <Path>语句，查看时间序列root.ln.wf01.wt01.status的SQL语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> SHOW TIMESERIES root.ln.wf01.wt01.status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行结果为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+------------------------------+--------------+--------+--------+\n|                    Timeseries| Storage Group|DataType|Encoding|\n+------------------------------+--------------+--------+--------+\n|      root.ln.wf01.wt01.status|       root.ln| BOOLEAN|   PLAIN|\n+------------------------------+--------------+--------+--------+\ntimeseries number = 1\nExecute successfully.\nIt costs 0.02s.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("我们还可以使用SHOW STORAGE GROUP语句来查看系统当前所有的存储组，SQL语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> SHOW STORAGE GROUP\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行结果为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------------+\n|                      Storage Group|\n+-----------------------------------+\n|                            root.ln|\n+-----------------------------------+\nstorage group number = 1\nExecute successfully.\nIt costs 0.001s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("接下来，我们使用INSERT语句向root.ln.wf01.wt01.status时间序列中插入数据，在插入数据时需要首先指定时间戳和插入的传感器路径名称：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status) values(100,true);\nexecute successfully.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("我们也可以向多个传感器中同时插入数据，这些传感器同属于一个时间戳：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) values(200,false,20.71)\n\nexecute successfully.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("最后，我们查询之前插入的数据。使用SELECT语句我们可以查询指定的时间序列的数据结果，SQL语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> SELECT status FROM root.ln.wf01.wt01\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查询结果如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------+------------------------+\n|                   Time|root.ln.wf01.wt01.status|\n+-----------------------+------------------------+\n|1970-01-01T08:00:00.100|                    true|\n|1970-01-01T08:00:00.200|                   false|\n+-----------------------+------------------------+\nrecord number = 1\nexecute successfully.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("我们也可以查询多个时间序列的数据结果，SQL语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> SELECT * FROM root.ln.wf01.wt01\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查询结果如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------+--------------------------+-----------------------------+\n|                   Time|  root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|\n+-----------------------+--------------------------+-----------------------------+\n|1970-01-01T08:00:00.100|                      true|                         null|\n|1970-01-01T08:00:00.200|                     false|                        20.71|\n+-----------------------+--------------------------+-----------------------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("输入quit或exit可退出Client结束本次会话，Client输出quit normally表示退出成功，操作语句与返回结果如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> quit\nquit normally\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"停止iotdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止iotdb"}},[s._v("#")]),s._v(" 停止IoTDB")]),s._v(" "),a("h4",{attrs:{id:"使用stop-server脚本强制停止"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用stop-server脚本强制停止"}},[s._v("#")]),s._v(" 使用stop-server脚本强制停止")]),s._v(" "),a("p",[s._v("用户可以使用$IOTDB_HOME/sbin文件夹下的stop-server脚本停止IoTDB（注意，此停止方式为强制停止，若希望安全停止IoTDB，请使用Jconsole工具的停止方法）。")]),s._v(" "),a("p",[s._v("Linux系统与MacOS系统停止命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> $IOTDB_HOME/sbin/stop-server.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Windows系统停止命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> $IOTDB_HOME\\sbin\\stop-server.bat\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);