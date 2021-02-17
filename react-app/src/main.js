<select id="und" style="width: 90%; margin: 0 auto; display: block; border-radius: 0; color: #282828; border: 1px solid #282828; background: #fdfdfd;">
	<option value="1" selected>Preto</option>
  	<option value="2">Branco</option>
	<option value="3">Azul</option> 
  	<option value="4">Bege</option>
</select>
<script type="text/javascript">
    const url = 'https://piselimpe.com';
    let obj = undefined;
    let selectedKit1 = `https://seguro.piselimpe.com/checkout/5117330406/12`;
    let selectedkit1Upsell = `https://seguro.piselimpe.com/checkout/5117193465/12`;
    const arr1 = [
        {
            variant_id: 1,
            img: `${url}/wp-content/uploads/2020/07/KIT1_CINZA_NEVOA-min.png`,
            url: `https://seguro.piselimpe.com/checkout/5117479807/12`,
            urlupsell: `https://seguro.piselimpe.com/checkout/5117829316/12`,
            price: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        },
        {
            variant_id: 2,
            img: `${url}/wp-content/uploads/2020/07/KIT1_AREIA_MAR-min.png`,
            url: `https://seguro.piselimpe.com/checkout/5117330406/12`,
            urlupsell: `https://seguro.piselimpe.com/checkout/5117193465/12`,
            price: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]          
        },        
        {
            variant_id: 3,
            img: `${url}/wp-content/uploads/2020/07/KIT1_CHOCOLATE-min.png`,
            url: `https://seguro.piselimpe.com/checkout/5117527993/12`,
            urlupsell: `https://seguro.piselimpe.com/checkout/5117821743/12`,
            price: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        },
        {
            variant_id: 4,
            img: `${url}/wp-content/uploads/2020/07/KIT1_MATA_PRAIA-min.png`,
            url: `https://seguro.piselimpe.com/checkout/5117832765/12`,
            urlupsell: `https://seguro.piselimpe.com/checkout/5117716265/12`,
            price: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        }                              
    ];
    jQuery('#und').on('change', function() {
    	obj = arr1.filter(el => el.variant_id == jQuery(this).val());
    	if (Array.isArray(obj)) {
			obj = obj[0];
			console.log(obj)
           	jQuery('#kit1-img img').removeAttr('srcset');
           	jQuery('#kit1-img img').attr('src', obj.img);     
		}
    });

	jQuery( document ).on( 'elementor/popup/show', ( event, id, instance ) => {
		if (id != 735) {
	    	console.log('não é a modal');
	      	return;
	  	}
	  	if (typeof obj !== 'undefined') {
			jQuery('#btn-upsell-kit1-cancel a').attr('href', obj.url);
	    	jQuery('#btn-upsell-kit1-ok a').attr('href', obj.urlupsell);        
	    	return;
	    }
		jQuery('#btn-upsell-kit1-cancel a').attr('href', selectedKit1);
	  	jQuery('#btn-upsell-kit1-ok a').attr('href', selectedkit1Upsell);    
	});
</script>