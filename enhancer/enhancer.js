module.exports = {
    repair,
    success
}

function objCheck(item) {
    if (typeof item === 'object') {
        const objCheck =  Object.prototype.toString.call(item).slice(8, -1);
        if (objCheck === 'Object' ) {
            let { name, type, durability, enhancement } = item
            if (typeof name === 'string' 
             && typeof type === 'string' && (type === 'armor' || type === 'weapon')
             && typeof durability === 'number' && (durability <= 100)
             && typeof enhancement === 'number' && (0 <= enhancement && enhancement <= 20)
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
    if (objCheck(item) === true) {
        return {
        ...item,
        }
    }
    return null
}