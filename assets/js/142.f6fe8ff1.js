(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{466:function(e,t,s){"use strict";s.r(t);var a=s(1),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("IoTDB provides users with account privilege management operations, so as to ensure data security.")]),e._v(" "),s("p",[e._v("We will show you basic user privilege management operations through the following specific examples. Detailed SQL syntax and usage details can be found in "),s("router-link",{attrs:{to:"/document/master/UserGuide/5-Operation Manual/4-SQL Reference.html"}},[e._v("SQL Documentation")]),e._v(". At the same time, in the JAVA programming environment, you can use the "),s("router-link",{attrs:{to:"/document/master/UserGuide/4-Client/3-Programming - JDBC.html"}},[e._v("Java JDBC")]),e._v(" to execute privilege management statements in a single or batch mode.")],1),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("The user is the legal user of the database. A user corresponds to a unique username and has a password as a means of authentication. Before using a database, a person must first provide a legitimate username and password to make himself/herself a user.")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("The database provides a variety of operations, and not all users can perform all operations. If a user can perform an operation, the user is said to have the privilege to perform the operation. privileges can be divided into data management privilege (such as adding, deleting and modifying data) and authority management privilege (such as creation and deletion of users and roles, granting and revoking of privileges, etc.). Data management privilege often needs a path to limit its effective range, which is a subtree rooted at the path's corresponding node.")]),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("A role is a set of privileges and has a unique role name as an identifier. A user usually corresponds to a real identity (such as a traffic dispatcher), while a real identity may correspond to multiple users. These users with the same real identity tend to have the same privileges. Roles are abstractions that can unify the management of such privileges.")]),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("There is a default user in IoTDB after the initial installation: root, and the default password is root. This user is an administrator user, who cannot be deleted and has all the privileges. Neither can new privileges be granted to the root user nor can privileges owned by the root user be deleted.")]),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("According to the "),s("a",{attrs:{href:"https://raw.githubusercontent.com/apache/incubator-iotdb/master/docs/Documentation/OtherMaterial-Sample%20Data.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("sample data"),s("OutboundLink")],1),e._v(", the sample data of IoTDB may belong to different power generation groups such as ln, sgcc, etc. Different power generation groups do not want others to obtain their own database data, so we need to have data privilege isolated at the group layer.")]),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("We can create two users for ln and sgcc groups, named ln_write_user and sgcc_write_user, with both passwords being write_pwd. The SQL statement is:")]),e._v(" "),e._m(8),s("p",[e._v("Then use the following SQL statement to show the user:")]),e._v(" "),e._m(9),s("p",[e._v("As can be seen from the result shown below, the two users have been created:")]),e._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51578263-e2a91d00-1ef7-11e9-94e8-28819b6fea87.jpg"}})]),e._v(" "),e._m(10),e._v(" "),s("p",[e._v("At this point, although two users have been created, they do not have any privileges, so they can not operate on the database. For example, we use ln_write_user to write data in the database, the SQL statement is:")]),e._v(" "),e._m(11),s("p",[e._v("The SQL statement will not be executed and the corresponding error prompt is given as follows:")]),e._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51597609-9af5b600-1f36-11e9-9460-8ab185eb4735.png"}})]),e._v(" "),s("p",[e._v("Now, we grant the two users write privileges to the corresponding storage groups, and try to write data again. The SQL statement is:")]),e._v(" "),e._m(12),s("p",[e._v("The execution result is as follows:\n"),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51578942-33ba1080-1efa-11e9-891c-09d69791aff1.jpg"}})])],1),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),s("p",[e._v("A Role is a set of privileges, and privileges and roles are both attributes of users. That is, a role can have several privileges and a user can have several roles and privileges (called the user's own privileges).")]),e._v(" "),s("p",[e._v("At present, there is no conflicting privilege in IoTDB, so the real privileges of a user is the union of the user's own privileges and the privileges of the user's roles. That is to say, to determine whether a user can perform an operation, it depends on whether one of the user's own privileges or the privileges of the user's roles permits the operation. The user's own privileges and privileges of the user's roles may overlap, but it does not matter.")]),e._v(" "),s("p",[e._v("It should be noted that if users have a privilege (corresponding to operation A) themselves and their roles contain the same privilege, then revoking the privilege from the users themselves alone can not prohibit the users from performing operation A, since it is necessary to revoke the privilege from the role, or revoke the role from the user. Similarly, revoking the privilege from the users's roles alone can not prohibit the users from performing operation A.")]),e._v(" "),s("p",[e._v("At the same time, changes to roles are immediately reflected on all users who own the roles. For example, adding certain privileges to roles will immediately give all users who own the roles corresponding privileges, and deleting certain privileges will also deprive the corresponding users of the privileges (unless the users themselves have the privileges).")]),e._v(" "),e._m(15),e._v(" "),s("center",[e._v("**List of privileges Included in the System**\n"),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[e._v("privilege Name")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Interpretation")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("SET_STORAGE_GROUP")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("create timeseries; set storage groups; path dependent")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("INSERT_TIMESERIES")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("insert data; path dependent")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("UPDATE_TIMESERIES")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("update data; path dependent")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("READ_TIMESERIES")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("query data; path dependent")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("DELETE_TIMESERIES")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("delete data or timeseries; path dependent")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("CREATE_USER")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("create users; path independent")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("DELETE_USER")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("delete users; path independent")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("MODIFY_PASSWORD")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("modify passwords for all users; path independent; (Those who do not have this privilege can still change their own asswords. )")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("LIST_USER")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("list all users; list a user's privileges; list a user's roles with three kinds of operation privileges; path independent")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("GRANT_USER_PRIVILEGE")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("grant user privileges; path independent")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("REVOKE_USER_PRIVILEGE")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("revoke user privileges; path independent")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("GRANT_USER_ROLE")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("grant user roles; path independent")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("REVOKE_USER_ROLE")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("revoke user roles; path independent")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("CREATE_ROLE")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("create roles; path independent")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("DELETE_ROLE")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("delete roles; path independent")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("LIST_ROLE")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("list all roles; list the privileges of a role; list the three kinds of operation privileges of all users owning a role; path independent")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("GRANT_ROLE_PRIVILEGE")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("grant role privileges; path independent")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("REVOKE_ROLE_PRIVILEGE")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("revoke role privileges; path independent")])])])])]),e._v(" "),e._m(16),e._v(" "),s("p",[e._v("IoTDB specifies that the character length of a username should not be less than 4, and the username cannot contain spaces.")]),e._v(" "),e._m(17),e._v(" "),s("p",[e._v("IoTDB specifies that the character length of a password should not be less than 4, and the password cannot contain spaces. The password is encrypted with MD5.")]),e._v(" "),e._m(18),e._v(" "),s("p",[e._v("IoTDB specifies that the character length of a role name should not be less than 4, and the role name cannot contain spaces.")])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"account-management-statements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#account-management-statements"}},[this._v("#")]),this._v(" Account Management Statements")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"basic-concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-concepts"}},[this._v("#")]),this._v(" Basic Concepts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[this._v("#")]),this._v(" User")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"privilege"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#privilege"}},[this._v("#")]),this._v(" Privilege")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"role"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#role"}},[this._v("#")]),this._v(" Role")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"default-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-user"}},[this._v("#")]),this._v(" Default User")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"privilege-management-operation-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#privilege-management-operation-examples"}},[this._v("#")]),this._v(" Privilege Management Operation Examples")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"create-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-user"}},[this._v("#")]),this._v(" Create User")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("CREATE USER ln_write_user 'write_pwd'\nCREATE USER sgcc_write_user 'write_pwd'\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("LIST USER\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"grant-user-privilege"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grant-user-privilege"}},[this._v("#")]),this._v(" Grant User Privilege")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("GRANT USER ln_write_user PRIVILEGES 'INSERT_TIMESERIES' on root.ln\nGRANT USER sgcc_write_user PRIVILEGES 'INSERT_TIMESERIES' on root.sgcc\nINSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"other-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-instructions"}},[this._v("#")]),this._v(" Other Instructions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-relationship-among-users-privileges-and-roles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-relationship-among-users-privileges-and-roles"}},[this._v("#")]),this._v(" The Relationship among Users, Privileges and Roles")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"list-of-privileges-included-in-the-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-of-privileges-included-in-the-system"}},[this._v("#")]),this._v(" List of Privileges Included in the System")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"username-restrictions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#username-restrictions"}},[this._v("#")]),this._v(" Username Restrictions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"password-restrictions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#password-restrictions"}},[this._v("#")]),this._v(" Password Restrictions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"role-name-restrictions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#role-name-restrictions"}},[this._v("#")]),this._v(" Role Name Restrictions")])}],!1,null,null,null);t.default=i.exports}}]);