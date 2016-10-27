# Dynamic compile

There are three method to handle push window in `WindowViewService`:

- `pushWindow<T>(componentType: Type<T> | ComponentFactory<T>, useCache = false): T`  
  To push window via `pushWindow`, the component used here has to be list
  in `entryComponent` of `current module`.

  > Specifies a list of components that should be compiled when this module is defined.
  > For each component listed here, Angular will create a ComponentFactory
  > and store it in the ComponentFactoryResolver.

  Or, get component factory by your way.

  Set `useCache` truth, will find component factory from `WindowViewService` cached component factories.

- `pushDynamicWindow<T, U>(moduleType: Type<U>, componentType: Type<T>, cached = false): Promise<T>`  
  For totally dynamic compile, you can compile in run time through `pushDynamicWindow` with module and
  specific component type. Angular will cache module compiled, let third parameter by default when you
  call this method directly.
  
  Set `cachded` truth, `WindowViewService` will cached this component factory mapping with component type.

- `pushBareDynamicWindow<T>(componentType: Type<T>, options: NgModuleLike = {}): Promise<T>`  
  Create `NgModule` on the fly and load it in run time. Parameter `options` accept
  `declarations`, `imports`, `providers` and `id`.
  
  Because of anonymous module created in run time, Angular cannot cached it. To prevent repeatly compilation
  and declarations conflict, `WindowViewService` will cachded component factory.
  
  Manage lazy loading though clear module strategy is safer than creating module on the fly. There may be a
  disaster of unclear DI hierarchy and loading strategy.