function mainLogic() 
{
    const emailInput = document.querySelector(".inputContainer input[type='email']");
    const verifyBtn = document.querySelector(".inputContainer button");
    const result = document.querySelector(".results");

    api_key = "ema_live_d756OCviZztsolHhmBOV0Ot2I9DcFIxHgqUTie8k";

  verifyBtn.addEventListener("click", async () => {
    const email = emailInput.value;
    const response = await fetch(
      `https://api.emailvalidation.io/v1/info?apikey=${api_key}&email=${email}`
    );

    const jsonResponse = await response.json();

    let stringInfo = "<h3>Results</h3>";
    for (key of Object.keys(jsonResponse)) 
    {
      if (jsonResponse[key] !== "" && jsonResponse[key] !== " ") 
      {
        stringInfo += `<div><span>${key}</span> : ${jsonResponse[key]}</div>`;
      }
    }
    emailInput.value = "";
    result.innerHTML = stringInfo;
  });
}

mainLogic();