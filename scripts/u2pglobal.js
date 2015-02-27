 $body = $("body");

            $(document).on({
                 ajaxStart: function() { 
                    
                    $.blockUI({ 
                  
                    css: { 
                        border: 'none', 
                        padding: '15px', 
                       
                        backgroundColor: '#fff', 
                       
                        opacity:'.80', 
                        color: '#000' 
                        },

                        message: '<p><img src="/images/busy.gif" /><small> Please wait...</small></p>'
                        
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
 