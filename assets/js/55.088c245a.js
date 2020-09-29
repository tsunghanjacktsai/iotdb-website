(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{615:function(e,t,a){"use strict";a.r(t);var i=a(69),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"tsfile-write-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-write-process"}},[e._v("#")]),e._v(" TsFile Write Process")]),e._v(" "),a("ul",[a("li",[e._v("org.apache.iotdb.tsfile.write.*")])]),e._v(" "),a("p",[e._v("The writing process of TsFile is shown in the following figure:")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/73625238-efba2980-467e-11ea-927e-a7021f8153af.png"}}),e._v(" "),a("p",[e._v("Among them, each device corresponds to a ChunkGroupWriter, and each sensor corresponds to a ChunkWriter.")]),e._v(" "),a("p",[e._v("File writing is mainly divided into three operations, marked with 1, 2, 3 on the figure")]),e._v(" "),a("ul",[a("li",[e._v("1、Write memory swap area")]),e._v(" "),a("li",[e._v("2、Persistent ChunkGroup")]),e._v(" "),a("li",[e._v("3、Close file")])]),e._v(" "),a("h2",{attrs:{id:"_1、write-memory-buffer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、write-memory-buffer"}},[e._v("#")]),e._v(" 1、Write memory buffer")]),e._v(" "),a("p",[e._v("TsFile file layer has two write interfaces")]),e._v(" "),a("ul",[a("li",[e._v("TsFileWriter.write(TSRecord record)")])]),e._v(" "),a("p",[e._v("Write a device with a timestamp and multiple measurement points.")]),e._v(" "),a("ul",[a("li",[e._v("TsFileWriter.write(Tablet tablet)")])]),e._v(" "),a("p",[e._v("Write multiple timestamps and multiple measurement points on one device.")]),e._v(" "),a("p",[e._v("When the write interface is called, the data of this device will be delivered to the corresponding ChunkGroupWriter, and each measurement point will be delivered to the corresponding ChunkWriter for writing.  ChunkWriter completes coding and packaging (generating a page).")]),e._v(" "),a("h2",{attrs:{id:"_2、persistent-chunkgroup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、persistent-chunkgroup"}},[e._v("#")]),e._v(" 2、Persistent ChunkGroup")]),e._v(" "),a("ul",[a("li",[e._v("TsFileWriter.flushAllChunkGroups()")])]),e._v(" "),a("p",[e._v("When the data in the memory reaches a certain threshold, the persistence operation is triggered.  Each persistence will persist all the data of all devices in the current memory to the TsFile file of the disk.  Each device corresponds to a ChunkGroup and each measurement point corresponds to a Chunk.")]),e._v(" "),a("p",[e._v("After the persistence is complete, the corresponding metadata information is cached in memory for querying and generating the metadata at the end of the file.")]),e._v(" "),a("h2",{attrs:{id:"_3、file-close"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、file-close"}},[e._v("#")]),e._v(" 3、File Close")]),e._v(" "),a("ul",[a("li",[e._v("TsFileWriter.close()")])]),e._v(" "),a("p",[e._v("Based on the metadata cached in memory, TsFileMetadata is generated and appended to the end of the file ("),a("code",[e._v("TsFileWriter.flushMetadataIndex()")]),e._v("), and the file is finally closed.")]),e._v(" "),a("p",[e._v("One of the most important steps in constructing TsFileMetadata is to construct MetadataIndex tree. As we have mentioned before, the MetadataIndex is designed as tree structure so that not all the "),a("code",[e._v("TimeseriesMetadata")]),e._v(" need to be read when the number of devices or measurements is too large. Only reading specific MetadataIndex nodes according to requirement and reducing I/O could speed up the query. The whole process of constructing MetadataIndex tree is as below:")]),e._v(" "),a("ul",[a("li",[e._v("org.apache.iotdb.tsfile.file.metadata.MetadataIndexConstructor")])]),e._v(" "),a("h3",{attrs:{id:"metadataindexconstructor-constructmetadataindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadataindexconstructor-constructmetadataindex"}},[e._v("#")]),e._v(" MetadataIndexConstructor.constructMetadataIndex()")]),e._v(" "),a("p",[e._v("The input params of this method:")]),e._v(" "),a("ul",[a("li",[e._v("Map<String, List<TimeseriesMetadata>> deviceTimeseriesMetadataMap, which indicates the map from device to its "),a("code",[e._v("TimeseriesMetadata")])]),e._v(" "),a("li",[e._v("TsFileOutput out")])]),e._v(" "),a("p",[e._v("The whole method contains three parts:")]),e._v(" "),a("ol",[a("li",[e._v("In measurement index level, each device and its TimeseriesMetadata in "),a("code",[e._v("deviceTimeseriesMetadataMap")]),e._v(" is converted into "),a("code",[e._v("deviceMetadataIndexMap")]),e._v(". Specificly, for each device:")])]),e._v(" "),a("ul",[a("li",[e._v("Initialize a "),a("code",[e._v("queue")]),e._v(" for MetadataIndex nodes in this device")]),e._v(" "),a("li",[e._v("Initialize a leaf node of measurement index level, which is "),a("code",[e._v("LEAF_MEASUREMENT")]),e._v(" type")]),e._v(" "),a("li",[e._v("For each TimeseriesMetadata：\n"),a("ul",[a("li",[e._v("Serialize")]),e._v(" "),a("li",[e._v("Add an entry into "),a("code",[e._v("currentIndexNode")]),e._v(" every "),a("code",[e._v("MAX_DEGREE_OF_INDEX_NODE")]),e._v(" entries")]),e._v(" "),a("li",[e._v("After storing "),a("code",[e._v("MAX_DEGREE_OF_INDEX_NODE")]),e._v(" entries, add "),a("code",[e._v("currentIndexNode")]),e._v(" into "),a("code",[e._v("queue")]),e._v(", and point "),a("code",[e._v("currentIndexNode")]),e._v(" to a new MetadataIndexNode")])])]),e._v(" "),a("li",[e._v("Generate upper-level nodes of measurement index level according to the leaf nodes in "),a("code",[e._v("queue")]),e._v(', until the final root node (this method will be described later), and put the "device-root node" map into '),a("code",[e._v("deviceMetadataIndexMap")])])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Then judge whether the number of devices exceed "),a("code",[e._v("MAX_DEGREE_OF_INDEX_NODE")]),e._v(". If not, the root node of MetadataIndex tree could be generated and return")])]),e._v(" "),a("ul",[a("li",[e._v("Initialize the root node of MetadataIndex tree, which is "),a("code",[e._v("INTERNAL_MEASUREMENT")]),e._v(" type")]),e._v(" "),a("li",[e._v("For each entry in "),a("code",[e._v("deviceMetadataIndexMap")]),e._v(":\n"),a("ul",[a("li",[e._v("Serialize")]),e._v(" "),a("li",[e._v("Convert it into an entry and add the entry into "),a("code",[e._v("metadataIndexNode")])])])]),e._v(" "),a("li",[e._v("Set the "),a("code",[e._v("endOffset")]),e._v(" of root node and return it")])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("If the number of devices exceed "),a("code",[e._v("MAX_DEGREE_OF_INDEX_NODE")]),e._v(", the device index level of MetadataIndex tree is generated")])]),e._v(" "),a("ul",[a("li",[e._v("Initialize a "),a("code",[e._v("queue")]),e._v(" for MetadataIndex nodes in device index level")]),e._v(" "),a("li",[e._v("Initialize a leaf node of device index level, which is "),a("code",[e._v("LEAF_DEVICE")]),e._v(" type")]),e._v(" "),a("li",[e._v("For each entry in "),a("code",[e._v("deviceMetadataIndexMap")]),e._v(":\n"),a("ul",[a("li",[e._v("Serialize")]),e._v(" "),a("li",[e._v("Convert it into an entry and add the entry into "),a("code",[e._v("metadataIndexNode")])]),e._v(" "),a("li",[e._v("After storing "),a("code",[e._v("MAX_DEGREE_OF_INDEX_NODE")]),e._v(" entries, add "),a("code",[e._v("currentIndexNode")]),e._v(" into "),a("code",[e._v("queue")]),e._v(", and point "),a("code",[e._v("currentIndexNode")]),e._v(" to a new MetadataIndexNode")])])]),e._v(" "),a("li",[e._v("Generate upper-level nodes of device index level according to the leaf nodes in "),a("code",[e._v("queue")]),e._v(", until the final root node (this method will be described later)")]),e._v(" "),a("li",[e._v("Set the "),a("code",[e._v("endOffset")]),e._v(" of root node and return it")])]),e._v(" "),a("h3",{attrs:{id:"metadataindexconstructor-generaterootnode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadataindexconstructor-generaterootnode"}},[e._v("#")]),e._v(" MetadataIndexConstructor.generateRootNode")]),e._v(" "),a("p",[e._v("The input params of this method:")]),e._v(" "),a("ul",[a("li",[e._v("Queue<MetadataIndexNode> metadataIndexNodeQueue")]),e._v(" "),a("li",[e._v("TsFileOutput out")]),e._v(" "),a("li",[e._v("MetadataIndexNodeType type, which indicates the internal nodes type of generated tree. There are two types: when the method is called by measurement index level, it is INTERNAL_MEASUREMENT; when the method is called by device index level, it is INTERNAL_DEVICE")])]),e._v(" "),a("p",[e._v("The method needs to generate a tree structure of nodes in metadataIndexNodeQueue, and return the root node:")]),e._v(" "),a("ol",[a("li",[e._v("New "),a("code",[e._v("currentIndexNode")]),e._v(" in specific "),a("code",[e._v("type")])]),e._v(" "),a("li",[e._v("When there are more than one nodes in the queue, loop handling the queue. For each node in the queue:")])]),e._v(" "),a("ul",[a("li",[e._v("Serialize")]),e._v(" "),a("li",[e._v("Convert it into an entry and add the entry into "),a("code",[e._v("currentIndexNode")])]),e._v(" "),a("li",[e._v("After storing "),a("code",[e._v("MAX_DEGREE_OF_INDEX_NODE")]),e._v(" entries, add "),a("code",[e._v("currentIndexNode")]),e._v(" into "),a("code",[e._v("queue")]),e._v(", and point "),a("code",[e._v("currentIndexNode")]),e._v(" to a new MetadataIndexNode")])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Return the root node in the queue when the queue has only one node")])]),e._v(" "),a("h3",{attrs:{id:"metadataindexconstructor-addcurrentindexnodetoqueue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadataindexconstructor-addcurrentindexnodetoqueue"}},[e._v("#")]),e._v(" MetadataIndexConstructor.addCurrentIndexNodeToQueue")]),e._v(" "),a("p",[e._v("The input params of this method:")]),e._v(" "),a("ul",[a("li",[e._v("MetadataIndexNode currentIndexNode")]),e._v(" "),a("li",[e._v("Queue<MetadataIndexNode> metadataIndexNodeQueue")]),e._v(" "),a("li",[e._v("TsFileOutput out")])]),e._v(" "),a("p",[e._v("This method set the endOffset of current MetadataIndexNode, and put it into queue.")])])}),[],!1,null,null,null);t.default=n.exports}}]);