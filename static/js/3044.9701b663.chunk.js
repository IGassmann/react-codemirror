"use strict";(self.webpackChunk_uiw_react_codemirror=self.webpackChunk_uiw_react_codemirror||[]).push([[3044],{3044:function(e,i,n){n.r(i),i.default="proc find {{basedir .} {filterScript {}}} {\n    set oldwd [pwd]\n    cd $basedir\n    set cwd [pwd]\n    set filenames [glob -nocomplain * .*]\n    set files {}\n    set filt [string length $filterScript]\n    foreach filename $filenames {\n        if {!$filt || [eval $filterScript [list $filename]]} {\n            lappend files [file join $cwd $filename]\n        }\n        if {[file isdirectory $filename]} {\n            set files [concat $files [find $filename $filterScript]]\n        }\n    }\n    cd $oldwd\n    return $files\n}\n"}}]);
//# sourceMappingURL=3044.9701b663.chunk.js.map