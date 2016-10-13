// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
    // Use $.get to read in your `data/students.csv` dataset: remember, you must be running a local server
        $.get("data/students.csv", function(data, error){
           console.log(data);
            var parsedData = Papa.parse(data, {
               header: true
           }).data;
            console.log(parsedData);
            // Parse the data using Papa.parse
            

        // Use jQuery to create a table, and store that in a variable
           var lamesa = $('<table></table>');
            lamesa.addClass('table');

        // Append a table header for each key in your first observation
            Object.keys(data[0]).forEach(function(d) {
                var th = $('<th>' + d + '</th>');
                table.append(th);
                });

        // Iterate through your array and create a new table row for each element in your array
            data.forEach(function(d) {
                var tr = $('<tr>');
                
            });

            // Add a cell (<td>) for each key/value pair in your object


        // Select your `sandbox` section, and append your table to it
        });
});
