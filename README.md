Next Steps:

- Proper application loading with enzyme.

- Visualisation Model

- Chart models:
  - Bubble Chart
  - Donut Chart
  - Sunburst
  - Chord Diagram
  - Area Chart

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
  },
  "visualisation": {
    "type": "String"
  }
}
```
