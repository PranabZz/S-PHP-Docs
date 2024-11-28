import{_ as s,c as i,a0 as e,o as t}from"./chunks/framework.p2VkXzrt.js";const k=JSON.parse('{"title":"Database Configuration in S-PHP","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started/configuration.md","filePath":"getting-started/configuration.md"}'),n={name:"getting-started/configuration.md"};function o(r,a,p,l,h,d){return t(),i("div",null,a[0]||(a[0]=[e(`<h1 id="database-configuration-in-s-php" tabindex="-1">Database Configuration in S-PHP <a class="header-anchor" href="#database-configuration-in-s-php" aria-label="Permalink to &quot;Database Configuration in S-PHP&quot;">​</a></h1><p>In the S-PHP framework, the database connection settings are stored in the <code>app/config/config.php</code> file. This file plays an important role in configuring your application&#39;s connection to the database. Below is an example of how to set up the database connection:</p><h2 id="example-of-app-config-config-php" tabindex="-1">Example of <code>app/config/config.php</code>: <a class="header-anchor" href="#example-of-app-config-config-php" aria-label="Permalink to &quot;Example of \`app/config/config.php\`:&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Here we keep our database host and the database we will be using for the project</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;host&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Your Host </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;database&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Database name</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;username&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// MySql username</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;password&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // MySql password</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><h1 id="explanation-of-configuration-fields" tabindex="-1">Explanation of Configuration Fields: <a class="header-anchor" href="#explanation-of-configuration-fields" aria-label="Permalink to &quot;Explanation of Configuration Fields:&quot;">​</a></h1><p><code>host</code> : This specifies the database server&#39;s host address. For most local development setups, this will be localhost. If you&#39;re using a different server, replace localhost with the appropriate host address (e.g., 127.0.0.1 or an IP address).</p><p><code>database</code> : This is the name of the database your application will connect to. In the example above, the database name is start. Replace it with the name of your actual database.</p><p><code>username</code> : This is the username required for connecting to the database. In many local environments, the default is usually root. However, if you&#39;re using a different database user, make sure to replace it accordingly.</p><p><code>password</code> : The password associated with the database username. The example shows root as the password, but this should be changed to the actual password for your database user.</p><hr><h1 id="how-it-works" tabindex="-1">How It Works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How It Works&quot;">​</a></h1><p>This configuration file provides the essential details for your application to establish a connection with a MySQL database. The framework uses these values to communicate with the database and perform operations like querying, inserting, updating, and deleting data.</p><p>Important Notes: Security: Always be cautious when handling sensitive information like database credentials. Ensure this configuration file is never exposed publicly or checked into version control. It&#39;s a good practice to use environment variables for sensitive data in a production environment.</p><p>Further Customization: You can modify this configuration file later to include additional settings like port numbers, charset, or connection timeouts if needed.</p><p>Note: This is a basic configuration for local development. For production environments, consider using more secure connection practices like using environment variables or an encrypted connection.</p>`,15)]))}const g=s(n,[["render",o]]);export{k as __pageData,g as default};
