function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// Handle blue button set by click function in javascript
const blueBtn = document.getElementById('blue-btn-click');
        console.log(blueBtn);
        blueBtn.onclick = blueButton;

        function blueButton(){
            document.body.style.backgroundColor = 'blue'
        }

// handle with green button with anonymous function
const greenButton = document.getElementById('green-button');
        console.log(greenButton);

        // anonymous function
        greenButton.onclick = function (){
            document.body.style.backgroundColor = 'green';
        }

        // handle button with addEventListener
        const goldenRodBtn = document.getElementById('goldenRod-btn');
        goldenRodBtn.addEventListener('click', makeGoldenRod )
        function makeGoldenRod(){
            document.body.style.backgroundColor = 'goldenrod'
        }


        const hotPinkBtn = document.getElementById('make-hotPink');
        hotPinkBtn.addEventListener('click', function hotPink(){
            document.body.style.backgroundColor = 'hotpink';
        })

        // direct shortcut

        const lightBlue = document.getElementById('light-blue').addEventListener('click', function(){
            document.body.style.backgroundColor = 'lightblue';
        })