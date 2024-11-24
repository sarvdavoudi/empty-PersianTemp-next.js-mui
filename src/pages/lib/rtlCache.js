import createCache from '@emotion/cache';
import stylisRTLPlugin from 'stylis-plugin-rtl';

const rtlCache = createCache({
  key: 'rtl',
  stylisPlugins: [stylisRTLPlugin],
});

export default rtlCache;
