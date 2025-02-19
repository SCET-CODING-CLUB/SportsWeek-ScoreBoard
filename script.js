const sheetId = "YOUR_SHEET_ID"; 
const apiKey = "YOUR_GOOGLE_SHEETS_API_KEY";
const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        let table = document.getElementById("matches");
        let rows = data.values.slice(1);  // Skip headers
        rows.forEach(row => {
            let tr = document.createElement("tr");
            row.forEach(cell => {
                let td = document.createElement("td");
                td.innerText = cell;
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });
    })
    .catch(error => console.error("Error loading data:", error));