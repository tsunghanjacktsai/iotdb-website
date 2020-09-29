(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{604:function(e,t,i){"use strict";i.r(t);var a=i(69),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"data-addition-deletion-and-modification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#data-addition-deletion-and-modification"}},[e._v("#")]),e._v(" Data addition, deletion and modification")]),e._v(" "),i("p",[e._v("The following describes four common data manipulation operations, which are insert, update, delete, and TTL settings.")]),e._v(" "),i("h2",{attrs:{id:"data-insertion"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#data-insertion"}},[e._v("#")]),e._v(" Data insertion")]),e._v(" "),i("h3",{attrs:{id:"write-a-single-line-of-data-one-device-one-timestamp-multiple-values"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#write-a-single-line-of-data-one-device-one-timestamp-multiple-values"}},[e._v("#")]),e._v(" Write a single line of data (one device, one timestamp, multiple values)")]),e._v(" "),i("ul",[i("li",[e._v("Corresponding interface\n"),i("ul",[i("li",[e._v("JDBC's execute and executeBatch interfaces")]),e._v(" "),i("li",[e._v("Session's insertRecord and insertRecords")])])]),e._v(" "),i("li",[e._v("Main entrance: "),i("code",[e._v("public void insert(InsertRowPlan insertRowPlan)")]),e._v("   StorageEngine.java\n"),i("ul",[i("li",[e._v("Find the corresponding StorageGroupProcessor")]),e._v(" "),i("li",[e._v("Find the corresponding TsFileProcessor according to the time of writing the data and the last time stamp of the current device order")]),e._v(" "),i("li",[e._v("Write to the corresponding memtable of TsFileProcessor\n"),i("ul",[i("li",[e._v("If the file is out of order, update the endTimeMap in tsfileResource")]),e._v(" "),i("li",[e._v("If there is no information about the device in tsfile, or the time of inserted data newly is less than startTime stored, then update the startTimeMap in tsfileResource")])])]),e._v(" "),i("li",[e._v("Pre-write log")]),e._v(" "),i("li",[e._v("Determine whether to trigger asynchronous persistent memtable operation based on memtable size\n"),i("ul",[i("li",[e._v("If it is a sequential file and the flashing action is performed, the endTimeMap in tsfileResource is updated")])])]),e._v(" "),i("li",[e._v("Determine whether to trigger a file close operation based on the size of the current disk TsFile")])])])]),e._v(" "),i("h3",{attrs:{id:"batch-data-multiple-timestamp-multiple-values-for-one-device-write"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#batch-data-multiple-timestamp-multiple-values-for-one-device-write"}},[e._v("#")]),e._v(" Batch data (multiple timestamp multiple values for one device) write")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Corresponding interface")]),e._v(" "),i("ul",[i("li",[e._v("Session‘s insertTablet")])])]),e._v(" "),i("li",[i("p",[e._v("Main entrance: "),i("code",[e._v("public void insertTablet(InsertTabletPlan insertTabletPlan)")]),e._v("  StorageEngine.java")]),e._v(" "),i("ul",[i("li",[e._v("Find the corresponding StorageGroupProcessor")]),e._v(" "),i("li",[e._v("According to the time of this batch of data and the last timestamp of the current device order, this batch of data is divided into small batches, which correspond to a TsFileProcessor")]),e._v(" "),i("li",[e._v("Write each small batch to the corresponding memtable of TsFileProcessor\n"),i("ul",[i("li",[e._v("If the file is out of order, update the endTimeMap in tsfileResource")]),e._v(" "),i("li",[e._v("If there is no information about the device in tsfile, or the time of inserted data newly is less than startTime stored, then update the startTimeMap in tsfileResource")])])]),e._v(" "),i("li",[e._v("Pre-write log")]),e._v(" "),i("li",[e._v("Determine whether to trigger asynchronous persistent memtable operation based on memtable size\n"),i("ul",[i("li",[e._v("If it is a sequential file and the flashing action is performed, the endTimeMap in tsfileResource is updated")])])]),e._v(" "),i("li",[e._v("Determine whether to trigger a file close operation based on the size of the current disk TsFile")])])])]),e._v(" "),i("h2",{attrs:{id:"data-update"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#data-update"}},[e._v("#")]),e._v(" Data Update")]),e._v(" "),i("p",[e._v("Currently does not support data in-place update operations, that is, update statements, but users can directly insert new data, the same time series at the same time point is based on the latest inserted data.\nOld data is automatically deleted by merging, see:")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/SystemDesign/StorageEngine/MergeManager.html"}},[e._v("File merge mechanism")])],1)]),e._v(" "),i("h2",{attrs:{id:"data-deletion"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#data-deletion"}},[e._v("#")]),e._v(" Data deletion")]),e._v(" "),i("ul",[i("li",[e._v("Corresponding interface\n"),i("ul",[i("li",[e._v("JDBC's execute interface, using delete SQL statements")])])])]),e._v(" "),i("p",[e._v("Each StorageGroupProcessor maintains a ascending version for each partition, which is managed by SimpleFileVersionController.\nEach memtable will apply a version when submitted to flush. After flushing to TsFile, a current position-version will added to TsFileMetadata.\nThis information will be used to set version to ChunkMetadata when query.")]),e._v(" "),i("p",[e._v("Main entrance in StorageEngine.java:")]),e._v(" "),i("p",[i("code",[e._v("public void delete(String deviceId, String measurementId, long startTime, long endTime)")])]),e._v(" "),i("ul",[i("li",[e._v("Find the corresponding StorageGroupProcessor")]),e._v(" "),i("li",[e._v("Find all impacted working TsFileProcessors to write WAL")]),e._v(" "),i("li",[e._v("Find all impacted TsFileResources to record a Modification in its mods file, the Modification format is: path，version, startTime, endTime")]),e._v(" "),i("li",[e._v("If the TsFile is not closed，get its TsFileProcessor\n"),i("ul",[i("li",[e._v("If there exists the working memtable, delete data in it")]),e._v(" "),i("li",[e._v("If there exists flushing memtable，record the deleted start time and end time in it for query.（Notice that the Modification is recorded in mods for these memtables）")])])])]),e._v(" "),i("p",[e._v("The Mods file stores records of delete information.\nFor the following mods file, data of d1.s1 falls in range [100, 200], [180, 300], and data of d1.s2 falls in range [500, 1000] are deleted.\n"),i("img",{attrs:{src:"https://user-images.githubusercontent.com/59866276/88248546-20952600-ccd4-11ea-88e9-84af8dde4304.jpg",alt:""}})]),e._v(" "),i("h2",{attrs:{id:"data-ttl-setting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#data-ttl-setting"}},[e._v("#")]),e._v(" Data TTL setting")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Corresponding interface")]),e._v(" "),i("ul",[i("li",[e._v("JDBC's execute interface, using the SET TTL statement")])])]),e._v(" "),i("li",[i("p",[e._v("Main entrance: "),i("code",[e._v("public void setTTL(String storageGroup, long dataTTL)")]),e._v("StorageEngine.java")]),e._v(" "),i("ul",[i("li",[e._v("Find the corresponding StorageGroupProcessor")]),e._v(" "),i("li",[e._v("Set new data ttl in StorageGroupProcessor")]),e._v(" "),i("li",[e._v("TTL check on all TsfileResource")]),e._v(" "),i("li",[e._v("If a file expires under the current TTL, delete the file")])])])]),e._v(" "),i("p",[e._v("At the same time, we started a thread to periodically check the file TTL in StorageEngine.")]),e._v(" "),i("ul",[i("li",[e._v("start method in src/main/java/org/apache/iotdb/db/engine/StorageEngine.java")])])])}),[],!1,null,null,null);t.default=n.exports}}]);