function checkAge() {
    const ageField = document.getElementById('age-input')
    const ageText = ageField.value;
    const errorP = document.getElementById('error')
    try {
        const age = parseInt(ageText)

        if(isNaN(age)){
            throw 'Please enter a valid age'
        } else if(age <18){
            throw 'bacca kaccha no allowed'
        }else{
            errorP.innerText = 'Done'
            errorP.style.color = 'lightgreen'
        }
    }
    catch (err) {
        console.log('ERROR:', err)
        errorP.innerText = 'something rong, ' + err
    }
    finally{
        console.log('all done inside try catch')
    }
    console.log(999999)

}