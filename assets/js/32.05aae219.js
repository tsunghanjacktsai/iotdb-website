(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{356:function(e,t,i){"use strict";i.r(t);var a=i(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("The following describes four common data manipulation operations, which are insert, update, delete, and TTL settings.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),i("p",[e._v("Currently does not support data in-place update operations, that is, update statements, but users can directly insert new data, the same time series at the same time point is based on the latest inserted data.\nOld data is automatically deleted by merging, see:")]),e._v(" "),i("ul",[i("li",[i("router-link",{attrs:{to:"/document/master/SystemDesign/4-StorageEngine/4-MergeManager.html"}},[e._v("File merge mechanism")])],1)]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),i("p",[e._v("At the same time, we started a thread to periodically check the file TTL in StorageEngine.")]),e._v(" "),e._m(11)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"data-addition-deletion-and-modification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-addition-deletion-and-modification"}},[this._v("#")]),this._v(" Data addition, deletion and modification")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"data-insertion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-insertion"}},[this._v("#")]),this._v(" Data insertion")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"write-a-single-line-of-data-one-device-one-timestamp-multiple-values"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#write-a-single-line-of-data-one-device-one-timestamp-multiple-values"}},[this._v("#")]),this._v(" Write a single line of data (one device, one timestamp, multiple values)")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("Corresponding interface\n"),i("ul",[i("li",[e._v("JDBC's execute and executeBatch interfaces")]),e._v(" "),i("li",[e._v("Session's insert and insertInBatch")])])]),e._v(" "),i("li",[e._v("Main entrance: "),i("code",[e._v("public void insert(InsertPlan insertPlan)")]),e._v("   StorageEngine.java\n"),i("ul",[i("li",[e._v("Find the corresponding StorageGroupProcessor")]),e._v(" "),i("li",[e._v("Find the corresponding TsFileProcessor according to the time of writing the data and the last time stamp of the current device order")]),e._v(" "),i("li",[e._v("Pre-write log")]),e._v(" "),i("li",[e._v("Typo in mestable corresponding to TsFileProcessor\n"),i("ul",[i("li",[e._v("If the file is out of order, update the endTimeMap in tsfileResource")]),e._v(" "),i("li",[e._v("If there is no information about the device in tsfile, then update the startTimeMap in tsfileResource")])])]),e._v(" "),i("li",[e._v("Determine whether to trigger asynchronous persistent memtable operation based on memtable size\n"),i("ul",[i("li",[e._v("If it is a sequential file and the flashing action is performed, the endTimeMap in tsfileResource is updated")])])]),e._v(" "),i("li",[e._v("Determine whether to trigger a file close operation based on the size of the current disk TsFile")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"batch-data-multiple-timestamp-multiple-values-for-one-device-write"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#batch-data-multiple-timestamp-multiple-values-for-one-device-write"}},[this._v("#")]),this._v(" Batch data (multiple timestamp multiple values for one device) write")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("p",[e._v("Corresponding interface")]),e._v(" "),i("ul",[i("li",[e._v("Session‘s insertBatch")])])]),e._v(" "),i("li",[i("p",[e._v("Main entrance: "),i("code",[e._v("public Integer[] insertBatch(BatchInsertPlan batchInsertPlan)")]),e._v("  StorageEngine.java")]),e._v(" "),i("ul",[i("li",[e._v("Find the corresponding StorageGroupProcessor")]),e._v(" "),i("li",[e._v("According to the time of this batch of data and the last timestamp of the current device order, this batch of data is divided into small batches, which correspond to a TsFileProcessor")]),e._v(" "),i("li",[e._v("Pre-write log")]),e._v(" "),i("li",[e._v("Write each small batch to the corresponding memtable of TsFileProcessor\n"),i("ul",[i("li",[e._v("If the file is out of order, update the endTimeMap in tsfileResource")]),e._v(" "),i("li",[e._v("If there is no information about the device in tsfile, then update the startTimeMap in tsfileResource")])])]),e._v(" "),i("li",[e._v("Determine whether to trigger asynchronous persistent memtable operation based on memtable size\n"),i("ul",[i("li",[e._v("If it is a sequential file and the flashing action is performed, the endTimeMap in tsfileResource is updated")])])]),e._v(" "),i("li",[e._v("Determine whether to trigger a file close operation based on the size of the current disk TsFile")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"data-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-update"}},[this._v("#")]),this._v(" Data Update")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"data-deletion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-deletion"}},[this._v("#")]),this._v(" Data deletion")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("p",[e._v("Corresponding interface")]),e._v(" "),i("ul",[i("li",[e._v("JDBC's execute interface, using delete SQL statements")])])]),e._v(" "),i("li",[i("p",[e._v("Main entrance: public void delete(String deviceId, String measurementId, long timestamp) StorageEngine.java")]),e._v(" "),i("ul",[i("li",[e._v("Find the corresponding StorageGroupProcessor")]),e._v(" "),i("li",[e._v("Find all TsfileProcessor affected")]),e._v(" "),i("li",[e._v("Pre-write log")]),e._v(" "),i("li",[e._v("Find all TsfileResources affected")]),e._v(" "),i("li",[e._v("Record the point in time of deletion in the mod file")]),e._v(" "),i("li",[e._v("If the file is not closed (the corresponding TsfileProcessor exists), delete the data in memory")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"data-ttl-setting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-ttl-setting"}},[this._v("#")]),this._v(" Data TTL setting")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("p",[e._v("Corresponding interface")]),e._v(" "),i("ul",[i("li",[e._v("JDBC's execute interface, using the SET TTL statement")])])]),e._v(" "),i("li",[i("p",[e._v("Main entrance: "),i("code",[e._v("public void setTTL(String storageGroup, long dataTTL)")]),e._v("StorageEngine.java")]),e._v(" "),i("ul",[i("li",[e._v("Find the corresponding StorageGroupProcessor")]),e._v(" "),i("li",[e._v("Set new data ttl in StorageGroupProcessor")]),e._v(" "),i("li",[e._v("TTL check on all TsfileResource")]),e._v(" "),i("li",[e._v("If a file expires under the current TTL, delete the file")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("start method in src/main/java/org/apache/iotdb/db/engine/StorageEngine.java")])])}],!1,null,null,null);t.default=n.exports}}]);