// JavaScript Document
//
// getZinData
//
// Chris Baptista
// Zindigo, Inc



(function($){
	
	var defaults = {
		url : null,
		async : true,
		data : [],
		dataType : 'json',
		itemTemplate : null,
		callbacks : {
			success : null,
			error : null
		}
	};
	var options = [];
	
	$.fn.getZinDataTmpl = function(_options) {
		options = $.extend({}, defaults, _options); 
		//console.log(options);
		
		var container = $(this).selector;
		$.ajax({
			url: options.url,
			data: options.data,
			dataType: options.dataType,
			async : options.async,
			
			success: function(items) { 
				//console.log(items);
				for(i=0; i< items.length; i++){
					newItem = $(options.itemTemplate).render(items[i]);
					$(container).append(newItem);
				}
				if(typeof options.callbacks.success == 'function') {
					options.callbacks.success.call(this);
				} else {
					console.log('No Success Callback');
				}
			},
		
			error: function(jqXHR, textStatus, errorThrown) {
				console.log('FAILED: ' + errorThrown);
				if(typeof options.callbacks.error == 'function') {
					options.callbacks.error.call(this);
				} else {
					console.log('No Error Callback');
				}
			}
		  
		});
		
		return this;
	};
	$.getZinData = function(_options) {
		options = $.extend({}, defaults, _options); 
		
		var returnData= [];
		$.ajax({
			url: options.url,
			data: options.data,
			dataType: options.dataType,
			async : options.async,
			
			success: function(data) { 
				returnData = data;
			},
		
			error: function(jqXHR, textStatus, errorThrown) {
				console.log('FAILED: ' + errorThrown);
			}
		  
		});
		
		return returnData;
	};
	
	function setitemtmpl( newitem, itemTemplate) {
		itemtmpl = $(itemTemplate).html();
		return itemtmpl.replace(/\{{[(\w+)\]}}]/g , function(s, key){
				console.log(key);
				return '';
			})
		.replace(/\{{(\w+)\}}/g , function(s, key) {
			if(typeof newitem[key] == 'object' && $.isArray(newitem[key]) ) {
				returnData = '';
				for(j=0; j< newitem[key].length; j++){
					returnData = returnData + setitemtmpl(newitem[key][j], itemTemplate + '-' + key );
				}
				return returnData;
			} else if( typeof newitem[key] == 'null' || newitem[key] == 'null') {
				return '';
			} else {
				return htmlEscape(newitem[key]) || '';
			}
		});
	}
	function htmlEscape(str) {
		return String(str)
			.replace(/&/g, '&amp;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
	}

})(jQuery);
