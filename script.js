let number=document.querySelector("#num");
let num=0;
let inputs=document.querySelector(".inputs");
let container1=document.querySelector(".container1");
let container2=document.querySelector(".container2");
let container3=document.querySelector(".container3");
let calculate=document.querySelector("#calculate")
let contri={}
let results=document.querySelector(".results");
proceed.addEventListener("click",() => {
    num=number.value;
    container2.classList.remove("hide");
    createTable();
})
const createTable=() => {
    for(let i=1;i<=num;i++){
        let names=document.createElement("input");
        names.type="text";
        names.classList.add("names");
        names.placeholder="Person " +i;
        inputs.appendChild(names);
        let input=document.createElement("input");
        input.type="number";
        input.classList.add("howmuch");
        input.placeholder="How much?";
        inputs.appendChild(input);
        container1.classList.add("hide");
    }
   
}
calculate.addEventListener("click",()=>{
    let names=document.querySelectorAll(".names");
    let num=document.querySelectorAll(".howmuch");
    let a=[]
    let b=[]
    names.forEach((name)=>{
        a.push(name.value);
    })
    num.forEach((i)=>{
        b.push(i.value);
    })
    pending(a,b);
})
const pending= (a,b)=>{
    let sum=0;
    for(let i=0;i<num;i++){
        sum+=parseInt(b[i]);
    }
    console.log(sum)
    let avg=sum/num;
    console.log(avg);
    let pendingAmount=[]
    for(let i=0;i<num;i++){
        pendingAmount.push(b[i]-avg);
    }
    printPending(a,pendingAmount);
    
}
const printPending=(a,pendingAmount)=>{
    container2.classList.add("hide");
    container3.classList.remove("hide")
    for(let i=0;i<num;i++){
        if(pendingAmount[i]<0){
            let ele=document.createElement("p")
            ele.classList.add("res");
            ele.style.backgroundColor="red";
            ele.innerText=a[i] + " owes " + -1*pendingAmount[i]
            results.append(ele);
        }
        else if(pendingAmount[i]>0){
            let ele=document.createElement("p")
            ele.classList.add("res");
            ele.style.backgroundColor="green";
            ele.innerText=a[i] + " is owed " + pendingAmount[i]
            results.append(ele);
        }
        else{
            let ele=document.createElement("p")
            ele.classList.add("res");
            ele.style.backgroundColor="yellow";
            ele.innerText=a[i] + " is settled";
            results.append(ele);
        }
    }
}