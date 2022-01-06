(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{857:function(s,e,a){"use strict";a.r(e);var n=a(80),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"性能追踪工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能追踪工具"}},[s._v("#")]),s._v(" 性能追踪工具")]),s._v(" "),a("blockquote",[a("p",[s._v("注意：0.13及以上版本中将不再支持 "),a("code",[s._v("TRACING ON/OFF")]),s._v(" 。")])]),s._v(" "),a("p",[s._v("IoTDB 支持使用 "),a("code",[s._v("TRACING")]),s._v(" 关键词对执行语句进行性能追踪。用户可以使用性能追踪工具来分析语句执行中存在的潜在性能问题。目前仅支持对 "),a("code",[s._v("SELECT")]),s._v(" 语句进行追踪。")]),s._v(" "),a("p",[s._v("性能追踪的结果包括：")]),s._v(" "),a("ol",[a("li",[s._v("执行过程中各个阶段的累积耗时。")]),s._v(" "),a("li",[s._v("与性能分析相关的统计信息。对于查询语句，包括查询的时间序列数、涉及访问的 Tsfile 文件数、需要扫描的 chunk 总数以及平均每个 chunk 包含的数据点个数、读取的 Page 总数以及其中乱序 Page 的个数。")])]),s._v(" "),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("p",[s._v("例如执行 "),a("code",[s._v("tracing select * from root")]),s._v("，输出结果如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Tracing Activties:\n+------------------------------------------------------+------------+\n|                                              Activity|Elapsed Time|\n+------------------------------------------------------+------------+\n|Start to execute statement: tracing select * from root|           0|\n|                            Parse SQL to physical plan|           4|\n|                              Create and cache dataset|          16|\n|                              * Num of series paths: 3|            |\n|                       * Num of sequence files read: 2|            |\n|                     * Num of unsequence files read: 1|            |\n|        * Num of sequence chunks: 6, avg points: 100.0|            |\n|      * Num of unsequence chunks: 3, avg points: 100.0|            |\n|         * Num of Pages: 9, overlapped pages: 0 (0.0%)|            |\n|                                      Request complete|          20|\n+------------------------------------------------------+------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);