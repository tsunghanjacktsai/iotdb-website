(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{955:function(e,t,a){"use strict";a.r(t);var s=a(71),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"priviledge-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#priviledge-management"}},[e._v("#")]),e._v(" Priviledge Management")]),e._v(" "),a("p",[e._v("IoTDB provides users with priviledge management operations, so as to ensure data security.")]),e._v(" "),a("p",[e._v("We will show you basic user priviledge management operations through the following specific examples. Detailed SQL syntax and usage details can be found in "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/Master/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[e._v("Chapter 5: SQL Documentation")]),e._v(". At the same time, in the JAVA programming environment, you can use the "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/Master/Master/V0.8.x/6-JDBC API/1-JDBC API.html"}},[e._v("Java JDBC")]),e._v(" to execute priviledge management statements in a single or batch mode.")],1),e._v(" "),a("h2",{attrs:{id:"basic-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-concepts"}},[e._v("#")]),e._v(" Basic Concepts")]),e._v(" "),a("h3",{attrs:{id:"user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[e._v("#")]),e._v(" User")]),e._v(" "),a("p",[e._v("The user is the legal user of the database. A user corresponds to a unique username and has a password as a means of authentication. Before using a database, a person must first provide a legitimate username and password to make himself/herself a user.")]),e._v(" "),a("h3",{attrs:{id:"priviledge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#priviledge"}},[e._v("#")]),e._v(" Priviledge")]),e._v(" "),a("p",[e._v("The database provides a variety of operations, and not all users can perform all operations. If a user can perform an operation, the user is said to have the priviledge to perform the operation. Priviledges can be divided into data management priviledge (such as adding, deleting and modifying data) and authority management priviledge (such as creation and deletion of users and roles, granting and revoking of priviledges, etc.). Data management priviledge often needs a path to limit its effective range, which is a subtree rooted at the path's corresponding node.")]),e._v(" "),a("h3",{attrs:{id:"role"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#role"}},[e._v("#")]),e._v(" Role")]),e._v(" "),a("p",[e._v("A role is a set of priviledges and has a unique role name as an identifier. A user usually corresponds to a real identity (such as a traffic dispatcher), while a real identity may correspond to multiple users. These users with the same real identity tend to have the same priviledges. Roles are abstractions that can unify the management of such priviledges.")]),e._v(" "),a("h3",{attrs:{id:"default-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-user"}},[e._v("#")]),e._v(" Default User")]),e._v(" "),a("p",[e._v("There is a default user in IoTDB after the initial installation: root, and the default password is root. This user is an administrator user, who cannot be deleted and has all the priviledges. Neither can new priviledges be granted to the root user nor can priviledges owned by the root user be deleted.")]),e._v(" "),a("h2",{attrs:{id:"priviledge-management-operation-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#priviledge-management-operation-examples"}},[e._v("#")]),e._v(" Priviledge Management Operation Examples")]),e._v(" "),a("p",[e._v("According to the "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/Master/Master/V0.8.x/3-Operation Manual/1-Sample Data.html"}},[e._v("sample data")]),e._v(", the sample data of IoTDB may belong to different power generation groups such as ln, sgcc, etc. Different power generation groups do not want others to obtain their own database data, so we need to have data priviledge isolated at the group layer.")],1),e._v(" "),a("h3",{attrs:{id:"create-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-user"}},[e._v("#")]),e._v(" Create User")]),e._v(" "),a("p",[e._v("We can create two users for ln and sgcc groups, named ln_write_user and sgcc_write_user, with both passwords being write_pwd. The SQL statement is:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("CREATE USER ln_write_user write_pwd\nCREATE USER sgcc_write_user write_pwd\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Then use the following SQL statement to show the user:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("LIST USER\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("As can be seen from the result shown below, the two users have been created:")]),e._v(" "),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51578263-e2a91d00-1ef7-11e9-94e8-28819b6fea87.jpg"}})]),e._v(" "),a("h3",{attrs:{id:"grant-user-priviledge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grant-user-priviledge"}},[e._v("#")]),e._v(" Grant User Priviledge")]),e._v(" "),a("p",[e._v("At this point, although two users have been created, they do not have any priviledges, so they can not operate on the database. For example, we use ln_write_user to write data in the database, the SQL statement is:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The SQL statement will not be executed and the corresponding error prompt is given as follows:")]),e._v(" "),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51597609-9af5b600-1f36-11e9-9460-8ab185eb4735.png"}})]),e._v(" "),a("p",[e._v("Now, we grant the two users write priviledges to the corresponding storage groups, and try to write data again. The SQL statement is:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("GRANT USER ln_write_user PRIVILEGES 'INSERT_TIMESERIES' on root.ln\nGRANT USER sgcc_write_user PRIVILEGES 'INSERT_TIMESERIES' on root.sgcc\nINSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("The execution result is as follows:\n"),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51578942-33ba1080-1efa-11e9-891c-09d69791aff1.jpg"}})])],1),e._v(" "),a("h2",{attrs:{id:"other-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-instructions"}},[e._v("#")]),e._v(" Other Instructions")]),e._v(" "),a("h3",{attrs:{id:"the-relationship-among-users-priviledges-and-roles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-relationship-among-users-priviledges-and-roles"}},[e._v("#")]),e._v(" The Relationship among Users, Priviledges and Roles")]),e._v(" "),a("p",[e._v("A Role is a set of priviledges, and priviledges and roles are both attributes of users. That is, a role can have several priviledges and a user can have several roles and priviledges (called the user's own priviledges).")]),e._v(" "),a("p",[e._v("At present, there is no conflicting priviledge in IoTDB, so the real priviledges of a user is the union of the user's own priviledges and the priviledges of the user's roles. That is to say, to determine whether a user can perform an operation, it depends on whether one of the user's own priviledges or the priviledges of the user's roles permits the operation. The user's own priviledges and priviledges of the user's roles may overlap, but it does not matter.")]),e._v(" "),a("p",[e._v("It should be noted that if users have a priviledge (corresponding to operation A) themselves and their roles contain the same priviledge, then revoking the priviledge from the users themselves alone can not prohibit the users from performing operation A, since it is necessary to revoke the priviledge from the role, or revoke the role from the user. Similarly, revoking the priviledge from the users's roles alone can not prohibit the users from performing operation A.")]),e._v(" "),a("p",[e._v("At the same time, changes to roles are immediately reflected on all users who own the roles. For example, adding certain priviledges to roles will immediately give all users who own the roles corresponding priviledges, and deleting certain priviledges will also deprive the corresponding users of the priviledges (unless the users themselves have the priviledges).")]),e._v(" "),a("h3",{attrs:{id:"list-of-priviledges-included-in-the-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-of-priviledges-included-in-the-system"}},[e._v("#")]),e._v(" List of Priviledges Included in the System")]),e._v(" "),a("center",[e._v("**List of Priviledges Included in the System**\n"),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Priviledge Name")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Interpretation")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("SET_STORAGE_GROUP")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("create timeseries; set storage groups; path dependent")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("INSERT_TIMESERIES")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("insert data; path dependent")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("UPDATE_TIMESERIES")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("update data; path dependent")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("READ_TIMESERIES")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("query data; path dependent")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("DELETE_TIMESERIES")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("delete data or timeseries; path dependent")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("CREATE_USER")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("create users; path independent")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("DELETE_USER")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("delete users; path independent")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("MODIFY_PASSWORD")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("modify passwords for all users; path independent; (Those who do not have this priviledge can still change their own asswords. )")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("LIST_USER")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("list all users; list a user's priviledges; list a user's roles with three kinds of operation priviledges; path independent")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("GRANT_USER_PRIVILEGE")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("grant user priviledges; path independent")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("REVOKE_USER_PRIVILEGE")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("revoke user priviledges; path independent")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("GRANT_USER_ROLE")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("grant user roles; path independent")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("REVOKE_USER_ROLE")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("revoke user roles; path independent")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("CREATE_ROLE")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("create roles; path independent")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("DELETE_ROLE")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("delete roles; path independent")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("LIST_ROLE")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("list all roles; list the priviledges of a role; list the three kinds of operation priviledges of all users owning a role; path independent")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("GRANT_ROLE_PRIVILEGE")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("grant role priviledges; path independent")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("REVOKE_ROLE_PRIVILEGE")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("revoke role priviledges; path independent")])])])])]),e._v(" "),a("h3",{attrs:{id:"username-restrictions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#username-restrictions"}},[e._v("#")]),e._v(" Username Restrictions")]),e._v(" "),a("p",[e._v("IoTDB specifies that the character length of a username should not be less than 4, and the username cannot contain spaces.")]),e._v(" "),a("h3",{attrs:{id:"password-restrictions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#password-restrictions"}},[e._v("#")]),e._v(" Password Restrictions")]),e._v(" "),a("p",[e._v("IoTDB specifies that the character length of a password should not be less than 4, and the password cannot contain spaces. The password is encrypted with MD5.")]),e._v(" "),a("h3",{attrs:{id:"role-name-restrictions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#role-name-restrictions"}},[e._v("#")]),e._v(" Role Name Restrictions")]),e._v(" "),a("p",[e._v("IoTDB specifies that the character length of a role name should not be less than 4, and the role name cannot contain spaces.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);