const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const redP = document.createElement('p');
redP.textContent="Hey, I'm red!";
redP.setAttribute('style','color: red');

const blueH3 = document.createElement('h3');
blueH3.textContent="I'm a blue h3!";
blueH3.style.color = 'blue'

const newCon = document.createElement('div');
newCon.setAttribute('style','border: solid black; background-color:pink')

const newH1 = document.createElement('h1')
newH1.textContent='Im in a div!'

const divP = document.createElement('p')
divP.textContent='Me too!'

container.appendChild(content);
container.appendChild(redP);
container.appendChild(blueH3)

container.appendChild(newCon)
newCon.appendChild(newH1)
newCon.appendChild(divP)