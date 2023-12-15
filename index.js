// code your solution here

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
mondayWork();
mondayWork('work from home');
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  saturdayFun();
  saturdayFun('swim');
  function wrapAdjective(visualFlair = "*") {
    return function(adjective = "special") {
      return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
  }
  
  


  