
describe('RDLeadsForm', () => {

  beforeEach(() => {
    $(document.body).append('<div class="form"></form>');
    $('.form').RDLeadsForm();
  });

  it('Check if container div was created.', () => {
    expect($('.form').length).toBe(1);
  });

  afterEach(() => {
    $('.form').remove();
  });

});
