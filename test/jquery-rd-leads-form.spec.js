
describe('RDLeadsForm', () => {
	let spyEvent;

  beforeEach(() => {
		$(document.body).append('<div class="form"></div>');

		const options = {
			fields: {
				states: ['SC'],
				levels: ['Ninja']
			},
			url: 'http://www.rdstation.com.br/'
		};

    $('.form').RDLeadsForm(options);
  });

	it('element created.', () => {
		expect($('.form')).toBeInDOM();
	});

  it('plugin class added to element.', () => {
    expect($('.form').hasClass('rd-leads-form')).toBe(true);
  });

	it('form action defined.', () => {
		expect($('.rd-leads-form form').attr('action')).toContain('http://www.rdstation.com.br/');
	});

	it('state select has defined options.', () => {
		expect($('.rd-leads-form select[name="state"]')).toContainHtml('<option>Selecionar</option><option value="SC">SC</option>');
	});

	it('level select has defined options.', () => {
		expect($('.rd-leads-form select[name="level"]')).toContainHtml('<option>Selecionar</option><option value="Ninja">Ninja</option>');
	});

	describe('modal mode.', () => {

		beforeEach(() => {
			const options = {
				modal: true
			};
	    $('.form').RDLeadsForm(options);
	  });

		it('has modal opener', () => {
			expect($('.modal-open')).toBeInDOM();
		});

		it('has modal closer', () => {
			expect($('.modal-close')).toBeInDOM();
		});

		it('has modal overlay', () => {
			expect($('.overlay')).toBeInDOM();
		});

		it('open modal.', () => {
			$('.modal-open').click();
			expect($('.rd-leads-form').hasClass('modal-active')).toBe(true);
		});

		it('close modal.', () => {
			$('.rd-leads-form').addClass('modal-active');
			$('.modal-close').click();
			expect($('.rd-leads-form').hasClass('modal-active')).toBe(false);
		});

	});

  afterEach(() => {
    $('.form').remove();
  });

});
