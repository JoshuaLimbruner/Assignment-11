const popUp=document.getElementById('pop')
const view=document.getElementById('view')
const left=document.getElementById('left')
const right=document.getElementById('right')
let index=0
const list=[{"term": "HTML","definition": "The markup language used to structure content on a web page."},
  {"term": "CSS","definition": "A language for styling the appearance of HTML elements."},
  {"term": "JavaScript","definition": "The programming language that makes web pages interactive."},
  {"term": "DOM","definition": "The Document Object Model — the browser's live, editable tree of the page."},
  {"term": "Element","definition": "A single node in the page, such as a heading, paragraph, or button."},
  {"term": "Event","definition": "Something that happens on the page, like a click or keypress, that code can respond to."},
  {"term": "Function","definition": "A reusable block of code that performs a task and can return a value."},
  {"term": "Variable","definition": "A named container that stores a value for later use."},
  {"term": "Array","definition": "An ordered list of values, written with square brackets."},
  {"term": "Object","definition": "A collection of key/value pairs, written with curly braces."},
  {"term": "JSON","definition": "A text format for storing and exchanging data, based on objects and arrays."},
  {"term": "Fetch","definition": "A browser function for loading data from a file or server."},
  {"term": "Selector","definition": "A pattern used to find and target elements, e.g. by class or id."},
  {"term": "Attribute","definition": "Extra information on an element, such as src, href, or alt."},
  {"term": "Callback","definition": "A function passed to another function to run at a later time."}]

const search=document.getElementById("search")
const wrapper=document.getElementById("wrapper")


function convertStr(str){return str.toLowerCase().replaceAll(" ","")}

function sortMethod(list){
    const sorted=list.sort((a,b)=>a.term.localeCompare(b.term))
    renderTerms(sorted)
}

search.addEventListener('input',function(){
    const searchval=convertStr(search.value)
    let results=list.filter(term=>{return convertStr(term.term).includes(searchval)})
    if(results.length===0){results=list.filter(term=>{return term.definition.includes(searchval)})}
    sortMethod(results)
})

function renderTerms(termList){
    wrapper.innerHTML=""
    const count=document.createElement('p')
    count.innerHTML="Showing "+termList.length+" out of "+list.length+" terms"
    wrapper.appendChild(count)
    if(termList.length===0){
        wrapper.innerHTML=('No matches')
        return}
    termList.forEach(term => {
        const ele=document.createElement("p")
        ele.innerHTML=term.term
        const descrip=document.createElement("div")
        descrip.innerHTML=term.definition
        ele.appendChild(descrip)
        wrapper.appendChild(ele)
    })
}

renderTerms(list)