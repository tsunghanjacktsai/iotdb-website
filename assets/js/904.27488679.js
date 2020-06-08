(window.webpackJsonp=window.webpackJsonp||[]).push([[904],{1474:function(e,t,s){"use strict";s.r(t);var a=s(71),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"ddl-data-definition-language"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ddl-data-definition-language"}},[e._v("#")]),e._v(" DDL (Data Definition Language)")]),e._v(" "),s("h3",{attrs:{id:"create-storage-group"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-storage-group"}},[e._v("#")]),e._v(" Create Storage Group")]),e._v(" "),s("p",[e._v("According to the storage model we can set up the corresponding storage group. The SQL statements for creating storage groups are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB > set storage group to root.ln\nIoTDB > set storage group to root.sgcc\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("We can thus create two storage groups using the above two SQL statements.")]),e._v(" "),s("p",[e._v("It is worth noting that when the path itself or the parent/child layer of the path is already set as a storage group, the path is then not allowed to be set as a storage group. For example, it is not feasible to set "),s("code",[e._v("root.ln.wf01")]),e._v(" as a storage group when there exist two storage groups "),s("code",[e._v("root.ln")]),e._v(" and "),s("code",[e._v("root.sgcc")]),e._v(". The system will give the corresponding error prompt as shown below:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> set storage group to root.ln.wf01\nMsg: org.apache.iotdb.exception.MetadataErrorException: org.apache.iotdb.exception.PathErrorException: The prefix of root.ln.wf01 has been set to the storage group.\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"show-storage-group"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-storage-group"}},[e._v("#")]),e._v(" Show Storage Group")]),e._v(" "),s("p",[e._v("After the storage group is created, we can use the "),s("RouterLink",{attrs:{to:"/UserGuide/Master/V0.9.x/5-Operation Manual/4-SQL Reference.html"}},[e._v("SHOW STORAGE GROUP")]),e._v(" statement to view all the storage groups. The SQL statement is as follows:")],1),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> show storage group\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The result is as follows:\n"),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577338-84c70600-1ef4-11e9-9dab-605b32c02836.jpg"}})])],1),e._v(" "),s("h3",{attrs:{id:"create-timeseries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-timeseries"}},[e._v("#")]),e._v(" Create Timeseries")]),e._v(" "),s("p",[e._v("According to the storage model selected before, we can create corresponding timeseries in the two storage groups respectively. The SQL statements for creating timeseries are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB > create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf01.wt01.temperature with datatype=FLOAT,encoding=RLE\nIoTDB > create timeseries root.ln.wf02.wt02.hardware with datatype=TEXT,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf02.wt02.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.temperature with datatype=FLOAT,encoding=RLE\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("It is worth noting that when in the CRATE TIMESERIES statement the encoding method conflicts with the data type, the system will give the corresponding error prompt as shown below:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Please refer to "),s("RouterLink",{attrs:{to:"/UserGuide/Master/V0.9.x/2-Concept/3-Encoding.html"}},[e._v("Encoding")]),e._v(" for correspondence between data type and encoding.")],1),e._v(" "),s("h3",{attrs:{id:"show-timeseries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-timeseries"}},[e._v("#")]),e._v(" Show Timeseries")]),e._v(" "),s("p",[e._v("Currently, IoTDB supports two ways of viewing timeseries:")]),e._v(" "),s("ul",[s("li",[e._v("SHOW TIMESERIES statement presents all timeseries information in JSON form")]),e._v(" "),s("li",[e._v("SHOW TIMESERIES <"),s("code",[e._v("Path")]),e._v("> statement returns all timeseries information and the total number of timeseries under the given <"),s("code",[e._v("Path")]),e._v(">  in tabular form. timeseries information includes: timeseries path, storage group it belongs to, data type, encoding type.  <"),s("code",[e._v("Path")]),e._v("> needs to be a prefix path or a path with star or a timeseries path. SQL statements are as follows:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> show timeseries root\nIoTDB> show timeseries root.ln\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("The results are shown below respectly:")]),e._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577347-8db7d780-1ef4-11e9-91d6-764e58c10e94.jpg"}})]),e._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577359-97413f80-1ef4-11e9-8c10-53b291fc10a5.jpg"}})]),e._v(" "),s("p",[e._v("It is worth noting that when the queried path does not exist, the system will return no timeseries.")]),e._v(" "),s("h3",{attrs:{id:"count-timeseries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#count-timeseries"}},[e._v("#")]),e._v(" Count Timeseries")]),e._v(" "),s("p",[e._v("IoTDB is able to use "),s("code",[e._v("COUNT TIMESERIES <Path>")]),e._v(" to count the number of timeseries in the path. SQL statements are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB > COUNT TIMESERIES root\nIoTDB > COUNT TIMESERIES root.ln\nIoTDB > COUNT TIMESERIES root.ln.*.*.status\nIoTDB > COUNT TIMESERIES root.ln.wf01.wt01.status\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("Besides, "),s("code",[e._v("LEVEL")]),e._v(" could be defined to show count the number of timeseries of each node at the given level in current Metadata Tree. This could be used to query the number of sensors under each device. The grammar is: "),s("code",[e._v("COUNT TIMESERIES <Path> GROUP BY LEVEL=<INTEGER>")]),e._v(".")]),e._v(" "),s("p",[e._v("For example, if there are several timeseires (use "),s("code",[e._v("show timeseries")]),e._v(" to show all timeseries):\n"),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792072-cdc8a480-1200-11ea-8cec-321fef618a12.png"}})])],1),e._v(" "),s("p",[e._v("Then the Metadata Tree will be as below:\n"),s("center",[s("img",{staticStyle:{width:"100%","max-width":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792176-1718f400-1201-11ea-861a-1a83c07ca144.jpg"}})])],1),e._v(" "),s("p",[e._v("As can be seen, "),s("code",[e._v("root")]),e._v(" is considered as "),s("code",[e._v("LEVEL=0")]),e._v(". So when you enter statements such as:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB > COUNT TIMESERIES root GROUP BY LEVEL=1\nIoTDB > COUNT TIMESERIES root.ln GROUP BY LEVEL=2\nIoTDB > COUNT TIMESERIES root.ln.wf01 GROUP BY LEVEL=2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("You will get following results:")]),e._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792071-cb664a80-1200-11ea-8386-02dd12046c4b.png"}})]),e._v(" "),s("blockquote",[s("p",[e._v("Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.")])]),e._v(" "),s("h3",{attrs:{id:"count-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#count-nodes"}},[e._v("#")]),e._v(" Count Nodes")]),e._v(" "),s("p",[e._v("IoTDB is able to use "),s("code",[e._v("COUNT NODES <Path> LEVEL=<INTEGER>")]),e._v(" to count the number of nodes at the given level in current Metadata Tree. This could be used to query the number of devices. The usage are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB > COUNT NODES root LEVEL=2\nIoTDB > COUNT NODES root.ln LEVEL=2\nIoTDB > COUNT NODES root.ln.wf01 LEVEL=3\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("As for the above mentioned example and Metadata tree, you can get following results:")]),e._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792060-c73a2d00-1200-11ea-8ec4-be7145fd6c8c.png"}})]),e._v(" "),s("blockquote",[s("p",[e._v("Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.")])]),e._v(" "),s("h3",{attrs:{id:"delete-timeseries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-timeseries"}},[e._v("#")]),e._v(" Delete Timeseries")]),e._v(" "),s("p",[e._v("To delete the timeseries we created before, we are able to use "),s("code",[e._v("DELETE TimeSeries <PrefixPath>")]),e._v(" statement.")]),e._v(" "),s("p",[e._v("The usage are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> delete timeseries root.ln.wf01.wt01.status\nIoTDB> delete timeseries root.ln.wf01.wt01.temperature, root.ln.wf02.wt02.hardware\nIoTDB> delete timeseries root.ln.wf02.*\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"show-devices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-devices"}},[e._v("#")]),e._v(" Show Devices")]),e._v(" "),s("p",[e._v("Similar to "),s("code",[e._v("Show Timeseries")]),e._v(", IoTDB also supports two ways of viewing devices:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("SHOW DEVICES")]),e._v(" statement presents all devices information, which is equal to "),s("code",[e._v("SHOW DEVICES root")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("SHOW DEVICES <PrefixPath>")]),e._v(" statement specifies the "),s("code",[e._v("PrefixPath")]),e._v(" and returns the devices information under the given level.\nSQL statement is as follows:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> show devices\nIoTDB> show devices root.ln\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h2",{attrs:{id:"ttl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ttl"}},[e._v("#")]),e._v(" TTL")]),e._v(" "),s("p",[e._v("IoTDB supports storage-level TTL settings, which means it is able to delete old data automatically and periodically. The benefit of using TTL is that hopefully you can control the total disk space usage and prevent the machine from running out of disks. Moreover, the query performance may downgrade as the total number of files goes up and the memory usage also increase as there are more files. Timely removing such files helps to keep at a high query performance level and reduce memory usage.")]),e._v(" "),s("h3",{attrs:{id:"set-ttl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-ttl"}},[e._v("#")]),e._v(" Set TTL")]),e._v(" "),s("p",[e._v("The SQL Statement for setting TTL is as follow:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> set ttl to root.ln 3600000\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("This example means that for data in "),s("code",[e._v("root.ln")]),e._v(", only that of the latest 1 hour will remain, the older one is removed or made invisible.")]),e._v(" "),s("h3",{attrs:{id:"unset-ttl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unset-ttl"}},[e._v("#")]),e._v(" Unset TTL")]),e._v(" "),s("p",[e._v("To unset TTL, we can use follwing SQL statement:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> unset ttl to root.ln\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("After unset TTL, all data will be accepted in "),s("code",[e._v("root.ln")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);