Next Steps:

- Proper application loading with enzyme.

- Visualisation Model

- Bundled visualisations:
  - Schema anomalies
  - Schema view
  - Unused indexes
  - RTSS

Tentative Visualisation Schema:

```json
{
  "name": "String",
  "source": {
    "type": "String",
    "database": "<Optional>String",
    "collection": "<Optional>String",
    "pipeline": "<Optional>Array"
  }
  "visualisation": {
    "type": "String"
  }
}
```
