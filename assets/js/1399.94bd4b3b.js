(window.webpackJsonp=window.webpackJsonp||[]).push([[1399],{1969:function(t,e,r){"use strict";r.r(e);var a=r(71),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"压缩方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#压缩方式"}},[t._v("#")]),t._v(" 压缩方式")]),t._v(" "),r("p",[t._v("当时间序列写入并按照指定的类型编码为二进制数据后，IoTDB会使用压缩技术对该数据进行压缩，进一步提升空间存储效率。虽然编码和压缩都旨在提升存储效率，但编码技术通常只适合特定的数据类型（如二阶差分编码只适合与INT32或者INT64编码，存储浮点数需要先将他们乘以10m以转换为整数），然后将它们转换为二进制流。压缩方式（SNAPPY）针对二进制流进行压缩，因此压缩方式的使用不再受数据类型的限制。")]),t._v(" "),r("p",[t._v("IoTDB允许在创建一个时间序列的时候指定该列的压缩方式。现阶段IoTDB现在支持的压缩方式有两种：")]),t._v(" "),r("ul",[r("li",[t._v("UNCOMPRESSOR（不压缩）")]),t._v(" "),r("li",[t._v("SNAPPY压缩")])]),t._v(" "),r("p",[t._v("压缩方式的指定语法详见本文"),r("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Master/Master/Master/Master/Master/V0.9.x/5-Operation Manual/4-SQL Reference.html"}},[t._v("5.4节")]),t._v("。")],1)])}),[],!1,null,null,null);e.default=s.exports}}]);