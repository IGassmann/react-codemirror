(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[515],{815:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default="{{> breadcrumbs}}\n{{!--\n  You can use the t function to get\n  content translated to the current locale, es:\n  {{t 'article_list'}}\n--}}\n\n<h1>{{t 'article_list'}}</h1>\n\n{{! one line comment }}\n\n{{#each articles}}\n  {{~title}}\n  <p>{{excerpt body size=120 ellipsis=true}}</p>\n\n  {{#with author}}\n    written by {{first_name}} {{last_name}}\n    from category: {{../category.title}}\n    {{#if @../last}}foobar!{{/if}}\n  {{/with~}}\n\n  {{#if promoted.latest}}Read this one! {{else}} This is ok! {{/if}}\n\n  {{#if @last}}<hr>{{/if}}\n{{/each}}\n\n{{#form new_comment}}\n  <input type=\"text\" name=\"body\">\n{{/form}}\n"}}]);
//# sourceMappingURL=515.c2655793.chunk.js.map