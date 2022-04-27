(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{934:function(e,t,a){"use strict";a.r(t);var r=a(89),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"dbeaver-iotdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dbeaver-iotdb"}},[e._v("#")]),e._v(" DBeaver-IoTDB")]),e._v(" "),a("p",[e._v("DBeaver is a SQL client software application and a database administration tool. It can use the JDBC application programming interface (API) to interact with IoTDB via the JDBC driver.")]),e._v(" "),a("h3",{attrs:{id:"dbeaver-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dbeaver-installation"}},[e._v("#")]),e._v(" DBeaver Installation")]),e._v(" "),a("ul",[a("li",[e._v("From DBeaver site: https://dbeaver.io/download/")])]),e._v(" "),a("h3",{attrs:{id:"iotdb-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-installation"}},[e._v("#")]),e._v(" IoTDB Installation")]),e._v(" "),a("ul",[a("li",[e._v("Download binary version\n"),a("ul",[a("li",[e._v("From IoTDB site: https://iotdb.apache.org/Download/")]),e._v(" "),a("li",[e._v("Version >= 0.13.0")])])]),e._v(" "),a("li",[e._v("Or compile from source code\n"),a("ul",[a("li",[e._v("See https://github.com/apache/iotdb")])])])]),e._v(" "),a("h3",{attrs:{id:"connect-iotdb-and-dbeaver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-iotdb-and-dbeaver"}},[e._v("#")]),e._v(" Connect IoTDB and DBeaver")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Start IoTDB server")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("./sbin/start-server.sh\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Start DBeaver")])]),e._v(" "),a("li",[a("p",[e._v("Open Driver Manager")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2010.56.22%20AM.png?raw=true",alt:""}})])]),e._v(" "),a("li",[a("p",[e._v("Create a new driver type for IoTDB")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2010.56.51%20AM.png?raw=true",alt:""}})])]),e._v(" "),a("li",[a("p",[e._v("Download "),a("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sources"),a("OutboundLink")],1),e._v("，unzip it and compile jdbc driver by the following command")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("mvn clean package -pl jdbc -am -DskipTests -P get-jar-with-dependencies\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("Find and add a lib named "),a("code",[e._v("apache-iotdb-jdbc-{version}-jar-with-dependencies.jar")]),e._v(", which should be under "),a("code",[e._v("jdbc/target/")]),e._v(", then select "),a("code",[e._v("Find Class")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202022-04-26%20at%205.57.32%20PM.png?raw=true",alt:""}})])]),e._v(" "),a("li",[a("p",[e._v("Edit the driver Settings")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2011.03.03%20AM.png?raw=true",alt:""}})])]),e._v(" "),a("li",[a("p",[e._v("Open New DataBase Connection and select iotdb")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2011.05.44%20AM.png?raw=true",alt:""}})])]),e._v(" "),a("li",[a("p",[e._v("Edit JDBC Connection Settings")])])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("JDBC URL: jdbc:iotdb://127.0.0.1:6667/\nUsername: root\nPassword: root\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2011.07.09%20AM.png?raw=true",alt:""}})]),e._v(" "),a("ol",{attrs:{start:"11"}},[a("li",[e._v("Test Connection")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2011.07.31%20AM.png?raw=true",alt:""}})]),e._v(" "),a("ol",{attrs:{start:"12"}},[a("li",[e._v("Enjoy IoTDB with DBeaver")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2011.08.33%20AM.png?raw=true",alt:""}})])])}),[],!1,null,null,null);t.default=s.exports}}]);