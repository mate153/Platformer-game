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
            role TEXT)`;
            db.query(sql_users, (err, result) => {
                if (err) {
                    console.error('Table creation failed. Error:', err);
                } else {
                    console.log('The "users" table has been successfully created.');
                }
            });
    }
    //createUsers(); // Create users table
}

module.exports = {create};