const initApp = () => {
  const pascalTriangleData = pascalTriangle(6);
  renderPascalTriangle(pascalTriangleData);
  console.log(pascalTriangleData);
};

document.addEventListener("DOMContentLoaded", initApp);

const pascalTriangle = (n = 3) => {
  let stack = [];
  n = n < 3 ? 3 : n;

  let x = 0;

  while (x < n) {
    let y = 0;
    let row = [];
    while (y <= x) {
      if (y === 0 || y === x) {
        row.push(1);
      } else {
        let val = stack[x - 1][y] + stack[x - 1][y - 1];
        row.push(val);
      }
      y++;
    }
    stack.push(row);
    x++;
  }

  return stack;
};

const renderPascalTriangle = (data) => {
  let root = document.querySelector("#root");
  data.forEach((row) => {
    let div = document.createElement("div");
    div.classList.add("row");
    row.forEach((column) => {
      let item = document.createElement("div");
      item.classList.add("item");
      item.innerHTML = column;
      div.appendChild(item);
    });

    root.appendChild(div);
  });

  console.log(root);
};
