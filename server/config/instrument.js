// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://417522f2d8819d2e504ccbe270e0cffe@o4509648294313984.ingest.us.sentry.io/4509648298639360",
  integrations: [nodeProfilingIntegration(), Sentry.mongooseIntegration()],
});

Sentry.profiler.startProfiler();

Sentry.startSpan(
  {
    name: "My First Transaction",
  },
  () => {
    // the code executing inside the transaction
  }
);

// Setting this option to true will send default PII data to Sentry.
// For example, automatic IP address collection on events
