//https://sequelize.org/docs/v6/getting-started/
npm install --save sequelize
npm install --save mysql2


app.js

//way  1 to insert
//model object create in the dom
const sampleDishTableObjCreate = dishTable.build({col1:"name",});
if(sampleDishTableObjCreate instanceOf dishTable){console.log("create",sampleDishTableObjCreate.col1)}
//save/insert to the database //data ek klin thibbot ek update wenw
sampleDishTableObjCreate.save().then((res)=>console.log(res)).catch((err)=>console.log(err))

//way 2 to insert
dishTable.create({col1:"name",}).then((res)=>console.log(res)).catch((err)=>console.log(err));


//find all
dishTable.findAll().then((res)=>console.log(res)).catch((err)=>console.log(err))

//find all
dishTable.findAll({attributes:["col1",col2]}).then((res)=>console.log(res)).catch((err)=>console.log(err))

//find all
dishTable.findAll({include:CategoryTable}).then((res)=>console.log(res)).catch((err)=>console.log(err))


dishTable.findAll({where:{id:10}}).then((res)=>console.log(res)).catch((err)=>console.log(err))

//selected primary key - id
dishTable.findByPk(10).then((res)=>console.log(res)).catch((err)=>console.log(err))

//update
dishTable.update({col1:""},{where:{id:10}}).then((res)=>console.log(res)).catch((err)=>console.log(err))

//delete
dishTable.destroy({where:{id:10}}).then((res)=>console.log(res)).catch((err)=>console.log(err))

//test the sequalized mysql database connection
// try {
//   sequelize
//     .authenticate()
//     .then(() => {
//       console.log('Connection has been established successfully.')
//     })
//     .catch((err) => {
//       console.log('connection err : \n', err)
//     })
// } catch (error) {
//   console.error('Unable to connect to the database:', error)
// }

//one by one table create or sync
// dishTable
//   .sync({ alter: true })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))

//1-1 , 1-man , m-many association forignkey set
// categoryTable.hasMany(dishTable);
// dishTable.belongsTo(categoryTable);