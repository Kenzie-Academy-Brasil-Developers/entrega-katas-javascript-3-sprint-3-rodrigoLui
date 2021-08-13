const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function criaCaixa() {
    
    const div = document.createElement('div')
    
    div.classList.add('kata')
    return div
}

function showResults (n) {
    const body = document.querySelector('body')
    const p = document.createElement('p')
    p.innerText = `${n}`
    body.appendChild(p)
}

function kata1() {
    // implemente o código do kata 1 aqui
    for (let i = 1; i <= 25; i++) {
        showResults(i)
    }
} kata1()

function kata2() {
    // implemente o código do kata 2 aqui
    for (let i = 25; i >= 1; i--) {
        showResults(i)
    }
} kata2 ()

function kata3() {
    // implemente o código do kata 3 aqui
    for (let i = -1; i >= -25; i--) {
        showResults(i)    
    }
}kata3()

function kata4() {
    // implemente o código do kata 4 aqui
    for (let i = -25; i <= -1; i++) {
        showResults(i)
    }
}kata4()

function kata5() {
    // implemente o código do kata 5 aqui
    for (let i = 25; i >= -25; i--) {
        if (i % 2 != 0) {
            showResults(i)   
        }
    }
}kata5()

function kata6() {
    // implemente o código do kata 6 aqui
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            showResults(i)
        }        
    }
}kata6()

function kata7() {
    // implemente o código do kata 7 aqui
    for (let i = 1; i <= 100; i++) {
        if (i % 7 === 0) {
            showResults(i)
        }        
    }
}kata7()

function kata8() {
    // implemente o código do kata 8 aqui
    for (let i = 100; i >= 1; i--) {
        if (i % 7 === 0) {
            showResults(i)
        }     
        if (i % 3 === 0) {
            showResults(i)
        }   
    }
}kata8()

function kata9() {
    // implemente o código do kata 9 aqui
    for (let i = 0; i < 100; i++) {
        if (i % 5 === 0) {
            if (i % 2 != 0) {
                showResults(i)                
            }
        }
    }
}kata9()

function kata10() {
    // implemente o código do kata 10 aqui
    for (let i = 0; i < sampleArray.length; i++) {
        showResults(sampleArray[i])
    }
}kata10()

function kata11() {
    // implemente o código do kata 11 aqui
    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 2 === 0) {
            showResults(sampleArray[i])            
        }
    }
}kata11()

function kata12() {
    // implemente o código do kata 12 aqui
    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 2 === 1) {
            showResults(sampleArray[i])            
        }
    }
}kata12()

function kata13() {
    // implemente o código do kata 13 aqui
    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 8 === 0) {
            showResults(sampleArray[i])            
        }
    }
}kata13()

function kata14() {
    // implemente o código do kata 14 aqui
    for (let i = 0; i < sampleArray.length; i++) {
        let result = sampleArray[i] * sampleArray[i]
        showResults(result)            
    }
}kata14()

function kata15() {
    // implemente o código do kata 15 aqui
    let aux = 0
    for (let i = 1; i <= 20; i++) {
        aux = aux + i
    }
    showResults(aux)  
}kata15()

function kata16() {
    // implemente o código do kata 16 aqui
    let aux = 0
    for (let i = 0; i < sampleArray.length; i++) {
        aux = aux + sampleArray[i]
    }
    showResults(aux)
} kata16()

function kata17() {
    // implemente o código do kata 17 aqui
    let result = 0
    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] > result) {
            result = sampleArray[i]
        }
    }
    for (let i = 0; i < sampleArray.length; i++) {

        if (result > sampleArray[i]) {
            result = sampleArray[i]
        }
    }
    showResults(result)
}kata17()

function kata18() {
    // implemente o código do kata 18 aqui
    let result = 0
    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] > result) {
            result = sampleArray[i]
        }
    }
    showResults(result)
}kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
