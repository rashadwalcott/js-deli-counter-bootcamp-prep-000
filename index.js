var numInLine=0;
function takeANumber(katzDeliLine){
  numInLine++;
  katzDeliLine.push(numInLine);
  return ` You are number ${numInLine} in line.`;
}

function nowServing(katzDeliLine){
  console.log(numInLine);
  if(katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`;
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return `The line is currently empty.`;
  }
  var startString = `The line is currently: `;
  let i=0;
  for(i;i<katzDeliLine.length-1;i++){
    startString += `${i + 1}. ${katzDeliLine[i]}, `;
  }
    return startString += `${i + 1}. ${katzDeliLine[i]}`;
  }
