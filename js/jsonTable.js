function getHeadings(givenData) {
	let singleObject = givenData[0];
	var headings = [];
	for (var x in singleObject) {
		headings.push(x);
	}
	return headings;
}

function getTable(headings, rows, resultRegion) {
	var table = "<table style='border: 5px;'>\n" +
		getTableHeadings(headings) +
		getTableBody(rows) +
		"</table>";
	htmlInsert(resultRegion, table);
}

function getJoinedTable(headings, rows, resultRegion) {
	var table = "<table>\n" +
		getTableHeadings(headings) +
		getJoinedTableBody(rows) +
		"</table>";
	htmlInsert(resultRegion, table);
}

function getTableHeadings(headings) {
	var firstRow = "  <tr>";
	for (var i = 0; i < headings.length; i++) {
		firstRow += "<th>" + headings[i] + "</th>";
	}
	firstRow += "</tr>\n";
	return (firstRow);
}

function getJoinedTableBody(rows) {
	var body = "";
	for (var i = 0; i < rows.length; i++) {
		body += "  <tr>";
		var row = rows[i];
		if (row.id) {
			body += "<td>" + row.id + "</td>";
		}
		if (row.witness_id) {
			body += "<td>" + row.witness_id + "</td>";
		}
		if (row.crime_id) {
			body += "<td>" + row.crime_id + "</td>";
		}
		if (row.transcript) {
			body += "<td>" + row.transcript + "</td>";
		}
		if (row.date) {
			body += "<td>" + row.date + "</td>";
		}
		if (row.first_name) {
			body += "<td>" + row.first_name + "</td>";
		}
		if (row.last_name) {
			body += "<td>" + row.last_name + "</td>";
		}
		if (row.gender) {
			body += "<td>" + row.gender + "</td>";
		}
		if (row.hair_col) {
			body += "<td>" + row.hair_col + "</td>";
		}
		if (row.eye_col) {
			body += "<td>" + row.eye_col + "</td>";
		}
		if (row.arrested) {
			body += "<td>" + row.arrested + "</td>";
		}
		if (row.email) {
			body += "<td>" + row.email + "</td>";
		}
		if (row.phone) {
			body += "<td>" + row.phone + "</td>";
		}
		if (row.crime) {
			body += "<td>" + row.crime + "</td>";
		}
		if (row.location) {
			body += "<td>" + row.location + "</td>";
		}
		if (row.resolved) {
			body += "<td>" + row.resolved + "</td>";
		}
		if (row.Arrested_num) {
			body += "<td>" + row.Arrested_num + "</td>";
		}
		body += "</tr>\n";
	}
	return (body);

}

function htmlInsert(id, htmlData) {
	document.getElementById(id).innerHTML = htmlData;
}