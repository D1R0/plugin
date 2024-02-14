<?php

class Eltand_Widget_1 extends \Elementor\Widget_Base
{

    public function get_name()
    {
        return 'eltand_widget_1';
    }

    public function get_title()
    {
        return esc_html__('Cost Calculator', 'eltand');
    }

    public function get_icon()
    {
        return 'eicon-table';
    }

    public function get_categories()
    {
        return ['eltand'];
    }

    public function get_keywords()
    {
        return ['cost', 'calculator', 'cost calculator'];
    }

    protected function render()
    {
?>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
</script>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
    integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous">
</script>

<div class="customizeWebsite col-12" id="headSectionCustomizeWebsite" style="min-width:200px;">
    <div class="header w-100 d-flex flex-wrap py-2 my-3 align-items-center">
        <div class=" selectTab col">
            <h4 class="textPrimary my-auto">Tipul Website-ului</h5>
        </div>
        <div class="col text-right">
            <select name="" class="selectType">
                <option selected disabled>Alege</option>
                <option value="ecomm">eCommerce(magazin)</option>
                <option value="pres">Prezentare</option>
                <option value="other">Alt Tip</option>
            </select>
        </div>

    </div>
    <hr>
    <div class="tabs">
        <div class="ecomm tab" data-value="400" style="display: none;">
        </div>
        <div class="pres tab" data-value="200" style="display: none;"></div>
        <div class="other tab" data-value="0" style="display: none;"></div>
    </div>

    <div class="supportCard mt-4">
        <h3>Dificultati? Ai nevoie de ajutor?</h3>
        <hr>
        <p>Trimite mail la <a href="mailto:official@eltand.com">official@eltand.com</a> sau apeleaza la numerele
            <br><a href="tel:0730186575">+40 730 186 575</a> - Adrian-Valentin Cavaleru
            <br><a href="tel:0720817378">+40 720 817 378</a> - Oscar Constantin Dincu
        </p>
    </div>
</div>
<?php
    }
}