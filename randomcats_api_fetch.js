function getResponse() {
    const url = 'https://aws.random.cat/meow';
    fetch(url)
    .then(res1=>res1.json())
    .then(res=>{
        console.log(res);
        let data = "<h3><u>Get Cats</u></h3>";
                data = data + "<table  class='table table-primary table-striped table-hover table-bordered' style='height:150px;width:200px'>";
                data = data + "<thead class='thead-light'><tr><th>Cat Image</th></tr></thead>"
               // res.forEach(element => {
                    
                    data = data + "<td><img alt='Dog Image' style='height:150px;width:150px' class='rounded-circle' src='" + res.file + "'/></td></tr>";
                //});
                data = data + "</table>"
                document.getElementById("results").innerHTML = data;
    })
}