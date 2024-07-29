"use strict";
const generateTable = () => {
  const number = parseInt(document.getElementById("numberInput").value);
  const tableContainer = document.getElementById("tableContainer");
  tableContainer.innerHTML = "";
  if (isNaN(number) || number < 1) {
    tableContainer.innerHTML =
      "<p>Please enter a valid number greater than 0.</p>";
    return;
  }
  const table = `<table>${Array.from(
    { length: 10 },
    (_, i) => `
        <tr>
            <td>${number}</td>
            <td>x</td>
            <td>${i + 1} = ${number * (i + 1)}</td>
        </tr>`
  ).join("")}
    </table>`;
  tableContainer.innerHTML = table;
};
document.getElementById("generateBtn").addEventListener("click", generateTable);
document.getElementById("numberInput").addEventListener("keypress", (event) => {
  if (event.key === "Enter") generateTable();
});
