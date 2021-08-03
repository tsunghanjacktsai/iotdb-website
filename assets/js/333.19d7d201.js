(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{899:function(s,a,t){"use strict";t.r(a);var r=t(69),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"触发器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#触发器"}},[s._v("#")]),s._v(" 触发器")]),s._v(" "),t("h2",{attrs:{id:"sql管理语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql管理语句"}},[s._v("#")]),s._v(" SQL管理语句")]),s._v(" "),t("p",[s._v("您可以通过SQL语句注册、卸载、启动或停止一个触发器实例，您也可以通过SQL语句查询到所有已经注册的触发器。")]),s._v(" "),t("p",[s._v("触发器有两种运行状态："),t("code",[s._v("STARTED")]),s._v("和"),t("code",[s._v("STOPPED")]),s._v("，您可以通过执行"),t("code",[s._v("START TRIGGER")]),s._v("或者"),t("code",[s._v("STOP TRIGGER")]),s._v("启动或者停止一个触发器。注意，通过"),t("code",[s._v("CREATE TRIGGER")]),s._v("语句注册的触发器默认是"),t("code",[s._v("STARTED")]),s._v("的。")]),s._v(" "),t("h3",{attrs:{id:"注册触发器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注册触发器"}},[s._v("#")]),s._v(" 注册触发器")]),s._v(" "),t("p",[s._v("注册触发器的SQL语法如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("NAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BEFORE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AFTER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FULL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("PATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("CLASSNAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("同时，您还可以通过"),t("code",[s._v("WITH")]),s._v("子句传入任意数量的自定义属性值：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("NAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BEFORE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AFTER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FULL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("PATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("CLASSNAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("注意，"),t("code",[s._v("CLASSNAME")]),s._v("以及属性值中的"),t("code",[s._v("KEY")]),s._v("和"),t("code",[s._v("VALUE")]),s._v("都需要被单引号或者双引号引用起来。")]),s._v(" "),t("h3",{attrs:{id:"卸载触发器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载触发器"}},[s._v("#")]),s._v(" 卸载触发器")]),s._v(" "),t("p",[s._v("卸载触发器的SQL语法如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("NAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"启动触发器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动触发器"}},[s._v("#")]),s._v(" 启动触发器")]),s._v(" "),t("p",[s._v("启动触发器的SQL语法如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("START")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("NAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"停止触发器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止触发器"}},[s._v("#")]),s._v(" 停止触发器")]),s._v(" "),t("p",[s._v("停止触发器的SQL语法如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("STOP "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("NAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"查询所有注册的触发器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询所有注册的触发器"}},[s._v("#")]),s._v(" 查询所有注册的触发器")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" TRIGGERS\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);