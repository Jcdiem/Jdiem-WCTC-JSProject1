$('#pizzaNotice').hide(); //Having issues with the class hide
$(document).ready(
    function () {
        // event handlers
        $("#tabs a").click(showTab);
        $('#confirmNav').click(showTab);
        $('#pizzaBtn').click(unlockShipping);
        $('#confirmNav').click(updateConfirmationPage);

        // other functions
        function showTab(event) {
            event.preventDefault();
            $(this).tab("show");
        }

        function unlockShipping(){
            $('#deliveryNav').removeClass('disabled');
            $('#pizzaNotice').show();
        }


        function updateConfirmationPage(){
            let out = '';

            const pizSize = Math.round($('input:checked[name=pizSize]').val() * 100)/100;
            console.log(pizSize);
            out += '<p> $ ' + pizSize + ' from pizza size</p>';
            const pizMeat = Math.round(($('input:checkbox:checked[name=meat]').length * 1.50)*100)/100;
            console.log(pizMeat);
            out += '<p> $ ' + pizMeat + ' from pizza meats</p>';
            const pizVeggie = Math.round(($('input:checkbox:checked[name=veggie]').length * 1.00)*100)/100;
            console.log(pizVeggie);
            out += '<p> $ ' + pizVeggie + ' from pizza veggies</p>';
            const total = pizVeggie + pizMeat + pizSize;
            out += '<p> With a total of $' + total +' </p>' +
                '<p>Shipped to '+ $('#name').val() +' at ' + $('#address').val() + ' with contact of '+ $('#telephone').val() +'</p>';
            $('#confirmation').html(out);
        }

    });
