(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{488:function(e,t,a){"use strict";a.r(t);var o=a(1),n=Object(o.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"scenario"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenario"}},[e._v("#")]),e._v(" Scenario")]),e._v(" "),a("h2",{attrs:{id:"scenario-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenario-1"}},[e._v("#")]),e._v(" Scenario 1")]),e._v(" "),a("p",[e._v("A company uses surface mount technology (SMT) to produce chips: it is necessary to first print solder paste on the joints of the chip, then place the components on the solder paste, and then melt the solder paste by heating and cool it. Finally, the components are soldered to the chip.")]),e._v(" "),a("p",[e._v("The above process uses an automated production line. In order to ensure the quality of the product, after printing the solder paste, the quality of the solder paste printing needs to be evaluated by optical equipment. The volume (v), height (h), area (a), horizontal offset (px), and vertical offset (py) of the solder paste on each joint are measured by a three-dimensional solder paste printing (SPI) device.")]),e._v(" "),a("p",[e._v("In order to improve the quality of the printing, it is necessary for the company to store the metrics of the solder joints on each chip for subsequent analysis based on these data.")]),e._v(" "),a("p",[e._v("At this point, the data can be stored using TsFile component, TsFileSync tool, and Hadoop/Spark integration component in the IoTDB suite.That is, each time a new chip is printed, a data is written on the SPI device using the SDK, which ultimately forms a TsFile. Through the TsFileSync tool, the generated TsFile will be synchronized to the data center according to certain rules (such as daily) and analyzed by data analysts tools.")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51579014-695ef980-1efa-11e9-8cbc-e9e7ee4fa0d8.png"}}),e._v(" "),a("p",[e._v("In this scenario, only TsFile and TsFileSync are required to be deployed on a PC, and a Hadoop/Spark cluster is required. The schematic diagram is shown in Figure 1.2. Figure 1.3 shows the architecture at this time.")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51579026-77ad1580-1efa-11e9-8345-564b22d70286.jpg"}}),e._v(" "),a("h2",{attrs:{id:"scenario-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenario-2"}},[e._v("#")]),e._v(" Scenario 2")]),e._v(" "),a("p",[e._v("A company has several wind turbines which are installed hundreds of sensors on each generator to collect information such as the working status of the generator and the wind speed in the working environment.")]),e._v(" "),a("p",[e._v("In order to ensure the normal operation of the turbines and timely monitoring and analysis of the turbines, the company needs to collect these sensor data, perform partial calculation and analysis in the turbines working environment, and upload the original data collected to the data center.")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51579033-7ed42380-1efa-11e9-889f-fb4180291a9e.png"}}),e._v(" "),a("p",[e._v("In this situation, IoTDB, TsFileSync tools, and Hadoop/Spark integration components in the IoTDB suite can be used. A PC needs to be deployed with IoTDB and TsFileSync tools installed to support reading and writing data, local computing and analysis, and uploading data to the data center. In addition, Hadoop/Spark clusters need to be deployed for data storage and analysis on the data center side. As shown in Figure 1.4. Figure 1.5 shows the architecture at this time.")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51579064-8f849980-1efa-11e9-8cd6-a7339cd0540f.jpg"}}),e._v(" "),a("h2",{attrs:{id:"scenario-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenario-3"}},[e._v("#")]),e._v(" Scenario 3")]),e._v(" "),a("p",[e._v("A factory has a variety of robotic equipment within the plant area. These robotic equipment have limited hardware and are difficult to carry complex applications.")]),e._v(" "),a("p",[e._v("A variety of sensors are installed on each robotic device to monitor the robot's operating status, temperature, and other information. Due to the network environment of the factory, the robots inside the factory are all within the LAN of the factory and cannot connect to the external network. But there will be several servers in the factory that can connect directly to the external public network.")]),e._v(" "),a("p",[e._v("In order to ensure that the data of the robot can be monitored and analyzed in time, the company needs to collect the information of these robot sensors, send them to the server that can connect to the external network, and then upload the original data information to the data center for complex calculation and analysis.")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51579080-96aba780-1efa-11e9-87ac-940c45b19dd7.jpg"}}),e._v(" "),a("p",[e._v("At this point, IoTDB, IoTDB-CLI tools, TsFileSync tools, and Hadoop/Spark integration components in the IoTDB suite can be used. IoTDB-CLI tool is installed on the robot and each of them is connected to the LAN of the factory. When sensors generate real-time data, the data will be uploaded to the server in the factory. The IoTDB server and TsFileSync is installed on the server connected to the external network. Once triggered, the data on the server will be upload to the data center. In addition, Hadoop/Spark clusters need to be deployed for data storage and analysis on the data center side. As shown in Figure 1.6. Figure 1.7 shows the architecture at this time.")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51579085-9dd2b580-1efa-11e9-97b9-f56bc8d342b0.jpg"}}),e._v(" "),a("h2",{attrs:{id:"scenario-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenario-4"}},[e._v("#")]),e._v(" Scenario 4")]),e._v(" "),a("p",[e._v("A car company installed sensors on its cars to collect monitoring information such as the driving status of the vehicle. These automotive devices have limited hardware configurations and are difficult to carry complex applications. Cars with sensors can be connected to each other or send data via narrow-band IoT.")]),e._v(" "),a("p",[e._v("In order to receive the IoT data collected by the car sensor in real time, the company needs to send the sensor data to the data center in real time through the narrowband IoT while the vehicle is running. Thus, they can perform complex calculations and analysis on the server in the data center.")]),e._v(" "),a("p",[e._v("At this point, IoTDB, IoTDB-CLI, and Hadoop/Spark integration components in the IoTDB suite can be used. IoTDB-CLI tool is installed on each car and use IoTDB-JDBC tool to send data directly back to the server in the data center.")]),e._v(" "),a("p",[e._v("In addition, Hadoop/Spark clusters need to be deployed for data storage and analysis on the data center side. As shown in Figure 1.8.")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51579095-a4f9c380-1efa-11e9-9f95-17165ec55568.jpg"}})])}],!1,null,null,null);t.default=n.exports}}]);