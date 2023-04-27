let Game = [{"id": 1, "question": "Select all Convicts", "solution": "select*fromconvict", "hint":"Select * from table", "erd":"./images/ConvictERD.jpg"},
{"id": 2, "question": "Select all Convicts who have brown hair", "solution": "select*fromconvictwherehair_col='brown'", "hint":"Select * from table WHERE column = value", "erd":"./images/ConvictERD.jpg"},
{"id": 3, "question": "Select all Convicts who have brown hair AND blue eyes", "solution": "select*fromconvictwherehair_col='brown'andeye_col='blue'", "hint":"Select * from table WHERE condition AND condition", erd:"./images/ConvictERD.jpg"},
{"id": 4, "question": "Select all Convicts with blonde OR black hair", "solution": "select*fromconvictwherehair_col='blonde'orhair_col='black'", hint:"Select * from table WHERE condition OR condition", erd:"./images/ConvictERD.jpg"},
{"id": 5, "question": "Select all Convicts who are NOT male", "solution": "select*fromconvictwherenotgender='male'", hint:"Select * from table WHERE NOT condition", erd:"./images/ConvictERD.jpg"},
{"id": 6, "question": "Select all Convicts who's first name starts with 'F'", "solution": "select*fromconvictwherefirst_namelike'f%'", hint:"Select * from table WHERE column LIKE 'a%'", erd:"./images/ConvictERD.jpg"},
{"id": 7, "question": "Select all Convicts who's last name ends with 'E'", "solution": "select*fromconvictwherelast_namelike'%e'", hint:"Select * from table WHERE column LIKE '%a'", erd:"./images/ConvictERD.jpg"},
{"id": 8, "question": "Count all of those who have been arrested. Rename the returned column to be 'Arrested_num'.", "solution": "selectcount(*)asarrested_numfromconvictwherearrested=true", hint:"Select COUNT(*) AS new_column_name from table", erd:"./images/ConvictERD.jpg"},
{"id": 9, "question": "Select the first and last name of all Convicts who have red hair", "solution": "selectfirst_name,last_namefromconvictwherehair_col='red'", hint:"Select column1, column2 from table WHERE condition", erd:"./images/ConvictERD.jpg"},
{"id": 10, "question": "Select all Convict hair colours. Ensure that there are no repeating values", "solution": "selectdistincthair_colfromconvict", hint:"Select Distinct column from table"},
{"id": 11, "question": "Select all from Crime_Report", "solution": "select*fromcrime_report", hint:"Select * from table", "erd":"./images/WitnessReportERD.jpg"},
{"id": 12, "question": "Select all from Witness", "solution": "select*fromwitness", hint:"Select * from table", "erd":"./images/WitnessReportERD.jpg"},
{"id": 13, "question": "Select all from Witness_Report", "solution": "select*fromwitness_report", hint:"Select * from table", "erd":"./images/WitnessReportERD.jpg"},
{"id": 14, "question": "Select the crime ids where a witness made a report on 27th May 2022", "solution": "selectcrime_idfromwitness_reportwheredate='2022-05-27'", hint:"Select columns from table WHERE condition", "erd":"./images/WitnessReportERD.jpg"},
{"id": 15, "question": "Select all from witness where the email address is registered at studiopress.com and where the phone number does not end in 3458", "solution": "select*fromwitnesswhereemaillike'%@studiopress.com'andnotphonelike'%3458'", hint:"Select * from table where column LIKE condition AND NOT column LIKE condition", "erd":"./images/WitnessReportERD.jpg"},
{"id": 16, "question": "Select all data from Witness and Witness_Report", "solution": "select*fromwitness_reportjoinwitnessonwitness_report.witness_id=witness.id", hint:"Select * from table1 JOIN table2 ON table1.foreign_key = table2.primary_key", "erd":"./images/WitnessReportERD.jpg"},
{"id": 17, "question": "Select all data from Crime_Report and Witness_Report", "solution": "select*fromwitness_reportjoincrime_reportonwitness_report.crime_id=crime_report.id", hint:"Select * from table1 JOIN table2 ON table1.foreign_key = table2.primary_key", "erd":"./images/WitnessReportERD.jpg"},
{"id": 18, "question": "Select all data from the Witness, Crime_Report and the Witness_Report tables", "solution": "sselect*fromwitness_reportjoinwitnessonwitness_report.witness_id=witness.idjoincrime_reportonwitness_report.crime_id=crime_report.id", hint:"Select * from table1 JOIN table2 ON table1.foreign_key = table2.primary_key", "erd":"./images/WitnessReportERD.jpg"},
{"id": 19, "question": "Select the email and phone number of a witness who reported an arson", "solution": "selectwitness.email,witness.phonefromwitness_reportjoinwitnessonwitness_report.witness_id=witness.idjoincrime_reportonwitness_report.crime_id=crime_report.idwherecrime_report.crime='arson'", hint:"Select table.column from table1 JOIN table2 ON table1.foreign_key = table2.primary_key", "erd":"./images/WitnessReportERD.jpg"},
{"id": 20, "question": "Select the transcript, the first name and the last name of the witness, and the crime reported by a witness by the last name 'Fay'", "solution": "selectwitness_report.transcript,witness.first_name,witness.last_name,crime_report.crimefromwitness_reportjoinwitnessonwitness_report.witness_id=witness.idjoincrime_reportonwitness_report.crime_id=crime_report.idwherelast_name='fay'", hint:"Select table.column from table1 JOIN table2 ON table1.foreign_key = table2.primary_key", "erd":"./images/WitnessReportERD.jpg"},]