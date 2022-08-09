function uploadImg(input){
    const imgPath = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        // convert image file to base64 string and save to localStorage
        localStorage.setItem("pfpData", reader.result);
    }, false);

    if (imgPath) {
        reader.readAsDataURL(imgPath);
    }
}


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
    document.getElementById("restingPlace").src = localStorage.getItem('pfpData');

    var skinType = sessionStorage.getItem("skinType");
    var skinProducts = JSON.parse(sessionStorage.getItem("skinProducts"));

    const oilySkinMorning = 
    `
      <div class="productsContainer">
            <div class="productsGrid">
                  <div class="productsCell exfoliator">
                  <p class="prodNum">1</p><p class="prodType">Exfoliator</p>
                  <a target="_blank" href="https://www.clinique.com/product/1573/15504/3-step/step-2-exfoliate/clarifying-lotion-4/refreshing-exfoliator-for-oily-skin-types"><img src=" assets/routines/oilyMorningExfoliator.png"></a>
                  <p class="prodName">Clinique Clarifying Lotion Exfoliator 4</p>
                  </div>

                  <div class="productsCell cleanser">
                  <p class="prodNum">1</p><p class="prodType">Cleanser</p>
                  <a target="_blank" href="https://www.origins.com/product/15342/86475/skincare/cleanse/face-wash-and-cleansers/checks-and-balances/polishing-face-scrub"><img src=" assets/routines/oilyMorningCleanser.png"></a>
                  <p class="prodName">Origins Checks and Balances Polishing Face Scrub</p>
                  </div>

                  <div class="productsCell toner">
                  <p class="prodNum">1</p><p class="prodType">Toner</p>
                  <a target="_blank" href="https://www.origins.com/product/15349/103222/skincare/treat/treatment-lotion/dr-andrew-weil-for-originstm/mega-mushroom-relief-resilience-soothing-treatment-lotion#/sku/152252"><img src=" assets/routines/oilyMorningToner.jpg"></a>
                  <p class="prodName">Origins Mega-Mushroom Relief & Resilience Soothing Treatment Lotion</p>
                  </div>

                  <div class="productsCell serum">
                  <p class="prodNum">1</p><p class="prodType">Serum</p>
                  <a target="_blank" href="https://www.drjart.com/product/28259/101182/serums/pore-remedytm-pha-exfoliating-serum"><img src=" assets/routines/oilySerumPoreRemedy.png"></a>
                  <p class="prodName">Dr. Jart+ Pore Remedy PHA Exfoliating Serum</p>
                  </div>


                  <div class="productsCell eyeCream">
                  <p class="prodNum">1</p><p class="prodType">Eye Cream</p>
                  <a target="_blank" href="https://www.origins.com/product/15348/90674/skincare/treat/eye-care/ginzing/vitamin-c-niacinamide-eye-cream-to-brighten-and-depuff#/shade/Original"><img src=" assets/routines/morningEyeCream.png"></a>
                  <p class="prodName">Origins Ginzing Vitamin C & Niacinamide Eye Cream</p>
                  </div>

                  <div class="productsCell moisturizer">
                  <p class="prodNum">1</p><p class="prodType">Moisturizer</p>
                  <a target="_blank" href="https://www.origins.com/product/15352/68623/skincare/moisturize/moisturizers/ginzing/energy-boosting-gel-moisturizer#/sku/107178"><img src=" assets/routines/oilyMorningMoisturizer.png"></a>
                  <p class="prodName">Origins Ginzing Oil Free Energy Boosting Gel Moisturizer</p>
                  </div>


                  <div class="productsCell spf">
                  <p class="prodNum">1</p><p class="prodType">SPF</p>
                  <a target="_blank" href="https://www.drjart.com/product/29723/92640/sun-protection/every-sun-day-mineral-sunscreen-spf-50"><img src=" assets/routines/spf.png"></a>
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
          <a target="_blank" href="https://www.clinique.com/product/1572/8279/3-step/step-1-cleanse/all-about-cleantm-liquid-facial-soap"><img src=" assets/routines/oilyNightCleanser.jpg"></a>
          <p class="prodName">Clinique All About CleanTM Liquid Facial Soap Oily</p>
          </div>

          <div class="productsCell toner">
          <p class="prodNum">1</p><p class="prodType">Toner</p>
          <a target="_blank" href="https://www.glamglow.com/product/23746/64287/skincare/toners-serums/supertonertm/exfoliating-acid-solution"><img src=" assets/routines/oilyNightSuperToner.png"></a>
          <p class="prodName">GlamGlow SUPERTONER Exfoliating Acid Solution</p>
          </div>

          <div class="productsCell serum">
          <p class="prodNum">1</p><p class="prodType">Serum</p>
          <a target="_blank" href="https://www.drjart.com/product/28259/101182/serums/pore-remedytm-pha-exfoliating-serum"><img src=" assets/routines/oilySerumPoreRemedy.png"></a>
          <p class="prodName">Dr. Jart+ Pore Remedy PHA Exfoliating Serum</p>
          </div>


          <div class="productsCell eyeCream">
          <p class="prodNum">1</p><p class="prodType">Eye Cream</p>
          <a target="_blank" href="https://www.origins.com/product/15348/11247/skincare/treat/eye-care/eye-doctor/moisture-care-for-skin-around-eyes#/sku/24611"><img src=" assets/routines/oilyNightEyeCream.png"></a>
          <p class="prodName">Origins EYE DOCTOR Moisture Care For Skin Around Eyes</p>
          </div>

          <div class="productsCell moisturizer">
          <p class="prodNum">1</p><p class="prodType">Moisturizer</p>
          <a target="_blank" href="https://www.clinique.com/product/1687/83690/skincare/moisturizers/moisture-surgetm-100h-auto-replenishing-hydrator"><img src=" assets/routines/moistureSurgeOilyNightComboMorning.png"></a>
          <p class="prodName">Clinique Moisture SurgeTM 100H Auto-Replenishing Hydrator</p>
          </div>


          <div class="productsCell masks">
          <p class="prodNum">1</p><p class="prodType">Mask</p>
          <a target="_blank" href="https://www.glamglow.com/product/18842/87433/skincare/brightmudtm/dual-action-exfoliating-treatment"><img src=" assets/routines/oilyNightFaceMaskGlamGlow.png"></a>
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
                  <a target="_blank" href="https://www.clinique.com/product/1682/41982/skincare/exfoliators/clarifying-lotion-10-twice-a-day-exfoliator"><img src=" assets/routines/dryMorningExfoliator.png"></a>
                  <p class="prodName">Clinique Clarifying Lotion Exfoliator 1.0 Alcohol-free</p>
                  </div>

                  <div class="productsCell cleanser">
                  <p class="prodNum">1</p><p class="prodType">Cleanser</p>
                  <a target="_blank" href="https://www.origins.com/product/15342/11226/skincare/cleanse/face-wash-and-cleansers/checks-and-balances/frothy-face-wash#/sku/22713"><img src=" assets/routines/dryComboCleanser.png"></a>
                  <p class="prodName">Origins Checks and Balances Frothy Face Wash</p>
                  </div>

                  <div class="productsCell toner">
                  <p class="prodNum">1</p><p class="prodType">Toner</p>
                  <a target="_blank" href="https://www.drjart.com/product/28261/90161/toners-essences/cicapair-tiger-grass-calming-mist"><img src=" assets/routines/dryComboToner.png"></a>
                  <p class="prodName">Dr. Jart+ CICAPAIRTM Tiger Grass Calming Mist</p>
                  </div>

                  <div class="productsCell serum">
                  <p class="prodNum">1</p><p class="prodType">Serum</p>
                  <a target="_blank" href="https://www.origins.com/product/15347/78314/skincare/treat/serums/ginzing/into-the-glow-brightening-serum#/sku/119882"><img src=" assets/routines/dryComboMorningSerum.png"></a>
                  <p class="prodName">Origins Ginzing Into the Glow Brightening Serum</p>
                  </div>


                  <div class="productsCell eyeCream">
                  <p class="prodNum">1</p><p class="prodType">Eye Cream</p>
                  <a target="_blank" href="https://www.origins.com/product/15348/90674/skincare/treat/eye-care/ginzing/vitamin-c-niacinamide-eye-cream-to-brighten-and-depuff#/shade/Original"><img src=" assets/routines/morningEyeCream.png"></a>
                  <p class="prodName">Origins Ginzing Vitamin C & Niacinamide Eye Cream</p>
                  </div>

                  <div class="productsCell moisturizer">
                  <p class="prodNum">1</p><p class="prodType">Moisturizer</p>
                  <a target="_blank" href="https://www.drjart.com/product/28258/90156/moisturizers/ceramidintm-skin-barrier-moisturizer"><img src=" assets/routines/dryMorningMoisturizer.png"></a>
                  <p class="prodName">Dr. Jart+ Ceramidin Cream</p>
                  </div>


                  <div class="productsCell spf">
                  <p class="prodNum">1</p><p class="prodType">SPF</p>
                  <a target="_blank" href="https://www.drjart.com/product/29723/92640/sun-protection/every-sun-day-mineral-sunscreen-spf-50"><img src=" assets/routines/spf.png"></a>
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
            <a target="_blank" href="https://www.origins.com/product/15342/11226/skincare/cleanse/face-wash-and-cleansers/checks-and-balances/frothy-face-wash#/sku/22713"><img src=" assets/routines/dryComboCleanser.png"></a>
            <p class="prodName">Origins Checks and Balances Frothy Face Wash</p>
            </div>

            <div class="productsCell toner">
            <p class="prodNum">1</p><p class="prodType">Toner</p>
            <a target="_blank" href="https://www.drjart.com/product/28261/90161/toners-essences/cicapair-tiger-grass-calming-mist"><img src=" assets/routines/dryComboToner.png"></a>
            <p class="prodName">Dr. Jart+ CICAPAIRTM Tiger Grass Calming Mist</p>
            </div>

            <div class="productsCell serum">
            <p class="prodNum">1</p><p class="prodType">Serum</p>
            <a target="_blank" href="https://www.origins.com/product/15347/37563/skincare/treat/serums/three-part-harmony/oil-infused-serum-for-renewal-repair-and-radiance#/sku/65740"><img src=" assets/routines/dryComboNightSerum.png"></a>
            <p class="prodName">Origins Three Part Harmony Oil-Infused Serum For Renewal, Repair And Radiance</p>
            </div>


            <div class="productsCell eyeCream">
            <p class="prodNum">1</p><p class="prodType">Eye Cream</p>
            <a target="_blank" href="https://www.clinique.com/product/1683/4769/skincare/eye-care/all-about-eyestm"><img src=" assets/routines/dryComboNightEyeCream.png"></a>
            <p class="prodName">Clinique All About Eyes</p>
            </div>

            <div class="productsCell moisturizer">
            <p class="prodNum">1</p><p class="prodType">Moisturizer</p>
            <a target="_blank" href="https://www.clinique.com/product/1574/26651/3-step/step-3-moisturize/dramatically-different-moisturizing-lotiontm"><img src=" assets/routines/dryComboNightMoisturizer.png"></a>
            <p class="prodName">Clinique Dramatically Different Moisturizing Lotion+</p>
            </div>


            <div class="productsCell masks">
            <p class="prodNum">1</p><p class="prodType">Mask</p>
            <a target="_blank" href="https://www.glamglow.com/product/14939/41437/skincare/hydrating/thirstymudtm/hydrating-treatment-mask"><img src=" assets/routines/dryNightFaceMask.jpg"></a>
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
                  <a target="_blank" href="https://www.clinique.com/product/1573/15502/3-step/step-2-exfoliate/clarifying-lotion-2/exfoliates-to-balance-dry-combination-skins"><img src=" assets/routines/comboMorningExfoliator.png"></a>
                  <p class="prodName">Clinique Clarifying Lotion Exfoliator 2</p>
                  </div>

                  <div class="productsCell cleanser">
                  <p class="prodNum">1</p><p class="prodType">Cleanser</p>
                  <a target="_blank" href="https://www.origins.com/product/15342/11226/skincare/cleanse/face-wash-and-cleansers/checks-and-balances/frothy-face-wash#/sku/22713"><img src=" assets/routines/dryComboCleanser.png"></a>
                  <p class="prodName">Origins Checks and Balances Frothy Face Wash</p>
                  </div>

                  <div class="productsCell toner">
                  <p class="prodNum">1</p><p class="prodType">Toner</p>
                  <a target="_blank" href="https://www.drjart.com/product/28261/90161/toners-essences/cicapair-tiger-grass-calming-mist"><img src=" assets/routines/dryComboToner.png"></a>
                  <p class="prodName">Dr. Jart+ CICAPAIRTM Tiger Grass Calming Mist</p>
                  </div>

                  <div class="productsCell serum">
                  <p class="prodNum">1</p><p class="prodType">Serum</p>
                  <a target="_blank" href="https://www.origins.com/product/15347/78314/skincare/treat/serums/ginzing/into-the-glow-brightening-serum#/sku/119882"><img src=" assets/routines/dryComboMorningSerum.png"></a>
                  <p class="prodName">Origins Ginzing Into the Glow Brightening Serum</p>
                  </div>


                  <div class="productsCell eyeCream">
                  <p class="prodNum">1</p><p class="prodType">Eye Cream</p>
                  <a target="_blank" href="https://www.origins.com/product/15348/90674/skincare/treat/eye-care/ginzing/vitamin-c-niacinamide-eye-cream-to-brighten-and-depuff#/shade/Original"><img src=" assets/routines/morningEyeCream.png"></a>
                  <p class="prodName">Origins Ginzing Vitamin C & Niacinamide Eye Cream</p>
                  </div>

                  <div class="productsCell moisturizer">
                  <p class="prodNum">1</p><p class="prodType">Moisturizer</p>
                  <a target="_blank" href="https://www.clinique.com/product/1687/83690/skincare/moisturizers/moisture-surgetm-100h-auto-replenishing-hydrator"><img src=" assets/routines/moistureSurgeOilyNightComboMorning.png"></a>
                  <p class="prodName">Clinique Moisture SurgeTM 100H Auto-Replenishing Hydrator</p>
                  </div>


                  <div class="productsCell spf">
                  <p class="prodNum">1</p><p class="prodType">SPF</p>
                  <a target="_blank" href="https://www.drjart.com/product/29723/92640/sun-protection/every-sun-day-mineral-sunscreen-spf-50"><img src=" assets/routines/spf.png"></a>
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
            <a target="_blank" href="https://www.origins.com/product/15342/11226/skincare/cleanse/face-wash-and-cleansers/checks-and-balances/frothy-face-wash#/sku/22713"><img src="assets/routines/dryComboCleanser.png"></a>
            <p class="prodName">Origins Checks and Balances Frothy Face Wash</p>
            </div>

            <div class="productsCell toner">
            <p class="prodNum">1</p><p class="prodType">Toner</p>
            <a target="_blank" href="https://www.drjart.com/product/28261/90161/toners-essences/cicapair-tiger-grass-calming-mist"><img src="assets/routines/dryComboToner.png"></a>
            <p class="prodName">Dr. Jart+ CICAPAIRTM Tiger Grass Calming Mist</p>
            </div>

            <div class="productsCell serum">
            <p class="prodNum">1</p><p class="prodType">Serum</p>
            <a target="_blank" href="https://www.origins.com/product/15347/37563/skincare/treat/serums/three-part-harmony/oil-infused-serum-for-renewal-repair-and-radiance#/sku/65740"><img src=" assets/routines/dryComboNightSerum.png"></a>
            <p class="prodName">Origins Three Part Harmony Oil-Infused Serum For Renewal, Repair And Radiance</p>
            </div>


            <div class="productsCell eyeCream">
            <p class="prodNum">1</p><p class="prodType">Eye Cream</p>
            <a target="_blank" href="https://www.clinique.com/product/1683/4769/skincare/eye-care/all-about-eyestm"><img src=" assets/routines/dryComboNightEyeCream.png"></a>
            <p class="prodName">Clinique All About Eyes</p>
            </div>

            <div class="productsCell moisturizer">
            <p class="prodNum">1</p><p class="prodType">Moisturizer</p>
            <a target="_blank" href="https://www.clinique.com/product/1574/26651/3-step/step-3-moisturize/dramatically-different-moisturizing-lotiontm"><img src=" assets/routines/dryComboNightMoisturizer.png"></a>
            <p class="prodName">Clinique Dramatically Different Moisturizing Lotion+</p>
            </div>


            <div class="productsCell masks">
            <p class="prodNum">1</p><p class="prodType">Mask</p>
            <a target="_blank" href="https://www.clinique.com/product/14706/6179/skincare/masks/acne-solutionstm-oil-control-cleansing-mask"><img src=" assets/routines/comboNightMask.png"></a>
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

