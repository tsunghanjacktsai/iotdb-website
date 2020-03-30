(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{340:function(e,t,i){"use strict";i.r(t);var s=i(1),r=Object(s.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"一、how-to-contribute"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#一、how-to-contribute"}},[e._v("#")]),e._v(" 一、How to contribute")]),e._v(" "),i("h2",{attrs:{id:"resources"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),i("p",[e._v("Home Page：https://iotdb.apache.org/")]),e._v(" "),i("p",[e._v("Repository：https://github.com/apache/incubator-iotdb/tree/master")]),e._v(" "),i("p",[e._v("Quick start：http://iotdb.apache.org/document/master/UserGuide/0-Get%20Started/1-QuickStart.html")]),e._v(" "),i("p",[e._v("Jira：https://issues.apache.org/jira/projects/IOTDB/issues/IOTDB-9?filter=allopenissues")]),e._v(" "),i("p",[e._v("Wiki：https://cwiki.apache.org/confluence/display/IOTDB/Home")]),e._v(" "),i("h2",{attrs:{id:"subscribe-mail-list"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#subscribe-mail-list"}},[e._v("#")]),e._v(" Subscribe mail list")]),e._v(" "),i("p",[e._v("Discuss: dev@iotdb.apache.org")]),e._v(" "),i("p",[e._v("send an email to dev-subscribe@iotdb.apache.org, then reply again.")]),e._v(" "),i("p",[e._v("Jira report: notifications@iotdb.apache.org")]),e._v(" "),i("p",[e._v("send an email to notifications-subscribe@iotdb.apache.org, then reply again.")]),e._v(" "),i("h2",{attrs:{id:"issue-report"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#issue-report"}},[e._v("#")]),e._v(" Issue report")]),e._v(" "),i("p",[e._v("Jira or Github issue.")]),e._v(" "),i("p",[e._v("The jira issue change will auto sent an email to notifications@iotdb.apache.org")]),e._v(" "),i("h2",{attrs:{id:"contribute-documents"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#contribute-documents"}},[e._v("#")]),e._v(" Contribute Documents")]),e._v(" "),i("p",[e._v("All documents in website is in docs in repository")]),e._v(" "),i("p",[e._v("Doc version -> branch")]),e._v(" "),i("ul",[i("li",[e._v("In progress -> master")]),e._v(" "),i("li",[e._v("major_version.x -> rel/major_version （e.g., 0.9.x -> rel/0.9）")])]),e._v(" "),i("p",[e._v("Note:")]),e._v(" "),i("ul",[i("li",[e._v("The pictures in markdown could be put into https://github.com/thulab/iotdb/issues/543 to get url")])]),e._v(" "),i("h2",{attrs:{id:"contribute-codes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#contribute-codes"}},[e._v("#")]),e._v(" Contribute codes")]),e._v(" "),i("ul",[i("li",[e._v("Leave a comment in the jira issue you want to work.")]),e._v(" "),i("li",[e._v("Import code style in idea: java-google-style.xml")]),e._v(" "),i("li",[e._v("Submit PR, use [IOTDB-issue number] as prefix")])]),e._v(" "),i("h2",{attrs:{id:"import-iotdb-in-ide"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#import-iotdb-in-ide"}},[e._v("#")]),e._v(" Import IoTDB in IDE")]),e._v(" "),i("h3",{attrs:{id:"idea"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#idea"}},[e._v("#")]),e._v(" IDEA")]),e._v(" "),i("ul",[i("li",[e._v('"File" -> "Open" -> choose the root path of IoTDB source code.')]),e._v(" "),i("li",[e._v("use "),i("code",[e._v("mvn clean compile -Dmaven.test.skip=true")]),e._v("to get target.")]),e._v(" "),i("li",[e._v("mark directory "),i("em",[i("strong",[e._v("server/target/generated-sources/antlr4")])]),e._v(" as source code")]),e._v(" "),i("li",[e._v("mark directory "),i("em",[i("strong",[e._v("service-rpc/target/generated-sources/thrift")])]),e._v(" as source code")])]),e._v(" "),i("h3",{attrs:{id:"eclipse"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#eclipse"}},[e._v("#")]),e._v(" Eclipse")]),e._v(" "),i("p",[e._v("Using Eclipse to develop IoTDB is also simple but requires some plugins of Eclipse.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("If your Eclipse version is released before 2019, Antlr plugin maybe not work in Eclipse. In this way, you have to run the command in your console first: "),i("code",[e._v("mvn eclipse:eclipse -DskipTests")]),e._v(".\nAfter the command is done, you can import IoTDB as an existing project:")]),e._v(" "),i("ul",[i("li",[e._v('Choose menu "import" -> "General" -> "Existing Projects into Workspace" -> Choose IoTDB\nroot path;')]),e._v(" "),i("li",[e._v("Done.")])])]),e._v(" "),i("li",[i("p",[e._v('If your Eclipse version is fashion enough (e.g., you are using the latest version of Eclipse),\nyou can just choose menu "import" -> "Maven" -> "Existing Maven Projects".')])])]),e._v(" "),i("h2",{attrs:{id:"debugging-iotdb"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#debugging-iotdb"}},[e._v("#")]),e._v(" Debugging IoTDB")]),e._v(" "),i("p",[e._v("The main class of IoTDB server is "),i("code",[e._v("org.apache.iotdb.db.service.IoTDB")]),e._v(".\nThe main class of IoTDB cli is "),i("code",[e._v("org.apache.iotdb.client.Client")]),e._v("\n(or "),i("code",[e._v("org.apache.iotdb.client.WinClient")]),e._v(" on Win OS).")]),e._v(" "),i("p",[e._v('The client needs parameter: "-h 127.0.0.1 -p 6667 -u root -pw root"')]),e._v(" "),i("p",[e._v("You can run/debug IoTDB by using the two classes as the entrance.")]),e._v(" "),i("p",[e._v("Another way to understand IoTDB is to read and try Unit Tests.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("The implementation of RPC in the server "),i("code",[e._v("server/src/main/java/org/apache/iotdb/db/service/TSServiceImpl")])]),e._v(" "),i("ul",[i("li",[e._v("JDBC.execute() -> TSServiceImpl.executeStatement(TSExecuteStatementReq req)")]),e._v(" "),i("li",[e._v("JDBC.executeQuery() -> TSServiceImpl.executeQueryStatement(TSExecuteStatementReq req)")]),e._v(" "),i("li",[e._v("Session.insert() -> TSServiceImpl.insert(TSInsertReq req)")])])]),e._v(" "),i("li",[i("p",[e._v("Storage Engine: org.apache.iotdb.db.engine.StorageEngine")])]),e._v(" "),i("li",[i("p",[e._v("Query Engine: org.apache.iotdb.db.qp.Planner")])])])])}],!1,null,null,null);t.default=r.exports}}]);