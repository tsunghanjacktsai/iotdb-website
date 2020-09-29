(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{965:function(e,a,t){"use strict";t.r(a);var s=t(69),i=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"查询基础介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询基础介绍"}},[e._v("#")]),e._v(" 查询基础介绍")]),e._v(" "),t("h2",{attrs:{id:"顺序和乱序tsfile文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#顺序和乱序tsfile文件"}},[e._v("#")]),e._v(" 顺序和乱序tsFile文件")]),e._v(" "),t("p",[e._v("在对某一个设备插入数据的过程中，由于插入数据的时间戳的特点会产生顺序和乱序的tsFile文件。如果我们按照时间戳递增的顺序插入数据，那么只会产生顺序文件。顺序数据被写入到磁盘后，一旦新写入的数据时间戳在顺序文件的最大时间戳之前则会产生乱序文件。")]),e._v(" "),t("p",[e._v("IoTDB会将顺序和乱序文件分开存储在data/sequence和data/unsequence文件目录下。在查询过程中也会对顺序和乱序文件中的数据分别进行处理，我们总会使用"),t("code",[e._v("QueryResourceManager.java")]),e._v("中的"),t("code",[e._v("getQueryDataSource()")]),e._v("方法通过时间序列的全路径得到存储该时间序列的顺序和乱序文件。")]),e._v(" "),t("h2",{attrs:{id:"读取tsfile的一般流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读取tsfile的一般流程"}},[e._v("#")]),e._v(" 读取TsFile的一般流程")]),e._v(" "),t("p",[e._v("TsFile 各级结构在前面的"),t("RouterLink",{attrs:{to:"/zh/SystemDesign/TsFile/TsFile.html"}},[e._v("TsFile")]),e._v("文档中已有介绍，读取一个时间序列的过程需要按照层级各级展开TsFileResource -> TimeseriesMetadata -> ChunkMetadata -> IPageReader -> BatchData。")],1),e._v(" "),t("p",[e._v("文件读取的功能方法在\n"),t("code",[e._v("org.apache.iotdb.db.utils.FileLoaderUtils")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("loadTimeSeriesMetadata()")]),e._v("用来读取一个TsFileResource对应于某一个时间序列的 TimeseriesMetadata，该方法同时接受一个时间戳的Filter条件来保证该方法返回满足条件的 TimeseriesMetadata，若没有满足条件的 TimeseriesMetadata则返回null。")]),e._v(" "),t("li",[t("code",[e._v("loadChunkMetadataList()")]),e._v("得到这个timeseries所包含的所有ChunkMetadata列表。")]),e._v(" "),t("li",[t("code",[e._v("loadPageReaderList()")]),e._v("可以用来读取一个 ChunkMetadata 对应的 Chunk 所包含的所有page列表，用PageReader来进行访问。")])]),e._v(" "),t("p",[e._v("以上在对于时间序列数据的各种读取方法中总会涉及到读取内存和磁盘数据两种情况。")]),e._v(" "),t("p",[e._v("读取内存数据是指读取存在于 Memtable 中但尚未被写入磁盘的数据，例如"),t("code",[e._v("loadTimeSeriesMetadata()")]),e._v("中使用"),t("code",[e._v("TsFileResource.getTimeSeriesMetadata()")]),e._v("得到一个未被封口的 TimeseriesMetadata。一旦这个 TimeseriesMetadata被刷新到磁盘中之后,我们将只能通过访问磁盘读取到其中的数据。磁盘和内存读取metadata的相关类为 DiskChunkMetadataLoader 和 MemChunkMetadataLoader。")]),e._v(" "),t("p",[t("code",[e._v("loadPageReaderList()")]),e._v("读取page数据也是一样，分别通过两个辅助类 MemChunkLoader 和 DiskChunkLoader 进行处理。")]),e._v(" "),t("h2",{attrs:{id:"顺序和乱序文件的数据特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#顺序和乱序文件的数据特点"}},[e._v("#")]),e._v(" 顺序和乱序文件的数据特点")]),e._v(" "),t("p",[e._v("对于顺序和乱序文件的数据，其数据在文件中的分部特征有所不同。\n顺序文件的 TimeseriesMetadata 中所包含的 ChunkMetadata 也是有序的，也就是说如果按照chunkMetadata1, chunkMetadata2的顺序存储，那么将会保证chunkMetadata1.endtime <= chunkMetadata2.startTime。")]),e._v(" "),t("p",[e._v("乱序文件的 TimeseriesMetadata 中所包含的 ChunkMetadata 是无序的，乱序文件中多个 Chunk 所覆盖的数据可能存在重叠，同时也可能与顺序文件中的 Chunk 数据存在重叠。")]),e._v(" "),t("p",[e._v("每个 Chunk 结构内部所包含的 Page 数据总是有序的，不管是从属于顺序文件还是乱序文件。也就是说前一个 Page 的最大时间戳不小于后一个的最小时间戳。因此在查询过程中可以充分利用这种有序性，通过统计信息对 Page 数据进行提前筛选。")]),e._v(" "),t("h2",{attrs:{id:"查询中的数据修改处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询中的数据修改处理"}},[e._v("#")]),e._v(" 查询中的数据修改处理")]),e._v(" "),t("p",[e._v("IoTDB的数据删除操作对磁盘数据只记录了 mods 文件，并未真正执行删除逻辑，因此查询时需要考虑数据删除的逻辑。")]),e._v(" "),t("p",[e._v("如果一个文件中有数据被删除了，将删除操作记录到 mods 文件中。记录三列：删除的时间序列，删除范围的最大时间点，删除操作对应的版本。")]),e._v(" "),t("h3",{attrs:{id:"相关类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关类"}},[e._v("#")]),e._v(" 相关类")]),e._v(" "),t("p",[e._v("Modification文件: org.apache.iotdb.db.engine.modification.ModificationFile")]),e._v(" "),t("p",[e._v("删除操作: org.apache.iotdb.db.engine.modification.Modification")]),e._v(" "),t("p",[e._v("删除区间的内部表示：org.apache.iotdb.tsfile.read.common.TimeRange")]),e._v(" "),t("h3",{attrs:{id:"modification-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modification-文件"}},[e._v("#")]),e._v(" Modification 文件")]),e._v(" "),t("p",[e._v("IoTDB 通过为包含数据的TsFile写入一个Modification文件来完成删除操作。")]),e._v(" "),t("p",[e._v('在0.11.0版本的IoTDB中对Modification文件中的删除记录格式进行了修改，每一行的删除记录包含删除的开始时间和结束时间。\n对之前版本产生的Modification文件依旧可以照常处理，旧的Modification文件中只记录一个"deleteAt"时间戳，现在会被视为删除了一个时间戳从Long.MIN_VALUE开始到"deleteAt"结束的范围数据。')]),e._v(" "),t("h3",{attrs:{id:"timerange"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timerange"}},[e._v("#")]),e._v(" TimeRange")]),e._v(" "),t("p",[e._v("相应的，TimeRange结构是删除区间在内存中的表示媒介。")]),e._v(" "),t("p",[e._v("删除操作中所有的TimeRange都是闭区间，我们使用Long.MIN_VALUE和Long.MAX_VALUE表示正负无穷范围。")]),e._v(" "),t("h3",{attrs:{id:"包含删除区间的查询处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#包含删除区间的查询处理"}},[e._v("#")]),e._v(" 包含删除区间的查询处理")]),e._v(" "),t("p",[e._v("当对一个TVList进行查询的时候，该TVList的所有记录的删除区间会预先被排序和合并。例如初始的删除区间为[1,10], [5,12], [15,20], [16,21]，会被预先处理为[1,12] and [15,21]两个区间。\n这样做的好处在于当删除区间很多的情况下，可以加快排除被删除数据的过程。")]),e._v(" "),t("p",[e._v("具体的说，由于TVList中存储的是有序的时序数据，因此使用排序过后的TimeRange会有助于筛选出已经被删除的时间戳数据。\n使用一个标记位来标记TimeRange 列表中当前遍历到的TimeRange，由于时间戳是有序的，因此后面的数据不会落在当前TimeRange之前的范围之中。下面是一个具体遍历的实例：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("private boolean isPointDeleted(long timestamp) {\n  while (deletionList != null && deleteCursor < deletionList.size()) {\n    if (deletionList.get(deleteCursor).contains(timestamp)) {\n      return true;\n    } else if (deletionList.get(deleteCursor).getMax() < timestamp) {\n      deleteCursor++;\n    } else {\n      return false;\n    }\n  }\n  return false;\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])]),t("h3",{attrs:{id:"查询流程处理modification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询流程处理modification"}},[e._v("#")]),e._v(" 查询流程处理Modification")]),e._v(" "),t("p",[e._v("对于任意的 TimeseriesMetadata,ChunkMetadata和PageHeader都有相应的modified标记，表示当前的数据块是否存在更改。由于数据删除都是从一个时间节点删除该时间前面的数据，因此如果存在数据删除会导致数据块统计信息中的startTime失效。因此在使用统计信息中的startTime之前必须检查数据块是否包含modification。对于 TimeseriesMetadata，如果删除时间点等于endTime也会导致统计信息中的endTime失效。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/59866276/87266560-27fc4880-c4f8-11ea-9c8f-6794a9c599cb.jpg",alt:""}})]),e._v(" "),t("p",[e._v("如上图所示，数据修改会对前面提到的TsFile层级数据读取产生影响")]),e._v(" "),t("ul",[t("li",[e._v("TsFileResource -> TimeseriesMetadata")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 只要这个时间序列有对应的删除操作，就标记 TimeseriesMetadata 中的统计信息不可用\nFileLoaderUtils.loadTimeseriesMetadata()\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("ul",[t("li",[e._v("TimeseriesMetadata -> List<ChunkMetadata>")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 对于每个 ChunkMetadata，找到比其 version 大的所有删除操作中最大时间戳, 设置到  ChunkMetadata 的 deleteAt 中，并标记 统计信息不可用\nFileLoaderUtils.loadChunkMetadataList()\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("对于以上示例，读取到的 ChunkMetadataList 为")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/59866276/87266976-0b144500-c4f9-11ea-95b3-15d60d2b7416.jpg",alt:""}})]),e._v(" "),t("ul",[t("li",[e._v("ChunkMetadata -> List<IPageReader>")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 跳过被完全删除的 Page，将 deleteAt 设置到 PageReader 里，将数据被部分删除的 page 标记统计信息不可用\nFileLoaderUtils.loadPageReaderList()\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("ul",[t("li",[e._v("IPageReader -> BatchData")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 对于磁盘数据，跳过被删除的和过滤掉的，对于内存数据，跳过被过滤掉的\nIPageReader.getAllSatisfiedPageData()\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=i.exports}}]);