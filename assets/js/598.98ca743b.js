(window.webpackJsonp=window.webpackJsonp||[]).push([[598],{918:function(e,t,s){"use strict";s.r(t);var i=s(1),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them:")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("To use IoTDB, you need to have:")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("You can download the binary file from:\n"),s("router-link",{attrs:{to:"/Download/"}},[e._v("Here")])],1),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("You can get the released source code from https://iotdb.apache.org/Download/, or from the git repository https://github.com/apache/incubator-iotdb/tree/master\nYou can download the source code from:")]),e._v(" "),e._m(6),s("p",[e._v("Under the root path of incubator-iotdb:")]),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._v(" "),s("p",[e._v("If you would like to build the IoTDB server, you can run the following command under the root path of incubator-iotdb:")]),e._v(" "),e._m(10),s("p",[e._v('After build, the IoTDB server will be at the folder "server/target/iotdb-server-{project.version}".')]),e._v(" "),e._m(11),e._v(" "),s("p",[e._v("You can build and run a IoTDB docker image by following the guide of "),s("router-link",{attrs:{to:"./../3-Server/5-Docker Image.html"}},[e._v("Deployment by Docker")])],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"download"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[this._v("#")]),this._v(" Download")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Installation from source code. If you need to modify the code yourself, you can use this method.")]),this._v(" "),t("li",[this._v("Installation from binary files. Download the binary files from the official website. This is the recommended method, in which you will get a binary released package which is out-of-the-box.(Comming Soon...)")]),this._v(" "),t("li",[this._v("Using Docker：The path to the dockerfile is https://github.com/apache/incubator-iotdb/blob/master/docker/Dockerfile")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Java >= 1.8 (Please make sure the environment path has been set)")]),this._v(" "),t("li",[this._v("Maven >= 3.1 (Optional)")]),this._v(" "),t("li",[this._v('Set the max open files num as 65535 to avoid "too many open files" problem.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Note: If you don't have maven installed, you should replace 'mvn' in the following commands with 'mvnw.sh' or 'mvnw.cmd'.")]),this._v(" "),t("h3",{attrs:{id:"installation-from-binary-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-binary-files"}},[this._v("#")]),this._v(" Installation from  binary files")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation-from-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-source-code"}},[this._v("#")]),this._v(" Installation from source code")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("git clone https://github.com/apache/incubator-iotdb.git\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("> mvn clean package -DskipTests\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Then the binary version (including both server and client) can be found at "),t("strong",[this._v("distribution/target/apache-iotdb-{project.version}-incubating-bin.zip")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('NOTE: Directories "service-rpc/target/generated-sources/thrift" and "server/target/generated-sources/antlr4" need to be added to sources roots to avoid compilation errors in IDE.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("> mvn clean package -pl server -am -DskipTests\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation-by-docker-dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-by-docker-dockerfile"}},[this._v("#")]),this._v(" Installation by Docker (Dockerfile)")])}],!1,null,null,null);t.default=r.exports}}]);