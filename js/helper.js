const ETD_Helper = {
    init: function () {
        this.wrapWords();
        this.attachEvents();
        this.reverseBurning();
    },

    wrapWords: function () {
        var text = jQuery('#ETD_burningText h1').text();
        var words = text.split(' ').map(word => {
            return `<span class="ETD_word">${word.split('').map(letter => `<span class="ETD_span burn">${letter}</span>`).join('')}</span> `;
        }).join('');
        jQuery('#ETD_burningText h1').html(words);
        this.adjustWordWrapping();
    },

    adjustWordWrapping: function () {
        jQuery('#ETD_burningText h1 .ETD_word').each(function () {
            var $word = jQuery(this);
            if ($word.width() > jQuery('#ETD_burningText h1').width()) {
                // Split word into characters if it's too wide
                $word.html($word.text().split('').map(char => `<span class="ETD_span burn">${char}</span>`).join(''));
            }
        });
    },

    startBurning: function () {
        jQuery('#ETD_burningText h1 span.ETD_span').each(function (index) {
            setTimeout(() => {
                jQuery(this).removeClass('ETD_recover');
            }, index * 50);
        });
    },

    reverseBurning: function () {
        jQuery('#ETD_burningText h1 span.ETD_span').each(function (index) {
            setTimeout(() => {
                jQuery(this).addClass('ETD_recover');
            }, index * 50);
        });
    },

    attachEvents: function () {
        jQuery('#ETD_burnButton').on('click', () => this.startBurning());
        jQuery('#ETD_reverse"Button').on('click', () => this.reverseBurning());
    }
};
