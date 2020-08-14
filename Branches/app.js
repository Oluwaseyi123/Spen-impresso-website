document.querySelector('.gif').style.display='none'
document.querySelector('.second-part').style.display='none'


document.querySelector('.calculate-btn').addEventListener('click', (e)=>{
    
    document.querySelector('.gif').style.display='block'

    setTimeout(calculateResults, 2000)
    e.preventDefault()
})


function calculateResults(){
    const amount=document.querySelector('.amount').value,
          interest=document.querySelector('.interest').value,
          duration=document.querySelector('.duration').value,
          totalAmount=document.querySelector('.totalAmount'),
          totalInterest=document.querySelector('.totalInterest'),
          weeklyPayment=document.querySelector('.weeklyPayment'),
          monthlyPayment=document.querySelector('.monthlyPayment')
          

    if(amount!=='' || interest!=='' || duration!==''){
        const amnt=Number(amount)
        const int=Number(interest)
        const dur= Number(duration)
        const monthlyInterest=(int/100) * amnt,
              totalInt=monthlyInterest*dur,
              totalAmnt=totalInt+amnt,
              processingFee=(5/100)*amnt

        totalAmount.value=(totalInt+amnt)
        totalInterest.value=totalInt
        monthlyPayment.value=(totalAmnt/dur).toFixed(2)
        weeklyPayment.value=(totalAmnt/52).toFixed(2)

        
        document.querySelector('.second-part').style.display='block'
        document.querySelector('.gif').style.display='none'
        
    }else{
        document.querySelector('.gif').style.display='none'
        showError('Please fill the input fields', 'error')
    } 
}

function showError(message, classname){
    const div=document.createElement('div')
    
    div.appendChild(document.createTextNode(message))
    div.className=classname
    const loanCalculator= document.querySelector('.loanCalculator')
    const heading= document.querySelector('.loan-heading')

    loanCalculator.insertBefore(div, heading)

    setTimeout(function(){
        document.querySelector('.error').remove()
    }, 3000)
    
}
