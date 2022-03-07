const inquirer = require("inquirer");
const { menu } = require("./helpers/questions");
const { determineAndDoAction } = require('./helpers/functions')
const initDB = require("./helpers/dbInit");


async function ask(ques, db){
  const ans = await inquirer.prompt(ques)
  if (ans.do === 'Quit'){
    console.log("Goodbye :)");
    db.end();
    return
  }
  await determineAndDoAction(ans.do, db)
  ask(menu, db)
};

function init() {
  const db = initDB()
  ask(menu, db)
};

init()