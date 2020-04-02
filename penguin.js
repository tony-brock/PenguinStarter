var classPromise = d3.json("classData.json");


classPromise.then(function(student)
                  {
                    console.log("Data Collected",student);
},
                  function(error)
                  {
                    console.log("Mishap", error);
});
                  


