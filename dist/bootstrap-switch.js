System.register(['aurelia-framework', 'bootstrap-switch'], function (_export) {
    'use strict';

    var inject, bindingMode, bindable, BindingEngine, BootstrapSwitchCustomElement;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            bindingMode = _aureliaFramework.bindingMode;
            bindable = _aureliaFramework.bindable;
            BindingEngine = _aureliaFramework.BindingEngine;
        }, function (_bootstrapSwitch) {}],
        execute: function () {
            BootstrapSwitchCustomElement = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(BootstrapSwitchCustomElement, [{
                    key: 'disabled',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                function BootstrapSwitchCustomElement(element, bindingEngine) {
                    _classCallCheck(this, _BootstrapSwitchCustomElement);

                    _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

                    this.element = element;
                    this.bindingEngine = bindingEngine;
                }

                _createDecoratedClass(BootstrapSwitchCustomElement, [{
                    key: 'bind',
                    value: function bind() {
                        var _this = this;

                        this.input = $(this.element).find('input');

                        var init = {};
                        if (this.init) {
                            Object.assign(init, this.init);
                        }

                        if (init.state === undefined) {
                            init.state = this.checked;
                        }
                        if (init.disabled === undefined) {
                            init.disabled = this.disabled;
                        }

                        this.input.bootstrapSwitch(init).on('switchChange.bootstrapSwitch', function (event, state) {
                            _this.checked = state;
                        });

                        this.disabledSubscription = this.bindingEngine.propertyObserver(this, 'disabled').subscribe(function (newValue, oldValue) {
                            _this.input.bootstrapSwitch('disabled', newValue);
                        });
                        this.checkedSubscription = this.bindingEngine.propertyObserver(this, 'checked').subscribe(function (newValue, oldValue) {
                            _this.input.bootstrapSwitch('state', newValue);
                        });
                    }
                }, {
                    key: 'unbind',
                    value: function unbind() {
                        this.input.bootstrapSwitch('destroy');
                        this.disabledSubscription.dispose();
                        this.checkedSubscription.dispose();
                    }
                }], null, _instanceInitializers);

                var _BootstrapSwitchCustomElement = BootstrapSwitchCustomElement;
                BootstrapSwitchCustomElement = inject(Element, BindingEngine)(BootstrapSwitchCustomElement) || BootstrapSwitchCustomElement;
                BootstrapSwitchCustomElement = bindable({
                    name: 'init',
                    defaultBindingMode: bindingMode.oneTime
                })(BootstrapSwitchCustomElement) || BootstrapSwitchCustomElement;
                BootstrapSwitchCustomElement = bindable({
                    name: 'checked',
                    defaultBindingMode: bindingMode.twoWay
                })(BootstrapSwitchCustomElement) || BootstrapSwitchCustomElement;
                return BootstrapSwitchCustomElement;
            })();

            _export('BootstrapSwitchCustomElement', BootstrapSwitchCustomElement);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC1zd2l0Y2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3NEQVlhLDRCQUE0Qjs7Ozs7Ozs7Ozt1Q0FaakMsTUFBTTs0Q0FBRSxXQUFXO3lDQUFFLFFBQVE7OENBQUUsYUFBYTs7O0FBWXZDLHdDQUE0Qjs7OztzQ0FBNUIsNEJBQTRCOztpQ0FDcEMsUUFBUTs7Ozs7QUFDRSx5QkFGRiw0QkFBNEIsQ0FFekIsT0FBTyxFQUFFLGFBQWEsRUFBRTs7Ozs7QUFDaEMsd0JBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLHdCQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztpQkFDdEM7O3NDQUxRLDRCQUE0Qjs7MkJBT2pDLGdCQUFHOzs7QUFDSCw0QkFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFM0MsNEJBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLDRCQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDWCxrQ0FBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNsQzs7QUFFRCw0QkFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtBQUMxQixnQ0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO3lCQUM3QjtBQUNELDRCQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQzdCLGdDQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7eUJBQ2pDOztBQUVELDRCQUFJLENBQUMsS0FBSyxDQUNMLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FDckIsRUFBRSxDQUFDLDhCQUE4QixFQUFFLFVBQUMsS0FBSyxFQUFFLEtBQUssRUFBSztBQUFFLGtDQUFLLE9BQU8sR0FBRyxLQUFLLENBQUM7eUJBQUUsQ0FBQyxDQUFDOztBQUVyRiw0QkFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUM1RSxTQUFTLENBQUMsVUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFLO0FBQy9CLGtDQUFLLEtBQUssQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3lCQUNwRCxDQUFDLENBQUM7QUFDUCw0QkFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUMxRSxTQUFTLENBQUMsVUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFLO0FBQy9CLGtDQUFLLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO3lCQUNqRCxDQUFDLENBQUM7cUJBQ1Y7OzsyQkFFSyxrQkFBRztBQUNMLDRCQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN0Qyw0QkFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3BDLDRCQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUM7cUJBQ3RDOzs7b0RBeENRLDRCQUE0QjtBQUE1Qiw0Q0FBNEIsR0FEeEMsTUFBTSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FDbEIsNEJBQTRCLEtBQTVCLDRCQUE0QjtBQUE1Qiw0Q0FBNEIsR0FMeEMsUUFBUSxDQUFFO0FBQ1Asd0JBQUksRUFBRSxNQUFNO0FBQ1osc0NBQWtCLEVBQUUsV0FBVyxDQUFDLE9BQU87aUJBQzFDLENBQUMsQ0FFVyw0QkFBNEIsS0FBNUIsNEJBQTRCO0FBQTVCLDRDQUE0QixHQVR4QyxRQUFRLENBQUU7QUFDUCx3QkFBSSxFQUFFLFNBQVM7QUFDZixzQ0FBa0IsRUFBRSxXQUFXLENBQUMsTUFBTTtpQkFDekMsQ0FBQyxDQU1XLDRCQUE0QixLQUE1Qiw0QkFBNEI7dUJBQTVCLDRCQUE0QiIsImZpbGUiOiJib290c3RyYXAtc3dpdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGJpbmRpbmdNb2RlLCBiaW5kYWJsZSwgQmluZGluZ0VuZ2luZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC1zd2l0Y2gnO1xyXG5cclxuQGJpbmRhYmxlICh7XHJcbiAgICBuYW1lOiAnY2hlY2tlZCcsIFxyXG4gICAgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXlcclxufSlcclxuQGJpbmRhYmxlICh7XHJcbiAgICBuYW1lOiAnaW5pdCcsIFxyXG4gICAgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lXHJcbn0pXHJcbkBpbmplY3QoRWxlbWVudCwgQmluZGluZ0VuZ2luZSlcclxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFN3aXRjaEN1c3RvbUVsZW1lbnQge1xyXG4gICAgQGJpbmRhYmxlIGRpc2FibGVkXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBiaW5kaW5nRW5naW5lKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLmJpbmRpbmdFbmdpbmUgPSBiaW5kaW5nRW5naW5lO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmQoKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9ICQodGhpcy5lbGVtZW50KS5maW5kKCdpbnB1dCcpO1xyXG5cclxuICAgICAgICBsZXQgaW5pdCA9IHt9O1xyXG4gICAgICAgIGlmICh0aGlzLmluaXQpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihpbml0LCB0aGlzLmluaXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoaW5pdC5zdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGluaXQuc3RhdGUgPSB0aGlzLmNoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbml0LmRpc2FibGVkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaW5pdC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlucHV0XHJcbiAgICAgICAgICAgIC5ib290c3RyYXBTd2l0Y2goaW5pdClcclxuICAgICAgICAgICAgLm9uKCdzd2l0Y2hDaGFuZ2UuYm9vdHN0cmFwU3dpdGNoJywgKGV2ZW50LCBzdGF0ZSkgPT4geyB0aGlzLmNoZWNrZWQgPSBzdGF0ZTsgfSk7ICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmRpc2FibGVkU3Vic2NyaXB0aW9uID0gdGhpcy5iaW5kaW5nRW5naW5lLnByb3BlcnR5T2JzZXJ2ZXIodGhpcywgJ2Rpc2FibGVkJylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LmJvb3RzdHJhcFN3aXRjaCgnZGlzYWJsZWQnLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZFN1YnNjcmlwdGlvbiA9IHRoaXMuYmluZGluZ0VuZ2luZS5wcm9wZXJ0eU9ic2VydmVyKHRoaXMsICdjaGVja2VkJylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LmJvb3RzdHJhcFN3aXRjaCgnc3RhdGUnLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZCgpIHtcclxuICAgICAgICB0aGlzLmlucHV0LmJvb3RzdHJhcFN3aXRjaCgnZGVzdHJveScpO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
