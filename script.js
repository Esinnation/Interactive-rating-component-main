const submitBtn= document.getElementById('submit-btn')
const select1= document.getElementById('select1')
const select2= document.getElementById('select2')
const select3= document.getElementById('select3')
const select4= document.getElementById('select4')
const select5= document.getElementById('select5')
const rating=document.getElementById('rating')
const submitted=document.getElementById('submitted')
const home =document.getElementById('home')

select1.addEventListener('click',function(){
    rate1()
})
select2.addEventListener('click',function(){
    rate2()
})
select3.addEventListener('click',function(){
    rate3()
})
select4.addEventListener('click',function(){
    rate4()
})
select5.addEventListener('click',function(){
    rate5()
})

function rate1(){
    select1.classList.add('active')
    select2.classList.remove('active')
    select3.classList.remove('active')
    select4.classList.remove('active')
    select5.classList.remove('active')
    rate=1;
}
function rate2(){
    select1.classList.remove('active')
    select2.classList.add('active')
    select3.classList.remove('active')
    select4.classList.remove('active')
    select5.classList.remove('active')
    rate=2;
}
function rate3(){
    select1.classList.remove('active')
    select2.classList.remove('active')
    select3.classList.add('active')
    select4.classList.remove('active')
    select5.classList.remove('active')
    rate=3;
}
function rate4(){
    select1.classList.remove('active')
    select2.classList.remove('active')
    select3.classList.remove('active')
    select4.classList.add('active')
    select5.classList.remove('active')
    rate=4;
}
function rate5(){
    select1.classList.remove('active')
    select2.classList.remove('active')
    select3.classList.remove('active')
    select4.classList.remove('active')
    select5.classList.add('active')
    rate=5;
}
function submit(){
    home.classList.add('hide')
    submitted.classList.remove('hide')
    rating.textContent=rate

}
submitBtn.addEventListener('click',function(){
    submit()
})



