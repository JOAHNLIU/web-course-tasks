function whosPaying(names) {
    var randomIndex = Math.floor(Math.random() * names.length);
    var selectedPerson = names[randomIndex];
    return selectedPerson + " is going to buy lunch today!";
}
