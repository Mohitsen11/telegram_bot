const linearSearch = `function (arr,x) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === x) return i;
    }
    return undefined;
}` ;

const BinarySearch = `function (arr,x) {
    let s = 0;
    let e = arr.length - 1;

    while( s <= e ){
        let mid = s + Math.floor((e-s)/2);

        if(arr[mid] === x) return mid;
        else if(arr[mid] < x){
            s = mid + 1;
        } else {
            e = mid - 1; 
        }
    }
    return undefined;
}`;

module.exports = {
    linearSearch,
    BinarySearch
}