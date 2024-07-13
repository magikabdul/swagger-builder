# Build setup action

## Overview

Action to install needed dependencies and handles caching on demand for Otter project.
Including :

* nodejs 18

## Task options

See [Action specifications](./action.yml) directly for more information about the supported parameters.

## Usage example

```yaml
- name: Setup
  id: setup
  uses: AmadeusITGroup/otter/tools/github-actions/setup@8
```
