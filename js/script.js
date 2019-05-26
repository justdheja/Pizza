function tampilkanSemuaMenu(){

    $.getJSON('json/pizza.Json', function(data){
        let menu = data.menu;
        $.each(menu, function (i, data) { 
            $('#daftar-menu').append(`
            <div class="col-md-4">
            <div class="card mb-3" style="width: 18rem;">
                <img class="card-img-top" src="img/pizza/'+ data.gambar +'" alt="Card image cap">
                <div class="card-body"><h5 class="card-title">'+ data.nama +
                '</h5><p class="card-text">'+ data.deskripsi +
                '</p><h5 class="card-title">'+ data.harga +
                '</h5><a href="#" class="btn btn-primary">order now</a>
                </div>
            </div>
            </div>`)
        });
    
    });

}

tampilkanSemuaMenu();

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if( kategori == 'All Menu' ) {
        tampilkanSemuaMenu();
        return;
    }


    $.getJSON('json/pizza.Json', function(data){
            let menu = data.menu;
            let content = '';

            $.each(menu, function(i, data){
                if (data.kategori == kategori.toLowerCase()){
                    content += '<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img class="card-img-top" src="img/pizza/'+ data.gambar +'" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.harga +'</h5><a href="#" class="btn btn-primary">order now</a></div></div></div>'
                }

            });

            $('#daftar-menu').html(content);
    });


})