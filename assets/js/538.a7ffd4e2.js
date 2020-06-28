(window.webpackJsonp=window.webpackJsonp||[]).push([[538],{1098:function(e,t,_){"use strict";_.r(t);var a=_(69),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"tsfile-写流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-写流程"}},[e._v("#")]),e._v(" TsFile 写流程")]),e._v(" "),_("ul",[_("li",[e._v("org.apache.iotdb.tsfile.write.*")])]),e._v(" "),_("p",[e._v("TsFile 的写入流程如下图所示：")]),e._v(" "),_("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/73625238-efba2980-467e-11ea-927e-a7021f8153af.png"}}),e._v(" "),_("p",[e._v("其中，每个设备对应一个 ChunkGroupWriter，每个传感器对应一个 ChunkWriter。")]),e._v(" "),_("p",[e._v("文件的写入主要分为三种操作，在图上用 1、2、3 标注")]),e._v(" "),_("ul",[_("li",[e._v("1、写内存换冲区")]),e._v(" "),_("li",[e._v("2、持久化 ChunkGroup")]),e._v(" "),_("li",[e._v("3、关闭文件")])]),e._v(" "),_("h2",{attrs:{id:"_1、写内存缓冲区"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、写内存缓冲区"}},[e._v("#")]),e._v(" 1、写内存缓冲区")]),e._v(" "),_("p",[e._v("TsFile 文件层的写入接口有两种")]),e._v(" "),_("ul",[_("li",[e._v("TsFileWriter.write(TSRecord record)")])]),e._v(" "),_("p",[e._v("写入一个设备一个时间戳多个测点。")]),e._v(" "),_("ul",[_("li",[e._v("TsFileWriter.write(Tablet tablet)")])]),e._v(" "),_("p",[e._v("写入一个设备多个时间戳多个测点。")]),e._v(" "),_("p",[e._v("当调用 write 接口时，这个设备的数据会交给对应的 ChunkGroupWriter，其中的每个测点会交给对应的 ChunkWriter 进行写入。ChunkWriter 完成编码和打包（生成 Page）。")]),e._v(" "),_("h2",{attrs:{id:"_2、持久化-chunkgroup"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、持久化-chunkgroup"}},[e._v("#")]),e._v(" 2、持久化 ChunkGroup")]),e._v(" "),_("ul",[_("li",[e._v("TsFileWriter.flushAllChunkGroups()")])]),e._v(" "),_("p",[e._v("当内存中的数据达到一定阈值，会触发持久化操作。每次持久化会把当前内存中所有设备的数据全部持久化到磁盘的 TsFile 文件中。每个设备对应一个 ChunkGroup，每个测点对应一个 Chunk。")]),e._v(" "),_("p",[e._v("持久化完成后会在内存中缓存对应的元数据信息，以供查询和生成文件尾部 metadata。")]),e._v(" "),_("h2",{attrs:{id:"_3、关闭文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、关闭文件"}},[e._v("#")]),e._v(" 3、关闭文件")]),e._v(" "),_("ul",[_("li",[e._v("TsFileWriter.close()")])]),e._v(" "),_("p",[e._v("根据内存中缓存的元数据，生成 TsFileMetadata 追加到文件尾部("),_("code",[e._v("TsFileWriter.flushMetadataIndex()")]),e._v(")，最后关闭文件。")]),e._v(" "),_("p",[e._v("生成 TsFileMetadata 的过程中比较重要的一步是建立元数据索引 (MetadataIndex) 树。正如我们提到过的，元数据索引采用树形结构进行设计的目的是在设备数或者传感器数量过大时，可以不用一次读取所有的 "),_("code",[e._v("TimeseriesMetadata")]),e._v("，只需要根据所读取的传感器定位对应的节点，从而减少 I/O，加快查询速度。以下是建立元数据索引树的详细算法和过程：")]),e._v(" "),_("ul",[_("li",[e._v("org.apache.iotdb.tsfile.file.metadata.MetadataIndexConstructor")])]),e._v(" "),_("h3",{attrs:{id:"metadataindexconstructor-constructmetadataindex"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#metadataindexconstructor-constructmetadataindex"}},[e._v("#")]),e._v(" MetadataIndexConstructor.constructMetadataIndex()")]),e._v(" "),_("p",[e._v("方法的输入包括：")]),e._v(" "),_("ul",[_("li",[e._v("Map<String, List<TimeseriesMetadata>> deviceTimeseriesMetadataMap，表示设备到其 TimeseriesMetadata 列表的映射")]),e._v(" "),_("li",[e._v("TsFileOutput out，是包装好的 TsFile output")])]),e._v(" "),_("p",[e._v("整个方法分成三大部分：")]),e._v(" "),_("ol",[_("li",[e._v("在传感器索引层级，把 "),_("code",[e._v("deviceTimeseriesMetadataMap")]),e._v(" 中的每一个设备及其 "),_("code",[e._v("TimeseriesMetadata")]),e._v(" 列表，转化为 MetadataIndexNode 并放进 "),_("code",[e._v("deviceMetadataIndexMap")]),e._v(" 中。具体来说，对于每一个设备：")])]),e._v(" "),_("ul",[_("li",[e._v("初始化此设备的索引节点的队列 "),_("code",[e._v("queue")])]),e._v(" "),_("li",[e._v("初始化传感器索引层级的叶子节点 "),_("code",[e._v("currentIndexNode")]),e._v(" ，类型为 "),_("code",[e._v("LEAF_MEASUREMENT")])]),e._v(" "),_("li",[e._v("对于每个 TimeseriesMetadata：\n"),_("ul",[_("li",[e._v("序列化")]),e._v(" "),_("li",[e._v("每隔 "),_("code",[e._v("MAX_DEGREE_OF_INDEX_NODE")]),e._v(" 个，加一条 entry 到 "),_("code",[e._v("currentIndexNode")]),e._v(" 中")]),e._v(" "),_("li",[e._v("每当 currentIndexNode 中攒够 "),_("code",[e._v("MAX_DEGREE_OF_INDEX_NODE")]),e._v(" 个 entry 后，将 "),_("code",[e._v("currentIndexNode")]),e._v(" 加入 "),_("code",[e._v("queue")]),e._v(" 中，并将 "),_("code",[e._v("currentIndexNode")]),e._v(" 指向一个新的 MetadataIndexNode")])])]),e._v(" "),_("li",[e._v("根据 "),_("code",[e._v("queue")]),e._v(' 中已经存储的叶子节点，逐层生成上层节点，直至最终的根节点（此方法解析见下），并将"设备-根节点"对应的映射加入 '),_("code",[e._v("deviceMetadataIndexMap")]),e._v(" 中")])]),e._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[e._v("接下来，判断设备数是否超过 "),_("code",[e._v("MAX_DEGREE_OF_INDEX_NODE")]),e._v("，如果未超过则可以直接形成元数据索引树的根节点并返回")])]),e._v(" "),_("ul",[_("li",[e._v("初始化元数据索引树的根节点 "),_("code",[e._v("metadataIndexNode")]),e._v("，类型为 "),_("code",[e._v("INTERNAL_MEASUREMENT")])]),e._v(" "),_("li",[e._v("对于 "),_("code",[e._v("deviceMetadataIndexMap")]),e._v(" 中的每一个 entry：\n"),_("ul",[_("li",[e._v("序列化")]),e._v(" "),_("li",[e._v("将其转化成一个索引项，加入到 "),_("code",[e._v("metadataIndexNode")]),e._v(" 中")])])]),e._v(" "),_("li",[e._v("设置根节点的 "),_("code",[e._v("endOffset")]),e._v(" 并返回")])]),e._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[e._v("如果设备数超过 "),_("code",[e._v("MAX_DEGREE_OF_INDEX_NODE")]),e._v("，则需要形成元数据索引树的设备索引层级")])]),e._v(" "),_("ul",[_("li",[e._v("初始化存放设备索引层级节点的队列 "),_("code",[e._v("queue")])]),e._v(" "),_("li",[e._v("初始化设备索引层级的叶子节点 "),_("code",[e._v("currentIndexNode")]),e._v(" ，类型为 "),_("code",[e._v("LEAF_DEVICE")])]),e._v(" "),_("li",[e._v("对于 "),_("code",[e._v("deviceMetadataIndexMap")]),e._v(" 中的每一个 entry：\n"),_("ul",[_("li",[e._v("序列化")]),e._v(" "),_("li",[e._v("将其转化成一个索引项，加入到 "),_("code",[e._v("metadataIndexNode")]),e._v(" 中")]),e._v(" "),_("li",[e._v("每当 currentIndexNode 中攒够 "),_("code",[e._v("MAX_DEGREE_OF_INDEX_NODE")]),e._v(" 个 entry 后，将 "),_("code",[e._v("currentIndexNode")]),e._v(" 加入 "),_("code",[e._v("queue")]),e._v(" 中，并将 "),_("code",[e._v("currentIndexNode")]),e._v(" 指向一个新的 MetadataIndexNode")])])]),e._v(" "),_("li",[e._v("根据 "),_("code",[e._v("queue")]),e._v(" 中已经存储的叶子节点，逐层生成上层节点，直至最终的根节点（此方法解析见下）")]),e._v(" "),_("li",[e._v("设置根节点的 "),_("code",[e._v("endOffset")]),e._v(" 并返回")])]),e._v(" "),_("h3",{attrs:{id:"metadataindexconstructor-generaterootnode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#metadataindexconstructor-generaterootnode"}},[e._v("#")]),e._v(" MetadataIndexConstructor.generateRootNode")]),e._v(" "),_("p",[e._v("方法的输入包括：")]),e._v(" "),_("ul",[_("li",[e._v("Queue<MetadataIndexNode> metadataIndexNodeQueue，是放有 MetadataIndexNode 的队列")]),e._v(" "),_("li",[e._v("TsFileOutput out，是包装好的 TsFile output")]),e._v(" "),_("li",[e._v("MetadataIndexNodeType type，是所形成的树的内部节点的类型，有两种：在传感器索引层级调用时，传入 INTERNAL_MEASUREMENT；在设备索引层级调用时，传入 INTERNAL_DEVICE")])]),e._v(" "),_("p",[e._v("该方法需要将队列中的 MetadataIndexNode 形成树级结构，并返回根节点：")]),e._v(" "),_("ol",[_("li",[e._v("根据需要的类型 "),_("code",[e._v("type")]),e._v(" 初始化 "),_("code",[e._v("currentIndexNode")])]),e._v(" "),_("li",[e._v("当队列中有多余一个节点时，循环处理队列，对于队列中存在的每个节点：")])]),e._v(" "),_("ul",[_("li",[e._v("序列化")]),e._v(" "),_("li",[e._v("将其转化成一个索引项，加入到 "),_("code",[e._v("currentIndexNode")]),e._v(" 中")]),e._v(" "),_("li",[e._v("每当 currentIndexNode 中攒够 "),_("code",[e._v("MAX_DEGREE_OF_INDEX_NODE")]),e._v(" 个 entry 后，将 "),_("code",[e._v("currentIndexNode")]),e._v(" 加入 "),_("code",[e._v("queue")]),e._v(" 中，并将 "),_("code",[e._v("currentIndexNode")]),e._v(" 指向一个新的 MetadataIndexNode")])]),e._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[e._v("队列中只剩下一个节点时，返回队列中最终剩余的根节点")])]),e._v(" "),_("h3",{attrs:{id:"metadataindexconstructor-addcurrentindexnodetoqueue"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#metadataindexconstructor-addcurrentindexnodetoqueue"}},[e._v("#")]),e._v(" MetadataIndexConstructor.addCurrentIndexNodeToQueue")]),e._v(" "),_("p",[e._v("方法的输入包括：")]),e._v(" "),_("ul",[_("li",[e._v("MetadataIndexNode currentIndexNode，是当前需要加入队列的 MetadataIndexNode")]),e._v(" "),_("li",[e._v("Queue<MetadataIndexNode> metadataIndexNodeQueue，是放有 MetadataIndexNode 的队列")]),e._v(" "),_("li",[e._v("TsFileOutput out，是包装好的 TsFile output")])]),e._v(" "),_("p",[e._v("该方法直接设定当前节点的 endOffset，并将该节点加入队列中。")])])}),[],!1,null,null,null);t.default=v.exports}}]);