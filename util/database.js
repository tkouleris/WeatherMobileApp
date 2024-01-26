import * as SQLite from 'expo-sqlite'

const database = SQLite.openDatabase('weather_app.db')

export function init(){
    createDB();
    return getDefault();
}

function createDB(){
    new Promise((resolve, reject)=>{
        database.transaction( (tx) => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS options (
            id INTEGER PRIMARY KEY NOT NULL,
            city_id INTEGER NOT NULL
        )`,
                [],
                ()=>{ resolve() },
                (_,error)=>{reject(error)})
        });

        database.transaction((tx)=>{
            tx.executeSql(`INSERT INTO options ( id, city_id) VALUES (1, 209098)`,
                [],
                (_,result)=>{
                    resolve(result)
                },
                (_,error)=>{ reject(error)})
        })
    });
}

export function getDefault(){
    return new Promise((resolve, reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`SELECT * FROM options`,
                [],
                (_,result)=>{
                    resolve(result.rows._array[0])
                },
                (_,error)=>{
                    reject(error)
                }
            )
        })
    })

}

export function updateDefault(cityId){
    return new Promise((resolve, reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`UPDATE options SET city_id = ? WHERE id = 1`,
                [cityId],
                (_,result)=>{
                    resolve(result.rows._array[0])
                },
                (_,error)=>{
                    reject(error)
                }
            )
        })
    })

}