
describe('RDLeadsForm', () => {

  beforeEach(() => {
    $(document.body).append('<div class="form"></form>');

    const options = {
      token: '62bb61431348e22850828a5829c4373faafe29c1',
      secret: '51a266c2844ccd5cac83d88de88d82d05358aa51',
      fields: {
        states: ['MG', 'SP'],
        levels: ['Iniciante', 'Intermediário', 'Avançado', 'Ninja']
      },
      url: 'http://mockbin.org/bin/09963f71-f4eb-4a17-a7b9-8943a22ee996'
    };

    $('.form').RDLeadsForm(options);

  });

  it('Check if container div was created.', () => {
    expect($('.form').length).toBe(1);
  });

  describe('Form submission.', () => {

    beforeEach(() => {
      $('.form > form').submit();
    });

    it('Check if send had success.', () => {
      expect($('.rd-leads-form-done').hasClass('hidden')).toBe(false);
    });

  });

  afterEach(() => {
    $('.form').remove();
  });


});
