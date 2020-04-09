(window.webpackJsonp=window.webpackJsonp||[]).push([[646],{967:function(t,e,r){"use strict";r.r(e);var s=r(1),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/73625255-03fe2680-467f-11ea-91ae-64407ef1125c.png"}}),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("存储引擎基于 LSM 设计。数据首先写入内存缓冲区 memtable 中，再刷到磁盘。内存中为每个设备维护当前持久化的（包括已经落盘的和正在持久化的）最大时间戳，根据这个时间戳将数据区分为顺序数据和乱序数据，不同种类的数据通过不同的 memtable 和 TsFile 管理。")]),t._v(" "),r("p",[t._v("每个数据文件 TsFile 在内存中对应一个文件索引信息 TsFileResource，供查询使用。")]),t._v(" "),r("p",[t._v("此外，存储引擎还包括异步持久化和文件合并机制。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("详见：")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/zh/SystemDesign/4-StorageEngine/6-DataManipulation.html"}},[t._v("数据写入")])],1)]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),r("ul",[r("li",[r("p",[r("router-link",{attrs:{to:"/zh/SystemDesign/4-StorageEngine/2-WAL.html"}},[t._v("写前日志 (WAL)")])],1)]),t._v(" "),r("li",[r("p",[r("router-link",{attrs:{to:"/zh/SystemDesign/4-StorageEngine/3-FlushManager.html"}},[t._v("memtable 持久化")])],1)]),t._v(" "),r("li",[r("p",[r("router-link",{attrs:{to:"/zh/SystemDesign/4-StorageEngine/4-MergeManager.html"}},[t._v("文件合并机制")])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"存储引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎"}},[this._v("#")]),this._v(" 存储引擎")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"设计思想"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设计思想"}},[this._v("#")]),this._v(" 设计思想")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"写入流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写入流程"}},[this._v("#")]),this._v(" 写入流程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"相关代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关代码"}},[this._v("#")]),this._v(" 相关代码")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("p",[t._v("org.apache.iotdb.db.engine.StorageEngine")]),t._v(" "),r("p",[t._v("负责一个 IoTDB 实例的写入和访问，管理所有的 StorageGroupProsessor。")])]),t._v(" "),r("li",[r("p",[t._v("org.apache.iotdb.db.engine.storagegroup.StorageGroupProcessor")]),t._v(" "),r("p",[t._v("负责一个存储组一个时间分区内的数据写入和访问。管理所有分区的TsFileProcessor。")])]),t._v(" "),r("li",[r("p",[t._v("org.apache.iotdb.db.engine.storagegroup.TsFileProcessor")]),t._v(" "),r("p",[t._v("负责一个 TsFile 文件的数据写入和访问。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数据写入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据写入"}},[this._v("#")]),this._v(" 数据写入")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数据访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据访问"}},[this._v("#")]),this._v(" 数据访问")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("总入口（StorageEngine）: public QueryDataSource query(SingleSeriesExpression seriesExpression, QueryContext context,\n​    QueryFileManager filePathsManager)\n​\n"),e("ul",[e("li",[this._v("找到所有包含这个时间序列的顺序和乱序的 TsFileResource 进行返回，供查询引擎使用。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"相关文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关文档"}},[this._v("#")]),this._v(" 相关文档")])}],!1,null,null,null);e.default=a.exports}}]);