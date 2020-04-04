(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{310:function(t,e,i){},317:function(t,e,i){"use strict";var a=i(310);i.n(a).a},326:function(t,e,i){"use strict";i.r(e);var a={name:"Home",data:function(){return{msg:"Welcome to Home Page",imgBlock:[{src:"/img/home-Slide1.png",des:"High-end equipment",detail:" In high-end manufacturing, there are many devices equipped with sensors collecting working status data.Meteorological stations, wind turbines are common high-end devices.These devices, if supports Java or Go (in developing), can run TsFile to store data locally.In this way, TsFile can provide the ability to save data with high throughput, high compression ratio, and millisecond query.Together with TsFile-Sync tool, TsFiles can be transmitted to the data center."},{src:"/img/home-Slide2.png",des:"Local Controller",detail:"In the scene of factories, there are tens of devices under LAN network. IoTDB can be installed on a local controller server in the factory to receive data from those devices. The local controller server (normal PC or workstation) with IoTDB can provide the ability to persist data and query data with SQL-like interface. In addition, with TsFile-Sync tool, TsFiles on the local controller can be transmitted to the data center equipped with IoTDB instance in the cloud."},{src:"/img/home-Slide3.png",des:"Cloud Data Management",detail:"In the scene of high-speed network (Internet of Vehicles, etc.), a car installed sensors on it can collect monitoring information(driving status, etc.) of itself at a certain frequency. Usually, these automotive devices have limited hardware configurations and are difficult to carry complex applications. Lightweight IoTDB(IoTDB Client) came into being. With JDBC API, it can make data sent by narrow-band IoT or 4G possible. In this way, devices and cloud are connected together."}],isHover:!1}},methods:{addRoutes1:function(){this.$router.push("/Download/")},addRoutes2:function(){this.$router.push("/UserGuide/V0.9.x/1-Overview/1-What%20is%20IoTDB.html")}}},n=(i(317),i(1)),o=Object(n.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{background:"linear-gradient(top,#A2A2A2,#fff)"}},[i("gh-btns-fork",{attrs:{slug:"vuejs/vue","show-count":""}}),t._v(" "),i("div",{staticStyle:{width:"100%",margin:"0 auto",position:"relative",height:"480px","text-align":"center"}},[i("h2",{staticClass:"h2"},[t._v("Apache IoTDB")]),t._v(" "),i("p",{staticStyle:{"font-size":"20px","line-height":"23px",margin:"10px 0 20px 0","font-family":"'Arimo', sans-serif","text-transform":"uppercase","font-weight":"700","letter-spacing":"0.03em",color:"#777","text-align":"center"}},[t._v("Database for Internet of Things")]),t._v(" "),i("p",{staticStyle:{"font-size":"20px",margin:"50px 0 10px 0","text-align":"justify!important"}},[t._v("\n      Apache IoTDB (incubating) (Database for Internet of Things) is an integrated data\n      management engine designed for timeseries data. It provides users with services for\n      data collection, storage and analysis. Due to its light-weight architecture, high\n      performance and rich feature set together with its deep integration with Apache\n      Hadoop and Spark, Apache IoTDB (incubating) can meet the requirements of massive\n      data storage, high-speed data ingestion and complex data analysis in the IoT\n      industrial fields.\n    ")]),t._v(" "),i("el-row",{staticStyle:{"margin-top":"40px","text-align":"center"}},[i("el-button",{staticStyle:{width:"220px","font-size":"18px","letter-spacing":"0.03em","font-family":"'Arimo', sans-serif"},attrs:{type:"warning",round:""},on:{click:t.addRoutes1}},[t._v("Download")]),t._v(" "),i("el-button",{staticStyle:{width:"220px","font-size":"18px","letter-spacing":"0.03em","font-family":"'Arimo', sans-serif"},attrs:{type:"info",round:""},on:{click:t.addRoutes2}},[t._v("QuickStart")])],1)],1),t._v(" "),i("p",{staticClass:"home-title",staticStyle:{"font-size":"50px"}},[t._v("Scenarios")]),t._v(" "),i("div",{staticClass:"block"},[i("el-carousel",{attrs:{trigger:"click",height:"700px"}},t._l(t.imgBlock,(function(e){return i("el-carousel-item",{key:e,staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:e.src,height:"500px"}}),t._v(" "),i("h3",{staticStyle:{"font-size":"30px",color:"#fcac45","text-align":"center","line-height":"0px"}},[t._v(t._s(e.des))]),t._v(" "),i("p",{staticStyle:{"font-size":"18px",padding:"10px","line-height":"22px","text-align":"justify!important","font-weight":"bold"}},[t._v(t._s(e.detail))])])})),1)],1),t._v(" "),i("p",{staticClass:"home-title",staticStyle:{"font-size":"50px"}},[t._v("Main Features")]),t._v(" "),i("el-row",{staticStyle:{"margin-top":"50px"},attrs:{gutter:20}},[i("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[i("el-popover",{attrs:{placement:"top-start",title:"High-throughput read and write",width:"350",trigger:"hover",content:"Apache IoTDB (incubating) can support high-speed write access for millions of low-power and intelligently networked devices. It also provides lightning read access for retrieving data."}},[i("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[i("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon1.png"}}),t._v(" "),i("p",[t._v("High-throughput read and write")])])],1)],1),t._v(" "),i("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[i("el-popover",{attrs:{placement:"top-start",title:"Efficient directory structure",width:"350",trigger:"hover",content:"Apache IoTDB (incubating) can efficiently organize complex data structure from IoT devices and large size of timeseries data with fuzzy searching strategy for complex directory of timeseries data."}},[i("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[i("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon2.png"}}),t._v(" "),i("p",[t._v(" Efficient directory structure")])])],1)],1),t._v(" "),i("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[i("el-popover",{attrs:{placement:"top-start",title:"Rich query semantics",width:"400",trigger:"hover",content:"Apache IoTDB (incubating) can support time alignment for timeseries data across devices and sensors, computation in timeseries field and abundant aggregation functions in time dimension."}},[i("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[i("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon3.png"}}),t._v(" "),i("p",[t._v("Rich query semantics")])])],1)],1)],1),t._v(" "),i("el-row",{staticStyle:{"margin-top":"100px",height:"300px"},attrs:{gutter:20}},[i("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[i("el-popover",{attrs:{placement:"top-start",title:"Low cost on hardware",width:"400",trigger:"hover",content:"Apache IoTDB (incubating) can reach a high compression ratio of disk storage (it costs less than $0.23 to store 1GB of data on hard disk)."}},[i("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[i("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon4.png"}}),t._v(" "),i("p",[t._v("Low cost on hardware")])])],1)],1),t._v(" "),i("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[i("el-popover",{attrs:{placement:"top-start",title:"Flexible deployment",width:"400",trigger:"hover",content:"Apache IoTDB (incubating) can provide users one-click installation tool on the cloud, terminal tool on desktop and the bridge tool between cloud platform and on premise machine (Data Synchronization Tool)."}},[i("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[i("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon5.png"}}),t._v(" "),i("p",[t._v("Flexible deployment")])])],1)],1),t._v(" "),i("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[i("el-popover",{attrs:{placement:"top-start",title:"Intense integration with Open Source Ecosystem",width:"400",trigger:"hover",content:"Apache IoTDB (incubating) can support analysis ecosystems, for example, Hadoop, Spark, and Grafana as visualization tool."}},[i("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[i("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon6.png"}}),t._v(" "),i("p",{staticStyle:{"line-height":"5px"}},[t._v("Intense integration with ")]),t._v(" "),i("p",{staticStyle:{"line-height":"5px"}},[t._v("Open Source Ecosystem")])])],1)],1)],1)],1)}),[],!1,null,"58c2020a",null);e.default=o.exports}}]);