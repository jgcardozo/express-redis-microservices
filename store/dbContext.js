const db = {
    'user': [
        { id: '1', name: 'Juan Cardozo' }
    ]
};

const list = async (table) => {
    return db[table];
}

const get = async (table, id) => {
    let collection = await list(table);
    return collection.filter(item => item.id === id)[0] || null;
}

const insert = async (table, data) => {
    db[collection].push(data);
}

const remove = async (table, id) => {
    return true;
    //return db[]
}

module.exports = { list, get, insert, remove };