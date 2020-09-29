(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{966:function(a,e,s){"use strict";s.r(e);var n=s(69),t=Object(n.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"原始数据查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原始数据查询"}},[a._v("#")]),a._v(" 原始数据查询")]),a._v(" "),s("h2",{attrs:{id:"设计原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计原理"}},[a._v("#")]),a._v(" 设计原理")]),a._v(" "),s("p",[a._v("原始数据查询根据是否包含值过滤条件，可以分为两类。不包含值过滤条件时，根据结果集结构又可分为两类。")]),a._v(" "),s("ul",[s("li",[a._v("不包含值过滤条件（无过滤条件 or 仅包含时间过滤条件）\n"),s("ul",[s("li",[a._v("结果集按时间戳对齐（默认原始数据查询）")]),a._v(" "),s("li",[a._v("结果集不按时间戳对齐（disable align）")])])]),a._v(" "),s("li",[a._v("包含值过滤条件\n"),s("ul",[s("li",[a._v("结果集按时间戳对齐")])])])]),a._v(" "),s("p",[a._v("以上三种查询在代码中对应三种不同的 DataSet，封装了这三种查询的执行逻辑。")]),a._v(" "),s("h2",{attrs:{id:"不包含值过滤条件-结果集按时间戳对齐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不包含值过滤条件-结果集按时间戳对齐"}},[a._v("#")]),a._v(" 不包含值过滤条件 + 结果集按时间戳对齐")]),a._v(" "),s("h3",{attrs:{id:"org-apache-iotdb-db-query-dataset-rawquerydatasetwithoutvaluefilter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-dataset-rawquerydatasetwithoutvaluefilter"}},[a._v("#")]),a._v(" org.apache.iotdb.db.query.dataset.RawQueryDataSetWithoutValueFilter")]),a._v(" "),s("p",[s("code",[a._v("RawQueryDataSetWithoutValueFilter")]),a._v("实现了没有值过滤条件，且需要按照时间戳对齐的查询逻辑。虽然最后的查询结果需要每个时间序列按照时间戳对齐，但是每个时间序列的查询是可以做并行化的。这里借助消费者-生产者队列的思想，将每个时间序列获取数据的操作与最后对所有时间序列进行对齐的操作解耦。每个时间序列对应一个生产者线程，且有其对应的"),s("code",[a._v("BlockingQueue")]),a._v("，生产者任务负责读取相应的时间序列的数据放进"),s("code",[a._v("BlockingQueue")]),a._v("中；消费者线程只有一个，负责从每个时间序列的"),s("code",[a._v("BlockingQueue")]),a._v("中取出数据，进行时间戳对齐之后，将结果组装成"),s("code",[a._v("TSQueryDataSet")]),a._v("形式返回。")]),a._v(" "),s("p",[a._v("在具体实现的时候，考虑到机器的资源限制，并非为每个查询的每一个时间序列创建一个线程，而是采用线程池技术，将每一个时间序列的生产者任务当作一个"),s("code",[a._v("Runnable")]),a._v("的task提交到线程池中执行。")]),a._v(" "),s("p",[a._v("下面就先介绍生产者的代码，它被封装在是"),s("code",[a._v("RawQueryDataSetWithoutValueFilter")]),a._v("的一个内部类"),s("code",[a._v("ReadTask")]),a._v("中，实现了"),s("code",[a._v("Runnable")]),a._v("接口。")]),a._v(" "),s("h3",{attrs:{id:"org-apache-iotdb-db-query-dataset-rawquerydatasetwithoutvaluefilter-readtask"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-dataset-rawquerydatasetwithoutvaluefilter-readtask"}},[a._v("#")]),a._v(" org.apache.iotdb.db.query.dataset.RawQueryDataSetWithoutValueFilter.ReadTask")]),a._v(" "),s("p",[s("code",[a._v("ReadTask")]),a._v("中有两个字段")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" private final ManagedSeriesReader reader;\n private BlockingQueue<BatchData> blockingQueue;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[s("code",[a._v("ManagedSeriesReader")]),a._v("接口继承了"),s("code",[a._v("IBatchReader")]),a._v("接口，主要用来读取单个时间序列的数据，并且新增了以下四个方法")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("boolean isManagedByQueryManager();\n\nvoid setManagedByQueryManager(boolean managedByQueryManager);\n\nboolean hasRemaining();\n\nvoid setHasRemaining(boolean hasRemaining);\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("前两个方法用以表征该时间序列对应的生产者任务有没有被查询管理器所管理，即生产者任务有没有因为阻塞队列满了，而自行退出（后文会解释为什么不阻塞等待，而是直接退出）；后两个方法用以表征该时间序列对应的reader里还有没有数据。")]),a._v(" "),s("p",[s("code",[a._v("blockingQueue")]),a._v("就是该生产者任务的阻塞队列，实际上该阻塞队列只会在消费者取数据时单边阻塞，生产者放数据时，如果发现队列满了，便会直接退出，不会阻塞。")]),a._v(" "),s("p",[a._v("下面看一下"),s("code",[a._v("ReadTask")]),a._v("的"),s("code",[a._v("run()")]),a._v("方法，执行流程的解释以注释的形式展现在代码中")]),a._v(" "),s("h4",{attrs:{id:"run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[a._v("#")]),a._v(" run()")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('public void run() {\n  try {\n    // 这里加锁的原因是为了保证对于blockingQueue满不满的判断是正确同步的\n    synchronized (reader) {\n      // 由于每次提交生产者任务时(不论是生产者自己递归的提交自己，还是消费者发现生产者任务自行退出而提交的)，都会检查队列是不是满的，如果队列满了，是不会提交生产者任务的\n      // 所以生产者任务一旦被提交，blockingQueue里一定是有空余位置的，我们不需要检查队列是否满\n      // 如果时间序列对应的reader还有数据，进入循环体\n      while (reader.hasNextBatch()) {\n        BatchData batchData = reader.nextBatch();\n        // 由于拿到的BatchData有可能为空，所以需要一直迭代到第一个不为空的BatchData\n        if (batchData.isEmpty()) {\n          continue;\n        }\n        // 将不为空的batchData放进阻塞队列中，此时的阻塞队列一定是不满的，所以不会阻塞\n        blockingQueue.put(batchData);\n        // 如果阻塞队列仍然没有满，生产者任务再次向线程池里递归地提交自己，进行下一个batchData的获取\n        if (blockingQueue.remainingCapacity() > 0) {\n          pool.submit(this);\n        }\n        // 如果阻塞队列满了，生产者任务退出，并将对应reader的managedByQueryManager置为false\n        else {\n          reader.setManagedByQueryManager(false);\n        }\n        return;\n      }\n      // 代码执行到这边，代表之前的while循环条件不满足，即该时间序列对应的reader里没有数据了\n      // 我们往阻塞队列里放入一个SignalBatchData，用以告知消费者，这个时间序列已经没有数据了，不需要再从该时间序列对应的队列里取数据了\n      blockingQueue.put(SignalBatchData.getInstance());\n      // 将reader的hasRemaining字段置为false\n      // 通知消费者不需要再为这个时间序列提交生产者任务\n      reader.setHasRemaining(false);\n      // 将reader的managedByQueryManager字段置为false\n      reader.setManagedByQueryManager(false);\n    }\n  } catch (InterruptedException e) {\n    LOGGER.error("Interrupted while putting into the blocking queue: ", e);\n    Thread.currentThread().interrupt();\n  } catch (IOException e) {\n    LOGGER.error("Something gets wrong while reading from the series reader: ", e);\n  } catch (Exception e) {\n    LOGGER.error("Something gets wrong: ", e);\n  }\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br")])]),s("p",[a._v("接下来介绍消费者的代码，消费者的主要逻辑是从每个时间序列的队列里拿出值，做时间戳对齐，然后拼凑结果集。时间戳的对齐主要通过一个时间戳的最小堆来实现，如果该时间序列的时间戳等于堆顶的时间戳，则取出该值，反之，将该时间戳下该时间序列的值置为"),s("code",[a._v("null")]),a._v("。")]),a._v(" "),s("p",[a._v("先介绍消费者任务的一些重要字段")]),a._v(" "),s("ul",[s("li",[s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("TreeSet<Long> timeHeap\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("时间戳的最小堆，用以实现时间戳对齐操作")])]),a._v(" "),s("li",[s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("BlockingQueue<BatchData>[] blockingQueueArray;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("阻塞队列的数组，用以存储每个时间序列对应的阻塞队列")])]),a._v(" "),s("li",[s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("boolean[] noMoreDataInQueueArray\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("用以表征某个时间序列的阻塞队列里还有没有值，如果为false，则消费者不会再去调用"),s("code",[a._v("take()")]),a._v("方法，以防消费者线程被阻塞。")])]),a._v(" "),s("li",[s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("BatchData[] cachedBatchDataArray\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("缓存从阻塞队列里取出的一个BatchData，因为阻塞队列里"),s("code",[a._v("take()")]),a._v("出的"),s("code",[a._v("BatchData")]),a._v("并不能一次性消费完，所以需要做缓存")])])]),a._v(" "),s("p",[a._v("在消费者"),s("code",[a._v("RawQueryDataSetWithoutValueFilter")]),a._v("的构造函数里首先调用了"),s("code",[a._v("init()")]),a._v("方法")]),a._v(" "),s("h4",{attrs:{id:"init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[a._v("#")]),a._v(" init()")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("private void init() throws InterruptedException {\n\ttimeHeap = new TreeSet<>();\n\t// 为每个时间序列构建生产者任务\n\tfor (int i = 0; i < seriesReaderList.size(); i++) {\n\t  ManagedSeriesReader reader = seriesReaderList.get(i);\n\t  reader.setHasRemaining(true);\n\t  reader.setManagedByQueryManager(true);\n\t  pool.submit(new ReadTask(reader, blockingQueueArray[i]));\n\t}\n\t// 初始化最小堆，填充每个时间序列对应的缓存\n\tfor (int i = 0; i < seriesReaderList.size(); i++) {\n\t  // 调用fillCache(int)方法填充缓存\n\t  fillCache(i);\n\t  // 尝试将每个时间序列的当前最小时间戳放进堆中\n\t  if (cachedBatchDataArray[i] != null && cachedBatchDataArray[i].hasCurrent()) {\n\t    long time = cachedBatchDataArray[i].currentTime();\n\t    timeHeap.add(time);\n\t  }\n\t}\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br")])]),s("h4",{attrs:{id:"fillcache-int"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fillcache-int"}},[a._v("#")]),a._v(" fillCache(int)")]),a._v(" "),s("p",[a._v("该方法负责从阻塞队列中取出数据，并填充缓存，具体逻辑见下文注释")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("private void fillCache(int seriesIndex) throws InterruptedException {\n    // 从阻塞队列中拿数据，如果没有数据，则会阻塞等待队列中有数据\n\tBatchData batchData = blockingQueueArray[seriesIndex].take();\n\t// 如果是一个信号BatchData，则将相应时间序列的oMoreDataInQueue置为false\n\tif (batchData instanceof SignalBatchData) {\n\t  noMoreDataInQueueArray[seriesIndex] = true;\n\t}\n\telse {\n\t  // 将取出的BatchData放进cachedBatchDataArray缓存起来\n\t  cachedBatchDataArray[seriesIndex] = batchData;\n\t\n\t  // 这里加锁的原因与生产者任务那边一样，是为了保证对于blockingQueue满不满的判断是正确同步的\n\t  synchronized (seriesReaderList.get(seriesIndex)) {\n\t    // 只有当阻塞队列不满的时候，我们才需要判断是不是需要提交生产者任务，这里也保证了生产者任务会被提交，当且仅当阻塞队列不满\n\t    if (blockingQueueArray[seriesIndex].remainingCapacity() > 0) {\n\t      ManagedSeriesReader reader = seriesReaderList.get(seriesIndex);、\n\t      // 如果该时间序列的reader并没有被查询管理器管理(即生产者任务由于队列满了，自行退出)，并且该reader里还有数据，我们需要再次提交该时间序列的生产者任务\n\t      if (!reader.isManagedByQueryManager() && reader.hasRemaining()) {\n\t        reader.setManagedByQueryManager(true);\n\t        pool.submit(new ReadTask(reader, blockingQueueArray[seriesIndex]));\n\t      }\n\t    }\n\t  }\n\t}\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br")])]),s("p",[a._v("有了每个时间序列的数据，接下来就是将每个时间戳的数据做对齐，并将结果组装成"),s("code",[a._v("TSQueryDataSet")]),a._v("返回。这里的逻辑封装在"),s("code",[a._v("fillBuffer()")]),a._v("方法中，该方法里还包含了"),s("code",[a._v("limit")]),a._v("和"),s("code",[a._v("offset")]),a._v("，以及格式化结果集的逻辑，对此我们不作赘述，只分析其中数据读取和时间戳对齐的流程。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 从最小堆中取出当前时间戳\nlong minTime = timeHeap.pollFirst();\nfor (int seriesIndex = 0; seriesIndex < seriesNum; seriesIndex++) {\n\tif (cachedBatchDataArray[seriesIndex] == null\n\t    || !cachedBatchDataArray[seriesIndex].hasCurrent()\n\t    || cachedBatchDataArray[seriesIndex].currentTime() != minTime) {\n\t  // 该时间序列在当前时间戳没有数据，置为null\n\t  ...\n\t  \n\t} else {\n\t  // 该时间序列在当前时间戳有数据，将该数据格式化成结果集格式\n\t  TSDataType type = cachedBatchDataArray[seriesIndex].getDataType();\n\t  ...\n\t  \n\t}\n\t\t\n  // 将该时间序列缓存的batchdata游标向后移\n  cachedBatchDataArray[seriesIndex].next();\n\t\n  // 如果当前缓存的batchdata为空，并且阻塞队列依然有数据，则再次调用fillCache()方法填充缓存\n  if (!cachedBatchDataArray[seriesIndex].hasCurrent()\n      && !noMoreDataInQueueArray[seriesIndex]) {\n    fillCache(seriesIndex);\n  }\n\t\n  // 尝试将该时间序列的下一个时间戳放进最小堆中\n  if (cachedBatchDataArray[seriesIndex].hasCurrent()) {\n    long time = cachedBatchDataArray[seriesIndex].currentTime();\n    timeHeap.add(time);\n  }\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br")])]),s("h2",{attrs:{id:"不包含值过滤条件-结果集不按时间戳对齐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不包含值过滤条件-结果集不按时间戳对齐"}},[a._v("#")]),a._v(" 不包含值过滤条件 + 结果集不按时间戳对齐")]),a._v(" "),s("h3",{attrs:{id:"org-apache-iotdb-db-query-dataset-nonalignenginedataset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-dataset-nonalignenginedataset"}},[a._v("#")]),a._v(" org.apache.iotdb.db.query.dataset.NonAlignEngineDataSet")]),a._v(" "),s("p",[s("code",[a._v("NonAlignEngineDataSet")]),a._v("实现了没有值过滤条件，且不需要按照时间戳对齐的查询逻辑。这里的查询逻辑跟"),s("code",[a._v("RawQueryDataSetWithoutValueFilter")]),a._v("很类似，但是它的消费者逻辑更为简单，因为不需要做时间戳对齐的操作。并且每个生产者任务中也可以做更多的工作，不仅可以从Reader中取出BatchData，还可以进一步讲取出的BatchData格式化为结果集需要的输出，从而提高了程序的并行度。如此，消费者只需要从每个阻塞队列里取出数据，set进"),s("code",[a._v("TSQueryNonAlignDataSet")]),a._v("相应的位置即可。")]),a._v(" "),s("p",[a._v("具体的查询逻辑，在此就不再赘述了，可以参照"),s("code",[a._v("RawQueryDataSetWithoutValueFilter")]),a._v("的查询逻辑分析。")]),a._v(" "),s("h2",{attrs:{id:"包含值过滤条件-结果集按时间戳对齐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包含值过滤条件-结果集按时间戳对齐"}},[a._v("#")]),a._v(" 包含值过滤条件 + 结果集按时间戳对齐")]),a._v(" "),s("h3",{attrs:{id:"org-apache-iotdb-db-query-dataset-enginedatasetwithvaluefilter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-dataset-enginedatasetwithvaluefilter"}},[a._v("#")]),a._v(" org.apache.iotdb.db.query.dataset.EngineDataSetWithValueFilter")]),a._v(" "),s("p",[s("code",[a._v("EngineDataSetWithValueFilter")]),a._v("实现了有值过滤条件的查询逻辑。")]),a._v(" "),s("p",[a._v("它的查询逻辑是，首先根据查询条件生成满足过滤条件的时间戳，通过满足条件的时间戳查询投影列的值，然后返回结果集。它有四个字段")]),a._v(" "),s("ul",[s("li",[s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("private EngineTimeGenerator timeGenerator;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("是用来生成满足过滤条件的时间戳的")])]),a._v(" "),s("li",[s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("private List<IReaderByTimestamp> seriesReaderByTimestampList;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("每个时间序列对应的reader，用来根据时间戳获取数据")])]),a._v(" "),s("li",[s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("private boolean hasCachedRowRecord;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("当前是否缓存了数据行")])]),a._v(" "),s("li",[s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("private RowRecord cachedRowRecord;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("当前缓存的数据行")])])]),a._v(" "),s("p",[a._v("它的主要查询逻辑封装在"),s("code",[a._v("cacheRowRecord()")]),a._v("方法中，具体分析见代码中的注释")]),a._v(" "),s("h4",{attrs:{id:"cacherowrecord"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cacherowrecord"}},[a._v("#")]),a._v(" cacheRowRecord()")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("private boolean cacheRowRecord() throws IOException {\n   // 判断有没有下一个符合条件的时间戳\n\twhile (timeGenerator.hasNext()) {\n\t  boolean hasField = false;\n\t  // 获得当前符合条件的时间戳\n\t  long timestamp = timeGenerator.next();\n\t  RowRecord rowRecord = new RowRecord(timestamp);\n\t  for (int i = 0; i < seriesReaderByTimestampList.size(); i++) {\n\t    // 根获得每个时间序列当前时间戳下的value\n\t    IReaderByTimestamp reader = seriesReaderByTimestampList.get(i);\n\t    Object value = reader.getValueInTimestamp(timestamp);\n\t    // 如果该时间序列在当前时间戳下没有值，则置null\n\t    if (value == null) {\n\t      rowRecord.addField(null);\n\t    } \n\t    // 否则将hasField置为true\n\t    else {\n\t      hasField = true;\n\t      rowRecord.addField(value, dataTypes.get(i));\n\t    }\n\t  }\n\t  // 如果该时间戳下，任何一个时间序列有值，则表示该时间戳有效，缓存该数据行\n\t  if (hasField) {\n\t    hasCachedRowRecord = true;\n\t    cachedRowRecord = rowRecord;\n\t    break;\n\t  }\n\t}\n\treturn hasCachedRowRecord;\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);