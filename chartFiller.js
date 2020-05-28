const monthLabel = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
const weekLabel = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var dataSet = {
  label: 'BLANK DATASET',
  steppedLine: 'false',
  data: 'I AM BLANK DATA',
  fill: 'false'
}

weekOftestData = makeArrayOfWeights(7,140,160);
makeDataSet(weekLabel,true,weekOftestData,false);
testDataSet = dataSet
console.log(testDataSet);

function makeDataSet(label, steppedLine, data, fill){
  
  dataSet.label = label;
  dataSet.steppedLine = steppedLine;
  dataSet.data = data;
  dataSet.fill = fill;
}

function makeData(labels, dataSets){
  let data;

  data.labels = labels;
  data.datasets = dataSets;

  return data;
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function makeArrayOfWeights(index,starting,ending){
  let weightArray = [];
  
  for(let i = 0; i < index; i++){
    let weight = round(randomNumber(starting,ending), 1);
    weightArray.push(weight);
  }

  return weightArray;
  
}

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}



