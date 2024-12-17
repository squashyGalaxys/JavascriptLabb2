//Variabel för antal i varukorgen

let cartCount = 0;
//Funktion för att uppdatera varukorgen och visa hur många varor det är i
//hämtar elementet med ID "cartIcon" från dokument och sätter value-attribut till värdet av "cartCount".
// hämtar elementet med ID "removeFromCartButton" och använder "classList.toggle" för att lägga till/ta bort klassen "hidden" 
//beroende på om "cartCount" är 0 eller ej. 
//Döljer/visar knappen för att ta bort varor beroende på om varukorgen är tom.
function updateCartDisplay() {
    let cartIcon = document.getElementById('cartIcon');
    cartIcon.setAttribute('value', cartCount);
    document.getElementById('removeFromCartButton').classList.toggle('hidden', cartCount == 0);
}
//Funktion för att lägga till i varukorgen
//ökar värdet av "cartCount" med 1 (lägger till en vara i varukorgen) och anropar "updateCartDisplay" för att uppdatera vad som visas
function addToCart() {
    cartCount++;
    updateCartDisplay();
}
//Funktion för att ta bort ur varukorgen
//minskar värdet av "cartCount" med 1 (tar bort en vara från varukorgen) 
//anropar sen "updateCartDisplay" (endast om cartCount är större än 0 för att inte värdet ska bli negativt).
function removeFromCart(){
    if (cartCount > 0) {
        cartCount--;
        updateCartDisplay();
    }
}
//Anropat funktionen "updateCartDisplay"
updateCartDisplay();
