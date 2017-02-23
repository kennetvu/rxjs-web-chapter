const content = document.getElementById("content");
content.innerHTML = '';

export default function updateContent(val) {
  content.innerHTML += `${val} <br />`;
}

export function replaceContent(val) {
  content.innerHTML = `${val} <br />`;
}
