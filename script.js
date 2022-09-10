const url ='https://jsonplaceholder.typicode.com/users'
const pre =document.querySelector('pre')

const getfROM =async (text) =>{
  const response =await fetch(url)
const data= await response.json()
pre.textContent=JSON.stringify(data,null,2)+' '+text
return data
}
getfROM('some text')
.then(data=>{
  localStorage.setItem('data',JSON.stringify(data))
})