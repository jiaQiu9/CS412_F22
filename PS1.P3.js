const strfun= (strVal, funVal)=> funVal(strVal);

// Source for the split: https://pineco.de/snippets/split-strings-and-keep-the-delimiter/

const repfun= val=> {
    return [`originalString:${val}`,`modifiedString:${val.replaceAll('a','A')}`,`numberReplaced:
    ${val.match(/a/g).length}`,`length:${val.replaceAll('a','A').length}`]

    // source for replace: https://dmitripavlutin.com/replace-all-string-occurrences-javascript/
    // let mod= val.replaceAll('a','A');
    //
    // source for match() https://www.w3docs.com/snippets/javascript/how-to-count-string-occurrence-in-string.html
    // let count = val.match(/a/g).length;
    //
    // let result=[`originalString:${val}`,`modifiedString:${mod}`,`numberReplaced:${count}`,`length:${mod.length}`];
    // return result;
}

let expOne = strfun(
    "supercalifragilisticexpialidocious",
    val=> val.split(/(?=c)/)
)

let expTwo = strfun(
    "supercalifragilisticexpialidocious",
    val=> repfun(val)
)


console.log(expOne);
console.log(expTwo);