function play() {
    let songText = ""
    for (let i = 99; i > 2; i--) {
        songText += i + " bottles of beer on the wall, " + i + " bottles of beer<br>"
        songText += "Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall<br><br>"
    }
    songText += "2 bottles of beer on the wall, 2 bottles of beer<br>\
    Take one down and pass it around, 1 bottle of beer on the wall<br><br>\
    1 bottle of beer on the wall, 1 bottle of beer<br>\
    Take one down and pass it around, no more bottles of beer on the wall<br><br>\
    No more bottles of beer on the wall, no more bottles of beer<br>\
    Go to the store and buy some more, 99 bottles of beer on the wall"

    let textDiv = document.getElementById('text')
    textDiv.innerHTML = songText
}