(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{790:function(t,s,e){"use strict";e.r(s);var a=e(69),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"zeppelin-iotdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zeppelin-iotdb"}},[t._v("#")]),t._v(" Zeppelin-IoTDB")]),t._v(" "),e("h3",{attrs:{id:"about-zeppelin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#about-zeppelin"}},[t._v("#")]),t._v(" About Zeppelin")]),t._v(" "),e("p",[t._v("Zeppelin is a web-based notebook that enables interactive data analytics. You can connect to data sources and perform interactive operations with SQL, Scala, etc. The operations can be saved as documents, just like Jupyter. Zeppelin has already supported many data sources, including Spark, ElasticSearch, Cassandra, and InfluxDB. Now, we have enabled Zeppelin to operate IoTDB via SQL.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/5548915/102752947-520a3e80-43a5-11eb-8fb1-8fac471c8c7e.png",alt:"iotdb-note-snapshot"}})]),t._v(" "),e("h3",{attrs:{id:"zeppelin-iotdb-interpreter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zeppelin-iotdb-interpreter"}},[t._v("#")]),t._v(" Zeppelin-IoTDB Interpreter")]),t._v(" "),e("h4",{attrs:{id:"system-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements"}},[t._v("#")]),t._v(" System Requirements")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("IoTDB Version")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Java Version")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Zeppelin Version")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(">="),e("code",[t._v("0.12.0-SNAPSHOT")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v(">="),e("code",[t._v("1.8.0_271")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v(">=0.9.0")])])])])]),t._v(" "),e("p",[t._v("Install IoTDB: Reference to "),e("RouterLink",{attrs:{to:"/UserGuide/V0.12.x/QuickStart/QuickStart.html"}},[t._v("IoTDB Quick Start")]),t._v(". Suppose IoTDB is placed at "),e("code",[t._v("$IoTDB_HOME")]),t._v(".")],1),t._v(" "),e("p",[t._v("Install Zeppelin:")]),t._v(" "),e("blockquote",[e("p",[t._v("Method A. Download directly: You can download "),e("a",{attrs:{href:"https://zeppelin.apache.org/download.html#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zeppelin"),e("OutboundLink")],1),t._v(" and unpack the binary package. "),e("a",{attrs:{href:"http://www.apache.org/dyn/closer.cgi/zeppelin/zeppelin-0.9.0/zeppelin-0.9.0-bin-netinst.tgz",target:"_blank",rel:"noopener noreferrer"}},[t._v("netinst"),e("OutboundLink")],1),t._v(" binary package is recommended since it's relatively small by excluding irrelevant interpreters.")]),t._v(" "),e("p",[t._v("Method B. Compile from source code: Reference to "),e("a",{attrs:{href:"https://zeppelin.apache.org/docs/latest/setup/basics/how_to_build.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("build Zeppelin from source"),e("OutboundLink")],1),t._v(". The command is "),e("code",[t._v("mvn clean package -pl zeppelin-web,zeppelin-server -am -DskipTests")]),t._v(".")])]),t._v(" "),e("p",[t._v("Suppose Zeppelin is placed at "),e("code",[t._v("$Zeppelin_HOME")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"build-interpreter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-interpreter"}},[t._v("#")]),t._v(" Build Interpreter")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" cd $IoTDB_HOME\n mvn clean package -pl zeppelin-interpreter -am -DskipTests\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("The interpreter will be in the folder:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" $IoTDB_HOME/zeppelin-interpreter/target/zeppelin-{version}-SNAPSHOT-jar-with-dependencies.jar\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h4",{attrs:{id:"install-interpreter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-interpreter"}},[t._v("#")]),t._v(" Install Interpreter")]),t._v(" "),e("p",[t._v("Once you have built your interpreter, create a new folder under the Zeppelin interpreter directory and put the built interpreter into it.")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" cd $IoTDB_HOME\n mkdir -p $Zeppelin_HOME/interpreter/iotdb\n cp $IoTDB_HOME/zeppelin-interpreter/target/zeppelin-{version}-SNAPSHOT-jar-with-dependencies.jar $Zeppelin_HOME/interpreter/iotdb\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h4",{attrs:{id:"running-zeppelin-and-iotdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-zeppelin-and-iotdb"}},[t._v("#")]),t._v(" Running Zeppelin and IoTDB")]),t._v(" "),e("p",[t._v("Go to "),e("code",[t._v("$Zeppelin_HOME")]),t._v(" and start Zeppelin by running:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" ./bin/zeppelin-daemon.sh start\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("or in Windows:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" .\\bin\\zeppelin.cmd\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Go to "),e("code",[t._v("$IoTDB_HOME")]),t._v(" and start IoTDB server:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" # Unix/OS X\n > nohup sbin/start-server.sh >/dev/null 2>&1 &\n or\n > nohup sbin/start-server.sh -c <conf_path> -rpc_port <rpc_port> >/dev/null 2>&1 &\n \n # Windows\n > sbin\\start-server.bat -c <conf_path> -rpc_port <rpc_port>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("h3",{attrs:{id:"use-zeppelin-iotdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-zeppelin-iotdb"}},[t._v("#")]),t._v(" Use Zeppelin-IoTDB")]),t._v(" "),e("p",[t._v("Wait for Zeppelin server to start, then visit http://127.0.0.1:8080/")]),t._v(" "),e("p",[t._v("In the interpreter page:")]),t._v(" "),e("ol",[e("li",[t._v("Click the "),e("code",[t._v("Create new node")]),t._v(" button")]),t._v(" "),e("li",[t._v("Set the note name")]),t._v(" "),e("li",[t._v("Configure your interpreter")])]),t._v(" "),e("p",[t._v("Now you are ready to use your interpreter.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/5548915/102752945-5171a800-43a5-11eb-8614-53b3276a3ce2.png",alt:"iotdb-create-note"}})]),t._v(" "),e("p",[t._v("We provide some simple SQL to show the use of Zeppelin-IoTDB interpreter:")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" STORAGE "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" TIMESERIES root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" DATATYPE"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BOOLEAN")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ENCODING"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("PLAIN"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" TIMESERIES root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("temperature "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" DATATYPE"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FLOAT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ENCODING"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("PLAIN"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" TIMESERIES root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hardware "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" DATATYPE"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("INT32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ENCODING"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("PLAIN"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temperature"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temperature"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temperature"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("33")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temperature"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("44")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temperature"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n \n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01\n "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br")])]),e("p",[t._v("The screenshot is as follows:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/5548915/102752948-52a2d500-43a5-11eb-9156-0c55667eb4cd.png",alt:"iotdb-note-snapshot2"}})]),t._v(" "),e("p",[t._v("You can also design more fantasy documents referring to "),e("a",{attrs:{href:"https://zeppelin.apache.org/docs/0.9.0-SNAPSHOT/usage/display_system/basic.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("[1]"),e("OutboundLink")],1),t._v(" and others.")]),t._v(" "),e("p",[t._v("The above demo notebook can be found at  "),e("code",[t._v("$IoTDB_HOME/zeppelin-interpreter/Zeppelin-IoTDB-Demo.zpln")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("p",[t._v("You can configure the connection parameters in http://127.0.0.1:8080/#/interpreter :")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/5548915/102752940-50407b00-43a5-11eb-94fb-3e3be222183c.png",alt:"iotdb-configuration"}})]),t._v(" "),e("p",[t._v("The parameters you can configure are as follows:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("iotdb.host")]),t._v(" "),e("td",[t._v("127.0.0.1")]),t._v(" "),e("td",[t._v("IoTDB server host to connect to")])]),t._v(" "),e("tr",[e("td",[t._v("iotdb.port")]),t._v(" "),e("td",[t._v("6667")]),t._v(" "),e("td",[t._v("IoTDB server port to connect to")])]),t._v(" "),e("tr",[e("td",[t._v("iotdb.username")]),t._v(" "),e("td",[t._v("root")]),t._v(" "),e("td",[t._v("Username for authentication")])]),t._v(" "),e("tr",[e("td",[t._v("iotdb.password")]),t._v(" "),e("td",[t._v("root")]),t._v(" "),e("td",[t._v("Password for authentication")])]),t._v(" "),e("tr",[e("td",[t._v("iotdb.fetchSize")]),t._v(" "),e("td",[t._v("10000")]),t._v(" "),e("td",[t._v("Query fetch size")])]),t._v(" "),e("tr",[e("td",[t._v("iotdb.zoneId")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Zone Id")])]),t._v(" "),e("tr",[e("td",[t._v("iotdb.enable.rpc.compression")]),t._v(" "),e("td",[t._v("FALSE")]),t._v(" "),e("td",[t._v("Whether enable rpc compression")])]),t._v(" "),e("tr",[e("td",[t._v("iotdb.time.display.type")]),t._v(" "),e("td",[t._v("default")]),t._v(" "),e("td",[t._v("The time format to display")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);