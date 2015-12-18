#Getting Started

Re-usable [Aurelia](http://aurelia.io) component for the [bootstrap-switch](http://www.bootstrap-switch.org/) library. 

##Using
The component only exposes 3 properties: checked, disabled, and init.

* checked is two-way bound
* disabled is one-way bound
* init is one-time bound. Bind it to an object that contains properties matching those of the bootstrap-switch object.

Example usage:

```html
<bootstrap-switch checked.bind="viewmodel.property" disabled.bind="viewmodel.disableIt", init.bind="{size: 'small', labelText: 'Use this feature'}"></bootstrap-switch>
```

