var a="abcd"  ;

function string(index,value){
    let s=''
    for(let i =0;i<=index;i++){
        if(i==0) s+=String.fromCharCode(value.charCodeAt(0)-32)
        else s+=value
    }
    return  s
}
s=''
for(let i in a){
     s+=string(i,a[i])+'-'
}


console.log(s.slice(0,s.length-1))