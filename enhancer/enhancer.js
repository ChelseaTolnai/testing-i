module.exports = {
    repair,
    success
}

function objCheck(item) {
    if (typeof item === 'object') {
        const objCheck =  Object.prototype.toString.call(item).slice(8, -1);
        if (objCheck === 'Object' ){
            let { name, type, durability, enhancement } = item
            if (typeof name === 'string' 
             && typeof type === 'string' && (type === 'armor' || type === 'weapon')
             && typeof durability === 'number' 
             && typeof enhancement === 'number'
            ) {
                return true
            }
        }
    } 
    return false   
}

function repair(item) {
    if (objCheck(item) === true) {
        return {
        ...item,
        durability: 100,
        }
    } 
    return null
};

function success(item) {
    if (objCheck(item) === true){
        return true
    }
    return null
}