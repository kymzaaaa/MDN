const shopping = ["パン", "牛乳", "チーズ", "ハム", "麺"];
console.log(shopping);
shopping[0] = "タヒーニ";
shopping;
// 買い物リストは [ "タヒーニ", "牛乳", "チーズ", "ハム", "麺" ] に変更されています。

const random = ["tree", 795, [0, 1, 2]];
random[2][2];


//push method
const cities = ["東京", "大阪"];
cities.push("広島");
console.log(cities); // [ "東京", "大阪", "広島" ]
cities.push("福岡", "鹿児島");
console.log(cities); // [ "東京", "大阪", "広島", "福岡", "鹿児島" ]

//unshift method
cities.unshift("札幌");
console.log(cities); // [ "札幌", "東京", "大阪" ]


//pop method
// const cities = ["東京", "大阪"];
cities.pop();
console.log(cities); // [ "東京" ]

// const cities = ["東京", "大阪"];
const removedCity = cities.pop();
console.log(removedCity); // "大阪"


//shift method
//const cities = ["東京", "大阪"];
cities.shift();
console.log(cities); // [ "大阪" ]

//splice method
//const cities = ["東京", "大阪", "仙台", "札幌"];
const index = cities.indexOf("大阪");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "東京", "仙台", "札幌" ]


//map method
function double(number) {
    return number * 2;
  }
  const numbers = [5, 2, 7, 6];
  const doubled = numbers.map(double);
  console.log(doubled); // [ 10, 4, 14, 12 ]
  


//filter method
function isLong(city) {
    return city.length > 2;
  }
  const citie = ["東京", "名古屋", "大阪", "鹿児島"];
  const longer = citie.filter(isLong);
  console.log(longer); // [ "名古屋", "鹿児島" ]
  

const dogNames = ["ポチ", "ハチ", "タロウ", "モコ"];
dogNames.toString(); //ポチ,ハチ,タロウ,モコ


const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.textContent = "";
totalBox.textContent = "";

const products = [
  'パンツ:6.99',
  '靴下:5.99',
  'T シャツ:14.99',
  'ズボン:31.99',
  '靴:23.99',
];

for (const product of products) {
  const subArray = product.split(':');
  const name = subArray[0];
  const price = Number(subArray[1]);
  total += price;
  const itemText = `${name} — $${price}`;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = `合計: $${total.toFixed(2)}`;



const list = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

list.textContent = "";

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.onclick = () => {
  // 検索ボックスが空ではない場合のみ検索語を受け付けるようにする
  if (searchInput.value !== '') {
    myHistory.unshift(searchInput.value);

    // 表示中の一覧を空にして、同じ項目が表示されないようにして、
    // 結果は検索語が入力される度に毎回作り直される
    list.textContent = "";

    // 配列をループして、リスト内の全ての検索語を表示する
    for (const itemText of myHistory) {
      const listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // 配列の長さが 5 以上になったら一番古い検索語を削除する
    if (myHistory.length >= MAX_HISTORY) {
      myHistory.pop();
    }

    // 次の検索語を受け付けるため、検索ボックスを空にしてフォーカスする
    searchInput.value = '';
    searchInput.focus();
  }
}