var item = [{
    Title: 'Educación Media Superior',
    Subtitle: 'Colegio de Ciencias y Humanidades (CCH-OTE)',
    Content: 'Bachillerato concluido en tres años'
}]



function getItemData() {
    var itemTitle = $("#item-title").val();
    var itemSubtitle = $("#item-subtitle").val();
    var itemContent = $("#item-content").val();
    console.log(itemTitle, itemSubtitle, itemContent);
    var itemObject = {
        Title: itemTitle,
        Subtitle: itemSubtitle,
        Content: itemContent
    }
    item.push(itemObject);
    console.log(item);
    printItem();
}


function printItem(){
    $(".contenido-item").empty();
    console.log("printItem");
    for (i = 0; i < item.length; i++) {
        //debugger;
        var objeto1 = item[i];
        console.log(objeto1);
        var itemTitle = objeto1.Title;
        var itemSubtitle = objeto1.Subtitle;
        var itemContent= objeto1.Content;
        console.log(itemTitle, itemSubtitle, itemContent);
        var AniadeHtml = '<br>'+'<div class="content-wrapper">'+
        '<h2 class="content-title">' 
             + itemTitle + '</h2>' +
            '<h3 class="content-subtitle">' + itemSubtitle + '</h3>' +
            '<hr>' +
            '<p class="content-text">' + itemContent+ '</p>' ;
        $(".contenido-item").append(AniadeHtml);
    }
}


$("#submit-button").on("click", function() {
    getItemData();
});


