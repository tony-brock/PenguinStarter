var classPromise = d3.json("classData.json");

classPromise.then(function(student)
                  {
                    console.log(student);
                  }
                  function(error)
                  {
                    console.log("error",error);
                  });

