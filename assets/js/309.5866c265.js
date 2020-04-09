(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{629:function(t,e,a){"use strict";a.r(e);var r=a(1),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Here is a brief introduction of the structure of a TsFile file.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Here is a graph about the TsFile structure.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("There is a 12 bytes magic string:")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("It is in both the beginning and end of a TsFile file as signature.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("center",[a("table",{staticStyle:{"text-align":"center"}},[a("tr",[a("th",[t._v("Member Description")]),a("th",[t._v("Member Type")])]),t._v(" "),a("tr",[a("td",[t._v("The name of this sensor(measurementID)")]),a("td",[t._v("String")])]),t._v(" "),a("tr",[a("td",[t._v("Size of this chunk")]),a("td",[t._v("int")])]),t._v(" "),a("tr",[a("td",[t._v("Data type of this chuck")]),a("td",[t._v("short")])]),t._v(" "),a("tr",[a("td",[t._v("Number of pages")]),a("td",[t._v("int")])]),t._v(" "),a("tr",[a("td",[t._v("Compression Type")]),a("td",[t._v("short")])]),t._v(" "),a("tr",[a("td",[t._v("Encoding Type")]),a("td",[t._v("short")])]),t._v(" "),a("tr",[a("td",[t._v("Max Tombstone Time")]),a("td",[t._v("long")])])])]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("PageHeader Structure")]),t._v(" "),a("center",[a("table",{staticStyle:{"text-align":"center"}},[a("tr",[a("th",[t._v("Member Description")]),a("th",[t._v("Member Type")])]),t._v(" "),a("tr",[a("td",[t._v("Data size before compressing")]),a("td",[t._v("int")])]),t._v(" "),a("tr",[a("td",[t._v("Data size after compressing(if use SNAPPY)")]),a("td",[t._v("int")])]),t._v(" "),a("tr",[a("td",[t._v("Number of values")]),a("td",[t._v("int")])]),t._v(" "),a("tr",[a("td",[t._v("Minimum time stamp")]),a("td",[t._v("long")])]),t._v(" "),a("tr",[a("td",[t._v("Maximum time stamp")]),a("td",[t._v("long")])]),t._v(" "),a("tr",[a("td",[t._v("Minimum value of the page")]),a("td",[t._v("Type of the page")])]),t._v(" "),a("tr",[a("td",[t._v("Maximum value of the page")]),a("td",[t._v("Type of the page")])]),t._v(" "),a("tr",[a("td",[t._v("First value of the page")]),a("td",[t._v("Type of the page")])]),t._v(" "),a("tr",[a("td",[t._v("Last value of the page")]),a("td",[t._v("Type of the page")])]),t._v(" "),a("tr",[a("td",[t._v("Sum of the Page")]),a("td",[t._v("double")])])])]),t._v(" "),t._m(17),t._v(" "),a("center",[a("table",{staticStyle:{"text-align":"center"}},[a("tr",[a("th",[t._v("Member Description")]),a("th",[t._v("Member Type")])]),t._v(" "),a("tr",[a("td",[t._v("Deviceid")]),a("td",[t._v("String")])]),t._v(" "),a("tr",[a("td",[t._v("Data size of the ChunkGroup")]),a("td",[t._v("long")])]),t._v(" "),a("tr",[a("td",[t._v("Number of chunks")]),a("td",[t._v("int")])])])]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),a("center",[a("table",{staticStyle:{"text-align":"center"}},[a("tr",[a("th",[t._v("Member Description")]),a("th",[t._v("Member Type")])]),t._v(" "),a("tr",[a("td",[t._v("Start time")]),a("td",[t._v("long")])]),t._v(" "),a("tr",[a("td",[t._v("End time")]),a("td",[t._v("long")])]),t._v(" "),a("tr",[a("td",[t._v("Number of chunk groups")]),a("td",[t._v("int")])])])]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),a("center",[a("table",{staticStyle:{"text-align":"center"}},[a("tr",[a("th",[t._v("Member Description")]),a("th",[t._v("Member Type")])]),t._v(" "),a("tr",[a("td",[t._v("Deviceid")]),a("td",[t._v("String")])]),t._v(" "),a("tr",[a("td",[t._v("Start offset of the ChunkGroup")]),a("td",[t._v("long")])]),t._v(" "),a("tr",[a("td",[t._v("End offset of the ChunkGroup")]),a("td",[t._v("long")])]),t._v(" "),a("tr",[a("td",[t._v("Version")]),a("td",[t._v("long")])]),t._v(" "),a("tr",[a("td",[t._v("Number of ChunkMetaData")]),a("td",[t._v("int")])])])]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),a("center",[a("table",{staticStyle:{"text-align":"center"}},[a("tr",[a("th",[t._v("Member Description")]),a("th",[t._v("Member Type")])]),t._v(" "),a("tr",[a("td",[t._v("Measurementid")]),a("td",[t._v("String")])]),t._v(" "),a("tr",[a("td",[t._v("Start offset of ChunkHeader")]),a("td",[t._v("long")])]),t._v(" "),a("tr",[a("td",[t._v("Number of data points")]),a("td",[t._v("long")])]),t._v(" "),a("tr",[a("td",[t._v("Start time")]),a("td",[t._v("long")])]),t._v(" "),a("tr",[a("td",[t._v("End time")]),a("td",[t._v("long")])]),t._v(" "),a("tr",[a("td",[t._v("Data type")]),a("td",[t._v("short")])]),t._v(" "),a("tr",[a("td",[t._v("Number of statistics")]),a("td",[t._v("int")])]),t._v(" "),a("tr",[a("td",[t._v("The statistics of this chunk")]),a("td",[t._v("TsDigest")])])])]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),a("p",[t._v("The storage format is a name-value pair. The name is a string (remember the length is before the literal).")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),a("center",[a("table",{staticStyle:{"text-align":"center"}},[a("tr",[a("th",[t._v("Member Description")]),a("th",[t._v("Member Type")])]),t._v(" "),a("tr",[a("td",[t._v("Number of Devices")]),a("td",[t._v("int")])]),t._v(" "),a("tr",[a("td",[t._v("Array of DeviceIndexMetadata")]),a("td",[t._v("DeviceIndexMetadata")])]),t._v(" "),a("tr",[a("td",[t._v("Number of Measurements")]),a("td",[t._v("int")])]),t._v(" "),a("tr",[a("td",[t._v("Array of Measurement name and schema")]),a("td",[t._v("String, MeasurementSchema pair")])]),t._v(" "),a("tr",[a("td",[t._v("Current Version(3 for now)")]),a("td",[t._v("int")])]),t._v(" "),a("tr",[a("td",[t._v("Author byte")]),a("td",[t._v("byte")])]),t._v(" "),a("tr",[a("td",[t._v("Author(if author byte is 0x01)")]),a("td",[t._v("String")])]),t._v(" "),a("tr",[a("td",[t._v("File Metadata size(not including itself)")]),a("td",[t._v("int")])])])]),t._v(" "),t._m(30),t._v(" "),a("center",[a("table",{staticStyle:{"text-align":"center"}},[a("tr",[a("th",[t._v("Member Description")]),a("th",[t._v("Member Type")])]),t._v(" "),a("tr",[a("td",[t._v("Deviceid")]),a("td",[t._v("String")])]),t._v(" "),a("tr",[a("td",[t._v("Start offset of ChunkGroupMetaData(Or TsDeviceMetaData if it's the first one)")]),a("td",[t._v("long")])]),t._v(" "),a("tr",[a("td",[t._v("length")]),a("td",[t._v("int")])]),t._v(" "),a("tr",[a("td",[t._v("Start time")]),a("td",[t._v("long")])]),t._v(" "),a("tr",[a("td",[t._v("End time")]),a("td",[t._v("long")])])])]),t._v(" "),t._m(31),t._v(" "),a("center",[a("table",{staticStyle:{"text-align":"center"}},[a("tr",[a("th",[t._v("Member Description")]),a("th",[t._v("Member Type")])]),t._v(" "),a("tr",[a("td",[t._v("Measurementid")]),a("td",[t._v("String")])]),t._v(" "),a("tr",[a("td",[t._v("Data type")]),a("td",[t._v("short")])]),t._v(" "),a("tr",[a("td",[t._v("Encoding")]),a("td",[t._v("short")])]),t._v(" "),a("tr",[a("td",[t._v("Compressor")]),a("td",[t._v("short")])]),t._v(" "),a("tr",[a("td",[t._v("Size of props")]),a("td",[t._v("int")])])])]),t._v(" "),a("p",[t._v("If size of props is greater than 0, there is an array of <String, String> pair as properties of this measurement.")]),t._v(" "),a("p",[t._v('Such as "max_point_number""2".')]),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),a("p",[t._v("You can also use /tsfile/example/TsFileSequenceRead to read and validate a TsFile.")])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"tsfile-hierarchy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-hierarchy"}},[this._v("#")]),this._v(" TsFile Hierarchy")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"variable-storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variable-storage"}},[this._v("#")]),this._v(" Variable Storage")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("p",[a("strong",[t._v("Big Endian")]),t._v("\n​")]),t._v(" "),a("ul",[a("li",[t._v("For Example, the "),a("code",[t._v("int")]),t._v(" "),a("code",[t._v("0x8")]),t._v(" will be stored as "),a("code",[t._v("00 00 00 08")]),t._v(", not "),a("code",[t._v("08 00 00 00")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("String with Variable Length")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("The format is "),a("code",[t._v("int size")]),t._v(" plus "),a("code",[t._v("String literal")]),t._v(". Size can be zero.")])]),t._v(" "),a("li",[a("p",[t._v("Size equals the number of bytes this string will take, and it may not equal to the length of the string.")])]),t._v(" "),a("li",[a("p",[t._v('For example "sensor_1" will be stored as '),a("code",[t._v("00 00 00 08")]),t._v(' plus the encoding(ASCII) of "sensor_1".')])]),t._v(" "),a("li",[a("p",[t._v('Note that for the "Magic String"(file signature) "TsFilev0.8.0", the size(12) and encoding(ASCII)\nis fixed so there is no need to put the size before this string literal.')])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Data Type Hardcode")])]),t._v(" "),a("ul",[a("li",[t._v("0: BOOLEAN")]),t._v(" "),a("li",[t._v("1: INT32 ("),a("code",[t._v("int")]),t._v(")")]),t._v(" "),a("li",[t._v("2: INT64 ("),a("code",[t._v("long")]),t._v(")")]),t._v(" "),a("li",[t._v("3: FLOAT")]),t._v(" "),a("li",[t._v("4: DOUBLE")]),t._v(" "),a("li",[t._v("5: TEXT ("),a("code",[t._v("String")]),t._v(")")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Encoding Type Hardcode")])]),t._v(" "),a("ul",[a("li",[t._v("0: PLAIN")]),t._v(" "),a("li",[t._v("1: PLAIN_DICTIONARY")]),t._v(" "),a("li",[t._v("2: RLE")]),t._v(" "),a("li",[t._v("3: DIFF")]),t._v(" "),a("li",[t._v("4: TS_2DIFF")]),t._v(" "),a("li",[t._v("5: BITMAP")]),t._v(" "),a("li",[t._v("6: GORILLA")]),t._v(" "),a("li",[t._v("7: REGULAR")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Compressing Type Hardcode")])]),t._v(" "),a("ul",[a("li",[t._v("0: UNCOMPRESSED")]),t._v(" "),a("li",[t._v("1: SNAPPY")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"tsfile-overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-overview"}},[this._v("#")]),this._v(" TsFile Overview")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/40447846/61616997-6fad1300-ac9c-11e9-9c17-46785ebfbc88.png",alt:"TsFile Breakdown"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"magic-string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#magic-string"}},[this._v("#")]),this._v(" Magic String")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("TsFilev0.8.0")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[this._v("#")]),this._v(" Data")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The content of a TsFile file can be divided as two parts: data and metadata. There is a byte "),e("code",[this._v("0x02")]),this._v(" as the marker between\ndata and metadata.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The data section is an array of "),e("code",[this._v("ChunkGroup")]),this._v(", each ChuckGroup represents a "),e("em",[this._v("device")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"chuckgroup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chuckgroup"}},[this._v("#")]),this._v(" ChuckGroup")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The "),a("code",[t._v("ChunkGroup")]),t._v(" has an array of "),a("code",[t._v("Chunk")]),t._v(", a following byte "),a("code",[t._v("0x00")]),t._v(" as the marker, and a "),a("code",[t._v("ChunkFooter")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"chunk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunk"}},[this._v("#")]),this._v(" Chunk")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("A "),a("code",[t._v("Chunk")]),t._v(" represents a "),a("em",[t._v("sensor")]),t._v(". There is a byte "),a("code",[t._v("0x01")]),t._v(" as the marker, following a "),a("code",[t._v("ChunkHeader")]),t._v(" and an array of "),a("code",[t._v("Page")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"chunkheader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkheader"}},[this._v("#")]),this._v(" ChunkHeader")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page"}},[this._v("#")]),this._v(" Page")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A "),e("code",[this._v("Page")]),this._v(" represents some data in a "),e("code",[this._v("Chunk")]),this._v(". It contains a "),e("code",[this._v("PageHeader")]),this._v(" and the actual data (The encoded time-value pair).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"chunkgroupfooter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkgroupfooter"}},[this._v("#")]),this._v(" ChunkGroupFooter")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metadata"}},[this._v("#")]),this._v(" Metadata")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"tsdevicemetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsdevicemetadata"}},[this._v("#")]),this._v(" TsDeviceMetaData")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The first part of metadata is "),e("code",[this._v("TsDeviceMetaData")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Then there is an array of "),e("code",[this._v("ChunkGroupMetaData")]),this._v(" after "),e("code",[this._v("TsDeviceMetaData")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"chunkgroupmetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkgroupmetadata"}},[this._v("#")]),this._v(" ChunkGroupMetaData")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Then there is an array of "),e("code",[this._v("ChunkMetadata")]),this._v(" for each "),e("code",[this._v("ChunkGroupMetadata")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"chunkmetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkmetadata"}},[this._v("#")]),this._v(" ChunkMetaData")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"tsdigest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsdigest"}},[this._v("#")]),this._v(" TsDigest")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("There are five statistics: "),e("code",[this._v("min, last, sum, first, max")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("But for the value, there is also a size integer before the data even if it is not string. For example, if the "),e("code",[this._v("min")]),this._v(' is 3, then it will be\nstored as 3 "min" 4 3 in the TsFile.')])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"file-metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#file-metadata"}},[this._v("#")]),this._v(" File Metadata")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("After the array of "),e("code",[this._v("ChunkGroupMetadata")]),this._v(", here is the last part of the metadata.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"deviceindexmetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deviceindexmetadata"}},[this._v("#")]),this._v(" DeviceIndexMetadata")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"measurementschema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#measurementschema"}},[this._v("#")]),this._v(" MeasurementSchema")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"done"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#done"}},[this._v("#")]),this._v(" Done")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("After the "),e("code",[this._v("FileMetaData")]),this._v(", there will be another Magic String and you have finished the journey of discovering TsFile!")])}],!1,null,null,null);e.default=i.exports}}]);