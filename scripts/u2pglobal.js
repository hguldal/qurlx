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

                        message: '<p>Biraz Bekle...</p>'
                        
                        }); 


                  },
                 ajaxStop: function() {
                      setTimeout($.unblockUI, 200);
                     
                       }    
            });

            
          function MesajKutusu(baslik, metin) {
             
             $.growl({ title: '', message: metin });

          }

          function HataMesaji(metin) {
             
            $.growl.error({title:'Hata !', message: metin });

          }
         
          function LinkAyikla(text) {
          


            }
          
$('.GrupAra').selectize({
    valueField: 'GrupURL',
    labelField: 'GrupAdi',
    searchField: ['GrupAdi','adsoyad'],
    create: false,
    render: {
        option: function (item, escape) {
           
            return '<div class="media">' +
                            '<a class="pull-left" href="#">' +
                            '<img class="media-object" src="../../images/profilresimleri/' + escape(item.FotoURL) + '" width="48" height="48">' +
                            '</a>' +

                            '<div class="media-body">' +
                                '<h5 class="media-heading">' + escape(item.GrupAdi) + ' [' + escape(item.adsoyad) + ']' + '</h5>' +
                                 escape(item.Aciklama) +

                            '</div>' +
                            '</div>';

        }
    },
    load: function (query, callback) {
        if (!query.length) return callback();
        $.ajax({
            url: '/ajax/Grup/JsonGrupListesi',
            type: 'GET',
            dataType: 'json',
            data: {
                sorgu: query

            },

            error: function () {
                callback();
            },
            success: function (res) {
                callback(res);
            }
        });
    }
});


$('.GrupAra').on('change', function (e) {
    
    if ($(this).val()!='')
    {
        window.location.href = "/" + $(this).val();    
    }
    
    return false;
});
$.fn.editable.defaults.mode = 'popup';

 
//ssfgdfg//

    checkURL();

    $('ul li a').click(function (e){

            checkURL(this.hash);

    });

    setInterval("checkURL()",250);


var lasturl="";

function checkURL(hash)
{
    if(!hash) hash=window.location.hash;

    if(hash != lasturl)
    {
        lasturl=hash;
        loadPage(hash);
    }
}

function loadPage(url)
{
    url=url.replace('#page','');

    

    $.ajax({	
        type: "POST",
        url: "load_page.php",
        data: 'page='+url,	
        dataType: "html",	
        success: function(msg){

            if(parseInt(msg)!=0)	
            {
                $('#pageContent').html(msg);
                
            }
        }

    });

}