var atualizaDados = function () {

	var total = 0;
	var itens = $('.item-total:visible');
	for (var i = 0; i < itens.length; i++) {
		var item = $(itens[i]);
		var valor = parseFloat(item.text());
		total = total + valor;
	}
	console.log("Valor total: " + total);
	$('#valor-total').text(total);
	$('#quantidade-item').text(itens.length);
};

var removeItem = function(event) {

	event.preventDefault();
	var self = $(this);
	self.closest('tr').hide();

	atualizaDados();
};

var undo = function () { 
	$("tr:visible").removeClass('recuperado');

	var trs = $('tr:hidden');
	trs.addClass('recuperado').show();


};

var aposInicializado = function() {

	atualizaDados();
	$('#undo').click(undo);
	$('.remove-item').click(removeItem);
	};

	$(aposInicializado); 
