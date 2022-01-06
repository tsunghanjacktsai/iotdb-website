(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{652:function(e,t,a){"use strict";a.r(t);var s=a(80),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"query-basic-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-basic-components"}},[e._v("#")]),e._v(" Query basic components")]),e._v(" "),a("h2",{attrs:{id:"design-principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-principle"}},[e._v("#")]),e._v(" Design principle")]),e._v(" "),a("p",[e._v("The IoTDB server module provides a total of 3 different forms of reading interfaces for a single time series to support different forms of queries.")]),e._v(" "),a("ul",[a("li",[e._v("The raw data query interface returns BatchData with time or value filters. Both filters cannot exist at the same time.")]),e._v(" "),a("li",[e._v("Aggregation query interface (mainly used for aggregation query and downsampling query)")]),e._v(" "),a("li",[e._v("Interface for querying corresponding values by increasing timestamp (mainly used for queries with value filtering)")])]),e._v(" "),a("h2",{attrs:{id:"related-interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-interfaces"}},[e._v("#")]),e._v(" Related interfaces")]),e._v(" "),a("p",[e._v("The above three ways to read a single time series data correspond to the three interfaces in the code.")]),e._v(" "),a("h3",{attrs:{id:"org-apache-iotdb-tsfile-read-reader-ibatchreader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-tsfile-read-reader-ibatchreader"}},[e._v("#")]),e._v(" org.apache.iotdb.tsfile.read.reader.IBatchReader")]),e._v(" "),a("h4",{attrs:{id:"main-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-method"}},[e._v("#")]),e._v(" Main method")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Determine if there is still BatchData\nboolean hasNextBatch() throws IOException;\n\n// Get the next BatchData and move the cursor back\nBatchData nextBatch() throws IOException;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h4",{attrs:{id:"use-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-process"}},[e._v("#")]),e._v(" use process")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("while (batchReader.hasNextBatch()) {\n\tBatchData batchData = batchReader.nextBatch();\n\t\n\t// use batchData to do some work\n\t...\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("h3",{attrs:{id:"org-apache-iotdb-db-query-reader-series-iaggregatereader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-reader-series-iaggregatereader"}},[e._v("#")]),e._v(" org.apache.iotdb.db.query.reader.series.IAggregateReader")]),e._v(" "),a("h4",{attrs:{id:"main-method-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-method-2"}},[e._v("#")]),e._v(" Main method")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Determine if there is still Chunk\nboolean hasNextChunk() throws IOException;\n\n// Determine if you can use the current Chunk statistics\nboolean canUseCurrentChunkStatistics();\n\n// Get statistics for the current Chunk\nStatistics currentChunkStatistics();\n\n// Skip the current Chunk\nvoid skipCurrentChunk();\n\n// Determine if the current Chunk has a next Page\nboolean hasNextPage() throws IOException;\n\n// Determine if the statistics of the current Page can be used\nboolean canUseCurrentPageStatistics() throws IOException;\n\n// Get statistics for the current Page\nStatistics currentPageStatistics() throws IOException;\n\n// Skip the current Page\nvoid skipCurrentPage();\n\n// Get data for the current Page\nBatchData nextPage() throws IOException;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br")])]),a("h4",{attrs:{id:"general-use-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-use-process"}},[e._v("#")]),e._v(" General use process")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("while (aggregateReader.hasNextChunk()) {\n  if (aggregateReader.canUseCurrentChunkStatistics()) {\n    Statistics chunkStatistics = aggregateReader.currentChunkStatistics();\n    \n    // Calculate with the statistics of the chunk layer\n    ...\n    \n    aggregateReader.skipCurrentChunk();\n    continue;\n  }\n  \n  // Run out of pages in the current chunk\n  while (aggregateReader.hasNextPage()) {\n\t if (aggregateReader.canUseCurrentPageStatistics()) {\n\t   // Can use statistics\n\t   Statistics pageStatistic = aggregateReader.currentPageStatistics();\n\t   \n\t   // Calculate with page-level statistics\n\t   ...\n\t  \n\t   aggregateReader.skipCurrentPage();\n\t   continue;\n\t } else {\n\t   // Can't use statistics, need to calculate with data\n\t   BatchData batchData = aggregateReader.nextOverlappedPage();\n\t   \n\t   // Calculate with batchData\n\t   ...\n\t }\n  }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br")])]),a("h3",{attrs:{id:"org-apache-iotdb-db-query-reader-ireaderbytimestamp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-reader-ireaderbytimestamp"}},[e._v("#")]),e._v(" org.apache.iotdb.db.query.reader.IReaderByTimestamp")]),e._v(" "),a("h4",{attrs:{id:"main-method-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-method-3"}},[e._v("#")]),e._v(" Main method")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Get the value of the given timestamp, or null if none exists (requires that the //timestamp passed in is incremented)\nObject[] getValuesInTimestamps(long[] timestamps, int length) throws IOException;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h4",{attrs:{id:"general-use-process-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-use-process-2"}},[e._v("#")]),e._v(" General use process")]),e._v(" "),a("p",[e._v("This interface is used in queries with value filtering. After TimeGenerator generates a timestamp, use this interface to obtain the value corresponding to the timestamp.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Object[] values = readerByTimestamp.getValueInTimestamp(timestamps, length);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"concrete-implementation-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concrete-implementation-class"}},[e._v("#")]),e._v(" Concrete implementation class")]),e._v(" "),a("p",[e._v("The above three interfaces all have their corresponding implementation classes. As the above three queries have similarities, we have designed a basic SeriesReader tool class that encapsulates the basic methods for a time series read operation to help implement the above three interfaces. The following first introduces the design principle of the SeriesReader, and then introduces the specific implementation of the three interfaces in turn.")]),e._v(" "),a("h3",{attrs:{id:"org-apache-iotdb-db-query-reader-series-seriesreader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-reader-series-seriesreader"}},[e._v("#")]),e._v(" org.apache.iotdb.db.query.reader.series.SeriesReader")]),e._v(" "),a("h4",{attrs:{id:"design-ideas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-ideas"}},[e._v("#")]),e._v(" Design ideas")]),e._v(" "),a("p",[e._v("Background knowledge: TsFile source (TsFilesource) can be unpacked to get ChunkMetadata, ChunkMetadata can be unpacked to get a bunch of PageReader, PageReader can directly return BatchData data points.")]),e._v(" "),a("p",[e._v("To support the above three interfaces")]),e._v(" "),a("p",[e._v("The data is divided into four types according to the granularity: file, chunk, page, and intersecting data points. In the original data query, the largest data block return granularity is a page. If a page and other pages cover each other due to out-of-order writing, they are unraveled into data points for merging. Aggregate queries use Chunk's statistics first, followed by Page's statistics, and finally intersecting data points.")]),e._v(" "),a("p",[e._v("The design principle is to use the larger granularity instead of the smaller granularity.")]),e._v(" "),a("p",[e._v("First introduce some important fields in SeriesReader")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n/*\n * File layer\n */\nprivate final List<TsFileResource> seqFileResource;\n\tSequential file list, because the sequential file itself is guaranteed to be ordered, and the timestamps do not overlap each other, just use List to store\n\t\nprivate final PriorityQueue<TsFileResource> unseqFileResource;\n\tOut-of-order file list, because out-of-order files do not guarantee order between each other, and may overlap\n\t\n/*\n * chunk layer\n * \n * The data between the three fields is never duplicated, and first is always the first (minimum start time)\n */\nprivate ChunkMetaData firstChunkMetaData;\n\tThis field is filled first when filling the chunk layer to ensure that this chunk has the current minimum start time\n\t\nprivate final List<ChunkMetaData> seqChunkMetadatas;\n\tThe ChunkMetaData obtained after the sequential files are unpacked is stored here. It is ordered and does not overlap with each other, so the List is used for storage.\n\nprivate final PriorityQueue<ChunkMetaData> unseqChunkMetadatas;\n\tChunkMetaData obtained after unordered files are stored is stored here, there may be overlap between each other, in order to ensure order, priority queue is used for storage\n\t\n/*\n * page layer\n *\n * The data between the two fields is never duplicated, and first is always the first (minimum start time)\n */ \nprivate VersionPageReader firstPageReader;\n\tPage reader with the smallest start time\n\t\nprivate PriorityQueue<VersionPageReader> cachedPageReaders;\n\tAll page readers currently acquired, sorted by the start time of each page\n\t\n/*\n * Intersecting data point layer\n */ \nprivate PriorityMergeReader mergeReader;\n\tEssentially, there are multiple pages with priority, and the data points are output from low to high according to the timestamp. When the timestamps are the same, the high priority page is retained.\n\n/*\n * Caching of results from intersecting data points\n */ \nprivate boolean hasCachedNextOverlappedPage;\n\tWhether the next batch is cached\n\t\nprivate BatchData cachedBatchData;\n\tCached reference to the next batch\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br"),a("span",{staticClass:"line-number"},[e._v("42")]),a("br"),a("span",{staticClass:"line-number"},[e._v("43")]),a("br"),a("span",{staticClass:"line-number"},[e._v("44")]),a("br"),a("span",{staticClass:"line-number"},[e._v("45")]),a("br"),a("span",{staticClass:"line-number"},[e._v("46")]),a("br"),a("span",{staticClass:"line-number"},[e._v("47")]),a("br"),a("span",{staticClass:"line-number"},[e._v("48")]),a("br"),a("span",{staticClass:"line-number"},[e._v("49")]),a("br")])]),a("p",[e._v("The following describes the important methods in SeriesReader")]),e._v(" "),a("h4",{attrs:{id:"hasnextchunk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hasnextchunk"}},[e._v("#")]),e._v(" hasNextChunk()")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Main function: determine whether the time series has the next chunk.")])]),e._v(" "),a("li",[a("p",[e._v("Constraint: Before calling this method, you need to ensure that there is no page and data point level data in the "),a("code",[e._v("SeriesReader")]),e._v(" , that is, all the previously unlocked chunks have been consumed. .")])]),e._v(" "),a("li",[a("p",[e._v("Implementation: If "),a("code",[e._v("firstChunkMetaData")]),e._v(" is not empty, it means that the first"),a("code",[e._v("ChunkMetaData")]),e._v(" is currently cached and not used, and returns "),a("code",[e._v("true")]),e._v(" directly;")]),e._v(" "),a("p",[e._v("Try to untie the first sequential file and the first out-of-order file to fill the chunk layer. And unpack all files that coincide with "),a("code",[e._v("firstChunkMetadata")]),e._v(".")])])]),e._v(" "),a("h4",{attrs:{id:"ischunkoverlapped"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ischunkoverlapped"}},[e._v("#")]),e._v(" isChunkOverlapped()")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Main function: determine whether the current chunk overlaps with other Chunk")])]),e._v(" "),a("li",[a("p",[e._v("Constraint: Before calling this method, make sure that the chunk layer has cached "),a("code",[e._v("firstChunkMetadata")]),e._v(", that is, hasNextChunk () is called and is true.")])]),e._v(" "),a("li",[a("p",[e._v("Implementation: Compare "),a("code",[e._v("firstChunkMetadata")]),e._v(" with"),a("code",[e._v("seqChunkMetadatas")]),e._v(" and "),a("code",[e._v("unseqChunkMetadatas")]),e._v(" directly. Because it has been guaranteed that all files that intersect with "),a("code",[e._v("firstChunkMetadata")]),e._v(" will be unzipped.")])])]),e._v(" "),a("h4",{attrs:{id:"currentchunkstatistics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#currentchunkstatistics"}},[e._v("#")]),e._v(" currentChunkStatistics()")]),e._v(" "),a("p",[e._v("Returns statistics for "),a("code",[e._v("firstChunkMetaData")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"skipcurrentchunk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#skipcurrentchunk"}},[e._v("#")]),e._v(" skipCurrentChunk()")]),e._v(" "),a("p",[e._v("Skip the current chunk. Just set "),a("code",[e._v("firstChunkMetaData")]),e._v(" to"),a("code",[e._v("null")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"hasnextpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hasnextpage"}},[e._v("#")]),e._v(" hasNextPage()")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Main function: determine whether there are already unwrapped pages in the SeriesReader. If there are intersecting pages, construct "),a("code",[e._v("cachedBatchData")]),e._v(" and cache, otherwise cache"),a("code",[e._v("firstPageReader")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Implementation: If "),a("code",[e._v("cachedBatchData")]),e._v(" is already cached, return directly. If there are intersecting data points, a "),a("code",[e._v("cachedBatchData")]),e._v(" is constructed. If "),a("code",[e._v("firstPageReader")]),e._v(" is already cached, return directly.")]),e._v(" "),a("p",[e._v("If the current "),a("code",[e._v("firstChunkMetadata")]),e._v(" has not been solved, then all the ChunkMetadata which overlaps with it are constructed to construct the firstPageReader.")]),e._v(" "),a("p",[e._v("Determine if "),a("code",[e._v("firstPageReader")]),e._v(" and"),a("code",[e._v("cachedPageReaders")]),e._v(" intersect, then construct "),a("code",[e._v("cachedBatchData")]),e._v(", otherwise return directly.")])])]),e._v(" "),a("h4",{attrs:{id:"ispageoverlapped"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ispageoverlapped"}},[e._v("#")]),e._v(" isPageOverlapped()")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Main function: determine whether the current page overlaps with other pages")])]),e._v(" "),a("li",[a("p",[e._v("Constraint: Before calling this method, you need to ensure that hasNextPage () is called and is true. That is, it is possible to cache an intersecting "),a("code",[e._v("cachedBatchData")]),e._v(" or an disjoint"),a("code",[e._v("firstPageReader")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Implementation: First determine if there is "),a("code",[e._v("cachedBatchData")]),e._v(", if not, it means that the current page does not intersect, then there is no data in"),a("code",[e._v("mergeReader")]),e._v(". Then determine whether "),a("code",[e._v("firstPageReader")]),e._v(" intersects with page in"),a("code",[e._v("cachedPageReaders")]),e._v(".")])])]),e._v(" "),a("h4",{attrs:{id:"currentpagestatistics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#currentpagestatistics"}},[e._v("#")]),e._v(" currentPageStatistics()")]),e._v(" "),a("p",[e._v("Returns statistics for "),a("code",[e._v("firstPageReader")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"skipcurrentpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#skipcurrentpage"}},[e._v("#")]),e._v(" skipCurrentPage()")]),e._v(" "),a("p",[e._v("Skip the current Page. Just set "),a("code",[e._v("firstPageReader")]),e._v(" to null.")]),e._v(" "),a("h4",{attrs:{id:"nextpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nextpage"}},[e._v("#")]),e._v(" nextPage()")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Main function: return to the next intersecting or unwanted page")])]),e._v(" "),a("li",[a("p",[e._v("Constraint: Before calling this method, you need to ensure that hasNextPage () is called and is true. That is, it is possible to cache an intersecting "),a("code",[e._v("cachedBatchData")]),e._v(" or an disjoint"),a("code",[e._v("firstPageReader")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Implementation: If "),a("code",[e._v("hasCachedNextOverlappedPage")]),e._v(" is true, it means that an intersecting page is cached, and"),a("code",[e._v("cachedBatchData")]),e._v(" is returned directly. Otherwise, the current page does not intersect, and the data of the current page is taken directly from firstPageReader.")])])]),e._v(" "),a("h4",{attrs:{id:"hasnextoverlappedpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hasnextoverlappedpage"}},[e._v("#")]),e._v(" hasNextOverlappedPage()")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Main function: internal method, used to determine whether there is currently overlapping data, and construct intersecting pages and cache them.")])]),e._v(" "),a("li",[a("p",[e._v("Implementation: If "),a("code",[e._v("hasCachedNextOverlappedPage")]),e._v(" is"),a("code",[e._v("true")]),e._v(", return "),a("code",[e._v("true")]),e._v(" directly.")]),e._v(" "),a("p",[e._v("Otherwise, first call the "),a("code",[e._v("tryToPutAllDirectlyOverlappedPageReadersIntoMergeReader ()")]),e._v(" method, and put all of the cachedPageReaders that overlap with the firstPageReader into the mergeReader. "),a("code",[e._v("mergeReader")]),e._v(" maintains a"),a("code",[e._v("currentLargestEndTime")]),e._v(" variable, which is updated each time a new Reader is added to record the maximum end time of the page currently added to "),a("code",[e._v("mergeReader")]),e._v(".\nThen first take out the current maximum end time from "),a("code",[e._v("mergeReader")]),e._v(", as the end time of the first batch of data, record it as"),a("code",[e._v("currentPageEndTime")]),e._v(". Then go through "),a("code",[e._v("mergeReader")]),e._v(" until the current timestamp is greater than"),a("code",[e._v("currentPageEndTime")]),e._v(".")]),e._v(" "),a("p",[e._v("Before moving a point from mergeReader, we must first determine whether there is a file, chunk, or page that overlaps with the current timestamp. (The reason for this is to make another judgment here because, for example, the current page is 1-30, and he directly The intersecting pages are 20-50, and there is another page 40-60. Every time you take a point, you want to unlock 40-60. If so, unpack the corresponding file or chunk or page and put it in Enter "),a("code",[e._v("mergeReader")]),e._v(". After the overlap judgment is completed, the corresponding data is taken from "),a("code",[e._v("mergeReader")]),e._v(".")]),e._v(" "),a("p",[e._v("After completing the iteration, the data will be cached in "),a("code",[e._v("cachedBatchData")]),e._v(", and"),a("code",[e._v("hasCachedNextOverlappedPage")]),e._v(" will be set to "),a("code",[e._v("true")]),e._v(".")])])]),e._v(" "),a("h4",{attrs:{id:"nextoverlappedpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nextoverlappedpage"}},[e._v("#")]),e._v(" nextOverlappedPage()")]),e._v(" "),a("p",[e._v("Return cached "),a("code",[e._v("cachedBatchData")]),e._v(" and set"),a("code",[e._v("hasCachedNextOverlappedPage")]),e._v(" to "),a("code",[e._v("false")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"org-apache-iotdb-db-query-reader-series-seriesrawdatabatchreader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-reader-series-seriesrawdatabatchreader"}},[e._v("#")]),e._v(" org.apache.iotdb.db.query.reader.series.SeriesRawDataBatchReader")]),e._v(" "),a("p",[a("code",[e._v("SeriesRawDataBatchReader")]),e._v(" implements"),a("code",[e._v("IBatchReader")]),e._v(".")]),e._v(" "),a("p",[e._v("The core judgment flow of its method "),a("code",[e._v("hasNextBatch ()")]),e._v(" is")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// There are cached batches, return directly\nif (hasCachedBatchData) {\n  return true;\n}\n\n/*\n * If there are still pages in the SeriesReader, return to page\n */\nif (readPageData()) {\n  hasCachedBatchData = true;\n  return true;\n}\n\n/*\n * If there is a chunk, return chunk\n */\nif (readChunkData()) {\n  hasCachedBatchData = true;\n  return true;\n}\n\n/*\n * If there is a file and a chunk , return chunk\n */\nwhile (seriesReader.hasNextFile()) {\n  if (readChunkData()) {\n    hasCachedBatchData = true;\n    return true;\n  }\n}\nreturn hasCachedBatchData;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br")])]),a("h3",{attrs:{id:"org-apache-iotdb-db-query-reader-series-seriesreaderbytimestamp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-reader-series-seriesreaderbytimestamp"}},[e._v("#")]),e._v(" org.apache.iotdb.db.query.reader.series.SeriesReaderByTimestamp")]),e._v(" "),a("p",[a("code",[e._v("SeriesReaderByTimestamp")]),e._v(" implements "),a("code",[e._v("IReaderByTimestamp")]),e._v(".")]),e._v(" "),a("p",[e._v("Design idea: When a time stamp is used to query the value, this time stamp can be converted into a filter condition with time> = x. Keep updating this filter, and skip files, chunks and pages that don't meet.")]),e._v(" "),a("p",[e._v("Method to realize:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/*\n * Prioritize whether the next page is currently checked, skip it if you can\n */\nif (readPageData(timestamp)) {\n  return true;\n}\n\n/*\n * Determine if the next chunk has the current search time, skip it if it can\n */\nif (readChunkData(timestamp)) {\n  return true;\n}\n\n/*\n * Determine if the next File has the current search time, skip it if it can\n */\nwhile (seriesReader.hasNextFile()) {\n  Statistics statistics = seriesReader.currentChunkStatistics();\n  if (!satisfyTimeFilter(statistics)) {\n    seriesReader.skipCurrentChunk();\n    continue;\n  }\n  /*\n   * The chunk cannot be skipped, continue to check the page in the chunk\n   */\n  if (readChunkData(timestamp)) {\n    return true;\n  }\n}\nreturn false;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br")])]),a("h3",{attrs:{id:"org-apache-iotdb-db-query-reader-series-seriesaggregatereader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-reader-series-seriesaggregatereader"}},[e._v("#")]),e._v(" org.apache.iotdb.db.query.reader.series.SeriesAggregateReader")]),e._v(" "),a("p",[a("code",[e._v("SeriesAggregateReader")]),e._v("implements "),a("code",[e._v("IAggregateReader")])]),e._v(" "),a("p",[e._v("Most interface methods of "),a("code",[e._v("IAggregateReader")]),e._v(" have corresponding implementations in"),a("code",[e._v("SeriesReader")]),e._v(", except for "),a("code",[e._v("canUseCurrentChunkStatistics ()")]),e._v(" and "),a("code",[e._v("canUseCurrentPageStatistics ()")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"canusecurrentchunkstatistics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canusecurrentchunkstatistics"}},[e._v("#")]),e._v(" canUseCurrentChunkStatistics()")]),e._v(" "),a("p",[e._v("Design Idea: The conditions under which the statistical information can be used are that the current chunks do not overlap and meet the filtering conditions.")]),e._v(" "),a("p",[e._v("First call the "),a("code",[e._v("CurrentChunkStatistics ()")]),e._v(" method of "),a("code",[e._v("SeriesReader")]),e._v(" to obtain the statistics of the current chunk, then call the"),a("code",[e._v("isChunkOverlapped ()")]),e._v("method of"),a("code",[e._v("SeriesReader")]),e._v(" to determine whether the current chunks overlap. If the current chunks do not overlap and their statistics meet the filtering If true, return "),a("code",[e._v("true")]),e._v(", otherwise return"),a("code",[e._v("false")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"canusecurrentpagestatistics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canusecurrentpagestatistics"}},[e._v("#")]),e._v(" canUseCurrentPageStatistics()")]),e._v(" "),a("p",[e._v("Design idea: The conditions under which the statistical information can be used are that the current pages do not overlap and meet the filter conditions.")]),e._v(" "),a("p",[e._v("First call the "),a("code",[e._v("CurrentPageStatistics ()")]),e._v(" method of "),a("code",[e._v("SeriesReader")]),e._v(" to obtain the statistical information of the current page, and then call the"),a("code",[e._v("isPageOverlapped ()")]),e._v("method of"),a("code",[e._v("SeriesReader")]),e._v(" to determine whether the current pages overlap. If the current pages do not overlap, and their statistics meet the filtering If true, return "),a("code",[e._v("true")]),e._v(", otherwise return"),a("code",[e._v("false")]),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);