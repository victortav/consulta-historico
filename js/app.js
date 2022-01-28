var dataSet = ""

// [
//     ["Tiger Nixon","System Architect","Edinburgh","61","2011/04/25","$320,800"  ],
//     ["Garrett Winters","Accountant","Tokyo","63","2011/07/25","$170,750"  ],
//     ["Ashton Cox","Junior Technical Author","San Francisco","66","2009/01/12","$86,000"  ],
//     ["Cedric Kelly","Senior Javascript Developer","Edinburgh","22","2012/03/29","$433,060"  ],
//     ["Airi Satou","Accountant","Tokyo","33","2008/11/28","$162,700"  ]
// ]

$.getJSON("./js/data2.json", function(json) {
    dataSet = json;
});


$(document).ready(function() {
//    loadIntoTable("./js/data.json", document.querySelector("table"));
    $('#tableOriginal').DataTable({
        data: dataSet
    } );
} );

async function loadIntoTable(url, table){
    //const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    //const tableFooter = table.querySelector("tfoot");

    const response = await fetch(url);
    const { headers, rows } = await response.json();

    console.log(rows);

    // Clear the table
    // tableHead.innerHTML = "<tr></tr>";
    // tableFooter.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

    // Populate the headers
    // for (const headerText of headers) {
    //     const headerElement = document.createElement("th");

    //     headerElement.textContent = headerText;
    //     tableHead.querySelector("tr").appendChild(headerElement);
    // }

    // Populate the Footer
    // for (const headerText of headers) {
    //     const footerElement = document.createElement("th");

    //     footerElement.textContent = headerText;
    //     tableFooter.querySelector("tr").appendChild(footerElement);
    // }

    // Populate the rows

    for (const row of rows){
        const rowElement = document.createElement("tr");

        for(const cellText of row){
            const cellElement = document.createElement("td");

            cellElement.textContent = cellText;
            rowElement.appendChild(cellElement);
        }

        tableBody.appendChild(rowElement);
    }
}

//loadIntoTable("./js/data.json", document.querySelector("table"));
