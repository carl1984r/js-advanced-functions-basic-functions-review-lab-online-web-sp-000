// Your code here

function saturdayFun(firstvar="roller-skate") {
  return `This Saturday, I want to ${firstvar}!`;
}

function mondayWork(firstvar="go to the office") {
  return `This Monday, I will ${firstvar}.`;
}

function wrapAdjective(name='*') {
    return function(firstvar='special') {
      return `You are ${name}${firstvar}${name}!`;
    }
  }
