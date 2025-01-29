const db = {
    'user': [
        { id: 1, name: 'Juan Cardozo' }
    ]
};

const list = (table) => {
    return db[table];
}

const get = (table, id) => {
    let collection = list(table);
    return collection.filter(item => item.id == id)[0] || null;
}

const insert = (table, data) => {
    db[collection].push(data);
}

const remove = (table, id) => {
    return true;
    //return db[]
}

module.exports = { list, get, insert, remove };