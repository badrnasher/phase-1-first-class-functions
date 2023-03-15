function receivesAFunction(callback){
    callback();
};


function returnsANamedFunction(){
    return function namedFunction(){};
};

function returnsAnAnonymousFunction(){

    return namedFunction(() => console.log("Hi"));;
};