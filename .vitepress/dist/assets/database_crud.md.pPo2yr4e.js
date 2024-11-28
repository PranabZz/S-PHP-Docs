import{_ as i,c as a,a0 as e,o as t}from"./chunks/framework.p2VkXzrt.js";const g=JSON.parse('{"title":"CRUD Operations in S-PHP Framework","description":"","frontmatter":{},"headers":[],"relativePath":"database/crud.md","filePath":"database/crud.md"}'),h={name:"database/crud.md"};function n(l,s,p,k,d,r){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="crud-operations-in-s-php-framework" tabindex="-1">CRUD Operations in S-PHP Framework <a class="header-anchor" href="#crud-operations-in-s-php-framework" aria-label="Permalink to &quot;CRUD Operations in S-PHP Framework&quot;">​</a></h1><p>The <code>Models</code> class is designed to facilitate interaction with the database for performing basic CRUD operations. This class provides methods to create, read, update, and delete records in the database. Below is a guide on how to use these methods.</p><h3 id="_1-create-operation-insert-data" tabindex="-1">1. Create Operation (Insert Data) <a class="header-anchor" href="#_1-create-operation-insert-data" aria-label="Permalink to &quot;1. Create Operation (Insert Data)&quot;">​</a></h3><p>The create method allows you to insert data into the database table. It automatically filters the data to ensure only valid fields, defined in the <code>$fillables</code> array, are inserted.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($request)</span></span></code></pre></div><h3 id="example-usage" tabindex="-1">Example Usage <a class="header-anchor" href="#example-usage" aria-label="Permalink to &quot;Example Usage&quot;">​</a></h3><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$model </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> YourModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$request </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;name&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;John Doe&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;email&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;john.doe@example.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($request);</span></span></code></pre></div><h3 id="_2-read-operation-select-data" tabindex="-1">2. Read Operation (Select Data) <a class="header-anchor" href="#_2-read-operation-select-data" aria-label="Permalink to &quot;2. Read Operation (Select Data)&quot;">​</a></h3><p>The <code>select</code> method allows you to retrieve data from the database. You can specify which columns to select and apply <code>WHERE</code> conditions if needed.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($columns, $where </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [])</span></span></code></pre></div><h4 id="example-usage-1" tabindex="-1">Example Usage <a class="header-anchor" href="#example-usage-1" aria-label="Permalink to &quot;Example Usage&quot;">​</a></h4><p><i>Without WHERE condition</i></p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$model </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> YourModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$columns </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;email&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($columns);</span></span></code></pre></div><p><i>With WHERE condition</i></p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$model </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> YourModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$columns </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;email&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$where </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;id&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($columns, $where);</span></span></code></pre></div><h3 id="_3-find-by-id-get-a-single-record" tabindex="-1">3. Find by ID (Get a Single Record) <a class="header-anchor" href="#_3-find-by-id-get-a-single-record" aria-label="Permalink to &quot;3. Find by ID (Get a Single Record)&quot;">​</a></h3><p>The findByID method retrieves a single record by its id.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> findByID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($id)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">The</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unique</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> identifier</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> for</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> the</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> record</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> you</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> want</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> to</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> retrieve</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span></span></code></pre></div><h4 id="example-usage-2" tabindex="-1">Example Usage <a class="header-anchor" href="#example-usage-2" aria-label="Permalink to &quot;Example Usage&quot;">​</a></h4><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$model </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> YourModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findByID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($id);</span></span></code></pre></div><p>This will return the record where the id matches the provided value.</p><h3 id="_4-update-operation" tabindex="-1">4. Update Operation <a class="header-anchor" href="#_4-update-operation" aria-label="Permalink to &quot;4. Update Operation&quot;">​</a></h3><p>The update method allows you to modify an existing record. You need to specify the record&#39;s id and the data you want to update.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($request, $id)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$request: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">An</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> associative</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> array</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> containing</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> the</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fields</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> to</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> be</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> updated</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">The</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> unique</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> identifier</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> of</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> the</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> record</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> you</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> want</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> to</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> update</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span></span></code></pre></div><h4 id="example-usage-3" tabindex="-1">Example Usage <a class="header-anchor" href="#example-usage-3" aria-label="Permalink to &quot;Example Usage&quot;">​</a></h4><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$model </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> YourModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$request </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;name&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Jane Doe&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;email&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;jane.doe@example.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($request, $id);</span></span></code></pre></div><p>In this example, the record with id = 1 will have its name and email updated with the values from the $request array.</p><h3 id="_5-delete-operation" tabindex="-1">5. Delete Operation <a class="header-anchor" href="#_5-delete-operation" aria-label="Permalink to &quot;5. Delete Operation&quot;">​</a></h3><p>The delete method removes a record from the database based on its id.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($id)</span></span></code></pre></div><h4 id="example-usage-4" tabindex="-1">Example Usage <a class="header-anchor" href="#example-usage-4" aria-label="Permalink to &quot;Example Usage&quot;">​</a></h4><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$model </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> YourModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($id);</span></span></code></pre></div><p>This will delete the record with the specified id from the database.</p>`,33)]))}const E=i(h,[["render",n]]);export{g as __pageData,E as default};
