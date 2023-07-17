fetch("https://api.github.com/repos/Agille-Cred/slider-agille/branches/master")
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            console.error("Erro ao buscar data do último commit")
        }
    })
    .then(function (data) {
        if (data.commit.commit.author.date) {
            try {
                var lastCommitDate = new Date(data.commit.commit.author.date);
                setFooterText("Última atualização: " + convertDate(lastCommitDate));
            } catch (error) {
                console.error(error)
            }
        }
    })
    .catch(function (error) {
        console.error(error)
    });


function convertDate(date) {
    var newDate = String(date.getDate()).padStart(2, '0') + "/" + (String(date.getMonth() + 1)).padStart(2, '0') + "/" + date.getFullYear() + " " + String(date.getHours()).padStart(2, '0') + ":" + String(date.getMinutes()).padStart(2, '0');
    return newDate;
}

function setFooterText(text) {
    var tag = document.getElementById("update")
    tag.innerHTML = text;
    tag.style.fontWeight = "bold";
}

function requestFullScreen() {
    var el = document.body;
    // suportar mais navegadores.
    var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen
        || el.mozRequestFullScreen || el.msRequestFullScreen;

    if (requestMethod) {
        requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") {
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}