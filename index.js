const inquirer = require('inquirer');
const {menu, questions} = require('./helpers/questions')
const {getAction} = require('./helpers/functions')


function ask(ques){
    inquirer
        .prompt(ques)
        .then((ans) => {
            if(ans.do === "Quit"){
                console.log('Goodbye :)')
                return
            }
            const action = getAction(ans.do)
        })

};

ask(menu);