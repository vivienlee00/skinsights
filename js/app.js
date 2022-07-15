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
    var skinType = sessionStorage.getItem("skinType");
    var skinProducts = JSON.parse(sessionStorage.getItem("skinProducts"));

    const oilySkin = 
    `
    <table>
            <tr>
                  <th>Morning Routine</th>
                  <th>Night Routine</th>
            </tr>
            <tr>
                  <td>Exfoliator: Clinique Clarifying Lotion Exfoliator 4</td>
                  <td>Makeup Remover: Clinique Take the Day Off Cleansing Balm</td>
                  </tr>
            <tr>
                  <td>Face Wash: Origins Checks and Balances Polishing Face Scrub</td>
                  <td>Face Wash: Clinique All About CleanTM Liquid Facial Soap Oily</td>
            </tr>
            <tr>
                  <td>Toner: Origins Mega-Mushroom Relief & Resilience Soothing Treatment Lotion</td>
                  <td>Toner: GlamGlow SUPERTONER Exfoliating Acid Solution</td>
            </tr>
            <tr>
                  <td>Serum: Dr. Jart+ Pore Remedy PHA Exfoliating Serum</td>
                  <td>Serum: Dr. Jart+ Pore Remedy PHA Exfoliating Serum</td>
            </tr>
            <tr>
                  <td>Eye Cream: Origins Ginzing Vitamin C & Niacinamide Eye Cream</td>
                  <td>Eye Cream: Origins EYE DOCTOR Moisture Care For Skin Around Eyes</td>
            </tr>
            <tr>
                  <td>Moisturizer: Origins Ginzing Oil Free Energy Boosting Gel Moisturizer</td>
                  <td>Moisturizer: Clinique Moisture SurgeTM 100H Auto-Replenishing Hydrator</td>
            </tr>
            <tr>
                  <td>SPF: Dr. Jart+ Every Sun Day Mineral Suncreen SPF 50+</td>
                  <td>Face Mask: GlamGlow BRIGHTMUDTM Dual-Action Exfoliating Treatment Mask</td>
            </tr>
    </table>
    `;

    const drySkin = 
    `
    <table>
            <tr>
                  <th>Morning Routine</th>
                  <th>Night Routine</th>
            </tr>
            <tr>
                  <td>Exfoliator: Clinique Clarifying Lotion Exfoliator 1.0 Alcohol-free</td>
                  <td>Makeup Remover: Clinique Take the Day Off Cleansing Balm</td>
                  </tr>
            <tr>
                  <td>Face Wash: Origins Checks and Balances Frothy Face Wash</td>
                  <td>Face Wash: Origins Checks and Balances Frothy Face Wash</td>
            </tr>
            <tr>
                  <td>Toner: Dr. Jart+ CICAPAIRTM Tiger Grass Calming Mist</td>
                  <td>Toner: Dr. Jart+ CICAPAIRTM Tiger Grass Calming Mist</td>
            </tr>
            <tr>
                  <td>Serum: Origins Ginzing Into the Glow Brightening Serum</td>
                  <td>Serum: Dr. Jart+ Cicapair Tiger Grass Calming Serum Mask</td>
            </tr>
            <tr>
                  <td>Eye Cream: Origins Ginzing Vitamin C & Niacinamide Eye Cream</td>
                  <td>Eye Cream: Clinique All About Eyes</td>
            </tr>
            <tr>
                  <td>Moisturizer: Dr. Jart+ Ceramidin Cream</td>
                  <td>Moisturizer: Clinique Dramatically Different Moisturizing Lotion+</td>
            </tr>
            <tr>
                  <td>SPF: Dr. Jart+ Every Sun Day Mineral Suncreen SPF 50+</td>
                  <td>Face Mask: GlamGlow THIRSTYMUD 24 Hour Hydrating Treatment Mask</td>
            </tr>
    </table>
    `;

    const comboSkin = 
    `
    <table>
            <tr>
                  <th>Morning Routine</th>
                  <th>Night Routine</th>
            </tr>
            <tr>
                  <td>Exfoliator: Clinique Clarifying Lotion Exfoliator 2</td>
                  <td>Makeup Remover: Clinique Take the Day Off Cleansing Balm</td>
                  </tr>
            <tr>
                  <td>Face Wash: Origins Checks and Balances Frothy Face Wash</td>
                  <td>Face Wash: Origins Checks and Balances Frothy Face Wash</td>
            </tr>
            <tr>
                  <td>Toner: Dr. Jart+ CICAPAIRTM Tiger Grass Calming Mist</td>
                  <td>Toner: Dr. Jart+ CICAPAIRTM Tiger Grass Calming Mist</td>
            </tr>
            <tr>
                  <td>Serum: Origins Ginzing Into the Glow Brightening Serum</td>
                  <td>Serum: Dr. Jart+ Cicapair Tiger Grass Calming Serum Mask</td>
            </tr>
            <tr>
                  <td>Eye Cream: Origins Ginzing Vitamin C & Niacinamide Eye Cream</td>
                  <td>Eye Cream: Clinique All About Eyes</td>
            </tr>
            <tr>
                  <td>Moisturizer: Clinique Moisture SurgeTM 100H Auto-Replenishing Hydrator</td>
                  <td>Moisturizer: Clinique Dramatically Different Moisturizing Lotion+</td>
            </tr>
            <tr>
                  <td>SPF: Dr. Jart+ Every Sun Day Mineral Suncreen SPF 50+</td>
                  <td>Face Mask: Clinique Acne Solutions Oil-Control Cleansing Face Mask</td>
            </tr>
    </table>
    `;

    console.log(skinProducts);
    if (skinType == "oily"){
        document.getElementById("quizResults").innerHTML = oilySkin;
    }

    if (skinType == "dry"){
        document.getElementById("quizResults").innerHTML = drySkin;
    }

    if (skinType == "combination" || skinType == "unsure"){
        document.getElementById("quizResults").innerHTML = comboSkin;
    }

});