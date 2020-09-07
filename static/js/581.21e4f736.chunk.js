(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[581],{881:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default="!TiddlyWiki Formatting\n* Rendered versions can be found at: http://www.tiddlywiki.com/#Reference\n\n|!Option            | !Syntax            |\n|bold font          | ''bold''           |\n|italic type        | //italic//         |\n|underlined text    | __underlined__     |\n|strikethrough text | --strikethrough--  |\n|superscript text   | super^^script^^    |\n|subscript text     | sub~~script~~      |\n|highlighted text   | @@highlighted@@    |\n|preformatted text  | {{{preformatted}}} |\n\n!Block Elements\n<<<\n!Heading 1\n\n!!Heading 2\n\n!!!Heading 3\n\n!!!!Heading 4\n\n!!!!!Heading 5\n<<<\n\n!!Lists\n<<<\n* unordered list, level 1\n** unordered list, level 2\n*** unordered list, level 3\n\n# ordered list, level 1\n## ordered list, level 2\n### unordered list, level 3\n\n; definition list, term\n: definition list, description\n<<<\n\n!!Blockquotes\n<<<\n> blockquote, level 1\n>> blockquote, level 2\n>>> blockquote, level 3\n\n> blockquote\n<<<\n\n!!Preformatted Text\n<<<\n{{{\npreformatted (e.g. code)\n}}}\n<<<\n\n!!Code Sections\n<<<\n{{{\nText style code\n}}}\n\n//{{{\nJS styled code. TiddlyWiki mixed mode should support highlighter switching in the future.\n//}}}\n\n\x3c!--{{{--\x3e\nXML styled code. TiddlyWiki mixed mode should support highlighter switching in the future.\n\x3c!--}}}--\x3e\n<<<\n\n!!Tables\n<<<\n|CssClass|k\n|!heading column 1|!heading column 2|\n|row 1, column 1|row 1, column 2|\n|row 2, column 1|row 2, column 2|\n|>|COLSPAN|\n|ROWSPAN| ... |\n|~| ... |\n|CssProperty:value;...| ... |\n|caption|c\n\n''Annotation:''\n* The {{{>}}} marker creates a \"colspan\", causing the current cell to merge with the one to the right.\n* The {{{~}}} marker creates a \"rowspan\", causing the current cell to merge with the one above.\n<<<\n!!Images /% TODO %/\ncf. [[TiddlyWiki.com|http://www.tiddlywiki.com/#EmbeddedImages]]\n\n!Hyperlinks\n* [[WikiWords|WikiWord]] are automatically transformed to hyperlinks to the respective tiddler\n** the automatic transformation can be suppressed by preceding the respective WikiWord with a tilde ({{{~}}}): {{{~WikiWord}}}\n* [[PrettyLinks]] are enclosed in square brackets and contain the desired tiddler name: {{{[[tiddler name]]}}}\n** optionally, a custom title or description can be added, separated by a pipe character ({{{|}}}): {{{[[title|target]]}}}<br>'''N.B.:''' In this case, the target can also be any website (i.e. URL).\n\n!Custom Styling\n* {{{@@CssProperty:value;CssProperty:value;...@@}}}<br>''N.B.:'' CSS color definitions should use lowercase letters to prevent the inadvertent creation of WikiWords.\n* <html><code>{{customCssClass{...}}}</code></html>\n* raw HTML can be inserted by enclosing the respective code in HTML tags: {{{<html> ... </html>}}}\n\n!Special Markers\n* {{{<br>}}} forces a manual line break\n* {{{----}}} creates a horizontal ruler\n* [[HTML entities|http://www.tiddlywiki.com/#HtmlEntities]]\n* [[HTML entities local|HtmlEntities]]\n* {{{<<macroName>>}}} calls the respective [[macro|Macros]]\n* To hide text within a tiddler so that it is not displayed, it can be wrapped in {{{/%}}} and {{{%/}}}.<br/>This can be a useful trick for hiding drafts or annotating complex markup.\n* To prevent wiki markup from taking effect for a particular section, that section can be enclosed in three double quotes: e.g. {{{\"\"\"WikiWord\"\"\"}}}.\n\n"}}]);
//# sourceMappingURL=581.21e4f736.chunk.js.map