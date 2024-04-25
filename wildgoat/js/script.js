
let texteGoat = [
    "Hallo, ich bin Bruno! Ich lebe hoch oben in den Alpen, wo die Luft dünn und die Berge steil sind. Mein Lieblingsessen sind saftige Alpengräser und -kräuter, die ich mit meinen scharfen Sinnen finde. Ich liebe es zu klettern und kann sogar auf den steilsten Felswänden balancieren. Mein Charakter ist abenteuerlustig und mutig, und mein Lieblingsspiel ist ein Wettrennen den Berg hinauf!",
    "Hallo, ich bin Heidi! Als erfahrene Bockdame führe ich meine Herde sicher durch die Berge. Mein Lieblingsessen sind die knackigen Alpenblumen, die im Frühling blühen. Ich bin eine fürsorgliche und schützende Anführerin, die immer darauf achtet, dass alle Herdenmitglieder sicher sind. Mein Lieblingsspiel ist ein sanfter Tanz im Mondschein mit den anderen Weibchen meiner Herde.",
    "Servus, ich bin Max! Mit meinen imposanten Hörnern und meiner beeindruckenden Statur bin ich der Star meiner Junggesellengruppe. Mein Lieblingsessen ist das saftige Alpengras, das ich in den höheren Lagen finde. Ich bin selbstbewusst und dominant, aber auch ein guter Kumpel für meine Bockfreunde. Mein Lieblingsspiel ist das Hörnerstoßen mit meinen Kameraden, um meine Stärke zu zeigen.",
    "Hallo, ich bin Lina! Ich genieße das Leben in den Bergen in vollen Zügen. Mein Lieblingsessen sind die süßen Alpenkräuter, die ich finde, wenn ich auf Entdeckungstour gehe. Ich bin neugierig und verspielt, und ich liebe es, neue Orte in den Bergen zu erkunden. Mein Lieblingsspiel ist Verstecken spielen zwischen den Felsen und Bäumen der Berglandschaft."
];
let headGoatText =[
    "Bruno, der Bergkletterer",
    "Heidi, die Herdenführerin",
    "Max, der Macho",
    "Lina, die Lebenskünstlerin"
];

let textGoat = document.getElementById("textGoat");
document.querySelectorAll(".card").forEach((card, index) => {
    card.addEventListener("click", () => {
        textGoat.textContent = texteGoat[index];
        document.querySelector(".headGoatText").textContent = headGoatText[index];
    });
});