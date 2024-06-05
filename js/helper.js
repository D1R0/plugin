const ETD_Helper = {
    init: function () {
        this.wrapLetters();
        this.attachEvents();
        this.reverseBurning();
    },

    wrapLetters: function () {
        var text = jQuery('#ETD_burningText h2').text();
        var letters = text.split('').map(letter => {
            if (letter === ' ') {
                // This wraps spaces in a non-breaking space span to keep layout consistent
                return `<span class="ETD_span" style="white-space: pre;">&nbsp;</span>`;
            } else {
                return `<span class="ETD_span burn">${letter}</span>`;
            }
        }).join('');
        jQuery('#ETD_burningText h2').html(letters);
    },

    startBurning: function () {
        jQuery('#ETD_burningText h2 span').each(function (index) {
            setTimeout(() => {
                jQuery(this).removeClass('ETD_recover');
            }, index * 50);
        });
    },

    reverseBurning: function () {
        jQuery('#ETD_burningText h2 span').each(function (index) {
            setTimeout(() => {
                jQuery(this).addClass('ETD_recover');
            }, index * 50);
        });
    },

    attachEvents: function () {
        jQuery('#ETD_burnButton').on('click', () => this.startBurning());
        jQuery('#ETD_reverseButton').on('click', () => this.reverseBurning());
    }
};
