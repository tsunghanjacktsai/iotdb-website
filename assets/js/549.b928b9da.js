(window.webpackJsonp=window.webpackJsonp||[]).push([[549],{1114:function(s,t,a){"use strict";a.r(t);var r=a(69),n=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"导入导出-csv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入导出-csv"}},[s._v("#")]),s._v(" 导入导出 CSV")]),s._v(" "),a("p",[s._v("CSV工具可帮您将CSV格式的数据导入到IoTDB或者将数据从IoTDB导出到CSV文件。")]),s._v(" "),a("h3",{attrs:{id:"使用-import-csv-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-import-csv-sh"}},[s._v("#")]),s._v(" 使用 import-csv.sh")]),s._v(" "),a("h4",{attrs:{id:"创建元数据-可选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建元数据-可选"}},[s._v("#")]),s._v(" 创建元数据（可选）")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" STORAGE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" STORAGE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" STORAGE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ENCODING"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TEXT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ENCODING"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ENCODING"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s3 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ENCODING"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ENCODING"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("IoTDB具有类型推断的能力，因此在数据导入前创建元数据不是必须的。但我们仍然推荐在使用CSV导入工具导入数据前创建元数据，因为这可以避免不必要的类型转换错误。")]),s._v(" "),a("h4",{attrs:{id:"待导入-csv-文件示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#待导入-csv-文件示例"}},[s._v("#")]),s._v(" 待导入 CSV 文件示例")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("400")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("700")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("800")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello, \\"world\\""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1200")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"运行方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行方法"}},[s._v("#")]),s._v(" 运行方法")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Unix/OS X")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/import-csv.sh -h "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -u "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -pw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("xxx.csv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Windows")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("import-csv.bat -h "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -u "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -pw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("xxx.csv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"运行示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行示例"}},[s._v("#")]),s._v(" 运行示例")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Unix/OS X")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/import-csv.sh -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -f example-filename.csv\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Windows")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("import-csv.bat -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -f example-filename.csv\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("p",[s._v("注意，在导入数据前，需要特殊处理下列的字符：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v(",")]),s._v(" : 包含"),a("code",[s._v(",")]),s._v("的字段需要使用单引号或者双引号括起来")]),s._v(" "),a("li",[a("code",[s._v('"')]),s._v(' : "字段中的'),a("code",[s._v('"')]),s._v("需要被替换成转义字符"),a("code",[s._v('\\"')]),s._v("或者用"),a("code",[s._v("\\'")]),s._v("将字段括起来。")]),s._v(" "),a("li",[a("code",[s._v("'")]),s._v(' : "字段中的'),a("code",[s._v("'")]),s._v("需要被替换成转义字符"),a("code",[s._v("\\'")]),s._v("或者用"),a("code",[s._v('\\"')]),s._v("将字段括起来。")]),s._v(" "),a("li",[s._v("你可以输入时间格式像"),a("code",[s._v("yyyy-MM-dd'T'HH:mm:ss")]),s._v(", "),a("code",[s._v("yyy-MM-dd HH:mm:ss")]),s._v(", 或者"),a("code",[s._v("yyyy-MM-dd'T'HH:mm:ss.SSSZ")]),s._v(".")])]),s._v(" "),a("h3",{attrs:{id:"使用-export-csv-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-export-csv-sh"}},[s._v("#")]),s._v(" 使用 export-csv.sh")]),s._v(" "),a("h4",{attrs:{id:"运行方法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行方法-2"}},[s._v("#")]),s._v(" 运行方法")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Unix/OS X")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.sh -h "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -u "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -pw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -td "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("directory"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-tf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("time-format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("sqlfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Windows")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("export-csv.bat -h "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -u "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -pw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -td "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("directory"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-tf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("time-format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("sqlfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("在运行导出脚本之后，您需要输入一些查询或指定一些SQL文件。如果在一个SQL文件中有多个SQL，SQL应该被换行符分割。")]),s._v(" "),a("h4",{attrs:{id:"sql文件示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql文件示例"}},[s._v("#")]),s._v(" SQL文件示例")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"运行示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行示例-2"}},[s._v("#")]),s._v(" 运行示例")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Unix/OS X")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.sh -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -td ./\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.sh -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -td ./ -tf yyyy-MM-dd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" HH:mm:ss\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.sh -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -td ./ -s sql.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.sh -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -td ./ -tf yyyy-MM-dd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" HH:mm:ss -s sql.txt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Windows")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.bat -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -td ./\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.bat -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -td ./ -tf yyyy-MM-dd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" HH:mm:ss\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.bat -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -td ./ -s sql.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.bat -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -td ./ -tf yyyy-MM-dd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" HH:mm:ss -s sql.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h4",{attrs:{id:"注意事项-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项-2"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("p",[s._v("注意，如果导出字段存在如下特殊字符：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v(",")]),s._v(" : 整个字段会被用"),a("code",[s._v('"')]),s._v("括起来。")]),s._v(" "),a("li",[a("code",[s._v('"')]),s._v(" : 整个字段会被用"),a("code",[s._v('"')]),s._v("括起来且"),a("code",[s._v('"')]),s._v("会被替换为"),a("code",[s._v('\\"')]),s._v("。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);