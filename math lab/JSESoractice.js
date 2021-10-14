console.log("apple".includes("pl"))
console.log("apple".includes("pp"))
console.log("apple".includes("lp"))
const message = ("There Is Only One God")
console.log(message.includes("One"))

var alfaz = ("zindagi na milegi dobara")
console.log(alfaz.includes("wapas"))

let Sher = ("Di Azane Kabhi Europe Ki Kali saon Me Kabhi Africa Ke Tapte hue Sahraon Me Shan Ankhon Me Na Jajti The Jahadaro Ki Kalma Padhte The Ham Chao Me Talwaro Ki Tujh Se Sarkash Hua Koi To Bighad Jate The Degh Kya Chiz Hai Ham Tob Se ladh Jate The")
console.log(Sher.startsWith("Europe"))

console.log("Mai Kar Sakta Hu ".repeat(13))

let [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]=[3,7,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)
console.log(i)
console.log(j)
console.log(k)
console.log(l)
console.log(m)
console.log(n)
console.log(o)
console.log(p)
console.log(q)
console.log(r)
console.log(s)
console.log(t)
console.log(u)
console.log(v)
console.log(w)
console.log(x)
console.log(y)
console.log(z)
var name = "ali"
var message = `hello ${name}`
console.log(message)

const [Ali,Sameer] =[
    
       "Name:Ali,Number:123",
    
    
        "Name:Sameer,Number:789"
    
]

console.log(Ali)    


const Friends = 
   [
    {
        Name : "Ali",
        Number : "123",
        Galli : "09"
    },
    {
        Name : "Sameer",
        Number : "786",
        Galli : "10"
    },
    {
        Name : "SaifDon",
        Number : "432",
        Galli : "10"
    },
    {
        Name : "Ahetesham",
        Number : "987",
        Galli : "11"
    },
    {
        Name : "Adil",
        Number : "45678",
        Galli : "01"
    },
    {
        Name : "Shadab",
        Number : "9876",
        Galli : "02"
    },
    {
        Name : "Khatib",
        Number : "987",
        Galli : "556"
    },
    {
        Name : "Sohel",
        Number : "9876",
        Galli : "10"
    }   
]
console.log(Friends.indexOf(2))


console.log(Friends.unshift(
    {
    Name : "Amer",
    Number : "2343",
    Galli : "07"
}
))
console.log(Friends[0])
const data = [1,2,3,4,5,6,7,8,9,0]
console.log(...data)


const Power = (a,b) => (a**b)

console.log(Power(3,3))

const Power = 2**2
Math.pow(2,2)

// import Math

console.log(Math.PI)

const AreaOfCircle = (r) => Math.ceil(2 * Math.PI * r)

console.log(AreaOfCircle(5))

const sum = (b) => 5 + b

console.log(sum(5))

const solution=(second,minutes)=>{
var answer= 5*second+(300*minutes)
console.log(answer)
}
solution(5,2)
const soulution=(capacity,perHour)=>{
    const totalTime=(capacity/perHour)
    console.log(`time requred to fill the bucket is ${totalTime}`)

}
console.log(soulution(15,2));