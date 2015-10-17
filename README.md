# Node Root

Node Root helps you get away from dot hell like `require('../../../lib/')`

## Usage

Simply install via `npm install node-root -S`

If you have a project tree like this:

```bash
/your/project/home
├─library
│   └─components
│       └─header.jsx
└─node_modules
    └─node-root
```

you can easily locate that `header.jsx`

```javascript
import root from 'node-root'

import header from root('library/components/header.jsx')
```

The directory where you install `node-root` will be recognized as project's root, eg: `node_modules/other` is the root for `node_modules/other/node_modules/node-root`.

# License

MIT.