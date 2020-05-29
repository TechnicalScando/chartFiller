const monthLabels = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
const weekLabels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekTitle = ["This is a week of data"];

var dataSet = {
  label: 'BLANK DATASET',
  steppedLine: 'false',
  data: ['BLANK DATA'],
  fill: 'false'
}

var data = {
  labels: 'BLANK LABEL',
  datasets: 'BLANK DATASETS'
}

weekOftestData = makeArrayOfWeights(7,140,160);
makeDataSet(weekTitle,true,weekOftestData,false);
testDataSet = dataSet;
let testDataSets = [];
testDataSets.push(testDataSet);
makeData(weekLabels,testDataSets);
testData = data;
console.log(testData);


console.log(testDataSet);

function makeDataSet(label, steppedLine, data, fill){
  
  dataSet.label = label;
  dataSet.steppedLine = steppedLine;
  dataSet.data = data;
  dataSet.fill = fill;
}

function makeData(labels, dataSets){

  data.labels = labels;
  data.datasets = dataSets;
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

function pushNewDataSet(dataset){

}





