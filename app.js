const SportsApiUrl=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=f40f7bcf3a8e496c8749440a58d64842`;
window.fetch(SportsApiUrl).then(data=>{
    data.json().then(sportsnews=>{
        console.log(sportsnews)
        let sportsData=sportsnews.articles;
        let output="";
        for(let sports of sportsData){
            output +=`
           
            <h1 class="h1Title"><a href="${SportsApiUrl}" target_blank>${sports.title}</a></h1>
            <p>${sports.description}</p>
            <img src="${sports.urlToImage}" />
            <p> ${sports.publishedAt}</p>
            `;
        }
        document.getElementById("left").innerHTML=output;
    }).catch(err =>console.log(err))
}).catch(err=> console.log(err));

const EntertainmentApiUrl=`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=f40f7bcf3a8e496c8749440a58d64842`;
window.fetch(EntertainmentApiUrl).then(data=>{
    data.json().then(entertainmentnews =>{
        console.log(entertainmentnews)
        let entertainmentData=entertainmentnews.articles;
        let output="";
        for(let entertainments of entertainmentData){
            output +=`
           
            <h1 class="h1Title"><a href="${EntertainmentApiUrl}" target-blank>${entertainments.title}</h1>
            <p>${entertainments.description}</p>
            <img src="${entertainments.urlToImage}" />
            <p> ${entertainments.publishedAt}</p>
            `;
        }
        document.getElementById("right").innerHTML=output;
    }).catch(err =>console.log(err))
}).catch(err=> console.log(err));


const TopHeadlineApiUrl=`https://newsapi.org/v2/top-headlines?country=in&apiKey=f40f7bcf3a8e496c8749440a58d64842`;
window.fetch(TopHeadlineApiUrl).then(data=>{
    data.json().then(TopHeadlinenews =>{
        console.log(TopHeadlinenews)
        let TopHeadlineData=TopHeadlinenews.articles;
        let output="";
        for(let TopHeadline of TopHeadlineData){
            output +=`
           
            <h1 class="h1Title"><a href="${TopHeadlineApiUrl}" target-blank>${TopHeadline.title}</a></h1>
            <p>${TopHeadline.description}</p>
            <img src="${TopHeadline.urlToImage}" />
            <p> ${TopHeadline.publishedAt}</p>
            `;
        }
        document.getElementById("middle").innerHTML=output;
    }).catch(err =>console.log(err))
}).catch(err=> console.log(err));

//time javascript here

setInterval(()=>{
    var time=new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML=time;
},1000);