const language = {
    name:"Javascript",
    type:"Programming Language",
    year: 1995,
    features: {
        firstClassFunctions: true,
        prototypeBased: true,
        asyncProgramming: true
    }
}
// console.log(language.name);

const { features: lang } = language; //object destructuring

console.log(lang.firstClassFunctions);
