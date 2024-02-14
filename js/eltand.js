allCosts = { site: 0 };
periodCost = { ElementorPro: 1.25 };
featureHTML =
  '<div class="option my-2 d-flex w-100 align-items-center"> <div class="checkboxContainer m-3"><input type="checkbox" class="featureCheckbox" data-value="%pretImplementare%" data-price-period="%pretMentenanta%" data-feature="%feature%"></div> <div class="optionContent"> <h4 class="m-0">%title%</h4> <div class="secondaryText" style="display:hide;">%details%</div> </div> <div class="ml-auto d-flex text-right w-25"> </div> </div> <hr>';
healthyHTML =
  '<div class="option my-2 d-flex w-100 align-items-center healthyCard"><div class="optionContent p-2"> <h4 class="m-0"> <i class="fa-solid fa-arrow-up-right-dots" style="font-size: 24px; color:#198754;"></i> Un Website Sanatos si Eficient</h4> <div class="secondaryText" style="display:hide;">Atat ajutarea experientei placute pe un site sanatos pentru utilizatori si personal, cat si posibilitatea integrarii de functionalitati (evenimente, sistem de monetizare, reconstruire a unei sectiuni a site-ului etc.), optimizare in functie de evolutia site-ului.</div> </div> </div>';
processingHTML =
  '<div class="paginatorButtons text-center my-2"><button class="buttonCustom m-1 backButton">Inapoi</button><button class="m-1 buttonCustom  nextButton">Urmatorul</button></div>';
formHTML =
  '<form action="#" class="formRequest "> <div class="detailsPayment"></div> <div class="my-3"> <p> Nume Prenume</p> <input type="text" class="form-control mb-2" placeholder="Ionescu Denisa" required="required"> <p> Email</p> <input  type="text" class="form-control mb-2" placeholder="denisa.ionescu@example.ro" required="required"> <p> Telefon</p> <input  type="text" class="form-control mb-2" placeholder="0712 345 678" required="required"> <p> Nume Firma(Optional)</p> <input type="text" class="form-control mb-2" placeholder="ELTAND S.R.L."> <div class="text-center"> <span href="#" class="buttonCustom m-2 retry" style="cursor:pointer; padding:12px">Reface</span><button class="buttonCustom my-2 sendButton">Trimite</button></div> </div> </form>';
features = {
  smsMarketing: {
    title: "SMS Marketing Management",
    pretImplementare: 1.49,
    pretMentenanta: 0,
    details:
      "Posibilitatea de trimitere a textelor SMS cu intentia de a <span class='highlighted'>spori vanzarile</span>. ",
  },

  supportChat: {
    title: "Support chat",
    pretImplementare: 13.99,
    pretMentenanta: 13.99,
    details:
      "Implementarea unui Chat Bot, cu rolul de a ajuta si raspunde in mod automat intrebarilor utilizatorilor de pe website.",
  },

  sistemCurierat: {
    title: "Sistem de curierat",
    pretImplementare: 13.99,
    pretMentenanta: 13.99,
    details:
      "Implementarea unui generator de AWB perntru <span class='highlighted'>transportul</span> produselor.",
  },

  metodePlata: {
    title: "Sistem de realizare a platilor",
    pretImplementare: 6.99,
    pretMentenanta: 0,
    details: "Implementarea unui sistem de realizare <span class='highlighted'>online</span> a platilor",
  },


  mailMarketing: {
    title: "Newsletter & Mail Marketing",
    pretImplementare: 4.99,
    pretMentenanta: 0,
    details:
      "Implementarea unui sistem de <span class='highlighted'>Newsletter</span> si <span class='highlighted'>Mail Marketing</span>.",
  },

  hosting: {
    title: "Furnizarea serviciului de hosting a website-ului",
    pretImplementare: 24.99,
    pretMentenanta: 24.99,
    details:
      "Daca nu stii care serviciu de hosting este mai potrivit pentru tine, te ajutam noi.",
  },
  domeniu: {
    title: "Furnizarea domeniului pentru website",
    pretImplementare: 14.99,
    pretMentenanta: 14.99,
    details:
      "Numele website-ului tau.",
  },

  sistemRezervari: {
    title: "Sistem pentru realizarea de programari/rezervari",
    pretImplementare: 23.99,
    pretMentenanta: 0,
    details:
      "Implementarea unui sistem prin care vizitatorii website-ului pot realiza programari sau pot rezerva sedinte/servicii",
  },
  optimizareSeo: {
    title: "Optimizarea SEO a produselor",
    pretImplementare: 4.99,
    pretMentenanta: 0,
    details:
      "Optimizarea SEO a primelor 20 produse pe website este gratuita, iar pentru mai multe produse, optimizarea SEO a acestora va fi  taxata cu <span class='highlighted'>4.99€ pentru fiecare 20 produse noi</span>.",
  },
  produseActive: {
    title: "Adaugarea de produse pe website",
    pretImplementare: 4.99,
    pretMentenanta: 0,
    details:
      "Adaugarea primelor 20 produse pe website este gratuita, iar pentru mai multe produse, adaugarea acestora va fi  taxata cu <span class='highlighted'>5€ pentru fiecare 20 produse noi</span>.",
  },
};

websiteTypes = {
  ecomm: [
    "smsMarketing",
    "supportChat",
    "sistemCurierat",
    "metodePlata",
    "mailMarketing",
    // "produseActive",
    "hosting",
    "domeniu",
    // "optimizareSeo",
  ],
  pres: [
    "supportChat",
    "mailMarketing",
    "sistemRezervari",
    "hosting",
    "domeniu",
  ],
};

function clearCosts() {
  jQuery(".featureCheckbox").each(function () {
    jQuery(this).prop("checked", false);
  });
  periodCost = { ElementorPro: 2 };
  allCosts = { site: 0 };
}
function calculateTotal(allCosts, periodCost) {
  let total = 0;
  for (price in allCosts) {
    total += allCosts[price];
  }
  let totalPeriodCost = 0;
  for (price in periodCost) {
    totalPeriodCost += periodCost[price];
  }

  // return [total.toFixed(2), totalPeriodCost.toFixed(2)];
}
jQuery(".customizeWebsite .selectType").on("change", function () {
  tab = jQuery(this).val();
  initTabHandler(tab)
})
function initTabHandler(tab) {
  jQuery(".customizeWebsite .tabs .tab").each(function () {
    jQuery(this).hide();
    jQuery(this).html("");
  });
  page = 1;

  if (tab == "other") {
    jQuery(".customizeWebsite ." + tab).html("");
    jQuery(".customizeWebsite ." + tab).show();
    jQuery(".customizeWebsite ." + tab).append(
      "<a href='/contact'>Contacteaza-ne</a>"
    );
  } else {
    // clearCosts();
    jQuery(".customizeWebsite ." + tab).html("");
    jQuery(".customizeWebsite ." + tab).show();
    htmlTab = "";
    pages = {};
    pagesHTML = "<div class='page' data-page='%page%' style='display:none;'>";
    websiteTypes[tab].forEach((feature, index) => {
      if (index % 3 === 0 && index !== 0) {
        page++;
      }
      htmlTab = featureHTML.replaceAll("%title%", features[feature]["title"]);
      htmlTab = htmlTab.replaceAll("%details%", features[feature]["details"]);
      htmlTab = htmlTab.replaceAll("%feature%", feature);
      if (!(page in pages)) {
        pages[page] = [htmlTab];
      } else {
        pages[page].push(htmlTab);
      }
    });
    for (item in pages) {
      addHTML = "";
      pageHTML = pagesHTML.replace("%page%", item);
      addHTML += pageHTML;
      pages[item].forEach((elem) => {
        addHTML += elem;
      });
      addHTML += "</div";
      jQuery(".customizeWebsite ." + tab).append(addHTML);
    }
    jQuery(".customizeWebsite ." + tab).append(healthyHTML);
    jQuery(".customizeWebsite ." + tab).append(processingHTML);
    allCosts["site"] = jQuery(".customizeWebsite ." + tab).data("value");

    calculateTotal(allCosts, periodCost);
    paginator(tab);
  }
}
jQuery(".customizeWebsite .tabs ").on(
  "change",
  ".featureCheckbox",
  function () {
    parent = jQuery(this).closest(".option");
    if (jQuery(this).is(":checked")) {
      allCosts[jQuery(this).data("feature")] = jQuery(this).data("value");
      periodCost[jQuery(this).data("feature")] =
        jQuery(this).data("price-period");
      calculateTotal(allCosts, periodCost);
      parent.find(".details").show();
    } else {
      delete allCosts[jQuery(this).data("feature")];
      delete periodCost[jQuery(this).data("feature")];
      calculateTotal(allCosts, periodCost);
      parent.find(".details").hide();
    }
  }
);

jQuery(".continueButton").on("click", function () {
  tab = jQuery(".customizeWebsite .selectType").val();
  jQuery(".customizeWebsite ." + tab).fadeOut();
  jQuery(this).fadeOut();
  jQuery(".backButton").fadeIn();
});
jQuery(".backButton").on("click", function () {
  tab = jQuery(".customizeWebsite .selectType").val();
  jQuery(".customizeWebsite ." + tab).fadeIn();
  jQuery(this).fadeOut();
  jQuery(".continueButton").fadeIn();
});
jQuery(".customizeWebsite").on("click", ".retry", function () {
  console.log("clicked")
  initTabHandler(jQuery(".customizeWebsite .selectType").val())
})
jQuery(".customizeWebsite").on("click", ".sendButton", function () {
  let validForm = true;
  url = "/wp-json/eltand/v1/sendEmail";
  counter = 0;
  data = [];
  jQuery(this)
    .closest(".customizeWebsite")
    .find(".formRequest input")
    .each(function () {
      data.push(jQuery(this).val());
      if (jQuery(this).attr("required")) {
        if (jQuery(this).val() == "") {
          validForm = false;
        }
      }
    });
  if (validForm) {
    jQuery.post(
      url,
      { data: data, allCosts: allCosts, periodCost: periodCost },
      function (response) {
        if (response == "Email sent successfully") {
          window.location.href = "https://eltand.com/thank-you";
        } else {
          alert("Cererea a fost trimisa");
        }
      }
    );
  }
});
let activePage = 1;
function paginator(tab, activePage = 1) {
  lastPage = activePage;
  jQuery(".customizeWebsite .page").each(function () {
    if (lastPage < jQuery(this).data("page")) {
      lastPage = jQuery(this).data("page");
    }
    if (jQuery(this).data("page") == activePage) {
      jQuery(this).show();
    } else {
      jQuery(this).hide();
    }
  });

  if (activePage === lastPage) {
    jQuery(".customizeWebsite .nextButton").text("Proceseaza");
  } else {
    jQuery(".customizeWebsite .nextButton").text("Urmatorul");
  }
  jQuery(".customizeWebsite .nextButton")
    .unbind()
    .click(function () {
      jQuery("html, body").animate(
        { scrollTop: jQuery(this).closest(".customizeWebsite").offset().top },
        250
      );
      if (activePage === lastPage) {
        jQuery(".customizeWebsite ." + tab).html(formHTML);
        jQuery(".formRequest form").before(
          "<div class='detailsPayment w-100 text-left textPrimary'> <h4>Detalii</h4></div>"
        );
        for (cost in allCosts) {
          nameDetail = cost == "site" ? "Website" : features[cost].title;
          jQuery(".formRequest .detailsPayment").append(
            "<div class='w-100 d-flex secondaryText' style='border-bottom:1px dotted gray;'> <div class='w-50 text-left'>" +
            nameDetail +
            "</div></div>"
          );
          // jQuery(".formRequest .detailsPayment").append(
          //   "<div class='w-100 d-flex secondaryText' style='border-bottom:1px dotted gray;'> <div class='w-50 text-left'>" +
          //     nameDetail +
          //     "</div><div class='w-50 text-right'>" +
          //     allCosts[cost] +
          //     "€</div></div>"
          // );
        }
        // jQuery(".formRequest .detailsPayment").append(
        //   "<div class='w-100 d-flex secondaryText' style='border-bottom:1px dotted gray;'> <div class='w-50 text-left'> Total </div><div class='w-50 text-right'>Estimativ " +
        //     calculateTotal(allCosts, periodCost)[0] +
        //     "€</div></div>"
        // );
      }
      if (activePage < lastPage) {
        paginator(tab, activePage + 1);
      }
    });
  jQuery(".customizeWebsite .backButton")
    .unbind()
    .click(function () {
      jQuery("html, body").animate(
        { scrollTop: jQuery(this).closest(".customizeWebsite").offset().top },
        250
      );
      if (activePage > 1) {
        paginator(tab, activePage - 1);
      }
    });
}
