(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{594:function(e,t,i){"use strict";i.r(t);var a=i(71),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h2",{attrs:{id:"tsfile-s-hive-connector"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-s-hive-connector"}},[e._v("#")]),e._v(" TsFile's Hive connector")]),e._v(" "),i("p",[e._v("TsFile's Hive connector implements support for reading external TsFile type file formats through Hive, enabling users to manipulate TsFile through Hive.")]),e._v(" "),i("p",[e._v("The main functions of the connector:")]),e._v(" "),i("ul",[i("li",[e._v("Load a single TsFile file into Hive, whether the file is stored on the local file system or in HDFS")]),e._v(" "),i("li",[e._v("Load all files in a specific directory into Hive, whether the files are stored in the local file system or HDFS")]),e._v(" "),i("li",[e._v("Querying TsFile with HQL")]),e._v(" "),i("li",[e._v("Until now, write operations are not supported in hive-connector. Therefore, insert operations in HQL are not allowed")])]),e._v(" "),i("h3",{attrs:{id:"design-principle"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#design-principle"}},[e._v("#")]),e._v(" Design principle")]),e._v(" "),i("p",[e._v("The Hive connector needs to be able to parse the TsFile file format and convert it into a line-by-line format that Hive can recognize.  You also need to be able to format the output according to the form of a user-defined Table.  Therefore, the function implementation of the Hive connector is mainly divided into four parts")]),e._v(" "),i("ul",[i("li",[e._v("Slicing the entire TsFile file")]),e._v(" "),i("li",[e._v("Read data from shards and convert it into a data type that Hive can recognize")]),e._v(" "),i("li",[e._v("Parse user-defined Table")]),e._v(" "),i("li",[e._v("Deserialize data into Hive's output format")])]),e._v(" "),i("h3",{attrs:{id:"concrete-implementation-class"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#concrete-implementation-class"}},[e._v("#")]),e._v(" Concrete implementation class")]),e._v(" "),i("p",[e._v("The above four main functional modules have their corresponding implementation classes. The four implementation classes are introduced below.")]),e._v(" "),i("h4",{attrs:{id:"org-apache-iotdb-hive-tsfhiveinputformat"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-hive-tsfhiveinputformat"}},[e._v("#")]),e._v(" org.apache.iotdb.hive.TSFHiveInputFormat")]),e._v(" "),i("p",[e._v("This class is mainly responsible for formatting the input TsFile file. It inherits the "),i("code",[e._v("FileInputFormat <NullWritable, MapWritable>")]),e._v(" class. Some general formatting operations have been implemented in "),i("code",[e._v("FileInputFormat")]),e._v(". This class overrides its  The getSplits (JobConf, int) "),i("code",[e._v("method customizes the sharding method for TsFile files; and the")]),e._v(" getRecordReader (InputSpli, JobConf, Reporter) method is used to generate a "),i("code",[e._v("TSFHiveRecordReader")]),e._v(" that specifically reads data from a slice.")]),e._v(" "),i("h4",{attrs:{id:"org-apache-iotdb-hive-tsfhiverecordreader"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-hive-tsfhiverecordreader"}},[e._v("#")]),e._v(" org.apache.iotdb.hive.TSFHiveRecordReader")]),e._v(" "),i("p",[e._v("This class is mainly responsible for reading TsFile data from a shard.")]),e._v(" "),i("p",[e._v("It implements the "),i("code",[e._v("IReaderSet")]),e._v(" interface. This interface is a set of methods for setting internal properties of the class, mainly to extract the duplicated code sections in"),i("code",[e._v("TSRecordReader")]),e._v(" and "),i("code",[e._v("TSHiveRecordReader")]),e._v(".")]),e._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("public interface IReaderSet {\n\n  void setReader(TsFileSequenceReader reader);\n\n  void setMeasurementIds(List<String> measurementIds);\n\n  void setReadDeviceId(boolean isReadDeviceId);\n\n  void setReadTime(boolean isReadTime);\n}\n")])]),e._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[e._v("1")]),i("br"),i("span",{staticClass:"line-number"},[e._v("2")]),i("br"),i("span",{staticClass:"line-number"},[e._v("3")]),i("br"),i("span",{staticClass:"line-number"},[e._v("4")]),i("br"),i("span",{staticClass:"line-number"},[e._v("5")]),i("br"),i("span",{staticClass:"line-number"},[e._v("6")]),i("br"),i("span",{staticClass:"line-number"},[e._v("7")]),i("br"),i("span",{staticClass:"line-number"},[e._v("8")]),i("br"),i("span",{staticClass:"line-number"},[e._v("9")]),i("br"),i("span",{staticClass:"line-number"},[e._v("10")]),i("br")])]),i("p",[e._v("Let's first introduce some important fields of this class")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("private List<QueryDataSet> dataSetList = new ArrayList<>();")]),e._v(" "),i("p",[e._v("All QueryDataSets generated by this shard")])]),e._v(" "),i("li",[i("p",[e._v("private List<String> deviceIdList = new ArrayList<>();")]),e._v(" "),i("p",[e._v("Device name list, this order is consistent with the order of dataSetList, that is, deviceIdList [i] is the device name of dataSetList [i].")])]),e._v(" "),i("li",[i("p",[e._v("private int currentIndex = 0;")]),e._v(" "),i("p",[e._v("The index of the QueryDataSet currently being processed")])])]),e._v(" "),i("p",[e._v("This class calls the "),i("code",[e._v("initialize (TSFInputSplit, Configuration, IReaderSet, List <QueryDataSet>, List <String>)")]),e._v(" method of "),i("code",[e._v("TSFRecordReader")]),e._v(" in the constructor to initialize some of the class fields mentioned above.  It overrides the "),i("code",[e._v("next ()")]),e._v(" method of "),i("code",[e._v("RecordReader")]),e._v(" to return the data read from TsFile.")]),e._v(" "),i("h5",{attrs:{id:"next-nullwritable-mapwritable"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#next-nullwritable-mapwritable"}},[e._v("#")]),e._v(" next(NullWritable, MapWritable)")]),e._v(" "),i("p",[e._v("We noticed that after reading the data from TsFile, it was returned in the form of "),i("code",[e._v("MapWritable")]),e._v(". Here"),i("code",[e._v("MapWritable")]),e._v(" is actually a `Map ', except that its key and value are serialized and deserialized.  Special adaptation, its reading process is as follows")]),e._v(" "),i("ol",[i("li",[e._v("First determine if there is a value for "),i("code",[e._v("QueryDataSet")]),e._v(" at the current position of"),i("code",[e._v("dataSetList")]),e._v(". If there is no value, then increase "),i("code",[e._v("currentIndex")]),e._v(" by 1 until the first"),i("code",[e._v("QueryDataSet")]),e._v(" with a value is found")]),e._v(" "),i("li",[e._v("Then call "),i("code",[e._v("next ()")]),e._v(" method of "),i("code",[e._v("QueryDataSet")]),e._v(" to get"),i("code",[e._v("RowRecord")])]),e._v(" "),i("li",[e._v("Finally, the getCurrentValue () method of TSFRecordReader is called, and the value in RowRecord is placed in MapWritable.")])]),e._v(" "),i("h4",{attrs:{id:"org-apache-iotdb-hive-tsfileserde"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-hive-tsfileserde"}},[e._v("#")]),e._v(" org.apache.iotdb.hive.TsFileSerDe")]),e._v(" "),i("p",[e._v("This class inherits "),i("code",[e._v("AbstractSerDe")]),e._v(" and is also necessary for us to implement Hive to read data from custom input formats.")]),e._v(" "),i("p",[e._v("It overrides the Initialize () method of AbstractSerDe. In this method, the corresponding device name, sensor name, and corresponding type of the sensor are parsed from the user-created table sql.  An ObjectInspector object is also constructed. This object is mainly responsible for the conversion of data types. Since TsFile only supports primitive data types, when other data types occur, an exception needs to be thrown. The specific construction process can be seen in the createObjectInspectorWorker () method.  .")]),e._v(" "),i("p",[e._v("The main responsibility of this class is to serialize and deserialize data in different file formats. As our Hive connector only supports read operations for the time being, it does not support insert operations, so only the deserialization process, so only overwrite  The "),i("code",[e._v("deserialize (Writable)")]),e._v(" method is called, which calls the "),i("code",[e._v("deserialize ()")]),e._v(" method of "),i("code",[e._v("TsFileDeserializer")]),e._v(".")]),e._v(" "),i("h4",{attrs:{id:"org-apache-iotdb-hive-tsfiledeserializer"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-hive-tsfiledeserializer"}},[e._v("#")]),e._v(" org.apache.iotdb.hive.TsFileDeserializer")]),e._v(" "),i("p",[e._v("This class deserializes the data into Hive's output format. There is only one "),i("code",[e._v("deserialize ()")]),e._v(" method.")]),e._v(" "),i("h5",{attrs:{id:"public-object-deserialize-list-string-list-typeinfo-writable-string"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#public-object-deserialize-list-string-list-typeinfo-writable-string"}},[e._v("#")]),e._v(" public Object deserialize(List<String>, List<TypeInfo>, Writable, String)")]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("Writable")]),e._v(" parameter of this method is the"),i("code",[e._v("MapWritable")]),e._v(" generated by "),i("code",[e._v("next ()")]),e._v(" of "),i("code",[e._v("TSFHiveRecordReader")]),e._v(".")]),e._v(" "),i("p",[e._v("First determine if the "),i("code",[e._v("Writable")]),e._v(" parameter is of type"),i("code",[e._v("MapWritable")]),e._v(", if not, throw an exception.")]),e._v(" "),i("p",[e._v("Then take out the value of the sensor of the device from "),i("code",[e._v("MapWritable")]),e._v(" in turn, throw an exception if a type mismatch is encountered, and finally return the generated result set.")])])}),[],!1,null,null,null);t.default=r.exports}}]);