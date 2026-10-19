const courses = [
 {id:"cpp",title:"C++ Programming",category:"Programming",level:"Beginner",modules:12,icon:"C++",color:"#e7efff",ink:"#2463d5",desc:"Build a strong foundation in programming, variables, loops and functions."},
 {id:"dsa",title:"Data Structures & Algorithms",category:"Computer Science",level:"Beginner",modules:15,icon:"⌘",color:"#e1f8ef",ink:"#15966b",desc:"Understand arrays, linked lists, stacks, queues, trees and searching."},
 {id:"math",title:"Mathematics",category:"Mathematics",level:"All levels",modules:10,icon:"∑",color:"#fff0dc",ink:"#e58a14",desc:"Revise core mathematical concepts with concise explanations."},
 {id:"web",title:"Web Development",category:"Web Development",level:"Beginner",modules:8,icon:"▣",color:"#eee9ff",ink:"#6a48df",desc:"Learn HTML, CSS and JavaScript to create your first website."},
 {id:"python",title:"Python Basics",category:"Programming",level:"Beginner",modules:10,icon:"Py",color:"#fff3d6",ink:"#a77905",desc:"Get started with Python syntax, data types, conditions and loops."},
 {id:"networks",title:"Computer Networks",category:"Computer Science",level:"Intermediate",modules:8,icon:"⌘",color:"#e7f0ff",ink:"#3669cf",desc:"Explore network layers, protocols, addressing and data transfer."}
];
const notes = [
 {title:"C++ Basics Notes",subject:"C++ Programming",size:"2.4 MB",content:"C++ Basics\n\n1. Variables store values in named memory locations.\n2. Common types: int, float, double, char, bool and string.\n3. Use if/else for decisions and loops to repeat instructions.\n4. A function groups reusable instructions.\n5. Arrays store multiple values of the same type.\n\nPractice: write a program to find the largest of three numbers."},
 {title:"Data Structures Notes",subject:"DSA",size:"3.1 MB",content:"Data Structures — Quick Notes\n\nArray: contiguous collection of elements, usually O(1) indexed access.\nLinked List: nodes connected through links.\nStack: LIFO (last in, first out). Common operations: push and pop.\nQueue: FIFO (first in, first out). Common operations: enqueue and dequeue.\nBinary Search: works on sorted data and takes O(log n) time.\n\nRemember to analyse both time and space complexity."},
 {title:"Mathematics Formula Sheet",subject:"Mathematics",size:"1.8 MB",content:"Mathematics Formula Sheet\n\n(a+b)^2 = a^2 + 2ab + b^2\n(a-b)^2 = a^2 - 2ab + b^2\na^2 - b^2 = (a-b)(a+b)\nSlope between two points = (y2-y1)/(x2-x1)\nArea of a circle = πr²\nPythagoras theorem: a² + b² = c²"},
 {title:"HTML & CSS Quick Guide",subject:"Web Development",size:"2.0 MB",content:"HTML & CSS Quick Guide\n\nHTML gives a webpage its structure. CSS controls its appearance.\nCommon HTML elements: header, nav, main, section, article, footer.\nUse class attributes to target groups of elements in CSS.\nFlexbox is useful for one-dimensional layouts; Grid is useful for two-dimensional layouts.\nMedia queries help pages adapt to different screen sizes."},
 {title:"Python Basics Notes",subject:"Python",size:"2.2 MB",content:"Python Basics\n\nUse print() to display output and input() to read text input.\nVariables do not require explicit type declarations.\nConditions use if, elif and else.\nLoops include for and while.\nLists store ordered collections and dictionaries store key-value pairs.\nFunctions are defined using def."}
];
const videos = [
 {title:"C++ Programming for Beginners",desc:"Start with variables, conditions and loops.",duration:"12 min",url:"https://www.youtube.com/results?search_query=C%2B%2B+programming+for+beginners"},
 {title:"Data Structures — Arrays",desc:"Learn how arrays store and access data.",duration:"10 min",url:"https://www.youtube.com/results?search_query=data+structures+arrays+explained"},
 {title:"Binary Search Explained",desc:"Understand binary search with a visual walkthrough.",duration:"14 min",url:"https://www.youtube.com/results?search_query=binary+search+explained"},
 {title:"HTML & CSS Basics",desc:"Create your first responsive webpage.",duration:"18 min",url:"https://www.youtube.com/results?search_query=HTML+CSS+beginner+tutorial"},
 {title:"Python in 15 Minutes",desc:"A quick introduction to Python fundamentals.",duration:"15 min",url:"https://www.youtube.com/results?search_query=Python+basics+beginner+tutorial"},
 {title:"Computer Networks Intro",desc:"Get familiar with protocols and network layers.",duration:"16 min",url:"https://www.youtube.com/results?search_query=computer+networks+basics+explained"}
];
const $ = id => document.getElementById(id);
function renderCourses(){
 const query=$("courseSearch").value.toLowerCase().trim(), cat=$("courseCategory").value;
 const filtered=courses.filter(c=>(cat==="All"||c.category===cat)&&`${c.title} ${c.category} ${c.desc}`.toLowerCase().includes(query));
 $("courseCount").textContent=`${filtered.length} course${filtered.length===1?"":"s"}`;
 $("courseGrid").innerHTML=filtered.map(c=>`<article class="course-card"><div class="course-top"><span class="course-icon" style="background:${c.color};color:${c.ink}">${c.icon}</span><span class="course-tag">${c.level}</span></div><h3>${c.title}</h3><p>${c.desc}</p><div class="course-bottom"><span>${c.modules} modules · ${c.category}</span><button class="text-button" data-course="${c.id}">View course →</button></div></article>`).join("");
 $("courseEmpty").classList.toggle("hidden",filtered.length>0);
 document.querySelectorAll("[data-course]").forEach(btn=>btn.addEventListener("click",()=>showCourse(btn.dataset.course)));
}
function showCourse(id){
 const c=courses.find(x=>x.id===id); if(!c)return;
 alert(`${c.title}\n\n${c.desc}\n\n${c.modules} starter modules\n\nThis is a demo course page. You can add your own lessons in script.js.`);
}
function renderNotes(){
 const q=$("noteSearch").value.toLowerCase().trim();
 const filtered=notes.filter(n=>`${n.title} ${n.subject}`.toLowerCase().includes(q));
 $("notesList").innerHTML=filtered.map((n,i)=>`<div class="note-row"><span class="pdf-icon">PDF</span><div class="note-info"><h3>${n.title}</h3><p>${n.subject} · ${n.size} · Revision sheet</p></div><button class="download-button" data-note="${notes.indexOf(n)}">Download</button></div>`).join("");
 $("notesEmpty").classList.toggle("hidden",filtered.length>0);
 document.querySelectorAll("[data-note]").forEach(btn=>btn.addEventListener("click",()=>downloadNote(Number(btn.dataset.note))));
}
function downloadNote(i){
 const n=notes[i];const blob=new Blob([n.content],{type:"text/plain;charset=utf-8"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=n.title.replace(/[^a-z0-9]+/gi,"_")+".txt";document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
}
function renderVideos(){
 $("videoGrid").innerHTML=videos.map((v,i)=>`<article class="video-card"><a class="video-thumb" href="${v.url}" target="_blank" rel="noopener noreferrer" aria-label="Find ${v.title} on YouTube"><span class="play">▶</span><span class="duration">${v.duration}</span></a><div class="video-info"><h3>${v.title}</h3><p>${v.desc}</p><a class="video-link" href="${v.url}" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></div></article>`).join("");
}
$("courseSearch").addEventListener("input",renderCourses);$("courseCategory").addEventListener("change",renderCourses);$("noteSearch").addEventListener("input",renderNotes);
$("menuToggle").addEventListener("click",()=>$("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>$("nav").classList.remove("open")));
renderCourses();renderNotes();renderVideos();
