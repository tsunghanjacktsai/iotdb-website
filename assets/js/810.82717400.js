(window.webpackJsonp=window.webpackJsonp||[]).push([[810],{1131:function(t,e,_){"use strict";_.r(e);var v=_(1),r=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),_("p",[t._v("这是TsFile文件结构的简要介绍。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),_("p",[t._v("这是有关TsFile结构的图。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),_("p",[t._v("有一个12个字节的魔术字符串：")]),t._v(" "),t._m(6),t._v(" "),_("p",[t._v("它在TsFile文件的开头和结尾都作为签名。")]),t._v(" "),t._m(7),t._v(" "),_("p",[t._v("TsFile文件的内容可以分为两部分：数据和元数据。 数据和元数据之间有一个字节“ 0x02”作为标记。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),_("center",[_("table",{staticStyle:{"text-align":"center"}},[_("tr",[_("th",[t._v("Member Description")]),_("th",[t._v("Member Type")])]),t._v(" "),_("tr",[_("td",[t._v("The name of this sensor(measurementID)")]),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("Size of this chunk")]),_("td",[t._v("int")])]),t._v(" "),_("tr",[_("td",[t._v("Data type of this chuck")]),_("td",[t._v("short")])]),t._v(" "),_("tr",[_("td",[t._v("Number of pages")]),_("td",[t._v("int")])]),t._v(" "),_("tr",[_("td",[t._v("Compression Type")]),_("td",[t._v("short")])]),t._v(" "),_("tr",[_("td",[t._v("Encoding Type")]),_("td",[t._v("short")])]),t._v(" "),_("tr",[_("td",[t._v("Max Tombstone Time")]),_("td",[t._v("long")])])])]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),_("p",[t._v("PageHeader结构")]),t._v(" "),_("center",[_("table",{staticStyle:{"text-align":"center"}},[_("tr",[_("th",[t._v("Member Description")]),_("th",[t._v("Member Type")])]),t._v(" "),_("tr",[_("td",[t._v("Data size before compressing")]),_("td",[t._v("int")])]),t._v(" "),_("tr",[_("td",[t._v("Data size after compressing(if use SNAPPY)")]),_("td",[t._v("int")])]),t._v(" "),_("tr",[_("td",[t._v("Number of values")]),_("td",[t._v("int")])]),t._v(" "),_("tr",[_("td",[t._v("Minimum time stamp")]),_("td",[t._v("long")])]),t._v(" "),_("tr",[_("td",[t._v("Maximum time stamp")]),_("td",[t._v("long")])]),t._v(" "),_("tr",[_("td",[t._v("Minimum value of the page")]),_("td",[t._v("Type of the page")])]),t._v(" "),_("tr",[_("td",[t._v("Maximum value of the page")]),_("td",[t._v("Type of the page")])]),t._v(" "),_("tr",[_("td",[t._v("First value of the page")]),_("td",[t._v("Type of the page")])]),t._v(" "),_("tr",[_("td",[t._v("Last value of the page")]),_("td",[t._v("Type of the page")])]),t._v(" "),_("tr",[_("td",[t._v("Sum of the Page")]),_("td",[t._v("double")])])])]),t._v(" "),t._m(16),t._v(" "),_("center",[_("table",{staticStyle:{"text-align":"center"}},[_("tr",[_("th",[t._v("Member Description")]),_("th",[t._v("Member Type")])]),t._v(" "),_("tr",[_("td",[t._v("Deviceid")]),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("Data size of the ChunkGroup")]),_("td",[t._v("long")])]),t._v(" "),_("tr",[_("td",[t._v("Number of chunks")]),_("td",[t._v("int")])])])]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),_("center",[_("table",{staticStyle:{"text-align":"center"}},[_("tr",[_("th",[t._v("Member Description")]),_("th",[t._v("Member Type")])]),t._v(" "),_("tr",[_("td",[t._v("Start time")]),_("td",[t._v("long")])]),t._v(" "),_("tr",[_("td",[t._v("End time")]),_("td",[t._v("long")])]),t._v(" "),_("tr",[_("td",[t._v("Number of chunk groups")]),_("td",[t._v("int")])])])]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),_("center",[_("table",{staticStyle:{"text-align":"center"}},[_("tr",[_("th",[t._v("Member Description")]),_("th",[t._v("Member Type")])]),t._v(" "),_("tr",[_("td",[t._v("Deviceid")]),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("Start offset of the ChunkGroup")]),_("td",[t._v("long")])]),t._v(" "),_("tr",[_("td",[t._v("End offset of the ChunkGroup")]),_("td",[t._v("long")])]),t._v(" "),_("tr",[_("td",[t._v("Version")]),_("td",[t._v("long")])]),t._v(" "),_("tr",[_("td",[t._v("Number of ChunkMetaData")]),_("td",[t._v("int")])])])]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),_("center",[_("table",{staticStyle:{"text-align":"center"}},[_("tr",[_("th",[t._v("Member Description")]),_("th",[t._v("Member Type")])]),t._v(" "),_("tr",[_("td",[t._v("Measurementid")]),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("Start offset of ChunkHeader")]),_("td",[t._v("long")])]),t._v(" "),_("tr",[_("td",[t._v("Number of data points")]),_("td",[t._v("long")])]),t._v(" "),_("tr",[_("td",[t._v("Start time")]),_("td",[t._v("long")])]),t._v(" "),_("tr",[_("td",[t._v("End time")]),_("td",[t._v("long")])]),t._v(" "),_("tr",[_("td",[t._v("Data type")]),_("td",[t._v("short")])]),t._v(" "),_("tr",[_("td",[t._v("Number of statistics")]),_("td",[t._v("int")])]),t._v(" "),_("tr",[_("td",[t._v("The statistics of this chunk")]),_("td",[t._v("TsDigest")])])])]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),_("p",[t._v("存储格式是名称/值对。 名称是一个字符串（记住长度在文字之前）。")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),_("center",[_("table",{staticStyle:{"text-align":"center"}},[_("tr",[_("th",[t._v("Member Description")]),_("th",[t._v("Member Type")])]),t._v(" "),_("tr",[_("td",[t._v("Number of Devices")]),_("td",[t._v("int")])]),t._v(" "),_("tr",[_("td",[t._v("Array of DeviceIndexMetadata")]),_("td",[t._v("DeviceIndexMetadata")])]),t._v(" "),_("tr",[_("td",[t._v("Number of Measurements")]),_("td",[t._v("int")])]),t._v(" "),_("tr",[_("td",[t._v("Array of Measurement name and schema")]),_("td",[t._v("String, MeasurementSchema pair")])]),t._v(" "),_("tr",[_("td",[t._v("Current Version(3 for now)")]),_("td",[t._v("int")])]),t._v(" "),_("tr",[_("td",[t._v("Author byte")]),_("td",[t._v("byte")])]),t._v(" "),_("tr",[_("td",[t._v("Author(if author byte is 0x01)")]),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("File Metadata size(not including itself)")]),_("td",[t._v("int")])])])]),t._v(" "),t._m(29),t._v(" "),_("center",[_("table",{staticStyle:{"text-align":"center"}},[_("tr",[_("th",[t._v("Member Description")]),_("th",[t._v("Member Type")])]),t._v(" "),_("tr",[_("td",[t._v("Deviceid")]),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("Start offset of ChunkGroupMetaData(Or TsDeviceMetaData if it's the first one)")]),_("td",[t._v("long")])]),t._v(" "),_("tr",[_("td",[t._v("length")]),_("td",[t._v("int")])]),t._v(" "),_("tr",[_("td",[t._v("Start time")]),_("td",[t._v("long")])]),t._v(" "),_("tr",[_("td",[t._v("End time")]),_("td",[t._v("long")])])])]),t._v(" "),t._m(30),t._v(" "),_("center",[_("table",{staticStyle:{"text-align":"center"}},[_("tr",[_("th",[t._v("Member Description")]),_("th",[t._v("Member Type")])]),t._v(" "),_("tr",[_("td",[t._v("Measurementid")]),_("td",[t._v("String")])]),t._v(" "),_("tr",[_("td",[t._v("Data type")]),_("td",[t._v("short")])]),t._v(" "),_("tr",[_("td",[t._v("Encoding")]),_("td",[t._v("short")])]),t._v(" "),_("tr",[_("td",[t._v("Compressor")]),_("td",[t._v("short")])]),t._v(" "),_("tr",[_("td",[t._v("Size of props")]),_("td",[t._v("int")])])])]),t._v(" "),_("p",[t._v("如果道具的大小大于0，则存在一个<String，String>对数组，作为此度量的属性。\n​    例如“ max_point_number”“ 2”。")]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),_("p",[t._v("您也可以使用/ tsfile / example / TsFileSequenceRead来读取和验证TsFile。")])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"tsfile层次结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsfile层次结构"}},[this._v("#")]),this._v(" TsFile层次结构")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"可变存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可变存储"}},[this._v("#")]),this._v(" 可变存储")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[_("p",[_("strong",[t._v("Big Endian")]),t._v("\n​")]),t._v(" "),_("ul",[_("li",[t._v("例如，"),_("code",[t._v("int")]),t._v(" "),_("code",[t._v("0x8")]),t._v("将被存储为"),_("code",[t._v("00 00 00 08")]),t._v("，而不是"),_("code",[t._v("08 00 00 00")]),t._v("。")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("可变长度的字符串")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("格式为 "),_("code",[t._v("int size")]),t._v(" 加"),_("code",[t._v("String literal")]),t._v(". 大小可以为零。")])]),t._v(" "),_("li",[_("p",[t._v("大小等于此字符串将占用的字节数，并且可能不等于该字符串的长度。")])]),t._v(" "),_("li",[_("p",[t._v("例如，“ sensor_1”将被存储为"),_("code",[t._v("00 00 00 08")]),t._v("加上“ sensor_1”的编码（ASCII）。")])]),t._v(" "),_("li",[_("p",[t._v("请注意，对于“魔术字符串”（文件签名）“ TsFilev0.8.0”，大小（12）和编码（ASCII）是固定的，因此无需在该字符串文字前放置大小。")])])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("数据类型硬编码")])]),t._v(" "),_("ul",[_("li",[t._v("0: BOOLEAN")]),t._v(" "),_("li",[t._v("1: INT32 ("),_("code",[t._v("int")]),t._v(")")]),t._v(" "),_("li",[t._v("2: INT64 ("),_("code",[t._v("long")]),t._v(")")]),t._v(" "),_("li",[t._v("3: FLOAT")]),t._v(" "),_("li",[t._v("4: DOUBLE")]),t._v(" "),_("li",[t._v("5: TEXT ("),_("code",[t._v("String")]),t._v(")")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("编码类型硬编码")])]),t._v(" "),_("ul",[_("li",[t._v("0: PLAIN")]),t._v(" "),_("li",[t._v("1: PLAIN_DICTIONARY")]),t._v(" "),_("li",[t._v("2: RLE")]),t._v(" "),_("li",[t._v("3: DIFF")]),t._v(" "),_("li",[t._v("4: TS_2DIFF")]),t._v(" "),_("li",[t._v("5: BITMAP")]),t._v(" "),_("li",[t._v("6: GORILLA")]),t._v(" "),_("li",[t._v("7: REGULAR")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("压缩类型硬编码")])]),t._v(" "),_("ul",[_("li",[t._v("0: UNCOMPRESSED")]),t._v(" "),_("li",[t._v("1: SNAPPY")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"tsfile概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsfile概述"}},[this._v("#")]),this._v(" TsFile概述")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/40447846/61616997-6fad1300-ac9c-11e9-9c17-46785ebfbc88.png",alt:"TsFile Breakdown"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"魔术字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#魔术字符串"}},[this._v("#")]),this._v(" 魔术字符串")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("TsFilev0.8.0")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[this._v("#")]),this._v(" 数据")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("数据部分是"),e("code",[this._v("ChunkGroup")]),this._v("的数组，每个ChuckGroup代表一个* device *。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"chuckgroup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chuckgroup"}},[this._v("#")]),this._v(" ChuckGroup")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[_("code",[t._v("ChunkGroup")]),t._v("具有一个"),_("code",[t._v("Chunk")]),t._v("数组，一个后继字节"),_("code",[t._v("0x00")]),t._v("作为标记以及一个"),_("code",[t._v("ChunkFooter")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"chunk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunk"}},[this._v("#")]),this._v(" Chunk")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[_("code",[t._v("Chunk")]),t._v("代表"),_("em",[t._v("传感器")]),t._v("。 在"),_("code",[t._v("ChunkHeader")]),t._v("和"),_("code",[t._v("Page")]),t._v("数组之后，有一个字节"),_("code",[t._v("0x01")]),t._v("作为标记。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"chunkheader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkheader"}},[this._v("#")]),this._v(" ChunkHeader")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page"}},[this._v("#")]),this._v(" Page")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Page")]),this._v("代表"),e("code",[this._v("Chunk")]),this._v("中的一些数据。 它包含一个"),e("code",[this._v("PageHeader")]),this._v("和实际数据（编码的时间值对）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"chunkgroupfooter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkgroupfooter"}},[this._v("#")]),this._v(" ChunkGroupFooter")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"元数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元数据"}},[this._v("#")]),this._v(" 元数据")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"tsdevicemetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsdevicemetadata"}},[this._v("#")]),this._v(" TsDeviceMetaData")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("元数据的第一部分是"),e("code",[this._v("TsDeviceMetaData")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("然后在"),e("code",[this._v("TsDeviceMetaData")]),this._v("之后有一个"),e("code",[this._v("ChunkGroupMetaData")]),this._v("数组。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"chunkgroupmetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkgroupmetadata"}},[this._v("#")]),this._v(" ChunkGroupMetaData")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("然后，每个"),e("code",[this._v("ChunkGroupMetadata")]),this._v("都有一个"),e("code",[this._v("ChunkMetadata")]),this._v("数组。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"chunkmetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkmetadata"}},[this._v("#")]),this._v(" ChunkMetaData")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"tsdigest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsdigest"}},[this._v("#")]),this._v(" TsDigest")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("有五个统计信息： "),e("code",[this._v("min, last, sum, first, max")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("但是对于该值，即使不是字符串，在数据前也有一个大小整数。 例如，如果"),e("code",[this._v("min")]),this._v("为3，则它将被存储为3“ min” 4 3在TsFile中。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"file-metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#file-metadata"}},[this._v("#")]),this._v(" File Metadata")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在"),e("code",[this._v("ChunkGroupMetadata")]),this._v("数组之后，这是元数据的最后一部分。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"deviceindexmetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deviceindexmetadata"}},[this._v("#")]),this._v(" DeviceIndexMetadata")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"measurementschema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#measurementschema"}},[this._v("#")]),this._v(" MeasurementSchema")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"完成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完成"}},[this._v("#")]),this._v(" 完成")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在"),e("code",[this._v("FileMetaData")]),this._v("之后，将有另一个魔术字符串，您已经完成了发现TsFile的旅程！")])}],!1,null,null,null);e.default=r.exports}}]);