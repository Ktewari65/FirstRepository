   /*let name = {
    f : "Kartik",
    L : "Tewari"
   }

   let f="rahul"
     let printname =function(hometown,State,city)  {
        console.log(this.f +' '+ this.L + '  from  '+ hometown +","+ State+' ' + city)  
     }
     

     printname.call(name, "Dehradun", "utt", "haldwani ")
       let a=  ["Dehradun", "utt", "Na"]

       printname.apply(name,a)

       let obj=printname.bind(name,a)
       console.log(obj)




let obj = {
     nam : "Hary"
}

function first(){
    let a=10
    
    function second(b){
       
        console.log(a)
        console.log(b)
        console.log(obj.nam)
        
       
        

    }
    
    second(10)
}

first();


  


  
  const newpromise =new Promise((resolve,reject) =>{
      resolve()
  })
  

  newpromise
  .then(() =>{
    console.log("One")
  })
  .then(()=>{
    return new Promise((resolve,reject) => {
       
    setTimeout(()=>{
        console.log("Two")
         resolve()
    },1000)
  })
}) 
.then(() =>{
   
    console.log("Three")
})
.catch((value) =>{
  console.log("err")
})

    async function kartik(){
let delhiw= new Promise((resolve,reject) =>{
    setTimeout(() =>{
        console.log("211 degree")
    resolve ("data")
    },7000)
})


let Banglorew= new Promise((resolve,reject) =>{
    setTimeout(() =>{
        console.log("222 degree")
    resolve ("data")
    },2000)
})

let delhi= await delhiw
let beanglore = await Banglorew

return [delhi,beanglore]

    }
console.log("Weather Report>>>>>")
    let a= kartik()
    console.log(a)
  // a.then((value)=>{
    //console.log(value)

   //})



const cart = ["shoes","kurta"]

  first(20,function(){
         scond(function(){
              third(function(){
                console.log("Hi")
              })
         })
 })

 let a=first(shoes)
 console.log(a)

*/

const obj={
  f :"Kartik",
  L :"tEWARI"
}

const kartik = function(){
  console.log(this.f+ ' '+ this.l)
}


kartik.call(obj)
   
 
  




 
 
 
 



