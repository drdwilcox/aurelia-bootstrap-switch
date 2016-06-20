System.register(['aurelia-framework', 'bootstrap-switch', 'bootstrap', 'jquery'], function (_export) {
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
        }, function (_bootstrapSwitch) {}, function (_bootstrap) {}, function (_jquery) {}],
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
//# sourceMappingURL=data:application/json;base64,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QUE0QiIsImZpbGUiOiJib290c3RyYXAtc3dpdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGJpbmRpbmdNb2RlLCBiaW5kYWJsZSwgQmluZGluZ0VuZ2luZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC1zd2l0Y2gnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcbmltcG9ydCAnanF1ZXJ5JztcclxuXHJcbkBiaW5kYWJsZSAoe1xyXG4gICAgbmFtZTogJ2NoZWNrZWQnLCBcclxuICAgIGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5XHJcbn0pXHJcbkBiaW5kYWJsZSAoe1xyXG4gICAgbmFtZTogJ2luaXQnLCBcclxuICAgIGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUub25lVGltZVxyXG59KVxyXG5AaW5qZWN0KEVsZW1lbnQsIEJpbmRpbmdFbmdpbmUpXHJcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBTd2l0Y2hDdXN0b21FbGVtZW50IHtcclxuICAgIEBiaW5kYWJsZSBkaXNhYmxlZFxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgYmluZGluZ0VuZ2luZSkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nRW5naW5lID0gYmluZGluZ0VuZ2luZTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kKCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSAkKHRoaXMuZWxlbWVudCkuZmluZCgnaW5wdXQnKTtcclxuXHJcbiAgICAgICAgbGV0IGluaXQgPSB7fTtcclxuICAgICAgICBpZiAodGhpcy5pbml0KSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oaW5pdCwgdGhpcy5pbml0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGluaXQuc3RhdGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpbml0LnN0YXRlID0gdGhpcy5jaGVja2VkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5pdC5kaXNhYmxlZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGluaXQuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbnB1dFxyXG4gICAgICAgICAgICAuYm9vdHN0cmFwU3dpdGNoKGluaXQpXHJcbiAgICAgICAgICAgIC5vbignc3dpdGNoQ2hhbmdlLmJvb3RzdHJhcFN3aXRjaCcsIChldmVudCwgc3RhdGUpID0+IHsgdGhpcy5jaGVja2VkID0gc3RhdGU7IH0pOyAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZFN1YnNjcmlwdGlvbiA9IHRoaXMuYmluZGluZ0VuZ2luZS5wcm9wZXJ0eU9ic2VydmVyKHRoaXMsICdkaXNhYmxlZCcpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5ib290c3RyYXBTd2l0Y2goJ2Rpc2FibGVkJywgbmV3VmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNoZWNrZWRTdWJzY3JpcHRpb24gPSB0aGlzLmJpbmRpbmdFbmdpbmUucHJvcGVydHlPYnNlcnZlcih0aGlzLCAnY2hlY2tlZCcpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5ib290c3RyYXBTd2l0Y2goJ3N0YXRlJywgbmV3VmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmQoKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5ib290c3RyYXBTd2l0Y2goJ2Rlc3Ryb3knKTtcclxuICAgICAgICB0aGlzLmRpc2FibGVkU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLmNoZWNrZWRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
