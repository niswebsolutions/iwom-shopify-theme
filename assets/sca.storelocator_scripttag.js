SCASLSetting={"apikey":"","radius":["10","20","30","40"],"df_radius":20,"df_measurement":"m","selected_tags":["Hunting","Camping","fishing","tactical","sporting events"],"selected_wfields":["title","address","city","state","zipcode","country","store_image","description","phone","fax","email","web","tags","schedule"],"wstyle":"#scasl-window-container #scasl-title{display:block !important}\n#scasl-window-container #scasl-address{display:block !important}\n#scasl-window-container #scasl-city{display:inline-block !important}\n#scasl-window-container #scasl-state{display:inline-block !important}\n#scasl-window-container #scasl-zipcode{display:inline-block !important}\n#scasl-window-container #scasl-country{display:inline-block !important}\n#scasl-window-container #scasl-store_image{display:block !important}\n#scasl-window-container #scasl-description{display:block !important}\n#scasl-window-container #scasl-phone{display:block !important}\n#scasl-window-container #scasl-fax{display:block !important}\n#scasl-window-container #scasl-email{display:block !important}\n#scasl-window-container #scasl-web{display:block !important}\n#scasl-window-container #scasl-tags{display:block !important}\n#scasl-window-container #scasl-schedule{display:block !important}\n","selected_lfields":["title","address","city","state","zipcode","country","store_image","distance","direction"],"lstyle":"#scasl-list-container #scasl-title{display:block !important}\n#scasl-list-container #scasl-address{display:block !important}\n#scasl-list-container #scasl-city{display:inline-block !important}\n#scasl-list-container #scasl-state{display:inline-block !important}\n#scasl-list-container #scasl-zipcode{display:inline-block !important}\n#scasl-list-container #scasl-country{display:inline-block !important}\n#scasl-list-container #scasl-store_image{display:block !important}\n#scasl-list-container #scasl-distance{display:block !important}\n#scasl-list-container #scasl-direction{display:block !important}\n","zoom":12,"extrafield":"","status":1,"autogeocode":1,"alltags":1,"search_bg_color":"#ffffff","search_border_color":"#cccccc","search_border_size":1,"loc_btn_color":"#6c78eb","search_btn_color":"#6c78eb","map_border_color":"#cccccc","map_border_size":1,"map_bg_color":"#ffffff","info_border_color":"#cccccc","info_border_size":1,"info_bg_color":"#ffffff","info_shop_name_color":"#000000","info_shop_info_color":"#555555","info_shop_info_font":"","info_shop_name_font":"","search_font":"","page_title":"Find Our Stores","curr_loc_text":"Current Location","radius_text":"Search Radius","msr_text":"Search Radius Measurement","find_loc_btn_text":"Find My Location","search_btn_text":"Search","filter_tags_text":"Filter Tags","add_error_alert":"Unable to find address","distance_error_alert":"Unfortunately, our closest location is more than","no_result_title":"No results","no_result_tags":"No locations were found with the given tags. Please modify your selections or input.","max_results":26,"scasl_phone_label":"","scasl_fax_label":"","scasl_email_label":"","scasl_schedule_label":"","map_style_name":"default","map_style_data":"","no_result_go_to_home_page":"Go to home page","default_view":0,"default_latitude":"","default_longitude":"","filter_tags_by":"and","default_view_zoom":0,"restric_country":[],"miles_text":"miles","kilometers_text":"kilometers","def_apk":["AIzaSyCOFKZnqYYoeG7R_hH-Av-vs0Fu7Vb-llQ","AIzaSyDr_u3YLxhgaT2-d8Z7ipiS8RMBq6o8eL0","AIzaSyDFar3v1c8MWKyU6EXpkw9BAgjAn94RYS4","AIzaSyAE38AyO0w5p3DiztLh4kIrDGDZa1rLNsE","AIzaSyBDUNeMvrdBVhJg2nhlcP7tGl9rXv9fX-0"],"locationsRaw":"[{\"lat\":\"40.772595\",\"lng\":\"-77.891491\",\"id\":249246,\"name\":\"IWOM Office Location\",\"phone\":\"8142725400\",\"fax\":\"8142725400\",\"web\":\"http:\\\/\\\/www.iwomouterwear.com\",\"webdisplay\":\"IWOMouterwear.com\",\"tagsvalue\":\"Hunting,Camping,fishing,tactical,sporting events\",\"tags\":[{\"tag\":\"Hunting\"},{\"tag\":\"Camping\"},{\"tag\":\"fishing\"},{\"tag\":\"tactical\"},{\"tag\":\"sporting events\"}],\"address\":\"1981 Pine Hall Road\",\"country\":\"USA\",\"city\":\"State College\",\"postal\":\"16801\"}]"};
(function() {
	if (!SCASLSetting.status ) return;
	var keepGo = false;
	var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
    
    var tagsContainerId = 'scasl-tag-list-container';
    var radiusUnitContainerId = 'scasl-lengthUnit';
    var radiusContainerId = 'scasl-radius-container';
    var geocodeID = 'scapl-geocode-btn';
    
    var scaloadScript = function(url,callback) {
    	var script = document.createElement("script");
    	script.type = "text/javascript";

    	if (script.readyState) {
    		script.onreadystatechange = function() {
    			if (script.readyState == "loaded"
    					|| script.readyState == "complete") {
    				script.onreadystatechange = null;
    				callback();
    			}
    		};
    	} else {
    		script.onload = function() {
    			callback();
    		};
    	}

    	script.src = url;
    	document.getElementsByTagName("head")[0].appendChild(script);
    };

    var loadjscssfile = function(filename, filetype) {
        if (filetype == "js") { // if filename is a external JavaScript file
          var fileref = document.createElement('script');
          fileref.setAttribute("type", "text/javascript");
          fileref.setAttribute("src", filename);
        } else if (filetype == "css") { // if filename is an external CSS file
          var fileref = document.createElement("link");
          fileref.setAttribute("rel", "stylesheet");
          fileref.setAttribute("type", "text/css");
          fileref.setAttribute("href", filename);
        }
        if (typeof fileref != "undefined")
          document.getElementsByTagName("head")[0].appendChild(fileref);
    };
    
    var injectCssCode = function (css) {
    	var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');

	    style.type = 'text/css';
	    if (style.styleSheet){
	      style.styleSheet.cssText = css;
	    } else {
	      style.appendChild(document.createTextNode(css));
	    }
	
	    head.appendChild(style);
    };
    loadjscssfile('//cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js','js');
    function createTagsFilter ($) {
    	var $tagsContainer = $('#' + tagsContainerId);
    	if (SCASLSetting.selected_tags.length == 0) {
    		$tagsContainer.parent().hide();
    	} else {
    		for (var i = 0 ; i <  SCASLSetting.selected_tags.length ; ++ i) {
        		$tagsContainer.append('<li> <label> <input type="checkbox" name="tagsvalue" value="'+SCASLSetting.selected_tags[i]+'"> '+SCASLSetting.selected_tags[i]+' </label> </li>');
        	}
    	}
    	
    }
    function createRadiusFilter($) {
    	var $radiusContainer = $('#' + radiusContainerId);
    	if (SCASLSetting.radius.length == 0) {
    		$radiusContainer.parent().hide();
    	} else {
    		for (var i = 0 ; i <  SCASLSetting.radius.length ; ++ i) {
    			var radius = parseInt(SCASLSetting.radius[i].trim()) || 0;
    			if (radius) $radiusContainer.append('<option value="'+radius+'" ' +(SCASLSetting.df_radius == radius ? " selected='selected'":" ")+ '>'+radius+'</option>');
        	}
    		$radiusContainer.append('<option value="0"' + (SCASLSetting.df_radius == 0 ? " selected='selected'":" ") + '>No Limit</option>');
    	}
    	
    	var $radiusUnitContainer =  $('#' + radiusUnitContainerId);
    	$radiusUnitContainer.val(SCASLSetting.df_measurement);
    
    }
    
    function applyTransSetting ($) {
    	$('#scasl-app-container .bh-sl-title').html(SCASLSetting.page_title);
    	$('#scasl-app-container label[for="bh-sl-address"]').html(SCASLSetting.curr_loc_text);
    	$('#scasl-app-container label[for="scasl-radius-container"]').html(SCASLSetting.radius_text);
    	$('#scasl-app-container label[for="scasl-lengthUnit"]').html(SCASLSetting.msr_text);
    	$('#scasl-app-container label[for="scasl-tag-list-container"]').html(SCASLSetting.filter_tags_text);
    	$('#scasl-app-container #scapl-geocode-btn').html(SCASLSetting.find_loc_btn_text);
    	$('#scasl-app-container #bh-sl-submit').html(SCASLSetting.search_btn_text);
    	$('#scasl-app-container #bh-sl-submit').html(SCASLSetting.search_btn_text);
    }
    
    function getApiKey () {
    	if (SCASLSetting.apikey) return SCASLSetting.apikey;
    	return SCASLSetting.def_apk[new Date().getTime() % SCASLSetting.def_apk.length];
    }
    
    function applyStoreInfoSetting ($) {
    	var cssName = '#scasl-list-container #scasl-title, #scasl-window-container #scasl-title{color:' + SCASLSetting.info_shop_name_color + ' !important;' + 'font-family:' + SCASLSetting.info_shop_name_font + ' !important;}';
        var cssInfo = '#scasl-list-container div, #scasl-window-container div, #scasl-list-container span, #scasl-window-container span {color:' + SCASLSetting.info_shop_info_color + ' !important;' + 'font-family:' + SCASLSetting.info_shop_info_font + ' !important;}';
    	var style = $('<style>#scasl-app-container .list-focus { border-color: '+SCASLSetting.info_border_color+' !important; border-width: '+SCASLSetting.info_border_size+'px !important;}' + cssInfo + cssName  +'</style>');
    	$('html > head').append(style);
    }
    
    function applySearchSetting ($) {
    	var style = '<style>#scasl-tab-radius{background-color:' + SCASLSetting.search_bg_color + ' !important;' + 'border-color:' + SCASLSetting.search_border_color + ' !important;border-width:' + SCASLSetting.search_border_size + 'px !important;}'
    				+ '#bh-sl-submit {background-color:' + SCASLSetting.search_btn_color + ' !important}'
    				+ '#scapl-geocode-btn {background-color:' + SCASLSetting.loc_btn_color + ' !important}'
    				+ '.scasl-location-list, #bh-sl-map {border-color:' + SCASLSetting.map_border_color + ' !important; border-width:' + SCASLSetting.map_border_size + 'px !important}'
    				+ '.bh-sl-form-container , .bh-sl-form-container label,  .bh-sl-form-container button {font-family:' + SCASLSetting.search_font + ' !important;}'
    				+'</style>'; 
    	$('html > head').append(style);
    	
    }
    
    function initStoreLocatorPlugin ($) {
        var fullMapStart = true;

        // Check if has default view, disable show full map at first start time
        if (SCASLSetting.default_view == 1) {
            fullMapStart = false;
        }

    	var slplugin = {
    	    	'autoComplete': true,
    	        'dataType': 'json',
    	        'maxDistance': true,
    	        'maxDistanceID': radiusContainerId,
    	        'lengthUnitID' : radiusUnitContainerId,
    			'taxonomyFilters' : {
    				'tagsvalue' : tagsContainerId,
    			},
    			'listTemplateID': 'scasl-list-template',
    			'infowindowTemplateID':'scasl-infowindow-template',
    	        'disableAlphaMarkers': true,
    	        'mapSettings' : {
    				zoom     : SCASLSetting.zoom,
    				mapTypeId: google.maps.MapTypeId.ROADMAP
    			},
    			'fullMapStart':fullMapStart,
    			'geocodeID' : geocodeID
    	    };
    	
    	if (SCASLSetting.map_style_name != 'default') {
    		slplugin.mapSettings.styles = SCASLSetting.map_style_data;
    	}
    	
    	if (SCASLSetting.locationsRaw) {
    		slplugin.dataRaw = SCASLSetting.locationsRaw;
    	} else {
    		slplugin.dataLocation = SCASLSetting.locationsUrl;
    		slplugin.dataType = 'json';
    	}
    	
    	if (SCASLSetting.autogeocode == 1) {
    		slplugin.autoGeocode = true;
    	}
    	
    	if (SCASLSetting.kilometers_text) {
    		slplugin.kilometersLang = SCASLSetting.kilometers_text;
    	}
    	
    	if (SCASLSetting.miles_text) {
    		slplugin.milesLang = SCASLSetting.miles_text;
    	}
    	
    	//disable auto geocode on mobile
    	if(isMoblieBrowser()) slplugin.autoGeocode = false;
    	
    	
        slplugin.storeLimit = parseInt(SCASLSetting.max_results) || 26;
        slplugin.addressErrorAlert = SCASLSetting.add_error_alert;
    	slplugin.distanceErrorAlert = SCASLSetting.distance_error_alert;
    	slplugin.noResultsTitle = SCASLSetting.no_result_title;
    	slplugin.noResultsDesc = SCASLSetting.no_result_tags;
		slplugin.noResultsGoToHomePage = SCASLSetting.no_result_go_to_home_page;
		if (SCASLSetting.default_view == 1) {
            slplugin.defaultLoc = true;
		}
        slplugin.defaultLat = SCASLSetting.default_latitude;
        slplugin.defaultLng = SCASLSetting.default_longitude;
    	slplugin.infoBubble= {
            backgroundClassName: 'scasl-store-info-window',
            backgroundColor: SCASLSetting.info_bg_color,
            borderColor: SCASLSetting.info_border_color,
            borderWidth:SCASLSetting.info_border_size,
            maxWidth: 350,
            maxHeight: 400,
            closeSrc:'//cdn.secomapp.com/storelocator/assets/cdn/img/close-icon-dark.png',
            borderRadius:0
        };
    	if (SCASLSetting.filter_tags_by == 'or') {
            slplugin.exclusiveFiltering = true;
		}

    	return slplugin;
    }
    
    
    function createLocationMobile($) {
    	if( isMoblieBrowser()  && $('.scasl-location-mobile-wrap').length > 0) {
    	    $('.bh-sl-form-container').hide();
    	    $('.scasl-location-mobile-wrap').show();
    	    $('.scasl-location-mobile-wrap').click(function () {
    		    if($('.bh-sl-form-container').is(":visible")) {
    		    	$('.bh-sl-form-container').hide(1000);	
    		    } else {
    		    	$('.bh-sl-form-container').show(1000);	
    		    }
    		});
    	}
    }
    
    function isMoblieBrowser () {
    	var check = false;
    	try {
    		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    	} catch (e) {
    		console.log(e);
    	}
      
    	return check;
    }

    
    
    var startSL = function($){
    	var style = SCASLSetting.wstyle + SCASLSetting.lstyle;
    	if (style) {
    		injectCssCode(style);
    	}
    	createRadiusFilter($);
    	createTagsFilter ($);
    	applyTransSetting ($);
    	applyStoreInfoSetting($);
    	applySearchSetting ($);
    	$('.bh-sl-form-container').show();
    	$('#bh-sl-map-container').storeLocator(initStoreLocatorPlugin ($));
    	createLocationMobile($);
    };

    function initSL () {
    	if (jQuerySCASL('#scasl-app-container').length == 0) return false;
    	loadjscssfile('//cdn.secomapp.com/storelocator/assets/cdn/css/storelocator.css','css');
    	console.log('loadding locator plugin...');
		scaloadScript("//maps.google.com/maps/api/js?key="+getApiKey ()+"&libraries=places",function() {
			scaloadScript("//cdn.secomapp.com/storelocator/assets/cdn/js/jquery.storelocator.js",function() {
				jQuerySCASL(document).ready(function() {
        			startSL(jQuerySCASL);
        		});
        		
        	});
		});
		
		console.log('finished!');
    };
    
    var $checkVersion = function (strVersionA, strVersionB){
    	try {
    		var arrVersionA = strVersionA.split('.');
    		var arrVersionB = strVersionB.split('.');
    		var intVersionA = (100000000 * parseInt(arrVersionA[0])) + (1000000 * parseInt(arrVersionA[1])) + (10000 * parseInt(arrVersionA[2]));
    		var intVersionB = (100000000 * parseInt(arrVersionB[0])) + (1000000 * parseInt(arrVersionB[1])) + (10000 * parseInt(arrVersionB[2]));

    		if (intVersionA > intVersionB) {
    			return 1;
    		} else if (intVersionA < intVersionB) {
    			return -1;
    		} else {
    			return 0;
    		}
    		return false;
    	} catch (e) {
    		console.log(e);
    	}
      
    	return 1;
    };

    if (document.getElementById("scasl-app-container")) {
    	keepGo = true;
    }
    
    if (keepGo) {
    	if (typeof jQuery === 'undefined' || $checkVersion("3.0.0",jQuery.fn.jquery)>0) {
    		scaloadScript("//code.jquery.com/jquery-3.0.0.min.js",function() {
    			console.log('finished load jquery..');
    			jQuerySCASL = jQuery.noConflict(true);
    			initSL ();
    		});
    	} else {
    		console.log("use shop's jquery..");
    		jQuerySCASL = jQuery;
    		initSL ();
    	}
     }
    
	
})();