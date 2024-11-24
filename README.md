### make it RTL

1.  Make sure that in your index file in theme folder configuration, the direction: 'rtl' is properly set.

2.  put <Html lang="fa" dir='rtl'> in document file

3.  create 'rtlCach' file in lib directory:

        import createCache from '@emotion/cache';
        import stylisRTLPlugin from 'stylis-plugin-rtl';

        const rtlCache = createCache({
        key: 'rtl',
        stylisPlugins: [stylisRTLPlugin],
        });

        export default rtlCache;

4.  Wrap the App in CacheProvider:
    In your \_app.js or ThemeProvider component, apply the cache:

        import { CacheProvider } from '@emotion/react';
        import rtlCache from '../lib/rtlCache';

        export const ThemeProvider = ({ children }) => {
        return (
        <CacheProvider value={rtlCache}>
        {children}
        </CacheProvider>
        );
        };
