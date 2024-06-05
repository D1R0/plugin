
jQuery("#etd_mmenu_parent nav").attr("id", "etd_mmenu")
jQuery("#etd_mmenu_parent nav ul").css("display", "flow")
jQuery("#etd_mmenu").mmenu({
    // mmenu options here
    extensions: ['theme-black', 'border-none', 'fx-menu-slide', 'pagedim-black'],
    navbar: {
        title: 'Eltand Navigation'
    },
    offCanvas: {
        position: "left",
        zposition: "front"
    },
    "theme": "dark",
    "navbars": [
        {
            "position": "bottom",
            "content": [
                "<a class='fa fa-envelope' href='#/'></a>",
                "<a class='fa fa-twitter' href='#/'></a>",
                "<a class='fa fa-facebook' href='#/'></a>"
            ]
        }
    ]

});
