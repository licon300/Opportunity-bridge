function addReview(){
db.collection("reviews").add({
name:name.value,
message:message.value
});
}

function load(){
db.collection("scholarships").onSnapshot(s=>{
scholarList.innerHTML="";
s.forEach(d=>{
scholarList.innerHTML += `<p>${d.data().title} - ${d.data().country}</p>`;
});
});

db.collection("events").onSnapshot(s=>{
eventList.innerHTML="";
s.forEach(d=>{
eventList.innerHTML += `<p>${d.data().title}</p>`;
});
});

db.collection("reviews").onSnapshot(s=>{
reviewList.innerHTML="";
adminReviews.innerHTML="";
s.forEach(d=>{
reviewList.innerHTML += `<p><b>${d.data().name}</b>: ${d.data().message}</p>`;
adminReviews.innerHTML += `<p>${d.data().message}</p>`;
});
});
}

load();

function login(){
auth.signInWithEmailAndPassword(email.value,password.value)
.then(()=>{
login.style.display="none";
panel.style.display="block";
});
}

function addScholar(){
db.collection("scholarships").add({
title:schTitle.value,
country:schCountry.value
});
}

function addEvent(){
db.collection("events").add({
title:eventTitle.value
});
}