let diceArray = [];

class Die {
    constructor() {
        this.value;
        this.roll();
        this.div = document.createElement('div');//DOM elements
        this.divText = document.createTextNode(this.value);
        this.div.append(this.divText);
        this.div.style.border = '2px solid brown';
        this.div.style.height = '100px';
        this.div.style.width = '100px';
        this.div.style.textAlign = 'center';
        this.div.style.margin = '5px';
        this.div.style.display = 'inline-block';
        this.div.style.lineHeight = '100px';
        document.getElementById('die-container').append(this.div);

        //THIS classses event listener
        this.div.addEventListener('click', () => {
            this.roll();
            this.div.innerText = this.value;
        });


        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            let id = diceArray.indexOf(this);
            diceArray.splice(id,1);
        });

    }

    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
    } 

}


document.getElementById('genDie').addEventListener('click', () => {
    let myDie = new Die();
    diceArray.push(myDie);
});

document.getElementById('rollDie').addEventListener('click', () => {
    diceArray.forEach(myDie => {
        myDie.roll();
        myDie.div.innerText = myDie.value;
    })
});

document.getElementById('sumDie').addEventListener('click', () => {
    let sumDie = 0;
    diceArray.forEach(die => {
        sumDie += die.value;

    })
    alert('The sum of all dice is' + sumDie);

});













