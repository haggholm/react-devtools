var {connectToDevTools} = require('react-devtools-core');
// Connect immediately with default options.
// If you need more control, use `react-devtools-core` directly instead of `react-devtools`.
if (process.env.SSL_CERT) {
  connectToDevTools({ protocol: 'wss' });
} else {
  connectToDevTools();
}
