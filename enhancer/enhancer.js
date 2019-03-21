module.exports = {
    repair,
    success,
    fail
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
                if (((0 <= enhancement && enhancement <= 14) && durability >= 20) 
                 || ((15 <= enhancement && enhancement <= 19) && durability >= 0)
                 || (enhancement === 20)
                ) {
                    return true
                }
            }
        }
    } 
    throw new Error('Invalid item object as argument.');
}

function repair(item) {
    if (objCheck(item) === true) {
        let { durability } = item;
        switch (durability < 100) {
            case(true):
                durability = 100;
                break;
            default:
                throw new Error('Item does not need to be repaired.');
        }
        return {
            ...item,
            durability,
        }
    } 
};

function success(item) {
    if (objCheck(item) === true){
      let {name, durability, enhancement} = item;
        switch (true) {
            case(enhancement === 0):
                if (durability < 25) {throw new Error('Item cannot be enhanced if durability is below 25.');}
                enhancement++;
                name = `[+${enhancement}] ${name}`;
                break;
            case(enhancement < 15):
                if (durability < 25) {throw new Error('Item cannot be enhanced if durability is below 25.');}
                enhancement++;
                name = name.replace(`${name.match(/^\[.*\]/g)[0]}`, `[+${enhancement}]`);
                break;
            case(enhancement < 20):
                if (durability < 10) {throw new Error('Item cannot be enhanced if durability is below 10.');}
                enhancement++;
                name = name.replace(`${name.match(/^\[.*\]/g)[0]}`, `[${enhanceLevels[enhancement]}]`);
                break;
            default:
                throw new Error('Item is at top enhancement level.');
        }
        return {
            ...item,
            enhancement,
            name,
        }
    }
}

function fail(item) {
    if (objCheck(item) === true){
        let {name, type, durability, enhancement} = item;
        switch (true) {
            case(type === 'armor' && enhancement <= 5):
                throw new Error('Enchancing an armor up to 5 cannot fail');
            case(type === 'weapon' && enhancement <= 7):
                throw new Error('Enchancing a weapon up to 7 cannot fail');
            case(enhancement <= 14):
                durability -= 5;
                break;
            case(14 < enhancement && enhancement <= 16):
                durability -= 10;
                break
            case(enhancement > 16):
                durability -= 10;
                enhancement--;
                name = name.replace(`${name.match(/^\[.*\]/g)[0]}`, `[${enhanceLevels[enhancement]}]`);
                break;
        }
        return {
            ...item,
            enhancement,
            name,
            durability,
        }
    }
};

const enhanceLevels = {
    16: "PRI",
    17: "DUO",
    18: "TRI",
    19: "TET",
    20: "PEN"
};