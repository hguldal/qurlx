 $body = $("body");

            $(document).on({
                 ajaxStart: function() { 
                    
                    $.blockUI({ 
                  
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                        
                        backgroundColor: '#000', 
                        '-webkit-border-radius': '10px', 
                        '-moz-border-radius': '10px', 
                        opacity: .5, 
                        color: '#fff' 
                        },

                        message: '<p>Please Wait...</p>'
                        
                        }); 


                  },
                 ajaxStop: function() {
                      setTimeout($.unblockUI, 100);
                     
                       }    
            });

            
          function MesajKutusu(baslik, metin) {
             
             $.growl({ title: '', message: metin });

          }

          function HataMesaji(metin) {
             
            $.growl.error({title:'Hata !', message: metin });

          }
 