function getResponse() {
    const url = 'https://random.dog/woof.json';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
            let res=JSON.parse(this.responseText);
            console.log(res);
            let data="<h3><u>Get Dogs</u></h3>";
            data = data + "<table  class='table table-primary table-striped table-hover table-bordered 'style='height:150px;width:200px'>";
            data = data + "<thead class='thead-light'><tr><th>fileSizeBytes</th><th>Dog Image</th></thead>"
            data = data + "<td>" + res.fileSizeBytes + "</td>";
            data = data + "<td><img alt='Dog Image' style='height:150px;width:150px' class='rounded-circle' src='" + res.url + "'/></td></tr>";
        
            data = data + "</table>"
            
            document.getElementById("results").innerHTML = data;
        }
        }
    xhr.send();
}



