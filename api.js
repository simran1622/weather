 
 const form=document.querySelector("form")
 const search=document.querySelector("#search")
 const weather=document.querySelector("#weather")
 const getWeather=async(city)=>
 {
 let p= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=088b489f5ef78f9a3a77f1f361001150&units=metric`)
 console.log(p)
 const data=await p.json()
 return showData(data)
}
const showData=(data)=>{
    if(data.cod=="404"){
        weather.innerHTML=`<h2>City not found<h2>`
        return;
    }
    console.log(data)
    weather.innerHTML=`
    <div><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></div>
            <diV><h2>${data.main.temp} C<h2>
                <h4>${data.weather[0].main}</h4>
            </div>`
}
form.addEventListener("submit",function(event){
    getWeather(search.value)
    event.preventDefault();
})