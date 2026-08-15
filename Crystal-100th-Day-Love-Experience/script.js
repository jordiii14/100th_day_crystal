const reasons=[
"The way you say my name.","Your little tantrums… even when they drive me crazy. 😂",
"How you can make me smile from miles away.","Your laugh.","The softness in your heart.",
"The way you care about the people you love.","Your random little messages.","Your beautiful eyes.",
"The way you make ordinary conversations memorable.","How you can be both my peace and my chaos.",
"Your courage.","Your honesty.","The way you forgive.","Your patience with me.",
"Your cute reactions.","The little things you remember.","Your voice.","The way you get excited.",
"Your sense of humor.","The way you make me feel wanted.","Your kindness.","Your determination.",
"Your beautiful smile.","The way you look when you're happy.","Your silly side.",
"How you make distance feel smaller.","The way you tell me about your day.","Your dreams.",
"Your heart.","Your loyalty.","The way you make me laugh when I need it.",
"Your sleepy moments.","Your stubborn side. 😭","The way you can turn a bad day around.",
"Your little habits.","The way you trust me.","Your warmth.","Your personality.",
"How you make me want to become better.","Your courage to keep going.","Your beautiful soul.",
"The way you make me feel at home.","Your little jokes.","The way you miss me.",
"Your patience when I'm busy.","How you still choose us.","Your sweetness.","Your confidence.",
"The way you care.","Your presence.","Because you make me grateful.",
"Because you're one of my favorite people.","Because you understand me.","Because you challenge me.",
"Because you make me dream bigger.","Because you make me smile at my phone.",
"Because you are worth the effort.","Because you are worth choosing.","Because you are you.",
"Because your happiness matters to me.","Because your tears matter too.","Because I want to protect your peace.",
"Because I want to celebrate your wins.","Because I want to support your dreams.",
"Because I want to make more memories.","Because I want to see where our story goes.",
"Because I love your little imperfections.","Because I don't need perfect days to love you.",
"Because I still get excited to hear from you.","Because I still miss you.",
"Because I still want to know everything about you.","Because you keep surprising me.",
"Because you make love feel like a choice worth making.","Because you make me pray with gratitude.",
"Because you make me believe in tomorrow.","Because I can be myself with you.",
"Because you make me laugh until my cheeks hurt.","Because you are precious to me.",
"Because you deserve to be loved gently.","Because you deserve reassurance.",
"Because you deserve someone who keeps trying.","Because I want to be that person.",
"Because we've made it through hard moments.","Because we've also made beautiful ones.",
"Because 100 days became 100 memories.","Because I want 100 more days.",
"Because I want 1,000 more conversations.","Because I want more adventures.",
"Because I want more prayers together.","Because I want more laughter.",
"Because I want more ordinary days with you.","Because I want more birthdays.",
"Because I want more anniversaries.","Because I want to keep choosing you.",
"Because after 100 days… I still choose you."
];
const cards=document.getElementById("cards");
reasons.forEach((text,i)=>{const c=document.createElement("article");c.className="card reveal";c.innerHTML=`<span class="num">${String(i+1).padStart(3,"0")}</span><p>${text}</p>`;cards.appendChild(c)});
document.getElementById("begin").addEventListener("click",()=>document.querySelector(".story").scrollIntoView({behavior:"smooth"}));
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
document.getElementById("music").addEventListener("click",()=>alert("Add your favorite song as music.mp3 inside the folder, then change the audio setup in script.js if you want background music. The site works perfectly without it."));
