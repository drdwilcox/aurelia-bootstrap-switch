import {inject, bindingMode, bindable, BindingEngine} from 'aurelia-framework';
import 'bootstrap-switch';
import 'bootstrap';
import 'jquery';

@bindable ({
    name: 'checked', 
    defaultBindingMode: bindingMode.twoWay
})
@bindable ({
    name: 'init', 
    defaultBindingMode: bindingMode.oneTime
})
@inject(Element, BindingEngine)
export class BootstrapSwitchCustomElement {
    @bindable disabled
    constructor(element, bindingEngine) {
        this.element = element;
        this.bindingEngine = bindingEngine;
    }

    bind() {
        this.input = $(this.element).find('input');

        let init = {};
        if (this.init) {
            Object.assign(init, this.init);
        }
        
        if (init.state === undefined) {
            init.state = this.checked;
        }
        if (init.disabled === undefined) {
            init.disabled = this.disabled;
        }

        this.input
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
        this.checkedSubscription.dispose();
    }
}