//=======================================array myMap

Array.prototype.myMap = function(cbFn) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(cbFn(this[i], i, this));
    }
    return newArr;
}

const arr = [1, 23, 34].myMap((item, idx, arr) => {
    return item + arr[idx];
})
console.log(arr);
//============================================================array myFilter

Array.prototype.myFilter = function(cbFn) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (cbFn(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

const arrFiltered = [1, 2, 4, 6, 7, 8].myFilter(item => {
    return item % 2 === 0;
});

const users = [{
        name: "user1",
        age: 25,
    },
    {
        name: "user2",
        age: 17,
    },
    {
        name: "user1",
        age: 29,
    },
];

console.log(users.myFilter(item => item.age > 18));
console.log(arrFiltered);
//======================================================================array mySplit

Array.prototype.mySplit = function (separator, length){
    let strLength = this.length;
    console.log(strLength);
    if(length!=undefined){
        strLength = length;
    }
    let newString = '';
    for (let i = 0; i < strLength; i++) {
        if (i === strLength - 1) {
            newString += `${this[i]}`;
        } else {
            newString +=`${this[i]}${separator}`;
        }
    }
    return newString;
};

console.log([1,3,4,5].mySplit(' '));

//============================================array my|Find
Array.prototype.myFind = function(cbFn){
    let out;
    for(let i=0; i < this.length; i++){
        if(cbFn(this[i], i, this)){
            out = this[i];           
        }
    }
    return out;
};
console.log(users.myFind(item => item.name=='user1'));
console.log([1,24,4,6,6].myFind(item=>item==24));

//===============================================array myFindIndex
Array.prototype.myFindIndex = function(cbFn){
    let index;
    for(let i =0; i<this.length; i++){
        if(cbFn(this[i],i,this)){
            index = i;
        }
    }
    return index;
};

console.log([1,2,53,843].myFindIndex(item => item==53));
//===============================================array myReduce
Array.prototype.myReduce = function(cbFn,acc){
    let accumulator = acc;
    for (let i = 0; i < this.length; i++) {
        if (acc !== undefined) {
          accumulator = cbFn.call(undefined, accumulator, this[i], i, this);
        } else {
          accumulator = this[i];
        }
      }
      return accumulator;
};

console.log([1,2,4,6,76].myReduce((acc,item)=>{return item+acc},0));


