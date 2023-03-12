


function Show() {
    // first year second month last day

    let userYear = document.getElementById("year").value
    let userMonth = document.getElementById("month").value
    if (userMonth >= 1 && userMonth <= 12) {
        let table = document.getElementById("table");
        table.innerHTML = `
        <tr>
                <th>SAT</th>
                <th>SUN</th>
                <th>MON</th>
                <th>TUE</th>
                <th>WED</th>
                <th>THU</th>
                <th>FRI</th>

            </tr>`
        let date = new Date(userYear, userMonth, 0)
        let date2 = new Date(userYear, userMonth, 1)
        // alert(date.getDate())
        // alert(date2.getDay())
        // alert(date2.getUTCDay())
        
        let firstWeekDayOfMonth = date2.getUTCDay()
        alert(firstWeekDayOfMonth)
        let content = ""
        content += "<tr>"
        if(firstWeekDayOfMonth!=0){
            firstWeekDayOfMonth -=1;
        }
        for (let i = 0; i < firstWeekDayOfMonth ; i++) {
            content += "<td> </td>"

        }
        let counter = -1;
        for (let i = firstWeekDayOfMonth ; i < date.getDate() + firstWeekDayOfMonth ; i++) {
            counter++;
            if (i % 7 == 0 && i != 0) {
                content += "</tr>";
                content += "<tr>";
            }
            content += `<td>${counter + 1}</td>`
        }
        table.innerHTML += content;

    }
    else {

        alert("Wrong Month")

    }

    // let table = document.getElementById("table");

    // table.innerHTML += `<tr>
    //     <td>1</td>
    //     <td>2</td>
    //     <td>3</td>
    //     <td>4</td>
    //     <td>5</td>
    //     </tr>`
}

