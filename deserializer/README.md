# @genfeedai/deserializer

JSON:API deserializer used by Genfeed clients.

## Install

```bash
npm install @genfeedai/deserializer
```

## Usage

```ts
import { getDeserializer, isDeserializerRuntime } from '@genfeedai/deserializer';

const result = getDeserializer(document);
if (!isDeserializerRuntime(result)) {
  // typed object/collection
}
```
