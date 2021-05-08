function receivesAFunction(callBack) {
    return callBack();
}

function someOtherFunction(){
}

function returnsANamedFunction(param) {
    return someOtherFunction;
}

function returnsAnAnonymousFunction(){
    return function (){}; 
}