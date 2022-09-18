const eval = strVal=>{
    let arr=strVal.split('');
    switch (arr[1]) {
        case '+':
            return Number(arr[0]) + Number(arr[2]);
            break;
        case '-':
            return Number(arr[0]) - Number(arr[2]);
            break;
        case '*':
            return Number(arr[0]) * Number(arr[2]);
            break;
        case '^':
            return Number(arr[0]) ** Number(arr[2]);
            break;
        case '/':
            return Number(arr[0]) / Number(arr[2]);
            break;
    }
}


console.log(`${eval("8^8")}`);
