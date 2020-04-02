
//get mean of quiz variable
var quizMean = function(student)
    {
        return d3.mean(student.quizes);
    }

//get mean of homework
var hwMean = function(student)
    {
        return d3.mean(student.homework);
    };

//get mean of tests
var testMean = function(student)
    {
        return d3.mean(student.test);
    };
       
//make a column
var makeCol = function(rows, accessor)
    {
        rows.append("td")
            .text(accessor);
    };

//access image
var getImage = function(rows, accessor)
    {
        rows.append("td")
            .append("img")
            .attr("src", accessor);
    };

var createtable = function(student)
    {
        var rows = 
            d3.select("table")
            .selectAll("tr")
            .data(student)
            .enter()
            .append("tr");
            
        //image
        getImage(rows, function(student)
            {
                    return student.picture;
            });
            
        //quiz mean
        makeCol(rows, function(student)
            {
            return quizMean;
            });
        
        //hw mean
        makeCol(rows, function(student)
            {
            return hwMean;
            });
        
        //test mean
        makeCol(rows, function(student)
            {
            return testMean;
            });
        
        //grade on final
        makeCol(rows, function(student)
            {
            return student.final;
            });
    }




//promise
var classPromise = d3.json("classData.json");

classPromise.then(function(student)
                  {
                    console.log("Data Collected",student);
                  createtable(student);
},
                  function(error)
                  {
                    console.log("Mishap", error);
});