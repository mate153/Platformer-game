const create = (db) => {
    const createUsers = () => {
        sql_users = 
        `CREATE TABLE users(
            id INTEGER PRIMARY KEY,
            username TEXT,
            email TEXT,
            password TEXT,
            date_of_birth TEXT,
            reg_date TEXT,
            gender TEXT,
            role TEXT)`;
        db.run(sql_users)
    }
    // createUsers();
}

module.exports = {create};