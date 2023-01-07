let urls = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const delBtn = document.getElementById("del-btn")
const ulEl = document.getElementById("ul-el")
const urlsLocal = JSON.parse(localStorage.getItem("urls"))

if (urlsLocal){
    urls = urlsLocal
    render(urls)
}
const tabs = [
    {url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ/"}
]

tabBtn.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        let activeTab = tabs[0]
        let activeTabId = activeTab.id
    })
    let myurl = tabs[0].url
    urls.push(myurl)
    localStorage.setItem("urls", JSON.stringify(urls))
    console.log(tabs[0].url)
    render(urls)
})

function render(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++){
        listItems += `
        <li>
        <a target ='_blank' href='${leads[i]}'>
            ${leads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
} 

delBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    urls = []
    render(urls)
 })

inputBtn.addEventListener("click", function(){
    urls.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("urls", JSON.stringify(urls))
    render(urls)
    
 })
