const classes = [{
  name: 'Class 1',
  studentIds: [1, 2]
}, {
  name: 'Class 2',
  studentIds: []
}, {
  name: 'Class 3',
  studentIds: []
}];

// sort classes array in descending order
classes.sort(function compare (a, b) {
  let classA = a.name.toLowerCase();
  let classB = b.name.toLowerCase();

  let comparison = 0;

  if (classA > classB) {
    comparison = -1;
  } else if (classA < classB) {
    comparison = 1;
  }
  return comparison;
})

// add list container to the DOM
let app = document.getElementsByClassName('app')[0];
let container = document.createElement('div');
let classList = document.createElement('ul');
container.setAttribute('class', 'class-container');
classList.setAttribute('class', 'class-list');
container.appendChild(classList);
app.appendChild(container);

// loop through the classes array and create and append the necessary DOM elements
classes.map(function (singleClass) {
  let classElement = document.createElement('li');
  let classTitle = document.createElement('div');
  let classInfo = document.createElement('div');
  let image = document.createElement('img');
  let classCount = document.createElement('div');
  let classButton = document.createElement('button');
  let buttonText = document.createTextNode('Begin');
  let classTitleText = document.createTextNode(singleClass.name);
  let classSummary = document.createTextNode(`${singleClass.studentIds.length} Students`);

  classElement.setAttribute('class', 'class-element');
  classInfo.setAttribute('class', 'class-info');
  image.setAttribute('class', 'class-image');
  image.setAttribute('alt', `${singleClass.name.toLowerCase()} image`)
  classTitle.setAttribute('class', 'class-title');
  classCount.setAttribute('class', 'class-count');
  image.setAttribute('src',
    'https://s3-us-west-2.amazonaws.com/vidcode/assets/coursethumbs/creative-coding.png');
  classButton.setAttribute('class', 'class-button');

  classButton.appendChild(buttonText);
  classCount.appendChild(classSummary);
  classTitle.appendChild(classTitleText);
  classInfo.appendChild(classTitle);
  classInfo.appendChild(classCount);
  classElement.appendChild(image);
  classElement.appendChild(classInfo);
  classElement.appendChild(classButton);
  classList.appendChild(classElement);
});
