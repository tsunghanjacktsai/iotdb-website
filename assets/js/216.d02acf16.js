(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{789:function(e,t,s){"use strict";s.r(t);var n=s(71),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[s("strong",[e._v("NOTICE: CURRENT IoTDB CLUSTER IS FOR TESTING NOW!\nPLEASE BE DELIBERATE IF YOU RUN IT IN PRODUCT ENVIRONMENT.")])]),e._v(" "),s("h2",{attrs:{id:"example-of-pseudo-distributed-scaffolding-for-3-nodes-and-3-replicas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-of-pseudo-distributed-scaffolding-for-3-nodes-and-3-replicas"}},[e._v("#")]),e._v(" Example of pseudo-distributed scaffolding for 3 nodes and 3 replicas")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mvn clean package -DskipTests\nchmod -R 777 ./cluster/target/\nnohup ./cluster/target/iotdb-cluster-0.12.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node1conf/ >/dev/null 2>&1 &\nnohup ./cluster/target/iotdb-cluster-0.12.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node2conf/ >/dev/null 2>&1 &\nnohup ./cluster/target/iotdb-cluster-0.12.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node3conf/ >/dev/null 2>&1 &\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h2",{attrs:{id:"example-of-distributed-scaffolding-for-3-nodes-and-3-replicas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-of-distributed-scaffolding-for-3-nodes-and-3-replicas"}},[e._v("#")]),e._v(" Example of distributed scaffolding for 3 nodes and 3 replicas")]),e._v(" "),s("p",[e._v("Suppose we need to deploy the distributed IoTDB on three physical nodes, A, B, and C, whose public network IP is a_public_IP, b_public_IP, and c_public_IP, and private network IP is a_private_IP, b_private_IP, and c_private_IP.\nNote: If there is no public network IP or private network IP, both can be set to the same, just need to ensure that the client can access the server.")]),e._v(" "),s("p",[e._v("The operation steps are as follows:")]),e._v(" "),s("ol",[s("li",[e._v("Make sure ports 6667, 9003, 9004, 40010, 40011 and 31999 are open on all three nodes.")]),e._v(" "),s("li",[e._v("Use 'mvn clean package -pl cluster -am -DskipTests' to compile the distributed module.")]),e._v(" "),s("li",[e._v("Send the generated package (iotdb-cluster-0.12.0-SNAPSHOT) to all servers.")]),e._v(" "),s("li",[e._v('Configure all nodes\' seed_nodes in conf/iotdb-cluster.properties as "A_private_ip:9003,B_private_ip:9003,C_private_ip:9003"')]),e._v(" "),s("li",[e._v("Configure the internal_ip in conf/iotdb-cluster.properties to be the private_ip of each node.")]),e._v(" "),s("li",[e._v("Configure rpc_address in conf/iotdb-engine.properties to be the public_ip of each node.")]),e._v(" "),s("li",[e._v("Run sh sbin/start-node.sh on each of the three nodes (or run in the background).")])])])}),[],!1,null,null,null);t.default=a.exports}}]);