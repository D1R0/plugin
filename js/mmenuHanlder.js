jQuery(document).ready(function ($) {
    if (window.innerWidth <= 1024) {
        $("#etd_mmenu_parent nav").attr("id", "etd_mmenu");
        $("#etd_mmenu").mmenu({
            extensions: ['theme-black', 'border-none', 'fx-menu-slide', 'pagedim-black'],
            navbar: {
                title: 'Eltand Navigation'
            },
            offCanvas: {
                position: "left",
                zposition: "front"
            },
            theme: "dark",
            navbars: [{
                position: "bottom",
                content: [
                    "<a class='fa fa-envelope' href='#/'></a>",
                    "<a class='fa fa-twitter' href='#/'></a>",
                    "<a class='fa fa-facebook' href='#/'></a>"
                ]
            }]
        });
    }
});
