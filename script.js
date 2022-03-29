
var  button =document.querySelector('#setting ')
var div =document.querySelector('#sbottom')

var on =true;
setting.addEventListener('click',function(){
    if(on){
        document.querySelector("#sbottom").style.display="initial"
        on=false
    }
    else{
        document.querySelector("#sbottom").style.display="none"
        on=true
    }
})


 arr = [
    {name:"Walter White", status:"Status : Presumed dead", Occupation:"Occupation : High School Chemistry Teacher, Meth King Pin",  date:"date of Birth :09-07-1958" },
    {name:"Jesse Pinkman", status:"Status : Presumed dead", Occupation:"Occupation : High School Chemistry Teacher, Meth King Pin",  date:"date of Birth :09-07-1958"   } ,
    {name:"Skyler White" , status:"Status : Presumed dead", Occupation:"Occupation : High School Chemistry Teacher, Meth King Pin",  date:"date of Birth :09-07-1958"  },
    {name:"Walter White Jr.",  status:"Status : Presumed dead", Occupation:"Occupation : High School Chemistry Teacher, Meth King Pin",  date:"date of Birth :09-07-1958"  },
    {name:"Henry Schrader",   status:"Status : Presumed dead", Occupation:"Occupation : High School Chemistry Teacher, Meth King Pin",  date:"date of Birth :09-07-1958" },
    
    
]
 
var clutter="";
    
    arr.forEach(function(elem,index) {


        clutter+=`<div class="cards">
        <h2 data-index="${index}">${elem.name}</</h2>
        <hr>
        <div class="details">
          <h4 data-index="${index}"> ${elem.status} </h4>
          <h5 data-index="${index}"> ${elem.Occupation} </h5>
          <h6 data-index="${index}"> ${elem.date} </h6>
         
   
      </div>
     </div>`
    });
    document.querySelector("#card").innerHTML=clutter;


    var  button =document.querySelector('#ab ')
    var div =document.querySelector('#backend i')
    
    ab.addEventListener("click",function(){
      document.querySelector("#backend").style.display="initial"
    })
    div.addEventListener("click",function(){
        document.querySelector("#backend").style.display="none"
      })
     
    //   back section 2


    var  button =document.querySelector('#cd ')
    var div =document.querySelector('#backend i')
    
    cd.addEventListener("click",function(){
      document.querySelector("#backend").style.display="initial"
    })
    div.addEventListener("click",function(){
        document.querySelector("#backend").style.display="none"
      })
     
    //   back section 3

      var  button =document.querySelector('#de ')
    var div =document.querySelector('#backend i')
    
    de.addEventListener("click",function(){
      document.querySelector("#backend").style.display="initial"
    })
    div.addEventListener("click",function(){
        document.querySelector("#backend").style.display="none"
      })

    //   back section 4

    var  button =document.querySelector('#ef ')
    var div =document.querySelector('#backend i')
    
    ef.addEventListener("click",function(){
      document.querySelector("#backend").style.display="initial"
    })
    div.addEventListener("click",function(){
        document.querySelector("#backend").style.display="none"
      })
     
      //   back section 5

      var  button =document.querySelector('#jk ')
    var div =document.querySelector('#backend i')
    
    jk.addEventListener("click",function(){
      document.querySelector("#backend").style.display="initial"
    })
    div.addEventListener("click",function(){
        document.querySelector("#backend").style.display="none"
      })

      
    