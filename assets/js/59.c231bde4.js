(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{617:function(t,e,s){"use strict";s.r(e);var a=s(69),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"command-line-interface-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-line-interface-cli"}},[t._v("#")]),t._v(" Command Line Interface(CLI)")]),t._v(" "),s("h2",{attrs:{id:"outline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outline"}},[t._v("#")]),t._v(" Outline")]),t._v(" "),s("ul",[s("li",[t._v("Command Line Interface(CLI)\n"),s("ul",[s("li",[t._v("Running Cli/Shell")]),t._v(" "),s("li",[t._v("Cli/Shell Parameters")]),t._v(" "),s("li",[t._v("Cli/shell tool with -e parameter")])])])]),t._v(" "),s("p",[t._v("IoTDB provides Cli/shell tools for users to interact with IoTDB server in command lines. This document will show how Cli/shell tool works and what does it parameters mean.")]),t._v(" "),s("blockquote",[s("p",[t._v("Note: In this document, $IOTDB_HOME represents the path of the IoTDB installation directory.")])]),t._v(" "),s("h2",{attrs:{id:"build-cli-from-source-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-cli-from-source-code"}},[t._v("#")]),t._v(" Build cli from source code")]),t._v(" "),s("p",[t._v("Under the root path of incubator-iotdb:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("> mvn clean package -pl cli -am -DskipTests\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v('After build, the IoTDB cli will be at the folder "cli/target/iotdb-cli-{project.version}".')]),t._v(" "),s("h2",{attrs:{id:"running-cli-shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-cli-shell"}},[t._v("#")]),t._v(" Running Cli/Shell")]),t._v(" "),s("p",[t._v("After installation, there is a default user in IoTDB: "),s("code",[t._v("root")]),t._v(", and the\ndefault password is "),s("code",[t._v("root")]),t._v(". Users can use this username to try IoTDB Cli/Shell tool. The cli startup script is the "),s("code",[t._v("start-cli")]),t._v(" file under the $IOTDB_HOME/bin folder. When starting the script, you need to specify the IP and PORT. (Make sure the IoTDB server is running properly when you use Cli/Shell tool to connect it.)")]),t._v(" "),s("p",[t._v("Here is an example where the server is started locally and the user has not changed the running port. The default rpc port is\n6667 "),s("br"),t._v("\nIf you need to connect to the remote server or changes\nthe rpc port number of the server running, set the specific IP and RPC PORT at -h and -p."),s("br"),t._v('\nYou also can set your own environment variable at the front of the start script ("/sbin/start-cli.sh" for linux and "/sbin/start-cli.bat" for windows)')]),t._v(" "),s("p",[t._v("The Linux and MacOS system startup commands are as follows:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("The Windows system startup commands are as follows:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > sbin\\start-cli.bat -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("After using these commands, the cli can be started successfully. The successful status will be as follows:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" _____       _________  ______   ______\n|_   _|     |  _   _  ||_   _ `.|_   _ \\\n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |\n  | | / .'`\\ \\  | |      | |  | | |  __'.\n _| |_| \\__. | _| |_    _| |_.' /_| |__) |\n|_____|'.__.' |_____|  |______.'|_______/  version <version>\n\n\nIoTDB> login successfully\nIoTDB>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("Enter "),s("code",[t._v("quit")]),t._v(" or "),s("code",[t._v("exit")]),t._v(" can exit Cli. The cli will shows "),s("code",[t._v("quit normally")])]),t._v(" "),s("h2",{attrs:{id:"cli-shell-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-shell-parameters"}},[t._v("#")]),t._v(" Cli/Shell Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter name")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Example")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-disableISO8601")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("No parameters")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("If this parameter is set, IoTDB will print the timestamp in digital form")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-disableISO8601")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-h <"),s("code",[t._v("host")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string, no quotation marks")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("The IP address of the IoTDB server")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-h 10.129.187.21")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-help")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("No parameters")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Print help information for IoTDB")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-help")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-p <"),s("code",[t._v("rpcPort")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("The rpc port number of the IoTDB server. IoTDB runs on rpc port 6667 by default")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-p 6667")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-pw <"),s("code",[t._v("password")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string, no quotation marks")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("The password used for IoTDB to connect to the server. If no password is entered, IoTDB will ask for password in Cli command")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-pw root")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-u <"),s("code",[t._v("username")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string, no quotation marks")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("User name used for IoTDB to connect the server")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-u root")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-maxPRC <"),s("code",[t._v("maxPrintRowCount")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Set the maximum number of rows that IoTDB returns")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-maxPRC 10")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-e <"),s("code",[t._v("execute")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("manipulate IoTDB in batches without entering cli input mode")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('-e "show storage group"')])])])]),t._v(" "),s("p",[t._v('Following is a cli command which connects the host with IP\n10.129.187.21, rpc port 6667, username "root", password "root", and prints the timestamp in digital form. The maximum number of lines displayed on the IoTDB command line is 10.')]),t._v(" "),s("p",[t._v("The Linux and MacOS system startup commands are as follows:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > sbin/start-cli.sh -h 10.129.187.21 -p 6667 -u root -pw root -disableISO8601 -maxPRC 10\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("The Windows system startup commands are as follows:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > sbin\\start-cli.bat -h 10.129.187.21 -p 6667 -u root -pw root -disableISO8601 -maxPRC 10\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"note-on-using-the-cli-with-openid-connect-auth-enabled-on-server-side"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#note-on-using-the-cli-with-openid-connect-auth-enabled-on-server-side"}},[t._v("#")]),t._v(" Note on using the CLI with OpenID Connect Auth enabled on Server side")]),t._v(" "),s("p",[t._v("If OIDC is enabled on server side then no username / passwort is needed but a valid Access Token from the OIDC Provider.\nSo as username you use the token and the password has to be empty, e.g.")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('  Shell > sbin/start-cli.sh -h 10.129.187.21 -p 6667 -u {my-access-token} -pw ""\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("How to get the token is dependent on your OpenID Connect setup and not covered here.\nIn the simplest case you can get this via the command line with the "),s("code",[t._v("passwort-grant")]),t._v(".\nFor example, if you use keycloack as OIDC and you have a realm with a client "),s("code",[t._v("iotdb")]),t._v(" defined as public you could use\nthe following "),s("code",[t._v("curl")]),t._v(" command to fetch a token (replace all "),s("code",[t._v("{}")]),t._v(" with appropriate values).")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('curl -X POST "https://{your-keycloack-server}/auth/realms/{your-realm}/protocol/openid-connect/token" \\                                                                                                                       ✔  1613  11:09:38\n -H "Content-Type: application/x-www-form-urlencoded" \\\n -d "username={username}" \\\n -d "password={password}" \\\n -d \'grant_type=password\' \\\n -d "client_id=iotdb"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("The response looks something like")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxMS1XbTBvelE1TzBtUUg4LVNKYXAyWmNONE1tdWNXd25RV0tZeFpKNG93In0.eyJleHAiOjE1OTAzOTgwNzEsImlhdCI6MTU5MDM5Nzc3MSwianRpIjoiNjA0ZmYxMDctN2NiNy00NTRmLWIwYmQtY2M2ZDQwMjFiNGU4IiwiaXNzIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJhMzJlNDcxLWM3NzItNGIzMy04ZGE2LTZmZThhY2RhMDA3MyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImlvdGRiIiwic2Vzc2lvbl9zdGF0ZSI6IjA2MGQyODYyLTE0ZWQtNDJmZS1iYWY3LThkMWY3ODQ2NTdmMSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsibG9jYWxob3N0OjgwODAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJpb3RkYl9hZG1pbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.nwbrJkWdCNjzFrTDwKNuV5h9dDMg5ytRKGOXmFIajpfsbOutJytjWTCB2WpA8E1YI3KM6gU6Jx7cd7u0oPo5syHhfCz119n_wBiDnyTZkFOAPsx0M2z20kvBLN9k36_VfuCMFUeddJjO31MeLTmxB0UKg2VkxdczmzMH3pnalhxqpnWWk3GnrRrhAf2sZog0foH4Ae3Ks0lYtYzaWK_Yo7E4Px42-gJpohy3JevOC44aJ4auzJR1RBj9LUbgcRinkBy0JLi6XXiYznSC2V485CSBHW3sseXn7pSXQADhnmGQrLfFGO5ZljmPO18eFJaimdjvgSChsrlSEmTDDsoo5Q"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expires_in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_expires_in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1800")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhMzZlMGU0NC02MWNmLTQ5NmMtOGRlZi03NTkwNjQ5MzQzMjEifQ.eyJleHAiOjE1OTAzOTk1NzEsImlhdCI6MTU5MDM5Nzc3MSwianRpIjoiNmMxNTBiY2EtYmE5NC00NTgxLWEwODEtYjI2YzhhMmI5YmZmIiwiaXNzIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwiYXVkIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwic3ViIjoiYmEzMmU0NzEtYzc3Mi00YjMzLThkYTYtNmZlOGFjZGEwMDczIiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImlvdGRiIiwic2Vzc2lvbl9zdGF0ZSI6IjA2MGQyODYyLTE0ZWQtNDJmZS1iYWY3LThkMWY3ODQ2NTdmMSIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSJ9.ayNpXdNX28qahodX1zowrMGiUCw2AodlHBQFqr8Ui7c"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bearer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"not-before-policy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"session_state"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"060d2862-14ed-42fe-baf7-8d1f784657f1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scope"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email profile"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("The interesting part here is the access token with the key "),s("code",[t._v("access_token")]),t._v(".\nThis has to be passed as username (with parameter "),s("code",[t._v("-u")]),t._v(") and empty password to the CLI.")]),t._v(" "),s("h2",{attrs:{id:"cli-shell-tool-with-e-parameter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-shell-tool-with-e-parameter"}},[t._v("#")]),t._v(" Cli/shell tool with -e parameter")]),t._v(" "),s("p",[t._v("-e parameter is designed for the Cli/shell tool in the situation where you would like to manipulate IoTDB in batches through scripts. By using the -e parameter, you can operate IoTDB without entering the cli's input mode.")]),t._v(" "),s("p",[t._v("In order to avoid confusion between statements and other parameters, the current situation only supports the -e parameter as the last parameter.")]),t._v(" "),s("p",[t._v("The usage of -e parameter for Cli/shell is as follows:")]),t._v(" "),s("p",[t._v("The Linux and MacOS system commands:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > sbin/start-cli.sh -h {host} -p {rpcPort} -u {user} -pw {password} -e {sql for iotdb}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("The Windows system commands:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > sbin\\start-cli.bat -h {host} -p {rpcPort} -u {user} -pw {password} -e {sql for iotdb}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("In the Windows environment, the SQL statement of the -e parameter needs to use "),s("code",[t._v("``")]),t._v(" to replace "),s("code",[t._v('" "')])]),t._v(" "),s("p",[t._v("In order to better explain the use of -e parameter, take following as an example(On linux system).")]),t._v(" "),s("p",[t._v("Suppose you want to create a storage group root.demo to a newly launched IoTDB, create a timeseries root.demo.s1 and insert three data points into it. With -e parameter, you could write a shell like this:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('# !/bin/bash\n\nhost=127.0.0.1\nrpcPort=6667\nuser=root\npass=root\n\n./sbin/start-cli.sh -h ${host} -p ${rpcPort} -u ${user} -pw ${pass} -e "set storage group to root.demo"\n./sbin/start-cli.sh -h ${host} -p ${rpcPort} -u ${user} -pw ${pass} -e "create timeseries root.demo.s1 WITH DATATYPE=INT32, ENCODING=RLE"\n./sbin/start-cli.sh -h ${host} -p ${rpcPort} -u ${user} -pw ${pass} -e "insert into root.demo(timestamp,s1) values(1,10)"\n./sbin/start-cli.sh -h ${host} -p ${rpcPort} -u ${user} -pw ${pass} -e "insert into root.demo(timestamp,s1) values(2,11)"\n./sbin/start-cli.sh -h ${host} -p ${rpcPort} -u ${user} -pw ${pass} -e "insert into root.demo(timestamp,s1) values(3,12)"\n./sbin/start-cli.sh -h ${host} -p ${rpcPort} -u ${user} -pw ${pass} -e "select s1 from root.demo"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("The print results are shown in the figure, which are consistent with the cli and jdbc operations.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://issues.apache.org/jira/secure/attachment/12976042/12976042_image-2019-07-27-15-47-12-045.png",alt:"img"}})]),t._v(" "),s("p",[t._v("It should be noted that the use of the -e parameter in shell scripts requires attention to the escaping of special characters.")])])}),[],!1,null,null,null);e.default=n.exports}}]);