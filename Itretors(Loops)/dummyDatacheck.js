const todos = [{
"id": 1,
"todo": "Do something nice for someone you care about",
"completed": false,
"userId": 152
},
{
"id": 2,
"todo": "Memorize a poem",
"completed": true,
"userId": 13
},
{
"id": 3,
"todo": "Watch a classic movie",
"completed": true,
"userId": 68
},
{
"id": 4,
"todo": "Watch a documentary",
"completed": false,
"userId": 84
},
{
"id": 5,
"todo": "Invest in cryptocurrency",
"completed": false,
"userId": 163
},
{
"id": 6,
"todo": "Contribute code or a monetary donation to an open-source software project",
"completed": false,
"userId": 69
},
{
"id": 7,
"todo": "Solve a Rubik's cube",
"completed": true,
"userId": 76
},
{
"id": 8,
"todo": "Bake pastries for yourself and neighbor",
"completed": true,
"userId": 198
},
{
"id": 9,
"todo": "Go see a Broadway production",
"completed": false,
"userId": 7
},
{
"id": 10,
"todo": "Write a thank you letter to an influential person in your life",
"completed": true,
"userId": 9
},
{
"id": 11,
"todo": "Invite some friends over for a game night",
"completed": false,
"userId": 104
},
{
"id": 12,
"todo": "Have a football scrimmage with some friends",
"completed": false,
"userId": 32
},
{
"id": 13,
"todo": "Text a friend you haven't talked to in a long time",
"completed": true,
"userId": 2
},
{
"id": 14,
"todo": "Organize pantry",
"completed": false,
"userId": 46
},
{
"id": 15,
"todo": "Buy a new house decoration",
"completed": true,
"userId": 105
},
{
"id": 16,
"todo": "Plan a vacation you've always wanted to take",
"completed": true,
"userId": 162
},
{
"id": 17,
"todo": "Clean out car",
"completed": false,
"userId": 71
},
{
"id": 18,
"todo": "Draw and color a Mandala",
"completed": true,
"userId": 6
},
{
"id": 19,
"todo": "Create a cookbook with favorite recipes",
"completed": true,
"userId": 53
},
{
"id": 20,
"todo": "Bake a pie with some friends",
"completed": false,
"userId": 162
},
{
"id": 21,
"todo": "Create a compost pile",
"completed": false,
"userId": 13
},
{
"id": 22,
"todo": "Take a hike at a local park",
"completed": true,
"userId": 37
},
{
"id": 23,
"todo": "Take a class at local community center that interests you",
"completed": true,
"userId": 65
},
{
"id": 24,
"todo": "Research a topic interested in",
"completed": true,
"userId": 130
},
{
"id": 25,
"todo": "Plan a trip to another country",
"completed": false,
"userId": 140
},
{
"id": 26,
"todo": "Improve touch typing",
"completed": false,
"userId": 178
},
{
"id": 27,
"todo": "Learn Express.js",
"completed": false,
"userId": 194
},
{
"id": 28,
"todo": "Learn calligraphy",
"completed": false,
"userId": 80
},
{
"id": 29,
"todo": "Have a photo session with some friends",
"completed": true,
"userId": 91
},
{
"id": 30,
"todo": "Go to the gym",
"completed": true,
"userId": 142
}
]


// let todosValeuFetch = todos.filter((todoVal)=>{
//     return todoVal.completed == true;
// })
//  todosValeuFetch = todos.filter((todoVal)=>{
//         return todoVal.completed == true && todoVal.userId == 142;
// })
// console.log(todosValeuFetch);



const comments = [
{
"id": 1,
"body": "This is some awesome thinking!",
"postId": 242,
"likes": 3,
"user": {
"id": 105,
"username": "emmac",
"fullName": "Emma Wilson"
}
},
{
"id": 2,
"body": "What terrific math skills you're showing!",
"postId": 46,
"likes": 4,
"user": {
"id": 183,
"username": "cameronp",
"fullName": "Cameron Perez"
}
},
{
"id": 3,
"body": "You are an amazing writer!",
"postId": 235,
"likes": 2,
"user": {
"id": 1,
"username": "emilys",
"fullName": "Emily Johnson"
}
},
{
"id": 4,
"body": "Wow! You have improved so much!",
"postId": 31,
"likes": 1,
"user": {
"id": 89,
"username": "braydenf",
"fullName": "Brayden Fleming"
}
},
{
"id": 5,
"body": "Nice idea!",
"postId": 212,
"likes": 1,
"user": {
"id": 149,
"username": "wyattp",
"fullName": "Wyatt Perry"
}
},
{
"id": 6,
"body": "You are showing excellent understanding!",
"postId": 184,
"likes": 5,
"user": {
"id": 110,
"username": "danielt",
"fullName": "Daniel Taylor"
}
},
{
"id": 7,
"body": "This is clear, concise, and complete!",
"postId": 172,
"likes": 1,
"user": {
"id": 4,
"username": "jamesd",
"fullName": "James Davis"
}
},
{
"id": 8,
"body": "What a powerful argument!",
"postId": 233,
"likes": 0,
"user": {
"id": 145,
"username": "lukec",
"fullName": "Luke Cooper"
}
},
{
"id": 9,
"body": "I knew you could do it!",
"postId": 207,
"likes": 3,
"user": {
"id": 207,
"username": "jaces",
"fullName": "Jace Smith"
}
},
{
"id": 10,
"body": "Wonderful ideas!",
"postId": 87,
"likes": 0,
"user": {
"id": 86,
"username": "noram",
"fullName": "Nora Mills"
}
},
{
"id": 11,
"body": "It was a pleasure to grade this!",
"postId": 156,
"likes": 8,
"user": {
"id": 162,
"username": "mateob",
"fullName": "Mateo Bennett"
}
},
{
"id": 12,
"body": "Keep up the incredible work!",
"postId": 119,
"likes": 10,
"user": {
"id": 90,
"username": "scarlettb",
"fullName": "Scarlett Bowman"
}
},
{
"id": 13,
"body": "My goodness, how impressive!",
"postId": 108,
"likes": 10,
"user": {
"id": 87,
"username": "hunterg",
"fullName": "Hunter Gordon"
}
},
{
"id": 14,
"body": "You're showing inventive ideas!",
"postId": 20,
"likes": 8,
"user": {
"id": 77,
"username": "jonathanp",
"fullName": "Jonathan Pierce"
}
},
{
"id": 15,
"body": "You've shown so much growth!",
"postId": 6,
"likes": 2,
"user": {
"id": 17,
"username": "evelyns",
"fullName": "Evelyn Sanchez"
}
},
{
"id": 16,
"body": "Interesting thoughts!",
"postId": 14,
"likes": 5,
"user": {
"id": 199,
"username": "viviang",
"fullName": "Vivian Carter"
}
},
{
"id": 17,
"body": "I love your neat work!",
"postId": 240,
"likes": 7,
"user": {
"id": 155,
"username": "nicholase",
"fullName": "Nicholas Edwards"
}
},
{
"id": 18,
"body": "Doesn't it feel good to do such great work?",
"postId": 227,
"likes": 6,
"user": {
"id": 134,
"username": "noramx",
"fullName": "Nora Russell"
}
},
{
"id": 19,
"body": "First-rate work!",
"postId": 245,
"likes": 1,
"user": {
"id": 203,
"username": "novab",
"fullName": "Nova Cooper"
}
},
{
"id": 20,
"body": "This is fascinating information!",
"postId": 176,
"likes": 4,
"user": {
"id": 39,
"username": "lucasg",
"fullName": "Lucas Gray"
}
},
{
"id": 21,
"body": "You inspire me!",
"postId": 229,
"likes": 0,
"user": {
"id": 113,
"username": "miam",
"fullName": "Mia Miller"
}
},
{
"id": 22,
"body": "This is right on target!",
"postId": 9,
"likes": 5,
"user": {
"id": 113,
"username": "miam",
"fullName": "Mia Miller"
}
},
{
"id": 23,
"body": "What an astounding observation!",
"postId": 33,
"likes": 1,
"user": {
"id": 155,
"username": "nicholase",
"fullName": "Nicholas Edwards"
}
},
{
"id": 24,
"body": "This is very well thought out!",
"postId": 121,
"likes": 1,
"user": {
"id": 169,
"username": "jaxonb",
"fullName": "Jaxon Barnes"
}
},
{
"id": 25,
"body": "I can tell you've been practicing!",
"postId": 247,
"likes": 9,
"user": {
"id": 160,
"username": "claires",
"fullName": "Claire Foster"
}
},
{
"id": 26,
"body": "You've come a long way!",
"postId": 79,
"likes": 7,
"user": {
"id": 59,
"username": "ethanf",
"fullName": "Ethan Fletcher"
}
},
{
"id": 27,
"body": "I can tell you've been paying attention!",
"postId": 55,
"likes": 9,
"user": {
"id": 57,
"username": "nathand",
"fullName": "Nathan Dixon"
}
},
{
"id": 28,
"body": "Reading this made my day!",
"postId": 209,
"likes": 8,
"user": {
"id": 177,
"username": "xavierw",
"fullName": "Xavier Wright"
}
},
{
"id": 29,
"body": "This is very perceptive!",
"postId": 31,
"likes": 2,
"user": {
"id": 168,
"username": "lunah",
"fullName": "Luna Perez"
}
},
{
"id": 30,
"body": "What an accomplishment!",
"postId": 126,
"likes": 8,
"user": {
"id": 89,
"username": "braydenf",
"fullName": "Brayden Fleming"
},
"total": 340,
"skip": 0,
"limit": 30
}
]

let coment = comments.filter((coments)=>{
    return coments.likes >= 5;
})
console.log(coment);
