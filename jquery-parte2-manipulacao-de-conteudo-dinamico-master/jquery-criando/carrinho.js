var atualizaDados = function () {
	var total = 0;
	var itens = $('.item-total');
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
	self.closest('tr').remove();

	atualizaDados();
	};
	var aposInicializado = function() {
	atualizaDados();
	$('.remove-item').click(removeItem);
	};

	$(aposInicializado); 
