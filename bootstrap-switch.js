import {inject, bindingMode, bindable, BindingEngine} from 'aurelia-framework';
import 'bootstrap-switch';

@inject(Element, BindingEngine)
@bindable ({
    name: 'checked', 
    defaultBindingMode: bindingMode.twoWay
})
export class BootstrapSwitchCustomElement {
    @bindable size
    @bindable disabled
    @bindable labelText
    @bindable onText
    @bindable offText
    constructor(element, bindingEngine) {
        this.element = element;
        this.bindingEngine = bindingEngine;
    }

    bind() {
        this.input = $(this.element).find('input');

        let init = {
            state: this.checked,
            disabled: this.disabled
        };
        if (this.size) {
            init.size = this.size;
        }
        if (this.labelText) {
            init.labelText = this.labelText;
        }
        if (this.onText) {
            init.onText = this.onText;
        }
        if (this.offText) {
            init.offText = this.offText;
        }

        this.input
            //.bootstrapSwitch('state', this.checked)
            .bootstrapSwitch(init)
            .on('switchChange.bootstrapSwitch', (event, state) => { this.checked = state; });        
        
        this.disabledSubscription = this.bindingEngine.propertyObserver(this, 'disabled')
            .subscribe((newValue, oldValue) => {
                this.input.bootstrapSwitch('disabled', newValue);
            });
        this.checkedSubscription = this.bindingEngine.propertyObserver(this, 'checked')
            .subscribe((newValue, oldValue) => {
                this.input.bootstrapSwitch('state', newValue);
            });
    }

    unbind() {
        this.input.bootstrapSwitch('destroy');
        this.disabledSubscription.dispose();
    }
}