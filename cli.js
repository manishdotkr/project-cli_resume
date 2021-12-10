console.log("\n*** RESUME ***\n")
var inquirer = require('inquirer');

const cp = require('child_process')


displayDetails()

function displayDetails()
{
  inquirer
    .prompt([
      {
          type: 'list',
          name: 'Selection',
          choices: ['About' , 'Skills' , 'Projects' , 'Academics' , 'GitHub' , 'Linkdin']

      }
    ])
    // .then((answers) => {
    .then((choices) => {
      if(choices.Selection == 'About')
      {
        console.log(`
        CARROM RAMWANU 
        JUICE PIWANU 
        MAJAA NI LIFE
                    -munna bhai (MBBS)
        `)
        
        Back()
      }

      else if(choices.Selection == 'Skills')
      {
        console.log(`
        
        C , C++ , JS , DSA 
        
        `)
        Back()
      }
      else if(choices.Selection == 'Projects') Projects();
      
      else if(choices.Selection == 'Academics')
      {
        console.log
        (`
        -->B. Tech in Information Technology
        Maharaja Surajmal Institute of Technology[upto 3rd year   8.036 CGPA]
        
        -->Diploma
        PUSA Institute of Technology  [ 57.3 % ]  
        
        -->10th from CBSE
        Deepanshu Public School [7 CGPA ]
        `)
        Back()
      }
      
      else if(choices.Selection == 'GitHub') 
      {
        cp.execSync('start https://github.com/officialmanishkr98')
        displayDetails()
      }

      else if(choices.Selection == 'Linkdin') 
      {
        cp.execSync('start https://www.linkedin.com/in/manish-kumar-3a2a721bb')
        displayDetails()
      }


    })
}

function Back()
{
  inquirer
    .prompt([
      {
          type: 'list',
          name: 'GoBack',
          choices: ['--> Back']

      }
    ])

    .then((choices) => {
      if(choices.GoBack == '--> Back') displayDetails() 
    })
}

function Projects()
{
  inquirer
    .prompt([
      {
          type: 'list',
          name: 'Projects',
          choices: ['Algorithm Visualizer' , 'Portfolio Website' , '--> Back']

      }
    ])

    .then((choices) => {
      if(choices.Projects == 'Algorithm Visualizer')
      {
        console.log('Algorithm Visualizer Research Paper')
        cp.execSync('start https://drive.google.com/file/d/1--4Cg2EMJEeoaZLuEobf9jz0GzKokA5M/view?usp=sharing')
        Projects()
      }
      else if(choices.Projects == 'Portfolio Website')
      {
        console.log('Portfolio Website')
        cp.execSync('start https://officialmanishkr98.github.io/PRJCT/')
        Projects()
      }

      else if(choices.Projects == '--> Back')
      {
        displayDetails()
      }
    })
}


  