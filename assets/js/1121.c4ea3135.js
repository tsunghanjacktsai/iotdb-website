(window.webpackJsonp=window.webpackJsonp||[]).push([[1121],{1692:function(a,s,t){"use strict";t.r(s);var r=t(71),n=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"iotdb-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-grafana"}},[a._v("#")]),a._v(" IoTDB-Grafana")]),a._v(" "),t("h2",{attrs:{id:"概览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[a._v("#")]),a._v(" 概览")]),a._v(" "),t("ul",[t("li",[a._v("IoTDB-Grafana\n"),t("ul",[t("li",[a._v("Grafana的安装与部署\n"),t("ul",[t("li",[a._v("安装")]),a._v(" "),t("li",[a._v("simple-json-datasource数据源插件安装")]),a._v(" "),t("li",[a._v("启动Grafana")])])]),a._v(" "),t("li",[a._v("IoTDB安装")]),a._v(" "),t("li",[a._v("IoTDB-Grafana连接器安装\n"),t("ul",[t("li",[a._v("启动IoTDB-Grafana")])])]),a._v(" "),t("li",[a._v("使用Grafana\n"),t("ul",[t("li",[a._v("添加IoTDB数据源")]),a._v(" "),t("li",[a._v("操作Grafana")])])])])])]),a._v(" "),t("p",[a._v("Grafana是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。Grafana支持Graphite，InfluxDB等国际主流时序时序数据库作为数据源。在IoTDB项目中，我们开发了Grafana展现IoTDB中时序数据的连接器IoTDB-Grafana，为您提供使用Grafana展示IoTDB数据库中的时序数据的可视化方法。")]),a._v(" "),t("h2",{attrs:{id:"grafana的安装与部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grafana的安装与部署"}},[a._v("#")]),a._v(" Grafana的安装与部署")]),a._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("ul",[t("li",[a._v("Grafana组件下载地址：https://grafana.com/grafana/download")]),a._v(" "),t("li",[a._v("版本 >= 4.4.1")])]),a._v(" "),t("h3",{attrs:{id:"simple-json-datasource数据源插件安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simple-json-datasource数据源插件安装"}},[a._v("#")]),a._v(" simple-json-datasource数据源插件安装")]),a._v(" "),t("ul",[t("li",[a._v("插件名称: simple-json-datasource")]),a._v(" "),t("li",[a._v("下载地址: https://github.com/grafana/simple-json-datasource")])]),a._v(" "),t("p",[a._v("具体下载方法是：到Grafana的插件目录中："),t("code",[a._v("{Grafana文件目录}\\data\\plugins\\")]),a._v("（Windows系统，启动Grafana后会自动创建"),t("code",[a._v("data\\plugins")]),a._v("目录）或"),t("code",[a._v("/var/lib/grafana/plugins")]),a._v(" （Linux系统，plugins目录需要手动创建）或"),t("code",[a._v("/usr/local/var/lib/grafana/plugins")]),a._v("（MacOS系统，具体位置参看使用"),t("code",[a._v("brew install")]),a._v("安装Grafana后命令行给出的位置提示。")]),a._v(" "),t("p",[a._v("执行下面的命令：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Shell > git clone https://github.com/grafana/simple-json-datasource.git\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("然后重启Grafana服务器，在浏览器中登录Grafana，在“Add data source”页面中“Type”选项出现“SimpleJson”即为安装成功。")]),a._v(" "),t("h3",{attrs:{id:"启动grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动grafana"}},[a._v("#")]),a._v(" 启动Grafana")]),a._v(" "),t("p",[a._v("进入Grafana的安装目录，使用以下命令启动Grafana：")]),a._v(" "),t("ul",[t("li",[a._v("Windows系统：")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Shell > bin\\grafana-server.exe\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("Linux系统：")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Shell > sudo service grafana-server start\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("MacOS系统：")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Shell > grafana-server --config=/usr/local/etc/grafana/grafana.ini --homepath /usr/local/share/grafana cfg:default.paths.logs=/usr/local/var/log/grafana cfg:default.paths.data=/usr/local/var/lib/grafana cfg:default.paths.plugins=/usr/local/var/lib/grafana/plugins\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"iotdb安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iotdb安装"}},[a._v("#")]),a._v(" IoTDB安装")]),a._v(" "),t("p",[a._v("参见"),t("a",{attrs:{href:"https://github.com/apache/incubator-iotdb",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/apache/incubator-iotdb"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"iotdb-grafana连接器安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-grafana连接器安装"}},[a._v("#")]),a._v(" IoTDB-Grafana连接器安装")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/apache/incubator-iotdb.git\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"启动iotdb-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动iotdb-grafana"}},[a._v("#")]),a._v(" 启动IoTDB-Grafana")]),a._v(" "),t("h4",{attrs:{id:"方案一（适合开发者）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案一（适合开发者）"}},[a._v("#")]),a._v(" 方案一（适合开发者）")]),a._v(" "),t("p",[a._v("导入整个项目，maven依赖安装完后，直接运行"),t("code",[a._v("incubatoriotdb/grafana/rc/main/java/org/apache/iotdb/web/grafana")]),a._v("目录下"),t("code",[a._v("TsfileWebDemoApplication.java")]),a._v("，这个grafana连接器采用springboot开发")]),a._v(" "),t("h4",{attrs:{id:"方案二（适合使用者）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案二（适合使用者）"}},[a._v("#")]),a._v(" 方案二（适合使用者）")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" incubator-iotdb\nmvn clean package -pl grafana -am -Dmaven.test.skip"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" grafana/target\njava -jar iotdb-grafana-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(".war\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("   ____          _            __ _ _\n /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" / ___"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '")]),a._v("_ "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'_| | '")]),a._v("_ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/ _` "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/  ___"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("_"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  '  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("____"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" .__"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("__, "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" / / / /\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("___/"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/_/_/_/\n :: Spring Boot ::        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("v1.5.4.RELEASE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br")])]),t("p",[a._v("如果您需要配置属性，将"),t("code",[a._v("grafana/src/main/resources/application.properties")]),a._v("移动到war包同级目录下（"),t("code",[a._v("grafana/target")]),a._v("）")]),a._v(" "),t("h2",{attrs:{id:"使用grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用grafana"}},[a._v("#")]),a._v(" 使用Grafana")]),a._v(" "),t("p",[a._v("Grafana以网页的dashboard形式为您展示数据，在使用时请您打开浏览器，访问http://<ip>:<port>")]),a._v(" "),t("p",[a._v("默认地址为http://localhost:3000/")]),a._v(" "),t("p",[a._v("注：IP为您的Grafana所在的服务器IP，Port为Grafana的运行端口（默认3000）。默认登录的用户名和密码都是“admin”。")]),a._v(" "),t("h3",{attrs:{id:"添加iotdb数据源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加iotdb数据源"}},[a._v("#")]),a._v(" 添加IoTDB数据源")]),a._v(" "),t("p",[a._v("点击左上角的“Grafana”图标，选择"),t("code",[a._v("Data Source")]),a._v("选项，然后再点击"),t("code",[a._v("Add data source")]),a._v("。\n"),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664777-2766ae00-1ff5-11e9-9d2f-7489f8ccbfc2.png"}})]),a._v(" "),t("p",[a._v("在编辑数据源的时候，"),t("code",[a._v("Type")]),a._v("一栏选择"),t("code",[a._v("Simplejson")]),a._v("，"),t("code",[a._v("URL")]),a._v("一栏填写http://<ip>:<port>，IP为您的IoTDB-Grafana连接器所在的服务器IP，Port为运行端口（默认8888）。之后确保IoTDB已经启动，点击“Save & Test”，出现“Data Source is working”提示表示配置成功。\n"),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664842-554bf280-1ff5-11e9-97d2-54eebe0b2ca1.png"}})]),a._v(" "),t("h3",{attrs:{id:"操作grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作grafana"}},[a._v("#")]),a._v(" 操作Grafana")]),a._v(" "),t("p",[a._v("进入Grafana可视化页面后，可以选择添加时间序列，如图 6.9。您也可以按照Grafana官方文档进行相应的操作，详情可参看Grafana官方文档：http://docs.grafana.org/guides/getting_started/。")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664878-6e54a380-1ff5-11e9-9718-4d0e24627fa8.png"}}),a._v(" "),t("h2",{attrs:{id:"配置grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置grafana"}},[a._v("#")]),a._v(" 配置grafana")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('# IoTDB的IP和端口\nspring.datasource.url=jdbc:iotdb://127.0.0.1:6667/\nspring.datasource.username=root\nspring.datasource.password=root\nspring.datasource.driver-class-name=org.apache.iotdb.jdbc.IoTDBDriver\nserver.port=8888\n# Use this value to set timestamp precision as "ms", "us" or "ns", which must to be same with the timestamp\n# precision of Apache IoTDB engine.\ntimestamp_precision=ms\n\n# 是否开启降采样\nisDownSampling=true\n# 默认采样interval\ninterval=1m\n# 用于对连续数据(int, long, float, double)进行降采样的聚合函数\n# COUNT, FIRST_VALUE, LAST_VALUE, MAX_TIME, MAX_VALUE, AVG, MIN_TIME, MIN_VALUE, NOW, SUM\ncontinuous_data_function=AVG\n# 用于对离散数据(boolean, string)进行降采样的聚合函数\n# COUNT, FIRST_VALUE, LAST_VALUE, MAX_TIME, MIN_TIME, NOW\ndiscrete_data_function=LAST_VALUE\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br")])]),t("p",[a._v("其中interval具体配置信息如下")]),a._v(" "),t("p",[a._v("<1h: no sampling")]),a._v(" "),t("p",[a._v("1h~1d : intervals = 1m")]),a._v(" "),t("p",[a._v("1d~30d:intervals = 1h")]),a._v(" "),t("p",[a._v(">30d：intervals = 1d")]),a._v(" "),t("p",[a._v("配置完后，请重新运行war包")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("java -jar iotdb-grafana-{version}.war\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);