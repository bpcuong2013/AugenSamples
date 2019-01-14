
You can include the configuration into your code like this:

**ES2015 Modules**

```js
import config from 'config';
```

**Common JS**

Due to Babel6 we need to append `.default`.

```js
let config = require('config').default;
```

**Example**

```javascript
import React from 'react';
import config from 'config';

class MyComponent extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);
    let currentAppEnv = config.appEnv;
  }
}
```
