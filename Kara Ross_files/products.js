// JavaScript Document
//Get Products 

(function($){
	var products_options = [];
	
//Functions that are compatible with getMoreProducts
	
	//Get Category Products hot
	var productshot_defaults = {
		url : 'json/storehotproducts.php',
		data : {
			catid : null,
			start : 1,
			limit : 9999,
			keywords : null
		},
		itemTemplate : '#product-template'
	};
	
	
	//Get category Products
	var products_defaults = {
		url : 'json/storecatproducts.php',
		data : {
			catid : null,
			start : 1/*,
			limit : 9999*/
		},
		itemTemplate : '#product-template'
	};

	var productskeywords_defaults = {
		url : 'json/getstoreproductsbykeywords.php',
		data : {
			catid : null,
			start : 1,
			limit : 9999,
			keywords : null
		},
		itemTemplate : '#product-template'
	};
	

	$.fn.getCatProductsHot = function(_options) {
		products_options = $.extend(true, productshot_defaults, _options);
		return $(this).getZinDataTmpl( products_options );
	};
	
	


	$.fn.getCatProductsKeywords = function(_options) {
		products_options = $.extend(true, productskeywords_defaults, _options);
		return $(this).getZinDataTmpl( products_options );
	};
	
	//Get Category Products
	var products_defaults = {
		url : 'json/storecatproducts.php',
		data : {
			catid : null,
			start : 1,
			limit : 9999
		},
		itemTemplate : '#product-template'
	};



	
	$.fn.getCatProducts = function(_options) {
		products_options = $.extend(true, products_defaults, _options);
		return $(this).getZinDataTmpl( products_options );
	};
	
	//Get Category Products All
	var productsall_defaults = {
		url : 'json/getstorecatproductsall.php',
		data : {
			catid : null,
			start : 1,
			limit : 9999
		},
		itemTemplate : '#product-template'
	};
	
	$.fn.getCatProductsAll = function(_options) {
		products_options = $.extend(true, productsall_defaults, _options);
		return $(this).getZinDataTmpl( products_options );
	};

	//Get New Products
	var productsnew_defaults = {
		url : 'json/storenewproducts.php',
		data : {
			storeid : null,
			start : 1,
			limit : 9999
		},
		itemTemplate : '#product-template'
	};
	
	$.fn.getNewProducts = function(_options) {
		products_options = $.extend(true, productsnew_defaults, _options);
		return $(this).getZinDataTmpl( products_options );
	};
	
	//Get Sale Products
	var productssale_defaults = {
		url : 'json/storesaleproducts.php',
		data : {
			storeid : null,
			start : 1,
			limit : 9999
		},
		itemTemplate : '#product-template'
	};
	
	$.fn.getSaleProducts = function(_options) {
		products_options = $.extend(true, productssale_defaults, _options);
		return $(this).getZinDataTmpl( products_options );
	};
	
	
	//Get More Products
	//Must be initialized with other functions 
	$.fn.getMoreProducts = function(){
		products_options.data.start = products_options.data.start + products_options.data.limit;
		return $(this).getZinDataTmpl( products_options );
	}
	
//Functions that do not use getMoreProducts
	//Get CrossSale Products
	var productscrosssale_defaults = {
		url : 'json/crosssells.php',
		data : {
			storeid : null,
			productid : null,
		},
		itemTemplate : '#product-template'
	};
	
	$.fn.getCrossSaleProducts = function(_options) {
		products_options = $.extend(true, productscrosssale_defaults, _options);
		return $(this).getZinDataTmpl( products_options );
	};

})(jQuery);
