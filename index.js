const employee ={
    name: "Nick",
    streetAddress: "1604 Utica",
};

function updateEmployeeWithKeyAndValue(obj , key, value){
    return {...obj, [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function  deleteFromEmployeeByKey(obj, key){
    const newEmployee = {...obj}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    const newEmployee = obj
    delete newEmployee[key]
    return newEmployee
}
  
  


   




