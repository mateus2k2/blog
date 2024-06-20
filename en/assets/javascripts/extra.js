// document$.subscribe(function() {
//     var tables = document.querySelectorAll("article table:not([class])")
//     tables.forEach(function(table) {
//         new Tablesort(table)
//     })
// })

window.MathJax = {
tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
},
options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
}
};

// document$.subscribe(() => { 
// MathJax.startup.output.clearCache()
// MathJax.typesetClear()
// MathJax.texReset()
// MathJax.typesetPromise()
// })