const url = "data1.json"
document.addEventListener("DOMContentLoaded",() => {
    const userList = document.querySelector("#userList");
    
    function readAllUsers(){
        fetch(url).then((response) => response.json()).then((data) => adatokTablazatba(data))
    }
    
    function adatokTablazatba(data){
        let tablaHtml = `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Név</th>
                    <th>Életkor</th>
                    <th>Fajta</th>
                    <th>Gazda Neve</th>
                </tr>
            </thead>
            <tbody>`;
        
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            let tableRow = 
            `<tr>
                <td>${element.id}</td>
                <td>${element.nev}</td>
                <td>${element.eletkor}</td>
                <td>${element.fajta}</td>
                <td>${element.gazda_neve}</td>
            </tr>`;
            tablaHtml += tableRow;
        }
        tablaHtml += '</tbody></table>';
        userList.innerHTML = tablaHtml;
    }

    readAllUsers();
});