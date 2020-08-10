document.querySelector('.gif').style.display='none'
document.querySelector('.second-part').style.display='none'


document.querySelector('.calculate-btn').addEventListener('click', (e)=>{
    
    document.querySelector('.gif').style.display='block'

    setTimeout(calculateResults, 3000)
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
        const monthlyInterest=(interest/100) * amount,
              totalInt=monthlyInterest*duration,
              totalAmnt=totalInt+amount

        totalAmount.value=(totalInt+amount)
        totalInterest.value=totalInt
        monthlyPayment.value=totalAmnt/duration
        weeklyPayment.value=totalAmnt/52

        console.log(amount, interest, duration)
        document.querySelector('.second-part').style.display='block'
        document.querySelector('.gif').style.display='none'
        
    }else{
        document.querySelector('.gif').style.display='none'
        console.log('empty')
    }
    




   
    
}