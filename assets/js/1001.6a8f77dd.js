(window.webpackJsonp=window.webpackJsonp||[]).push([[1001],{1322:function(e,s,t){"use strict";t.r(s);var a=t(1),n=Object(a.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"水印工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#水印工具"}},[e._v("#")]),e._v(" 水印工具")]),e._v(" "),t("p",[t("strong",[e._v("目录")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("水印嵌入")]),e._v(" "),t("p",[e._v("1.1 配置")]),e._v(" "),t("p",[e._v("1.2 使用示例")])]),e._v(" "),t("li",[t("p",[e._v("水印检测")])])]),e._v(" "),t("p",[e._v("这个工具提供了 1）IoTDB查询结果水印嵌入功能，2）可疑数据的水印检测功能。")]),e._v(" "),t("h2",{attrs:{id:"_1-水印嵌入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-水印嵌入"}},[e._v("#")]),e._v(" 1. 水印嵌入")]),e._v(" "),t("h3",{attrs:{id:"_1-1-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-配置"}},[e._v("#")]),e._v(" 1.1 配置")]),e._v(" "),t("p",[e._v("IoTDB默认关闭水印嵌入功能。为了使用这个功能，第一步要做的事情是修改配置文件"),t("code",[e._v("iotdb-engine.properties")]),e._v("中的以下各项：")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("名称")]),e._v(" "),t("th",[e._v("示例")]),e._v(" "),t("th",[e._v("解释")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("watermark_module_opened")]),e._v(" "),t("td",[e._v("false")]),e._v(" "),t("td",[t("code",[e._v("true")]),e._v("打开水印嵌入功能; "),t("code",[e._v("false")]),e._v("关闭")])]),e._v(" "),t("tr",[t("td",[e._v("watermark_secret_key")]),e._v(" "),t("td",[e._v("IoTDB*2019@Beijing")]),e._v(" "),t("td",[e._v("自定义密钥")])]),e._v(" "),t("tr",[t("td",[e._v("watermark_bit_string")]),e._v(" "),t("td",[e._v("100101110100")]),e._v(" "),t("td",[e._v("要被嵌入的0-1比特串")])]),e._v(" "),t("tr",[t("td",[e._v("watermark_method")]),e._v(" "),t("td",[e._v("GroupBasedLSBMethod(embed_row_cycle=2,embed_lsb_num=5)")]),e._v(" "),t("td",[e._v("指定水印算法及其参数")])])])]),e._v(" "),t("p",[e._v("注意：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("watermark_module_opened")]),e._v(": 如果您想使用水印嵌入功能，请将其设置成"),t("code",[e._v("true")]),e._v("。")]),e._v(" "),t("li",[t("code",[e._v("watermark_secret_key")]),e._v(": 不能使用字符 '&'。密钥长度没有限制，一般来说密钥越长，攻击难度就越高。")]),e._v(" "),t("li",[t("code",[e._v("watermark_bit_string")]),e._v(": 比特串长度没有限制（除了不能为空字符串），但是当长度过短时，水印检测可能达不到要求的显著性水平。")]),e._v(" "),t("li",[t("code",[e._v("watermark_method")]),e._v(": 现在仅支持一种算法GroupBasedLSBMethod，因此您实际上可以修改的只有这个算法的两个参数"),t("code",[e._v("embed_row_cycle")]),e._v("和"),t("code",[e._v("embed_lsb_num")]),e._v("的值：\n"),t("ul",[t("li",[e._v("均是正整数")]),e._v(" "),t("li",[t("code",[e._v("embed_row_cycle")]),e._v("控制了被嵌入水印的行占总行数的比例。"),t("code",[e._v("embed_row_cycle")]),e._v("越小，被嵌入水印的行的比例就越大。当"),t("code",[e._v("embed_row_cycle")]),e._v("等于1的时候，所有的行都将嵌入水印。")]),e._v(" "),t("li",[e._v("GroupBasedLSBMethod使用LSB嵌入。"),t("code",[e._v("embed_lsb_num")]),e._v("控制了允许嵌入水印的最低有效位的数量。"),t("code",[e._v("embed_lsb_num")]),e._v("越大，数值的可变化范围就越大。")])])]),e._v(" "),t("li",[t("code",[e._v("watermark_secret_key")]),e._v(", "),t("code",[e._v("watermark_bit_string")]),e._v("和"),t("code",[e._v("watermark_method")]),e._v("都不应该被攻击者获得。您需要自己负责配置文件"),t("code",[e._v("iotdb-engine.properties")]),e._v("的安全管理。")])]),e._v(" "),t("h3",{attrs:{id:"_1-2-使用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-使用示例"}},[e._v("#")]),e._v(" 1.2 使用示例")]),e._v(" "),t("h4",{attrs:{id:"第一步：创建一个新用户alice，授予读权限，然后查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一步：创建一个新用户alice，授予读权限，然后查询"}},[e._v("#")]),e._v(" 第一步：创建一个新用户Alice，授予读权限，然后查询")]),e._v(" "),t("p",[e._v("一个新创建的用户默认不使用水印。因此查询结果就是数据库中的原始数据。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".\\start-client.bat -u root -pw root\ncreate user Alice 1234\ngrant user Alice privileges 'READ_TIMESERIES' on root.vehicle\nexit\n\n.\\start-client.bat -u Alice -pw 1234\nselect * from root\n+-----------------------------------+------------------+\n|                               Time|root.vehicle.d0.s0|\n+-----------------------------------+------------------+\n|      1970-01-01T08:00:00.001+08:00|              21.5|\n|      1970-01-01T08:00:00.002+08:00|              22.5|\n|      1970-01-01T08:00:00.003+08:00|              23.5|\n|      1970-01-01T08:00:00.004+08:00|              24.5|\n|      1970-01-01T08:00:00.005+08:00|              25.5|\n|      1970-01-01T08:00:00.006+08:00|              26.5|\n|      1970-01-01T08:00:00.007+08:00|              27.5|\n|      1970-01-01T08:00:00.008+08:00|              28.5|\n|      1970-01-01T08:00:00.009+08:00|              29.5|\n|      1970-01-01T08:00:00.010+08:00|              30.5|\n|      1970-01-01T08:00:00.011+08:00|              31.5|\n|      1970-01-01T08:00:00.012+08:00|              32.5|\n|      1970-01-01T08:00:00.013+08:00|              33.5|\n|      1970-01-01T08:00:00.014+08:00|              34.5|\n|      1970-01-01T08:00:00.015+08:00|              35.5|\n|      1970-01-01T08:00:00.016+08:00|              36.5|\n|      1970-01-01T08:00:00.017+08:00|              37.5|\n|      1970-01-01T08:00:00.018+08:00|              38.5|\n|      1970-01-01T08:00:00.019+08:00|              39.5|\n|      1970-01-01T08:00:00.020+08:00|              40.5|\n|      1970-01-01T08:00:00.021+08:00|              41.5|\n|      1970-01-01T08:00:00.022+08:00|              42.5|\n|      1970-01-01T08:00:00.023+08:00|              43.5|\n|      1970-01-01T08:00:00.024+08:00|              44.5|\n|      1970-01-01T08:00:00.025+08:00|              45.5|\n|      1970-01-01T08:00:00.026+08:00|              46.5|\n|      1970-01-01T08:00:00.027+08:00|              47.5|\n|      1970-01-01T08:00:00.028+08:00|              48.5|\n|      1970-01-01T08:00:00.029+08:00|              49.5|\n|      1970-01-01T08:00:00.030+08:00|              50.5|\n|      1970-01-01T08:00:00.031+08:00|              51.5|\n|      1970-01-01T08:00:00.032+08:00|              52.5|\n|      1970-01-01T08:00:00.033+08:00|              53.5|\n+-----------------------------------+------------------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br"),t("span",{staticClass:"line-number"},[e._v("38")]),t("br"),t("span",{staticClass:"line-number"},[e._v("39")]),t("br"),t("span",{staticClass:"line-number"},[e._v("40")]),t("br"),t("span",{staticClass:"line-number"},[e._v("41")]),t("br"),t("span",{staticClass:"line-number"},[e._v("42")]),t("br"),t("span",{staticClass:"line-number"},[e._v("43")]),t("br"),t("span",{staticClass:"line-number"},[e._v("44")]),t("br")])]),t("h4",{attrs:{id:"第二步：给alice施加水印嵌入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二步：给alice施加水印嵌入"}},[e._v("#")]),e._v(" 第二步：给Alice施加水印嵌入")]),e._v(" "),t("p",[e._v("sql用法："),t("code",[e._v("grant watermark_embedding to Alice")])]),e._v(" "),t("p",[e._v("您可以使用"),t("code",[e._v("grant watermark_embedding to user1,user2,...")]),e._v("来同时给多个用户施加水印嵌入。")]),e._v(" "),t("p",[e._v("只有root用户有权限运行该指令。在root给Alice施加水印嵌入之后，Alice的所有查询结果都将被嵌入水印。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".\\start-client.bat -u root -pw root\ngrant watermark_embedding to Alice\nexit\n\n.\\start-client.bat -u Alice -pw 1234\nselect * from root\n\n+-----------------------------------+------------------+\n|                               Time|root.vehicle.d0.s0|\n+-----------------------------------+------------------+\n|      1970-01-01T08:00:00.001+08:00|              21.5|\n|      1970-01-01T08:00:00.002+08:00|              22.5|\n|      1970-01-01T08:00:00.003+08:00|         23.500008|\n|      1970-01-01T08:00:00.004+08:00|         24.500015|\n|      1970-01-01T08:00:00.005+08:00|              25.5|\n|      1970-01-01T08:00:00.006+08:00|         26.500015|\n|      1970-01-01T08:00:00.007+08:00|              27.5|\n|      1970-01-01T08:00:00.008+08:00|         28.500004|\n|      1970-01-01T08:00:00.009+08:00|              29.5|\n|      1970-01-01T08:00:00.010+08:00|              30.5|\n|      1970-01-01T08:00:00.011+08:00|              31.5|\n|      1970-01-01T08:00:00.012+08:00|              32.5|\n|      1970-01-01T08:00:00.013+08:00|              33.5|\n|      1970-01-01T08:00:00.014+08:00|              34.5|\n|      1970-01-01T08:00:00.015+08:00|         35.500004|\n|      1970-01-01T08:00:00.016+08:00|              36.5|\n|      1970-01-01T08:00:00.017+08:00|              37.5|\n|      1970-01-01T08:00:00.018+08:00|              38.5|\n|      1970-01-01T08:00:00.019+08:00|              39.5|\n|      1970-01-01T08:00:00.020+08:00|              40.5|\n|      1970-01-01T08:00:00.021+08:00|              41.5|\n|      1970-01-01T08:00:00.022+08:00|         42.500015|\n|      1970-01-01T08:00:00.023+08:00|              43.5|\n|      1970-01-01T08:00:00.024+08:00|         44.500008|\n|      1970-01-01T08:00:00.025+08:00|          45.50003|\n|      1970-01-01T08:00:00.026+08:00|         46.500008|\n|      1970-01-01T08:00:00.027+08:00|         47.500008|\n|      1970-01-01T08:00:00.028+08:00|              48.5|\n|      1970-01-01T08:00:00.029+08:00|              49.5|\n|      1970-01-01T08:00:00.030+08:00|              50.5|\n|      1970-01-01T08:00:00.031+08:00|         51.500008|\n|      1970-01-01T08:00:00.032+08:00|              52.5|\n|      1970-01-01T08:00:00.033+08:00|              53.5|\n+-----------------------------------+------------------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br"),t("span",{staticClass:"line-number"},[e._v("38")]),t("br"),t("span",{staticClass:"line-number"},[e._v("39")]),t("br"),t("span",{staticClass:"line-number"},[e._v("40")]),t("br"),t("span",{staticClass:"line-number"},[e._v("41")]),t("br"),t("span",{staticClass:"line-number"},[e._v("42")]),t("br"),t("span",{staticClass:"line-number"},[e._v("43")]),t("br"),t("span",{staticClass:"line-number"},[e._v("44")]),t("br")])]),t("h4",{attrs:{id:"第三步：撤销alice的水印嵌入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三步：撤销alice的水印嵌入"}},[e._v("#")]),e._v(" 第三步：撤销Alice的水印嵌入")]),e._v(" "),t("p",[e._v("sql用法："),t("code",[e._v("revoke watermark_embedding from Alice")])]),e._v(" "),t("p",[e._v("您可以使用"),t("code",[e._v("revoke watermark_embedding from user1,user2,...")]),e._v("来同时撤销多个用户的水印嵌入。")]),e._v(" "),t("p",[e._v("只有root用户有权限运行该指令。在root撤销Alice的水印嵌入之后，Alice的所有查询结果就又是数据库中的原始数据了。")]),e._v(" "),t("h2",{attrs:{id:"_2-水印检测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-水印检测"}},[e._v("#")]),e._v(" 2. 水印检测")]),e._v(" "),t("p",[t("code",[e._v("detect-watermark.sh")]),e._v(" 和 "),t("code",[e._v("detect-watermark.bat")]),e._v(" 是给不同平台提供的功能相同的工具脚本。")]),e._v(" "),t("p",[e._v("用法： ./detect-watermark.sh [filePath] [secretKey] [watermarkBitString] [embed_row_cycle] [embed_lsb_num] [alpha] [columnIndex] [dataType: int/float/double]")]),e._v(" "),t("p",[e._v("示例： ./detect-watermark.sh /home/data/dump1.csv IoTDB*2019@Beijing 100101110100 2 5 0.05 1 float")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Args")]),e._v(" "),t("th",[e._v("示例")]),e._v(" "),t("th",[e._v("解释")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("filePath")]),e._v(" "),t("td",[e._v("/home/data/dump1.csv")]),e._v(" "),t("td",[e._v("可疑数据的文件路径")])]),e._v(" "),t("tr",[t("td",[e._v("secretKey")]),e._v(" "),t("td",[e._v("IoTDB*2019@Beijing")]),e._v(" "),t("td",[e._v("参见水印嵌入小节")])]),e._v(" "),t("tr",[t("td",[e._v("watermarkBitString")]),e._v(" "),t("td",[e._v("100101110100")]),e._v(" "),t("td",[e._v("参见水印嵌入小节")])]),e._v(" "),t("tr",[t("td",[e._v("embed_row_cycle")]),e._v(" "),t("td",[e._v("2")]),e._v(" "),t("td",[e._v("参见水印嵌入小节")])]),e._v(" "),t("tr",[t("td",[e._v("embed_lsb_num")]),e._v(" "),t("td",[e._v("5")]),e._v(" "),t("td",[e._v("参见水印嵌入小节")])]),e._v(" "),t("tr",[t("td",[e._v("alpha")]),e._v(" "),t("td",[e._v("0.05")]),e._v(" "),t("td",[e._v("显著性水平")])]),e._v(" "),t("tr",[t("td",[e._v("columnIndex")]),e._v(" "),t("td",[e._v("1")]),e._v(" "),t("td",[e._v("指定可疑数据的某一列进行检测")])]),e._v(" "),t("tr",[t("td",[e._v("dataType")]),e._v(" "),t("td",[e._v("float")]),e._v(" "),t("td",[e._v("指定检测列的数据类型；int/float/double任选其一")])])])]),e._v(" "),t("p",[e._v("注意：")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("filePath")]),e._v(": 您可以使用export-csv工具来生成这样的数据文件。第一行是表头， 第一列是时间列。文件中的数据示例如下：")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Time")]),e._v(" "),t("th",[e._v("root.vehicle.d0.s1")]),e._v(" "),t("th",[e._v("root.vehicle.d0.s1")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("1970-01-01T08:00:00.001+08:00")]),e._v(" "),t("td",[e._v("100")]),e._v(" "),t("td",[e._v("null")])]),e._v(" "),t("tr",[t("td",[e._v("...")]),e._v(" "),t("td",[e._v("...")]),e._v(" "),t("td",[e._v("...")])])])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("watermark_secret_key")]),e._v(", "),t("code",[e._v("watermark_bit_string")]),e._v(", "),t("code",[e._v("embed_row_cycle")]),e._v("和"),t("code",[e._v("embed_lsb_num")]),e._v("应该和水印嵌入过程使用的值保持一致。")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("alpha")]),e._v(": 取值范围[0,1]。水印检测基于显著性检验，"),t("code",[e._v("alpha")]),e._v("越小，没有嵌入水印的数据被检测成嵌入水印的可能性越低，从而检测出嵌入水印的结果的可信度越高。")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("columnIndex")]),e._v(": 正整数")])])])])}],!1,null,null,null);s.default=n.exports}}]);