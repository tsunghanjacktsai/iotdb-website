(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{671:function(e,s,a){"use strict";a.r(s);var n=a(80),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"c-native-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-native-api"}},[e._v("#")]),e._v(" C++ Native API")]),e._v(" "),a("h3",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),a("ul",[a("li",[e._v("Java 8+")]),e._v(" "),a("li",[e._v("Maven 3.5+")]),e._v(" "),a("li",[e._v("Flex")]),e._v(" "),a("li",[e._v("Bison 2.7+")]),e._v(" "),a("li",[e._v("Boost 1.56+")]),e._v(" "),a("li",[e._v("OpenSSL 1.0+")]),e._v(" "),a("li",[e._v("GCC 5.5.0+")])]),e._v(" "),a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v('The compilation of CPP client requires the module "compile-tools" to be built first.\n"compile-tools" is mainly responsible for building Thrift libraries locally.')]),e._v(" "),a("h4",{attrs:{id:"build-thrift-on-macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-thrift-on-macos"}},[e._v("#")]),e._v(" Build Thrift on MacOS")]),e._v(" "),a("ul",[a("li",[e._v("Bison")])]),e._v(" "),a("p",[e._v("Bison 2.3 is preinstalled on OSX, but this version is too low.")]),e._v(" "),a("p",[e._v("When building Thrift with Bison 2.3, the following error would pop out:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("invalid directive: "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'%code'")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("For such case, please update "),a("code",[e._v("Bison")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("brew install bison\t\t\nbrew link bison --force\t\t\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Then, you need to tell the OS where the new bison is.")]),e._v(" "),a("p",[e._v("For Bash users:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'export PATH=\"/usr/local/opt/bison/bin:$PATH\"'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" ~/.bash_profile\t\t\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("For zsh users:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'export PATH=\"/usr/local/opt/bison/bin:$PATH\"'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" ~/.zshrc\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[e._v("Boost")])]),e._v(" "),a("p",[e._v("Please make sure a relative new version of Boost is ready on your machine.")]),e._v(" "),a("p",[e._v("If no Boost available, install the latest version of Boost:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" boost\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" boost\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("ul",[a("li",[e._v("OpenSSL")])]),e._v(" "),a("p",[e._v('Make sure the Openssl libraries has been install on your Mac.\nThe default Openssl include file search path is "/usr/local/opt/openssl/include".\nIf Openssl header files can not be found when building Thrift, please add option')]),e._v(" "),a("p",[a("code",[e._v('-Dopenssl.include.dir=""')])]),e._v(" "),a("p",[e._v("to specify the OpenSSL installation directory on your Mac.")]),e._v(" "),a("h4",{attrs:{id:"build-thrift-on-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-thrift-on-linux"}},[e._v("#")]),e._v(" Build Thrift on Linux")]),e._v(" "),a("p",[e._v("Ubuntu 20:")]),e._v(" "),a("p",[e._v("To install all dependencies, run:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" gcc-9 g++-9 libstdc++-9-dev bison flex libboost-all-dev libssl-dev zlib1g-dev\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("CentOS 7.x:")]),e._v(" "),a("p",[e._v("In CentOS 7.x, Some packages can be installed using Yum:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" bison flex openssl-devel\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The version of gcc and boost installed by yum is too low, therefore you should compile or download these binary packages by yourself.")]),e._v(" "),a("h4",{attrs:{id:"build-thrift-on-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-thrift-on-windows"}},[e._v("#")]),e._v(" Build Thrift on Windows")]),e._v(" "),a("ul",[a("li",[e._v("building environment")])]),e._v(" "),a("p",[e._v("Make sure a complete Windows C++ building environment is prepared on your machine.\nMSVC, MinGW... are supported.")]),e._v(" "),a("p",[e._v("If you are using MS Visual Studio, remember to install Visual Studio C/C++ IDE and compiler(supporting CMake, Clang, MinGW).")]),e._v(" "),a("ul",[a("li",[e._v("CMake")])]),e._v(" "),a("p",[e._v("For CMake, please download from the official website: https://cmake.org/download/")]),e._v(" "),a("p",[e._v("There is a long list of supported Cmake generators on Windows environment.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  Visual Studio 16 2019        = Generates Visual Studio 2019 project files.\n                                 Use -A option to specify architecture.\n  Visual Studio 15 2017 [arch] = Generates Visual Studio 2017 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 14 2015 [arch] = Generates Visual Studio 2015 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 12 2013 [arch] = Generates Visual Studio 2013 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 11 2012 [arch] = Generates Visual Studio 2012 project files.\n                                 Optional [arch] can be "Win64" or "ARM".\n  Visual Studio 10 2010 [arch] = Generates Visual Studio 2010 project files.\n                                 Optional [arch] can be "Win64" or "IA64".\n  Visual Studio 9 2008 [arch]  = Generates Visual Studio 2008 project files.\n                                 Optional [arch] can be "Win64" or "IA64".\n  Borland Makefiles            = Generates Borland makefiles.\n* NMake Makefiles              = Generates NMake makefiles.\n  NMake Makefiles JOM          = Generates JOM makefiles.\n  MSYS Makefiles               = Generates MSYS makefiles.\n  MinGW Makefiles              = Generates a make file for use with\n                                 mingw32-make.\n  Unix Makefiles               = Generates standard UNIX makefiles.\n  Green Hills MULTI            = Generates Green Hills MULTI files\n                                 (experimental, work-in-progress).\n  Ninja                        = Generates build.ninja files.\n  Ninja Multi-Config           = Generates build-<Config>.ninja files.\n  Watcom WMake                 = Generates Watcom WMake makefiles.\n  CodeBlocks - MinGW Makefiles = Generates CodeBlocks project files.\n  CodeBlocks - NMake Makefiles = Generates CodeBlocks project files.\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br")])]),a("p",[e._v("the list is available via command: "),a("code",[e._v("cmake --help")])]),e._v(" "),a("p",[e._v('When building client-cpp project, use -Dcmake.generator="" option to specify a Cmake generator.\nE.g., '),a("code",[e._v('mvn package -Dcmake.generator="Visual Studio 15 2017 [arch]"')])]),e._v(" "),a("ul",[a("li",[e._v("Flex and Bison")])]),e._v(" "),a("p",[e._v("Windows Flex and Bison could be downloaded from SourceForge: https://sourceforge.net/projects/winflexbison/")]),e._v(" "),a("p",[e._v('After downloaded, please rename the executables to flex.exe and bison.exe and add them to "PATH" environment variables.')]),e._v(" "),a("ul",[a("li",[e._v("Boost")])]),e._v(" "),a("p",[e._v("For Boost, please download from the official website: https://www.boost.org/users/download/")]),e._v(" "),a("p",[e._v("Then build Boost by executing bootstrap.bat and b2.exe.")]),e._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[e._v("bootstrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("bat\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\\b2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exe\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("To help CMake find your Boost libraries on windows, you should set "),a("code",[e._v("-Dboost.include.dir=${your boost header folder} -Dboost.library.dir=${your boost lib (stage) folder}")]),e._v("\nto your mvn build command.")]),e._v(" "),a("ul",[a("li",[e._v("openssl")])]),e._v(" "),a("p",[e._v("For openssl , download Source code from the official website: https://www.openssl.org/source/")]),e._v(" "),a("p",[e._v("download binary files from http://slproweb.com/products/Win32OpenSSL.html")]),e._v(" "),a("ul",[a("li",[e._v("Add Path")])]),e._v(" "),a("p",[e._v('Before compile，make sure cmake,flex,bison and openssl already add to "PATH" environment variables.')]),e._v(" "),a("h4",{attrs:{id:"compile-and-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-and-test"}},[e._v("#")]),e._v(" Compile and Test")]),e._v(" "),a("p",[e._v('To compile cpp client, add "-P compile-cpp" option to maven build command.')]),e._v(" "),a("p",[e._v('The compiling requires the module "compile-tools" to be built first.')]),e._v(" "),a("ul",[a("li",[e._v("On Mac and Linux, the command to compile cpp-client is as follows：")])]),e._v(" "),a("p",[a("code",[e._v("mvn package -P compile-cpp -pl example/client-cpp-example -am -DskipTest")])]),e._v(" "),a("ul",[a("li",[e._v("On Windwos , Compile cpp-client")])]),e._v(" "),a("p",[e._v("please install Boost first and add following Maven settings before compile on Windows:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("-Dboost.include.dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${your boost header folder}")]),e._v(" -Dboost.library.dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${your boost lib (stage) folder}")]),e._v("` \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Add generator for cmake:\n"),a("code",[e._v('-Dcmake.generator="Visual Studio 15 2017 [arch]"')])]),e._v(" "),a("p",[e._v("The complete command:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("mvn package -P compile-cpp -pl client-cpp,server,example/client-cpp-example -am \n-D"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"boost.include.dir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"D:'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[e._v("\\b")]),e._v('oost_1_75_0"')]),e._v(" -D"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"boost.library.dir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"D:'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[e._v("\\b")]),e._v('oost_1_75_0\\stage\\lib"')]),e._v(" -DskipTests\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v('If the compilation finishes successfully, the packaged zip file will be placed under\n"client-cpp/target/client-cpp-0.13.0-SNAPSHOT-cpp-${os}.zip".')]),e._v(" "),a("p",[e._v("On Mac machines, the hierarchy of the package should look like this:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n+-- client\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   +-- include\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("       +-- Session.h\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("       +-- TSIService.h\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("       +-- rpc_types.h\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("       +-- rpc_constants.h\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("       +-- thrift\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("           +-- thrift_headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   +-- lib\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("       +-- libiotdb_session.dylib\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("h3",{attrs:{id:"q-a"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[e._v("#")]),e._v(" Q&A")]),e._v(" "),a("h4",{attrs:{id:"on-mac"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-mac"}},[e._v("#")]),e._v(" on Mac")]),e._v(" "),a("p",[e._v("If errors occur when compiling thrift source code, try to downgrade your xcode-commandline from 12 to 11.5")]),e._v(" "),a("p",[e._v("see https://stackoverflow.com/questions/63592445/ld-unsupported-tapi-file-type-tapi-tbd-in-yaml-file/65518087#65518087")]),e._v(" "),a("h4",{attrs:{id:"on-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-windows"}},[e._v("#")]),e._v(" on Windows")]),e._v(" "),a("p",[e._v('When Building Thrift and downloading packages via "wget", a possible annoying issue may occur with\nerror message looks like:')]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("Failed to delete cached "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Administrator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v(".m2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("repository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v(".cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("download-maven-plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("index.ser\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Possible fixes:")]),e._v(" "),a("ul",[a("li",[e._v('Try to delete the ".m2\\repository\\.cache" directory and try again.')]),e._v(" "),a("li",[e._v('Add "<skipCache>true</skipCache>" configuration to the download-maven-plugin maven phase that complains this error.')])])])}),[],!1,null,null,null);s.default=t.exports}}]);