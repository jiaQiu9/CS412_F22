const strfun= (strVal, funVal)=> funVal(strVal);

// Source for the split: https://pineco.de/snippets/split-strings-and-keep-the-delimiter/

const repfun= val=> {
    console.log(`originalString:${val}`);
    // source for replace: https://dmitripavlutin.com/replace-all-string-occurrences-javascript/
    let mod= val.replaceAll('a','A');
    console.log(`modifiedString:${mod}`);
    // source for match() https://www.w3docs.com/snippets/javascript/how-to-count-string-occurrence-in-string.html
    let count = val.match(/a/g).length;
    console.log(`numberReplaced:${count}`);
    console.log(`length:${mod.length}`);
}

let expOne = strfun(
    "supercalifragilisticexpialidocious",
    val=> val.split(/(?=c)/)
)

let expTwo = strfun(
    "supercalifragilisticexpialidocious",
    val=> repfun(val)
)

//console.log(expOne);
expTwo;