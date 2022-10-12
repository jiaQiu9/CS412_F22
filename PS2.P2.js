function* stringspitter(){
    yield* "All I know is something like a bird within her sang".split(' ');
}

const res= stringspitter();
console.log(res.next());
console.log(res.next());
