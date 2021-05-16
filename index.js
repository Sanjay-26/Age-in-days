function ageInDays() {
    var h1 = document.createElement('h1');
    var birthYear = prompt('Your Birthyear ?');
    var days = (2021 - birthYear)*365;
    var result = document.createTextNode('You are ' + days +' days old.' )
    h1.setAttribute('id', 'result');
    h1.appendChild(result)

    document.getElementById('bottom').appendChild(h1)
}

function reset() {
    document.getElementById('result').remove();
}