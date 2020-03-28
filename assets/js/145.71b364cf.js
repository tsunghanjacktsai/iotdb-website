(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{469:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("h1",{attrs:{id:"load-external-tsfile-tool"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#load-external-tsfile-tool"}},[e._v("#")]),e._v(" Load External Tsfile Tool")]),e._v(" "),o("h1",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("The load external tsfile tool allows users to load tsfiles, delete a tsfile, or move a tsfile to target directory from the running Apache IoTDB instance.")]),e._v(" "),o("h1",{attrs:{id:"usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),o("p",[e._v("The user sends specified commands to the Apache IoTDB system through the Cli tool or JDBC to use the tool.")]),e._v(" "),o("h2",{attrs:{id:"load-tsfiles"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#load-tsfiles"}},[e._v("#")]),e._v(" load tsfiles")]),e._v(" "),o("p",[e._v("The command to load tsfiles is "),o("code",[e._v("load <path/dir> [true/false] [storage group level]")]),e._v(".")]),e._v(" "),o("p",[e._v("This command has two usages:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Load a single tsfile by specifying a file path (absolute path).\nThe second parameter indicates the path of the tsfile to be loaded and the name of the tsfile needs to conform to the tsfile naming convention, that is, "),o("code",[e._v("{systemTime}-{versionNum}-{mergeNum} .tsfile")]),e._v(". The third and fourth parameters are optional. When the metadata corresponding to the timeseries in the tsfile to be loaded does not exist, you can choose whether to create the schema automatically. If the third parameter is true, the schema will be created automatically. If the thrid parameter is false, the schema will not be created. By default, the schema will be created. When the storage group corresponding to the tsfile does not exist, the user can set the level of storage group through the fourth parameter. By default, it'll use the storage group level which is set in "),o("code",[e._v("iotdb-engine.properties")]),e._v(".\nIf the "),o("code",[e._v(".resource")]),e._v(" file corresponding to the file exists, it will be loaded into the data directory and engine of the Apache IoTDB. Otherwise, the corresponding "),o("code",[e._v(".resource")]),e._v(" file will be regenerated from the tsfile file.\nExamples:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("load /Users/Desktop/data/1575028885956-101-0.tsfile")])]),e._v(" "),o("li",[o("code",[e._v("load /Users/Desktop/data/1575028885956-101-0.tsfile false")])]),e._v(" "),o("li",[o("code",[e._v("load /Users/Desktop/data/1575028885956-101-0.tsfile true")])]),e._v(" "),o("li",[o("code",[e._v("load /Users/Desktop/data/1575028885956-101-0.tsfile true 2")])])])]),e._v(" "),o("li",[o("p",[e._v("Load a batch of files by specifying a folder path (absolute path).\nThe second parameter indicates the path of the tsfile to be loaded and the name of the tsfiles need to conform to the tsfile naming convention, that is, "),o("code",[e._v("{systemTime}-{versionNum}-{mergeNum} .tsfile")]),e._v(". The third and fourth parameters are optional. When the metadata corresponding to the time series in the tsfile to be loaded does not exist, you can choose whether to create the schema automatically. If the third parameter is true, the schema will be created automatically. If the third parameter is false, the schema will not be created. By default, the schema will be created. When the storage group corresponding to tsfile does not exist, the user can set the level of storage group through the fourth parameter. By default, it'll use the storage group level which is set in "),o("code",[e._v("iotdb-engine.properties")]),e._v(".\nIf the "),o("code",[e._v(".resource")]),e._v(" file corresponding to the file  exists, they will be loaded into the data directory and engine of the Apache IoTDB. Otherwise, the corresponding"),o("code",[e._v(".resource")]),e._v(" files will be regenerated from the tsfile sfile.\nExamples:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("load /Users/Desktop/data")])]),e._v(" "),o("li",[o("code",[e._v("load /Users/Desktop/data false")])]),e._v(" "),o("li",[o("code",[e._v("load /Users/Desktop/data true")])]),e._v(" "),o("li",[o("code",[e._v("load /Users/Desktop/data true 2")])])])])]),e._v(" "),o("h2",{attrs:{id:"remove-a-tsfile"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remove-a-tsfile"}},[e._v("#")]),e._v(" remove a tsfile")]),e._v(" "),o("p",[e._v("The command to delete a tsfile is: "),o("code",[e._v("remove <path>")]),e._v(".")]),e._v(" "),o("p",[e._v("This command deletes a tsfile by specifying the file path. The specific implementation is to delete the tsfile and its corresponding "),o("code",[e._v(".resource")]),e._v(" and"),o("code",[e._v(".modification")]),e._v(" files.")]),e._v(" "),o("p",[e._v("Note that the path must include at least two levels of path, you cannot directly specify the file name, examples:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("remove root.vehicle / 1575028885956-101-0.tsfile")]),e._v(" is correct.")]),e._v(" "),o("li",[o("code",[e._v("remove 1575028885956-101-0.tsfile")]),e._v(" is wrong.")])]),e._v(" "),o("h2",{attrs:{id:"move-a-tsfile-to-a-target-directory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#move-a-tsfile-to-a-target-directory"}},[e._v("#")]),e._v(" move a tsfile to a target directory")]),e._v(" "),o("p",[e._v("The command to move a tsfile to ta arget directory is: "),o("code",[e._v("move <path> <dir>")]),e._v(".")]),e._v(" "),o("p",[e._v("This command moves a tsfile to a target directory by specifying tsfile path and the target directory(absolute path). The specific implementation is to remove the tsfile from the engine and move the tsfile file and its corresponding "),o("code",[e._v(".resource")]),e._v(" file to the target directory.")]),e._v(" "),o("p",[e._v("Note that the path must include at least two levels of path, you cannot directly specify the file name, examples:")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("move root.vehicle/1575029224130-101-0.tsfile /data/data/tmp")]),e._v(" is correct.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("move 1575029224130-101-0.tsfile /data/data/tmp")]),e._v(" is wrong.")])])])])}],!1,null,null,null);t.default=s.exports}}]);