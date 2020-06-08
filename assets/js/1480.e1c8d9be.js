(window.webpackJsonp=window.webpackJsonp||[]).push([[1480],{2052:function(s,e,a){"use strict";a.r(e);var n=a(71),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("开始之前，应先安装maven。 看到"),a("a",{attrs:{href:"https://maven.apache.org/install.html"}},[s._v("如何安装Maven")])]),s._v(" "),a("p",[s._v("在您自己的项目中有两种使用TsFile的方法。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("用作 jars:")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("编译源代码并构建为 jars")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git clone https://github.com/apache/incubator-iotdb.git\ncd tsfile/\nsh package.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("然后，所有jars都可以放在名为 "),a("code",[s._v("lib/")]),s._v(". 导入"),a("code",[s._v("lib/tsfile-0.8.2-jar-with-dependencies.jar")]),s._v(" 到您的项目。")])])])]),s._v(" "),a("li",[a("p",[s._v("用作Maven依赖项：")]),s._v(" "),a("p",[s._v("编译源代码并通过三个步骤将其部署到本地存储库：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("获取源代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git clone https://github.com/apache/incubator-iotdb.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("编译源代码并部署")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd tsfile/\nmvn clean install -Dmaven.test.skip=true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("在项目中添加依赖项：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" <dependency>\n   <groupId>org.apache.iotdb</groupId>\n   <artifactId>tsfile</artifactId>\n   <version>0.8.2</version>\n </dependency>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])]),s._v(" "),a("p",[s._v("或者，您可以从官方Maven存储库下载依赖项：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("第一,找你的maven "),a("code",[s._v("settings.xml")]),s._v("在路径上： "),a("code",[s._v("${username}\\.m2\\settings.xml")]),s._v("\n, 加上这个 "),a("code",[s._v("<profile>")]),s._v(" 至"),a("code",[s._v("<profiles>")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  <profile>\n       <id>allow-snapshots</id>\n          <activation><activeByDefault>true</activeByDefault></activation>\n       <repositories>\n         <repository>  \n            <id>apache.snapshots</id>\n            <name>Apache Development Snapshot Repository</name>\n            <url>https://repository.apache.org/content/repositories/snapshots/</url>\n            <releases>\n                <enabled>false</enabled>\n            </releases>\n            <snapshots>\n                <enabled>true</enabled>\n            </snapshots>\n          </repository>\n       </repositories>\n     </profile>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("然后将依赖项添加到您的项目中：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" <dependency>\n   <groupId>org.apache.iotdb</groupId>\n   <artifactId>tsfile</artifactId>\n   <version>0.8.2</version>\n </dependency>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])])])])])}),[],!1,null,null,null);e.default=t.exports}}]);