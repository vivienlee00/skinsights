var nameField = '@chelsea-beauty'
function submitProfile(){
    nameField = '@' + document.getElementById('nickname').value;
    sessionStorage.setItem("nameField", nameField);

    //var file = document.querySelector('input[type=file]').files[0];
    //https://codepen.io/thbwd/pen/qBKGwx
    //https://stackoverflow.com/questions/5802580/html-input-type-file-get-the-image-before-submitting-the-form
    //https://stackoverflow.com/questions/46319425/save-image-file-in-local-storage-and-retrieve-image-from-file-path-html-angularj
    //https://stackoverflow.com/questions/19183180/how-to-save-an-image-to-localstorage-and-display-it-on-the-next-page
    window.location = 'SkinConcerns.html';
}

jQuery(function ($) {
    $('.skinConcern').click(function () {
        $(this).toggleClass('highlight');
    })
})

jQuery(function ($) {
    $('.skinType').click(function () {
        $('.skinType').removeClass('highlight')
        $(this).toggleClass('highlight');
        sessionStorage.setItem("skinType", $(this).attr("id"));
        console.log(sessionStorage.getItem("skinType"));
    })
})

var skinProductsSet = new Set()
jQuery(function ($) {
    $('.skinProduct').click(function () {
        $(this).toggleClass('highlight');

        if (skinProductsSet.has($(this).attr("id"))){
            skinProductsSet.delete($(this).attr("id"));
        } else {
            skinProductsSet.add($(this).attr("id"));
            console.log($(this).attr("id"));
        }
        console.log(skinProductsSet);
        sessionStorage.setItem("skinProducts", JSON.stringify(Array.from(skinProductsSet.values())));
    })
})

$(document).ready(function() {

    document.getElementById("profileNickname").innerHTML = sessionStorage.getItem("nameField");

    var skinType = sessionStorage.getItem("skinType");
    var skinProducts = JSON.parse(sessionStorage.getItem("skinProducts"));

    const oilySkinMorning = 
    `
      <div class="productsContainer">
            <div class="productsGrid">
                  <div class="productsCell">
                  <p class="prodNum">1</p><p class="prodType">Exfoliator</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src="assets/Products/profileTakeOffTheDay.png"></a>
                  <p class="prodName">Clinique Clarifying Lotion Exfoliator 4</p>
                  </div>

                  <div class="productsCell">
                  <p class="prodNum">1</p><p class="prodType">Cleanser</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src="assets/Products/profileTakeOffTheDay.png"></a>
                  <p class="prodName">Origins Checks and Balances Polishing Face Scrub</p>
                  </div>

                  <div class="productsCell">
                  <p class="prodNum">1</p><p class="prodType">Toner</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src="assets/Products/profileTakeOffTheDay.png"></a>
                  <p class="prodName">Origins Mega-Mushroom Relief & Resilience Soothing Treatment Lotion</p>
                  </div>

                  <div class="productsCell">
                  <p class="prodNum">1</p><p class="prodType">Serum</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src="assets/Products/profileTakeOffTheDay.png"></a>
                  <p class="prodName">Dr. Jart+ Pore Remedy PHA Exfoliating Serum</p>
                  </div>


                  <div class="productsCell">
                  <p class="prodNum">1</p><p class="prodType">Eye Cream</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src="assets/Products/profileTakeOffTheDay.png"></a>
                  <p class="prodName">Origins Ginzing Vitamin C & Niacinamide Eye Cream</p>
                  </div>

                  <div class="productsCell">
                  <p class="prodNum">1</p><p class="prodType">Moisturizer</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src="assets/Products/profileTakeOffTheDay.png"></a>
                  <p class="prodName">Origins Ginzing Oil Free Energy Boosting Gel Moisturizer</p>
                  </div>


                  <div class="productsCell">
                  <p class="prodNum">1</p><p class="prodType">SPF</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src="assets/Products/profileTakeOffTheDay.png"></a>
                  <p class="prodName">Dr. Jart+ Every Sun Day Mineral Suncreen SPF 50+</p>
                  </div>
            </div>
      </div> 
    `;

    const oilySkinNight = 
    `
    <div class="productsContainer">
    <div class="productsGrid">
          <div class="productsCell">
          <p class="prodNum">1</p><p class="prodType">Makeup Remover</p>
          <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src="assets/Products/profileTakeOffTheDay.png"></a>
          <p class="prodName">Clinique Take the Day Off Cleansing Balm</p>
          </div>

          <div class="productsCell">
          <p class="prodNum">1</p><p class="prodType">Cleanser</p>
          <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src="assets/Products/profileTakeOffTheDay.png"></a>
          <p class="prodName">Clinique All About CleanTM Liquid Facial Soap Oily</p>
          </div>

          <div class="productsCell">
          <p class="prodNum">1</p><p class="prodType">Toner</p>
          <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src="assets/Products/profileTakeOffTheDay.png"></a>
          <p class="prodName">Origins Mega-Mushroom Relief & Resilience Soothing Treatment Lotion</p>
          </div>

          <div class="productsCell">
          <p class="prodNum">1</p><p class="prodType">Serum</p>
          <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src="assets/Products/profileTakeOffTheDay.png"></a>
          <p class="prodName">Dr. Jart+ Pore Remedy PHA Exfoliating Serum</p>
          </div>


          <div class="productsCell">
          <p class="prodNum">1</p><p class="prodType">Eye Cream</p>
          <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src="assets/Products/profileTakeOffTheDay.png"></a>
          <p class="prodName">Origins Ginzing Vitamin C & Niacinamide Eye Cream</p>
          </div>

          <div class="productsCell">
          <p class="prodNum">1</p><p class="prodType">Moisturizer</p>
          <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src="assets/Products/profileTakeOffTheDay.png"></a>
          <p class="prodName">Origins Ginzing Oil Free Energy Boosting Gel Moisturizer</p>
          </div>


          <div class="productsCell">
          <p class="prodNum">1</p><p class="prodType">SPF</p>
          <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src="assets/Products/profileTakeOffTheDay.png"></a>
          <p class="prodName">Dr. Jart+ Every Sun Day Mineral Suncreen SPF 50+</p>
          </div>
    </div>
</div> 

    <table>
            <tr>
                  <td class="makeupRemover">Makeup Remover: Clinique Take the Day Off Cleansing Balm</td>
            </tr>
            <tr>
                  <td class="cleanser">Cleanser: Clinique All About CleanTM Liquid Facial Soap Oily</td>
            </tr>
            <tr>
                  <td class="toner">Toner: GlamGlow SUPERTONER Exfoliating Acid Solution</td>
            </tr>
            <tr>
                  <td class="serum">Serum: Dr. Jart+ Pore Remedy PHA Exfoliating Serum</td>
            </tr>
            <tr>
                  <td class="eyeCream">Eye Cream: Origins EYE DOCTOR Moisture Care For Skin Around Eyes</td>
            </tr>
            <tr>
                  <td class="moisturizer">Moisturizer: Clinique Moisture SurgeTM 100H Auto-Replenishing Hydrator</td>
            </tr>
            <tr>
                  <td class="masks">Face Mask: GlamGlow BRIGHTMUDTM Dual-Action Exfoliating Treatment Mask</td>
            </tr>
    </table>
    `;


    const drySkinMorning = 
    `
    <table>
            <tr>
                  <td id="exfoliatorProd" class="exfoliator">Exfoliator: Clinique Clarifying Lotion Exfoliator 1.0 Alcohol-free</td>
                  </tr>
            <tr>
                  <td class="cleanser">Cleanser: Origins Checks and Balances Frothy Face Wash</td>
            </tr>
            <tr>
                  <td class="toner">Toner: Dr. Jart+ CICAPAIRTM Tiger Grass Calming Mist</td>
            </tr>
            <tr>
                  <td class="serum">Serum: Origins Ginzing Into the Glow Brightening Serum</td>
            </tr>
            <tr>
                  <td class="eyeCream">Eye Cream: Origins Ginzing Vitamin C & Niacinamide Eye Cream</td>
            </tr>
            <tr>
                  <td class="moisturizer">Moisturizer: Dr. Jart+ Ceramidin Cream</td>
            </tr>
            <tr>
                  <td id="spfProd" class="spf">SPF: Dr. Jart+ Every Sun Day Mineral Suncreen SPF 50+</td>
            </tr>
    </table>
    `;

    const drySkinNight = 
    `
    <table>
            <tr>
                  <td class="makeupRemover">Makeup Remover: Clinique Take the Day Off Cleansing Balm</td>
                  </tr>
            <tr>
                  <td class="cleanser">Cleanser: Origins Checks and Balances Frothy Face Wash</td>
            </tr>
            <tr>
                  <td class="toner">Toner: Dr. Jart+ CICAPAIRTM Tiger Grass Calming Mist</td>
            </tr>
            <tr>
                  <td class="serum">Serum: Dr. Jart+ Cicapair Tiger Grass Calming Serum Mask</td>
            </tr>
            <tr>
                  <td class="eyeCream">Eye Cream: Clinique All About Eyes</td>
            </tr>
            <tr>
                  <td class="moisturizer">Moisturizer: Clinique Dramatically Different Moisturizing Lotion+</td>
            </tr>
            <tr>
                  <td class="masks">Face Mask: GlamGlow THIRSTYMUD 24 Hour Hydrating Treatment Mask</td>
            </tr>
    </table>
    `;


    const comboSkinMorning = 
    `
    <table>
            <tr>
                  <td id="exfoliatorProd" class="exfoliator">Exfoliator: Clinique Clarifying Lotion Exfoliator 2</td>
            </tr>
            <tr>
                  <td class="cleanser">Cleanser: Origins Checks and Balances Frothy Face Wash</td>
            </tr>
            <tr>
                  <td class="toner">Toner: Dr. Jart+ CICAPAIRTM Tiger Grass Calming Mist</td>
            </tr>
            <tr>
                  <td class="serum">Serum: Origins Ginzing Into the Glow Brightening Serum</td>
            </tr>
            <tr>
                  <td class="eyeCream">Eye Cream: Origins Ginzing Vitamin C & Niacinamide Eye Cream</td>
            </tr>
            <tr>
                  <td class="moisturizer">Moisturizer: Clinique Moisture SurgeTM 100H Auto-Replenishing Hydrator</td>
            </tr>
            <tr>
                  <td id="spfProd" class="spf">SPF: Dr. Jart+ Every Sun Day Mineral Suncreen SPF 50+</td>
            </tr>
    </table>
    `;

    const comboSkinNight = 
    `
    <table>
            <tr>
                  <td class="makeupRemover">Makeup Remover: Clinique Take the Day Off Cleansing Balm</td>
                  </tr>
            <tr>
                  <td class="cleanser">Cleanser: Origins Checks and Balances Frothy Face Wash</td>
            </tr>
            <tr>
                  <td class="toner">Toner: Dr. Jart+ CICAPAIRTM Tiger Grass Calming Mist</td>
            </tr>
            <tr>
                  <td class="serum">Serum: Dr. Jart+ Cicapair Tiger Grass Calming Serum Mask</td>
            </tr>
            <tr>
                  <td class="eyeCream">Eye Cream: Clinique All About Eyes</td>
            </tr>
            <tr>
                  <td class="moisturizer">Moisturizer: Clinique Dramatically Different Moisturizing Lotion+</td>
            </tr>
            <tr>
                  <td class="masks">Face Mask: Clinique Acne Solutions Oil-Control Cleansing Face Mask</td>
            </tr>
    </table>
    `;


    console.log(skinProducts);
    if (skinType == "oily"){
        document.getElementById("quizResultsMorning").innerHTML = oilySkinMorning;
        document.getElementById("quizResultsNight").innerHTML = oilySkinNight;
    }

    if (skinType == "dry"){
        document.getElementById("quizResultsMorning").innerHTML = drySkinMorning;
        document.getElementById("quizResultsNight").innerHTML = drySkinNight;
    }

    if (skinType == "combination" || skinType == "unsure"){
        document.getElementById("quizResultsNight").innerHTML = comboSkinNight;
        document.getElementById("quizResultsMorning").innerHTML = comboSkinMorning;
    }

});

function showProducts(item, index){
      var prod = document.getElementsByClassName(item);

      for (var i = 0; i < prod.length; i++) {
            prod[i].style.removeProperty("display");

            if (item == "makeupRemover"){
                  document.getElementById("exfoliatorProd").style.removeProperty("display");
                  document.getElementById("exfoliatorProd").style.color = "rgba(0, 0, 0, 0)";
            }

            if (item == "masks"){
                  document.getElementById("spfProd").style.removeProperty("display");
                  document.getElementById("spfProd").style.color = "rgba(0, 0, 0, 0)";
            }
      }
}

function phoneMask() { 
    var num = $(this).val().replace(/\D/g,''); 
    $(this).val(num.substring(0,3) + '-' + num.substring(3,6) + '-' + num.substring(6,10)); 
}
$('[type="tel"]').focusout(phoneMask);

// function myFunction() {
//     var x = document.getElementById("navbar");
//     if (x.className === "navbar") {
//       x.className += " responsive";
//     } else {
//       x.className = "navbar";
//     }
//   }

