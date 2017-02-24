const content = document.getElementById("content");
content.innerHTML = '';
const title = document.getElementById("title");

export function replaceTitle(val){
  title.innerHTML = `${val}`;
}

export default function updateContent(val) {
  content.innerHTML += `${val} <br />`;
}

export function replaceContent(val) {
  content.innerHTML = `${val} <br />`;
}
