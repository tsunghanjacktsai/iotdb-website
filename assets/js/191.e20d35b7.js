(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{516:function(t,s,e){"use strict";e.r(s);var n=e(1),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("本简短指南将引导您完成使用IoTDB的基本过程。 有关更完整的指南，请访问我们的网站 "),e("router-link",{attrs:{to:"./../1-Overview/1-What is IoTDB.html"}},[t._v("User Guide")]),t._v(".")],1),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("要使用IoTDB，您需要：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("IoTDB为您提供了三种安装方法，您可以参考以下建议，选择其中一种：")]),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("在快速入门中，我们对安装IoTDB进行了简要介绍。 有关更多信息，请参阅《用户指南》第3章。")]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("您可以从以下位置下载二进制文件：\n"),e("router-link",{attrs:{to:"/download/"}},[t._v("这里")])],1),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("配置文件位于“ conf”文件夹下")]),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("有关更多信息，请参见 "),e("router-link",{attrs:{to:"./../3-Operation Manual/1-Sample Data.html"}},[t._v("Chapter3: Server")])],1),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("您可以按照以下步骤测试安装，如果执行后没有错误，则说明安装已完成。")]),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("用户可以通过sbin文件夹下的启动服务器脚本启动IoTDB。")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("IoTDB提供了与服务器交互的不同方法，在这里我们介绍使用Cli工具插入和查询数据的基本步骤。")]),t._v(" "),e("p",[t._v("安装IoTDB后，有一个默认用户“ root”，其默认密码也是“ root”。 用户可以使用该默认用户登录Cli以使用IoTDB。")]),t._v(" "),e("p",[t._v("Cli的启动脚本是文件夹sbin中的启动客户端脚本。 执行脚本时，用户应分配IP，PORT，USER_NAME和PASSWORD。 默认参数是“ -h 127.0.0.1 -p 6667 -u root -pw -root”。")]),t._v(" "),e("p",[t._v("这是启动Cli的命令：")]),t._v(" "),t._m(13),e("p",[t._v("命令行客户端是交互式的，因此，如果一切就绪，您应该会看到欢迎徽标和声明：")]),t._v(" "),t._m(14),t._m(15),t._v(" "),e("p",[t._v("现在，让我们介绍创建时间序列，插入数据和查询数据的方法。\nIoTDB中的数据按时间序列进行组织，在每个时间序列中都有一些数据-时间对，并且每个时间序列均由存储组拥有。 在定义时间序列之前，我们应该使用SET STORAGE GROUP定义存储组，这是一个示例：")]),t._v(" "),t._m(16),e("p",[t._v("我们还可以使用SHOW STORAGE GROUP来检查创建的存储组：")]),t._v(" "),t._m(17),e("p",[t._v("设置存储组后，我们可以使用CREATE TIMESERIES创建新的时间序列。 创建时间序列时，应定义其数据类型和编码方案。 我们创建两个时间序列，如下所示：")]),t._v(" "),t._m(18),e("p",[t._v("为了查询特定的时间序列，我们可以使用SHOW TIMESERIES。 代表时间序列的路径。 它的默认值为null，这意味着查询系统中的所有时间序列（与使用“ SHOW TIMESERIES root”相同）。 以下是示例：")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),e("p",[t._v("插入时间序列数据是IoTDB的基本操作，您可以使用“ INSERT”命令完成此操作。 在插入之前，您应该分配时间戳记和后缀路径名：")]),t._v(" "),t._m(23),e("p",[t._v("我们刚刚插入的数据显示如下：")]),t._v(" "),t._m(24),e("p",[t._v("我们还可以像这样一次查询多个时间序列数据：")]),t._v(" "),t._m(25),e("p",[t._v("退出Cli的命令是：")]),t._v(" "),t._m(26),e("p",[t._v("有关IoTDB SQL支持的命令的更多信息，请参见 "),e("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/2-Reference.html"}},[t._v("SQL Reference")]),t._v(".")],1),t._v(" "),t._m(27),t._v(" "),e("p",[t._v("可以使用ctrl-C或以下脚本停止服务器：")]),t._v(" "),t._m(28),t._m(29),t._v(" "),e("p",[t._v("在incubator-iotdb的根路径下：")]),t._v(" "),t._m(30),e("p",[t._v("构建后，IoTDB客户端将位于文件夹“ client / target / iotdb-client- {project.version}”下。")])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"快速开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[this._v("#")]),this._v(" 快速开始")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"先决条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#先决条件"}},[this._v("#")]),this._v(" 先决条件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("Java> = 1.8（请确保已设置环境路径）")]),this._v(" "),s("li",[this._v("将最大打开文件数设置为65535，以避免出现“打开文件过多”的问题。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("从源代码安装。 如果需要自己修改代码，则可以使用此方法。")]),this._v(" "),s("li",[this._v("从二进制文件安装。 从官方网站下载二进制文件。 这是推荐的方法，在此方法中，您将获得开箱即用的二进制发行包。（即将推出...）")]),this._v(" "),s("li",[this._v("使用Docker：dockerfile的路径为https://github.com/apache/incubator-iotdb/blob/master/docker/Dockerfile")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[this._v("#")]),this._v(" 下载")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"构型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构型"}},[this._v("#")]),this._v(" 构型")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("环境配置模块 ("),e("code",[t._v("iotdb-env.bat")]),t._v(", "),e("code",[t._v("iotdb-env.sh")]),t._v("),")]),t._v(" "),e("li",[t._v("系统配置模块 ("),e("code",[t._v("tsfile-format.properties")]),t._v(", "),e("code",[t._v("iotdb-engine.properties")]),t._v(")")]),t._v(" "),e("li",[t._v("日志配置模块 ("),e("code",[t._v("logback.xml")]),t._v(").")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[this._v("#")]),this._v(" 开始")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"开始-iotdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始-iotdb"}},[this._v("#")]),this._v(" 开始 IoTDB")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("# Unix/OS X\n> sbin/start-server.sh\n\n# Windows\n> sbin\\start-server.bat\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br"),s("span",{staticClass:"line-number"},[this._v("4")]),s("br"),s("span",{staticClass:"line-number"},[this._v("5")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"使用iotdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用iotdb"}},[this._v("#")]),this._v(" 使用IoTDB")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"使用cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用cli"}},[this._v("#")]),this._v(" 使用Cli")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("# Unix/OS X\n> sbin/start-client.sh -h 127.0.0.1 -p 6667 -u root -pw root\n\n# Windows\n> sbin\\start-client.bat -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br"),s("span",{staticClass:"line-number"},[this._v("4")]),s("br"),s("span",{staticClass:"line-number"},[this._v("5")]),s("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" _____       _________  ______   ______\n|_   _|     |  _   _  ||_   _ `.|_   _ \\\n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |\n  | | / .'`\\ \\  | |      | |  | | |  __'.\n _| |_| \\__. | _| |_    _| |_.' /_| |__) |\n|_____|'.__.' |_____|  |______.'|_______/  version x.x.x\n\n\nIoTDB> login successfully\nIoTDB>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"iotdb的基本命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iotdb的基本命令"}},[this._v("#")]),this._v(" IoTDB的基本命令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> SET STORAGE GROUP TO root.ln\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> SHOW STORAGE GROUP\n+-----------------------------------+\n|                      Storage Group|\n+-----------------------------------+\n|                            root.ln|\n+-----------------------------------+\nstorage group number = 1\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN\nIoTDB> CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("查询系统中所有时间序列：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> SHOW TIMESERIES\n+-------------------------------+---------------+--------+--------+\n|                     Timeseries|  Storage Group|DataType|Encoding|\n+-------------------------------+---------------+--------+--------+\n|       root.ln.wf01.wt01.status|        root.ln| BOOLEAN|   PLAIN|\n|  root.ln.wf01.wt01.temperature|        root.ln|   FLOAT|     RLE|\n+-------------------------------+---------------+--------+--------+\nTotal timeseries number = 2\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("查询特定时间序列（root.ln.wf01.wt01.status）：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> SHOW TIMESERIES root.ln.wf01.wt01.status\n+------------------------------+--------------+--------+--------+\n|                    Timeseries| Storage Group|DataType|Encoding|\n+------------------------------+--------------+--------+--------+\n|      root.ln.wf01.wt01.status|       root.ln| BOOLEAN|   PLAIN|\n+------------------------------+--------------+--------+--------+\nTotal timeseries number = 1\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status) values(100,true);\nIoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) values(200,false,20.71)\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> SELECT status FROM root.ln.wf01.wt01\n+-----------------------+------------------------+\n|                   Time|root.ln.wf01.wt01.status|\n+-----------------------+------------------------+\n|1970-01-01T08:00:00.100|                    true|\n|1970-01-01T08:00:00.200|                   false|\n+-----------------------+------------------------+\nTotal line number = 2\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> SELECT * FROM root.ln.wf01.wt01\n+-----------------------+--------------------------+-----------------------------+\n|                   Time|  root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|\n+-----------------------+--------------------------+-----------------------------+\n|1970-01-01T08:00:00.100|                      true|                         null|\n|1970-01-01T08:00:00.200|                     false|                        20.71|\n+-----------------------+--------------------------+-----------------------------+\nTotal line number = 2\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("IoTDB> quit\nor\nIoTDB> exit\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"停止iotdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#停止iotdb"}},[this._v("#")]),this._v(" 停止IoTDB")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("# Unix/OS X\n> sbin/stop-server.sh\n\n# Windows\n> sbin\\stop-server.bat\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br"),s("span",{staticClass:"line-number"},[this._v("4")]),s("br"),s("span",{staticClass:"line-number"},[this._v("5")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"只建立客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#只建立客户端"}},[this._v("#")]),this._v(" 只建立客户端")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("> mvn clean package -pl client -am -DskipTests\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])}],!1,null,null,null);s.default=a.exports}}]);