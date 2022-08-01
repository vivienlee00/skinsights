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
                  <div class="productsCell exfoliator">
                  <p class="prodNum">1</p><p class="prodType">Exfoliator</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/oilyMorningExfoliator.png"></a>
                  <p class="prodName">Clinique Clarifying Lotion Exfoliator 4</p>
                  </div>

                  <div class="productsCell cleanser">
                  <p class="prodNum">1</p><p class="prodType">Cleanser</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/oilyMorningCleanser.png"></a>
                  <p class="prodName">Origins Checks and Balances Polishing Face Scrub</p>
                  </div>

                  <div class="productsCell toner">
                  <p class="prodNum">1</p><p class="prodType">Toner</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/oilyMorningToner.jpg"></a>
                  <p class="prodName">Origins Mega-Mushroom Relief & Resilience Soothing Treatment Lotion</p>
                  </div>

                  <div class="productsCell serum">
                  <p class="prodNum">1</p><p class="prodType">Serum</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/oilySerumPoreRemedy.png"></a>
                  <p class="prodName">Dr. Jart+ Pore Remedy PHA Exfoliating Serum</p>
                  </div>


                  <div class="productsCell eyeCream">
                  <p class="prodNum">1</p><p class="prodType">Eye Cream</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/morningEyeCream.png"></a>
                  <p class="prodName">Origins Ginzing Vitamin C & Niacinamide Eye Cream</p>
                  </div>

                  <div class="productsCell moisturizer">
                  <p class="prodNum">1</p><p class="prodType">Moisturizer</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/oilyMorningMoisturizer.png"></a>
                  <p class="prodName">Origins Ginzing Oil Free Energy Boosting Gel Moisturizer</p>
                  </div>


                  <div class="productsCell spf">
                  <p class="prodNum">1</p><p class="prodType">SPF</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/spf.png"></a>
                  <p class="prodName">Dr. Jart+ Every Sun Day Mineral Suncreen SPF 50+</p>
                  </div>
            </div>
      </div> 
    `;

    const oilySkinNight = 
    `
    <div class="productsContainer">
    <div class="productsGrid">
          <div class="productsCell makeupRemover">
          <p class="prodNum">1</p><p class="prodType">Makeup Remover</p>
          <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/takeOffTheDay.png"></a>
          <p class="prodName">Clinique Take the Day Off Cleansing Balm</p>
          </div>

          <div class="productsCell cleanser">
          <p class="prodNum">1</p><p class="prodType">Cleanser</p>
          <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/oilyNightCleanser.jpg"></a>
          <p class="prodName">Clinique All About CleanTM Liquid Facial Soap Oily</p>
          </div>

          <div class="productsCell toner">
          <p class="prodNum">1</p><p class="prodType">Toner</p>
          <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/oilyNightSuperToner.png"></a>
          <p class="prodName">GlamGlow SUPERTONER Exfoliating Acid Solution</p>
          </div>

          <div class="productsCell serum">
          <p class="prodNum">1</p><p class="prodType">Serum</p>
          <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/oilySerumPoreRemedy.png"></a>
          <p class="prodName">Dr. Jart+ Pore Remedy PHA Exfoliating Serum</p>
          </div>


          <div class="productsCell eyeCream">
          <p class="prodNum">1</p><p class="prodType">Eye Cream</p>
          <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/oilyNightEyeCream.png"></a>
          <p class="prodName">Origins EYE DOCTOR Moisture Care For Skin Around Eyes</p>
          </div>

          <div class="productsCell moisturizer">
          <p class="prodNum">1</p><p class="prodType">Moisturizer</p>
          <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/moistureSurgeOilyNightComboMorning.png"></a>
          <p class="prodName">Clinique Moisture SurgeTM 100H Auto-Replenishing Hydrator</p>
          </div>


          <div class="productsCell masks">
          <p class="prodNum">1</p><p class="prodType">Mask</p>
          <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/oilyNightFaceMaskGlamGlow.png"></a>
          <p class="prodName">GlamGlow BRIGHTMUD Dual-Action Exfoliating Treatment Mask</p>
          </div>
    </div>
</div> 
    `;


    const drySkinMorning = 
    `

          <div class="productsContainer">
            <div class="productsGrid">
                  <div class="productsCell exfoliator">
                  <p class="prodNum">1</p><p class="prodType">Exfoliator</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/dryMorningExfoliator.png"></a>
                  <p class="prodName">Clinique Clarifying Lotion Exfoliator 1.0 Alcohol-free</p>
                  </div>

                  <div class="productsCell cleanser">
                  <p class="prodNum">1</p><p class="prodType">Cleanser</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/dryComboCleanser.png"></a>
                  <p class="prodName">Origins Checks and Balances Frothy Face Wash</p>
                  </div>

                  <div class="productsCell toner">
                  <p class="prodNum">1</p><p class="prodType">Toner</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/dryComboToner.png"></a>
                  <p class="prodName">Dr. Jart+ CICAPAIRTM Tiger Grass Calming Mist</p>
                  </div>

                  <div class="productsCell serum">
                  <p class="prodNum">1</p><p class="prodType">Serum</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/dryComboMorningSerum.png"></a>
                  <p class="prodName">Origins Ginzing Into the Glow Brightening Serum</p>
                  </div>


                  <div class="productsCell eyeCream">
                  <p class="prodNum">1</p><p class="prodType">Eye Cream</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/morningEyeCream.png"></a>
                  <p class="prodName">Origins Ginzing Vitamin C & Niacinamide Eye Cream</p>
                  </div>

                  <div class="productsCell moisturizer">
                  <p class="prodNum">1</p><p class="prodType">Moisturizer</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/dryMorningMoisturizer.png"></a>
                  <p class="prodName">Dr. Jart+ Ceramidin Cream</p>
                  </div>


                  <div class="productsCell spf">
                  <p class="prodNum">1</p><p class="prodType">SPF</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/spf.png"></a>
                  <p class="prodName">Dr. Jart+ Every Sun Day Mineral Suncreen SPF 50+</p>
                  </div>
            </div>
      </div> 
    `;

    const drySkinNight = 
    `
    <div class="productsContainer">
      <div class="productsGrid">

            <div class="productsCell makeupRemover">
            <p class="prodNum">1</p><p class="prodType">Makeup Remover</p>
            <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/takeOffTheDay.png"></a>
            <p class="prodName">Clinique Take the Day Off Cleansing Balm</p>
            </div>

            <div class="productsCell cleanser">
            <p class="prodNum">1</p><p class="prodType">Cleanser</p>
            <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/dryComboCleanser.png"></a>
            <p class="prodName">Origins Checks and Balances Frothy Face Wash</p>
            </div>

            <div class="productsCell toner">
            <p class="prodNum">1</p><p class="prodType">Toner</p>
            <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/dryComboToner.png"></a>
            <p class="prodName">Dr. Jart+ CICAPAIRTM Tiger Grass Calming Mist</p>
            </div>

            <div class="productsCell serum">
            <p class="prodNum">1</p><p class="prodType">Serum</p>
            <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/dryComboNightSerum.png"></a>
            <p class="prodName">Origins Three Part Harmony Oil-Infused Serum For Renewal, Repair And Radiance</p>
            </div>


            <div class="productsCell eyeCream">
            <p class="prodNum">1</p><p class="prodType">Eye Cream</p>
            <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/dryComboNightEyeCream.png"></a>
            <p class="prodName">Clinique All About Eyes</p>
            </div>

            <div class="productsCell moisturizer">
            <p class="prodNum">1</p><p class="prodType">Moisturizer</p>
            <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/dryComboNightMoisturizer.png"></a>
            <p class="prodName">Clinique Dramatically Different Moisturizing Lotion+</p>
            </div>


            <div class="productsCell masks">
            <p class="prodNum">1</p><p class="prodType">Mask</p>
            <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/dryNightFaceMask.jpg"></a>
            <p class="prodName">GlamGlow THIRSTYMUD 24 Hour Hydrating Treatment Mask</p>
            </div>
      </div>
    </div> 
    `;


    const comboSkinMorning = 
    `
      <div class="productsContainer">
            <div class="productsGrid">
                  <div class="productsCell exfoliator">
                  <p class="prodNum">1</p><p class="prodType">Exfoliator</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/comboMorningExfoliator.png"></a>
                  <p class="prodName">Clinique Clarifying Lotion Exfoliator 2</p>
                  </div>

                  <div class="productsCell cleanser">
                  <p class="prodNum">1</p><p class="prodType">Cleanser</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/dryComboCleanser.png"></a>
                  <p class="prodName">Origins Checks and Balances Frothy Face Wash</p>
                  </div>

                  <div class="productsCell toner">
                  <p class="prodNum">1</p><p class="prodType">Toner</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/dryComboToner.png"></a>
                  <p class="prodName">Dr. Jart+ CICAPAIRTM Tiger Grass Calming Mist</p>
                  </div>

                  <div class="productsCell serum">
                  <p class="prodNum">1</p><p class="prodType">Serum</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/dryComboMorningSerum.png"></a>
                  <p class="prodName">Origins Ginzing Into the Glow Brightening Serum</p>
                  </div>


                  <div class="productsCell eyeCream">
                  <p class="prodNum">1</p><p class="prodType">Eye Cream</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/morningEyeCream.png"></a>
                  <p class="prodName">Origins Ginzing Vitamin C & Niacinamide Eye Cream</p>
                  </div>

                  <div class="productsCell moisturizer">
                  <p class="prodNum">1</p><p class="prodType">Moisturizer</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/moistureSurgeOilyNightComboMorning.png"></a>
                  <p class="prodName">Clinique Moisture SurgeTM 100H Auto-Replenishing Hydrator</p>
                  </div>


                  <div class="productsCell spf">
                  <p class="prodNum">1</p><p class="prodType">SPF</p>
                  <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/spf.png"></a>
                  <p class="prodName">Dr. Jart+ Every Sun Day Mineral Suncreen SPF 50+</p>
                  </div>
            </div>
      </div> 
    `;

    const comboSkinNight = 
    `

    <div class="productsContainer">
      <div class="productsGrid">

            <div class="productsCell makeupRemover">
            <p class="prodNum">1</p><p class="prodType">Makeup Remover</p>
            <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src="assets/routines/takeOffTheDay.png"></a>
            <p class="prodName">Clinique Take the Day Off Cleansing Balm</p>
            </div>

            <div class="productsCell cleanser">
            <p class="prodNum">1</p><p class="prodType">Cleanser</p>
            <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src="assets/routines/dryComboCleanser.png"></a>
            <p class="prodName">Origins Checks and Balances Frothy Face Wash</p>
            </div>

            <div class="productsCell toner">
            <p class="prodNum">1</p><p class="prodType">Toner</p>
            <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src="assets/routines/dryComboToner.png"></a>
            <p class="prodName">Dr. Jart+ CICAPAIRTM Tiger Grass Calming Mist</p>
            </div>

            <div class="productsCell serum">
            <p class="prodNum">1</p><p class="prodType">Serum</p>
            <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/dryComboNightSerum.png"></a>
            <p class="prodName">Origins Three Part Harmony Oil-Infused Serum For Renewal, Repair And Radiance</p>
            </div>


            <div class="productsCell eyeCream">
            <p class="prodNum">1</p><p class="prodType">Eye Cream</p>
            <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/dryComboNightEyeCream.png"></a>
            <p class="prodName">Clinique All About Eyes</p>
            </div>

            <div class="productsCell moisturizer">
            <p class="prodNum">1</p><p class="prodType">Moisturizer</p>
            <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/dryComboNightMoisturizer.png"></a>
            <p class="prodName">Clinique Dramatically Different Moisturizing Lotion+</p>
            </div>


            <div class="productsCell masks">
            <p class="prodNum">1</p><p class="prodType">Mask</p>
            <a target="_blank" href="https://www.clinique.com/product/1673/6424/skincare/cleansers-makeup-removers/take-the-day-off-cleansing-balm"><img src=" assets/routines/comboNightMask.png"></a>
            <p class="prodName">Clinique Acne Solutions Oil-Control Cleansing Face Mask</p>
            </div>
      </div>
    </div> 
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

    w3.hide('.productsCell');

    skinProducts.forEach(showProducts);
});


function showProducts(item, index){
      var prod = document.getElementsByClassName(item);

      for (var i = 0; i < prod.length; i++) {
            prod[i].style.removeProperty("display");
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

