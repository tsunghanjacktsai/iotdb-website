(window.webpackJsonp=window.webpackJsonp||[]).push([[581],{1151:function(t,e,i){"use strict";i.r(e);var a=i(71),l=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),i("p",[t._v("Before starting to use IoTDB, you need to config the configuration files first. For your convenience, we have already set the default config in the files.")]),t._v(" "),i("p",[t._v("In total, we provide users three kinds of configurations module:")]),t._v(" "),i("ul",[i("li",[t._v("environment configuration file ("),i("code",[t._v("iotdb-env.bat")]),t._v(", "),i("code",[t._v("iotdb-env.sh")]),t._v("). The default configuration file for the environment configuration item. Users can configure the relevant system configuration items of JAVA-JVM in the file.")]),t._v(" "),i("li",[t._v("system configuration file ("),i("code",[t._v("tsfile-format.properties")]),t._v(", "),i("code",[t._v("iotdb-engine.properties")]),t._v(").\n"),i("ul",[i("li",[i("code",[t._v("tsfile-format.properties")]),t._v(": The default configuration file for the IoTDB file layer configuration item. Users can configure the information about the TsFile, such as the data size written to the disk per time("),i("code",[t._v("group_size_in_byte")]),t._v(").")]),t._v(" "),i("li",[i("code",[t._v("iotdb-engine.properties")]),t._v(": The default configuration file for the IoTDB engine layer configuration item. Users can configure the IoTDB engine related parameters in the file, such as JDBC service listening port ("),i("code",[t._v("rpc_port")]),t._v("), unsequence data storage directory ("),i("code",[t._v("unsequence_data_dir")]),t._v("), etc.")])])]),t._v(" "),i("li",[t._v("log configuration file ("),i("code",[t._v("logback.xml")]),t._v(")")])]),t._v(" "),i("p",[t._v("The configuration files of the three configuration items are located in the IoTDB installation directory: "),i("code",[t._v("$IOTDB_HOME/conf")]),t._v(" folder.")]),t._v(" "),i("h2",{attrs:{id:"iotdb-environment-configuration-file"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-environment-configuration-file"}},[t._v("#")]),t._v(" IoTDB Environment Configuration File")]),t._v(" "),i("p",[t._v("The environment configuration file is mainly used to configure the Java environment related parameters when IoTDB Server is running, such as JVM related configuration. This part of the configuration is passed to the JVM when the IoTDB Server starts. Users can view the contents of the environment configuration file by viewing the "),i("code",[t._v("iotdb-env.sh")]),t._v(" (or "),i("code",[t._v("iotdb-env.bat")]),t._v(") file.")]),t._v(" "),i("p",[t._v("The detail of each variables are as follows:")]),t._v(" "),i("ul",[i("li",[t._v("LOCAL_JMX")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("LOCAL_JMX")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("JMX monitoring mode, configured as yes to allow only local monitoring, no to allow remote monitoring")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v('Enum String: "yes", "no"')])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("yes")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("JMX_PORT")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("JMX_PORT")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("JMX listening port. Please confirm that the port is not a system reserved port and is not occupied")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int: [0,65535]")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("31999")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("MAX_HEAP_SIZE")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("MAX_HEAP_SIZE")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The maximum heap memory size that IoTDB can use at startup.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("On Linux or MacOS, the default is one quarter of the memory. On Windows, the default value for 32-bit systems is 512M, and the default for 64-bit systems is 2G.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("HEAP_NEWSIZE")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("HEAP_NEWSIZE")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The minimum heap memory size that IoTDB can use at startup.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("On Linux or MacOS, the default is min{cores * 100M, one quarter of MAX_HEAP_SIZE}. On Windows, the default value for 32-bit systems is 512M, and the default for 64-bit systems is 2G.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("h2",{attrs:{id:"iotdb-system-configuration-file"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-system-configuration-file"}},[t._v("#")]),t._v(" IoTDB System Configuration File")]),t._v(" "),i("h3",{attrs:{id:"file-layer"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#file-layer"}},[t._v("#")]),t._v(" File Layer")]),t._v(" "),i("ul",[i("li",[t._v("compressor")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("compressor")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Data compression method")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Enum String : “UNCOMPRESSED”, “SNAPPY”")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("UNCOMPRESSED")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Immediately")])])])]),t._v(" "),i("ul",[i("li",[t._v("group_size_in_byte")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("group_size_in_byte")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The data size written to the disk per time")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("134217728")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Immediately")])])])]),t._v(" "),i("ul",[i("li",[t._v("page_size_in_byte")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("page_size_in_byte")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The maximum size of a single page written in memory when each column in memory is written (in bytes)")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("65536")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Immediately")])])])]),t._v(" "),i("ul",[i("li",[t._v("max_number_of_points_in_page")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("max_number_of_points_in_page")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The maximum number of data points (timestamps - valued groups) contained in a page")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("1048576")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Immediately")])])])]),t._v(" "),i("ul",[i("li",[t._v("max_string_length")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("max_string_length")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The maximum length of a single string (number of character)")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("128")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Immediately")])])])]),t._v(" "),i("ul",[i("li",[t._v("time_series_data_type")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("time_series_data_type")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Timestamp data type")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v('Enum String: "INT32", "INT64"')])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Int64")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Immediately")])])])]),t._v(" "),i("ul",[i("li",[t._v("time_encoder")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("time_encoder")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Encoding type of time column")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Enum String: “TS_2DIFF”,“PLAIN”,“RLE”")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("TS_2DIFF")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Immediately")])])])]),t._v(" "),i("ul",[i("li",[t._v("value_encoder")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("value_encoder")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Encoding type of value column")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Enum String: “TS_2DIFF”,“PLAIN”,“RLE”")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("PLAIN")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Immediately")])])])]),t._v(" "),i("ul",[i("li",[t._v("float_precision")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("float_precision")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The precision of the floating point number.(The number of digits after the decimal point)")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The default is 2 digits. Note: The 32-bit floating point number has a decimal precision of 7 bits, and the 64-bit floating point number has a decimal precision of 15 bits. If the setting is out of the range, it will have no practical significance.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Immediately")])])])]),t._v(" "),i("h3",{attrs:{id:"engine-layer"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#engine-layer"}},[t._v("#")]),t._v(" Engine Layer")]),t._v(" "),i("ul",[i("li",[t._v("rpc_address")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("rpc_address")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The jdbc service listens on the address.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v('"0.0.0.0"')])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("rpc_port")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("rpc_port")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The jdbc service listens on the port. Please confirm that the port is not a system reserved port and is not occupied.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int : [0,65535]")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("6667")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("time_zone")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("time_zone")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The time zone in which the server is located, the default is Beijing time (+8)")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Time Zone String")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("+08:00")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("base_dir")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("base_dir")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The IoTDB system folder. It is recommended to use an absolute path.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("data")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("data_dirs")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("data_dirs")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The directories of data files. Multiple directories are separated by comma. See the "),i("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[t._v("multi_dir_strategy")]),t._v(" configuration item for data distribution strategy. The starting directory of the relative path is related to the operating system. It is recommended to use an absolute path. If the path does not exist, the system will automatically create it.")],1)]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String[]")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("data/data")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("wal_dir")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("wal_dir")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Write Ahead Log storage path. It is recommended to use an absolute path.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("data/wal")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("enable_wal")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("enable_wal")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Whether to enable the pre-write log. The default value is true(enabled), and false means closed.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Bool")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("multi_dir_strategy")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("multi_dir_strategy")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB's strategy for selecting directories for TsFile in tsfile_dir. You can use a simple class name or a full name of the class. The system provides the following three strategies: "),i("br"),t._v("1. SequenceStrategy: IoTDB selects the directory from tsfile_dir in order, traverses all the directories in tsfile_dir in turn, and keeps counting;"),i("br"),t._v("2. MaxDiskUsableSpaceFirstStrategy: IoTDB first selects the directory with the largest free disk space in tsfile_dir;"),i("br"),t._v("3. MinFolderOccupiedSpaceFirstStrategy: IoTDB prefers the directory with the least space used in tsfile_dir;"),i("br"),t._v("4.<UserDfineStrategyPackage> (user-defined policy)"),i("br"),t._v("You can complete a user-defined policy in the following ways:"),i("br"),t._v("1. Inherit the cn.edu.tsinghua.iotdb.conf.directories.strategy.DirectoryStrategy class and implement its own Strategy method;"),i("br"),t._v("2. Fill in the configuration class with the full class name of the implemented class (package name plus class name, UserDfineStrategyPackage);"),i("br"),t._v("3. Add the jar file to the project.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("MaxDiskUsableSpaceFirstStrategy")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("tsfile_size_threshold")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("tsfile_size_threshold")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("When a TsFile size on the disk exceeds this threshold, the TsFile is closed and open a new TsFile to accept data writes. The unit is byte and the default value is 2G.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Int64")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("536870912")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("flush_wal_threshold")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("flush_wal_threshold")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After the WAL reaches this value, it is flushed to disk, and it is possible to lose at most flush_wal_threshold operations.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("10000")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("force_wal_period_in_ms")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("force_wal_period_in_ms")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The period during which the log is periodically forced to flush to disk(in milliseconds)")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("10")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("fetch_size")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("fetch_size")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The amount of data read each time in batch (the number of data strips, that is, the number of different timestamps.)")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("10000")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("merge_concurrent_threads")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("merge_concurrent_threads")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("THe max threads which can be used when unsequence data is merged. The larger it is, the more IO and CPU cost. The smaller the value, the more the disk is occupied when the unsequence data is too large, the reading will be slower.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("enable_stat_monitor")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("enable_stat_monitor")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Whether to enable background statistics")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("back_loop_period_in_second")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("back_loop_period_in_second")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The frequency at which the system statistic module triggers(in seconds).")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("5")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("concurrent_flush_thread")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("concurrent_flush_thread")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The thread number used to perform the operation when IoTDB writes data in memory to disk. If the value is less than or equal to 0, then the number of CPU cores installed on the machine is used. The default is 0.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("stat_monitor_detect_freq_in_second")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("stat_monitor_detect_freq_in_second")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The time interval which the system check whether the current record statistic time range exceeds stat_monitor_retain_interval every time (in seconds) and perform regular cleaning")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("600")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),i("ul",[i("li",[t._v("stat_monitor_retain_interval_in_second")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("stat_monitor_retain_interval_in_second")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The retention time of system statistics data(in seconds). Statistics data over the retention time range will be cleaned regularly.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("600")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);