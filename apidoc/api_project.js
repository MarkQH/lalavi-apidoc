define({
  "name": "这里是大标题可配置",
  "version": "1.1.0",
  "description": "这里是文档描述可配置",
  "title": "我是文档标题可配置",
  "apiName": "我是侧边栏标题",
  "url": "https://api.linkfin.com",
  "sampleUrl": "https://apidoc.free.beeceptor.com",
  "header": {
    "title": "Introduction",
    "content": "<h1>文档介绍</h1>\n<p>生成文档:</p>\n<pre class=\"prettyprint lang-bash\">apidoc -i app/ -o apidoc/ -t template/\n</pre>\n<h2><span id=\"api-example-for-a-submenu-entry\">调试按钮切换可进行接口调用测试、Ctrl+P打印文档</span></h2>\n<p>可以对common文件夹里的header.md和footer.md编写配置公共头尾.</p>\n"
  },
  "footer": {
    "title": "Best practices",
    "content": "<h1>这里是公共尾部</h1>\n<h1>Best practices</h1>\n<p>Here we are using the footer file to add documentation on best practices while using <code>apidoc</code>.\nThis text is from &quot;footer.md&quot; and is included the same way as the &quot;header.md&quot; file.</p>\n<h2>Define &amp; use</h2>\n<p>For a better readability in the source code, it is recommended to use <code>@apiDefine</code> and <code>@apiUse</code> as much as possible.</p>\n<h3>Naming</h3>\n<p>You should choose a consistent naming schema, which makes it easier to understand what is defined and included.</p>\n<p>E.g. with <code>@apiUse LoginParam</code>, <code>@apiUse LoginError</code>, <code>@apiUse LoginSuccess</code> you see that parameter-, errors- and\nsuccess-fields are classified with the suffix <code>Param</code>, <code>Error</code> and <code>Success</code>.</p>\n<h3>Example for parameter</h3>\n<pre class=\"prettyprint lang-js\">/**\n * @apiDefine LoginParam\n * @apiParam {String} username Your e-mail-address.\n * @apiParam {String} password Your password.\n */\n\n/**\n * @apiDefine UserParam\n * @apiParam {String} firstname Your firstname.\n * @apiParam {String} lastname  Your lastname.\n * @apiParam {Date}   birthday  Your birthday.\n */\n\n/**\n * @api {GET} /account/register Register a new user.\n * @apiUse LoginParam\n * @apiUse UserParam\n * @apiParam {Boolean} terms Checkbox to accept the terms.\n */\n\n/**\n * @api {GET} /account/login Signin with an existing user.\n * @apiUse LoginParam\n * @apiParam {Boolean} rememberme Checkbox to auto-login on revisit.\n */\n</pre>\n<p>Block 1 defines the <code>LoginParam</code> with 2 fields, which are required for register and login.\nBlock 2 defines the <code>UserParam</code> with 3 fields, which are required only for register.\nBlock 3 is the endpoint <code>/account/register</code>, which uses parameters from <code>LoginParam</code>, <code>UserParam</code> and an extra checkbox.\nBlock 4 is the endpoint <code>/account/login</code>, which use only parameters from <code>LoginParam</code> and an extra checkbox.</p>\n<h3>Example for a group</h3>\n<pre class=\"prettyprint lang-js\">/**\n * @apiDefine AccountGroup Account endpoints\n *\n * Here is the description for the \"AccountGroup\".\n * It can contain **markdown** syntax.\n */\n\n/**\n * @api {GET} /account/login Signin with an existing user.\n * @apiGroup AccountGroup\n */\n</pre>\n<p>Block 1 defines the <code>AccountGroup</code> with a title and a description (the following lines).\nBlock 2 is the endpoint <code>/account/login</code>, which belongs to the group <code>AccountGroup</code> and inherit from there the title and\ndescription.\n<code>@apiGroup name</code> only inherit the title and description, while <code>@apiUse</code> would inherit all defined fields in a block.</p>\n"
  },
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2021-01-05T03:11:44.197Z",
    "url": "https://apidocjs.com",
    "version": "0.25.0"
  }
});
