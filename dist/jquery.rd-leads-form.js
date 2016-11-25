(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
;(function($) {

	'use strict';

    class RDLeadsForm {
      constructor(element, options = {}) {

				const defaults = {
          token: null,
          secret: null,
          fields: {
            states: [],
            levels: []
          },
          url: null,
					modal: false
        };

        this.el = $(element);
        this.settings = $.extend({}, defaults, options);
				this.modal = this.settings.modal;
        this.render();
				this.form = this.el.find('form')[0];
        this.listeners();
      }

      listeners() {
        $(this.form).on('submit', this.submitForm.bind(this));

				if (this.modal) {
					const open = this.el.find('.modal-open');
					const close = this.el.find('.modal-close');

					$(open).on('click', this.toggleModal.bind(this));
					$(close).on('click', this.toggleModal.bind(this));
				}
      }

			toggleModal(ev) {
				ev.preventDefault();
				this.el.toggleClass('modal-active');
			}

      submitForm(ev) {
        ev.preventDefault();
        const formData = $(ev.target).serialize();
				const { url } = this.settings;
				const { token, secret } = this.settings.fields;

				const request = $.ajax({
          method: 'POST',
          url: url,
          data: formData,
					headers: {
						token: token,
						secret: secret
					}
        });

        request.done(this.formSendDone.bind(this));
        request.fail(this.formSendFail.bind(this));
      }

      formSendDone(data) {
        this.showAlert('done');
				this.resetForm();
      }

      formSendFail(jqXHR, textStatus) {
        this.showAlert('fail');
      }

      showAlert(type) {
        const done = this.el.find('.rd-leads-form-done');
        const fail = this.el.find('.rd-leads-form-fail');

        switch (type) {
          case 'done':
            fail.addClass('hidden');
            done.removeClass('hidden');
            break;
          case 'fail':
            fail.removeClass('hidden');
            done.addClass('hidden');
            break;
          default:
        }
      }

			resetForm() {
				this.form.reset();
			}

      render() {

				this.el.addClass('rd-leads-form');

				if (!this.modal) {
					this.el.html(this.formComponent());
					return;
				}

				this.el.html(this.modalComponent());
      }

			modalComponent() {
				return `
					<a class="modal-open btn btn-primary" href="#">Quero receber materiais por email.</a>
					<div class="modal-wrap">
						<a class="modal-close" href="#">&times;</a>
						${this.formComponent()}
					</div>
					<div class="overlay"></div>
				`;
			}

      formComponent() {
				const { url } = this.settings;
				const { states, levels } = this.settings.fields;

        return `
          <form action="${url}" type="POST">
						${this.inputComponent('name', 'text', 'Nome', 'Digite seu nome.')}
						${this.inputComponent('email', 'email', 'E-mail', 'Digite seu e-mail.')}
            ${this.selectComponent('state', states, 'Estado')}
            ${this.selectComponent('level', levels, 'Nível')}
						${this.alertsComponent()}
            <button class="btn btn-primary">Enviar</button>
          </form>
        `;
      }

			alertsComponent() {
				return `
					<div class="rd-leads-form-fail alert alert-danger hidden" role="alert">Alguma coisa deu errada! :/</div>
					<div class="rd-leads-form-done alert alert-success hidden" role="alert">Formulário enviado com sucesso! :D</div>
				`;
			}

			inputComponent(name, type, label, placeholder) {
				return `
					<div class="form-group">
						<label for="${name}">${label}</label>
						<input class="form-control" name="${name}" type="${type}" placeholder="${placeholder}" required>
					</div>
				`;
			}

      selectComponent(name, options, label) {
        let optionsList = '<option>Selecionar</option>';

        options.map((name) => {
          optionsList += `<option value="${name}">${name}</option>`;
        });

        return `
					<div class="form-group">
						<label for="level">${label}</label>
						<select class="form-control" name="${name}">${optionsList}</select>
					</div>
				`;
      }

    }

		$.fn.RDLeadsForm = function(options) {
			return this.each(() => {
				if (!$.data(this, 'plugin_RDLeadsForm')) {
					$.data(this, 'plugin_RDLeadsForm', new RDLeadsForm(this, options));
				}
			});
		};

})(jQuery);

},{}]},{},[1]);
