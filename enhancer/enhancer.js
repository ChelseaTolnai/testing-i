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
    if (objCheck(item) === true){
      let {name, enhancement} = item;
      switch (true) {
        case(enhancement === 0):
          enhancement = enhancement + 1;
          name = `[+${enhancement}] ${name}`;
          break;
        case(enhancement < 15):
          enhancement = enhancement + 1;
          name = name.replace(`${name.match(/^\[.*\]/g)[0]}`, `[+${enhancement}]`);
          break;
        case(enhancement < 20):
          enhancement = enhancement + 1;
          const enhanceLevels = {
            16: "PRI",
            17: "DUO",
            18: "TRI",
            19: "TET",
            20: "PEN"
          };
          name = name.replace(`${name.match(/^\[.*\]/g)[0]}`, `[${enhanceLevels[enhancement]}]`);
          break;
        case(enhancement === 20):
          break;
      }
      return {
        ...item,
        enhancement,
        name,
      }
    }
    return null
  }