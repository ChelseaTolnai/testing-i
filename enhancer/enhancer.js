module.exports = {
    repair
}

function repair(item) {
    if (typeof item === 'object') {
        const objCheck =  Object.prototype.toString.call(item).slice(8, -1);
        if (objCheck === 'Object' ){
            let { name, type, durability, enhancement } = item
            if (typeof name === 'string' 
             && typeof type === 'string' && (type === 'armor' || type === 'weapon')
             && typeof durability === 'number' 
             && typeof enhancement === 'number'
            ) {
                return {
                ...item,
                durability: 100,
                }
            }
        }
    } 
    return null
};

