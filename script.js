let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let requestBodyEl = document.getElementById("requestBody");
let httpResponseEl = document.getElementById("httpResponse");
let requestStatusEl = document.getElementById("requestStatus");
let loadingE1 = document.getElementById("loading");


function sendPostRequest() {
    let url = "https://gorest.co.in/public-api/users";
    let requestBody = requestBodyEl.value;
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 484799c35c5c500a47c5306facb3212419c7e2dc1dc18546ec4b04b4cab4f0f4",
        },
        body: requestBody
    };
    loadingE1.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            requestStatusEl.classList.remove("d-none");
            loadingE1.classList.add("d-none");

            let requestStauts = jsonData.code;
            console.log(requestStauts);
            let httpResponse = JSON.stringify(jsonData);
            requestStatusEl.textContent = requestStauts;
            httpResponseEl.textContent = httpResponse;
        });
}


sendPostRequestBtnEl.addEventListener("click", sendPostRequest);