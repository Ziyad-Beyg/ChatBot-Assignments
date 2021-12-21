let englishMarksEL 
let mathMarksEL 
let urduMarksEL
let chemistryMarksEL 
let physicMarksEL 
let totalMarksInput = document.getElementById('totalMarks')
let obtainedMarksInput = document.getElementById('obtainedMarks')
let percentageInput = document.getElementById('percentage')
let gradeInput = document.getElementById('grade')
let readOnlyDivs1 = document.getElementById('readOnlyDivs1')
let readOnlyDivs2 = document.getElementById('readOnlyDivs2')

function percentageCalculator() {
    englishMarksEL = document.getElementById('english').value
    mathMarksEL = document.getElementById('math').value
    urduMarksEL = document.getElementById('urdu').value
    chemistryMarksEL = document.getElementById('chemistry').value
    physicMarksEL = document.getElementById('physics').value

    if(englishMarksEL == '' || mathMarksEL == '' || urduMarksEL == '' || chemistryMarksEL == '' || physicMarksEL == ''){
        alert("INPUT FIELDS ARE MANDATORY!!!")
    }
    else if((englishMarksEL >= 100 || englishMarksEL <= 0) || (mathMarksEL >= 100 || mathMarksEL <= 0) || (urduMarksEL >= 100 || urduMarksEL <= 0) || (chemistryMarksEL >= 100 || chemistryMarksEL <= 0) || (physicMarksEL >= 100 || physicMarksEL <= 0)){
        alert("INVALID INPUT!!!")
    }
    else{
        let totalMarks = 500;
        let obtainedMarks = parseInt(englishMarksEL) + parseInt(mathMarksEL) + parseInt(urduMarksEL) + parseInt(chemistryMarksEL) + parseInt(physicMarksEL)
        let percentage = ((obtainedMarks / totalMarks) * 100).toFixed(2)
        let grade

        if(percentage >= 100){
            grade = 'Invalid Result'
        }
        else if(percentage >= 80 && percentage < 100){
            grade = 'A+'
        }
        else if(percentage >= 70 && percentage < 80){
            grade = 'A'
        }
        else if(percentage >= 60 && percentage < 70){
            grade = 'B'
        }
        else if(percentage >= 50 && percentage < 60){
            grade = 'C'
        }
        else if(percentage >= 40 && percentage < 50){
            grade = 'D'
        }
        else if(percentage < 40 ){
            grade = "FAIL"
        }

        readOnlyDivs1.style.display = 'flex'
        readOnlyDivs2.style.display = 'flex'
        totalMarksInput.innerHTML = `TOTAL MARKS : ${totalMarks}`
        obtainedMarksInput.innerHTML = `OBTAINED MARKS : ${obtainedMarks}`
        percentageInput.innerHTML = `PERCENTAGE : ${percentage} %`
        gradeInput.innerHTML = `GRADE : ${grade}`

        // console.log(obtainedMarksInput)

        // obtainedMarksInput = obtainedMarksInput + obtainedMarks
        // englishMarksEL.value, mathMarksEL.value, urduMarksEL.value, chemistryMarksEL.value, physicMarksEL.value,
        console.log( totalMarks, obtainedMarks, percentage, grade)

        // obtainedMarksInput = obtainedMarksInput + obtainedMarks

    }

}