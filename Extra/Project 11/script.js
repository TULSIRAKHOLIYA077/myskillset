const imageElement = document.getElementById("cat");
const changeButton = document.getElementById("button");

changeButton.addEventListener("click", () => {

    changeButton.innerText = "PARTY OVER!";
    changeButton.style.backgroundColor = "deepskyblue";
    imageElement.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";

    return;
});

