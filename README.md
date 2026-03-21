Run these commands:
```
npm install
npx mikro-orm database:create 
```

You will get this error:
```
MetadataError: Only abstract entities were discovered, maybe you forgot to use @Entity() decorator? This can also happen when you have multiple `@mikro-orm/core` packages installed side by side.
    at Function.onlyAbstractEntitiesDiscovered (/tmp/reproduction/node_modules/@mikro-orm/core/errors.js:371:1)
    at MetadataValidator.inverse (/tmp/reproduction/node_modules/@mikro-orm/core/metadata/MetadataValidator.js:425:1)
    at MetadataDiscovery.t (/tmp/reproduction/node_modules/@mikro-orm/core/metadata/MetadataDiscovery.js:1977:1)
    at MetadataDiscovery.t (/tmp/reproduction/node_modules/@mikro-orm/core/metadata/MetadataDiscovery.js:1977:1)
    at MetadataDiscovery.t (/tmp/reproduction/node_modules/@mikro-orm/core/metadata/MetadataDiscovery.js:1977:1)
    at Function.init (/tmp/reproduction/node_modules/@mikro-orm/core/MikroORM.js:219:1)
    at async Object.handler (file:///tmp/reproduction/node_modules/@mikro-orm/cli/commands/CreateDatabaseCommand.js:9:17) {
  entity: undefined
}
```
