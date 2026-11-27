// PM2 process file for the production server.
//
// Run Next.js directly under Node, not through `bun run start`:
// - Under Bun 1.3 the server's heap grows without bound: each time Next.js
//   revalidates a stale fetch (the `cache: "force-cache"` + `revalidate: 60`
//   calls in src/lib/data), the fetched Response and its tee'd body stream
//   stay pinned by Bun's native side and are never collected; the events list
//   alone is about 0.5 MB per copy. The same build and traffic under Node
//   stay flat.
// - With `bun run start`, PM2 watches the `bun run` wrapper (about 10 MB),
//   not the Next.js process, so `max_memory_restart` could never fire.
//
// Start or replace:  pm2 delete teatar-td && pm2 start ecosystem.config.js && pm2 save
module.exports = {
  apps: [
    {
      name: "teatar-td",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3013",
      // Next.js 15.5 needs Node >= 18.18; /usr/local/bin/node on the server is 18.12.
      interpreter: "/home/uviplay/.nvm/versions/node/v22.23.4/bin/node",
      exec_mode: "fork",
      instances: 1,
      // Safety net: restart before a leak of any kind can starve the server.
      max_memory_restart: "2G",
      env: {
        NODE_ENV: "production",
        NEXT_TELEMETRY_DISABLED: "1",
      },
    },
  ],
};
