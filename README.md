# insights-operator-web-ui

Web UI for insights operator instrumentation service

## Installation

Application is based on [insights-frontend-starter-app](https://github.com/RedHatInsights/insights-frontend-starter-app).

### Proxy

Container that provides ESI and routing tools.

1. Clone the Proxy

    ```sh
    git@github.com:RedHatInsights/insights-proxy.git
    ```

2. Install dependencies

    ```sh
    npm install
    ```

3. Setup the initial /etc/hosts entries (do this once)

    ```sh
    sudo bash scripts/patch-etc-hosts.sh
    ```

4. Pull/Update the proxy container

    ```sh
    bash scripts/update.sh
    ```

### NPM

For install all modules is enough to do in project folder:
```sh
npm install
```

### insights-operator-controller

Default URL of controller is `https://ci.foo.redhat.com:8080`, you can change it in file `./src/config.json`.

## Starting

1. Starting controller:
```sh
path/to/insights-operator-controller/run.sh
```

2. Starting proxy:
```sh
SPANDX_CONFIG=path/to/insights-frontend-starter-app/config/spandx.config.js sh path/to/insights-proxy/scripts/run.sh
```

3. Starting WebUI:
```sh
npm run start
```

Application can be found in `https://ci.foo.redhat.com:1337/insights/insights-operator` or `https://ci.foo.redhat.com:1337/apps/insights-operator`. If you are on Firefox, then first head to `https://sso.qa.redhat.com/` and accept the self-signed certificate.
