let score = 0

function generateQuestion(){

    let a = Math.round(Math.random() * 20)
    let b = Math.round(Math.random() * 20)
    document.querySelector('.question').innerHTML = `What is ${a} * ${b}?`;
    let correctAnswerIndex = Math.floor(Math.random() * 4)

    for (let i=0; i<4; i++){
        let answerDiv = document.createElement('div')
        answerDiv.classList.add('answer')
        if (i===correctAnswerIndex){
            answerDiv.innerHTML = a * b
        } else {
            let c = Math.round(Math.random() * 20)
            let d = Math.round(Math.random() * 20)
            answerDiv.innerHTML = c * d
        }
        
        document.querySelector('.answers').appendChild(answerDiv)
        
        //console.log(correctAnswerIndex)
        answerDiv.addEventListener('click', () => {
            if(i===correctAnswerIndex){
                document.body.style.background = "green"
                score ++
            } else{
                document.body.style.background = "red"
                //document.body.style.backgroundBlendMode='rgb(' + 235  + ',' + 50 + ',' + 25 + ')', 'rgb(' + 65 + ',' + 45 + ',' + 45 + ')';

                //document.body.style.background = 'rgb(' +  + ',' + b + ',' + c + ')'
            }
            setTimeout(() => {
                //I want to set background back to origional
                document.body.style.background = "black"
                document.querySelector('.answers').innerHTML = ""
                if (i!=correctAnswerIndex){
                    console.log(score)
                    document.querySelector('.app').innerHTML= (`Game Over. Score: ${score}`)
                    let retry = document.createElement('div')
                    retry.classList.add('retry')
                    retry.innerHTML=("Retry")
                    document.querySelector('.app').appendChild(retry)
                    retry.addEventListener('click', () => {
                        location.reload();
                    })
                    //document.querySelector('.score').appendChild=(score)
                    //put in game over code
                } else {
                    generateQuestion()
                }
            }, 500)
            //document.querySelector('.answers').innerHTML =""
        })
    }
} 
generateQuestion()

//make divs like earlier for game over
//document.querySelector(".app").innerHTML="Game Over"