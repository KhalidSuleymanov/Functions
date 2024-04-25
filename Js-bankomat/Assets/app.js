function Check() {
    var credit = Number(document.getElementById("Credit").value)
    var time = Number(document.getElementById("Time").value)
    var percent = Number(document.getElementById("Percent").value)
    var totalPercent = credit + ((credit * percent) / 100);
    var oneMonth = totalPercent / time;
    console.log(oneMonth);
}
