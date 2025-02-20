const browserType = "mozilla";
browserType.length;

browserType[0];

browserType[browserType.length - 1];


//includes method

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}


//indexOf() method
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20


//slice() method
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());// "my name is mud"
console.log(radData.toUpperCase());// "MY NAME IS MUD"

//replace() method
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"

//replaceAll() method
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"


//active learning: String methods
const list = document.querySelector('.output ul');
list.textContent = "";
const greetings = ['Happy Birthday!',
  'Merry Christmas my love',
  'A happy Christmas to all the family',
  'You\'re all I want for Christmas',
                 'Get well soon'];

for (const greeting of greetings) {
  // 検査条件は下記の行の括弧の中に入れ、
  // 現在あるものと置き換える必要があります
  if (greeting.includes("Christmas")) {
    const listItem = document.createElement('li');
    listItem.textContent = greeting;
    list.appendChild(listItem);
  }
}


//active learning: String methods2
const list = document.querySelector('.output ul');
list.textContent = "";
const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (const city of cities) {
  // この下にコードを書いて下さい
  //console.log(cities.toLowerCase());
  let lowstr = city.toLowerCase();
  let firststr = city[0].toUpperCase();
  let answer = lowstr;
  answer = answer.replace(lowstr[0], firststr[0]);


  const result = answer;
  
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}


//active learning: String methods3
const list = document.querySelector('.output ul');
list.textContent = '';
const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                  'GNF576746573fhdg4737dh4;Greenfield',
                  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                  'SYB4f65hf75f736463;Stalybridge',
                  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (const station of stations) {
  // この下にコードを書いてください
  const code = station.slice(0,3);
  const semiColon = station.indexOf(';');
  const name = station.slice(semiColon + 1);
  const result = `${code}: ${name}`;
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}